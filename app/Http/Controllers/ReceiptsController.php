<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Receipts;
use App\Models\Customers;
use App\Enums\ReceiptStatus;
use App\Jobs\SendReceiptWhatsappJob;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ReceiptFormRequest;
use App\Http\Resources\ReceiptCollection;

class ReceiptsController extends Controller
{
    public function index()
    {

        $receipts = new ReceiptCollection(
            Receipts::filter(Request::only('search'))
                ->latest()
                ->paginate(10)
        );

        if (Request::wantsJson()) {
            return $receipts;
        }

        return Inertia::render('Receipt/ReceiptIndex', [
            'receipts' => $receipts,
            'filters' => Request::all('search'),
        ]);
    }

    public function create()
    {

        $user = User::whereNot('user_type', 'kasir')
            ->get()
            ->map(function ($value) {
                return [
                    'value' => $value->name,
                    'label' => ucfirst($value->name),
                ];
            });

        $data = Customers::orderBy('name')->get();

        $customers = $data->map(function ($value) {
            return [
                'label' => $value->name,
                'value' => $value->id
            ];
        });

        return Inertia::render('Receipt/ReceiptAdd', compact('customers', 'user'));
    }

    public function store(ReceiptFormRequest $request)
    {

        try {
            $validation = $request->validated();

            if ($request->hasFile('photo')) {
                $photo = $this->_formatImage($request->photo);
                $validation['image'] = $photo;
            }

            $validation['user_id'] = auth()->id();
            $validation['receipt_code'] = date('dmYs') . '-' . $validation['receipt_number'];

            if (auth()->user()->user_type !== 'kasir') {
                $validation['handle_by'] = auth()->user()->name;
            }

            Receipts::create($validation);

            $this->_makeImageTtb($validation);

            return to_route('receipts')->with('message', 'TTB Berhasil dibuat');
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }

    public function show($receipt_code)
    {

        $receipt = Receipts::where('receipt_code', $receipt_code)
            ->first();
        if (!$receipt) return to_route('receipts');

        return Inertia::render('Receipt/ReceiptDetail', compact('receipt'));
    }

    public function taken()
    {
        $id = Request::input('id');
        Receipts::find($id)->update(['isTaken' => 1, 'pickup_date' => now()]);

        return back();
    }

    public function patch()
    {
        $id = Request::input('id');

        Receipts::find($id)->update(Request::all());

        return Redirect::back();
    }

    private function _formatImage($photo)
    {
        $path = 'images/barang/';

        if (!File::isDirectory(public_path($path))) {
            File::makeDirectory(public_path($path), 0777, true, true);
        }

        $fileName = $path . time() . '.' . $photo->getClientOriginalExtension();
        $image = Image::make($photo->getRealPath());

        $image->fit(400, 300);

        $image->save($fileName);

        return $fileName;
    }

    private function _makeImageTtb($data)
    {
        $customer = Customers::find($data['customer_id']);

        $createImage = make_ttb($data['receipt_code'], $data['receipt_number'], $customer->name);

        if ($customer->whatsapp && $this->_checkWhatsappConnection()) {
            dispatch(new SendReceiptWhatsappJob($data['receipt_code'], $customer->whatsapp))->delay(now()->addSecond(5));
        }

        return $createImage;
    }

    private function _checkWhatsappConnection()
    {
        try {
            $get = Http::get(env('WHATSAPP_SERVER') . '/sessions/status/' . Cache::get('session'))->json();

            if ($get['success']) {
                return true;
            }

            return false;
        } catch (\Exception $e) {
            return false;
        }
    }
}
