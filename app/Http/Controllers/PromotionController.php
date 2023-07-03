<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PromotionController extends Controller
{
    public function index()
    {
        return Inertia::render("Promotion/PromotionIndex");
    }
}
