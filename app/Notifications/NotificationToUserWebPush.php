<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class NotificationToUserWebPush extends Notification
{
    use Queueable;
    private $receipt;

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
        return [WebPushChannel::class, 'database'];
    }

    public function toDatabase($notifiable)
    {
        $content = $this->content();

        if (empty($content)) return;

        return [
            'title' => $content['title'],
            'body' => $content['body'],
            'id' => $this->receipt->id,
            'url' => route("receipt.show", $this->receipt->receipt_code)
        ];
    }


    public function toWebPush($notifiable, $notification)
    {

        $content = $this->content();

        if (empty($content)) return;

        return (new WebPushMessage)
            ->title($content['title'])
            ->icon($content['icon'])
            ->body($content['body'])
            ->action('Tutup', "close")
            ->options(['TTL' => 1000])
            ->vibrate([100, 50, 100])
            ->data(['url' => route("receipt.show", $this->receipt->receipt_code)]);
        // ->badge()
        // ->dir()
        // ->image()
        // ->lang()
        // ->renotify()
        // ->requireInteraction()
        // ->tag()
        // ->vibrate()
    }

    private function content(): array
    {
        $receiptNumber = $this->receipt->receipt_number;
        $status = strtolower($this->receipt->status);
        $customerName = ucwords($this->receipt->customer->name);
        $cost = number_format($this->receipt->cost);
        $image = $this->receipt->image;

        $iconSuccess = $this->isImageNotNull($image) ? "/$image" : "/images/assets/success.png";
        $iconFail = $this->isImageNotNull($image) ? "/$image" : "/images/assets/fail.png";

        $appName = config("app.name");
        $userLogin = ucfirst(auth()->user()->name);

        switch ($status) {
            case "proses":
                $title = "$appName : Sedang di proses";
                $body = "Tanda terima dengan nomor ( $receiptNumber ) atas nama ( $customerName ) sedang diproses!. ( Diupdate Oleh : $userLogin )";
                $icon = $iconSuccess;
                break;
            case "gagal":
                $title = "$appName : Gagal di proses";
                $body = "Tanda terima dengan nomor ( $receiptNumber ) atas nama ( $customerName ) GAGAL diproses. Konfirmasi ke customer sekarang!. ( Diupdate Oleh : $userLogin )";
                $icon = $iconFail;
                break;
            case "berhasil":
                $title = "$appName : Berhasil";
                $body = "Tanda terima dengan nomor ( $receiptNumber ) atas nama ( $customerName ) Berhasil. Biaya perbaikan Rp. $cost ... ( Diupdate Oleh : $userLogin )";
                $icon = $iconSuccess;
                break;
            case "pending":
                $title = "$appName : TTB Baru";
                $body = "Tanda terima baru atas nama ( $customerName ) dengan No TTB ( $receiptNumber ), Proses sekarang!. ( Dibuat Oleh : $userLogin )";
                $icon = $iconSuccess;
                break;
            default:
                $title = "";
                $body = "";
                $icon = "";
                break;
        }

        return [
            'title' => $title,
            'body' => $body,
            'icon' => $icon,
        ];
    }

    private function isImageNotNull($image)
    {

        if (!empty($image)) {
            $imageFile = explode("/", $image)[2];

            if ($imageFile != "no_image.jpg") {
                return true;
            }
        }

        return false;
    }
}
