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

    private function Request($method, $url, $data = null)
    {
        // try {
        $response = Http::$method(join(DIRECTORY_SEPARATOR, [$this->serverUrl, $url]), $data);

        return $response;

        $result = ['success' => true, 'message' => ''];

        if ($response->status() == 200) {
            $resData = (array)$response->json();

            if (!empty($resData['success'])) {
                $result['success'] = true;
                $result['message'] = $resData['message'];
            } else {
                $result['success'] = false;
            }
        } else {
            Log::error('Gagal mengirim pesan whatsapp. Server whatsapp tidak online atau alamat server salah.');
            $result['success'] = false;
        }

        return $result;
    }
}
