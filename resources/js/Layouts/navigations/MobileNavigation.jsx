import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function MobileNavigation({ navItems }) {
    const { url } = usePage();

    return (
        <div className="dock bg-neutral text-neutral-content ">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                        url == new URL(item.href).pathname ? "dock-active" : ""
                    } `}
                >
                    <span className="size-6 flex items-center justify-center">
                        <i className={`bi ${item.icon} text-2xl`}></i>
                    </span>
                    <span className="dock-label">{item.label}</span>
                </Link>
            ))}
        </div>
    );
}
