<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Receipts;
use App\Notifications\NotificationLocationCustomerToAdmin;
use App\Notifications\NotificationTelegramToAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class StatusController extends Controller
{
    public function check_status(Request $request)
    {

        $receipt = Receipts::with(['transaction'])->where("receipt_code", $request->only("receipt_code"))->first();

        $transaction = $receipt->transaction ?? null;

        $status = $transaction->transaction_status ?? null;

        if ($status && $status == "UNPAID" || $status == "EXPIRED" || $status == "FAILED") {
            return Redirect::to(route("payment", $receipt->receipt_code));
        }


        if ($receipt) {
            session()->put("customer_id", $receipt->customer_id);
            $this->updateCustomerLocation($receipt->customer);
            Notification::send('', new NotificationTelegramToAdmin($receipt));
        }

        $canPay = !$transaction ? true : false;

        return Inertia::render('Client/StatusCheck', [
            'receipt' => $receipt,
            'filters' => $request->all("receipt_code"),
            'can_pay' => $canPay,
        ]);
    }

    private function getLocation($lat, $lon)
    {
        $request = Http::get("https://nominatim.openstreetmap.org/reverse?format=json&lat=$lat&lon=$lon");

        if ($request->ok()) {
            return $request->json();
        }

        return null;
    }

    private function updateCustomerLocation($customer): void
    {
        $location = json_decode(request()->header("location"));
        if (
            !empty($location) &&
            !empty($location->latitude) &&
            !empty($location->longitude)
        ) {

            $response = $this->getLocation($location->latitude, $location->longitude);
            if ($response) {
                Notification::send('', new NotificationLocationCustomerToAdmin($location->latitude, $location->longitude));
                $customer->update(["location" => $response]);
            }
        }
    }
}
