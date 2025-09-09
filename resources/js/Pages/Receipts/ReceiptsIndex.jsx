import React, { useEffect, useState, useRef, useCallback } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage, router } from "@inertiajs/react";
import Search from "@/Components/Filters";
import DesktopTable from "@/Components/Receipts/DesktopTable";
import MobileTable from "@/Components/Receipts/MobileTable";
import Filters from "@/Components/Filters";
import Pagination from "@/Components/Pagination";
import Modal from "@/Components/Modal";
import Input from "@/Components/Input";
import AddReceiptModal from "@/Components/Receipts/AddReceiptModal";

export default function Page() {
    const { receipts } = usePage().props;
    const { data, meta } = receipts;

    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold">
                        <i className="bi bi-clipboard-data-fill pr-3"></i>
                        Daftar Tanda Terima
                    </h1>
                    <h6 className="text-neutral-500">
                        Daftar tanda terima barang
                    </h6>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-end gap-4 mb-4">
                <Filters
                    className={"w-full shadow"}
                    placeHolder={"Cari tanda terima..."}
                />

                <button
                    onClick={() =>
                        document
                            .getElementById("add_receipt_modal")
                            .showModal()
                    }
                    className="btn btn-primary shadow-lg shadow-blue-200 hidden md:block"
                >
                    <i className="bi bi-plus-circle mr-1 text-md"></i>
                    Tambah Tanda Terima
                </button>
            </div>

            {/* Desktop Table Component */}
            <DesktopTable
                receiptData={data}
                currentPage={meta.current_page}
                itemsPerPage={meta.per_page}
            />

            {/* Mobile Table Component */}
            <MobileTable receiptData={receipts.data} />

            <Pagination links={meta.links} />

            <AddReceiptModal id={"add_receipt_modal"} />

            <div className="fab bottom-20 md:hidden">
                <button
                    onClick={() =>
                        document
                            .getElementById("add_receipt_modal")
                            .showModal()
                    }
                    className="btn btn-lg btn-circle btn-primary shadow-blue-400 shadow-lg"
                >
                    <i className="bi bi-plus text-2xl font-bold"></i>
                </button>
            </div>
        </AdminLayout>
    );
}