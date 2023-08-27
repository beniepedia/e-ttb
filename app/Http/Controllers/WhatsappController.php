<?php

namespace App\Http\Controllers;

use App\Facades\WhatsApp;
use App\Models\Customers;
use Exception;
use Inertia\Inertia;
use Illuminate\Http\Request;

class WhatsappController extends Controller
{

    protected $response = [
        'success' => false,
        'message' => 'Server not active',
    ];

    public function index()
    {
        return Inertia::render(
            'Whatsapp/IndexWhatsapp',
            [
                'data' => [
                    'customers' => Customers::selectOption(),
                ]
            ]
        );
    }


    public function sendMessage(Request $request)
    {
        // try {



        //     return response()->json(['success' => true], 200);
        // } catch (Exception $e) {
        //     return response()->json(['success' => false], 400);
        // }
        $send = WhatsApp::sendMessage([
            'to' => $request->to,
            'text' => $request->text,
        ]);

        return response()->json($send);
    }


    public function sendMedia(Request $request)
    {
        $send = WhatsApp::sendMedia([
            'to' => $request->to,
            'text' => $request->text ?? "",
            "media" => $request->media
        ]);

        return response()->json($send);
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
