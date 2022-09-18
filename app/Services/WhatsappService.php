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

        return $this->Request('post', 'status');
    }

    public function logout()
    {
        return $this->Request('delete', 'logout');
    }

    private function Request($method, $url, $data = null)
    {
        try {
            $response = Http::$method(join(DIRECTORY_SEPARATOR, [$this->serverUrl, $url]), $data);
            return $response->json();
        } catch (\Throwable $exeption) {
            Log::error($exeption->getMessage());
            return response()->json('eroor', 500);
        }
    }
}
