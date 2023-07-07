<?php

namespace App\Http\Controllers;

use App\Models\Shortlink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ShortController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(string $key)
    {
        $short = Shortlink::firstWhere("name", $key);

        if ($short) {
            return Redirect::to($short->original);
        }
        abort(404);
    }
}
