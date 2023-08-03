import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { BellFill } from "react-bootstrap-icons";

const Notifications = ({ children }) => {
    const { notifications } = usePage().props;
    const unreadNotification = notifications.unread.length > 0;

    return (
        <div className="">
            <Link href="/notification">
                <label
                    tabIndex="0"
                    className="mr-3 btn-ghost btn btn-circle relative"
                >
                    {unreadNotification && <Indicator />}

                    <BellFill className="text-xl text-slate-200" />
                </label>
            </Link>

            {/* <div className="overflow-hidden flex items-center flex-col ">
                <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 w-72 md:w-96 rounded-box p-2"
                >
                    <p className="p-3 border-b mb-2 font-semibold">
                        Notifikasi
                    </p>
                    <div className="max-h-64 overflow-y-auto">
                        {notifications.all.map((notification) => {
                            return (
                                <li key={notification.id}>
                                    <div className="flex flex-col items-start gap-1">
                                        <h4 className="font-semibold text-[16px]">
                                            {notification.created_at}
                                        </h4>
                                        <span>{notification.data.body}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                </ul>
            </div> */}
        </div>
    );
};

const Indicator = () => {
    return (
        <div className="w-3 h-3 bg-rose-500 rounded-full shadow absolute top-2 right-3">
            <div className="w-full h-full bg-red-800 animate-ping rounded-full"></div>
        </div>
    );
};

export default Notifications;
