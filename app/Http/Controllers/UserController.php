<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ChangePasswordRequest;

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

    public function resetTable(Request $request)
    {
        if (auth()->user()->user_type !== 'admin') return abort(403);

        try {
            $tableName = $request->tablename;
            DB::statement("SET FOREIGN_KEY_CHECKS=0");
            if ($tableName === 'receipts') {
                File::cleanDirectory(public_path("images/barang/"));
                FIle::cleanDirectory(public_path("images/ttb/"));
            }
            DB::table($tableName)->truncate();
            DB::statement("SET FOREIGN_KEY_CHECKS=1");
            return back()->with("message", "$tableName tabel berhasil dihapus....");
        } catch (\Throwable $e) {
            Log::error($e->getMessage());
        }
    }
}
