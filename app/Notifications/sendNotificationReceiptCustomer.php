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
        $date = now()->parse($this->receipt->delivery_date);

        $hari = format_date($date, "l");
        $tanggal = format_date($date, "d F Y");
        $jam = format_date($date, 'H:s');

        $caption  = "\n*KARTU TANDA TERIMA*\n";
        $caption .= str_repeat("-", 27) . "\n\n";
        $caption .= "No. Register : " . $this->receipt->receipt_code . PHP_EOL;
        $caption .= "No. Kartu : " . $this->receipt->receipt_number . PHP_EOL;
        $caption .= "Hari : $hari\n";
        $caption .= "Tanggal : $tanggal\n";
        $caption .= "Jam : $jam\n";
        $caption .= "Penerima : $user\n";
        $caption .= "Customer : $pelanggan\n";
        $caption .= "Barang : " . $this->receipt->barang . PHP_EOL;
        $caption .= "Kelengkapan : $kelengkapan\n";
        $caption .= "Kerusakan : " . $this->receipt->kerusakan . PHP_EOL . PHP_EOL;
        $caption .= str_repeat("-", 60) . PHP_EOL;
        $caption .= "*Info Lanjut Hub :* \n";
        $caption .= "HP : 08116407788\n\n";
        $caption .= "_Tunjukkan kartu ini pada saat ingin mengambil barang anda..._";

        return [
            'text' => $caption,
            'media' => "http://office.bpjnbabel.com/images/logo.png",
        ];
    }
}
