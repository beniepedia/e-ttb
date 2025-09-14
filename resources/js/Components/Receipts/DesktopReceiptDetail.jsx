import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import ItemDetailCard from './ItemDetailsCard';
import UserDetailCard from './UserDetailCard';

const DesktopReceiptDetail = ({ receipt, formatCurrency, formatDate, getStatusClass }) => {
  // Item detail card for desktop
  const ItemDetailCardWrapper = ({ item, index }) => <ItemDetailCard item={item} index={index} />;

  return (
    <>
      <div className="hidden md:grid grid-cols-1 gap-y-8">
        {/* Left Column - Items and Customer Info */}
        <div className="flex justify-evenly gap-x-4">
          {/* Customer Information */}
          <UserDetailCard
            className={'w-full flex-1'}
            title={'Informasi Pelanggan'}
            data={[
              { label: 'Nama', value: receipt.customer.name },
              { label: 'No. Whatsapp', value: receipt.customer.whatsapp || '-' },
            ]}
          />

          <UserDetailCard
            className={'w-full flex-1'}
            title={'Informasi Petugas'}
            data={[
              { label: 'Nama', value: receipt.user.name },
              { label: 'Posisi', value: receipt.user.user_type || '-' },
            ]}
          />

          <div className="shadow border border-neutral-300 rounded-lg p-4 flex-1/10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Tanda Terima</h3>

            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span
                  className={`inline-flex items-center border border-neutral-300 px-2 rounded-lg text-xs font-medium ${getStatusClass(receipt.status)}`}
                >
                  PROSES
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tgl Masuk</span>
                <span className="font-medium">{formatDate(receipt.delivery_date)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Tgl Diambil</span>
                <span className="font-medium">{formatDate(receipt.delivery_date)}</span>
              </div>
              {/* {receipt.isTaken && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Tanggal Diambil</span>
                  <span className="font-medium">{formatDate(receipt.pickup_date)}</span>
                </div>
              )} */}
            </div>
          </div>
        </div>
        {/* Item Details */}
        <div className="lg:col-span-2 border border-neutral-300 shadow rounded-lg p-2">
          <div className="flex items-center p-2 mb-2">
            <div className="bg-green-100 p-2 rounded-lg">
              <Icon.Box className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="ml-3 text-xl font-semibold text-gray-900">Detail Barang</h3>
            <div className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {receipt.receiptDetails?.length || 0} item
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
      </div>
    </>
  );
};

export default DesktopReceiptDetail;
