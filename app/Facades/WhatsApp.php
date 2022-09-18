<?php

namespace App\Facades;

use App\Services\WhatsappService;
use Illuminate\Support\Facades\Facade;

class WhatsApp extends Facade
{

    protected static function getFacadeAccessor()
    {
        return WhatsappService::class;
    }
}
