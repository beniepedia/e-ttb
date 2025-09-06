<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TesController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Test');
    }
}
