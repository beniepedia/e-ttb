import Button from "@/Components/Button";
import Divider from "@/Components/Divider";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import TabContentGeneral from "@/Components/Settting/TabContentGeneral";
import TabContentPayment from "@/Components/Settting/TabContentPayment";
import TabContentTelegram from "@/Components/Settting/TabContentTelegram";
import TabContentWhatsapp from "@/Components/Settting/TabContentWhatsapp";
import Toggle from "@/Components/Toggle";
import Layout from "@/Layouts/Main";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import { useState } from "react";

const SettingIndex = () => {
    const [tabActive, setTabActive] = useState("general");

    return (
        <>
            <Head title="Pengaturan"></Head>

            <div className="shadow p-4">
                <h2 className="font-semibold text-slate-600">PENGATURAN</h2>
            </div>

            <div className="tabs mt-3 ">
                <a
                    onClick={() => setTabActive("general")}
                    className={`tab tab-lifted ${
                        tabActive === "general" ? "tab-active" : ""
                    }`}
                >
                    Umum
                </a>
                <a
                    onClick={() => setTabActive("payment")}
                    className={`tab tab-lifted ${
                        tabActive === "payment" ? "tab-active" : ""
                    }`}
                >
                    Pembayaran
                </a>
                <a
                    onClick={() => setTabActive("whatsapp")}
                    className={`tab tab-lifted ${
                        tabActive === "whatsapp" ? "tab-active" : ""
                    }`}
                >
                    Whatsapp
                </a>
                <a
                    onClick={() => setTabActive("telegram")}
                    className={`tab tab-lifted ${
                        tabActive === "telegram" ? "tab-active" : ""
                    }`}
                >
                    Telegram
                </a>
            </div>

            <div className="px-6 ">
                {tabActive === "general" && <TabContentGeneral />}
                {tabActive === "payment" && <TabContentPayment />}
                {tabActive === "whatsapp" && <TabContentWhatsapp />}
                {tabActive === "telegram" && <TabContentTelegram />}
            </div>
        </>
    );
};

SettingIndex.layout = (page) => <Layout children={page} />;

export default SettingIndex;
