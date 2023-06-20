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

        $sendData = [
            'to' => $data['to'] ?? $id,
            'text' => $data['text']
        ];

        if (isset($data['media']) && !empty($data['media'])) {
            $sendData['media'] = $data['media'];
            $send = WhatsApp::sendMedia($sendData);
        } else {
            $send = WhatsApp::sendMessage($sendData);
        }

        // dd($sendData);

        if (!$send['success']) {
            throw new Exception($send['message']);
        }
    }
}
