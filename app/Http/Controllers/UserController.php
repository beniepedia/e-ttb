<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Requests\ChangePasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/UserIndex');
    }

    public function changePassword(ChangePasswordRequest $request)
    {

        $user = Auth::user();

        $user->update([
            'password' => $request->new_password
        ]);

        return Redirect::back()->with('message', 'Password berhasil diupdate');
    }
}
