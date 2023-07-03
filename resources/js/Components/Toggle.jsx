import React from "react";

const Toggle = ({
    className,
    name,
    onHandleChange,
    checked = false,
    disabled = false,
}) => {
    return (
        <input
            disabled={disabled}
            type="checkbox"
            className={`toggle ${className}`}
            onChange={(e) => onHandleChange(e)}
            checked={checked}
            name={name}
        />
    );
};

export default Toggle;
