import React from 'react'

export default function LinkSide({ href, target = '_blank', children, className }) {
    return (
        <a href={href} target={target} className={className}>
            {children}
        </a>
    )
}
