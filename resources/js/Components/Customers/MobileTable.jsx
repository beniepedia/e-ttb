import React from "react";

const MobileTable = ({ customerData, currentPage, itemsPerPage }) => {
    return (
        <div className="md:hidden mt-4 space-y-4">
            {customerData && customerData.length > 0 ? (
                customerData.map((customer, index) => (
                    <div key={customer.id} className="card bg-base-100 shadow rounded-box border border-base-content/5">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-start">
                                <h3 className="card-title text-lg font-bold">{customer.name}</h3>
                                <span className="badge badge-primary">#{(currentPage - 1) * itemsPerPage + index + 1}</span>
                            </div>
                            <div className="space-y-2 mt-2">
                                <div className="flex items-center">
                                    <i className="bi bi-telephone mr-2"></i>
                                    <span>{customer.phone || '-'}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bi bi-whatsapp mr-2"></i>
                                    <span>{customer.whatsapp || '-'}</span>
                                </div>
                                <div className="flex items-start">
                                    <i className="bi bi-geo-alt mr-2 mt-1"></i>
                                    <span>{customer.address || '-'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center py-8">
                    <i className="bi bi-people text-4xl text-base-300 mb-2"></i>
                    <p>Tidak ada data pelanggan</p>
                </div>
            )}
        </div>
    );
};

export default MobileTable;