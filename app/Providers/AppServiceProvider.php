<?php

namespace App\Providers;

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
        $this->app->config->set("app.debug", config("app_setting.app_debug", false));
        $this->app->config->set("app.env", config("app_setting.is_develop", "production"));
        $this->app->config->set("services.telegram-bot-api.token", config("app_setting.telegram_bot_token"));
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
