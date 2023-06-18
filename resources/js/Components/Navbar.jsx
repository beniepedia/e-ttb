import React from "react";
import ButtonBack from "./ButtonBack";
import { Link } from "@inertiajs/inertia-react";
import Modal from "./Modal";
import Avatar from "react-avatar";
import Notifications from "./Notifications";

export default function Navbar({ auth, appName, href }) {
    return (
        <>
            <div className="navbar fixed  dark:border-none drop-shadow-sm bg-gradient-to-t from-green-400 to-green-500 dark:bg-gradient-to-t dark:from-green-800 dark:to-green-800 z-50">
                <div className="flex-1 md:justify-between ">
                    <div className="flex items-center">
                        {href && <ButtonBack href={href} />}

                        <Link
                            href={route("dashboard")}
                            className="btn btn-ghost normal-case  text-xl text-white"
                        >
                            {appName}
                        </Link>
                    </div>

                    <ul className="mr-5 md:flex space-x-4 text-white hidden">
                        <Link
                            href="/dashboard"
                            className={`cursor-pointer hover:bg-green-300 dark:hover:bg-green-700 p-3 rounded-md ${
                                route().current("dashboard")
                                    ? "bg-green-300 dark:bg-green-700"
                                    : ""
                            }`}
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/customers"
                            className={`cursor-pointer hover:bg-green-300 dark:hover:bg-green-700 p-3 rounded-md ${
                                route().current("customers")
                                    ? "bg-green-300 dark:bg-green-700"
                                    : ""
                            }`}
                        >
                            Customer
                        </Link>
                        <Link
                            href="/receipts"
                            className={`cursor-pointer hover:bg-green-300 dark:hover:bg-green-700 p-3 rounded-md ${
                                route().current("receipts")
                                    ? "bg-green-300 dark:bg-green-700"
                                    : ""
                            }`}
                        >
                            TTB
                        </Link>
                    </ul>
                </div>
                <div className="flex-none">
                    <Notifications />

                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex="0"
                            className="btn btn-ghost btn-circle avatar border-2 border-slate-300"
                        >
                            <div className="w-10 rounded-full">
                                {/* <img src="https://placeimg.com/80/80/people" /> */}
                                <Avatar name={auth.user.name} size={40} />
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                {/* <a className="justify-between" href={route('user.index')}>
                                    {auth.user.name.toUpperCase()}
                                </a> */}

                                <Link
                                    href={route("user.index")}
                                    className="font-semibold"
                                >
                                    {auth.user.name.toUpperCase()}
                                </Link>
                            </li>
                            {auth.user.user_type === "admin" && (
                                <li>
                                    <Link href={route("register")}>
                                        Tambah User
                                    </Link>
                                </li>
                            )}

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
                <a href="#" className="btn btn-sm btn-error text-white">
                    TIDAK
                </a>
                <Link
                    method="post"
                    href={route("logout")}
                    as="button"
                    className="btn btn-sm btn-success text-white"
                >
                    YA, LOG OUT
                </Link>
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
    );
}
