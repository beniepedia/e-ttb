import React from "react";

const SkeletonReceiptCheck = ({ length = 1 }) => {
    const count = Array.from({ length: length }, (_, index) => index + 1);

    return (
        <>
            <table className="table table-compact w-full">
                <tbody className="">
                    {count.map((iteration) => {
                        return (
                            <tr
                                key={iteration}
                                className="flex flex-row justify-center"
                            >
                                <td className="w-full">
                                    <div className="h-4 w-full  bg-slate-400/70 rounded-lg animate-pulse"></div>
                                </td>
                                <td>:</td>
                                <td className="w-full">
                                    <div className="h-4 w-full  bg-slate-400/70 rounded-lg animate-pulse"></div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="my-3 animate-pulse w-full">
                <div className="h-48 w-full rounded-lg  bg-slate-100"></div>
            </div>
        </>
    );
};

export default SkeletonReceiptCheck;
