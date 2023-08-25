import { toast } from "@/Components/Alert";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Button from "../Button";
import Toggle from "../Toggle";
import ListOptions from "./ListOptions";

const TabContentGeneral = () => {
    const { app_setting } = usePage().props;

    const enablePayment =
        !app_setting?.tripay_private_key ||
        !app_setting?.tripay_api_key ||
        !app_setting?.tripay_merchant_code;

    const enableWhatsapp =
        !app_setting?.whatsapp_session_name || !app_setting?.whatsapp_server;

    const enableTelegram =
        !app_setting?.telegram_admin_chat_id ||
        !app_setting?.telegram_bot_token;

    const { post, data, setData, processing } = useForm({
        app_debug: app_setting?.app_debug || false,
        is_develop: app_setting?.is_develop == "local" ? true : false || false,
        pay_online: app_setting?.pay_online || false,
        whatsapp_gateway: app_setting?.whatsapp_gateway || false,
        telegram_gateway: app_setting?.telegram_gateway || false,
        password_reset: app_setting?.password_reset || false,
    });

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.checked);
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

    return (
        <form
            className="my-6 space-y-5 "
            onSubmit={submit}
            onKeyDown={handleKeyDown}
        >
            <div className="flex gap-3 justify-between items-center">
                <ListOptions title="App Debug">
                    Jika diaktifkan semua error akan ditampilkan pada browser.
                </ListOptions>

                <Toggle
                    onHandleChange={onHandleChange}
                    name={"app_debug"}
                    checked={data.app_debug}
                ></Toggle>
            </div>

            <div className="flex gap-3 justify-between items-center">
                <ListOptions title="Mode Pengembang">
                    Aktifkan opsi ini jika aplikasi masih tahap pengembangan.
                </ListOptions>

                <Toggle
                    onHandleChange={onHandleChange}
                    name={"is_develop"}
                    checked={data.is_develop}
                ></Toggle>
            </div>

            <div className="flex gap-3 justify-between items-center">
                <ListOptions title="Notifikasi Whatsapp">
                    Aktifkan notifikasi menggunakan whatsapp. Sebelum
                    mengaktifkan fitur ini lengkapi pengaturan Whatsapp.
                </ListOptions>

                <Toggle
                    disabled={enableWhatsapp}
                    onHandleChange={onHandleChange}
                    name={"whatsapp_gateway"}
                    checked={data.whatsapp_gateway}
                ></Toggle>
            </div>

            <div className="flex gap-3 justify-between items-center">
                <ListOptions title="Notifikasi Telegram">
                    Aktifkan notifikasi / bot menggunakan telegram. Sebelum
                    mengaktifkan fitur ini lengkapi pengaturan Telegram.
                </ListOptions>

                <Toggle
                    disabled={enableTelegram}
                    onHandleChange={onHandleChange}
                    name={"telegram_gateway"}
                    checked={data.telegram_gateway}
                ></Toggle>
            </div>

            <div className="flex gap-3 justify-between items-center">
                <ListOptions title="Pembayaran online">
                    Aktifkan jika ingin menerima pembayaran dari online, Misal
                    Transfer Bank / QRIS. Sebelum mengaktifkan fitur ini
                    lengkapi pengaturan Pembayaran.
                </ListOptions>

                <Toggle
                    disabled={enablePayment}
                    onHandleChange={onHandleChange}
                    name={"pay_online"}
                    checked={data.pay_online}
                ></Toggle>
            </div>

            <div className="flex gap-3 justify-between items-center">
                <ListOptions title="Reset Kata Sandi">
                    Aktifkan fitur reset kata sandi. Fitur ini dapat berjalan
                    jika fitur kirim email sudah aktif.
                </ListOptions>

                <Toggle
                    onHandleChange={onHandleChange}
                    name={"password_reset"}
                    checked={data.password_reset}
                ></Toggle>
            </div>

            <div className="pt-5 md:float-right">
                <Button
                    type="submit"
                    className="btn-block md:btn-md btn-success"
                    processing={processing}
                >
                    Simpan
                </Button>
            </div>
        </form>
    );
};

export default TabContentGeneral;
