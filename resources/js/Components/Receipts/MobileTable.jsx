import React from "react";
import { Link } from "@inertiajs/react";

const MobileTable = ({ receiptData, currentPage, itemsPerPage }) => {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending':
                return <span className="badge badge-warning">Pending</span>;
            case 'proses':
                return <span className="badge badge-info">Proses</span>;
            case 'berhasil':
                return <span className="badge badge-success">Berhasil</span>;
            case 'gagal':
                return <span className="badge badge-error">Gagal</span>;
            default:
                return <span className="badge badge-ghost">{status}</span>;
        }
    };

    return (
        <div className="md:hidden mt-4 space-y-4">
            {receiptData && receiptData.length > 0 ? (
                receiptData.map((receipt, index) => (
                    <div key={receipt.id} className="card bg-base-100 shadow rounded-box border border-base-content/5">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="card-title text-lg font-bold">{receipt.receipt_number}</h3>
                                <span className="badge badge-primary">#{(currentPage - 1) * itemsPerPage + index + 1}</span>
                            </div>
                            <div className="space-y-2 mt-2">
                                <div className="flex items-center">
                                    <i className="bi bi-person mr-2"></i>
                                    <span>{receipt.customer?.name || '-'}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-info-circle mr-2"></i>
                                    {getStatusBadge(receipt.status)}
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-calendar mr-2"></i>
                                    <span>{new Date(receipt.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="card-actions justify-end mt-3">
                                <Link 
                                    href={route('receipts.show', receipt.id)}
                                    className="btn btn-sm btn-info"
                                >
                                    <i className="bi bi-eye mr-1"></i>
                                    Lihat
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-8">
                    <i className="bi bi-clipboard-data text-4xl text-base-300 mb-2"></i>
                    <p>Tidak ada data tanda terima</p>
                </div>
            )}
        </div>
    );
};

export default MobileTable;