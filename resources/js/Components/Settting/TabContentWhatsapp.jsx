import React from "react";
import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { toast } from "@/Components/Alert";

const TabContentWhatsapp = () => {
    const { app_setting } = usePage().props;

    const { data, setData, post, processing } = useForm({
        whatsapp_session_name: app_setting?.whatsapp_session_name || "",
        whatsapp_server: app_setting?.whatsapp_server || "",
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.submit();
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.setting.store"), {
            onSuccess: () => {
                toast.success("Pengaturan berhasil disimpan!");
            },
        });
    };

    return (
        <form className="my-6" onSubmit={submit} onKeyDown={handleKeyDown}>
            <div className="space-y-4">
                <div>
                    <Label>Whatsapp Session Name</Label>
                    <Input
                        name={"whatsapp_session_name"}
                        value={data.whatsapp_session_name}
                        className={"text-sm"}
                        handleChange={onHandleChange}
                        required
                        placeHolder="Masukkan nama session whatsapp"
                    ></Input>
                    {data.whatsapp_server && (
                        <p className="text-sm mt-1 text-slate-400">
                            Buat nama session baru.{" "}
                            <a
                                href={`${data.whatsapp_server}/start-session?session=${data.whatsapp_session_name}&scan=true`}
                                className="font-semibold"
                                target="_blank"
                            >
                                Klik Disini
                            </a>
                        </p>
                    )}
                </div>

                <div>
                    <Label>Whastapp Server</Label>
                    <Input
                        required
                        name={"whatsapp_server"}
                        value={data.whatsapp_server}
                        handleChange={onHandleChange}
                        className={"text-sm"}
                        placeHolder="Masukkan alamat server whatsapp"
                    ></Input>
                </div>

                <div className="pt-5 md:float-right">
                    <Button
                        type="submit"
                        className="btn-block md:btn-md"
                        processing={processing}
                    >
                        Simpan
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default TabContentWhatsapp;
