<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Receipts;
use App\Models\Customers;
use App\Enums\ReceiptStatus;
use App\Facades\WhatsApp;
use Illuminate\Support\Facades\Log;
use App\Jobs\SendReceiptWhatsappJob;
use Illuminate\Support\Facades\File;
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
            Log::error($e->getMessage());
        }
    }

    public function show(Receipts $receipts)
    {

        return Inertia::render('Receipt/ReceiptDetail', ['receipt' => $receipts]);
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

    private function _formatImage($file)
    {

        $path = 'images/barang/';


        if (!File::isDirectory(public_path($path))) {
            File::makeDirectory(public_path($path), 0777, true, true);
        }

        $fileNameSave = $path . time() . "." . $file->getClientOriginalExtension();

        $image = Image::make($file->getRealPath());


        $image->fit(400, 300, function ($constraint) {
            $constraint->aspectRatio();
        });

        $image->save(public_path($fileNameSave));

        return $fileNameSave;
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
            $get = WhatsApp::status();

            if ($get['success']) {
                return true;
            }

            return false;
        } catch (\Throwable $e) {
            Log::error($e->getMessage());
            return false;
        }
    }
}
