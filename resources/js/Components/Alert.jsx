import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = () => {

    const contextClass = {
        success: "bg-green-700",
        error: "bg-red-700",
        info: "bg-sky-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300",
    };

    return (
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
            toastClassName={({ type }) => contextClass[type || "default"] +
                " relative flex p-2 min-h-10 border-b-4 justify-between overflow-hidden cursor-pointer"
            }
        />
    )
}


export { Alert, toast };