import React from 'react';
import { Link } from '@inertiajs/react';
import * as Icon from 'react-bootstrap-icons';

const DesktopTable = ({ receiptData, currentPage, itemsPerPage }) => {
  // Get status badge class for DaisyUI
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'badge-warning';
      case 'proses':
        return 'badge-info';
      case 'berhasil':
        return 'badge-success';
      case 'gagal':
        return 'badge-error';
      default:
        return 'badge-ghost';
    }
  };

  return (
    <div className="hidden md:block overflow-x-auto  border border-neutral-300 rounded-md">
      <table className="table table-sm">
        <thead className="bg-neutral-200 text-neutral-700">
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
              <tr key={receipt.id} className="hover">
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="font-medium">{receipt.receipt_number}</td>
                <td>{receipt.customer?.name || '-'}</td>
                <td>
                  <span className={`badge ${getStatusClass(receipt.status)} gap-1`}>
                    <span className="capitalize">{receipt.status}</span>
                  </span>
                </td>
                <td>{new Date(receipt.created_at).toLocaleDateString('id-ID')}</td>
                <td className="text-center">
                  <Link
                    href={route('receipt.show', { receipts: receipt.receipt_number })}
                    className="btn btn-sm btn-info"
                  >
                    <Icon.Eye className="h-4 w-4" />
                    Lihat
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
