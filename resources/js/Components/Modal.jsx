import React from 'react'

export default function Modal({ id, title, message, children }) {
    return (
        <div className="modal modal-bottom sm:modal-middle" id={id}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                    {children}
                </div>
            </div>
        </div>
    )
}
