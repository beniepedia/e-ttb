import React from "react";
import Layout from "@/Layouts/Main";
import Input from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Modal from "@/Components/Modal";
import _ from "lodash";
import Avatar from "react-avatar";

const UserIndex = () => {
    const { auth } = usePage().props;

    const { data, setData, processing, post, errors, reset, clearErrors } =
        useForm({
            current_password: "",
            new_password: "",
            confirm_password: "",
        });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("change_password"), {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            onSuccess: () => {
                clear();
            },
        });
    };

    const clear = () => {
        reset();
        clearErrors();
    };

    const onHandleClick = (tableName) => {
        Inertia.delete(route("reset.table", { tablename: tableName }), {
            replace: true,
        });
    };

    return (
        <div className="px-4 py-6">
            <div className="avatar flex justify-center">
                <div className="rounded-full border-white border-4 shadow">
                    <Avatar name={auth.user.name} />
                </div>
            </div>

            {/* Display Name */}
            <div className="text-center mt-5 mb-10">
                <p className="text-2xl">{auth.user.name.toUpperCase()}</p>
                <p className="text-xl">{auth.user.email}</p>
            </div>

            {/* Button */}

            {auth.user.user_type === "admin" && (
                <>
                    <div className="flex mb-5 btn-group-vertical gap-1">
                        <a
                            href="#confirm1"
                            className="btn btn-sm btn-error  shadow"
                        >
                            Reset Receipt Table
                        </a>
                        <a
                            href="#confirm2"
                            className="btn btn-sm btn-warning shadow"
                        >
                            Reset Custmomer Table
                        </a>
                    </div>

                    <Modal
                        title="Warning..."
                        id="confirm1"
                        message="Apakah yakin ingin menghapus tabel receipt?. Seluruh isi dari tabel ini akan terhapus secara permanent dan tidak bisa dikembalikan."
                    >
                        <a href="#" className="btn btn-ghost">
                            Batal
                        </a>
                        <a
                            href="#"
                            className="btn btn-ghost text-red-600"
                            onClick={() => onHandleClick("receipts")}
                        >
                            Ya, Lanjutkan!
                        </a>
                    </Modal>

                    <Modal
                        title="Warning..."
                        id="confirm2"
                        message="Apakah yakin ingin menghapus tabel customer?. Seluruh isi dari tabel ini akan terhapus secara permanent dan tidak bisa dikembalikan."
                    >
                        <a href="#" className="btn btn-ghost">
                            Batal
                        </a>
                        <a
                            href="#"
                            className="btn btn-ghost text-red-600"
                            onClick={() => onHandleClick("customers")}
                        >
                            Ya, Lanjutkan!
                        </a>
                    </Modal>
                </>
            )}

            <p className="font-semibold">Ganti Password</p>
            <div className="divider my-1"></div>

            <form onSubmit={handleSubmit}>
                <div>
                    <Label>Password Sekarang</Label>
                    <Input
                        type="password"
                        name="current_password"
                        value={data.current_password}
                        handleChange={handleChange}
                        className={errors.current_password && "input-error"}
                        isFocused={true}
                        autoComplete="new-password"
                    ></Input>
                    <div className="invalid-feedback">
                        {errors.current_password}
                    </div>
                </div>
                <div>
                    <Label>Password Baru</Label>
                    <Input
                        type="password"
                        name="new_password"
                        value={data.new_password}
                        handleChange={handleChange}
                        className={errors.new_password && "input-error"}
                        autoComplete="new-password"
                    ></Input>
                    <div className="invalid-feedback">
                        {errors.new_password}
                    </div>
                </div>
                <div>
                    <Label>Konfirmasi Password Baru</Label>
                    <Input
                        type="password"
                        name="confirm_password"
                        value={data.confirm_password}
                        handleChange={handleChange}
                        className={errors.confirm_password && "input-error"}
                        autoComplete="new-password"
                    ></Input>
                    <div className="invalid-feedback">
                        {errors.confirm_password}
                    </div>
                </div>
                <div className="mt-5">
                    <Button
                        type="submit"
                        className="w-full"
                        processing={processing}
                    >
                        UPDATE
                    </Button>
                </div>
            </form>
        </div>
    );
};

UserIndex.layout = (page) => (
    <Layout children={page} href={route("dashboard")} menu={false} />
);

export default UserIndex;
