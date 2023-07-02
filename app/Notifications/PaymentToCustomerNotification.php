<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class PaymentToCustomerNotification extends Notification
{
    use Queueable;

    public $transaction;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($transaction)
    {
        $this->transaction = $transaction;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [WebPushChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toWebPush($notifiable, $notification)
    {
        $status = strtoupper((string) $this->transaction->transaction_status);

        $message = '';
        $icon = '';
        $title = '';

        $amount = number_format($this->transaction->amount_total);

        switch ($status) {
            case 'PAID':
                $title = 'Pembayaran Diterima!';
                $message = "Pembayaran dari anda sebesar Rp. {$amount} telah kami terima. Terima Kasih 🙏🙏🙏";
                $icon = "/images/assets/success.png";
                break;
            case 'UNPAID':
                $title = 'Pembayaran!';
                $message = "Lakukan pembayaran sebesar Rp. {$amount} sebelum 10/06/2023 19:00";
                $icon = "/icons/icon-192-192.png";
                break;
            case 'EXPIRED':
                $title = 'Pembayaran Kadaluarsa!';
                $message = "Maaf, waktu pembayaran telah habis. Silakan lakukan pembayaran ulang. Terima kasih.";
                $icon = "/images/assets/fail.png";
                break;
            case "FAILED":
                $title = 'Pembayaran Gagal!';
                $message = "Pembayaran gagal diproses. Silakan cek kembali rincian pembayaran atau hubungi kami jika dana anda sudah terpotong.";
                $icon = "/images/assets/fail.png";
                break;
        }

        if (empty($message)) return;

        return (new WebPushMessage)
            ->title($title)
            ->icon($icon)
            ->body($message)
            ->action('Lihat Detail', url('/payment/' . $this->transaction->receipt->receipt_code))
            ->options(['TTL' => 1000]);
        // ->data(['id' => $notification->id])
        // ->badge()
        // ->dir()
        // ->image()
        // ->lang()
        // ->renotify()
        // ->requireInteraction()
        // ->tag()
        // ->vibrate()
    }
}
