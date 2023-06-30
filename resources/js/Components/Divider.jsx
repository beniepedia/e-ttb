import React from "react";

const Divider = ({ children, className }) => {
    return (
        <div className={`divider font-semibold ${className}`}>{children}</div>
    );
};

export default Divider;
