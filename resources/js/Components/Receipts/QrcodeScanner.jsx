import React, { useState } from 'react'
import BarcodeScanner from "react-qr-barcode-scanner"
import Button from '../Button';

export default function QrcodeScanner({ handleUpdate, cancel, onError }) {

    return (

        <div className='relative'>

            <div className='flex justify-center'>
                <div className='rounded-lg w-100 md:w-1/2 lg:w-1/3 p-4 bg-white'>

                    <BarcodeScanner
                        width={500}
                        height={500}
                        onUpdate={handleUpdate}
                        onError={onError}
                    />
                </div>


            </div>
            <div className='absolute top-0 left-1/2 -translate-x-1/2'>
                <Button
                    handleClick={cancel}
                    className='bg-white hover:text-white text-black rounded-full text-lg'
                >&#x2716;</Button >
            </div>
        </div>
    )
}
