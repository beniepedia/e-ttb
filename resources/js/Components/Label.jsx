import React from 'react';

export default function Label({ forInput, value, children }) {
    return (
        <label htmlFor={forInput} className='label font-medium'>
            <span className='label-text'>{value ? value : children}</span>
        </label>
    );
}
