<?php

namespace App\Http\Controllers;

use App\Facades\Tripay;
use App\Models\Promotion;
use App\Models\Receipts;
use App\Models\Transaction;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;

class TransactionController extends Controller
{
    public function __construct()
    {
        // Set your Merchant Server Key
        // \Midtrans\Config::$serverKey = config("midtrans.midtrans_server_key");
        // // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        // \Midtrans\Config::$isProduction = false;
        // // Set sanitization on (default)
        // \Midtrans\Config::$isSanitized = true;
        // // Set 3DS transaction for credit card to true
        // \Midtrans\Config::$is3ds = true;
    }

    public function index(Receipts $receipts)
    {
        // abort(404);
        $receipts->load('transaction');
        $payment_channel = Tripay::getChannel();
        return Inertia::render("Client/PaymentOnline", [
            'receipt' => $receipts,
            'payment_channel' => $payment_channel
        ]);
    }

    public function get_token(Request $request)
    {

        $request->validate([
            "full_name" => 'required|min:4',
            "email" => 'required|email',
            "address" => 'required|min:10',
            "payment_method" => 'required',
        ], [
            "min" => ":attribute minimal :min karakter",
            "email.required" => "Alamat email tidak boleh kosong",
            "email" => "Format email yang dimasukkan tidak valid",
            "payment_method.required" => "Pilih metode pembayaran",
        ], [
            'full_name' => 'Nama lengkap',
            'email' => 'Email',
            'address' => 'Alamat lengkap',
        ]);

        try {
            $receipt = Receipts::find($request->receipt_id);
            $customer = $receipt->customer;

            $invoice_number = "INV-" . time();

            $data = [
                'method'         => $request->payment_method,
                'merchant_ref'   => $invoice_number,
                'amount'         => $request->amount_total,
                'customer_name'  => $request->full_name,
                'customer_email' => $request->email,
                'customer_phone' => $customer->phone,
                'order_items'    => [
                    [
                        'name'        => ucfirst($receipt->repair) . " " . strtolower($receipt->category) . "-" . strtoupper($receipt->barang),
                        'price'       => $request->amount_total,
                        'quantity'    => 1,
                    ],
                ],
                'signature'    => Tripay::create_signature($invoice_number, $request->amount_total)
            ];

            DB::beginTransaction();

            $createTransaction = Tripay::create_transaction($data);


            if ($createTransaction['success']) {
                Transaction::create([
                    'invoice_number' => $invoice_number,
                    'receipt_id' => $receipt->id,
                    'signature' => $data['signature'],
                    'payload' => $createTransaction['data'],
                    'expired_time' => $createTransaction['data']['expired_time'],
                    'amount' => $request->amount,
                    'amount_total' => $request->amount_total,
                    'discount' => $request->discount,
                ]);

                $customer->update([
                    'full_name' => $request->full_name,
                    'email' => $request->email,
                    'address' => $request->address
                ]);

                DB::commit();
                Log::info("$customer->name berhasil melakukan permintaan permbayaran tanda terima dengan no register $receipt->receipt_code", ["customer_id" => $customer->id, "receipt_code" => $receipt->receipt_code]);
                return redirect()->back();
            } else {
                return redirect()->back()->with("message", ["type" => "error", "message" => "Pembayaran gagal dilakukan. Silahkan ulang atau coba beberapa saat lagi."]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            Log::error("$customer->name gagal melakukan permintaan pembayaran tanda terima dengan no register $receipt->receipt_code", ["customer_id" => $customer->id, "receipt_code" => $receipt->receipt_code, 'error' => $e->getMessage()]);
            return Redirect::back()->with("message", ["type" => "error", "message" => "Pembayaran gagal dilakukan. Silahkan ulang atau coba beberapa saat lagi."]);
        }
    }

    public function promo(Request $request)
    {
        $request->validate([
            'promo_code' => 'required'
        ], [
            'required' => 'Masukkan kode promo!'
        ]);


        $promotion = Promotion::where('code', $request->promo_code)->first();
        $receipt = Receipts::find($request->receipt_id);

        if (!$promotion || !$receipt) {
            return Response::json(['message' => "Kode promo yang anda masukkan tidak ditemukan!"], 404);
        }

        $discountValue = $promotion->value;

        $countDiscount = ($receipt->cost / 100) * $discountValue;

        return Response::json(['success' => true, 'message' => "Selamat anda mendapatkan potongan harga sebesar Rp. " . number_format($countDiscount), 'value' => $countDiscount]);
    }
}
