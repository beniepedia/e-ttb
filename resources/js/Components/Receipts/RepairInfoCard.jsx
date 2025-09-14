import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Status from '@/Components/Receipts/Status';

const RepairInfoCard = ({ receipt, auth }) => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="bg-base-100 rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-purple-100 text-purple-600 rounded-lg p-2">
                    <Icon.Tools className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold">Informasi Perbaikan</h3>
            </div>
            
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-gray-500">Status</div>
                        <div className="flex gap-2 mt-1">
                            <Status 
                                status={receipt.status}
                                className="rounded-full px-3 py-1 text-sm"
                            />
                            {receipt.isTaken && (
                                <div className="rounded-full px-3 py-1 bg-success text-white text-sm">
                                    Sudah Diambil
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="text-right">
                        <div className="text-gray-500">Biaya</div>
                        <div className="font-semibold text-lg">
                            {receipt.cost ? `Rp ${parseInt(receipt.cost).toLocaleString('id-ID')}` : 'Belum ada biaya'}
                        </div>
                    </div>
                </div>
                
                <div className="border-b pb-3">
                    <div className="text-gray-500">Keterangan Perbaikan</div>
                    <div className="mt-1">
                        {receipt.repair ? (
                            <div className="font-medium">{receipt.repair}</div>
                        ) : (
                            <div className="text-gray-400 italic">Belum ada keterangan perbaikan</div>
                        )}
                    </div>
                </div>
                
                <div>
                    <div className="flex justify-between items-center">
                        <div className="text-gray-500">Deskripsi</div>
                        {receipt.description && receipt.description.length > 100 && (
                            <button 
                                onClick={() => setExpanded(!expanded)}
                                className="text-sm text-blue-500 flex items-center"
                            >
                                {expanded ? 'Sembunyikan' : 'Selengkapnya'}
                                <Icon.ChevronDown 
                                    className={`ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`} 
                                />
                            </button>
                        )}
                    </div>
                    <div className="mt-1">
                        {receipt.description ? (
                            <div className={`${expanded ? '' : 'line-clamp-3'}`}>
                                {receipt.description}
                            </div>
                        ) : (
                            <div className="text-gray-400 italic">Belum ada deskripsi</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepairInfoCard;