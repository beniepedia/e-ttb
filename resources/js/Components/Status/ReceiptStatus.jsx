import React from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

const ReceiptStatus = ({ ...props }) => {
    const data = props;
    console.log(data);
    const image = data.image.substring(
        data.image.lastIndexOf("/") + 1,
        data.image.lastIndexOf(".")
    );
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full ">
                    <tbody>
                        <tr>
                            <th>No. Register</th>
                            <th>:</th>
                            <td>{data.receipt_code}</td>
                        </tr>

                        <tr>
                            <th>No. Kartu</th>
                            <th>:</th>
                            <td>{data.receipt_number}</td>
                        </tr>
                        <tr>
                            <th>Customer</th>
                            <th>:</th>
                            <td>{data.customer.name}</td>
                        </tr>
                        <tr>
                            <th>Tgl Masuk</th>
                            <th>:</th>
                            <td>
                                {format(
                                    new Date(data.delivery_date),
                                    "EEEE, dd MMMM yyyy",
                                    { locale: id }
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>Jam</th>
                            <th>:</th>
                            <td>
                                {format(new Date(data.delivery_date), "HH:mm")}
                            </td>
                        </tr>
                        <tr>
                            <th>Jenis & Type</th>
                            <th>:</th>
                            <td className="capitalize">
                                {data.category} - {data.barang}
                            </td>
                        </tr>
                        <tr>
                            <th>Kerusakan</th>
                            <th>:</th>
                            <td>{data.kerusakan}</td>
                        </tr>
                        <tr>
                            <th>Kelengkapan</th>
                            <th>:</th>
                            <td>
                                {data.kelengkapan
                                    ? data.kelengkapan.join(" | ")
                                    : "-"}
                            </td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <th>:</th>
                            <td>{data.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={`mt-3 ${image == "no_image" ? "hidden" : "block"}`}>
                <img src={`/${data.image}`} className="rounded-md" alt="..." />
            </div>
        </>
    );
};

export default ReceiptStatus;
