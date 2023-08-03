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
// use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ReceiptFormRequest;
use App\Http\Resources\ReceiptCollection;
use App\Notifications\NotificationToUserWebPush;
use App\Notifications\SendNotificationConfirmationToCustomer;
use App\Notifications\sendNotificationReceiptCustomer;
use App\Services\ShortLinkService;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Str;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use SpomkyLabs\Pki\ASN1\Type\Primitive\Real;
use Throwable;

class ReceiptsController extends Controller
{
    use GenerateCode;
    public function index(Request $request)
    {

        $receipts = new ReceiptCollection(
            Receipts::filter($request->only('search', 'status'))
                ->latest()
                ->paginate(10)
        );

        if ($request->wantsJson()) {
            return $receipts;
        }

        return Inertia::render('Receipt/ReceiptIndex', [
            'receipts' => $receipts,
            'filters' => $request->all('search', 'status'),
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

            if (!isKasir()) {
                $validation['handle_by'] = auth()->user()->name;
            }


            $receipt = Receipts::create($validation);

            $this->_makeImageTtb($receipt);

            $random = Str::random(6);
            $receipt->short_link()->create([
                'name' => $random,
                'original' => url("images/ttb/ttb_$receipt->receipt_code.png"),
                'short' => url("/s/$random")
            ]);


            $receipt->status = "pending";

            $user = User::where("name", $receipt->handle_by)->orWhere("user_type", "admin")->get();

            Notification::send($user, new NotificationToUserWebPush($receipt));

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

    public function taken(Request $request)
    {
        $id = $request->id;
        Receipts::find($id)->update(['isTaken' => 1, 'pickup_date' => now()]);

        return back()->with("message", "Berhasil dupdate!");
    }

    public function update(Request $request)
    {
        try {
            $id = $request->id;
            $receipt = Receipts::find($id);

            if ($receipt->handle_by != auth()->user()->name && !isAdmin() && !isKasir()) {
                return Redirect::back()->with("message", ["type" => "error", "message" => "Maaf, tanda terima ini bukan atas nama anda.!"]);
            }

            $receipt->update($request->all());

            if (isKasir()) {
                $user = User::where("user_type", "admin")->first();
                $user->notify(new NotificationToUserWebPush($receipt));
            } else {
                $userReceiveNotification = User::whereIn("user_type", ["admin", "kasir"])->get();
                Notification::send($userReceiveNotification, new NotificationToUserWebPush($receipt));
            }
            return Redirect::back()->with("message", "Status berhasil diupdate!");
        } catch (Exception $e) {
            return Redirect::back()->with("message", ["type" => "error", "message" => "Status gagal diupdate!"]);
        }
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

    public function confirmation(Receipts $receipts)
    {

        try {
            $customer = $receipts->customer;

            $customer->notify(new SendNotificationConfirmationToCustomer($receipts));

            Log::info("Berhasil mengirim konfirmasi pesan whatsapp customer $customer->whatsapp", ["id" => $customer->id]);

            return redirect()->back()->with("message", "Pesan whatsapp konfirmasi berhasil dikirim ke customer $customer->name");
        } catch (Exception $e) {
            Log::error("Gagal mengirim konfirmasi pesan whatsapp customer $customer->whatsapp", ["id" => $customer->id, "error" => $e->getMessage()]);

            return redirect()->back()->with("message", ['type' => "error", "message" => "Gagal mengirim konfirmasi pesan whatsapp"]);
        }
    }

    private function _makeImageTtb($data)
    {
        $customer = Customers::find($data['customer_id']);

        $createImage = make_ttb($data['receipt_code'], $data['receipt_number'], $customer->name);

        return $createImage;
    }
}
