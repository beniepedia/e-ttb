import React from "react";
import * as Icon from "react-bootstrap-icons";

const ButtonFooter = () => {
    return (
        <>
            <div className="divider font-semibold mt-7">Hubungi Kami</div>

            <div className="flex gap-5 justify-center my-7">
                <div className="w-14 h-14 rounded-full bg-stone-500 flex justify-center items-center shadow">
                    <a href="tel:08116407788">
                        <Icon.Telephone className="  text-white text-2xl cursor-pointer " />
                    </a>
                </div>
                <div className="w-14 h-14 rounded-full bg-green-600 flex justify-center items-center shadow">
                    <a href="https://wa.me/628116407788" target="_blank">
                        <Icon.Whatsapp className="  text-white  text-2xl  cursor-pointer" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default ButtonFooter;
