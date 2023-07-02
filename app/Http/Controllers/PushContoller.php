<?php

namespace App\Http\Controllers;

use App\Models\Customers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class PushContoller extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'endpoint'    => 'required',
            'keys.auth'   => 'required',
            'keys.p256dh' => 'required'
        ]);
        $endpoint = $request->endpoint;
        $token = $request->keys['auth'];
        $key = $request->keys['p256dh'];

        $user = Auth::user();
        $customerId = session("customer_id");

        if ($user) {
            $user->updatePushSubscription($endpoint, $key, $token);
        } elseif ($customerId) {
            $customer = Customers::find($customerId);
            $customer->updatePushSubscription($endpoint, $key, $token);
        } else {
            return Response::json(['success' => false], 404);
        }

        return Response::noContent();
    }
}
