import React from 'react';
import ButtonBack from './ButtonBack';
import { Link } from '@inertiajs/inertia-react';
import Modal from './Modal';
import Avatar from 'react-avatar';
import Notifications from './Notifications';

export default function Navbar({ auth, appName, href }) {

    return (
        <>
            <div className="navbar fixed border-b-2 dark:border-none drop-shadow-sm bg-blue-500 dark:bg-slate-700 z-10">
                <div className="flex-1">
                    {href && <ButtonBack href={href} />}

                    <Link href={route('dashboard')} className='btn btn-ghost normal-case  text-2xl text-white'>
                        {appName}

                    </Link>
                </div>
                <div className="flex-none">
                    <Notifications />

                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar border-2 border-slate-300">
                            <div className="w-10 rounded-full">
                                {/* <img src="https://placeimg.com/80/80/people" /> */}
                                <Avatar name={auth.user.name} size={40} />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                {/* <a className="justify-between" href={route('user.index')}>
                                    {auth.user.name.toUpperCase()}
                                </a> */}

                                <Link href={route('user.index')} className='font-semibold'>
                                    {auth.user.name.toUpperCase()}
                                </Link>
                            </li>
                            {
                                auth.user.user_type === 'admin' && (
                                    <li>
                                        <Link href={route('register')}>Tambah User</Link>
                                    </li>
                                )
                            }

                            <li>
                                <a href="#log-out">Log Out</a>

                            </li>
                        </ul>
                    </div>
                </div>


            </div>

            <Modal
                title="Log Out!"
                message="Apakah yakin ingin log out dari aplikasi ?"
                id="log-out"
            >
                <a href="#" className='btn btn-sm btn-error text-white'>TIDAK</a>
                <Link method='post' href={route('logout')} as="button" className='btn btn-sm btn-success text-white'>YA, LOG OUT</Link>
            </Modal>

            {/* MODAL */}
            {/* <div className="modal modal-bottom sm:modal-middle" id="modal-tes">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Log Out!</h3>
                    <p className="py-4">Apakah kamu yakin ingin log out dari aplikasi</p>
                    <div className="modal-action">
                        <a href="#" className='btn btn-sm btn-error text-white'>TIDAK</a>
                        <Link method='post' href={route('logout')} as="button" className='btn btn-sm btn-success text-white'>YA</Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}
