<?php

namespace App\Http\Controllers;

use App\Facades\Tripay;
use App\Models\Transaction;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class TripayCallbackController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $callBackSignature = $request->server("HTTP_X_CALLBACK_SIGNATURE") ?? '';
        $callbackEvent = $request->server("HTTP_X_CALLBACK_EVENT") ?? '';

        $json = $request->getContent();

        // $signatur = hash_hmac('sha256', $json, 'lkEER-BsJro-XdEOe-UXvA3-EHBXH');
        $signature = Tripay::create_signature_validation($json);

        if ($signature !== $callBackSignature) {
            return Response::json(['success' => false, 'message' => 'Invalid signature.']);
        }

        if ((!$callbackEvent == "payment_status")) {
            return Response::json(['success' => false, 'message' => 'Request Invalid']);
        }

        if (JSON_ERROR_NONE !== json_last_error()) {
            return Response::json([
                'success' => false,
                'message' => 'Invalid data sent by tripay',
            ]);
        }

        $data = json_decode($json);

        try {
            $invoice = $data->merchant_ref;

            $transaction = Transaction::where("invoice_number", $invoice)->where('transaction_status', 'UNPAID')->first();
            if ($data->is_closed_payment === 1) {

                if (!$transaction) {
                    return Response::json(['success' => false, 'message' => 'Not Found!'], 404);
                }

                $status = strtoupper((string) $data->status);

                if ($status === "PAID" || $status === "FAILED" || $status === "EXPIRED") {
                    $transaction->transaction_status = $status;

                    $payload = $transaction->payload;
                    $payload['status'] = $status;
                    $transaction->payload = $payload;

                    $transaction->updated_at = now();
                    $transaction->save();
                } else {
                    return Response::json([
                        'success' => false,
                        'message' => 'Unrecognized payment status',
                    ]);
                }

                Log::info(
                    "Response callback tripay berhasil",
                    [
                        'invoice' => $request->merchant_ref,
                        'customer' => $transaction->payload['customer_name']
                    ]
                );
                return Response::json(['success' => true]);
            }
        } catch (Exception $e) {
            Log::error("Error response callback dari tripay.com", ['error' => $e->getMessage(), 'invoice' => $request->merchant_ref, 'customer' => $transaction->payload['customer_name']]);
            return response(false);
        }
    }
}
