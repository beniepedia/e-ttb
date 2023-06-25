import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";

const PaymentInfo = ({ onHandleChange, onPress, data, errors, loading }) => {
    return (
        <>
            <div className="divider font-semibold mt-5">INFO PEMBAYARAN</div>

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
                    className={`text-sm mt-2 ${errors?.email && "input-error"}`}
                    placeHolder="Masukkan email aktif"
                ></Input>
                <div className="invalid-feedback mb-2">{errors?.email}</div>
                <TextArea
                    name={"address"}
                    handleChange={(e) => onHandleChange(e)}
                    placeHolder="Alamat lengkap"
                    className={`mt-2 -mb-1 ${errors?.address && "input-error"}`}
                ></TextArea>
                <div className="invalid-feedback mb-2">{errors?.address}</div>

                <Button
                    className="w-full mt-4 btn-accent"
                    handleClick={() => onPress()}
                    processing={loading}
                >
                    Bayar ( Rp. 200,000 )
                </Button>
            </div>
        </>
    );
};

export default PaymentInfo;
