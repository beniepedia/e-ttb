import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Button from "../Button";

const PaymentChannel = ({ ...props }) => {
    const { payment_channel } = usePage().props;

    const data = props.data;
    const error = props.errors;

    return (
        <>
            <div className="divider font-semibold mt-5">METODE PEMBAYARAN</div>

            <div className="space-y-2">
                {payment_channel?.data?.map((channel, i) => {
                    return (
                        <Button
                            key={i}
                            className={`flex items-center gap-4 w-full shadow  justify-start hover:bg-sky-400 dark:hover:bg-emerald-800 ${
                                data.payment_method == channel.code
                                    ? "bg-sky-400 dark:bg-emerald-800 dark:text-emerald-100"
                                    : "bg-white text-slate-800 dark:text-slate-400 dark:bg-slate-700"
                            }`}
                            handleClick={() =>
                                props.setData({
                                    ...data,
                                    payment_method: channel.code,
                                })
                            }
                        >
                            <img src={channel.icon_url} width={60} />
                            <p>{channel.name}</p>
                        </Button>
                    );
                })}

                {error?.payment_method && (
                    <div className="text-red-600 mt-2">
                        {error?.payment_method}
                    </div>
                )}
            </div>
        </>
    );
};

export default PaymentChannel;
