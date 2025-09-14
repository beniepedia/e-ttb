<?php

namespace App\Traits;

use Codedge\Fpdf\Fpdf\Fpdf;
use App\Models\Receipts;

trait Invoice
{
    public function receipt(Receipts $receipt)
    {
        $fpdf = new Fpdf('L', 'mm', [140, 210]); // Continuous form size
        $fpdf->AddPage();
        $fpdf->SetFont('Courier', '', 10);

        // Header
        $fpdf->SetFont('Courier', 'B', 12);
        $fpdf->Cell(0, 4, 'TANDA TERIMA BARANG', 0, 1);
        $fpdf->SetFont('Courier', 'B', 12);
        $fpdf->Cell(0, 4, 'SERVICE ELECTRONIC', 0, 1);
        $fpdf->Ln(2);

        $fpdf->SetFont('Courier', '', 10);
        $fpdf->Cell(0, 4, 'Jl. Contoh Alamat No. 123 Telp. (021) 12345678', 0, 1);
        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 4, str_repeat("=", 99), 0, 1, 'C');

        // Receipt Info

        $fpdf->Cell(35, 5, 'No. TTB', 0, 0);
        $fpdf->Cell(5, 5, ':', 0, 0);
        $fpdf->SetFont('Courier', 'B', 9);
        $fpdf->Cell(0, 5, $receipt->receipt_number, 0, 1);

        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(35, 5, 'Tanggal Masuk', 0, 0);
        $fpdf->Cell(5, 5, ':', 0, 0);
        $fpdf->Cell(0, 5, $receipt->created_at->format('d-m-Y H:i'), 0, 1);

        if ($receipt->pickup_date) {
            $fpdf->Cell(35, 5, 'Tanggal Diambil', 0, 0);
            $fpdf->Cell(5, 5, ':', 0, 0);
            $fpdf->Cell(0, 5, $receipt->pickup_date->format('d-m-Y H:i'), 0, 1);
        }


        // Customer Info
        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(35, 5, 'Nama Pelanggan', 0, 0);
        $fpdf->Cell(5, 5, ':', 0, 0);
        $fpdf->Cell(0, 5, $receipt->customer->name ?? '-', 0, 1);

        $fpdf->Cell(35, 5, 'No. Telp/HP', 0, 0);
        $fpdf->Cell(5, 5, ':', 0, 0);
        $fpdf->Cell(0, 5, $receipt->customer->phone ?? '-', 0, 1);

        $fpdf->Ln(2);

        $fpdf->Cell(0, 3, str_repeat("-", 99), 0, 1, 'C');

        // Items Header
        $fpdf->SetFont('Courier', 'B', 9);
        $fpdf->Cell(10, 5, 'No', 0, 0, 'C');
        $fpdf->Cell(50, 5, 'Barang', 0, 0);
        // $fpdf->Cell(45, 5, 'Merek & Model', 0, 0);
        $fpdf->Cell(30, 5, 'Nomor Seri', 0, 0);
        $fpdf->Cell(25, 5, 'Kelengkapan', 0, 0);
        $fpdf->Cell(25, 5, 'Biaya', 0, 1);

        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 3, str_repeat("-", 99), 0, 1, 'C');

        // Items Details
        $fpdf->SetFont('Courier', '', 8);
        if ($receipt->items && count($receipt->items) > 0) {
            foreach ($receipt->items as $index => $item) {
                $barang = ucwords("{$item->category} {$item->brand} {$item->model}");
                $cost = (int)($item->cost ?? 0);
                $fpdf->Cell(10, 5, $index + 1, 0, 0, 'C');
                $fpdf->Cell(50, 5, $barang, 0, 0);
                // $fpdf->Cell(45, 5, substr(($item->brand ?? '') . ' ' . ($item->model ?? ''), 0, 15), 0, 0);
                $fpdf->Cell(30, 5, $item->sn ?? '-', 0, 0);
                $fpdf->Cell(25, 5, $item->accessories ?? '-', 0, 0);
                $fpdf->Cell(25, 5, 'Rp ' . number_format($cost, 0, ',', '.'), 0, 1, 'R');
            }
        }

        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(0, 3, str_repeat("-", 99), 0, 1, 'C');
        $fpdf->Ln(1);

        // Cost Summary
        $totalCost = 0;
        if ($receipt->items && count($receipt->items) > 0) {
            foreach ($receipt->items as $item) {
                $totalCost += (int)($item->cost ?? 0);
            }
        }

        $fpdf->SetFont('Courier', 'B', 10);
        $fpdf->Cell(140, 5, 'TOTAL BIAYA', 0, 0, 'R');
        $fpdf->Cell(25, 5, 'Rp ' . number_format($totalCost, 0, ',', '.'), 0, 1, 'R');

        $fpdf->Ln(2);

        // Terms and Conditions
        $fpdf->SetFont('Courier', '', 8);
        $fpdf->MultiCell(0, 4, 'Barang yang sudah diambil tidak dapat dikomplain. Garansi service 1 bulan. Klaim garansi tidak termasuk aksesoris.', 0, 'L');
        $fpdf->Ln(3);

        // Signatures
        $fpdf->SetFont('Courier', '', 9);
        $fpdf->Cell(80, 5, 'Penerima,', 0, 0, 'C');
        $fpdf->Cell(85, 5, 'Hormat kami,', 0, 1, 'C');

        $fpdf->Ln(15);

        $fpdf->Cell(80, 5, '(_______________________)', 0, 0, 'C');
        $fpdf->Cell(85, 5, '(_______________________)', 0, 1, 'C');

        $fpdf->Ln(1);
        $fpdf->SetFont('Courier', '', 7);
        $fpdf->Cell(0, 5, 'Terima kasih atas kunjungan Anda', 0, 1, 'C');

        // Return the PDF
        return response($fpdf->Output('S'), 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', 'inline; filename="invoice_' . $receipt->receipt_number . '.pdf"');
    }
}
