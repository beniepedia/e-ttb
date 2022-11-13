import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const PrintLabel = () => {
    const { qrcode, receipts } = usePage().props;
    return (
        <div className="w-48 flex flex-col">
            <img src={"data:image/png;base64," + qrcode} alt="label e-ttb" />
            <div className="text-center mt-2">
                <h1 className="text-3xl font-bold">
                    {receipts.receipt_number}
                </h1>
                <h1 className="text-lg font-bold">{receipts.customer.name}</h1>
            </div>
        </div>
    );
};

export default PrintLabel;
