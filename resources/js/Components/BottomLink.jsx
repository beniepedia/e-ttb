import React from "react";
import { Link } from "@inertiajs/react";

export default function BottomLink({ href, active, children }) {
    return (
        <Link href={href} active={active ? "active" : ""}>
            {children}
        </Link>
    );
}
