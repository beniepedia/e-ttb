<?php

namespace App\Http\Controllers;

use App\Facades\WhatsApp;
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
        return Inertia::render(
            'Whatsapp/WhatsappIndex',
        );
    }


    public function sendMessage(Request $request)
    {

        $req = WhatsApp::send([
            'number' => $request->id,
            'message' => $request->message,
        ]);

        return $req;
    }


    public function status()
    {
        return WhatsApp::status();
    }

    public function connect()
    {
        return WhatsApp::connect();
    }

    public function logout()
    {
        return WhatsApp::logout();
    }
}
