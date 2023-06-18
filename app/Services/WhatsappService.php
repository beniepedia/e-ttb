<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class WhatsappService
{

    public $serverUrl;

    public function __construct()
    {
        $this->serverUrl = env("WHATSAPP_SERVER");
    }

    public function send(array $data)
    {
        return $this->Request('post', 'send-message', $data);
    }

    public function sendMessage(array $data)
    {
        return $this->Request('post', 'send-message', $data);
    }

    public function sendMedia(array $data)
    {
        return $this->Request('post', 'send-media', $data);
    }

    public function connect()
    {
        return $this->Request('post', 'connect');
    }

    public function status()
    {
        $req = $this->Request('post', 'status');

        if ($req['success']) return true;
    }

    public function logout()
    {
        return $this->Request('delete', 'logout');
    }

    private function Request($method, $url, $data = [])
    {
        // try {
        $response = Http::withHeaders([
            'accept' => 'application/json',
            'session' => 'ettb'
        ])->$method("$this->serverUrl/$url", $data);

        if (!$response->ok()) {
            $message = $response->json()["message"];
            Log::error("Gagal mengirim pesan whatsapp", ["error" => $message]);
            return [
                'success' => false,
                'message' => $message,
                'error_code' => $response->status()
            ];
        }

        $respon = $response->json()['data'];
        Log::info("Berhasil mengirim pesan whatsapp ke", ['nomor' => $respon['remoteJid']]);
        return [
            'success' => true,
            'data' => [
                'id' => $respon['id'],
                'remoteJid' => $respon['remoteJid']
            ],
            'error_code' => $response->status()
        ];
    }
}
