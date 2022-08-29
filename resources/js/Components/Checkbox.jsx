import React from 'react';

export default function Checkbox({ name, value, handleChange, className }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={`checkbox ` + className}
            onChange={(e) => handleChange(e)
            }
        />
    );
}
