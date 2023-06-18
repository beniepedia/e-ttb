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
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <h3 className="text-xl text-gray-500 font-semibold text-center mb-1">
                SILAHKAN LOGIN
            </h3>
            <p className="text-sm text-slate-500 mb-4 text-center">
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
                        className={errors.email && "input-error"}
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
                        className={errors.password && "input-error"}
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
                            className="checkbox-primary"
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-6 mb-6">
                    {/* {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )} */}

                    <Button
                        className="ml-4 sm:btn-sm md:btn-md"
                        processing={processing}
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
