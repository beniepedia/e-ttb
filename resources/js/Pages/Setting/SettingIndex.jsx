import React from "react";
import Layout from "@/Layouts/Main";
import { Head, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Toggle from "@/Components/Toggle";

const SettingIndex = () => {
    const { data, setData } = useForm({
        pay_online: false,
        auto_send_ttb: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    return (
        <div>
            <Head title="Pengaturan"></Head>

            <div className="shadow p-4">
                <h2 className="font-semibold text-slate-600">PENGATURAN</h2>
            </div>

            <div className="my-6 px-6">
                <div className="grid grid-cols-3 gap-6 items-center justify-between">
                    <div className="col-span-2">
                        Bayar Online
                        <span className="text-[0.80rem] block text-slate-500">
                            Aktifkan pembayaran online menggunakan payment
                            gateway
                        </span>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <Toggle
                            onHandleChange={onHandleChange}
                            name={"pay_online"}
                            checked={data.pay_online}
                        ></Toggle>
                    </div>

                    <div className="col-span-2">
                        Otomatis kirim ttb
                        <span className="text-[0.80rem] block text-slate-500">
                            Otomatis mengirim whatsapp kartu tanda terima kepada
                            customer ketika berhasil membuat tanda terima baru.
                        </span>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <Toggle
                            name={"auto_send_ttb"}
                            onHandleChange={onHandleChange}
                            checked={data.auto_send_ttb}
                        ></Toggle>
                    </div>

                    {/* <Input></Input> */}
                </div>
            </div>
            {/* <form action=""> */}
            {/* <Input></Input>
            <div className=""></div>
            <div className="">
                <Input></Input>
            </div>
            <div className="">
                <Input></Input>
            </div> */}
            {/* </form> */}
        </div>
    );
};

SettingIndex.layout = (page) => <Layout children={page} />;

export default SettingIndex;
