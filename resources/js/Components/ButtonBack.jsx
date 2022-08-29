import React from 'react'
import { ArrowLeftShort } from 'react-bootstrap-icons';
import { Link } from '@inertiajs/inertia-react';

export default function ButtonBack({ href }) {
    return (
        <Link
            preserveScroll={true}
            type='button'
            href={href}
            className='btn btn-circle hover:btn-ghost hover:text-white bg-transparent border-none'><ArrowLeftShort className='text-2xl' />
        </Link>

    )
}
