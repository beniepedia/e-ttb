<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReceiptsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WhatsappController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});


Route::middleware(['auth', 'verified'])->group(function () {

    Route::controller(DashboardController::class)->group(function () {
        Route::get('/dashboard', 'index')->name('dashboard');
    });

    Route::controller(CustomersController::class)->group(function () {
        Route::get('/customers', 'index')->name('customers');
        Route::post('/customers', 'store')->name('customers.store');
        Route::get('/customers/create', 'create')->name('customers.create');
        Route::get('/customers/{id}', 'show')->name('customer.show');
        Route::any('/customers/{customer:id}/edit', 'edit')->name('customer.edit');
    });


    Route::controller(ReceiptsController::class)->group(function () {
        Route::get('/receipts', 'index')->name('receipts');

        Route::post('/receipts', 'store')->name('receipts.store');
        Route::post('/receipts/{receipts:id}/upload-image', 'upload_image')->name('receipts.imageupload');
        Route::post('receipts/{receipts:id}/send_receipt', 'send_receipt')->name('receipts.send');

        Route::get('/receipts/create', 'create')->name('receipts.create');
        Route::get('/receipts/{receipts:receipt_code}', 'show')->name('receipt.show');

        Route::get('/receipts/{receipts:receipt_code}/print-label', 'print_label')->name('printlabel');

        Route::put('/receipts/taken', 'taken')->name('receipts.taken');
        Route::patch('/receipts', 'patch')->name('receipts.updatePatch');
    });

    Route::controller(UserController::class)->group(function () {
        Route::get("/user", "index")->name("user.index");
        Route::post("/changepassword", "changePassword")->name("change_password");
        Route::delete("/reset-table", "resetTable")->name("reset.table");
    });

    Route::controller(WhatsappController::class)->group(function () {
        Route::get("/whatsapp", "index")->name("whatsapp");
        Route::post("/whatsapp/send-message", "sendMessage")->name("whatsapp.sendMessage");
        Route::post("/whatsapp/connect", "connect")->name("whatsapp.connect");
        Route::post('/whatsapp/status', 'status')->name('whatsapp.status');
        Route::delete('/whatsapp/logout', 'logout')->name('whatsapp.logout');
    });
});



// Route::get('')

require __DIR__ . '/auth.php';
