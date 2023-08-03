import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import ButtonUpdateStatus from "./ButtonUpdateStatus";
import * as Icon from "react-bootstrap-icons";
import Modal from "../Modal";
import Status from "./Status";
import Empty from "@/Components/Empty";
import ButtonIsTaken from "./ButtonIsTaken";

export default function ReceiptList({ receipts, processing }) {
    const { auth } = usePage().props;

    const statusChange = (id) => {
        Inertia.put(
            route("receipts.taken"),
            { id },
            { preserveScroll: true, replace: true }
        );
    };

    return receipts.length ? (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {receipts.map((receipt, index) => {
                return (
                    <div
                        className="card w-full bg-base-100 shadow border-2 border-slate-500 overflow-hidden"
                        key={index}
                    >
                        <figure className="relative">
                            <a href={receipt.image} target="_blank">
                                <img
                                    src={receipt.image}
                                    alt=""
                                    className="cursor-pointer"
                                />
                            </a>

                            <Status status={receipt.status} />
                        </figure>
                        <div className="card-body p-0">
                            <h1 className="card-title text-4xl flex justify-around bg-slate-300 py-2">
                                {receipt.receipt_number}
                            </h1>

                            <div className="p-3">
                                <p className="text-sm">
                                    {receipt.customer.name}
                                </p>
                                <p className="text-sm mb-2">
                                    {receipt.customer.phone}
                                </p>
                                <p className="text-sm capitalize">
                                    {receipt.category} -{" "}
                                    <span className="uppercase">
                                        {receipt.barang}
                                    </span>
                                </p>

                                {receipt.isTaken && (
                                    <div className="card-actions justify-end mt-4">
                                        <div className="badge badge-sm badge-success py-3 text-green-800">
                                            <Icon.CheckAll className="mr-2 text-xl" />{" "}
                                            Sudah Diambil
                                        </div>
                                    </div>
                                )}

                                <hr className="my-3" />
                                <div className="">
                                    {receipt.status == "Pending" && (
                                        <ButtonUpdateStatus
                                            variant="primary"
                                            data={{
                                                id: receipt.id,
                                                status: "proses",
                                            }}
                                            disable={processing}
                                        >
                                            PROSES
                                        </ButtonUpdateStatus>
                                    )}
                                    {!receipt.isTaken &&
                                    receipt.status != "Pending" &&
                                    receipt.status != "Proses" ? (
                                        <ButtonIsTaken id={receipt.id} />
                                    ) : (
                                        ""
                                    )}
                                    <Link
                                        href={route(
                                            "receipt.show",
                                            receipt.receipt_code
                                        )}
                                        className="btn btn-sm btn-success btn-outline w-full mt-2"
                                    >
                                        Lihat
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    ) : (
        <Empty />
    );
}
