import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function ButtonFly({ href, className, icon }) {
    return (
        <div className='fixed bottom-20  right-6 drop-shadow-lg hover:scale-110 transition-all'>
            <Link href={href} className={`btn btn-circle ` + className} as="a">
                {icon}
            </Link>
        </div>
    )
}
