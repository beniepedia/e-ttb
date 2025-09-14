import React from 'react';

const ReceiptItems = ({ items }) => {
    if (!items || items.length === 0) {
        return (
            <div className="bg-base-100 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Detail Barang</h3>
                <div className="alert alert-info">
                    <span>Tidak ada detail barang untuk tanda terima ini.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-base-100 rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-base-200">
                <h3 className="text-lg font-semibold">Detail Barang</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className="bg-base-200">No</th>
                            <th className="bg-base-200">Kategori</th>
                            <th className="bg-base-200">Merek</th>
                            <th className="bg-base-200">Model</th>
                            <th className="bg-base-200">Serial Number</th>
                            <th className="bg-base-200">Aksesoris</th>
                            <th className="bg-base-200">Kerusakan</th>
                            <th className="bg-base-200">Teknisi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="capitalize">{item.category}</td>
                                <td className="capitalize">{item.brand}</td>
                                <td>{item.model}</td>
                                <td>{item.sn}</td>
                                <td>
                                    {item.accessories ? 
                                        (Array.isArray(item.accessories) ? 
                                            item.accessories.join(', ') : 
                                            item.accessories) : 
                                        'Tidak ada'}
                                </td>
                                <td>{item.demmage}</td>
                                <td className="capitalize">{item.handled_by || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReceiptItems;