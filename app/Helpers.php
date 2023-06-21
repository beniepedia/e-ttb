<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

if (!function_exists('make_ttb')) {
    function make_ttb(String $id, String $number, String $customer)
    {

        try {

            $path = public_path('images/ttb');

            if (!File::isDirectory($path)) {
                File::makeDirectory($path, 0777, true, true);
            }


            $qrcode = base64_encode(QrCode::format('png')
                ->size(170)
                ->errorCorrection('Q')
                // ->encoding('UTF-8')
                ->eyeColor(0, 255, 0, 76, 141, 91, 234)
                ->color(141, 91, 234)
                ->generate($id));

            $template = storage_path('app/public/template/ttb.png');

            $img = Image::make($template);
            $qr = Image::make($qrcode);

            $img->text($number, 780, 275, function ($font) {
                $font->file('fonts/open.ttf');
                $font->size(170);
                $font->color("#8d5bea");
                $font->align('center');
            });

            $img->text(strtoupper($customer), 680, 660, function ($font) {
                $font->file('fonts/open.ttf');
                $font->size(30);
                $font->color("#fff");
                $font->align('center');
            });

            $img->insert($qr, 'center', 415, 242);

            // return $img->response('png');
            $img->save($path . '/ttb_' . $id . '.png');
            return true;
        } catch (\Throwable $e) {
            Log::error($e->getMessage());
            return false;
        }
    }
}


if (!function_exists('format_date')) {
    function format_date($date, $format = "d M Y H:i:s")
    {
        return $date->translatedFormat($format);
    }
}

if (!function_exists('greetings')) {
    function greetings()
    {
        $date = date("H");
        $message = "";

        if ($date >= 00 && $date < 10) {
            $message = "Selamat Pagi";
        } else if ($date >= 10 && $date < 15) {
            $message = "Selamat Siang";
        } else if ($date >= 15 && $date < 19) {
            $message = "Selamat Sore";
        } else if ($date >= 19) {
            $message = "Selamat Malam";
        };

        return $message;
    }
}
