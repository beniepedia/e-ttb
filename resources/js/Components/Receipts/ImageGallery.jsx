import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

const ImageGallery = ({ image, receiptCode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    return (
        <div className="bg-base-100 rounded-xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-pink-100 text-pink-600 rounded-lg p-2">
                    <Icon.Image className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold">Gambar Barang</h3>
            </div>
            
            <div className="flex flex-col items-center">
                {image && image !== 'no_image.jpg' ? (
                    <>
                        <div 
                            className="relative w-full max-w-md h-64 bg-base-200 rounded-lg overflow-hidden cursor-pointer border-2 border-dashed border-base-300"
                            onClick={openModal}
                        >
                            <img 
                                src={`/${image}`} 
                                alt="Gambar barang" 
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center">
                                <Icon.ZoomIn className="text-white text-2xl opacity-0 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                            Klik gambar untuk memperbesar
                        </div>
                        
                        {/* Modal */}
                        {isModalOpen && (
                            <div 
                                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                                onClick={closeModal}
                            >
                                <div 
                                    className="relative max-w-4xl max-h-[90vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button 
                                        className="absolute -top-10 right-0 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                                        onClick={closeModal}
                                    >
                                        <Icon.X className="text-xl" />
                                    </button>
                                    <img 
                                        src={`/${image}`} 
                                        alt="Gambar barang" 
                                        className="max-w-full max-h-[80vh] object-contain"
                                    />
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="w-full max-w-md h-64 bg-base-200 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-base-300">
                        <Icon.Image className="text-4xl text-gray-400 mb-2" />
                        <p className="text-gray-500">Tidak ada gambar</p>
                        <p className="text-sm text-gray-400 mt-1">Gambar belum diunggah</p>
                    </div>
                )}
                
                <div className="mt-4">
                    <a 
                        href={`/images/ttb/ttb_${receiptCode}.png`} 
                        target="_blank"
                        className="btn btn-sm btn-outline btn-primary"
                    >
                        <Icon.Download className="mr-1" /> Unduh Kartu TTB
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;