<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Support\Facades\File;

class Setting extends Model
{
    use HasFactory;
    use HasUuids;

    protected $fillable = ['key', 'value'];
    protected $keyType = 'string';
    public $incrementing = false;

    protected static function booted()
    {
        static::saved(function () {
            $settings = static::pluck('value', 'key')->toArray();

            foreach ($settings as $key => $value) {
                if ($key === "is_develop") {
                    $settings[$key] = ($value === '1') ? "local" : "production";
                } else if ($value === '1' || $value === '0') {
                    $settings[$key] = ($value === '1') ? true : false;
                }
            }

            $parsable_string = var_export($settings, true);

            $content = "<?php\n\nreturn {$parsable_string};";

            File::put(config_path('app_setting.php'), $content);
        });
    }
}
