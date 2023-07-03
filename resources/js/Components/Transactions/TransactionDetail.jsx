import React from "react";
import Divider from "../Divider";
import { usePage } from "@inertiajs/inertia-react";
import { currency } from "@/Helper";
import StatusPending from "./StatusPending";
import StatusSuccess from "./StatusSuccess";
import TransactionStep from "./TransactionStep";
import StatusExpired from "./StatusExpired";
import StatusFailed from "./StatusFailed";

const TransactionDetail = () => {
    const { receipt } = usePage().props;

    const transaction = receipt?.transaction;
    const instructions = transaction?.payload?.instructions;

    return (
        <>
            {transaction.transaction_status == "UNPAID" && <StatusPending />}
            {transaction.transaction_status == "PAID" && <StatusSuccess />}
            {transaction.transaction_status == "EXPIRED" && <StatusExpired />}
            {transaction.transaction_status == "FAILED" && <StatusFailed />}

            <Divider>DETAIL TRANSAKSI</Divider>
            <div className="overflow-x-auto mb-6">
                <table className="table w-full table-compact rounded shadow mb-3">
                    <tbody>
                        <tr>
                            <th>No. Invoice</th>
                            <th>:</th>
                            <td>{transaction?.invoice_number}</td>
                        </tr>
                        <tr>
                            <th>Customer</th>
                            <th>:</th>
                            <td>{transaction?.payload?.customer_name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <th>:</th>
                            <td>{transaction?.payload?.customer_email}</td>
                        </tr>
                        <tr>
                            <th>Rincian</th>
                            <th>:</th>
                            <td>
                                {transaction?.payload?.order_items?.[0].name}
                            </td>
                        </tr>
                        <tr>
                            <th>Tagihan</th>
                            <th>:</th>
                            <td>Rp. {currency(transaction?.amount)}</td>
                        </tr>
                        <tr>
                            <th>Diskon</th>
                            <th>:</th>
                            <td>Rp. {currency(transaction?.discount)}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>:</th>
                            <td>Rp. {currency(transaction?.amount_total)}</td>
                        </tr>
                        <tr>
                            <th>Status Bayar</th>
                            <th>:</th>
                            <td>{transaction?.status}</td>
                        </tr>
                        {transaction?.paid_at && (
                            <tr>
                                <th>Dibayar Pada</th>
                                <th>:</th>
                                <td>{transaction?.paid_at}</td>
                            </tr>
                        )}
                        <tr>
                            <th>Metode Bayar</th>
                            <th>:</th>
                            <td>{transaction?.payload?.payment_name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {transaction?.transaction_status == "UNPAID" && (
                <TransactionStep instructions={instructions} />
            )}
        </>
    );
};

export default TransactionDetail;
