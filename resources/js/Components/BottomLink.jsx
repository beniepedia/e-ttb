import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function BottomLink({ href, active, children }) {
    return (
        <Link href={href} active={active ? 'active' : ''}>
            {children}
        </Link>
    )
}
