import React, { useEffect } from "react";
import Layout from "@/Layouts/Main";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import _ from "lodash";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import Empty from "@/Components/Empty";
import axios from "axios";

const NotificationIndex = () => {
    const { notifications } = usePage().props;

    const formatDate = (date, dateFormat = "dd MMM") => {
        let dates = parseISO(date);
        return format(dates, dateFormat, { locale: id });
    };

    const notificationGroupBy = _.groupBy(notifications.all, (item) =>
        formatDate(item.created_at)
    );

    return (
        <>
            <Head>
                <title>Notifikasi</title>
            </Head>
            <div className="shadow p-4 mb-6">
                <h2 className="font-semibold text-slate-600">NOTIFIKASI</h2>
            </div>

            {notifications.all.length == 0 && <Empty />}

            {Object.keys(notificationGroupBy).map((key) => {
                return (
                    <div className="mb-1">
                        <div className="px-4 ">
                            <h6 className="font-semibold ml-1 md:text-lg">
                                {key}
                            </h6>
                            {notificationGroupBy[key].map((item) => {
                                let color = _.isEmpty(item.read_at)
                                    ? "bg-amber-100"
                                    : "bg-white";
                                return (
                                    <Link
                                        href={route(
                                            "notification.read",
                                            item.id
                                        )}
                                        data={{ url: item.data.url }}
                                        method="post"
                                        className="py-2 "
                                    >
                                        <p
                                            className={`shadow text-[14px] p-4 border-2 rounded-lg leading-relaxed ${color} cursor-pointer`}
                                        >
                                            {item.data.body}
                                        </p>
                                        <div className="text-[13px] opacity-60 ml-1 pt-1 pb-2">
                                            {formatDate(
                                                item.created_at,
                                                "dd MMM, HH:mm"
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

NotificationIndex.layout = (page) => <Layout children={page} />;

export default NotificationIndex;
