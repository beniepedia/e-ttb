<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ReceiptDetails extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'accessories' => 'array',
    ];

    public function receipt()
    {
        return $this->belongsTo(Receipts::class);
    }

    public function handledBy()
    {
        return $this->belongsTo(User::class, 'handled_by');
    }
}