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
import Button from "@/Components/Button";

const ReceiptDetail = () => {
    const { receipt, processing, auth, users } = usePage().props;
    const inputUploadRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [loadingSend, setLoadingSend] = useState(false);
    const [progress, setProgress] = useState(null);
    const [showOptionUser, setShowOptionUser] = useState(false);

    const dateDiff = (date) => {
        const newDate = formatDistanceToNowStrict(new Date(date), {
            locale: id,
        });

        // let n = newDate.replace('sekitar', '')

        return `${newDate} yang lalu`;
    };

    const handleChangeHandleBy = (e) => {
        const data = {
            handle_by: e.target.value,
            id: receipt.id,
        };

        Inertia.patch(route("receipts.updatePatch"), data, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            onFinish: () => {
                setShowOptionUser(false);
            },
        });
    };

    const handleSend = async () => {
        if (!receipt.customer.whatsapp) {
            toast.info(
                "No. whatsapp customer tidak tersedia. Lengkapi data customer."
            );
            return;
        }

        setLoadingSend(true);

        axios
            .post(route("receipts.send", receipt.id))
            .then(({ data }) => {
                toast.success(data.message);
            })
            .catch((error) => {
                // console.log(error.message);
                toast.error("Gagal mengirim kartu tanda terima ke whatsapp");
            })
            .finally(() => {
                setLoadingSend(false);
            });
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
                onProgress: (progress) => {
                    setProgress(progress.percentage);
                },
                onSuccess: () => {
                    setProgress(null);
                    setLoading(false);
                },
            }
        );
    };

    return (
        <>
            {loadingSend && <Loading />}
            <div className=" relative">
                <Head>
                    <title>{`Detail Tanda Terima No. TTB ${receipt.receipt_number}`}</title>
                </Head>

                <div className="absolute flex flex-col gap-2 right-3 top-3 z-10">
                    <button
                        className="btn btn-warning text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg"
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

                    <button
                        className={`btn btn-error text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg`}
                        data-tip="Kirim link ke whatsapp"
                        onClick={() => {
                            window.open(
                                "https://api.whatsapp.com/send?text=" +
                                    window.location.href
                            );
                        }}
                    >
                        <Icon.Share />
                    </button>

                    <button
                        className={`btn btn-dark text-2xl btn-circle tooltip tooltip-left pl-[0.7rem] shadow-lg`}
                        disabled={loading}
                        data-tip="Upload gambar"
                        onClick={uploadHandleClick}
                    >
                        <Icon.Camera />
                    </button>
                </div>

                <div
                    className={`h-72 md:h-[25rem] bg-cover shadow-md bg-center`}
                    style={{ backgroundImage: `url(/${receipt.image})` }}
                >
                    {progress && (
                        <div
                            className={`w-full h-full flex justify-center items-center ${
                                progress && "bg-slate-700/70"
                            }`}
                        >
                            <div
                                className="radial-progress text-base-200 "
                                style={{
                                    "--value": progress,
                                    "--thickness": "4px",
                                }}
                            >
                                {progress && progress + "%"}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mx-3">
                    <div className="flex justify-center mt-3">
                        <input
                            type="file"
                            className="hidden"
                            ref={inputUploadRef}
                            accept="image/*"
                            onChange={onUploadChange}
                        />
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
                                    handle_by:
                                        auth.user.user_type == "kasir"
                                            ? receipt.handle_by
                                            : auth.user.name,
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
                                    title="Update Status!"
                                    message="Update status pengerjaan menjadi Batal / Gagal ?"
                                >
                                    <a href="#" className="btn btn-sm">
                                        tidak
                                    </a>
                                    <ButtonUpdateStatus
                                        className="block shadow-md"
                                        children="OK!"
                                        data={{
                                            id: receipt.id,
                                            status: "gagal",
                                        }}
                                    />
                                </Modal>

                                <Modal
                                    id="confirmation"
                                    title="Update Status!"
                                    message="Keterangan perbaikan atau biaya perbaikan belum diisi..."
                                >
                                    <a href="#" className="btn btn-ghost">
                                        TUTUP
                                    </a>
                                </Modal>

                                <Modal
                                    id="modal-sukses"
                                    title="Perhatian!"
                                    message="Update status pengerjaan menjadi Sukses / Berhasil ?"
                                >
                                    <a href="#" className="btn btn-sm">
                                        tidak
                                    </a>
                                    <ButtonUpdateStatus
                                        className="block shadow-md"
                                        children="OK!"
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
                        <div className="overflow-x-auto">
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
                                                ({" "}
                                                {dateDiff(
                                                    receipt.delivery_date
                                                )}{" "}
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
                                                    new Date(
                                                        receipt.pickup_date
                                                    ),
                                                    "dd LLLL yyyy",
                                                    { locale: id }
                                                )}
                                                <br />
                                                <span className="italic text-slate-500">
                                                    ({" "}
                                                    {dateDiff(
                                                        receipt.pickup_date
                                                    )}{" "}
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
                                    {/* {receipt.status != "Pending" ||
                                    (receipt.handle_by != "" && (
                                        <tr>
                                            <td>Teknisi</td>
                                            <td>:</td>
                                            <td>{receipt.handle_by}</td>
                                        </tr>
                                    ))} */}
                                    {receipt.handle_by != "" && (
                                        <tr>
                                            <td>Teknisi</td>
                                            <td>:</td>
                                            <td className="flex gap-3 items-center">
                                                {showOptionUser ? (
                                                    <>
                                                        <select
                                                            name=""
                                                            id=""
                                                            className="select select-sm focus:outline-none"
                                                            onChange={(e) =>
                                                                handleChangeHandleBy(
                                                                    e
                                                                )
                                                            }
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                                selected
                                                            >
                                                                Pilih teknisi
                                                            </option>
                                                            {users.map(
                                                                (
                                                                    user,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <option
                                                                            value={
                                                                                user.name
                                                                            }
                                                                        >
                                                                            {
                                                                                user.name
                                                                            }
                                                                        </option>
                                                                    );
                                                                }
                                                            )}
                                                        </select>
                                                        <button
                                                            onClick={() =>
                                                                setShowOptionUser(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            <Icon.XCircleFill />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        {receipt.handle_by}
                                                        {auth.user.user_type ==
                                                            "kasir" ||
                                                            (auth.user
                                                                .user_type ==
                                                                "admin" && (
                                                                <button
                                                                    onClick={() =>
                                                                        setShowOptionUser(
                                                                            true
                                                                        )
                                                                    }
                                                                >
                                                                    <Icon.Pencil />
                                                                </button>
                                                            ))}
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    )}
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
                                                ? receipt.kelengkapan.join(
                                                      " | "
                                                  )
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
                                                    className="rounded-full px-3 py-1 dark:text-slate-700"
                                                />
                                                {receipt.isTaken && (
                                                    <div className="rounded-full px-3 py-1 bg-success dark:text-slate-700">
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
            </div>
        </>
    );
};

ReceiptDetail.layout = (page) => (
    <Layout children={page} menu={false} href={route("receipts")} />
);

export default ReceiptDetail;
