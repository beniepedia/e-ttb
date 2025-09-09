import React from "react";
import { Link } from "@inertiajs/react";

const AddReceiptModal = ({ id }) => {
    return (
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    <i className="bi bi-clipboard-plus mr-2"></i>
                    Tambah Tanda Terima Baru
                </h3>
                <p className="py-4">Silakan pilih opsi untuk menambah tanda terima baru.</p>
                <div className="modal-action flex flex-col sm:flex-row gap-3">
                    <Link
                        href={route("receipts.create")}
                        className="btn btn-primary flex-1"
                    >
                        <i className="bi bi-pencil-square mr-2"></i>
                        Buat Manual
                    </Link>
                    <button
                        onClick={() =>
                            document.getElementById(id).close()
                        }
                        className="btn btn-ghost flex-1"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default AddReceiptModal;