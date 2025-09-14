import React from 'react';
import { Link } from '@inertiajs/react';
import * as Icon from 'react-bootstrap-icons';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const ReceiptInfoCard = ({ receipt }) => {
    const formatDate = (date) => {
        return format(new Date(date), 'dd MMMM yyyy HH:mm', { locale: id });
    };

    const formatDateDistance = (date) => {
        const now = new Date();
        const dateObj = new Date(date);
        const diffInHours = Math.floor((now - dateObj) / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInHours / 24);
        
        if (diffInDays > 0) {
            return `${diffInDays} hari yang lalu`;
        } else if (diffInHours > 0) {
            return `${diffInHours} jam yang lalu`;
        } else {
            return 'Baru saja';
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Customer Information Card */}
            <div className="bg-base-100 rounded-xl shadow p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-100 text-blue-600 rounded-lg p-2">
                        <Icon.Person className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold">Informasi Customer</h3>
                </div>
                
                <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Nama</span>
                        <span className="font-medium">{receipt.customer?.name || '-'}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">No. Telp</span>
                        <span className="font-medium">{receipt.customer?.whatsapp || '-'}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Alamat</span>
                        <span className="font-medium">{receipt.customer?.address || '-'}</span>
                    </div>
                    
                    <div className="mt-4">
                        <Link 
                            href={route("customer.show", receipt.customer?.id)} 
                            className="btn btn-sm btn-outline btn-primary"
                        >
                            <Icon.Eye className="mr-1" /> Lihat Detail Customer
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Receipt Information Card */}
            <div className="bg-base-100 rounded-xl shadow p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="bg-green-100 text-green-600 rounded-lg p-2">
                        <Icon.FileText className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold">Informasi Tanda Terima</h3>
                </div>
                
                <div className="space-y-3">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">No. Kartu</span>
                        <span className="font-medium">{receipt.receipt_number}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Kode TTB</span>
                        <span className="font-mono font-medium">{receipt.receipt_code}</span>
                    </div>
                    
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Tanggal Masuk</span>
                        <div className="text-right">
                            <div className="font-medium">{formatDate(receipt.delivery_date)}</div>
                            <div className="text-xs text-gray-500">{formatDateDistance(receipt.delivery_date)}</div>
                        </div>
                    </div>
                    
                    {receipt.isTaken && receipt.pickup_date && (
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Tanggal Ambil</span>
                            <div className="text-right">
                                <div className="font-medium">{formatDate(receipt.pickup_date)}</div>
                                <div className="text-xs text-gray-500">{formatDateDistance(receipt.pickup_date)}</div>
                            </div>
                        </div>
                    )}
                    
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">Penerima</span>
                        <span className="font-medium capitalize">{receipt.user?.name || '-'}</span>
                    </div>
                    
                    {receipt.handle_by && (
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">Teknisi</span>
                            <span className="font-medium capitalize">{receipt.handle_by}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReceiptInfoCard;