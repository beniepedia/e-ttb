<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        return Inertia::render("Notification/NotificationIndex");
    }

    public function read(Notification $notification, Request $request)
    {
        if (empty($notification->read_at)) {
            $notification->update(['read_at' => now()]);
        }

        return Redirect::to($request->url);
    }
}
