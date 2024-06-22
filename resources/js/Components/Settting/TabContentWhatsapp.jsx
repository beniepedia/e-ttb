import { toast } from "@/Components/Alert";
import { useForm, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

const TabContentWhatsapp = () => {
    const { app_setting } = usePage().props;
    const [loading, setLoading] = useState(false);

    const { data, setData, post, processing } = useForm({
        whatsapp_session_name: app_setting?.whatsapp_session_name || "",
        whatsapp_server: app_setting?.whatsapp_server || "",
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            submit(event);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        post(route("admin.setting.store"), {
            onSuccess: () => {
                toast.success("Pengaturan berhasil disimpan!");
            },
        });
    };

    const sendMessage = () => {
        setLoading(true);

        axios
            .post(route("whatsapp.sendMessage"), {
                text: "PING https://ettb.my.id/images/ttb/ttb_2006202328-117.png",
                to: "6282174416077",
            })
            .then(({ data }) => {
                if (data?.status_code == 404) {
                    toast.error("Session tidak ditemukan!");
                } else if (data?.status_code == 500 || data?.status_code == 400) {
                    toast.error(
                        "Gagal mengirim pesan, Terjadi kesalahan pada server!"
                    );
                } else {
                    toast.success("Pesan berhasil dikirim!");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const sendImage = async () => {
        setLoading(true);
        axios
            .post(route("whatsapp.sendMedia"), {
                media: "https://ettb.my.id/images/ttb/ttb_2006202328-117.png",
                to: "6282174416077",
                text: "tes",
            })
            .then(({ data }) => {
                if (data?.status_code == 404) {
                    toast.error("Session tidak ditemukan!");
                } else if (data?.status_code == 500 || data?.status_code == 400) {
                    toast.error(
                        "Gagal mengirim pesan, Terjadi kesalahan pada server!"
                    );
                } else {
                    toast.success("Pesan berhasil dikirim!");
                }
            })
            .finally(() => {
                setLoading(false);
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
                    {/* {data.whatsapp_server && (
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
                    )} */}
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

                <div className="pt-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <Button
                            processing={loading}
                            className="btn-accent btn-block"
                            handleClick={sendImage}
                            type="button"
                        >
                            Tes Kirim Gambar
                        </Button>
                        <Button
                            processing={loading}
                            className="btn-warning btn-block"
                            handleClick={sendMessage}
                            type="button"
                        >
                            Tes Kirim Pesan
                        </Button>
                        <Button
                            type="submit"
                            className="btn-block btn-success"
                            processing={processing}
                        >
                            Simpan
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default TabContentWhatsapp;
