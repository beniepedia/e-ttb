import CustomerMap from "@/Components/Customers/CustomerMap";
import LinkSide from "@/Components/LinkSide";
import Layout from "@/Layouts/Main";
import { Link, usePage } from "@inertiajs/inertia-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import _ from "lodash";
import { useState } from "react";
import Avatar from "react-avatar";
import * as Icon from "react-bootstrap-icons";

const CustomerDetail = () => {
    const { customer } = usePage().props;

    const [receipts] = useState(
        _.orderBy(customer.receipts, ["created_at"], ["desc"])
    );

    return (
        <div className="px-4 py-6 w-full md:max-w-2xl">
            <div className="avatar flex justify-center">
                <div className=" rounded-full border-white border-4 shadow-lg">
                    <Avatar name={customer.name} />
                </div>
            </div>

            <h2 className="text-center my-5 text-2xl">{customer.name}</h2>

            <div className="overflow-x-auto py-2">
                <table className="table w-full table-zebra bg-base-100 shadow z-0">
                    <tbody>
                        <tr>
                            <th>Nama</th>
                            {/* <td>:</td> */}
                            <td> : {customer.name}</td>
                        </tr>
                        <tr>
                            <th>Handphone</th>
                            {/* <td>:</td> */}
                            <td> : {customer.phone}</td>
                        </tr>
                        <tr>
                            <th>Whatsapp</th>
                            {/* <td>:</td> */}
                            <td> : {customer.whatsapp}</td>
                        </tr>
                        <tr>
                            <th>Alamat 1</th>
                            {/* <td>:</td> */}
                            <td> : {customer.address}</td>
                        </tr>
                        <tr>
                            <th>Alamat 2</th>
                            {/* <td>:</td> */}
                            <td> : {customer?.location?.display_name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
            <div className="overflow-x-auto">
                <table className="table  w-full z-0  bg-base-100">
                    <thead className="">
                        <tr className="">
                            <th>NO</th>
                            <th>TGL MASUK</th>
                            <th>STATUS</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
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

            {customer.location && <CustomerMap />}
        </div>
    );
};

CustomerDetail.layout = (page) => (
    <Layout children={page} href={route("customers")} menu={false} />
);

export default CustomerDetail;
