<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SettingController extends Controller
{

    public function index()
    {
        $allSetting = config('app_setting') ?? null;
    }

    public function store(Request $request)
    {
        $query = new Setting();
        foreach ($request->all() as $key => $value) {
            $setting = $query->firstWhere('key', $key);

            if ($setting) {
                $setting->value = $value;
                $setting->save();
            } else {
                $query->key = $key;
                $query->value = $value;
                $query->save();
            }
        }

        return Redirect::json(['success' => true]);
    }
}
