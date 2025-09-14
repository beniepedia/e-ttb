import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import ItemDetailCard from './ItemDetailsCard';
import CustomerInfoModal from './CustomerInfoModal';
import StaffInfoModal from './StaffInfoModal';

const DesktopReceiptDetail = ({ receipt, formatCurrency, formatDate, getStatusClass, calculateOverallStatus }) => {
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);

  // Item detail card for desktop
  const ItemDetailCardWrapper = ({ item, index }) => <ItemDetailCard item={item} index={index} />;

  // Calculate total cost
  const calculateTotalCost = () => {
    if (!receipt.items || receipt.items.length === 0) return 0;
    return receipt.items.reduce((total, item) => total + (parseInt(item.cost) || 0), 0);
  };

  return (
    <>
      <div className="hidden md:grid grid-cols-1 gap-y-8">
        {/* Left Column - Items and Customer Info */}
        <div className="flex justify-evenly gap-x-4">
          {/* Customer Information Button */}
          <button 
            onClick={() => setIsCustomerModalOpen(true)}
            className="shadow border border-neutral-300 rounded-lg p-4 flex-1 bg-white hover:bg-gray-50 transition-colors flex flex-col items-center justify-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Icon.Person className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pelanggan</h3>
            <div className="text-center">
              <p className="text-sm text-gray-600 truncate w-full">{receipt.customer?.name || '-'}</p>
              <p className="text-xs text-gray-500 truncate w-full mt-1">{receipt.customer?.whatsapp || '-'}</p>
            </div>
            <div className="mt-3 text-xs text-blue-600 font-medium flex items-center">
              Lihat Detail <Icon.ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </button>

          {/* Staff Information Button */}
          <button 
            onClick={() => setIsStaffModalOpen(true)}
            className="shadow border border-neutral-300 rounded-lg p-4 flex-1 bg-white hover:bg-gray-50 transition-colors flex flex-col items-center justify-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Icon.PersonBadge className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Petugas</h3>
            <div className="text-center">
              <p className="text-sm text-gray-600 truncate w-full">{receipt.user?.name || '-'}</p>
              <p className="text-xs text-gray-500 truncate w-full mt-1">{receipt.user?.user_type || '-'}</p>
            </div>
            <div className="mt-3 text-xs text-blue-600 font-medium flex items-center">
              Lihat Detail <Icon.ChevronRight className="ml-1 h-4 w-4" />
            </div>
          </button>

          {/* Improved Status Card */}
          <div className="shadow border border-neutral-300 rounded-lg p-5 flex-1 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Icon.ClipboardCheck className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Status Tanda Terima</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Status</span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(calculateOverallStatus())}`}
                >
                  {calculateOverallStatus().toUpperCase()}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tgl Masuk</span>
                <span className="font-medium">{formatDate(receipt.delivery_date)}</span>
              </div>

              {receipt.pickup_date && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tgl Diambil</span>
                  <span className="font-medium">{formatDate(receipt.pickup_date)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Item Details and Cost Summary */}
        <div className="grid grid-cols-12 gap-6">
          {/* Item Details */}
          <div className="col-span-8 border border-neutral-300 shadow rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Icon.Box className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-900">Detail Barang</h3>
              <div className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {receipt.items?.length || 0} item
              </div>
            </div>

            {receipt.items && receipt.items.length > 0 ? (
              <div className="space-y-4">
                {receipt.items.map((item, index) => (
                  <ItemDetailCardWrapper key={index} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Icon.Box className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada barang</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Tidak ada detail barang untuk tanda terima ini.
                </p>
              </div>
            )}
          </div>

          {/* Cost Summary */}
          <div className="col-span-4 border border-neutral-300 shadow rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Icon.Wallet2 className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-900">Ringkasan Biaya</h3>
            </div>

            <div className="space-y-4">
              {receipt.items && receipt.items.length > 0 ? (
                <>
                  {receipt.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <div>
                        <p className="font-medium text-gray-900">Barang #{index + 1}</p>
                        <p className="text-sm text-gray-500">{item.brand} {item.model}</p>
                      </div>
                      <span className="font-medium text-gray-900">{formatCurrency(item.cost)}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-blue-600">{formatCurrency(calculateTotalCost())}</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Icon.Wallet2 className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada biaya</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Belum ada item dengan biaya.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <CustomerInfoModal 
        receipt={receipt} 
        isOpen={isCustomerModalOpen} 
        onClose={() => setIsCustomerModalOpen(false)} 
      />
      <StaffInfoModal 
        receipt={receipt} 
        isOpen={isStaffModalOpen} 
        onClose={() => setIsStaffModalOpen(false)} 
      />
    </>
  );
};

export default DesktopReceiptDetail;
