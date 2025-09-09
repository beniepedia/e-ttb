import React, { useRef } from "react";

export default function Select({
    name,
    className,
    handleChange,
    disabled,
    label,
    defaultValue,
    error,
    options = [],
    required,
}) {
    const select = useRef();

    return (
        // <select
        //     className={
        //         "select focus:outline-none rounded dark:focus:border-emerald-600 focus:border-green-600 border-2 w-full " +
        //         className
        //     }
        //     name={name}
        //     ref={select}
        //     onChange={handleChange}
        //     disabled={disabled}
        //     multiple={multiple}
        // >
        //     {children}
        // </select>

        <fieldset className="fieldset">
            <legend className="fieldset-legend">
                {label}
                {required && <span className="text-error">*</span>}
            </legend>
            <select
                name={name}
                className={`select focus:outline-none focus:border-primary focus:border-2 ${className}`}
                disabled={disabled}
            >
                <option value="" selected disabled>
                    Pilih salah satu
                </option>
                {options.map((opt, i) => (
                    <option key={i} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <span className="label text-error">{error}</span>}
        </fieldset>
    );
}
