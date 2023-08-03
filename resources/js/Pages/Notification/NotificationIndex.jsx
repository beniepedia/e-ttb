import React, { useEffect } from "react";
import Layout from "@/Layouts/Main";
import { Head, usePage } from "@inertiajs/inertia-react";
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

    useEffect(() => {
        axios.post(route("notification.read"));
    }, []);

    return (
        <>
            <Head>
                <title>List Tanda Terima</title>
            </Head>
            <div className="shadow p-4 mb-6">
                <h2 className="font-semibold text-slate-600">NOTIFIKASI</h2>
            </div>

            {notifications.all.length == 0 && <Empty />}

            {Object.keys(notificationGroupBy).map((key) => {
                return (
                    <div className="px-3 mb-4">
                        <div className="px-4">
                            <h6 className="font-semibold text-[18px] ml-1 ">
                                {key}
                            </h6>
                            {notificationGroupBy[key].map((item) => {
                                return (
                                    <div className="py-2">
                                        <p className="shadow-md p-4 border-2 rounded-lg opacity-80">
                                            {item.data.body}
                                        </p>
                                        <div className="text-sm opacity-60 ml-1 pt-1">
                                            {formatDate(
                                                item.created_at,
                                                "dd MMM, HH:mm"
                                            )}
                                        </div>
                                    </div>
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
