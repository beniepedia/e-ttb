import React from "react";
import ButtonBack from "./ButtonBack";
import { Link } from "@inertiajs/inertia-react";
import Modal from "./Modal";
import Avatar from "react-avatar";
import Notifications from "./Notifications";
import * as Icon from "react-bootstrap-icons";

export default function Navbar({ auth, appName, href }) {
    return (
        <>
            <div className="navbar fixed  dark:border-none shadow bg-emerald-600 dark:bg-slate-800 z-50">
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
                            className={`cursor-pointer flex items-center gap-2 hover:bg-emerald-500 dark:hover:bg-slate-700 p-3 rounded-md ${
                                route().current("dashboard")
                                    ? "bg-emerald-500 dark:bg-emerald-500"
                                    : ""
                            }`}
                        >
                            <Icon.HouseDoorFill size={20} />
                            Dashboard
                        </Link>
                        <Link
                            href="/customers"
                            className={`cursor-pointer flex items-center gap-2 hover:bg-emerald-500 dark:hover:bg-slate-700 p-3 rounded-md ${
                                route().current("customers")
                                    ? "bg-emerald-500 dark:bg-emerald-500"
                                    : ""
                            }`}
                        >
                            <Icon.PersonBadgeFill size={20} />
                            Customer
                        </Link>
                        <Link
                            href="/receipts"
                            className={`cursor-pointer flex items-center gap-2 hover:bg-emerald-500 dark:hover:bg-slate-700 p-3 rounded-md ${
                                route().current("receipts")
                                    ? "bg-emerald-500 dark:bg-emerald-500"
                                    : ""
                            }`}
                        >
                            <Icon.Clipboard2CheckFill size={20} />
                            TTB
                        </Link>
                        {/* <Link
                            href="/promotion"
                            className={`cursor-pointer flex items-center gap-2 hover:bg-emerald-500 dark:hover:bg-slate-700 p-3 rounded-md ${
                                route().current("promotion")
                                    ? "bg-emerald-500 dark:bg-emerald-500"
                                    : ""
                            }`}
                        >
                            <Icon.CapslockFill size={20} />
                            Promosi
                        </Link> */}
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
                            className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box 
                            overflow-hidden w-52"
                        >
                            <div className="p-3 font-semibold text-white bg-emerald-600 mb-2 dark:bg-slate-700 dark:text-slate-200">
                                {auth.user.name}
                            </div>
                            <li>
                                {/* <a className="justify-between" href={route('user.index')}>
                                    {auth.user.name.toUpperCase()}
                                </a> */}

                                <Link href={route("user.index")}>
                                    <Icon.PersonBoundingBox size={20} />
                                    Profil
                                </Link>
                            </li>
                            {auth.user.user_type === "admin" && (
                                <>
                                    <li>
                                        <Link href={route("register")}>
                                            <Icon.PersonPlusFill size={20} />
                                            Tambah User
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link href={route("admin.setting")}>
                                            <Icon.GearFill size={20} />
                                            Pengaturan
                                        </Link>
                                    </li>
                                </>
                            )}
                            <li>
                                <a href="#log-out">
                                    <Icon.BoxArrowLeft size={20} />
                                    Keluar
                                </a>
                            </li>
                            <div className="mb-2"></div>
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
