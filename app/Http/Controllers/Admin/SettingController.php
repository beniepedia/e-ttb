<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $app_setting = config('app_setting') ?? null;
        return Inertia::render('Setting/SettingIndex', ['app_setting' => $app_setting]);
    }

    public function store(Request $request)
    {

        foreach ($request->all() as $key => $value) {

            $setting = Setting::where('key', $key)->first();

            if ($setting) {
                $setting->update(['value' => $value]);
            } else {
                Setting::create([
                    'key' => $key,
                    'value' => $value
                ]);
            }
            // $query->save();
        }
        return Redirect::back();
    }
}
