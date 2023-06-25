<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'invoice_number',
        'receipt_id',
        'transaction_token',
        'transaction_url',
        'payload',
        'transaction_time',
        'transaction_status'
    ];

    protected $keyType = 'string';
    public $incrementing = false;


    protected function transactionStatus(): Attribute
    {
        return new Attribute(
            // get: fn ($value) => ucfirst($value),
            set: fn ($value) => strtolower($value)
        );
    }
}
