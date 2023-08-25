import { phoneFormatter } from "@/Helper";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { isEmpty, isNumber, toNumber } from "lodash";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import Button from "./Button";
import Label from "./Label";
import TextArea from "./TextArea";

export default function SendMessage({ customers }) {
    const { data, setData, reset } = useForm({
        phone: "",
        text: "",
    });

    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onHandleClick = () => {
        if (isEmpty(data.phone)) {
            toast.info("Masukkan no tujuan...");
            return;
        } else if (isEmpty(data.text)) {
            toast.info("Masukkan isi pesan");
            return;
        } else if (!isNumber(toNumber(data.phone))) {
            toast.info("No. Tujuan tidak valid");
            return;
        }

        setProcessing(true);

        axios
            .post(route("whatsapp.sendMessage"), {
                to: phoneFormatter(data.phone),
                text: data.text,
            })
            .then(({ data }) => {
                toast.success("Pesan berhasil dikirim...");
                reset();
            })
            .catch(() => {
                toast.error("Pesan gagal dikirim. silahkan coba lagi.");
            })
            .finally(() => {
                setProcessing(false);
            });
    };
    return (
        <div className="card bg-white dark:bg-slate-700 shadow-md rounded-lg border">
            <div className="card-body py-9 px-5">
                <div className="card-title text-slate-600">Kirim Whatsapp</div>
                <div>
                    <Label>No. Tujuan</Label>
                    <CreatableSelect
                        isClearable
                        options={customers}
                        noOptionsMessage={() => "Tidak ada pilihan"}
                        placeholder="Pilih Tujuan..."
                        onChange={(e) => setData({ ...data, phone: e.value })}
                        formatCreateLabel={(inputValue) =>
                            "[ Tambah Baru ...] " + inputValue
                        }
                    />
                </div>
                <div className="">
                    <Label>Pesan</Label>
                    <TextArea
                        name="text"
                        value={data.text}
                        className={"textarea-bordered h-48"}
                        handleChange={handleChange}
                        placeHolder="Masukkan pesan whatsapp yang akan dikirim"
                    ></TextArea>
                </div>
                <div className="text-right mt-2">
                    <Button
                        handleClick={onHandleClick}
                        type="button"
                        className="btn-success"
                        processing={processing}
                    >
                        Kirim
                    </Button>
                </div>
            </div>
        </div>
    );
}
