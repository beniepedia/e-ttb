import React from 'react'

export default function CardInfo({ title, subtitle, children, className = 'bg-white' }) {
    return (
        <div className={'card drop-shadow-lg relative mx-2 my-3 w-72 md:w-96 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-600 ' + className}>
            <div className="card-body text-gray-500 ">
                <div className="card-title font-bold text-4xl ">
                    {title}
                </div>
                <div className='z-10'>
                    {subtitle}
                </div>
            </div>

            <div className='absolute bottom-5 right-2'>
                {children}
            </div>

        </div>
    )
}
