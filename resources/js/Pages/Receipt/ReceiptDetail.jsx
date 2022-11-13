import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage, Head, Link } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Main";
import ButtonUpdateStatus from "@/Components/Receipts/ButtonUpdateStatus";
import Modal from "@/Components/Modal";
import Description from "@/Components/Receipts/Description";
import Status from "@/Components/Receipts/Status";
import { format, formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import ButtonIsTaken from "@/Components/Receipts/ButtonIsTaken";
import { isEmpty } from "lodash";
import * as Icon from "react-bootstrap-icons";
import { useRef } from "react";
import axios from "axios";
import { toast } from "@/Components/Alert";
import Loading from "@/Components/Loading";

const ReceiptDetail = () => {
    const { receipt, processing, auth } = usePage().props;

    const inputUploadRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [loadingSend, setLoadingSend] = useState(false);

    const dateDiff = (date) => {
        const newDate = formatDistanceToNowStrict(new Date(date), {
            locale: id,
        });

        // let n = newDate.replace('sekitar', '')

        return `${newDate} yang lalu`;
    };

    const handleSend = async () => {
        if (!receipt.customer.whatsapp) {
            toast.info(
                "No. whatsapp customer tidak tersedia. Lengkapi data customer."
            );
            return;
        }

        setLoadingSend(true);
        const { status, data } = await axios.post(
            route("receipts.send", receipt.id),
            {
                whatsapp: receipt.customer.whatsapp,
            }
        );

        setLoadingSend(false);

        if (status === 200) {
            toast.success("E-TTB Berhasil dikirim ke customer");
        } else {
            toast.error(
                "E-TTB gagal dikirim ke customer. Coba beberapa saat lagi"
            );
        }
    };

    const uploadHandleClick = () => {
        inputUploadRef.current.click();
    };

    const onUploadChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];

        if (!fileObj) return;

        Inertia.post(
            route("receipts.imageupload", receipt.id),
            {
                photo: fileObj,
            },
            {
                preserveState: true,
                onBefore: () => {
                    setLoading(true);
                },
                onSuccess: () => {
                    setLoading(false);
                },
            }
        );
    };

    return (
        <>
            {loadingSend && <Loading />}
            <div className="mt-10 mx-3 relative">
                <Head title="TTB Detail"></Head>

                <div className="absolute flex flex-row gap-2 right-0 -top-5 z-10">
                    <button
                        className="btn btn-warning text-2xl btn-circle tooltip tooltip-bottom pl-[0.7rem] shadow-lg"
                        data-tip="Cetak Label"
                        onClick={() =>
                            window.open(
                                route("printlabel", receipt.receipt_code)
                            )
                        }
                    >
                        <Icon.Printer />
                    </button>
                    <button
                        className={`btn btn-success text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg`}
                        disabled={loadingSend}
                        data-tip="Kirim E-TTB"
                        onClick={handleSend}
                    >
                        <Icon.Receipt />
                    </button>
                </div>

                <div className="avatar flex justify-center">
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 rounded-full border-white border-4 shadow-lg">
                        <a href={"/" + receipt.image} target="_blank">
                            <img
                                src={"/" + receipt.image}
                                alt={receipt.image}
                            />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <input
                        type="file"
                        className="hidden"
                        ref={inputUploadRef}
                        accept="image/*"
                        onChange={onUploadChange}
                    />
                    <button
                        className={`btn btn-outline btn-dark shadow-md btn-sm ${
                            loading && "loading"
                        }`}
                        disabled={loading}
                        onClick={uploadHandleClick}
                    >
                        Upload
                        <Icon.Camera className="ml-3 text-xl" />
                    </button>
                </div>
                {receipt.status === "Pending" && (
                    <div className="alert shadow-md mt-5 flex flex-col">
                        <h2 className="block">
                            Tanda Terima ini belum ditangani
                        </h2>
                        <ButtonUpdateStatus
                            variant="primary"
                            data={{
                                id: receipt.id,
                                status: "proses",
                                handle_by: auth.user.name,
                            }}
                            disable={processing}
                        >
                            PROSES Sekarang
                        </ButtonUpdateStatus>
                    </div>
                )}

                {!receipt.isTaken &&
                receipt.status != "Pending" &&
                receipt.status != "Proses" ? (
                    <div className="alert shadow-md mt-5 flex flex-col">
                        <h2 className="block">
                            Ubah status ttb menjadi sudah diambil ?
                        </h2>
                        <ButtonIsTaken id={receipt.id} />
                    </div>
                ) : (
                    ""
                )}

                {/* Button Handle */}
                {receipt.status === "Proses" && (
                    <div className="mt-5 flex justify-between items-center alert shadow-md ">
                        <div>
                            <h2>Status Pengerjaan :</h2>
                        </div>
                        <div className="">
                            <a
                                href="#modal-gagal"
                                className="btn btn-sm btn-error shadow-md"
                            >
                                gagal
                            </a>
                            <a
                                href={
                                    receipt.cost == "0" ||
                                    isEmpty(receipt.repair)
                                        ? "#confirmation"
                                        : "#modal-sukses"
                                }
                                className="btn btn-sm btn-success shadow-md"
                            >
                                Berhasil
                            </a>

                            <Modal
                                id="modal-gagal"
                                title="Perhatian!"
                                message="Yakin ingin merubah status pengerjaan Batal / Gagal ?"
                            >
                                <a href="#" className="btn btn-sm">
                                    tidak
                                </a>
                                <ButtonUpdateStatus
                                    className="block shadow-md"
                                    children="Yakin"
                                    data={{ id: receipt.id, status: "gagal" }}
                                />
                            </Modal>

                            <Modal
                                id="confirmation"
                                title="Perhatian!"
                                message="Keterangan perbaikan atau biaya perbaikan belum diisi..."
                            >
                                <a href="#" className="btn btn-ghost">
                                    TUTUP
                                </a>
                            </Modal>

                            <Modal
                                id="modal-sukses"
                                title="Perhatian!"
                                message="Yakin ingin merubah status pengerjaan Sukses / Berhasil ?"
                            >
                                <a href="#" className="btn btn-sm">
                                    tidak
                                </a>
                                <ButtonUpdateStatus
                                    className="block shadow-md"
                                    children="Yakin"
                                    data={{
                                        id: receipt.id,
                                        status: "berhasil",
                                    }}
                                />
                            </Modal>
                        </div>
                    </div>
                )}

                {/* list */}
                <div className="mt-8">
                    <div className="overflow-x-scroll">
                        <table className="table text-left table-zebra table-compact  w-full rounded-lg shadow-md">
                            <tbody className="">
                                <tr>
                                    <td>No Kartu </td>
                                    <td>:</td>
                                    <td className="font-semibold">
                                        {receipt.receipt_number} -{" "}
                                        <a
                                            href={`/images/ttb/ttb_${receipt.receipt_code}.png`}
                                            target="_blank"
                                            className="tooltip tooltip-bottom text-sky-600"
                                            data-tip="Kartu Tanda Terima Barang"
                                        >
                                            ( {receipt.receipt_code} )
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tanggal Masuk</td>
                                    <td>:</td>
                                    <td>
                                        {format(
                                            new Date(receipt.delivery_date),
                                            "dd LLLL yyyy",
                                            { locale: id }
                                        )}{" "}
                                        <br />{" "}
                                        <span className="italic text-slate-500">
                                            ( {dateDiff(receipt.delivery_date)}{" "}
                                            )
                                        </span>
                                    </td>
                                </tr>
                                {receipt.isTaken && (
                                    <tr>
                                        <td>Tanggal Ambil</td>
                                        <td>:</td>
                                        <td>
                                            {format(
                                                new Date(receipt.pickup_date),
                                                "dd LLLL yyyy",
                                                { locale: id }
                                            )}
                                            <br />
                                            <span className="italic text-slate-500">
                                                ({" "}
                                                {dateDiff(receipt.pickup_date)}{" "}
                                                )
                                            </span>
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Customer</td>
                                    <td>:</td>
                                    <td className="hover:bg-blue-300">
                                        <Link
                                            href={route(
                                                "customer.show",
                                                receipt.customer.id
                                            )}
                                            className="flex items-center gap-2 tooltip tooltip-bottom"
                                            data-tip="Detail Customer"
                                        >
                                            {receipt.customer.name}
                                            <Icon.ArrowRight />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Penerima</td>
                                    <td>:</td>
                                    <td className="capitalize">
                                        {receipt.user.name}
                                    </td>
                                </tr>
                                {receipt.status != "Pending" ||
                                    (receipt.handle_by != "" && (
                                        <tr>
                                            <td>Teknisi</td>
                                            <td>:</td>
                                            <td>{receipt.handle_by}</td>
                                        </tr>
                                    ))}
                                <tr>
                                    <td>Barang</td>
                                    <td>:</td>
                                    <td>
                                        <p className="capitalize">
                                            {receipt.category} -{" "}
                                            {receipt.barang}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kelengkapan</td>
                                    <td>:</td>
                                    <td>
                                        {receipt.kelengkapan
                                            ? receipt.kelengkapan.join(" | ")
                                            : "Tidak ada"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kerusakan</td>
                                    <td>:</td>
                                    <td>{receipt.kerusakan}</td>
                                </tr>
                                <tr>
                                    <td>Status </td>
                                    <td>:</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Status
                                                status={receipt.status}
                                                className="rounded-full px-3 py-1"
                                            />
                                            {receipt.isTaken && (
                                                <div className="rounded-full px-3 py-1 bg-success">
                                                    Sudah Diambil
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* description */}
                    <Description receipt={receipt} />
                </div>
            </div>
        </>
    );
};

ReceiptDetail.layout = (page) => (
    <Layout
        auth={page.props.auth}
        children={page}
        menu={false}
        href={route("receipts")}
    />
);

export default ReceiptDetail;
