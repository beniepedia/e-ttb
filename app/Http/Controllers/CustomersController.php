<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerCollection;
use Inertia\Inertia;
use App\Models\Customers;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function index(Request $request)
    {

        $customers = new CustomerCollection(
            Customers::filter($request->all('search'))
                ->orderBy('name')
                ->paginate(20)
        );

        if ($request->wantsJson()) {
            return $customers;
        }

        return Inertia::render('Customers/Index', [
            'filters' => $request->all('search'),
            'customers' => $customers,
        ]);
    }

    public function create()
    {
        return Inertia::render('Customers/CustomerAdd');
    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|min:3',
            'phone' => 'required|string|min:10|unique:customers,phone',
        ], [
            'required' => 'Masukkan :attribute customer',
            'min' => 'Panjang :attribute minimal :min karakter',
            'unique' => ':attribute sudah pernah digunakan'
        ], [
            'name' => 'nama',
            'phone' => 'No. handphone'
        ]);

        Customers::create($request->only('name', 'phone', 'whatsapp', 'address'));
        return redirect(url()->previous())->with('message', 'Data customer berhasil ditambah');
    }

    public function show(Customers $customers, Request $request)
    {
        // $customers->load('receipts');

        $customer = $customers->with('receipts')->findOrFail($request->id);

        return Inertia::render('Customers/CustomerDetail', ['customer' => $customer]);
    }

    public function edit(Customers $customer, Request $request)
    {

        if ($request->method() == "POST") {
            $request->validate([
                'name' => 'required|min:3',
                'phone' => 'required|string|min:10|unique:customers,phone,' . $customer->id,
            ], [
                'required' => 'Masukkan :attribute customer',
                'min' => 'Panjang :attribute minimal :min karakter',
                'unique' => ':attribute sudah pernah digunakan'
            ], [
                'name' => 'nama',
                'phone' => 'No. handphone'
            ]);

            $customer->update($request->only(['name', 'phone', 'whatsapp', 'address']));

            return redirect()->route('customer.show', [$customer])->with('message', 'Data customer berhasil diupdate');
        }

        return Inertia::render('Customers/CustomerEdit', ['customer' => $customer]);
    }
}
