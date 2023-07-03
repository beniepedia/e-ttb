import Loading from "@/Components/Loading";
import PaymentChannel from "@/Components/Payments/PaymentChannel";
import PaymentInfo from "@/Components/Payments/PaymentInfo";
import ButtonFooter from "@/Components/Status/ButtonFooter";
import TransactionDetail from "@/Components/Transactions/TransactionDetail";
import Guest from "@/Layouts/Guest";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";

const PaymentOnline = () => {
    const { receipt } = usePage().props;

    const customer = receipt.customer;
    const transaction = receipt?.transaction;

    const { data, setData, errors, processing, post } = useForm({
        full_name: customer.full_name,
        email: customer.email,
        address: customer.address,
        receipt_id: receipt.id,
        phone: receipt.customer.phone,
        payment_method: "",
        amount: receipt.cost,
        amount_total: receipt.cost,
        discount: 0,
    });

    // const [loading, setLoading] = useState(false);
    // const [errors, setErrors] = useState(null);
    // const [data, setData] = useState({
    //     full_name: "",
    //     email: "",
    //     address: "",
    // });

    // useEffect(() => {
    //     const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //     const script = document.createElement("script");
    //     script.src = snapSrcUrl;
    //     script.setAttribute("data-client-key", midtrans_client_key);
    //     script.async = true;

    //     document.body.appendChild(script);
    // }, []);

    const onHandleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    const pay = () => {
        post(route("transaction.gettoken"), {
            preserveScroll: true,
        });
    };

    return (
        <Guest>
            <Head>
                <title>Pembayaran</title>
            </Head>
            <div className="text-slate-700 dark:text-slate-400 mb-10">
                <h1 className="font-semibold text-center text-xl uppercase mb-10">
                    PEMBAYARAN
                </h1>

                {/* <Divider>DETAIL TANDA TERIMA</Divider>
                <Receipttatus {...receipt} showImage={false}></Receipttatus> */}
            </div>

            {transaction && <TransactionDetail />}

            {!transaction ||
            transaction.transaction_status == "EXPIRED" ||
            transaction.transaction_status == "FAILED" ? (
                <>
                    <PaymentChannel
                        {...{ data, setData, errors }}
                    ></PaymentChannel>

                    <PaymentInfo
                        onHandleChange={onHandleChange}
                        data={data}
                        setData={setData}
                        errors={errors}
                        onPress={pay}
                        loading={processing}
                    ></PaymentInfo>
                </>
            ) : (
                ""
            )}

            <ButtonFooter></ButtonFooter>
        </Guest>
    );
};

export default PaymentOnline;
