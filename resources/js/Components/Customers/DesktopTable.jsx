import React from 'react';

const DesktopTable = ({ customerData, currentPage, itemsPerPage }) => {
  return (
    <div className="hidden md:block overflow-x-auto shadow rounded-box border border-base-content/5 bg-base-100">
      <table className="table  table-sm">
        {/* head */}
        <thead className="bg-neutral-200 text-neutral-700">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Telepon</th>
            <th>Whatsapp</th>
            <th>Alamat</th>
            <th className="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          {customerData && customerData.length > 0 ? (
            customerData.map((customer, index) => (
              <tr key={customer.id}>
                <th>{(currentPage - 1) * itemsPerPage + index + 1}</th>
                <td className="font-medium">{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.whatsapp || '-'}</td>
                <td className="max-w-xs truncate">{customer.address || '-'}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-info ">
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Tidak ada data pelanggan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DesktopTable;
