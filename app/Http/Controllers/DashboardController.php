<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Receipts;
use App\Models\Customers;

class DashboardController extends Controller
{
    public function index(Receipts $receipts)
    {

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
