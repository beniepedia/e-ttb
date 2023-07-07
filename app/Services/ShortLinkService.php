<?php

namespace App\Services;

use Illuminate\Support\Str;

class ShortLinkService
{
    public function create($model, $url): void
    {
        $random = Str::random(6);

        $model->short_link()->create([
            'name' => $random,
            'original' => $url,
            'short' => url("/$random"),
        ]);
    }
}
