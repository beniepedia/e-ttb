<?php

namespace App\Notifications;

use App\NotificationChannel\WhatsappChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendNotificationConfirmationToCustomer extends Notification
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
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toWhatsapp($notifiable)
    {

        $greetings = greetings();

        $perbaikan = "";
        $date = date("d/m/Y", strtotime($this->receipt->delivery_date));
        if ($this->receipt->status == 'Berhasil') {
            $cost = number_format($this->receipt->cost);
            $perbaikan .= "Perbaikan : {$this->receipt->repair}\n";
            $perbaikan .= "Biaya : Rp. $cost,-";
        }

        $content = <<<EOT
        
        🔵 *INFORMASI* 🔵
        ==================

        Selamat $greetings Bapak/Ibu, 
        Kami informasikan bahwa Tanda terima dengan detail sebagai berikut :
            
        No. TTB : {$this->receipt->receipt_number}
        Nama : $notifiable->name
        Tgl Masuk : $date
        Status : {$this->receipt->status}
        $perbaikan
        
        Sudah selesai dan bisa diambil dioutlet kami.

        *Terima Kasih...* 🙏🙏🙏

        *Info Lanjut Hub :*
        📱HP/WA : 08116407788

        *Cek status tanda terima*
        🌐 tandaterima.online/cek-status

        EOT;

        return [
            'text' => $content,
        ];
    }
}
