<?php

namespace App\Http\Controllers;

use App\Notifications\NotificationTelegramToAdmin;
use App\Notifications\ReplyTelegramNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use NotificationChannels\Telegram\Telegram;
use NotificationChannels\Telegram\TelegramMessage;
use NotificationChannels\Telegram\TelegramUpdates;
use Artisan;
use Illuminate\Support\Facades\Artisan as FacadesArtisan;

class TelegramBotController extends Controller
{
    public function index(Request $request)
    {

        if ($request->has("message")) {
            $message = $request->input("message");

            $chatId = $message['chat']['id'];
            $fullName = $message['chat']['first_name'] . ' ' . $message['chat']['last_name'];
            $text = $message['text'];

            if ($text == "systemdown") {
                FacadesArtisan::call("down --refresh=15");
            }
            // Notification::send($chatId, new ReplyTelegramNotification);
            // Log::info(Notification::send($chatId, new ReplyTelegramNotification));
        }

        exit;
        $updates = TelegramUpdates::create()
            // (Optional). Get's the latest update. NOTE: All previous updates will be forgotten using this method.
            // ->latest()

            // (Optional). Limit to 2 updates (By default, updates starting with the earliest unconfirmed update are returned).
            ->limit(2)

            // (Optional). Add more params to the request.
            ->options([
                'timeout' => 0,
            ])
            ->get();

        if ($updates['ok']) {
            Log::info("ada masuk");
            // Chat ID
            // $chatId = $updates['result'][0]['message']['chat']['id'];
            // Notification::send('', new NotificationTelegramToAdmin(['tes' => 'asdasd']));
        }
    }
}
