<?php

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

trait GenerateCode
{
    public function receiptAutoNumber(?string $prefix = 'TRM', string $reset = 'day')
    {
        $today = Carbon::now();

        // Tentukan format prefix waktu
        $datePrefix = match ($reset) {
            'day'   => $today->format('ymd'), // contoh: 250910
            'month' => $today->format('ym'),  // contoh: 2509
            default => $today->format('ym'),
        };

        // Bangun prefix final
        $fullPrefix = $prefix
            ? $prefix . '-' . $datePrefix // contoh: INV-250910
            : $datePrefix;                // contoh: 250910

        // Ambil kode terakhir sesuai prefix
        $last = DB::table('receipts')
            ->select('receipt_number')
            ->where('receipt_number', 'like', $fullPrefix . '-%')
            ->orderBy('receipt_number', 'desc')
            ->first();

        if ($last) {
            $lastNumber = (int) substr($last->receipt_number, -4);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return sprintf('%s-%04d', $fullPrefix, $newNumber);
    }
}
