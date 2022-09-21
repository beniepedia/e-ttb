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
            'phone' => 'required|numeric',
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
}
