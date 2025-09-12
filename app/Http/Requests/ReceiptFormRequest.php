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
            'photo.mimes' => 'Format photo harus berupa jpg, jpeg, png',
            'photo.image' => 'Format jpg, jpeg, png',
            'items.required' => 'Minimal harus ada satu barang',
            'items.array' => 'Format data barang tidak valid',
            'items.*.category.required' => 'Kategori barang harus diisi',
            'items.*.brand.required' => 'Merek barang harus diisi',
            'items.*.model.required' => 'Model barang harus diisi',
            'items.*.sn.required' => 'Serial Number barang harus diisi',
            'items.*.demmage.required' => 'Deskripsi kerusakan harus diisi',
            'items.*.handle_by.required' => 'Teknisi harus dipilih',
            'delivery_date.required' => 'Tanggal harus diisi',
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
            'receipt_number' => 'required',
            'customer_id' => 'required',
            'delivery_date' => 'required|date',
            'photo' => 'nullable|mimes:jpg,jpeg,png',
            'items' => 'required|array|min:1',
            'items.*.category' => 'required|string',
            'items.*.brand' => 'required|string',
            'items.*.model' => 'required|string',
            'items.*.sn' => 'required|string',
            'items.*.demmage' => 'required|string',
            'items.*.handle_by' => 'required',
        ];
    }
}
