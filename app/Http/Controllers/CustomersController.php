<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerCollection;
use App\Http\Resources\CustomerResource;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Customers;
use Illuminate\Support\Str;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

class CustomersController extends Controller
{
    public function index()
    {

        $customers = new CustomerCollection(
            Customers::filter(Request::all('search'))
                ->orderBy('name')
                ->paginate(20)
        );

        if (Request::wantsJson()) {
            return $customers;
        }

        return Inertia::render('Customers/Index', [
            'filters' => Request::all('search'),
            'customers' => $customers,
        ]);
    }

    public function create()
    {
        return Inertia::render('Customers/CustomerAdd');
    }

    public function store()
    {

        Request::validate([
            'name' => 'required|min:3',
            'phone' => 'required|numeric',
        ]);

        Customers::create(Request::only('name', 'phone', 'whatsapp', 'address'));
        return redirect(url()->previous())->with('message', 'Data customer berhasil ditambah');
    }

    public function show(Customers $customers)
    {
        $customer = $customers->with('receipts')->firstOrFail();

        return Inertia::render('Customers/CustomerDetail', ['customer' => $customer]);
    }
}
