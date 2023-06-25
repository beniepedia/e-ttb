import React from "react";
import Button from "../Button";
import { Link, usePage } from "@inertiajs/inertia-react";

const ButtonPaymentChoice = ({ ...data }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-5">
            <Button className="btn-error">Bayar Nanti</Button>
            <Button className="btn-secondary dark:btn-success">
                <Link href={route("payment", data.receipt_code)} preserveState>
                    Bayar Online
                </Link>
            </Button>
        </div>
    );
};

export default ButtonPaymentChoice;
