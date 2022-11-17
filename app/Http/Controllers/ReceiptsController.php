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
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class ReceiptsController extends Controller
{
    use GenerateCode;


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


            Receipts::create($validation);

            $this->_makeImageTtb($validation);

            return to_route('receipt.show', $validation['receipt_code'])->with('message', 'TTB Berhasil dibuat');
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

    public function send_receipt(Receipts $receipts, \Illuminate\Http\Request $request)
    {
        if ($request->whatsapp && WhatsApp::status()) {

            try {
                // $receipt = $receipts->where('receipt_code', $this->receipt_code)->first();

                $kelengkapan = $receipts->kelengkapan ? Arr::join($receipts->kelengkapan, ', ') : 'Tidak ada';
                $pelanggan = ucfirst($receipts->customer->name);
                $user = ucfirst($receipts->user->name);
                $date = now()->parse($receipts->delivery_date);

                $hari = format_date($date, "l");
                $tanggal = format_date($date, "d F Y");
                $jam = format_date($date, 'H:s');

                $caption  = "\n*KARTU TANDA TERIMA*\n\n";
                $caption .= "No. Register : $receipts->receipt_code\n";
                $caption .= "No. Kartu : $receipts->receipt_number\n";
                $caption .= "Hari : $hari\n";
                $caption .= "Tanggal : $tanggal\n";
                $caption .= "Jam : $jam\n";
                $caption .= "Penerima : $user\n";
                $caption .= "Customer : $pelanggan\n";
                $caption .= "Barang : $receipts->barang\n";
                $caption .= "Kelengkapan : $kelengkapan\n";
                $caption .= "Kerusakan : $receipts->kerusakan\n\n";
                $caption .= "------------------------------------------\n";
                $caption .= "*Info Lanjut Hub :* \n";
                $caption .= "HP : 08116407788\n\n";
                $caption .= "_Tunjukkan kartu ini pada saat ingin mengambil barang anda..._";


                return WhatsApp::send([
                    "number" => $request->whatsapp,
                    "message" => [
                        "image" => [
                            "url" => url("images/ttb") . "/ttb_" . $receipts->receipt_code . ".png",
                        ],
                        "caption" => $caption,
                    ]
                ]);
            } catch (\Exception $e) {
                Log::error($e->getMessage());
                return response()->json([
                    'success' => false,
                    'message' => '',
                ], 500);
            }
        } else {
            Log::error("Server whatsapp tidak aktif atau nomor customer tidak ditemukan.");
            return response()->json([
                'success' => false,
                'message' => '',
            ], 500);
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


        $image->fit(400, 300, function ($constraint) {
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

    private function _makeImageTtb($data)
    {
        $customer = Customers::find($data['customer_id']);

        $createImage = make_ttb($data['receipt_code'], $data['receipt_number'], $customer->name);

        // if ($customer->whatsapp && $this->_checkWhatsappConnection()) {
        //     dispatch(new SendReceiptWhatsappJob($data['receipt_code'], $customer->whatsapp))->delay(now()->addSecond(5));
        // }

        return $createImage;
    }
}
