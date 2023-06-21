import Button from "@/Components/Button";
import Input from "@/Components/Input";
import ReceiptStatus from "@/Components/Status/ReceiptStatus";
import SkeletonReceiptCheck from "@/Components/Status/SkeletonReceiptCheck";
import Guest from "@/Layouts/Guest";
import { Head, Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import { toast, Alert } from "@/Components/Alert";

const StatusCheck = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [value, setValue] = useState("");

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
            setData(data);
        } catch (error) {
            setData(null);
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
            setLoading(false);
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
            <Alert></Alert>
            <Head>
                <title>Cek Status Tanda Terima</title>
            </Head>
            <Guest>
                <div className="text-slate-700 mb-10">
                    <h1 className="font-semibold text-center text-xl uppercase mb-10">
                        Cek status tanda terima
                    </h1>
                    <div className="my-3">
                        <Input
                            name={"kode"}
                            value={value}
                            handleChange={(e) => setValue(e.target.value)}
                            placeHolder="Masukkan nomor register"
                        ></Input>
                        <div className="text-sm text-red-500 mt-1 italic">
                            {error}
                        </div>
                        <Button
                            processing={loading}
                            className="mt-3 w-full  btn-accent"
                            handleClick={handleClick}
                            loading={loading}
                        >
                            cek Tanda Terima
                        </Button>

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
                            </div>

                            <div className="divider font-semibold">
                                Hubungi Kami
                            </div>

                            <div className="flex gap-5 justify-center my-7">
                                <div className="w-14 h-14 rounded-full bg-stone-500 flex justify-center items-center shadow">
                                    <a href="tel:08116407788">
                                        <Icon.Telephone className="  text-white text-2xl cursor-pointer " />
                                    </a>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-green-600 flex justify-center items-center shadow">
                                    <a
                                        href="https://wa.me/628116407788"
                                        target="_blank"
                                    >
                                        <Icon.Whatsapp className="  text-white  text-2xl  cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Guest>
        </>
    );
};

export default StatusCheck;
