<?php

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

trait GenerateCode
{
    public function receiptAutoNumber()
    {
        $query = DB::table('receipts')
            ->select('id', 'receipt_number', 'created_at', DB::raw('MAX(receipt_number) as MAX_ID'))
            ->orderBy('receipt_number', 'desc')
            ->orderBy('created_at', 'desc')
            ->groupBy('id', 'receipt_number')
            ->first();

        $MAX_ID = $query->MAX_ID ?? 0;

        if ($MAX_ID === 999) {
            $MAX_ID = 0;
        }

        $newCode = $MAX_ID + 1;

        return sprintf("%03s", $newCode);
    }
}
