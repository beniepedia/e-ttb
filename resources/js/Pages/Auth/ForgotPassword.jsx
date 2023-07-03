import React from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

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
                <div className="alert rounded mb-3 alert-success shadow font-medium text-sm text-green-800 animate-pulse">
                    {status}
                </div>
            )}

            {/* <ValidationErrors errors={errors} /> */}

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 w-full text-sm"
                    isFocused={true}
                    placeHolder="Masukkan alamat email..."
                    handleChange={onHandleChange}
                />
                {errors?.email && (
                    <div className="invalid-feedback mt-2">{errors?.email}</div>
                )}

                <div className="text-center my-6">
                    <Button
                        className="btn-block btn-accent"
                        processing={processing}
                    >
                        Kirim link email reset
                    </Button>

                    <div className="pt-3">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Kembali ke login
                        </Link>
                    </div>
                </div>
            </form>
        </Guest>
    );
}
