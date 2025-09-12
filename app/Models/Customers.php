<?php

namespace App\Models;

use App\Models\Receipts;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use NotificationChannels\WebPush\HasPushSubscriptions;

class Customers extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Notifiable;
    use HasPushSubscriptions;

    protected $casts = [
        'location' => 'json'
    ];

    protected $fillable = ['name', 'phone', 'whatsapp', 'address', 'location', 'full_name', 'email'];


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

        return $query->orderBy('name')
            ->get(['id', 'name', 'phone'])->map(fn($c) => [
                'label' => "{$c->name} | {$c->phone}",
                'value' => $c->id
            ]);
    }

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn($value) => ucwords(strtolower($value)),
        );
    }

    protected function whatsapp(): Attribute
    {
        return Attribute::make(
            set: fn($value) => whatsapp_format($value),
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
