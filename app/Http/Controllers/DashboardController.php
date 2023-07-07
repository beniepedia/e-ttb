<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Receipts;
use App\Models\Customers;
use App\Services\ShortLinkService;

class DashboardController extends Controller
{

    public function index(Receipts $receipts)
    {
        $chartData = Receipts::withOut(['customer', 'user'])
            ->selectRaw('handle_by as teknisi, 
                        COUNT(*) as total,  
                        COALESCE(COUNT(CASE WHEN status = "gagal" THEN 1 END), 0) as total_fail,
                        COALESCE(COUNT(CASE WHEN status = "berhasil" THEN 1 END), 0) as total_success')
            ->groupBy('handle_by')
            ->get()
            ->toArray();

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
                'customers' => Customers::selectOption(),
                'chart_data' => $chartData,
            ]
        ]);
    }
}
