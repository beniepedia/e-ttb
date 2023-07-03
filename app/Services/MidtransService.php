<?php

namespace App\Services;

class MidtransService
{

    protected $server_key = env('SERVER_KEY_MIDTRANS');
    protected $merchant_id;
    protected $client_key;

    const SANDBOX = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
    const PRODUCTION = 'https://app.midtrans.com/snap/v1/transactions';

    private static function initialize()
    {
        $api_url = '';
        if (env('APP_ENV') !== 'production') {
            $api_url = self::SANDBOX;
        } else {
            $api_url = self::PRODUCTION;
        }

        return $api_url;
    }

    private static function auth(): string
    {
        return base64_encode(self::$server_key);
    }

    public function getSnap()
    {
    }
}
