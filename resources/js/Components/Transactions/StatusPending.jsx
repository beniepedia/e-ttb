import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Divider from "../Divider";
import { currency } from "@/Helper";
import { toast } from "@/Components/Alert";

const StatusPending = () => {
    const { receipt } = usePage().props;
    const transaction = receipt?.transaction;
    const qr_url = transaction?.payload?.qr_url || null;

    const handleCopy = () => {
        const teks = transaction?.payload?.pay_code;

        navigator.clipboard.writeText(teks).then(
            function () {
                toast.info("Kode Virtual berhasil disalin.");
            },
            function (err) {
                // console.error("Gagal menyalin teks ke clipboard:", err);
            }
        );
    };
    return (
        <div className="border-2 border-yellow-600 alert-warning rounded-lg shadow mb-6 py-3">
            <div className="flex justify-between px-4">
                <div>
                    <p className="text-sm ">Status Pembayaran </p>
                    <p className="font-semibold text-[.90rem]">
                        ( {transaction.status} )
                    </p>
                </div>
                <div className="flex items-end flex-col">
                    <p className="text-sm ">Batas Bayar</p>
                    <p className="text-[.90rem]">{transaction.expired_time}</p>
                </div>
            </div>
            <Divider className={"-mb-3 mt-2"}></Divider>
            <p className="mt-3 px-4 text-center text-[0.90rem]">
                Segera lakukan pembayaran sebesar{" "}
                <span className="font-semibold">
                    Rp. {currency(transaction?.payload?.amount)},-
                </span>{" "}
                melalui{" "}
                <span className="font-semibold">
                    {transaction?.payload?.payment_name}
                </span>
                .
            </p>
            <p className="flex flex-col mt-5 text-center">
                {qr_url && (
                    <div className="flex flex-col px-10 items-center gap-2 mb-5">
                        <p className="font-semibold">SCAN DISINI</p>
                        <img
                            src={qr_url}
                            alt="qr code"
                            className="w-72 bg-white p-4 rounded-xl shadow border-4 border-amber-600"
                        />
                    </div>
                )}

                {!qr_url && (
                    <>
                        <span className="text-sm">Kode Bayar :</span>
                        <span
                            className="px-4 text-lg font-semibold"
                            onDoubleClick={() => handleCopy()}
                        >
                            {transaction?.payload?.pay_code}{" "}
                        </span>
                    </>
                )}
            </p>
        </div>
    );
};

export default StatusPending;
