<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Http\FormRequest;

class ChangePasswordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'current_password' => ['required', 'max:255', function ($attribute, $value, $fail) {
                if (!Hash::check($value, auth()->user()->password)) {
                    return $fail('Password salah, Silahkan coba lagi');
                }
            }],
            'new_password' => 'required|max:255|min:6',
            'confirm_password' => 'required|same:new_password',
        ];
    }

    public function messages()
    {
        return [
            'current_password.required' => 'Masukkan password saat ini',
            'new_password.required' => 'Masukkan password baru',
            'new_password.min' => 'Panjang password minimal 6 karakter',
            'confirm_password.required' => 'Masukkan konfirmasi password',
            'confirm_password.same' => 'Konfirmasi password harus sama dengan password baru',
        ];
    }
}
