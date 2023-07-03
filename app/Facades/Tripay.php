<?php

namespace App\Facades;

use App\Services\TripayService;
use Illuminate\Support\Facades\Facade;

class Tripay extends Facade
{

    protected static function getFacadeAccessor()
    {
        return TripayService::class;
    }
}
