import ButtonFooter from "@/Components/Status/ButtonFooter";
import PaymentInfo from "@/Components/Status/PaymentInfo";
import ReceiptStatus from "@/Components/Status/ReceiptStatus";
import Guest from "@/Layouts/Guest";
import { useForm, usePage } from "@inertiajs/inertia-react";

const PaymentOnline = () => {
    const { receipts, midtrans_client_key } = usePage().props;
    const { data, setData, errors, processing, post } = useForm({
        full_name: "",
        email: "",
        address: "",
        receipt_id: receipts.id,
        phone: receipts.customer.phone,
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

        // axios
        //     .post(route("transaction.gettoken"), data)
        //     .then(({ data }) => {
        //         window.snap.pay(data.token, {
        //             onSuccess: () => {
        //                 console.log("success");
        //             },
        //             onError: () => {
        //                 console.log("error");
        //             },
        //             onPending: () => {
        //                 console.log("pending");
        //             },
        //             onClose: () => {
        //                 console.log("close");
        //             },
        //         });
        //     })
        //     .catch((error) => {
        //         if (error?.response?.status == 422) {
        //             setErrors(error?.response?.data?.errors);
        //         }
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    };

    return (
        <Guest>
            <div className="text-slate-700 dark:text-slate-500 mb-10">
                <h1 className="font-semibold text-center text-xl uppercase mb-10">
                    PEMBAYARAN ONLINE
                </h1>

                <div className="divider font-semibold">DETAIL TANDA TERIMA</div>
                <ReceiptStatus {...receipts}></ReceiptStatus>
            </div>

            <PaymentInfo
                onHandleChange={onHandleChange}
                data={data}
                errors={errors}
                onPress={pay}
                loading={processing}
            ></PaymentInfo>

            <ButtonFooter></ButtonFooter>
        </Guest>
    );
};

export default PaymentOnline;
