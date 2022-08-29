import React from 'react'
import { Bell } from 'react-bootstrap-icons'

export default function Empty() {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
            <div className='flex flex-col items-center gap-5 text-slate-500'>
                <Bell className='text-5xl' />
                <h1>Tidak ada data</h1>
            </div>
        </div>
    )
}
