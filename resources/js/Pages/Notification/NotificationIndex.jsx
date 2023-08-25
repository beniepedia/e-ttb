import Empty from "@/Components/Empty";
import Header from "@/Components/Header";
import Modal from "@/Components/Modal";
import Layout from "@/Layouts/Main";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import _ from "lodash";

const NotificationIndex = () => {
    const { notifications } = usePage().props;

    const formatDate = (date, dateFormat = "dd MMM") => {
        let dates = parseISO(date);
        return format(dates, dateFormat, { locale: id });
    };

    const notificationGroupBy = _.groupBy(notifications.all, (item) =>
        formatDate(item.created_at)
    );

    const handleReadAll = () => {
        Inertia.post(route("notification.read_all"));
    };

    const handleClear = () => {
        Inertia.delete(route("notification.delete"));
    };

    return (
        <>
            <Head>
                <title>Notifikasi</title>
            </Head>

            <Header>
                <div className="flex  justify-between md:items-center items-center">
                    Notifikasi
                    <div className="space-x-2">
                        {notifications.all.length > 0 && (
                            <a
                                href="#modal_clear"
                                className="btn btn-sm rounded btn-ghost shadow-none text-error"
                            >
                                Clear
                            </a>
                        )}

                        {notifications.unread.length > 0 && (
                            <a
                                href="#modal_read_all"
                                className="btn btn-sm rounded btn-ghost shadow-none text-warning"
                            >
                                Read All
                            </a>
                        )}
                    </div>
                </div>
            </Header>

            {notifications.all.length == 0 && <Empty />}

            {Object.keys(notificationGroupBy).map((key) => {
                return (
                    <div className="mb-1" key={key}>
                        <div className="px-4 ">
                            <h6 className="font-semibold ml-1 md:text-lg">
                                {key}
                            </h6>
                            {notificationGroupBy[key].map((item, i) => {
                                let color = _.isEmpty(item.read_at)
                                    ? "bg-amber-100 dark:bg-slate-800"
                                    : "bg-white dark:bg-slate-700";
                                return (
                                    <Link
                                        href={route(
                                            "notification.read",
                                            item.id
                                        )}
                                        data={{ url: item.data.url }}
                                        method="post"
                                        className="py-2 "
                                        key={i}
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

            <Modal
                id={"modal_read_all"}
                title={"Informasi!"}
                message={" Tandai semua notifikasi menjadi sudah dibaca ?"}
            >
                <div>
                    <a
                        href="#"
                        className="btn btn-link text-neutral dark:text-white"
                    >
                        Batal
                    </a>
                    <a
                        href="#"
                        className="btn btn-success btn-sm rounded "
                        onClick={handleReadAll}
                    >
                        Ya, Tandai semua!
                    </a>
                </div>
            </Modal>

            <Modal
                id={"modal_clear"}
                title={"Info!"}
                message={"Hapus semua notifikasi ?"}
            >
                <div>
                    <a
                        href="#"
                        className="btn btn-link text-neutral dark:text-white"
                    >
                        Batal
                    </a>
                    <a
                        href="#"
                        className="btn btn-success btn-sm rounded "
                        onClick={handleClear}
                    >
                        Ya, Hapus semua!
                    </a>
                </div>
            </Modal>
        </>
    );
};

NotificationIndex.layout = (page) => <Layout children={page} />;

export default NotificationIndex;
