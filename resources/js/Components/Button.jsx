import React from 'react';

export default function Button(
    { type = 'submit',
        className = '',
        processing,
        children,
        handleClick
    }) {
    return (
        <button
            type={type}
            className={
                `btn ${processing && 'loading'
                } ` + className
            }
            disabled={processing}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
