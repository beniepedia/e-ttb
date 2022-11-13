<?php

namespace App\Jobs;

use Carbon\Carbon;
use App\Models\Receipts;
use App\Facades\WhatsApp;
use Illuminate\Support\Arr;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendReceiptWhatsappJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $number, $receipt_code;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($receipt_code, $whatsapp)
    {
        $this->number = $whatsapp;
        $this->receipt_code = $receipt_code;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(Receipts $receipts)
    {

        try {
            $receipt = $receipts->where('receipt_code', $this->receipt_code)->first();

            $kelengkapan = $receipt->kelengkapan ? Arr::join($receipt->kelengkapan, ', ') : 'Tidak ada';
            $pelanggan = ucfirst($receipt->customer->name);
            $user = ucfirst($receipt->user->name);
            $date = now()->parse($receipt->delivery_date);

            $hari = format_date($date, "l");
            $tanggal = format_date($date, "d F Y");
            $jam = format_date($date, 'H:s');

            $caption  = "\n*KARTU TANDA TERIMA*\n\n";
            $caption .= "No. Register : $receipt->receipt_code\n";
            $caption .= "No. Kartu : $receipt->receipt_number\n";
            $caption .= "Hari : $hari\n";
            $caption .= "Tanggal : $tanggal\n";
            $caption .= "Jam : $jam\n";
            $caption .= "Penerima : $user\n";
            $caption .= "Customer : $pelanggan\n";
            $caption .= "Barang : $receipt->barang\n";
            $caption .= "Kelengkapan : $kelengkapan\n";
            $caption .= "Kerusakan : $receipt->kerusakan\n\n";
            $caption .= "------------------------------------------\n";
            $caption .= "*Info Lanjut Hub :* \n";
            $caption .= "HP : 08116407788\n\n";
            $caption .= "_Tunjukkan kartu ini pada saat ingin mengambil barang anda..._";


            return WhatsApp::send([
                "number" => $this->number,
                "message" => [
                    "image" => [
                        "url" => url("images/ttb") . "/ttb_" . $this->receipt_code . ".png",
                    ],
                    "caption" => $caption,
                ]
            ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }
}
