import { toast } from "@/Components/Alert";
import Loading from "@/Components/Loading";
import Modal from "@/Components/Modal";
import ButtonIsTaken from "@/Components/Receipts/ButtonIsTaken";
import ButtonUpdateStatus from "@/Components/Receipts/ButtonUpdateStatus";
import Layout from "@/Layouts/Main";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/react";
import axios from "axios";
import { isEmpty } from "lodash";
import { useRef, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import ReceiptHeader from "@/Components/Receipts/ReceiptHeader";
import ReceiptInfoCard from "@/Components/Receipts/ReceiptInfoCard";
import RepairInfoCard from "@/Components/Receipts/RepairInfoCard";
import ItemDetailsCard from "@/Components/Receipts/ItemDetailsCard";
import ImageGallery from "@/Components/Receipts/ImageGallery";
import Description from "@/Components/Receipts/Description";

const ReceiptDetail = () => {
    const { receipt, processing, auth, users } = usePage().props;
    const inputUploadRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [loadingSend, setLoadingSend] = useState(false);
    const [progress, setProgress] = useState(null);
    const [showOptionUser, setShowOptionUser] = useState(false);

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
                toast.error(error?.response?.data?.message);
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
            <div className="relative">
                <Head>
                    <title>{`Detail Tanda Terima No. TTB ${receipt.receipt_number}`}</title>
                </Head>

                {/* Floating Action Buttons */}
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

                {/* Hidden file input */}
                <div className="hidden">
                    <input
                        type="file"
                        ref={inputUploadRef}
                        accept="image/*"
                        onChange={onUploadChange}
                    />
                </div>

                <div className="container mx-auto px-4 py-6 space-y-6">
                    {/* Header */}
                    <ReceiptHeader receipt={receipt} />

                    {/* Status Alerts */}
                    {receipt.status === "Pending" && (
                        <div className="alert alert-warning shadow-md">
                            <div>
                                <Icon.ExclamationTriangle className="text-xl" />
                                <span><strong>Tanda Terima ini belum ditangani</strong></span>
                            </div>
                            <div>
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
                        </div>
                    )}

                    {!receipt.isTaken &&
                    receipt.status != "Pending" &&
                    receipt.status != "Proses" ? (
                        <div className="alert alert-info shadow-md">
                            <div>
                                <Icon.InfoCircle className="text-xl" />
                                <span><strong>Ubah status ttb menjadi sudah diambil ?</strong></span>
                            </div>
                            <div>
                                <ButtonIsTaken id={receipt.id} />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {/* Button Handle */}
                    {receipt.status === "Proses" && (
                        <div className="alert alert-success shadow-md">
                            <div>
                                <Icon.Tools className="text-xl" />
                                <span><strong>Status Pengerjaan</strong></span>
                                <p className="text-sm">Pilih tindakan berdasarkan hasil pengerjaan</p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <a
                                    href="#modal-gagal"
                                    className="btn btn-error btn-sm"
                                >
                                    <Icon.XCircle className="mr-1" /> Gagal
                                </a>
                                <a
                                    href={
                                        receipt.cost == "0" ||
                                        isEmpty(receipt.repair)
                                            ? "#confirmation"
                                            : "#modal-sukses"
                                    }
                                    className="btn btn-success btn-sm"
                                >
                                    <Icon.CheckCircle className="mr-1" /> Berhasil
                                </a>

                                <Modal
                                    id="modal-gagal"
                                    title="Update Status!"
                                    message="Update status pengerjaan menjadi Batal / Gagal ?"
                                >
                                    <a href="#" className="btn btn-ghost">
                                        Tidak
                                    </a>
                                    <ButtonUpdateStatus
                                        className="btn btn-error"
                                        children="OK!"
                                        data={{
                                            id: receipt.id,
                                            status: "gagal",
                                        }}
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
                                    message="Update status pengerjaan menjadi Sukses / Berhasil ?"
                                >
                                    <a href="#" className="btn btn-ghost">
                                        Tidak
                                    </a>
                                    <ButtonUpdateStatus
                                        className="btn btn-success"
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

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Customer and Receipt Info */}
                            <ReceiptInfoCard receipt={receipt} />
                            
                            {/* Repair Info */}
                            <RepairInfoCard receipt={receipt} auth={auth} />
                            
                            {/* Item Details */}
                            <ItemDetailsCard items={receipt.receiptDetails} />
                            
                            {/* Description */}
                            <Description receipt={receipt} />
                        </div>
                        
                        {/* Right Column - Image Gallery */}
                        <div>
                            <ImageGallery 
                                image={receipt.image} 
                                receiptCode={receipt.receipt_code} 
                            />
                        </div>
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
