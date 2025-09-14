import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import MobileItemDetailCard from './MobileItemDetailCard';

const MobileReceiptDetail = ({
  activeTab,
  receipt,
  formatCurrency,
  formatDate,
  getStatusClass,
  calculateOverallStatus,
}) => {
  // Calculate total cost
  const calculateTotalCost = () => {
    if (!receipt.items || receipt.items.length === 0) return 0;
    return receipt.items.reduce((total, item) => total + (parseInt(item.cost) || 0), 0);
  };

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
              {receipt.items?.length || 0} item
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

          {/* Cost Summary for Mobile */}
          <div className="bg-white border border-neutral-300 shadow rounded-xl p-5 mt-6">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Icon.Wallet2 className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Ringkasan Biaya</h3>
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

          {/* Improved Status Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-neutral-200">
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
                <span className="text-gray-600">Tanggal Masuk</span>
                <span className="font-medium">{formatDate(receipt.delivery_date)}</span>
              </div>

              {receipt.pickup_date && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tanggal Diambil</span>
                  <span className="font-medium">{formatDate(receipt.pickup_date)}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Penerima</span>
                <span className="font-medium capitalize">{receipt.user?.name || '-'}</span>
              </div>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Biaya</h3>

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
      )}
    </div>
  );
};

export default MobileReceiptDetail;
