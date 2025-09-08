import React from "react";

export default function Checkbox({ name, value, handleChange, className }) {
    return (
        <input
            type="checkbox"
            value={value}
            name={name}
            onChange={(e) => handleChange(e)}
            className="checkbox"
        />
    );
}
