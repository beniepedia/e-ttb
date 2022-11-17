import React, { useState } from "react";
import TextArea from "../TextArea";
import Button from "../Button";
import { Inertia } from "@inertiajs/inertia";
import Label from "../Label";
import Input from "../Input";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { currency } from "@/Helper";

export default function Description({ receipt }) {
    const { auth } = usePage().props;

    const [disable, setDisable] = useState(true);

    console.log(auth);

    const { data, setData, patch, processing } = useForm({
        id: receipt.id,
        repair: receipt.repair || "",
        cost: currency(receipt.cost) || "",
        description: receipt.description || "",
    });

    const handleDisable = () => {
        Inertia.reload();
        setDisable((disable) => !disable);
    };

    const handleChange = (e) => {
        setData(
            e.target.name,
            e.target.name == "cost"
                ? currency(e.target.value.replace(/\D/g, ""))
                : e.target.value
        );
    };

    const handleClick = () => {
        patch(route("receipts"), {
            preserveScroll: true,
            onSuccess: () => {
                setDisable(true);
            },
        });
    };
    return (
        <div>
            <div className="card bg-base-100 rounded-md shadow-md mt-10 ">
                <div className="card-body p-4">
                    <div>
                        <Label>Perbaikan</Label>
                        <Input
                            type="text"
                            name="repair"
                            value={data.repair}
                            placeHolder="Perbaikan atau penanganan"
                            disabled={disable}
                            handleChange={handleChange}
                        ></Input>
                    </div>
                    <div>
                        <Label>Biaya</Label>
                        <Input
                            type="text"
                            name="cost"
                            value={data.cost}
                            placeHolder="Biaya perbaikan"
                            disabled={disable}
                            handleChange={handleChange}
                        ></Input>
                    </div>
                    <h3 className="-mb-2 mt-3">Keterangan</h3>
                    <p className="text-sm text-slate-400 italic mb-3">
                        Keterangan tidak bisa diubah jika barang sudah diambil.
                    </p>
                    {/* <textarea className='text-black' value='asds'></textarea> */}
                    <TextArea
                        disable={disable}
                        name="description"
                        value={data.description}
                        handleChange={(e) => handleChange(e)}
                    />
                    {/* {data.isTaken} */}
                    {!receipt.isTaken || auth.user.user_type === "admin" ? (
                        <div className="mt-3 flex justify-end">
                            {disable ? (
                                <Button
                                    className="w-30 btn-sm"
                                    handleClick={handleDisable}
                                >
                                    EDIT
                                </Button>
                            ) : (
                                <div className="flex gap-2">
                                    <Button
                                        className="w-30 btn-sm btn-error"
                                        handleClick={handleDisable}
                                    >
                                        batal
                                    </Button>
                                    <Button
                                        className="w-30 btn-sm btn-success"
                                        handleClick={handleClick}
                                        processing={processing}
                                    >
                                        SIMPAN
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
