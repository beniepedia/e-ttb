import React, { useState } from "react";
import Layout from "@/Layouts/Main";
import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import * as Icon from "react-bootstrap-icons";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import _ from "lodash";
import LinkSide from "@/Components/LinkSide";

const CustomerDetail = () => {
    const { customer } = usePage().props;

    const [receipts] = useState(
        _.orderBy(customer.receipts, ["created_at"], ["desc"])
    );

    return (
        <div className="px-4 py-6 w-full md:max-w-2xl">
            <div className="avatar flex justify-center">
                <div className="w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg">
                    <img
                        src={"/images/assets/profile_default.png"}
                        alt="profile image"
                    />
                </div>
            </div>

            <h2 className="text-center my-5 text-2xl">{customer.name}</h2>

            <table className="table text-left table-zebra table-compact  w-full rounded-lg shadow-md z-0">
                <tbody>
                    <tr>
                        <th>Nama</th>
                        {/* <td>:</td> */}
                        <td>: {customer.name}</td>
                    </tr>
                    <tr>
                        <th>Handphone</th>
                        {/* <td>:</td> */}
                        <td>: {customer.phone}</td>
                    </tr>
                    <tr>
                        <th>Whatsapp</th>
                        {/* <td>:</td> */}
                        <td>: {customer.whatsapp}</td>
                    </tr>
                    <tr>
                        <th>Alamat</th>
                        {/* <td>:</td> */}
                        <td>: {customer.address}</td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-3 ">
                <div className="btn-group w-full">
                    <LinkSide
                        href={"tel:" + customer.phone}
                        className="btn w-1/3 "
                    >
                        <Icon.TelephoneForwardFill className="text-2xl text-slate-600 mr-3" />
                        <span className="hidden md:block">Telpon</span>
                    </LinkSide>
                    {customer.whatsapp && (
                        <LinkSide
                            href={"https://wa.me/" + customer.whatsapp}
                            className="btn w-1/3 btn-success"
                        >
                            <Icon.Whatsapp className="text-2xl  mr-3" />
                            <span className="hidden md:block">WhatsApp</span>
                        </LinkSide>
                    )}
                    <Link
                        href={route("customer.edit", customer.id)}
                        className="btn w-1/3 btn-warning"
                    >
                        <Icon.Pencil className="text-2xl  mr-3" />
                        <span className="hidden md:block">Edit</span>
                    </Link>
                </div>
            </div>
            <h2 className="mt-7 bg-red-300 p-3 rounded-lg shadow-md text-red-900">
                Riwayat : {receipts.length}
            </h2>
            <div className="divider my-1"></div>
            <div className="overflow-auto">
                <table className="table table-compact w-full z-0 shadow-md">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>TGL MASUK</th>
                            <th>STATUS</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {receipts.length ? (
                            receipts.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {format(
                                                new Date(value.delivery_date),
                                                "dd LLLL yyyy",
                                                { locale: id }
                                            )}
                                        </td>
                                        <td>
                                            <div className="badge badge-info">
                                                {value.status}
                                            </div>
                                        </td>
                                        <td>
                                            <Link
                                                href={route(
                                                    "receipt.show",
                                                    value.receipt_code
                                                )}
                                            >
                                                <Icon.InfoCircleFill className="text-2xl text-sky-700" />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center">
                                    Data masih kosong
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CustomerDetail.layout = (page) => (
    <Layout
        auth={page.props.auth}
        children={page}
        href={route("customers")}
        menu={false}
    />
);

export default CustomerDetail;
