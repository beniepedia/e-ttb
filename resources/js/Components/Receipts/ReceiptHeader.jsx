import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const ReceiptHeader = ({ receipt }) => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Detail Tanda Terima</h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                        <span className="badge badge-outline badge-lg text-white">
                            {receipt.receipt_number}
                        </span>
                        <span className="hidden md:block">•</span>
                        <span className="text-sm opacity-90">
                            {format(new Date(receipt.delivery_date), 'dd MMMM yyyy', { locale: id })}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-white/20 rounded-lg p-3">
                        <Icon.Receipt className="text-2xl" />
                    </div>
                    <div>
                        <div className="text-sm opacity-90">Kode TTB</div>
                        <div className="font-mono font-bold">{receipt.receipt_code}</div>
                    </div>
                </div>
            </div>
            
            <div className="divider my-4 opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-lg p-2">
                        <Icon.Person className="text-xl" />
                    </div>
                    <div>
                        <div className="text-sm opacity-90">Customer</div>
                        <div className="font-semibold">{receipt.customer?.name || '-'}</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-lg p-2">
                        <Icon.Clock className="text-xl" />
                    </div>
                    <div>
                        <div className="text-sm opacity-90">Status</div>
                        <div className="font-semibold capitalize">{receipt.status}</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-lg p-2">
                        <Icon.CurrencyDollar className="text-xl" />
                    </div>
                    <div>
                        <div className="text-sm opacity-90">Biaya</div>
                        <div className="font-semibold">
                            {receipt.cost ? `Rp ${parseInt(receipt.cost).toLocaleString('id-ID')}` : 'Belum ada biaya'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptHeader;