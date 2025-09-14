import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import * as Icon from 'react-bootstrap-icons';
import DesktopReceiptDetail from '@/Components/Receipts/DesktopReceiptDetail';
import MobileReceiptDetail from '@/Components/Receipts/MobileReceiptDetail';

const ReceiptDetail = ({ receipt }) => {
  const [activeTab, setActiveTab] = useState('items');

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount) return 'Rp 0';
    return `Rp ${parseInt(amount).toLocaleString('id-ID')}`;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  // Get status badge class
  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'proses':
        return 'bg-blue-100 text-blue-800';
      case 'selesai':
        return 'bg-green-100 text-green-800';
      case 'gagal':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Calculate overall status based on item statuses
  const calculateOverallStatus = () => {
    if (!receipt.items || receipt.items.length === 0) return 'pending';
    
    const statuses = receipt.items.map(item => item.status?.toLowerCase() || 'pending');
    
    // If any item is in "proses", overall status is "proses"
    if (statuses.includes('proses')) return 'proses';
    
    // If all items are "selesai", overall status is "selesai"
    if (statuses.every(status => status === 'selesai')) return 'selesai';
    
    // Default to "pending" if all items are pending
    return 'pending';
  };

  return (
    <AdminLayout>
      <Head title={`Detail Tanda Terima - ${receipt.receipt_number}`} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Detail Tanda Terima</h1>
          <p className="text-gray-600 mt-1">Informasi lengkap tentang tanda terima barang</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={route('receipts')}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Icon.ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-lg border border-neutral-300 rounded-lg overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-sm md:text-xl font-bold text-neutral-50">
                No. TTB : {receipt.receipt_number}
              </h2>
            </div>
          </div>
        </div>

        {/* Tabs for Mobile */}
        <div className="md:hidden border-b border-gray-200">
          <nav className="flex space-x-8 px-4" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('items')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'items' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 '}`}
            >
              Barang
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'info' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 '}`}
            >
              Info
            </button>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="p-3 sm:p-4">
          <DesktopReceiptDetail
            receipt={receipt}
            formatCurrency={formatCurrency}
            formatDate={formatDate}
            getStatusClass={getStatusClass}
            calculateOverallStatus={calculateOverallStatus}
          />

          <MobileReceiptDetail
            activeTab={activeTab}
            receipt={receipt}
            formatCurrency={formatCurrency}
            formatDate={formatDate}
            getStatusClass={getStatusClass}
            calculateOverallStatus={calculateOverallStatus}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ReceiptDetail;
