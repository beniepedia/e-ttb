import { usePage } from "@inertiajs/inertia-react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import Divider from "../Divider";
import Discount from "./Discount";
import Modal from "../Modal";
import { useRef } from "react";
import Loading from "../Loading";

const PaymentInfo = ({
    onHandleChange,
    onPress,
    data,
    errors,
    loading,
    setData,
}) => {
    const click = useRef();

    const paymentClick = () => {
        click.current.click();
        onPress();
    };

    return (
        <>
            <Divider className={"mt-7"}>INFO PEMBAYARAN</Divider>

            <div className="text-sm text-center">
                Lengkapi formulir dibawah sebelum melanjutkan ke proses
                pembayaran.
            </div>

            <div className="mt-3 ">
                <Input
                    handleChange={(e) => onHandleChange(e)}
                    value={data.full_name}
                    name={"full_name"}
                    className={`text-sm ${errors?.full_name && "input-error"}`}
                    placeHolder="Masukkan nama lengkap"
                ></Input>
                <div className="invalid-feedback mb-2">{errors?.full_name}</div>
                <Input
                    handleChange={(e) => onHandleChange(e)}
                    name={"email"}
                    value={data.email}
                    className={`text-sm mt-2 ${errors?.email && "input-error"}`}
                    placeHolder="Masukkan email aktif"
                ></Input>
                <div className="invalid-feedback mb-2">{errors?.email}</div>
                <TextArea
                    name={"address"}
                    value={data.address}
                    handleChange={(e) => onHandleChange(e)}
                    placeHolder="Alamat lengkap"
                    className={`mt-2 -mb-1 ${errors?.address && "input-error"}`}
                ></TextArea>
                <div className="invalid-feedback mb-2">{errors?.address}</div>

                <Discount data={data} setData={setData} />

                <a
                    disabled={loading}
                    href="#pembayaran"
                    className="btn w-full mt-4 btn-accent dark:btn-primary rounded shadow"
                >
                    Bayar ( Rp.{" "}
                    {new Intl.NumberFormat({
                        locale: "id_ID",
                    }).format(data.amount_total)}{" "}
                    )
                </a>
            </div>

            {loading && <Loading text="Tunggu sebentar..." />}

            <Modal
                title="Pembayaran!"
                message="Pastikan data pembayaran sudah benar. Yakin ingin melanjutkan pembayaran ?"
                id="pembayaran"
            >
                <a
                    ref={click}
                    href="#"
                    className="btn rounded btn-sm md:btn-md btn-error text-white"
                >
                    BATAL
                </a>
                <Button
                    className="btn-sm md:btn-md"
                    handleClick={() => paymentClick()}
                    processing={loading}
                >
                    IYA, LANJUTKAN
                </Button>
            </Modal>
        </>
    );
};

export default PaymentInfo;
