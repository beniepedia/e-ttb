import React from "react";
import { Inertia } from "@inertiajs/inertia";
import Modal from "../Modal";

export default function ButtonIsTaken({ title = "sudah diambil ?", id }) {
    const statusChange = (id) => {
        Inertia.put(
            route("receipts.taken"),
            { id },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
            }
        );
    };

    return (
        <div>
            <a href="#modal" className="btn btn-sm btn-outline w-full">
                {title}
            </a>

            <Modal
                title="Update!"
                message="Yakin ingin mengubah status ttb sudah diambil ?"
                id="modal"
            >
                <a
                    href="#"
                    className="btn btn-sm btn-error text-white shadow-lg"
                >
                    BATAL
                </a>
                <a
                    href="#"
                    className="btn btn-sm md:btn-sm btn-success shadow-lg text-white"
                    onClickCapture={() => statusChange(id)}
                >
                    IYA, UBAH SEKARANG!
                </a>
            </Modal>
        </div>
    );
}
