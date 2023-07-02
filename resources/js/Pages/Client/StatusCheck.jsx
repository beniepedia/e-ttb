import Button from "@/Components/Button";
import Input from "@/Components/Input";
import ButtonFooter from "@/Components/Status/ButtonFooter";
import ButtonPaymentChoice from "@/Components/Payments/ButtonPaymentChoice";
import ReceiptStatus from "@/Components/Status/ReceiptStatus";
import SkeletonReceiptCheck from "@/Components/Status/SkeletonReceiptCheck";
import Guest from "@/Layouts/Guest";
import { Head } from "@inertiajs/inertia-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Inertia } from "@inertiajs/inertia";
import {
    requestNotificationPermission,
    subscribeUser,
} from "@/Libs/enable-webpush";
import Loading from "@/Components/Loading";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";

const StatusCheck = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [value, setValue] = useState("");
    const [permission, setPermission] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    window.localStorage.setItem(
                        "location",
                        JSON.stringify({
                            latitude: coords.latitude,
                            longitude: coords.longitude,
                        })
                    );
                },
                (error) => {
                    window.localStorage.removeItem("location");
                },
                {
                    enableHighAccuracy: true,
                }
            );
        }
    }, []);

    useEffect(() => {
        requestNotificationPermission().then((permission) => {
            if (permission == "granted") {
                setPermission(true);
            }
        });
    }, []);

    const handleClick = async () => {
        setError("");
        if (!value) {
            setError("Masukkan nomor register tanda terima anda.");
            return;
        }

        setData(null);
        setLoading(true);

        let geotag = null;
        const location =
            (await JSON.parse(window.localStorage.getItem("location"))) || null;

        if (location) {
            geotag = await reverseGeotag(location.latitude, location.longitude);
        }

        try {
            const { data } = await axios.post(
                route("client.status.process", { receipt_code: value }),
                {
                    location: geotag,
                }
            );

            if (permission) {
                subscribeUser();
            }

            if (data?.transaction != null) {
                const status = data?.transaction?.transaction_status;

                if (
                    status == "UNPAID" ||
                    status == "EXPIRED" ||
                    status === "FAILED"
                ) {
                    Inertia.get(route("payment", data.receipt_code));
                    return;
                }
            }

            setLoading(false);

            setData(data);
        } catch (error) {
            setData(null);
            setLoading(false);
            if (error?.response?.status == 429) {
                toast.error(
                    "Error : Terlalu Banyak Permintaan. Silakan coba lagi nanti."
                );
            } else if (error?.response?.status == 404) {
                toast.error("Tanda terima tidak ditemukan!");
            } else {
                toast.error(
                    "Error : Permintaan tidak dapat dipenuhi. Silahkan coba beberapa saat lagi."
                );
            }
        } finally {
            setValue("");
        }
    };

    const reverseGeotag = async (latitude, longitude) => {
        try {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            const { data } = await axios.get(url);

            return data || null;
        } catch {
            return false;
        }
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
                            name={"kode"}
                            value={value}
                            handleChange={(e) => setValue(e.target.value)}
                            placeHolder="Masukkan nomor 
                            register"
                            className={"text-sm"}
                        ></Input>
                        <div className="text-sm text-red-500 mt-1 italic">
                            {error}
                        </div>
                        <Button
                            processing={loading}
                            className="mt-3 w-full  btn-accent dark:btn-success"
                            handleClick={handleClick}
                            loading={loading}
                        >
                            cek Tanda Terima
                        </Button>

                        {/* <Button handleClick={pay}>Bayar</Button> */}

                        <div
                            className={`${
                                !loading && !data ? "hidden" : "block"
                            } my-7`}
                        >
                            <div className="divider mb-7 font-semibold">
                                DETAIL TANDA TERIMA
                            </div>

                            <div className="">
                                {loading && <SkeletonReceiptCheck length={9} />}
                                {data && <ReceiptStatus {...data} />}

                                {data && data.cost > 0 && !data.transaction && (
                                    <ButtonPaymentChoice
                                        {...data}
                                    ></ButtonPaymentChoice>
                                )}
                                {/* 
                                {data && data?.transaction == "PAID" && (
                                    <TransactionDetail
                                        transaction={data?.transaction}
                                    />
                                )} */}
                            </div>

                            <ButtonFooter></ButtonFooter>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
};

export default StatusCheck;
