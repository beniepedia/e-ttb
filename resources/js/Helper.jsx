import axios from "axios";
import { getHours, setHours } from "date-fns";
import { id } from "date-fns/locale";


const phoneFormatter = (number) => {

    // if (number == '') return '';

    let newNumber = number;
    if (number.startsWith('0') && number != '') {
        newNumber = '62' + number.substring(1)
    }

    return newNumber;
}

const currency = (number) => {
    // if (number.isNaN) return number;

    let formatter = new Intl.NumberFormat({
        style: currency
    });

    return formatter.format(number)
}

const greetings = () => {
    let hours = getHours(new Date(), { locale: id })
    let $txt;
    if (hours > 17) {
        $txt = 'Malam';
    } else if (hours > 13) {
        $txt = 'Sore';
    } else if (hours > 9) {
        $txt = 'Siang';
    } else {
        $txt = 'Pagi'
    }


    return $txt
}

const sendWA = async (id, message) => {
    try {
        let URL = "http://localhost:5000/chats/send?id=benie"

        const { data } = await axios.post(URL, {
            receiver: id,
            message: message
        });

        return data;
    } catch {
        return false;
    }
}

export { phoneFormatter, currency, greetings, sendWA }