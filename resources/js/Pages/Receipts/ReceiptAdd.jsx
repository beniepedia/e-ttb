import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import SelectMulti from "@/Components/SelectMulti";
import Button from "@/Components/Button";
import Select from "@/Components/Select";

export default function ReceiptAdd({ customers, auth, user, auto_number }) {
    // Initial item structure
    const initialItem = {
        category: "laptop",
        brand: "",
        model: "",
        damage_description: "",
        accessories: [{ name: "" }],
    };

    const { data, setData, post, processing, errors } = useForm({
        receipt_number: auto_number,
        customer_id: "",
        kelengkapan: "",
        kerusakan: "",
        description: "",
        category: "laptop",
        barang: "",
        handle_by: "",
        photo: null,
        repair_notes: "",
        items: [initialItem],
    });

    // Category options
    const categoryOptions = [
        { label: "Laptop", value: "laptop" },
        { label: "Printer", value: "printer" },
        { label: "Cartridge", value: "cartridge" },
        { label: "Toner", value: "toner" },
        { label: "Komputer", value: "komputer" },
        { label: "Monitor", value: "monitor" },
        { label: "Scanner", value: "scanner" },
        { label: "Lainnya", value: "lainnya" },
    ];

    // Handle change for main form fields
    const handleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        );
    };

    // Handle change for customer selection
    const handleCustomerChange = (selectedOption) => {
        setData("customer_id", selectedOption.value);
    };

    // Handle change for category selection
    const handleCategoryChange = (selectedOption) => {
        setData("category", selectedOption.value);
    };

    // Handle change for technician selection
    const handleTechnicianChange = (selectedOption) => {
        setData("handle_by", selectedOption.value);
    };

    // Handle change for item fields
    const handleItemChange = (index, field, value) => {
        const newItems = [...data.items];
        newItems[index][field] = value;
        setData("items", newItems);

        // Update the main form fields to match the first item for compatibility
        if (index === 0) {
            if (field === "category") {
                setData("category", value);
            } else if (field === "brand" || field === "model") {
                setData(
                    "barang",
                    `${newItems[0].brand} ${newItems[0].model}`.trim()
                );
            } else if (field === "damage_description") {
                setData("kerusakan", value);
            } else if (field === "accessories") {
                // Convert accessories array to comma-separated string
                const accessoriesString = value
                    .map((acc) => acc.name)
                    .filter((name) => name)
                    .join(", ");
                setData("kelengkapan", accessoriesString);
            }
        }
    };

    // Handle change for accessories
    const handleAccessoryChange = (itemIndex, accessoryIndex, value) => {
        const newItems = [...data.items];
        newItems[itemIndex].accessories[accessoryIndex].name = value;
        setData("items", newItems);

        // Update the main kelengkapan field to match the first item's accessories
        if (itemIndex === 0) {
            const accessoriesString = newItems[0].accessories
                .map((acc) => acc.name)
                .filter((name) => name)
                .join(", ");
            setData("kelengkapan", accessoriesString);
        }
    };

    // Add new item
    const addItem = () => {
        setData("items", [...data.items, { ...initialItem }]);
    };

    // Remove item
    const removeItem = (index) => {
        if (data.items.length > 1) {
            const newItems = [...data.items];
            newItems.splice(index, 1);
            setData("items", newItems);
        }
    };

    // Add accessory to an item
    const addAccessory = (itemIndex) => {
        const newItems = [...data.items];
        newItems[itemIndex].accessories.push({ name: "" });
        setData("items", newItems);

        // Update the main kelengkapan field if this is the first item
        if (itemIndex === 0) {
            const accessoriesString = newItems[0].accessories
                .map((acc) => acc.name)
                .filter((name) => name)
                .join(", ");
            setData("kelengkapan", accessoriesString);
        }
    };

    // Remove accessory from an item
    const removeAccessory = (itemIndex, accessoryIndex) => {
        const newItems = [...data.items];
        if (newItems[itemIndex].accessories.length > 1) {
            newItems[itemIndex].accessories.splice(accessoryIndex, 1);
            setData("items", newItems);

            // Update the main kelengkapan field if this is the first item
            if (itemIndex === 0) {
                const accessoriesString = newItems[0].accessories
                    .map((acc) => acc.name)
                    .filter((name) => name)
                    .join(", ");
                setData("kelengkapan", accessoriesString);
            }
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("receipts.store"), {
            preserveScroll: true,
            replace: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Tambah TTB Baru" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold">
                        <i className="bi bi-clipboard-plus-fill pr-3"></i>
                        Tambah Tanda Terima
                    </h1>
                    <h6 className="text-neutral-500">
                        Tambah tanda terima barang baru
                    </h6>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Data Tanda Terima
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <Input
                                label="Nomor TTB"
                                name="receipt_number"
                                value={data.receipt_number}
                                disabled
                                handleChange={handleChange}
                                error={errors.receipt_number}
                            />
                        </div>

                        {/* <div>
                            <label className="fieldset-legend">
                                Customer <span className="text-error">*</span>
                            </label>
                            <SelectMulti
                                option={customers}
                                onHandleChange={handleCustomerChange}
                                error={errors.customer_id}
                            />
                            {errors.customer_id && (
                                <div className="label text-error">{errors.customer_id}</div>
                            )}
                        </div> */}

                        <Select
                            label={"Pelanggan"}
                            className={"w-full select-sm"}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {auth &&
                            auth.user &&
                            auth.user.user_type == "kasir" && (
                                <div>
                                    <label className="fieldset-legend">
                                        Teknisi yang Menangani
                                    </label>
                                    <SelectMulti
                                        option={user}
                                        onHandleChange={handleTechnicianChange}
                                        error={errors.handle_by}
                                    />
                                    {errors.handle_by && (
                                        <div className="label text-error">
                                            {errors.handle_by}
                                        </div>
                                    )}
                                </div>
                            )}

                        <div>
                            <TextArea
                                label="Catatan Teknisi"
                                name="repair_notes"
                                value={data.repair_notes}
                                handleChange={handleChange}
                                error={errors.repair_notes}
                            />
                        </div>
                    </div>
                </div>

                {/* Items Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Data Barang</h2>
                        <button
                            type="button"
                            onClick={addItem}
                            className="btn btn-primary btn-sm"
                        >
                            <i className="bi bi-plus-circle mr-1"></i>
                            Tambah Barang
                        </button>
                    </div>

                    {data.items.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className="border rounded-lg p-4 mb-4"
                        >
                            {data.items.length > 1 && (
                                <div className="flex justify-end mb-2">
                                    <button
                                        type="button"
                                        onClick={() => removeItem(itemIndex)}
                                        className="btn btn-error btn-xs"
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="fieldset-legend">
                                        Kategori{" "}
                                        <span className="text-error">*</span>
                                    </label>
                                    <select
                                        value={item.category}
                                        onChange={(e) =>
                                            handleItemChange(
                                                itemIndex,
                                                "category",
                                                e.target.value
                                            )
                                        }
                                        className="select w-full focus:outline-none focus:border-2 focus:border-primary"
                                    >
                                        {categoryOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <Input
                                        label="Merek"
                                        value={item.brand}
                                        handleChange={(e) =>
                                            handleItemChange(
                                                itemIndex,
                                                "brand",
                                                e.target.value
                                            )
                                        }
                                        error={
                                            errors[
                                                `items.${itemIndex}.brand`
                                            ] || errors.barang
                                        }
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <Input
                                        label="Model"
                                        value={item.model}
                                        handleChange={(e) =>
                                            handleItemChange(
                                                itemIndex,
                                                "model",
                                                e.target.value
                                            )
                                        }
                                        error={
                                            errors[
                                                `items.${itemIndex}.model`
                                            ] || errors.barang
                                        }
                                    />
                                </div>

                                <div>
                                    <TextArea
                                        label="Deskripsi Kerusakan"
                                        value={item.damage_description}
                                        handleChange={(e) =>
                                            handleItemChange(
                                                itemIndex,
                                                "damage_description",
                                                e.target.value
                                            )
                                        }
                                        error={
                                            errors[
                                                `items.${itemIndex}.damage_description`
                                            ] || errors.kerusakan
                                        }
                                    />
                                </div>
                            </div>

                            {/* Accessories Section */}
                            <div className="mt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <label className="fieldset-legend">
                                        Kelengkapan
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => addAccessory(itemIndex)}
                                        className="btn btn-secondary btn-xs"
                                    >
                                        <i className="bi bi-plus-circle mr-1"></i>
                                        Tambah Kelengkapan
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    {item.accessories.map(
                                        (accessory, accessoryIndex) => (
                                            <div
                                                key={accessoryIndex}
                                                className="flex items-center gap-2"
                                            >
                                                <input
                                                    type="text"
                                                    value={accessory.name}
                                                    onChange={(e) =>
                                                        handleAccessoryChange(
                                                            itemIndex,
                                                            accessoryIndex,
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Masukkan kelengkapan (kabel, charger, dll)"
                                                    className="input w-full focus:outline-none focus:border-2 focus:border-primary"
                                                />
                                                {item.accessories.length >
                                                    1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            removeAccessory(
                                                                itemIndex,
                                                                accessoryIndex
                                                            )
                                                        }
                                                        className="btn btn-error btn-xs"
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="btn btn-ghost"
                    >
                        Batal
                    </button>
                    <Button
                        type="submit"
                        className="btn btn-primary"
                        processing={processing}
                    >
                        Simpan Tanda Terima
                    </Button>
                </div>
            </form>
        </AdminLayout>
    );
}
