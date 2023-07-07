<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Shortlink extends Model
{
    use HasFactory;

    protected $table = "short_links";
    protected $guarded = [];


    public function shortable(): MorphTo
    {
        return $this->morphTo();
    }
}
