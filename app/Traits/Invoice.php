<?php

namespace App\Traits;

use App\Models\Receipts;
use App\Services\PdfService;

trait Invoice
{

    function Header()
    {
        $fpdf->Cell(0, 4, 'TANDA TERIMA BARANG', 0, 1);
    }

    public function receipt(Receipts $receipt)
    {
        $fpdf = new PdfService('L', 'mm', [140, 210]); // Continuous form size

        $fpdf->AddPage();
        $fpdf->SetFont('Courier', '', 10);

        // Header
        $fpdf->SetFont('Courier', 'B', 12);
        $fpdf->Cell(0, 4, 'TANDA TERIMA BARANG', 0, 1);
        $fpdf->SetFont('Courier', 'B', 12);
        $fpdf->Cell(0, 4, 'VENETA SYSTEM', 0, 1);

        $fpdf->Ln(1);

        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 4, 'Alamat  : Jl. Sisingamangaraja no. 45', 0, 1);
        $fpdf->Cell(0, 4, 'Telp/HP : 082174416077', 0, 0);

        $fpdf->SetFont('Courier', 'B', 10);
        $fpdf->Cell(0, 4, 'No. NOTA : TRM-2093939-0001', 0, 1, 'R');

        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 4, str_repeat("=", 99), 0, 1, 'C');

        $fpdf->Ln(1);

        $fpdf->Cell(30, 5, 'Tanggal Masuk', 0, 0);
        $fpdf->Cell(3, 5, ':', 0, 0);
        $fpdf->Cell(0, 5, $receipt->created_at->format('d-m-Y H:i'), 0, 0);

        $fpdf->Cell(0, 5, 'Petugas : ' . $receipt->user->name, 0, 1, 'R');


        if ($receipt->pickup_date) {
            $fpdf->Cell(30, 5, 'Tanggal Diambil', 0, 0);
            $fpdf->Cell(3, 5, ':', 0, 0);
            $fpdf->Cell(0, 5, $receipt->pickup_date->format('d-m-Y H:i'), 0, 1);
        }


        // Customer Info
        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(30, 5, 'Nama Pelanggan', 0, 0);
        $fpdf->Cell(3, 5, ':', 0, 0);
        $fpdf->Cell(0, 5, $receipt->customer->name ?? '-', 0, 0);

        $fpdf->Cell(0, 5, 'Tanggal : ' . date("d/m/Y"), 0, 1, 'R');

        $fpdf->Cell(30, 5, 'Telp/HP', 0, 0);
        $fpdf->Cell(3, 5, ':', 0, 0);
        $fpdf->Cell(0, 5, $receipt->customer->phone ?? '-', 0, 1);

        $fpdf->Ln(2);

        $fpdf->Cell(0, 3, str_repeat("-", 99), 0, 1, 'C');

        $col = [10, 40, 35, 50, 55];

        $fpdf->SetWidths($col);
        $fpdf->SetLineHeight(5);
        // Items Header
        $fpdf->SetFont('Courier', 'B', 9);
        $fpdf->Cell($col[0], 5, 'No', 0, 0, 'C');
        $fpdf->Cell($col[1], 5, 'Barang', 0, 0);
        $fpdf->Cell($col[2], 5, 'Nomor Seri', 0, 0);
        $fpdf->Cell($col[3], 5, 'Kelengkapan', 0, 0);
        $fpdf->Cell($col[4], 5, 'Kerusakan', 0, 1);

        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 3, str_repeat("-", 99), 0, 1, 'C');

        $fpdf->SetAligns(['C', '', '', '', '']);
        // Items Details
        $fpdf->SetFont('Courier', '', 9);
        if ($receipt->items && count($receipt->items) > 0) {
            foreach ($receipt->items as $index => $item) {
                $barang = ucwords("{$item->category} {$item->brand} {$item->model}");
                $fpdf->Row([
                    $index + 1,
                    $barang,
                    $item->sn,
                    $item->accessories,
                    $item->demmage
                ]);
                $fpdf->SetAutoPageBreak(true, 40);
            }
        }
        $fpdf->Ln(0.3);
        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 3, str_repeat("-", 99), 0, 1, 'C');


        // Terms and Conditions with bullet points
        $fpdf->SetFont('Courier', '', 9);

        $rules = [
            "Barang yang sudah selesai diperbaiki wajib diambil dalam waktu maksimal 1 bulan. Lewat dari itu, kami tidak bertanggung jawab atas barang tersebut.",
            "Garansi servis berlaku selama 1 bulan terhitung sejak barang diambil.",
            "Garansi hanya mencakup kerusakan yang sama dengan keluhan awal dan tidak mencakup kerusakan baru."
        ];


        $fpdf->SetFont('Courier', '', 8);
        $fpdf->SetY(95);
        $fpdf->Cell(5, 5, "Keterangan : ", 0, 1);
        foreach ($rules as $i => $rule) {
            // nomor
            $fpdf->Cell(5, 4, ($i + 1) . ".", 0, 0, "L");

            // simpan posisi X & Y
            $x = $fpdf->GetX();
            $y = $fpdf->GetY();

            // teks dengan indentasi
            $fpdf->MultiCell(95, 4, $rule, 0, "L");

            // set posisi ke kanan setelah multicell
            // $fpdf->SetXY($x, $y + 5);
        }
        // $fpdf->SetAutoPageBreak(true, 10);
        // multicell (kiri)

        // $fpdf->MultiCell(100, 4, $text, 1, "J");



        // pindahkan cursor ke kanan (tepat di samping multicell tadi)
        // $fpdf->SetXY($x + 110, $y);  // 110 = lebar multicell (100) + jarak 10

        // // buat signature di kanan
        // $fpdf->SetFont('Courier', '', 9);
        // $fpdf->Cell(80, 5, 'Hormat kami,', 0, 1, 'C');

        // // beri jarak kosong untuk tanda tangan
        // $fpdf->SetX($x + 110);
        // $fpdf->Cell(80, 5, '(....................)', 0, 1, 'C');

        // Return the PDF
        return response($fpdf->Output('S'), 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', 'inline; filename="invoice_' . $receipt->receipt_number . '.pdf"');
    }
}
