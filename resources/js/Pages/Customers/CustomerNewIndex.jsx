import React, { useEffect, useState, useRef, useCallback } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage, router } from "@inertiajs/react";
import Search from "@/Components/Filters";
import DesktopTable from "@/Components/Customers/DesktopTable";
import MobileTable from "@/Components/Customers/MobileTable";
import Filters from "@/Components/Filters";
import Pagination from "@/Components/Pagination";
import Modal from "@/Components/Modal";
import Input from "@/Components/Input";
import AddCustomerModal from "@/Components/Customers/AddCustomerModal";

export default function Page() {
    const { customers } = usePage().props;
    const { data, meta } = customers;

    return (
        <AdminLayout>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold">
                        <i className="bi bi-people-fill pr-3"></i>
                        Pelanggan
                    </h1>
                    <h6 className="text-neutral-500">
                        Daftar pelanggan terdaftar
                    </h6>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-end gap-4 mb-4">
                <Filters
                    className={"w-full shadow"}
                    placeHolder={"Cari pelanggan..."}
                />

                <button
                    onClick={() =>
                        document
                            .getElementById("add_customer_modal")
                            .showModal()
                    }
                    className="btn btn-primary shadow-lg shadow-blue-200 hidden md:block"
                >
                    <i className="bi bi-plus-circle mr-1 text-md"></i>
                    Tambah
                </button>
            </div>

            {/* Desktop Table Component */}
            <DesktopTable
                customerData={data}
                currentPage={meta.current_page}
                itemsPerPage={meta.per_page}
            />

            {/* Mobile Table Component */}
            <MobileTable customerData={customers.data} />

            <Pagination links={meta.links} />

            <AddCustomerModal id={"add_customer_modal"} />

            <div className="fab bottom-20 md:hidden">
                <button
                    onClick={() =>
                        document
                            .getElementById("add_customer_modal")
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
