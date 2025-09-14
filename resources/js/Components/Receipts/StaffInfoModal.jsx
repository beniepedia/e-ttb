import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function StaffInfoModal({ receipt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <dialog id="staff_info_modal" className="modal modal-bottom sm:modal-middle" open>
      <div className="modal-box max-w-md">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Icon.PersonBadge className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="ml-3 text-xl font-bold text-gray-900">Informasi Petugas</h3>
        </div>
        
        <div className="py-4 space-y-4">
          <div className="form-control">
            <label className="text-sm text-gray-500 mb-1">Nama</label>
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
              <Icon.Person className="h-5 w-5 text-gray-400 mr-3" />
              <span className="font-medium">{receipt.user?.name || '-'}</span>
            </div>
          </div>
          
          <div className="form-control">
            <label className="text-sm text-gray-500 mb-1">Posisi</label>
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
              <Icon.Briefcase className="h-5 w-5 text-gray-400 mr-3" />
              <span className="font-medium">{receipt.user?.user_type || '-'}</span>
            </div>
          </div>
          
          <div className="form-control">
            <label className="text-sm text-gray-500 mb-1">Email</label>
            <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
              <Icon.Envelope className="h-5 w-5 text-gray-400 mr-3" />
              <span className="font-medium">{receipt.user?.email || '-'}</span>
            </div>
          </div>
        </div>
        
        <div className="modal-action">
          <button className="btn btn-primary w-full" onClick={onClose}>
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