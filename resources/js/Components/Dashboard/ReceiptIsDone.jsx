import React, { useState } from "react";
import Button from "@/Components/Button";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import * as Icon from "react-bootstrap-icons";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { toast } from "@/Components/Alert";

const ReceiptIsDone = ({ ...data }) => {
    const [sending, setSending] = useState(false);

    const handleclick = (value) => {
        setSending(true);
        Inertia.post(
            route("receipts.confirmation", value),
            {},
            {
                onFinish: (e) => {
                    setSending(false);
                },
                onError: (e) => {
                    console.log(e);
                },
                replace: true,
            }
        );
    };

    return (
        <>
            {data.receipt_status.length ? (
                <>
                    <div className="p-3 dark:bg-teal-700 bg-teal-500 rounded-t-lg text-white font-semibold">
                        Daftar Tanda Terima
                        <span className="text-[13px] block font-normal">
                            Daftar tanda terima yang sudah selesai diproses dan
                            bisa dikonfirmasi ke customer.
                        </span>
                    </div>
                    <div className="overflow-x-auto  ">
                        {data.receipt_status.map((receipt) => {
                            return (
                                <div
                                    tabIndex={0}
                                    className="collapse  collapse-arrow "
                                    key={receipt.id}
                                >
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title flex justify-between items-center dark:bg-slate-700 bg-white text-black-content peer-checked:dark:bg-slate-800 peer-checked:bg-amber-200 peer-checked:text-amber-200-content font-semibold">
                                        {receipt.customer.name}{" "}
                                        <span
                                            className={`badge ${
                                                receipt.status == "Berhasil"
                                                    ? "badge-success text-emerald-800"
                                                    : "badge-error text-rose-800"
                                            }`}
                                        >
                                            {receipt.status}
                                        </span>
                                    </div>
                                    <div className="collapse-content dark:bg-slate-600 bg-white text-white-content peer-checked:dark:bg-slate-600 peer-checked:bg-amber-100 peer-checked:text-sky-300-content">
                                        <table className="my-5 w-full table-center table-compact">
                                            <tbody>
                                                <tr>
                                                    <td>No. Register</td>
                                                    <td>:</td>
                                                    <td>
                                                        {receipt.receipt_code}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>No. TTB</td>
                                                    <td>:</td>
                                                    <td>
                                                        {receipt.receipt_number}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tgl Masuk</td>
                                                    <td>:</td>
                                                    <td>
                                                        {format(
                                                            new Date(
                                                                receipt.delivery_date
                                                            ),
                                                            "dd LLLL yyyy",
                                                            { locale: id }
                                                        )}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Customer</td>
                                                    <td>:</td>
                                                    <td>
                                                        {receipt.customer.name}{" "}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Teknisi</td>
                                                    <td>:</td>
                                                    <td>{receipt.user.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status</td>
                                                    <td>:</td>
                                                    <td>
                                                        <div
                                                            className={`badge badge-${
                                                                receipt.status ==
                                                                "Berhasil"
                                                                    ? "success"
                                                                    : "error"
                                                            }`}
                                                        >
                                                            {receipt.status}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="text-right">
                                            <Link
                                                href={route(
                                                    "receipt.show",
                                                    receipt.receipt_code
                                                )}
                                                className="btn btn-ghost btn-circle mr-3"
                                            >
                                                <Icon.InfoCircleFill className="text-xl text-sky-600" />
                                            </Link>
                                            {receipt.customer.whatsapp && (
                                                <Button
                                                    className="btn-success btn-sm"
                                                    processing={sending}
                                                    handleClick={() =>
                                                        handleclick(receipt.id)
                                                    }
                                                >
                                                    {!sending && (
                                                        <Icon.Whatsapp className="text-xl text-green-700" />
                                                    )}
                                                    &nbsp;&nbsp;Konfirmasi
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};

export default ReceiptIsDone;
