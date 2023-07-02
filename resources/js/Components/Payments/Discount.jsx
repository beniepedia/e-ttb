import React, { useRef, useState } from "react";
import Divider from "../Divider";
import Button from "../Button";
import Input from "../Input";
import axios from "axios";
import { usePage } from "@inertiajs/inertia-react";

const Discount = ({ data, setData }) => {
    const { receipt } = usePage().props;

    const [promo, setPromo] = useState("");
    const [error, serError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePromo = () => {
        serError("");
        setLoading(true);
        setSuccess("");
        axios
            .post(route("transaction.promo"), {
                promo_code: promo,
                receipt_id: receipt.id,
            })
            .then((response) => {
                const message = response?.data?.message;
                const value = response?.data?.value ?? 0;
                setSuccess(message);

                setData({
                    ...data,
                    discount: value,
                    amount_total: data.amount - value,
                });
            })
            .catch((error) => {
                const message = error?.response?.data?.message;
                const status = error?.response?.status;
                if (status == 422) {
                    serError(message);
                }

                if (status == 404) {
                    serError(message);
                }
            })
            .finally(() => setLoading(false));
    };

    return (
        <>
            <Divider>PROMO</Divider>
            <div className="">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <Input
                            placeHolder="Masukkan kode promo"
                            className={"rounded-r-none"}
                            value={promo}
                            handleChange={(e) => setPromo(e.target.value)}
                        ></Input>
                    </div>
                    <Button
                        className="rounded-l-none dark:btn-success"
                        type="button"
                        handleClick={() => handlePromo()}
                        processing={loading}
                    >
                        terapkan
                    </Button>
                </div>
                {error && <div className="text-red-600 mt-1 ">{error}</div>}
                {success && (
                    <div className="text-green-900 mt-1 ">{success}</div>
                )}
            </div>
        </>
    );
};

export default Discount;
