import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Divider from "../Divider";
import { currency } from "@/Helper";

const StatusExpired = () => {
    const { receipt } = usePage().props;
    const transaction = receipt.transaction;
    return (
        <div className="border-2 border-rose-500 bg-rose-300   rounded-lg shadow mb-6 py-3 text-red-900">
            <div className="flex justify-between px-4">
                <div>
                    <p className="text-sm">Status Pembayaran :</p>
                    <p className="font-semibold text-[.90rem]">
                        {" "}
                        {transaction.status}
                    </p>
                </div>
                <div className="flex items-end flex-col">
                    <p className="text-sm ">Batas Bayar</p>
                    <p className="text-[.90rem]">{transaction.expired_time}</p>
                </div>
            </div>
            <Divider className={"-mb-3 mt-1"}></Divider>
            <p className="mt-3 px-4 text-center text-[0.90rem]">
                Waktu pembayaran sudah habis. Silahkan buat transaksi baru.
            </p>
        </div>
    );
};

export default StatusExpired;
