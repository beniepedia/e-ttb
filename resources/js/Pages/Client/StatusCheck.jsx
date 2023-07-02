import { toast } from "@/Components/Alert";
import Input from "@/Components/Input";
import Loading from "@/Components/Loading";
import ButtonPaymentChoice from "@/Components/Payments/ButtonPaymentChoice";
import ButtonFooter from "@/Components/Status/ButtonFooter";
import ReceiptStatus from "@/Components/Status/ReceiptStatus";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import Guest from "@/Layouts/Guest";
import {
    requestNotificationPermission,
    subscribeUser,
} from "@/Libs/enable-webpush";
import { requestLocationPermission } from "@/Libs/get-location";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

const StatusCheck = () => {
    const { filters, receipt, can_pay } = usePage().props;

    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState({
        latitude: "",
        longitude: "",
    });
    const [permission, setPermission] = useState(false);

    const [query, setQuery] = useState({
        receipt_code: filters.receipt_code || "",
    });

    useEffect(() => {
        requestLocationPermission()
            .then(({ latitude, longitude }) => {
                setLocation({ latitude, longitude });
            })
            .catch((err) => {
                setLocation({
                    latitude: "",
                    longitude: "",
                });
            });
    }, []);

    useEffect(() => {
        requestNotificationPermission().then((permission) => {
            if (permission == "granted") {
                setPermission(true);
            }
        });
    }, []);

    const filter = () => {
        Inertia.get(
            route(route().current()),
            { receipt_code: query.receipt_code },
            {
                headers: {
                    location: JSON.stringify(location),
                },
                preserveState: true,
                replace: true,
                onBefore: () => {
                    setLoading(true);
                },
                onSuccess: ({ props }) => {
                    if (!props.receipt) {
                        toast.error(
                            `Tanda terima dengan nomor register ${query.receipt_code} tidak ditemukan!. Silahkan coba lagi`
                        );

                        setQuery({ receipt_code: "" });
                    }
                    if (permission) {
                        subscribeUser();
                    }
                },
                onFinish: () => {
                    setLoading(false);
                },
            }
        );
    };

    return (
        <>
            {loading && <Loading text="Silahkan tunggu..." />}

            <Head>
                <title>Cek Status Tanda Terima</title>
            </Head>
            <Guest>
                <div className="text-slate-700 dark:text-slate-500 mb-10">
                    <h1 className="font-semibold text-center text-xl uppercase mb-10">
                        Cek status tanda terima
                    </h1>
                    <div className="my-3">
                        <Input
                            type="search"
                            // name={"receipt_code"}
                            value={query.receipt_code}
                            handleChange={(e) =>
                                setQuery({ receipt_code: e.target.value })
                            }
                            placeHolder="Masukkan nomor 
                            register"
                            className={"text-sm"}
                        ></Input>
                        <button
                            disabled={query.receipt_code == ""}
                            className="mt-3 w-full btn rounded  btn-accent dark:btn-success"
                            onClick={filter}
                        >
                            cek Tanda Terima
                        </button>

                        {/* <Button handleClick={pay}>Bayar</Button> */}

                        <div
                            className={`${!receipt ? "hidden" : "block"} my-7`}
                        >
                            <div className="divider mb-7 font-semibold">
                                DETAIL TANDA TERIMA
                            </div>

                            <div className="mb-4">
                                {/* {loading && <SkeletonReceiptCheck length={9} />} */}
                                {receipt && <ReceiptStatus {...receipt} />}

                                {can_pay && receipt && (
                                    <ButtonPaymentChoice
                                        {...receipt}
                                    ></ButtonPaymentChoice>
                                )}
                            </div>
                            {receipt?.transaction?.transaction_status ==
                                "PAID" && <TransactionDetail />}

                            <ButtonFooter></ButtonFooter>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
};

export default StatusCheck;
