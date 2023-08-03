import React from "react";
import Layout from "@/Layouts/Main";
import { Head, usePage } from "@inertiajs/inertia-react";
import SendMessage from "@/Components/SendMessage";

const IndexWhatsapp = () => {
    const { data } = usePage().props;
    return (
        <>
            <Head>
                <title>Kirim pesan whastapp</title>
            </Head>
            <div className="shadow p-4 mb-6">
                <h2 className="font-semibold text-slate-600">Whatsapp</h2>
            </div>
            <div className="my-8 px-4">
                <SendMessage customers={data.customers} />
            </div>
        </>
    );
};

IndexWhatsapp.layout = (page) => <Layout children={page} />;

export default IndexWhatsapp;
