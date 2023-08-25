import { toast } from "@/Components/Alert";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

const TabContentTelegram = () => {
    const { app_setting } = usePage().props;

    const { data, setData, post, processing } = useForm({
        telegram_bot_token: app_setting?.telegram_bot_token || "",
        telegram_admin_chat_id: app_setting?.telegram_admin_chat_id || "",
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

    return (
        <form className="my-6" onSubmit={submit} onKeyDown={handleKeyDown}>
            <div className="space-y-4">
                <div>
                    <Label>Telegram Token</Label>
                    <Input
                        name={"telegram_bot_token"}
                        value={data.telegram_bot_token}
                        className={"text-sm"}
                        handleChange={onHandleChange}
                        required
                        placeHolder="Masukkan token bot telegram"
                    ></Input>
                </div>

                <div>
                    <Label>Telegram Admin Chat ID</Label>
                    <Input
                        required
                        name={"telegram_admin_chat_id"}
                        value={data.telegram_admin_chat_id}
                        handleChange={onHandleChange}
                        className={"text-sm"}
                        placeHolder="Masukkan chat id admin"
                    ></Input>
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
            </div>
        </form>
    );
};

export default TabContentTelegram;
