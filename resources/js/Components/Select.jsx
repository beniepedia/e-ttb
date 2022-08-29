import React, { useRef } from 'react'

export default function Select({
    name,
    className,
    multiple,
    children,
    handleChange,
    disabled
}) {

    const select = useRef();

    return (
        <select
            className={'select w-full ' + className}
            name={name}
            ref={select}
            onChange={handleChange}
            disabled={disabled}
            multiple={multiple}
        >
            {children}
        </select>
    )
}
