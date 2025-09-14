import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import * as Icon from 'react-bootstrap-icons';

const MobileTable = ({ receiptData, currentPage, itemsPerPage }) => {
  const [expandedRows, setExpandedRows] = useState({});

  // Get status badge class
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'proses': return 'bg-blue-100 text-blue-800';
      case 'berhasil': return 'bg-green-100 text-green-800';
      case 'gagal': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Toggle row expansion
  const toggleRowExpansion = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="md:hidden mt-6 space-y-4">
      {receiptData && receiptData.length > 0 ? (
        receiptData.map((receipt, index) => (
          <div
            key={receipt.id}
            className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden transition-all duration-200"
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{receipt.receipt_number}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    #{(currentPage - 1) * itemsPerPage + index + 1}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(receipt.status)}`}>
                    {receipt.status}
                  </span>
                  <button
                    onClick={() => toggleRowExpansion(receipt.id)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {expandedRows[receipt.id] ? 
                      <Icon.ChevronUp className="h-5 w-5" /> : 
                      <Icon.ChevronDown className="h-5 w-5" />
                    }
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex items-center">
                <Icon.Person className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-900 truncate">{receipt.customer?.name || '-'}</span>
              </div>
              
              <div className="mt-2 flex items-center">
                <Icon.Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-900">
                  {new Date(receipt.created_at).toLocaleDateString('id-ID')}
                </span>
              </div>
            </div>
            
            {expandedRows[receipt.id] && (
              <div className="border-t border-gray-200 bg-gray-50 p-5">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Kode TTB</span>
                    <span className="text-sm font-medium text-gray-900">{receipt.receipt_code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Customer</span>
                    <span className="text-sm font-medium text-gray-900 truncate max-w-[150px]">{receipt.customer?.name || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Tanggal</span>
                    <span className="text-sm font-medium text-gray-900">
                      {new Date(receipt.created_at).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 flex justify-end">
              <Link 
                href={route('receipt.show', { receipts: receipt.receipt_number })} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                <Icon.Eye className="h-4 w-4 mr-1" />
                Lihat Detail
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow">
          <Icon.Clipboard className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada data</h3>
          <p className="mt-1 text-sm text-gray-500">Tidak ada tanda terima untuk ditampilkan.</p>
        </div>
      )}
    </div>
  );
};

export default MobileTable;
