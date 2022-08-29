<?php

namespace App\Models;

use App\Models\User;
use App\Models\Customers;
use App\Enums\ReceiptStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Receipts extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $with = ['customer', 'user'];

    protected $casts = [
        'details'       => 'array',
        'kelengkapan'   => 'array',
        'isTaken'       => 'boolean',
    ];

    protected function cost(): Attribute
    {
        return new Attribute(
            set: fn ($value) => preg_replace('/\D/', '', $value)
        );
    }

    protected function status(): Attribute
    {
        return new Attribute(
            get: fn ($value) => ucfirst($value)
        );
    }

    protected function handleBy(): Attribute
    {
        return new Attribute(
            get: fn ($value) => ucfirst($value)
        );
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customers::class);
    }

    public function scopeFilter($query, array $filter)
    {
        $query->when($filter['search'] ?? null,  function ($query, $keyword) {
            $query->where('receipt_code', '=', $keyword)
                ->orwhereHas('customer',  function ($q) use ($keyword) {
                    $q->where('name', 'LIKE', "%" . $keyword . "%");
                });
        });
    }
}
