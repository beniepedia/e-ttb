import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="alert bg-green-600 text-white mb-3 rounded p-2">
                    {status}
                </div>
            )}
            <h3 className="text-xl text-slate-600 font-semibold text-center mb-3">
                SILAHKAN LOGIN
            </h3>
            <p className="text-sm text-slate-500 mb-5 text-center">
                Gunakan alamat email yang sudah terdaftar untuk masuk ke
                aplikasi.
            </p>
            {/* <ValidationErrors errors={errors} /> */}

            <form onSubmit={submit}>
                <div>
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                        placeHolder="Masukkan alamat email"
                        className={`text-sm ${errors.email && "input-error"}`}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                <div className="mt-4">
                    <Input
                        type="password"
                        name="password"
                        placeHolder="Masukkan kata sandi"
                        value={data.password}
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                        className={`text-sm ${
                            errors.password && "input-error"
                        }`}
                    />
                    {errors.password && (
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    )}
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                            className="checkbox"
                        />

                        <span className="ml-2 text-sm text-slate-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="my-7 text-center">
                    <Button className="btn-block" processing={processing}>
                        Masuk
                    </Button>
                    {canResetPassword && (
                        <div className="pt-3">
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Lupa kata sandi ?
                            </Link>
                        </div>
                    )}
                </div>
            </form>
        </Guest>
    );
}
