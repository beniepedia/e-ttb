import Header from "@/Components/Header";
import SendMessage from "@/Components/SendMessage";
import Layout from "@/Layouts/Main";
import { Head, usePage } from "@inertiajs/inertia-react";

const IndexWhatsapp = () => {
    const { data } = usePage().props;
    return (
        <>
            <Head>
                <title>Kirim pesan whastapp</title>
            </Head>
            <Header>WhatsApp</Header>
            <div className="my-8 px-4">
                <SendMessage customers={data.customers} />
            </div>
        </>
    );
};

IndexWhatsapp.layout = (page) => <Layout children={page} />;

export default IndexWhatsapp;
