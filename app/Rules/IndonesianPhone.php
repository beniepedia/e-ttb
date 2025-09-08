<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class IndonesianPhone implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Cek apakah hanya digit
        if (!preg_match('/^[0-9]+$/', $value)) {
            $fail("Kolom {$attribute} hanya boleh berisi angka.");
            return;
        }

        // Cek apakah dimulai dengan 08 dan panjang 10-15 digit
        if (!preg_match('/^08[0-9]{8,13}$/', $value)) {
            $fail("Format nomor HP tidak valid.");
        }
    }
}
