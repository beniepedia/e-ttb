import React from 'react';

export default function StaffInfoModal({ receipt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <dialog id="staff_info_modal" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Informasi Petugas</h3>
        <div className="py-4 space-y-4">
          <div>
            <label className="text-sm text-gray-500">Nama</label>
            <p className="font-medium">{receipt.user?.name || '-'}</p>
          </div>
          
          <div>
            <label className="text-sm text-gray-500">Posisi</label>
            <p className="font-medium">{receipt.user?.user_type || '-'}</p>
          </div>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
}