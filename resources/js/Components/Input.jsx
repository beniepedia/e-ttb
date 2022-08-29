import React, { useEffect, useRef } from 'react';

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    placeHolder = '',
    required,
    isFocused,
    handleChange,
    disabled
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                min='0'
                className={
                    `input input-bordered w-full ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                placeholder={placeHolder}
                required={required}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
            />
        </div>
    );
}
