<?php

use App\Facades\Tripay;
use App\Http\Controllers\Client\StatusController;
use App\Facades\WhatsApp;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CustomersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReceiptsController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\TelegramBotController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TripayCallbackController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WhatsappController;
use App\Notifications\NotificationTelegramToAdmin;
use App\Notifications\sendNotificationReceiptCustomer;
use Illuminate\Support\Facades\Notification;

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

Route::get('/send', function () {
    session()->flash("message", 'asdasdasd');

    // echo date("d/m/Y", 1688055735);

    // $transaction = \App\Models\Transaction::with('customer')->first();

    // dd($transaction);

    // $receipt = \App\Models\Receipts::firstwhere('receipt_number', '116');
    // $receipt->load('customer');

    // $customer = $receipt->customer;

    // $customer->notify(new sendNotificationReceiptCustomer($receipt));
    // Notification::send('', new NotificationTelegramToAdmin(['nama' => 'ahasd']));
});

Route::get('/', function () {
    // return Inertia::render('Auth/Login');
    return redirect()->route('login');
});

Route::get("/cek-status", [StatusController::class, 'check_status'])->name('client.status.check');
Route::post("/cek-status/{receipts:receipt_code}", [StatusController::class, 'check'])->name('client.status.process')->middleware('throttle:5,1');


Route::post("/callback", TripayCallbackController::class);

Route::get("/payment/{receipts:receipt_code}", [TransactionController::class, 'index'])->name("payment");
Route::post("/transaction", [TransactionController::class, 'get_token'])->name("transaction.gettoken");
Route::post("/transaction/promo", [TransactionController::class, 'promo'])->name("transaction.promo");

Route::post('/telegram-bot', [TelegramBotController::class, 'index']);

Route::controller(SettingController::class)
    ->prefix('admin')
    ->middleware(['auth', 'admin'])
    ->group(function () {
        Route::get("/setting", 'index')->name("admin.setting");
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
        Route::post('receipts/{receipts}/send_receipt', 'send_receipt')->name('receipts.send');
        Route::post('receipts/{receipts}/confirmation', 'confirmation')->name('receipts.confirmation');

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

    Route::controller(SettingController::class)->group(function () {
        Route::post('/setting', 'store')->name('setting.store');
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
