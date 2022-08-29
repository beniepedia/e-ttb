import React, { useEffect, useRef } from 'react';

export default function TextArea({
    name,
    value,
    className,
    placeHolder = '',
    required,
    handleChange,
    disable,
}) {
    const input = useRef();

    return (
        <textarea
            className={`textarea textarea-bordered w-full ` + className}
            name={name}
            value={value}
            ref={input}
            placeholder={placeHolder}
            required={required}
            onChange={(e) => handleChange(e)}
            disabled={disable}
        >
        </textarea>

    );
}
