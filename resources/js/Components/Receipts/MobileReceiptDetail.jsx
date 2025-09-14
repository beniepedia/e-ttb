import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import MobileItemDetailCard from './MobileItemDetailCard';

const MobileReceiptDetail = ({
  activeTab,
  receipt,
  formatCurrency,
  formatDate,
  getStatusClass,
}) => {
  return (
    <div className="md:hidden">
      {activeTab === 'items' ? (
        <div>
          <div className="flex items-center mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <Icon.Box className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="ml-3 text-xl font-semibold text-gray-900">Detail Barang</h3>
            <div className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {receipt.receiptDetails?.length || 0} item
            </div>
          </div>

          {receipt.items && receipt.items.length > 0 ? (
            <div>
              {receipt.items.map((item, index) => (
                <MobileItemDetailCard key={index} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <Icon.Box className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada barang</h3>
              <p className="mt-1 text-sm text-gray-500">
                Tidak ada detail barang untuk tanda terima ini.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Customer Information */}
          <div className="bg-gray-50 rounded-xl p-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Icon.Person className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Informasi Customer</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Nama Lengkap</p>
                <p className="font-medium text-gray-900">{receipt.customer?.name || '-'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Nomor Telepon</p>
                <p className="font-medium text-gray-900">{receipt.customer?.whatsapp || '-'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Alamat</p>
                <p className="font-medium text-gray-900">{receipt.customer?.address || '-'}</p>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Tanda Terima</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusClass(receipt.status)}`}
                >
                  {receipt.status}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tanggal Masuk</span>
                <span className="font-medium text-sm">{formatDate(receipt.delivery_date)}</span>
              </div>

              {receipt.isTaken && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Tanggal Diambil</span>
                  <span className="font-medium text-sm">{formatDate(receipt.pickup_date)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-gray-500">Penerima</span>
                <span className="font-medium capitalize text-sm">{receipt.user?.name || '-'}</span>
              </div>

              {receipt.handle_by && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Teknisi</span>
                  <span className="font-medium capitalize text-sm">{receipt.handle_by}</span>
                </div>
              )}
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Biaya</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Biaya Perbaikan</span>
                <span className="font-medium">{formatCurrency(receipt.cost)}</span>
              </div>

              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(receipt.cost)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileReceiptDetail;
