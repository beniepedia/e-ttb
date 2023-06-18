import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Main";
import ReceiptList from "@/Components/Receipts/ReceiptList";
import ButtonFly from "@/Components/ButtonFly";
import * as Icon from "react-bootstrap-icons";
import { isNull } from "lodash";
import { Inertia } from "@inertiajs/inertia";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import Button from "@/Components/Button";
import InfiniteScroll from "react-infinite-scroll-component";
import pickBy from "lodash/pickBy";
import { usePrevious } from "react-use";
import { usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import QrScanner from "@/Components/QrScanner";

const ReceiptIndex = () => {
    const { receipts, filters } = usePage().props;

    const [query, setQuery] = useState({
        search: filters.search || "",
        status: filters.status || "",
    });

    const prevValues = usePrevious(query);
    const [openScan, setOpenScan] = useState(false);
    const [page, setPage] = useState("");
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(receipts.data);
        setPage(receipts.links.next);
    }, [receipts]);

    useEffect(() => {
        if (prevValues) {
            const search = Object.keys(pickBy(query)).length
                ? pickBy(query)
                : "";

            Inertia.get(route(route().current()), search, {
                preserveState: true,
                replace: true,
            });
        }
    }, [query]);

    function handleChangeInput(e) {
        setQuery({ [e.target.name]: e.target.value });
    }

    // useEffect(() => {
    //     if (!isNull(state)) {
    //         Inertia.get(route(route().current()), { query: state }, {
    //             preserveState: true,
    //             replace: true,
    //         })
    //     }
    // }, [state])

    // console.log(query)

    const onNext = async () => {
        if (page) {
            let { data } = await axios.get(page);

            setItem([...item, ...data.data]);
            setPage(data.links.next);
        }
    };

    const handleScan = (result) => {
        if (result) {
            setQuery({ search: result });
            setOpenScan(false);
        }
    };

    return (
        <div className="py-4 px-3">
            <Head>
                <title>List Tanda Terima</title>
            </Head>
            <div className="mb-5">
                <div className="input-group shadow-md rounded-lg">
                    <input
                        type="text"
                        name="search"
                        value={query.search}
                        className="input input-bordered w-full"
                        disabled={openScan}
                        onChange={handleChangeInput}
                        placeholder="Ketik nama customer / Scan qrcode TTB"
                    />
                    {!query.search && !openScan ? (
                        <>
                            <Button
                                handleClick={() => setOpenScan(true)}
                                className="btn-info"
                                // processing={openScan}
                            >
                                <Icon.QrCodeScan className="text-2xl" />
                            </Button>
                            <select
                                name="status"
                                className="select focus:outline-none bg-red-500 text-white"
                                onChange={handleChangeInput}
                                value={query.status}
                            >
                                <option value="">All</option>
                                <option value={"pending"}>Pending</option>
                                <option value={"proses"}>Proses</option>
                                <option value={"berhasil"}>Berhasil</option>
                                <option value={"gagal"}>Gagal</option>
                            </select>
                        </>
                    ) : (
                        <Button
                            className="btn-error"
                            handleClick={() => {
                                setQuery({ search: "" });
                                setOpenScan(false);
                            }}
                        >
                            <Icon.XCircle className="text-2xl" />
                        </Button>
                    )}
                </div>
            </div>

            {/* <button className='btn btn-primary' onClick={() => setOpenScan(true)}>SCAN</button> */}

            {openScan ? (
                <div className="flex justify-center">
                    <QrScanner
                        className="md:w-1/2 lg:w-1/3"
                        onScan={handleScan}
                        onError={(error) => console.log(error)}
                    />
                </div>
            ) : (
                <>
                    {/* <div className="btn-group mb-5 flex justify-center">
                        <button
                            className="btn btn-sm w-1/5"
                            onClick={() => handleChangeStatus("")}
                        >
                            Semua
                        </button>
                        <button
                            className="btn btn-sm w-1/5 btn-warning"
                            onClick={() => handleChangeStatus("pending")}
                        >
                            Pending
                        </button>
                        <button
                            className="btn btn-sm w-1/5 btn-info"
                            onClick={() => handleChangeStatus("proses")}
                        >
                            Proses
                        </button>
                        <button
                            className="btn btn-sm w-1/5 btn-success"
                            onClick={() => handleChangeStatus("berhasil")}
                        >
                            Berhasil
                        </button>
                        <button
                            className="btn btn-sm w-1/5 btn-error"
                            onClick={() => handleChangeStatus("gagal")}
                        >
                            Gagal
                        </button>
                    </div> */}

                    <InfiniteScroll
                        dataLength={item.length}
                        next={onNext}
                        hasMore={page ? true : false}
                        loader={
                            <div className="flex justify-center">
                                <img
                                    src="/images/assets/loading.svg"
                                    width="80"
                                />
                            </div>
                        }
                    >
                        <ReceiptList receipts={item} />
                    </InfiniteScroll>

                    <ButtonFly
                        href={route("receipts.create")}
                        className="dark:bg-blue-800 border-none shadow-xl bg-blue-600 hover:bg-blue-800"
                        icon={<Icon.ClipboardDataFill className="text-lg" />}
                    />
                </>
            )}

            {/* 
            <div className='input-group'>

                <Select
                    className='select-bordered w-1/3'
                >
                    <option value="">Selet</option>
                </Select>

                <label className='w-'>
                    <Input className='w-fit'></Input>
                </label>
            </div> */}
        </div>
    );
};

ReceiptIndex.layout = (page) => (
    <Layout auth={page.props.auth} children={page} />
);

export default ReceiptIndex;
