import React from "react";
import Button from "../Button";
import { Link, usePage } from "@inertiajs/inertia-react";

const ButtonPaymentChoice = ({ ...data }) => {
    return (
        <div className=" mt-5">
            <Link
                href={route("payment", data.receipt_code)}
                preserveState
                className="w-full"
            >
                <Button className="btn-secondary dark:btn-success w-full">
                    Bayar Sekarang
                </Button>
            </Link>
        </div>
    );
};

export default ButtonPaymentChoice;
