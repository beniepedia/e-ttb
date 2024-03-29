import React, { useEffect, useState } from "react";
import Layout from "@/Layouts/Main";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import TextArea from "@/Components/TextArea";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import { phoneFormatter } from "@/Helper";

const CustomerEdit = (props) => {
    const { customer } = props;
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: customer.name,
            phone: customer.phone,
            whatsapp: customer.whatsapp,
            address: customer.address,
        });

    const [state, setState] = useState(false);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("customer.edit", customer.id), {
            onSuccess: () => {
                clear();
            },
        });
    };

    const clear = () => {
        clearErrors();
        reset();
    };

    useEffect(() => {
        if (state) {
            let phone = data.phone;
            phone = phoneFormatter(phone);

            setData("whatsapp", phone);
        } else {
            setData("whatsapp", customer.whatsapp);
        }
    }, [data.phone, state]);

    function toggle(value) {
        return !value;
    }

    return (
        <>
            <Head>
                <title>Edit Customer</title>
            </Head>
            <div className="bg-slate-300 p-4">
                <h2 className="font-semibold text-slate-600">EDIT CUSTOMER</h2>
            </div>
            <div className="my-5 ">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="px-4">
                        <div>
                            <Label value="Nama Customer" forInput="name" />
                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                className={errors.name && "input-error"}
                            />
                            {errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div className="mt-2">
                            <Label value="No Handphone" forInput="phone" />
                            <Input
                                type="number"
                                name="phone"
                                value={data.phone}
                                autoComplete="phone"
                                handleChange={onHandleChange}
                                className={errors.phone && "input-error"}
                            />
                            {errors.phone && (
                                <div className="invalid-feedback">
                                    {errors.phone}
                                </div>
                            )}
                        </div>

                        <div className="mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="waCheck"
                                    handleChange={() => setState(toggle)}
                                />
                                <span className="ml-3">
                                    No Handphone sama dengan Whatsapp ?
                                </span>
                            </label>
                        </div>

                        <div className="mt-2">
                            <Label value="No WhatsApp" forInput="whatsapp" />
                            <Input
                                type="number"
                                name="whatsapp"
                                value={phoneFormatter(data.whatsapp)}
                                autoComplete="whatsapp"
                                disabled={state ? true : false}
                                handleChange={onHandleChange}
                                className={errors.whatsapp && "input-error"}
                            />
                            {errors.whatsapp && (
                                <div className="invalid-feedback">
                                    {errors.whatsapp}
                                </div>
                            )}
                        </div>

                        <div className="mt-2">
                            <Label value="Alamat" forInput="address" />
                            <TextArea
                                name="address"
                                value={data.address}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-5 grid grid-flow-col gap-3">
                            <Link
                                href={route("customers")}
                                className="btn w-full shadow-md"
                            >
                                Cancel
                            </Link>

                            <Button
                                type="submit"
                                processing={processing}
                                className="btn-success w-full mb-3 shadow-md"
                                children="Update"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

CustomerEdit.layout = (page) => (
    <Layout
        errors={page.props.errors}
        children={page}
        href={route(
            route().params.history
                ? route().params.history + ".edit"
                : "customers"
        )}
        menu={false}
    />
);

export default CustomerEdit;
