import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Divider from "../Divider";
import { currency } from "@/Helper";

const StatusSuccess = () => {
    const { receipts } = usePage().props;
    const transaction = receipts.transaction;
    return (
        <div className="border-2 border-green-500 bg-green-400 dark:bg-emerald-700 dark:text-emerald-100 rounded-lg shadow mb-6 py-3">
            <div className="flex justify-between px-4">
                <p>Status Pembayaran </p>
                <p className="font-semibold ">( {transaction.status} )</p>
            </div>
            <Divider className={"-mb-3 mt-2"}></Divider>
            <p className="mt-3 px-4 text-center text-[0.90rem]">
                Pembayaran dari anda sebesar{" "}
                <span className="font-semibold">
                    Rp. {currency(transaction?.payload?.amount)},-
                </span>{" "}
                telah kami terima. Terima kasih🙏🙏🙏
            </p>
        </div>
    );
};

export default StatusSuccess;
