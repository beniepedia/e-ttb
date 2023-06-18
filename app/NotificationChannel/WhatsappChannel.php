<?php

namespace App\NotificationChannel;

use App\Facades\WhatsApp;
use Exception;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;

class WhatsappChannel
{
    public function send($notifiable, Notification $notification)
    {
        if (method_exists($notifiable, 'routeNotificationForWhatsapp')) {
            $id = $notifiable->routeNotificationForWhatsapp($notifiable);
        } else {
            Log::error("Gagal menggirim pesan whatsapp ke tujuan karena nomor tidak tersedia");
            return;
        }

        $data = method_exists($notification, 'toWhatsapp')
            ? $notification->toWhatsapp($notifiable)
            : $notification->toArray($notifiable);

        if (empty($data)) {
            return;
        }

        if (isset($data['media']) && !empty($data['media'])) {
            $send = WhatsApp::sendMedia([
                'to' => $id,
                'text' => $data['text'],
                'media' => $data['media']
            ]);
        } else {
            $send = WhatsApp::sendMessage([
                'to' => $id,
                'text' => $data['text'],
            ]);
        }

        if (!$send['success']) {
            throw new Exception($send['message']);
        }
    }
}
