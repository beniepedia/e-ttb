import { toast } from "@/Components/Alert";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

const TabContentPayment = () => {
    const { app_setting } = usePage().props;

    const { data, setData, post, processing } = useForm({
        tripay_merchant_code: app_setting?.tripay_merchant_code || "",
        tripay_api_key: app_setting?.tripay_api_key || "",
        tripay_private_key: app_setting?.tripay_private_key || "",
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
                    <Label>Tripay Merchant Code</Label>
                    <Input
                        name={"tripay_merchant_code"}
                        value={data.tripay_merchant_code}
                        className={"text-sm"}
                        handleChange={onHandleChange}
                        required
                        placeHolder="Masukkan kode merchant tripay"
                    ></Input>
                </div>

                <div>
                    <Label>Tripay Api Key</Label>
                    <Input
                        required
                        name={"tripay_api_key"}
                        value={data.tripay_api_key}
                        handleChange={onHandleChange}
                        className={"text-sm"}
                        placeHolder="Masukkan Kunci Api Tripay"
                    ></Input>
                </div>

                <div>
                    <Label>Tripay Private Key</Label>
                    <Input
                        required
                        name={"tripay_private_key"}
                        value={data.tripay_private_key}
                        handleChange={onHandleChange}
                        className={"text-sm"}
                        placeHolder="Masukkan Kunci private Tripay"
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

export default TabContentPayment;
