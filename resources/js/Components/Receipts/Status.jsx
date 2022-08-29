import React from 'react'

export default function ({
    status,
    className = 'absolute top-0 px-4 left-0 rounded-br-xl '
}) {
    return (
        <div
            className={className + ' ' + {
                'Pending': 'bg-amber-400 shadow-md',
                'Proses': 'bg-teal-400 shadow-md',
                'Gagal': 'bg-red-400 shadow-md text-white',
                'Berhasil': 'bg-green-400 shadow-md'
            }[status]
            }
        >
            {status}
        </div>
    )
}
