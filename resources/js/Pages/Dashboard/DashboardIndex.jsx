import CardInfo from "@/Components/Dashboard/CardInfo";
import Grafik from "@/Components/Dashboard/Grafik";
import ReceiptIsDone from "@/Components/Dashboard/ReceiptIsDone";
import SendMessage from "@/Components/SendMessage";
import Layout from "@/Layouts/Main";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import * as Icon from "react-bootstrap-icons";

const Dashboard = () => {
    const { data, auth } = usePage().props;

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-5 px-3">
                <div className="bg-gradient-to-br from-teal-50 via-teal-100 to-teal-300 shadow py-4 px-6 h-32 rounded-2xl text-gray-500">
                    <h3>Selamat Datang,</h3>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-3">
                            <Icon.Person className="text-5xl" />
                            <h2 className="text-xl">
                                {auth.user.name}
                                <span className="block text-sm">
                                    Anda login sebagai,{" "}
                                    <span className="capitalize">
                                        {auth.user.user_type}
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <Link
                            href={route("receipts.create")}
                            className="w-11 h-11 flex items-center tooltip tooltip-bottom"
                            data-tip="Buat TTB baru"
                        >
                            <span className="bg-teal-600 w-9 h-9 absolute rounded-xl animate-ping opacity-100 duration-[2000]"></span>
                            <Icon.StickiesFill className=" relative text-4xl text-teal-700" />
                        </Link>
                    </div>
                </div>

                <div className="carousel carousel-center space-x-4 mt-5">
                    <div className="carousel-item ">
                        <CardInfo
                            title={data.receipt_today}
                            subtitle="TTB BARU"
                            className=" bg-gradient-to-br from-white via-green-100 to-green-300"
                        >
                            <Icon.JournalCheck className="text-7xl text-green-500 dark:text-slate-700" />
                        </CardInfo>
                    </div>
                    <div className="carousel-item ">
                        <CardInfo
                            title={data.receipt_active}
                            subtitle="TTB AKTIF"
                            className="bg-gradient-to-br from-white via-sky-100 to-sky-300 "
                        >
                            <Icon.JournalAlbum className="text-7xl text-sky-500 dark:text-slate-700" />
                        </CardInfo>
                    </div>
                    <div className="carousel-item ">
                        <CardInfo
                            title={data.receipt_total}
                            subtitle="TOTAL TTB"
                            className="bg-gradient-to-br from-white via-violet-100 to-violet-300"
                        >
                            <Icon.Journals className="text-7xl text-violet-500 dark:text-slate-700" />
                        </CardInfo>
                    </div>

                    <div className="carousel-item ">
                        <CardInfo
                            title={data.customer_total}
                            subtitle="CUSTOMER"
                            className="bg-gradient-to-br from-white via-amber-100 to-amber-300"
                        >
                            <Icon.PersonBadgeFill className="text-7xl text-amber-500 dark:text-slate-700" />
                        </CardInfo>
                    </div>
                </div>

                {auth.user.user_type == "admin" && (
                    <div className="mt-5 rounded-lg shadow bg-base-100 p-2">
                        <Grafik></Grafik>
                    </div>
                )}

                <div className="my-8 shadow">
                    <ReceiptIsDone {...data} />
                </div>

                <div className="mt-8">
                    <SendMessage customers={data.customers} />
                </div>
            </div>
        </>
    );
};

Dashboard.layout = (page) => (
    <Layout errors={page.props.errors} children={page} />
);

export default Dashboard;
