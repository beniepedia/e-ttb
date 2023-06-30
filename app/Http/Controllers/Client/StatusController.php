<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Receipts;
use App\Notifications\NotificationLocationCustomerToAdmin;
use App\Notifications\NotificationTelegramToAdmin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class StatusController extends Controller
{
    public function check_status()
    {
        return Inertia::render('Client/StatusCheck');
    }

    public function check(Receipts $receipts, Request $request)
    {
        $location = $request->location;

        Notification::send('', new NotificationTelegramToAdmin($receipts));

        if ($location && !empty($location)) {

            Notification::send('', new NotificationLocationCustomerToAdmin($location['lat'], $location['lon']));
            $receipts->customer->update(["location" => $location]);
        }

        $receipts->load("transaction");

        return response()->json($receipts);
    }
}
