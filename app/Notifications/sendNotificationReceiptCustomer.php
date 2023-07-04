<?php

namespace App\Notifications;

use App\Models\Receipts;
use App\NotificationChannel\WhatsappChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Arr;

class sendNotificationReceiptCustomer extends Notification
{
    use Queueable;

    public $receipt;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($receipt)
    {
        $this->receipt = $receipt;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [WhatsappChannel::class];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toWhatsapp($notifiable)
    {
        $kelengkapan = $this->receipt->kelengkapan ? Arr::join($this->receipt->kelengkapan, ', ') : 'Tidak ada';
        $pelanggan = ucfirst($this->receipt->customer->name);
        $user = ucfirst($this->receipt->user->name);
        $userWhatsapp = $this->receipt->user->whatsapp;
        $date = now()->parse($this->receipt->delivery_date);

        $hari = format_date($date, "l");
        $tanggal = format_date($date, "d F Y");
        $jam = format_date($date, 'H:s');

        $caption = <<<EOT
        
        🟢 *KARTU TANDA TERIMA* 🟢
        ========================

        No. Register : {$this->receipt->receipt_code}
        No. Kartu : {$this->receipt->receipt_number}
        Hari : $hari
        Jam : $jam
        Tgl Masuk : $tanggal
        Customer : $pelanggan
        Penerima : $user
        Barang : {$this->receipt->barang}
        Kerusakan : {$this->receipt->kerusakan}
        Kelengkapan : $kelengkapan
        
        ----------------------------------------------
        *Info Lanjut Hub :*
        📱HP/WA : 08116407788
        📌Alamat : bit.ly/3DgMkLd

        *Cek status tanda terima*
        🌐 tandaterima.online/cek-status

        _Tunjukkan kartu ini pada saat ingin mengambil barang anda..._
        EOT;


        // $caption  = "*KARTU TANDA TERIMA*" . PHP_EOL;
        // $caption .= str_repeat("-", 27) . PHP_EOL;
        // $caption .= "No. Register : " . $this->receipt->receipt_code . PHP_EOL;
        // $caption .= "No. Kartu : " . $this->receipt->receipt_number . PHP_EOL;
        // $caption .= "Hari : $hari" . PHP_EOL;
        // $caption .= "Tanggal : $tanggal" . PHP_EOL;
        // $caption .= "Jam : $jam" . PHP_EOL;
        // $caption .= "Penerima : $user" . PHP_EOL;
        // $caption .= "Customer : $pelanggan" . PHP_EOL;
        // $caption .= "Barang : " . $this->receipt->barang . PHP_EOL;
        // $caption .= "Kelengkapan : $kelengkapan" . PHP_EOL;
        // $caption .= "Kerusakan : " . $this->receipt->kerusakan . PHP_EOL . PHP_EOL;
        // $caption .= str_repeat("-", 60) . PHP_EOL;
        // $caption .= "*Info Lanjut Hub :*" . PHP_EOL;
        // $caption .= "HP : 08116407788" . PHP_EOL . PHP_EOL;
        // $caption .= "_Tunjukkan kartu ini pada saat ingin mengambil barang anda..._";

        return [
            'to' => $userWhatsapp,
            'text' => $caption,
            'media' => url("images/ttb/ttb_" . $this->receipt->receipt_code . ".png"),
            //'media' => 'https://tandaterima.online/images/ttb/ttb_2006202328-117.png'
        ];
    }
}
