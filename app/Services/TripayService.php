<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class TripayService
{

    protected $isProduction;
    protected $apiKey = config('tripay.api_key');
    private $privateKey = config('tripay.private_key');
    private $merchantCode = config('tripay.merchant_code');

    public function __construct()
    {
        $this->isProduction = env("APP_ENV") == "local" ? 'api-sandbox' : 'api';
        // $this->apiKey = 'DEV-OkgxviLKuzNzotoM8iUOwqeTD9vArQ3xEiwIpg58';
    }

    private function request()
    {
        return Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
        ]);
    }

    // private function isProduction()
    // {
    //     return $this->production ? 'api' : 'api-sandbox';
    // }

    public function getChannel()
    {
        $base_url = "https://tripay.co.id/$this->isProduction/merchant/payment-channel";

        $request = $this->request()->get($base_url);

        return $request->json();
    }

    public function create_transaction(array $data)
    {
        $base_url = "https://tripay.co.id/$this->isProduction/transaction/create";

        $request = $this->request()->post($base_url, $data);

        if (!$request->ok()) {
            return response()->json([
                'success' => false,
            ]);
        }

        return $request->json();
    }

    public function create_signature(string $merchantRef, int $amount): String
    {
        return hash_hmac('sha256', $this->merchantCode . $merchantRef . $amount, $this->privateKey);
    }

    public function create_signature_validation($json): String
    {
        return hash_hmac('sha256', $json, $this->privateKey);
    }
}
