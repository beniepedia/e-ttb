<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class WhatsappService
{

    public $serverUrl;
    protected $sessionName;

    public function __construct()
    {
        $this->serverUrl = config('app_setting.whatsapp_server') ?? env("WHATSAPP_SERVER");
        $this->sessionName = config("app_setting.whatsapp_session_name") ?? '';
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
            'session' => $this->sessionName,
        ])->$method("$this->serverUrl/$url", $data);

        if (!$response->ok()) {
            $message = $response->json()["message"];
            Log::error("Gagal mengirim pesan whatsapp", ["error" => $message]);
            return [
                'success' => false,
                'message' => $message,
                "status_code" => $response->status()
            ];
        }

        $respon = $response->json()['data'];
        Log::info("Berhasil mengirim pesan whatsapp ke", ['nomor' => $respon['remoteJid']]);
        return [
            'success' => true,
            "message" => "Message send succesfully",
            'data' => [
                'id' => $respon['id'],
                'remoteJid' => $respon['remoteJid']
            ],
        ];
    }
}
