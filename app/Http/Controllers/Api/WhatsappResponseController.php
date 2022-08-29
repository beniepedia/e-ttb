<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customers;
use Illuminate\Http\Request;

class WhatsappResponseController extends Controller
{
    //
    public function getStatus(Customers $customers, Request $request)
    {
        try {
            if (!$id = $request->id) return $this->_response(401, message: 'Data dibututh kan');

            $data = $customers->query()->withWhereHas('receipts', function ($query) {
                $query->where('isTaken', 1);
            })->where('whatsapp', $id)->first();

            // $result = $data->map(function ($customer) {

            //     $customer->receipts[0]->id;
            // });

            if (!$data) return $this->_response(404, message: 'Data Not Found');

            return $this->_response(200, $data);
        } catch (\Throwable $e) {
            $this->_response(500, 'failed');
        }
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
