<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Receipts;
use Illuminate\Http\Request;
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

        if ($location && !empty($location)) {
            $receipts->customer->update(["location" => $location]);
        }
        return response()->json($receipts);
    }
}
