import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/inertia-react";
import { showToast } from "@/Helper";

export default function Guest({ children }) {
    const { flash } = usePage().props;
    if (flash.message) {
        showToast(flash);
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center sm:pt-0 bg-gradient-to-br from-emerald-300 to-emerald-600 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 ">
            <div className="w-full sm:max-w-md px-6  bg-emerald-200/80 backdrop-blur-md shadow dark:bg-slate-800 dark:backdrop-blur-none  overflow-hidden sm:rounded-lg my-6">
                <div className="flex justify-center py-6">
                    <Link href="/">
                        <ApplicationLogo
                            className="w-32 h-32 fill-current text-slate-700 bg-white dark:bg-slate-800 rounded-3xl shadow dark:border-slate-700 border-4
                         border-slate-50"
                        />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
