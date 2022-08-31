<?php

namespace App\Http\Controllers\Api;

use App\Models\Receipts;
use App\Models\Customers;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WhatsappResponseController extends Controller
{
    //
    public function getStatus(Customers $customers, Request $request)
    {
        try {
            if (!$id = $request->id) return $this->_response(401, message: 'Data dibututh kan');

            $data = $customers->query()->withWhereHas('receipts', function ($query) {
                $query->where('isTaken', 0);
            })->where('whatsapp', $id)->first();

            if (!$data) return $this->_response(404, message: 'Data Not Found');

            return $this->_response(200, $data);
        } catch (\Throwable $e) {
            $this->_response(500, 'failed');
        }
    }

    public function getDetail(Request $request)
    {
        $receipt = Receipts::where('receipt_code', $request->receipt_code)->first();
        if (!$request->receipt_code || empty($receipt)) return $this->_response(404, message: 'Not Found');

        // $data
        $kelengkapan = $receipt->kelengkapan ? Arr::join($receipt->kelengkapan, ', ') : 'Tidak ada';
        $pelanggan = ucfirst($receipt->customer->name);
        $user = ucfirst($receipt->user->name);
        $date = now()->parse($receipt->delivery_date);

        $tanggal = format_date($date, "l, d F Y");
        $cost = $receipt->cost == 0 ? 'Belum ada biaya' : number_format($receipt->cost);
        $barang = ucfirst($receipt->category) . ' ' . strtoupper($receipt->barang);

        $message  = "*DETAIL TTB $request->receipt_code*\n\n";
        $message .= "No. Kartu : $receipt->receipt_number\n";
        $message .= "Tgl Masuk : $tanggal\n";
        $message .= "Penerima : $user\n";
        $message .= "Customer : $pelanggan\n";
        $message .= "Barang : $barang\n";
        $message .= "Kelengkapan : $kelengkapan\n";
        $message .= "Kerusakan : $receipt->kerusakan\n";
        $message .= "Biaya : $cost\n\n";
        $message .= "------------------------------------------\n";
        $message .= "*Info Lanjut Hub :* \n";
        $message .= "HP : 08116407788\n\n";

        return $this->_response(200, $message);
    }

    private function _response(
        Int $status_code = 200,
        $data = [],
        String $message = 'Success',
    ) {
        $result = [
            'status_code' => $status_code,
            'message' => $message,
            'data' => $data,
        ];

        return response()->json($result, $status_code);
    }
}
