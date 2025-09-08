import React, { useEffect, useRef } from "react";

export default function TextArea({
    name,
    value,
    className,
    placeHolder = "",
    required,
    handleChange,
    disable,
    label,
    error,
}) {
    const input = useRef();

    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">
                {label} {required && <span className="text-error">*</span>}
            </legend>
            <textarea
                className={
                    `textarea rounded ${
                        error ? "focus:border-error" : "focus:border-primary"
                    } focus:outline-none focus:border-2 shadow w-full ` +
                    className
                }
                name={name}
                value={value}
                ref={input}
                placeholder={placeHolder}
                required={required}
                onChange={(e) => handleChange(e)}
                disabled={disable}
            ></textarea>
            {error && <div className="label text-error">{error}</div>}
        </fieldset>
    );
}
