<?php

namespace App\Enums;


enum ReceiptStatus: Int
{
    case Pending    = 0;
    case Berhasil   = 1;
    case Gagal      = 2;
    case Proses     = 3;
}
