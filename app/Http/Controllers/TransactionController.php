<?php

namespace App\Http\Controllers;

use App\Models\Receipts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = config("midtrans.midtrans_server_key");
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;
    }

    public function index(Receipts $receipts)
    {
        abort(404);
        return Inertia::render("Client/PaymentOnline", compact('receipts'));
    }

    public function get_token(Request $request)
    {

        $request->validate([
            "full_name" => 'required|min:4',
            "email" => 'required|email',
            "address" => 'required|min:10'
        ], [
            "min" => ":attribute minimal :min karakter",
            "email" => "Format email yang dimasukkan tidak valid",
        ], [
            'full_name' => 'Nama lengkap',
            'email' => 'Email',
            'address' => 'Alamat lengkap',
        ]);

        $receipt = Receipts::find($request->receipt_id);
        $receipt['cost'] = 20000;
        $invoice_number = "INV-" . time();
        $detail_transaction = [
            // "enabled_payments" => ["gopay"],
            'transaction_details' => [
                'order_id' => $invoice_number,
                'gross_amount' => intval($receipt->cost),
            ],
            "item_details" => [
                [
                    "id" => $receipt->receipt_code,
                    "price" => intval($receipt->cost),
                    "quantity" => 1,
                    "name" => "$receipt->category $receipt->barang",
                ]
            ],
            "customer_details" => [
                "first_name" => $request->full_name,
                "last_name" => '',
                "email" => $request->email,
                "phone" => $request->phone,
                "billing_address" => [
                    "first_name" => $request->full_name,
                    "last_name" => '',
                    "email" => $request->email,
                    "phone" => $request->phone,
                    "address" => $request->address
                ]
            ]
        ];

        // $snapToken = \Midtrans\Snap::getSnapToken($detail_transaction);
        $paymentUrl = \Midtrans\Snap::createTransaction($detail_transaction);

        if ($paymentUrl->token) {
            return Inertia::location($paymentUrl->redirect_url);
        }

        // return response()->json(['token' => $snapToken]);
    }
}
