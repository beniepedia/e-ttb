import { Link } from "@inertiajs/inertia-react";
import Avatar from "react-avatar";
import Empty from "../Empty";

export default function CustomerList({ customers }) {
    return (
        <>
            {customers.length ? (
                customers.map((customer, i) => {
                    return (
                        <div
                            className="flex items-center justify-between py-2 border-t border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 px-5"
                            key={i}
                        >
                            <div className="flex items-center">
                                {/* <img src="https://placeimg.com/80/80/people" className='w-11 rounded-full' /> */}
                                <Avatar
                                    name={customer.name}
                                    size="50"
                                    className="rounded-full"
                                />
                                <div className="ml-4 pb-1">
                                    <h2 className="text-lg">{customer.name}</h2>
                                    <p className="text-xs">{customer.phone}</p>
                                </div>
                            </div>

                            <div className="flex-none">
                                <Link
                                    href={route("customer.show", customer.id)}
                                    className="btn btn-circle btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-5 h-5 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                        ></path>
                                    </svg>
                                </Link>
                                {/* <Link
                                    href={route("customer.show", customer.id)}
                                >
                                    <Icon.InfoCircleFill className="text-2xl text-sky-600" />
                                </Link> */}
                            </div>
                        </div>
                    );
                })
            ) : (
                <Empty />
            )}
        </>
    );
}
