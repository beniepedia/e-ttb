import { useForm } from "@inertiajs/react";
import Input from "../Input";
import TextArea from "../TextArea";
import Checkbox from "../Checkbox";
import { useEffect, useRef, useState } from "react";
import { phoneFormatter } from "@/Helper";

export default function AddCustomerModal({ id }) {
    const modalRef = useRef(null);
    const [state, setState] = useState(false);

    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            phone: "",
            whatsapp: "",
            address: "",
        });
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    useEffect(() => {
        if (state) {
            let phone = data.phone;
            phone = phoneFormatter(phone);

            setData("whatsapp", phone);
        } else {
            setData("whatsapp", "");
        }
    }, [data.phone, state]);

    const closed = () => {
        modalRef.current.close();
        clearErrors();
        reset();
    };

    function toggle(value) {
        return !value;
    }

    const handleSubmit = (e) => {
        post(route("customers.store"), {
            onSuccess: () => {
                closed();
            },
        });
    };

    return (
        <dialog
            id={id}
            className="modal modal-bottom sm:modal-middle"
            ref={modalRef}
        >
            <div className="modal-box">
                <h3 className="font-bold text-lg">Tambah Pelanggan</h3>
                <div className="py-4">
                    <Input
                        name={"name"}
                        label={`Nama`}
                        value={data.name}
                        placeHolder="Masukkan nama pelanggan"
                        className={"text-sm "}
                        error={errors.name}
                        required
                        handleChange={onHandleChange}
                    />

                    <Input
                        type="number"
                        name={"phone"}
                        label={"Nomor HP"}
                        value={data.phone}
                        placeHolder="Masukkan nomor hp"
                        className={"text-sm "}
                        required
                        error={errors.phone}
                        handleChange={onHandleChange}
                    />

                    <div className="my-3">
                        <Checkbox
                            name={"waCheck"}
                            handleChange={() => setState(toggle)}
                        ></Checkbox>
                        <span className="text-sm pl-2">
                            No HP sama dengan Whatsapp ?
                        </span>
                    </div>

                    <Input
                        type="number"
                        name={"whatsapp"}
                        value={data.whatsapp}
                        disabled={state}
                        label={"Nomor Whatsapp"}
                        placeHolder="Masukkan nomor whatsapp"
                        className={"text-sm "}
                        handleChange={onHandleChange}
                    />

                    <TextArea
                        label={"Alamat"}
                        name={"address"}
                        value={data.address}
                        placeHolder="Masukkan Alamat"
                        handleChange={onHandleChange}
                    />
                </div>
                <div className="modal-action">
                    <button className="btn " onClick={() => closed()}>
                        <i className="bi bi-ban"></i>
                        Tutup
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        Tambah <i className="bi bi-floppy-fill"></i>
                    </button>
                </div>
            </div>
        </dialog>
    );
}
