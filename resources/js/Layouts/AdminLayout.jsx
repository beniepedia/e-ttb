import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    const { url } = usePage();

    const navItems = [
        { href: "#", label: "Dashboard" },
        { href: "#", label: "Users" },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
            {/* Sidebar untuk Desktop */}
            <aside className="hidden md:block w-64 bg-white shadow-md">
                <div className="p-4 text-xl font-bold border-b">
                    Admin Panel
                </div>
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-3 py-2 rounded ${
                                url === item.href
                                    ? "bg-blue-500 text-white"
                                    : "hover:bg-gray-200"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">{children}</main>

            {/* Bottom Nav untuk Mobile */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 md:hidden">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex flex-col items-center text-sm ${
                            url === item.href
                                ? "text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
