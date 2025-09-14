import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const ItemDetailsCard = ({ item, index }) => {
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle item expansion
  const toggleItemExpansion = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Get status badge class for items
  const getItemStatusClass = (status) => {
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

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto transition-all duration-400 hover:shadow-md">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Barang #{index + 1}</h3>
            <div className="flex items-center mt-1">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getItemStatusClass(item.status)}`}>
                {item.status?.toUpperCase() || 'PENDING'}
              </span>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {item.category || '-'}
              </span>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 capitalize">
                {item.brand || '-'}
              </span>
            </div>
          </div>
          <button
            onClick={() => toggleItemExpansion(index)}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {expandedItems[index] ? (
              <Icon.ChevronUp className="h-5 w-5" />
            ) : (
              <Icon.ChevronDown className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Icon.Tag className="h-6 w-6 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Kategori</p>
              <p className="font-medium text-gray-900 uppercase">{item.category}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Icon.Box className="h-6 w-6 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Barang</p>
              <p className="font-medium text-gray-900 uppercase">{item.brand + ' ' + item.model}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Icon.Hash className="h-6 w-6 text-gray-400 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Serial Number</p>
              <p className="font-medium text-gray-900 font-mono">{item.sn || '-'}</p>
            </div>
          </div>
        </div>
        
        {/* Cost display */}
        {item.cost && (
          <div className="mt-4 flex justify-end">
            <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-1">
              <span className="text-amber-800 font-medium text-sm">
                Biaya: {`Rp ${parseInt(item.cost).toLocaleString('id-ID')}`}
              </span>
            </div>
          </div>
        )}
      </div>

      {expandedItems[index] && (
        <div className="border-t border-gray-200 bg-neutral-100 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-3">
                <Icon.ExclamationTriangle className="h-5 w-5 text-amber-500 mr-2" />
                <h4 className="font-medium text-gray-900">Kerusakan</h4>
              </div>
              <p className="text-gray-700">{item.demmage || 'Tidak ada deskripsi kerusakan'}</p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Icon.Tools className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-medium text-gray-900">Perbaikan</h4>
              </div>
              <p className="text-gray-700">{item.repair || 'Tidak ada deskripsi perbaikan'}</p>
            </div>

            <div>
              <div className="flex items-center mb-3">
                <Icon.Tools className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-medium text-gray-900">Teknisi</h4>
              </div>
              <p className="capitalize text-gray-700">{item.handled_by || '-'}</p>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <Icon.Puzzle className="h-5 w-5 text-purple-500 mr-2" />
                <h4 className="font-medium text-gray-900">Aksesoris</h4>
              </div>
              {item.accessories ? (
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(item.accessories)
                    ? item.accessories
                    : item.accessories.split(',')
                  ).map((accessory, accIndex) => (
                    <span
                      key={accIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                    >
                      {typeof accessory === 'object' ? accessory.label : accessory.trim()}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">Tidak ada aksesoris</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsCard;
