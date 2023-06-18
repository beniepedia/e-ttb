import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  sm:pt-0 bg-teal-500 dark:bg-slate-900">
            <div className="w-full sm:max-w-md px-6  bg-slate-100 dark:bg-slate-800 shadow-lg overflow-hidden sm:rounded-lg ">
                <div className="flex justify-center">
                    <Link href="/">
                        <ApplicationLogo className="w-40 h-40 fill-current text-slate-700" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
