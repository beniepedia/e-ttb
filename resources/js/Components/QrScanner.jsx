import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import * as Icon from 'react-bootstrap-icons'


export default function QrScanner({ onScan, onError, className }) {
    const [selected, setSelected] = useState("environment")

    const handleClick = () => {
        if (selected === "environment") {
            setSelected("user")
        } else {
            setSelected("environment")
        }
    }

    return (
        <div className={'relative p-3 bg-white rounded-md shadow-md w-full ' + className}>
            <QrReader
                onError={(e) => onError(e)}
                onScan={(e) => onScan(e)}
                facingMode={selected}
                delay={500}
                style={{ width: '100%' }}
            />

            <div className='flex justify-center mt-3'>
                <div className='flex flex-col items-center'>
                    <button
                        className='btn py-1 btn-circle'
                        onClick={handleClick}
                    >
                        <Icon.Camera className='text-2xl' />
                    </button>

                    <div className='mt-2'>{selected === "environment" ? 'DEPAN' : 'BELAKANG'}</div>
                </div>

            </div>
        </div>
    )
}
