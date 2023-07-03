import axios from "axios";
import { getHours, setHours } from "date-fns";
import { id } from "date-fns/locale";
import { toast } from "react-toastify";

const phoneFormatter = (number) => {
    // if (number == '') return '';

    let newNumber = number;
    if (number.startsWith("0") && number != "") {
        newNumber = "62" + number.substring(1);
    }

    return newNumber;
};

const currency = (number) => {
    // if (number.isNaN) return number;

    let formatter = new Intl.NumberFormat({
        style: currency,
        locale: "id_ID",
    });

    return formatter.format(number);
};

const greetings = () => {
    let hours = getHours(new Date(), { locale: id });
    let $txt;
    if (hours > 17) {
        $txt = "Malam";
    } else if (hours > 13) {
        $txt = "Sore";
    } else if (hours > 9) {
        $txt = "Siang";
    } else {
        $txt = "Pagi";
    }

    return $txt;
};

const sendWA = async (id, message) => {
    try {
        let URL = "http://localhost:5000/chats/send?id=benie";

        const { data } = await axios.post(URL, {
            receiver: id,
            message: message,
        });

        return data;
    } catch {
        return false;
    }
};

function showToast(flash) {
    let types =
        typeof flash.message == "object" ? flash.message.type : "success";

    let message =
        typeof flash.message == "object"
            ? flash.message.message
            : flash.message;

    switch (types) {
        case "error":
            toast.error(message);
            break;
        case "warning":
            toast.warning(message);
            break;
        case "info":
            toast.info(message);
            break;
        default:
            toast.success(message);
    }
}

export { phoneFormatter, currency, greetings, showToast, sendWA };
