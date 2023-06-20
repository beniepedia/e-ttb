import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center sm:pt-0 bg-gradient-to-br from-emerald-300 to-emerald-600 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900">
            <div className="w-full sm:max-w-md px-6  bg-emerald-200/80 backdrop-blur-md shadow dark:bg-slate-800 dark:backdrop-blur-none  overflow-hidden sm:rounded-lg ">
                <div className="flex justify-center py-6">
                    <Link href="/">
                        <ApplicationLogo className="w-40 h-40 fill-current text-slate-700 bg-stone-200/70 rounded-full p-3 shadow border-4 border-slate-50" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
