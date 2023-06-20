import React from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"), {
            onSuccess: () => {
                setData({ email: "" });
            },
        });
    };

    return (
        <Guest>
            <Head title="Lupa Kata Sandi" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                Masukkan email yang digunakan untuk login, pastikan email yang
                anda masukkan atkif dan masih bisa untuk menerima email.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-800 animate-pulse">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end my-10">
                    <Button className="ml-4" processing={processing}>
                        Kirim email reset
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
