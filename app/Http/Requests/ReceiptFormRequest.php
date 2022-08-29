<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReceiptFormRequest extends FormRequest
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

    public function messages()
    {
        return [
            'receipt_number.required' => 'Nomor Kartu tidak boleh kosong',
            'customer_id.required' => 'Pilih customer',
            'kerusakan.required' => 'Masukkan detail kerusakan',
            'barang.required' => 'Masukkan tipe / nama barang',
            'photo.mimes' => 'Format photo harus berupa jpg, jpeg, png',
            'photo.image' => 'Formatpa jpg, jpeg, png',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'receipt_number' => 'required|numeric',
            'customer_id' => 'required',
            'kelengkapan' => 'nullable',
            'kerusakan' => 'required|string',
            'barang' => 'required|string',
            'category' => 'required',
            'photo' => 'nullable|mimes:jpg,jpeg,png'
        ];
    }
}
