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
        'payload',
        'expired_time',
        'amount',
        'paid_at',
        'amount_total',
        'discount',
        'transaction_status',
        'signature'
    ];

    protected $keyType = 'string';
    protected $appends = ['status'];
    public $incrementing = false;

    protected $casts = [
        'payload' => 'json',
        'paid_at' => 'datetime:d/m/Y H:i'
    ];

    public function customer()
    {
        return $this->hasOneThrough(Customers::class, Receipts::class, 'customer_id', 'id', 'receipt_id');
    }

    public function receipt()
    {
        return $this->belongsTo(Receipts::class);
    }


    protected function transactionStatus(): Attribute
    {
        return new Attribute(
            // get: fn ($value) => ucfirst($value),
            set: fn ($value) => strtoupper($value)
        );
    }

    protected function expiredTime(): Attribute
    {
        return new Attribute(
            get: fn ($value) => date("d/m/Y H:i", $value)
        );
    }

    protected function status(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes) {
                switch ($attributes['transaction_status']) {
                    case "UNPAID":
                        $status = "Belum Dibayar";
                        break;
                    case "PAID":
                        $status = "Sudah Dibayar";
                        break;
                    case "REFUND":
                        $status = "Dikembalikan";
                        break;
                    case "FAILED":
                        $status = "Gagal";
                        break;
                    case "EXPIRED":
                        $status = "Kadaluarsa";
                        break;
                    default:
                        $status = "";
                        break;
                }

                return $status;
            }
            // set: fn ($value) => strtoupper($value)
        );
    }
}
