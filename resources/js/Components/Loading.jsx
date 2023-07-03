import React from "react";
import { ArrowRepeat } from "react-bootstrap-icons";

const Loading = ({ text = "Please Wait..." }) => {
    return (
        <div className="top-0 left-0 bottom-0 fixed h-full w-full z-50  bg-slate-600/40 backdrop-blur-md flex justify-center items-center text-white font-bold">
            <h3 className="text-lg flex">
                <ArrowRepeat className="text-3xl animate-spin mr-2" />
                {text}
            </h3>
        </div>
    );
};

export default Loading;
