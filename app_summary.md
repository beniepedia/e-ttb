1. Frontend (React/Inertia)
   📍 Komponen List (ReceiptsIndex.jsx)

Copy struktur dari CustomersNewIndex.jsx

Ubah semua label ke bahasa Indonesia:

Judul: Daftar Tanda Terima

Tombol tambah: Tambah Tanda Terima

Kolom tabel (contoh minimal):

Nomor TTB (ID / kode)

Nama Customer

Status

Tanggal dibuat

Aksi (lihat detail)

📍 Komponen Add (ReceiptsAdd.jsx)

Form harus mencakup:

Data Tanda Terima

Pilih Customer (dropdown/autocomplete)

Status (default pending)

Catatan teknisi (repair_notes)

Data Barang (Receipt Detail)

Category (laptop, printer, dll)

Merek

Model

Deskripsi kerusakan

Kelengkapan (input dinamis untuk menambah kabel, charger, tas, dll)

👉 Barang harus bisa lebih dari satu, jadi buat section + Tambah Barang.

2. UI/UX (Responsive Design)

Desktop: tampilkan form barang dalam bentuk grid (misalnya 2 kolom → kiri data barang, kanan kelengkapan).

Mobile: auto stack (satu per satu ke bawah).

Tambah tombol: + Tambah Barang → append komponen barang baru.

Untuk kelengkapan → gunakan input dinamis dengan tombol + Tambah Kelengkapan.

3. Flow

Kasir buka /receipts → lihat daftar TTB.

Klik Tambah Tanda Terima → masuk /receipts/add.

Isi data customer + barang + kelengkapan.

Submit → simpan di receipts, receipt_items, dan receipt_item_accessories.

Redirect balik ke list dengan notifikasi sukses.

📌 Jadi intinya:

List → mirip CustomersNewIndex.jsx, cuma ganti label ke bahasa Indonesia.

Add → form lebih kompleks karena ada receipt_items (multi item) + accessories.

tabel migrasi sudah saya bautkan,

-   2022_07_20_225505_create_receipt_table.php
-   2025_09_08_201444_create_receipt_details_table.php
