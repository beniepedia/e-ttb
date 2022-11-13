import React, { useCallback, useState } from "react";
import Layout from "@/Layouts/Main";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Head, useForm, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Select from "@/Components/Select";
import Label from "@/Components/Label";
import TextArea from "@/Components/TextArea";
import SelectMulti from "@/Components/SelectMulti";
import ImageUpload from "@/Components/Receipts/ImageUpload";

const ReceiptAdd = ({ customers, auth, user, auto_number }) => {
    const option = [
        {
            label: "Printer",
            value: "Printer",
        },
        {
            label: "Cartrigde",
            value: "Cartridge",
        },
        {
            label: "Toner",
            value: "Toner",
        },
    ];

    const { data, setData, post, errors, processing } = useForm({
        receipt_number: auto_number,
        customer_id: "",
        kelengkapan: "",
        kerusakan: "",
        description: "",
        category: "printer",
        barang: "",
        handle_by: "",
        photo: null,
    });

    const [optionsKelengkapan, setOptionKelengkapan] = useState([
        {
            label: "Kabel USB",
            value: "Kabel_usb",
        },
        {
            label: "Kabel Listrik",
            value: "kabel_listrik",
        },
        {
            label: "Kotak",
            value: "kotak",
        },
    ]);

    const [saveImage, setSaveImage] = useState({
        image_src: "",
        image_data: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleUpload = (e) => {
        let uploaded = e.target.files[0];

        setSaveImage({
            image_src: URL.createObjectURL(uploaded),
            image_data: uploaded,
        });

        setData("photo", uploaded);
    };

    function onHandleClick() {
        setSaveImage({
            image_src: "",
            image_data: "",
        });
    }

    function handleSelect(selectOption) {
        let selected = [];
        selectOption.map((val) => {
            selected.push(val.label);
        });

        setData("kelengkapan", selected);
    }

    // const onHandleCreate = useCallback(
    //     (inputValue) => {
    //         const newValue = { value: inputValue.toLowerCase(), label: inputValue };
    //         setOptionKelengkapan([...optionsKelengkapan, newValue]);
    //     },
    //     [optionsKelengkapan]
    // );

    // function handleRemove() {
    //     const details = data.details;
    //     details.splice(details, 1);
    //     setData({ ...data, details })
    // }

    function handleSubmit(e) {
        e.preventDefault();

        post(route("receipts"), {
            preserveScroll: true,
            replace: true,
        });
    }

    return (
        <div>
            <Head title="Tambah TTB Baru"></Head>

            <div className="bg-slate-300 p-4">
                <h2 className="font-semibold text-slate-600">BUAT TTB BARU</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="m-4 lg:mx-64">
                    <div className="flex gap-4">
                        <div className="flex-none w-1/3">
                            <Label>Nomor Kartu</Label>
                            <Input
                                type="text"
                                name="receipt_number"
                                disabled
                                className={
                                    errors.receipt_number && "input-error"
                                }
                                handleChange={onHandleChange}
                                value={data.receipt_number}
                            ></Input>
                            {errors.receipt_number && (
                                <div className="invalid-feedback">
                                    {errors.receipt_number}
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <Label>
                                Customer -{" "}
                                <Link
                                    href={route("customers.create")}
                                    className="font-semibold text-blue-700 italic"
                                    only={["customers"]}
                                    data={{ history: "receipts" }}
                                >
                                    Tambah
                                </Link>
                            </Label>

                            <SelectMulti
                                closeMenuOnSelect={true}
                                option={customers}
                                onHandleChange={(e) =>
                                    setData({ ...data, customer_id: e.value })
                                }
                            />

                            {errors.customer_id && (
                                <div className="invalid-feedback -mb-3">
                                    {errors.customer_id}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-3 my-2">
                        <div className="w-1/3">
                            <Label>Kategori</Label>
                            <Select
                                name="category"
                                handleChange={onHandleChange}
                            >
                                {option.map((val, index) => {
                                    return (
                                        <option value={val.value} key={index}>
                                            {val.label}
                                        </option>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="flex-1">
                            <Label>Nama / Tipe Barang</Label>
                            <Input
                                value={data.barang}
                                name="barang"
                                handleChange={onHandleChange}
                                placeHolder="Masukkan nama / tipe barang "
                                className={errors.barang && "input-error"}
                            />
                            {errors.barang && (
                                <div className="invalid-feedback">
                                    {errors.barang}
                                </div>
                            )}
                        </div>
                    </div>

                    {auth.user.user_type == "kasir" && (
                        <div>
                            <Label>Teknisi</Label>
                            <SelectMulti
                                closeMenuOnSelect={true}
                                option={user}
                                onHandleChange={(e) =>
                                    setData({ ...data, handle_by: e.value })
                                }
                            />
                            {errors.handleBy && (
                                <div className="invalid-feedback">
                                    {errors.handleBy}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="my-2">
                        <Label>Kelengkapan</Label>

                        <SelectMulti
                            option={optionsKelengkapan}
                            isMulti={true}
                            onHandleChange={handleSelect}
                        ></SelectMulti>
                    </div>

                    <div className="my-2">
                        <Label>Kerusakan</Label>
                        <Input
                            name="kerusakan"
                            value={data.kerusakan}
                            handleChange={onHandleChange}
                            className={errors.kerusakan && "input-error"}
                        ></Input>
                        {errors.kerusakan && (
                            <div className="invalid-feedback">
                                {errors.kerusakan}
                            </div>
                        )}
                    </div>

                    <div>
                        <Label>Keterangan</Label>
                        <TextArea
                            handleChange={onHandleChange}
                            name="description"
                            value={data.description}
                        ></TextArea>
                    </div>

                    <div className="relative mt-5">
                        <ImageUpload
                            handleChange={handleUpload}
                            src={saveImage.image_src}
                            onclick={onHandleClick}
                        />
                        {errors.photo && (
                            <div className="invalid-feedback absolute -bottom-4">
                                {errors.photo}
                            </div>
                        )}
                    </div>

                    <div className="mt-10">
                        <Button
                            type="submit"
                            className="btn-success btn-block shadow hover:bg-green-300"
                            processing={processing}
                        >
                            SIMPAN
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

ReceiptAdd.layout = (page) => (
    <Layout
        auth={page.props.auth}
        children={page}
        href={route("receipts")}
        menu={false}
    />
);

export default ReceiptAdd;
