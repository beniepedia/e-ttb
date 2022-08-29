<?php

namespace App\Http\Controllers;

use App\Jobs\SendReceiptWhatsappJob;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;


class WhatsappController extends Controller
{

    protected $response = [
        'success' => false,
        'message' => 'Server not active',
    ];

    public function index()
    {

        // dispatch(new SendReceiptWhatsappJob('2408202253-33', '6282174416077'));

        return Inertia::render(
            'Whatsapp/WhatsappIndex',
            [
                'session' => Cache::get('session') ?? ''
            ]
        );
    }

    public function store(Request $request)
    {
        Cache::put('session', $request->input('session'));

        return back();
    }

    public function sendMessage(Request $request)
    {

        $req = send_wa($request->id, $request->message);

        return $req;
    }

    public function addSession(Request $request)
    {
        try {
            $addSession = Http::post(env('WHATSAPP_SERVER') . '/sessions/add', [
                'id' => $request->sessname,
                'isLegacy' => false
            ]);

            Cache::forever('session', $request->sessname);

            return response($addSession);
        } catch (\Exception $e) {
            return response($this->response, 500);
        }
    }

    public function status(Request $request)
    {
        try {
            $result = Http::get(env('WHATSAPP_SERVER') . '/sessions/status/' . $request->sessname);
            return response($result);
        } catch (\Exception $e) {
            return response($this->response, 500);
        }
    }

    public function find(Request $request)
    {
        try {
            $result = Http::get(env('WHATSAPP_SERVER') . '/sessions/find/' . $request->sessname);
            return response($result);
        } catch (\Exception $e) {
            return response($this->response, 500);
        }
    }

    public function delete(Request $request)
    {
        try {

            $response = Http::delete(env('WHATSAPP_SERVER') . '/sessions/delete/' . $request->sessname);

            Cache::forget('session');

            return response($response);
        } catch (\Exception $e) {
            return response($this->response, 500);
        }
    }
}
