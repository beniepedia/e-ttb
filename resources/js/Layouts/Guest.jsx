import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  sm:pt-0 bg-slate-300 dark:bg-slate-900">

            <div>
                <Link href="/">
                    <ApplicationLogo className="w-40 h-40 fill-current text-slate-700" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md px-6 py-8 bg-white dark:bg-slate-800 shadow-md overflow-hidden sm:rounded-lg">

                {children}
            </div>
        </div>
    );
}
