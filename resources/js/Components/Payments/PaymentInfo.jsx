import { usePage } from "@inertiajs/inertia-react";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import Divider from "../Divider";
import Discount from "./Discount";

const PaymentInfo = ({
    onHandleChange,
    onPress,
    data,
    errors,
    loading,
    setData,
}) => {
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

                <Button
                    className="w-full mt-4 btn-accent dark:btn-primary"
                    handleClick={() => onPress()}
                    processing={loading}
                >
                    Bayar ( Rp.{" "}
                    {new Intl.NumberFormat({
                        locale: "id_ID",
                    }).format(data.amount_total)}{" "}
                    )
                </Button>
            </div>
        </>
    );
};

export default PaymentInfo;
