<?php

namespace App\Http\Controllers;

use App\Models\Customers;
use App\Models\Receipts;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{


    public function index(Receipts $receipts)
    {
        // $caption  = "*KARTU TANDA TERIMA*\n\n";
        // $caption .= "NO. Kartu : 90\n";
        // $caption .= "NO. Register : 20912321-20\n";
        // $caption .= "Tanggal Masuk : 20 agustus 2022\n";
        // $caption .= "Penerima : Benie\n";
        // $caption .= "Customer : AAn\n";
        // $caption .= "Barang : Printer Epson L1200\n";
        // $caption .= "Kelengkapan : Kbale, eed\n";
        // $caption .= "Kerusakan : Mampet\n\n";
        // $caption .= "_Tunjukkan kartu ini pada saat anda ingin mengambil barang anda..._";

        // $image = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80';
        // dd(send_wa('6282174416077', [
        //     'image' => [
        //         'url' => $image
        //     ],
        //     'caption' => $caption
        // ]));

        $receiptToday = $receipts->whereDate('created_at', now()->today())->get()->count();
        $receiptTotal = $receipts->all()->count();
        $receiptActive = $receipts->where('isTaken', 0)->count();
        $customerTotal = Customers::all()->count();
        $receiptStatus = $receipts->where('isTaken', 0)->where(function ($query) {
            $query->where('status', 'gagal')->orWhere('status', 'berhasil');
        })->latest()->get();

        return Inertia::render('Dashboard/DashboardIndex', [
            'data' => [
                'receipt_total' => $receiptTotal,
                'receipt_today' => $receiptToday,
                'receipt_active' => $receiptActive,
                'customer_total' => $customerTotal,
                'receipt_status' => $receiptStatus,
                'customers' => Customers::selectOption()
            ]
        ]);
    }
}
