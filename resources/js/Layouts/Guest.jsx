import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-blue-300">

            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-slate-700" />
                </Link>
            </div> */}

            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">

                {children}
            </div>
        </div>
    );
}
