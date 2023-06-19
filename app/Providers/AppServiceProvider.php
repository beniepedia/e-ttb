<?php

namespace App\Providers;

use App\Models\Setting;
use App\Services\WhatsappService;
use Illuminate\Support\Facades\URL;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::share([
            'manifest' => json_decode(file_get_contents(public_path('manifest.json')), true),
            'serviceWorker' => file_get_contents(public_path('service-worker.js')),
        ]);
    }
}
