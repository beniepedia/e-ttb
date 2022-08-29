import React from 'react'
import Navbar from '@/Components/Navbar'
import * as Icon from 'react-bootstrap-icons'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Alert, toast } from '@/Components/Alert'

export default function Main({ auth, children, href, menu = true }) {

    const { flash } = usePage().props

    if (flash.message) {
        toast.success(flash.message)
    }


    const Menu = () => {
        return (
            <div className="btm-nav border-t-2">
                <Link href={route('dashboard')} className={route().current('dashboard') ? 'menu-active dark:bg-white' : ''}>
                    <Icon.HouseFill className='text-lg text-slate-300' />
                    <span className="btm-nav-label text-xs text-slate-400">Home</span>
                </Link>
                <Link href={route('customers')} className={route().current('customers') ? 'menu-active dark:bg-white' : ''}>
                    <Icon.PeopleFill className='text-xl text-slate-300' />
                    <span className="btm-nav-label text-xs text-slate-400">Customer</span>
                </Link>
                <Link href={route('receipts')} className={route().current('receipts') ? 'menu-active dark:bg-white' : ''}>
                    <Icon.StickiesFill className='text-xl text-slate-300' />
                    <span className="btm-nav-label text-xs text-slate-400">
                        TTB
                    </span>
                </Link>
                <Link href={route('whatsapp')} className={route().current('whatsapp') ? 'menu-active dark:bg-white' : ''}>
                    <Icon.Whatsapp className='text-xl text-slate-300' />
                    <span className="btm-nav-label text-xs text-slate-400">
                        Whatsapp
                    </span>
                </Link>
            </div>
        )
    }


    return (
        <>
            <Alert />
            <Navbar auth={auth} href={href} appName={children.props.appName} />
            <div className=''>

                <section className='bg-gray-200 dark:bg-slate-800 min-h-screen py-16'>

                    {/* Form Search */}
                    {children}
                </section>

                {/* Bottom Navigation */}
                {menu && <Menu />}
            </div>
        </>
    )
}
