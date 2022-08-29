import React from 'react'
import { Inertia } from '@inertiajs/inertia'

export default function ButtonUpdateStatus({
    type = 'button',
    variant = 'success',
    children,
    disable = false,
    className = 'btn-outline w-full',
    data
}) {
    const onclick = () => {
        Inertia.patch(route('receipts.updatePatch'), data, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        })

    }

    return (
        <button
            type={type}
            className={`btn btn-sm btn-${variant} ` + className}
            onClick={onclick}
            disabled={disable}
        >
            {children}
        </button>
    )
}
