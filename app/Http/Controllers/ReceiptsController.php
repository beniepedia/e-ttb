<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Receipts;
use App\Facades\WhatsApp;
use App\Models\Customers;
use Illuminate\Support\Arr;
use App\Traits\GenerateCode;
use Illuminate\Support\Facades\Log;
use App\Jobs\SendReceiptWhatsappJob;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redis;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ReceiptFormRequest;
use App\Http\Resources\ReceiptCollection;
use App\Notifications\sendNotificationReceiptCustomer;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Throwable;

class ReceiptsController extends Controller
{
    use GenerateCode;


    public function index()
    {
        $receipts = new ReceiptCollection(
            Receipts::filter(Request::only('search', 'status'))
                ->latest()
                ->paginate(10)
        );

        if (Request::wantsJson()) {
            return $receipts;
        }

        return Inertia::render('Receipt/ReceiptIndex', [
            'receipts' => $receipts,
            'filters' => Request::all('search', 'status'),
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

        $auto_number = $this->receiptAutoNumber();

        return Inertia::render('Receipt/ReceiptAdd', compact('customers', 'user', 'auto_number'));
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


            $receipt = Receipts::create($validation);

            $this->_makeImageTtb($receipt);

            // $customer = Customers::find($receipt->customer_id);

            // $customer->notify(new sendNotificationReceiptCustomer($receipt));

            return to_route('receipt.show', $validation['receipt_code'])->with('message', 'TTB Berhasil dibuat');
        } catch (\Throwable $e) {
            Log::error($e->getMessage());
            return Redirect::back();
        }
    }

    public function show(Receipts $receipts)
    {
        $user = User::where("user_type", '!=', 'kasir')->get();
        return Inertia::render('Receipt/ReceiptDetail', ['receipt' => $receipts, 'users' => $user]);
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

    public function upload_image(Receipts $receipts, \Illuminate\Http\Request $request)
    {
        if ($request->hasFile('photo')) {
            $image = explode('/', $receipts->image);

            if ($image[2] !== 'no_image.jpg') {
                unlink($receipts->image);
            }

            $imageFileName = $this->_formatImage($request->photo);

            $receipts->update(['image' => $imageFileName]);

            return Redirect::back();
        }
    }

    private function _formatImage($file)
    {

        $path = 'images/barang/';

        if (!File::isDirectory(public_path($path))) {
            File::makeDirectory(public_path($path), 0777, true, true);
        }

        $fileNameSave = $path . time() . "." . $file->getClientOriginalExtension();

        $image = Image::make($file->getRealPath());

        $image->fit(800, 600, function ($constraint) {
            $constraint->aspectRatio();
        });

        $image->save(public_path($fileNameSave));

        return $fileNameSave;
    }

    public function print_label(Receipts $receipts)
    {
        $qrcode = base64_encode(QrCode::format('png')
            ->size(200)
            ->errorCorrection('Q')
            ->margin(2)
            ->generate($receipts->receipt_code));

        return Inertia::render('Receipt/PrintLabel', compact('qrcode', 'receipts'));
    }

    public function send_receipt(Receipts $receipts)
    {

        try {
            $receipts->load('customer');

            $customer = $receipts->customer;

            $customer->notify(new sendNotificationReceiptCustomer($receipts));
            return response()->json(['message' => 'Berhasil mengirim kartu tanda terima ke customer ' . $customer->name], 200);
        } catch (Throwable $t) {
            return response()->json(['message' => 'Berhasil mengirim kartu tanda terima ke customer '], 400);
        }
    }

    private function _makeImageTtb($data)
    {
        $customer = Customers::find($data['customer_id']);

        $createImage = make_ttb($data['receipt_code'], $data['receipt_number'], $customer->name);

        return $createImage;
    }
}
