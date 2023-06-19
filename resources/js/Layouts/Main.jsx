import React from "react";
import Navbar from "@/Components/Navbar";
import * as Icon from "react-bootstrap-icons";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Alert, toast } from "@/Components/Alert";

export default function Main({ auth, children, href, menu = true }) {
    const { flash } = usePage().props;

    if (flash.message) {
        toast.success(flash.message);
    }

    const Menu = () => {
        return (
            <div
                className="btm-nav border-t-2 md:hidden"
                style={{ boxShadow: "0px 0px 25px 0px rgba(0,0,0,.1)" }}
            >
                <Link
                    href={route("dashboard")}
                    className={
                        route().current("dashboard")
                            ? "menu-active dark:bg-white"
                            : ""
                    }
                >
                    <Icon.HouseFill className="text-lg text-slate-300" />
                    <span className="btm-nav-label text-xs text-slate-400">
                        Home
                    </span>
                </Link>
                <Link
                    href={route("customers")}
                    className={
                        route().current("customers")
                            ? "menu-active dark:bg-white"
                            : ""
                    }
                >
                    <Icon.PeopleFill className="text-xl text-slate-300" />
                    <span className="btm-nav-label text-xs text-slate-400">
                        Customer
                    </span>
                </Link>
                <Link
                    href={route("receipts")}
                    className={
                        route().current("receipts")
                            ? "menu-active dark:bg-white"
                            : ""
                    }
                >
                    <Icon.StickiesFill className="text-xl text-slate-300" />
                    <span className="btm-nav-label text-xs text-slate-400">
                        TTB
                    </span>
                </Link>
                {/* <Link
                    href={route("whatsapp")}
                    className={
                        route().current("whatsapp")
                            ? "menu-active dark:bg-white"
                            : ""
                    }
                >
                    <Icon.Whatsapp className="text-xl text-slate-300" />
                    <span className="btm-nav-label text-xs text-slate-400">
                        Whatsapp
                    </span>
                </Link> */}
            </div>
        );
    };

    return (
        <>
            <Alert />
            <Navbar auth={auth} href={href} appName={children.props.appName} />
            <div className="">
                <section className="bg-green-300 dark:bg-slate-800 min-h-screen flex justify-center ">
                    {/* Form Search */}
                    <div className="max-w-2xl w-full md:border-x-2 py-16 shadow-lg bg-slate-200 dark:bg-slate-700">
                        {children}
                    </div>
                </section>

                {/* Bottom Navigation */}
                {menu && <Menu />}
            </div>
        </>
    );
}
