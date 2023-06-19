<?php

namespace App\Models;

use App\Models\Receipts;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Customers extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Notifiable;

    protected $fillable = ['name', 'phone', 'whatsapp', 'address'];


    public function scopeFilter($query, array $filter)
    {
        $query->when($filter['search'] ?? null, function ($query, $search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('phone', 'like', '%' . $search . '%')
                ->orWhere('whatsapp', 'like', '%' . $search . '%');
        });
    }

    public static function selectOption()
    {
        $query = static::query();

        $data = collect($query->orderBy('name')->get());

        return $data->filter(function ($value) {
            return !empty($value->whatsapp);
        })->flatten()->map(function ($value) {
            return [
                'label' => $value->name,
                'value' => $value->whatsapp,
            ];
        });
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucwords(strtolower($value)),
        );
    }

    public function receipts()
    {
        return $this->hasMany(Receipts::class, 'customer_id', 'id');
    }

    public function routeNotificationForWhatsapp($notifiable)
    {
        return $this->whatsapp;
    }
}
