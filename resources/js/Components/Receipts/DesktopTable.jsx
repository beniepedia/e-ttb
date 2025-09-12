import React from 'react';
import { Link } from '@inertiajs/react';

const DesktopTable = ({ receiptData, currentPage, itemsPerPage }) => {
  return (
    <div className="hidden md:block overflow-x-auto shadow rounded-box border border-base-content/5 bg-base-100">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Nomor TTB</th>
            <th>Nama Customer</th>
            <th>Status</th>
            <th>Tanggal Dibuat</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {receiptData && receiptData.length > 0 ? (
            receiptData.map((receipt, index) => (
              <tr key={receipt.id}>
                <th>{(currentPage - 1) * itemsPerPage + index + 1}</th>
                <td className="font-medium">{receipt.receipt_number}</td>
                <td>{receipt.customer?.name || '-'}</td>
                <td>
                  <span
                    className={`badge ${
                      receipt.status === 'pending'
                        ? 'badge-warning'
                        : receipt.status === 'proses'
                          ? 'badge-info'
                          : receipt.status === 'berhasil'
                            ? 'badge-success'
                            : 'badge-error'
                    }`}
                  >
                    {receipt.status}
                  </span>
                </td>
                <td>{new Date(receipt.created_at).toLocaleDateString()}</td>
                <td className="text-center">
                  <Link href="" className="btn btn-sm btn-info">
                    <i className="bi bi-eye"></i>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                Tidak ada data tanda terima
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DesktopTable;
