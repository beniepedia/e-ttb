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
        try {
            WhatsApp::sendMessage([
                'to' => $request->to,
                'text' => $request->text,
            ]);

            return response()->json(['success' => true], 200);
        } catch (Exception $e) {
            return response()->json(['success' => false], 400);
        }
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
