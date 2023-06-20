import React from "react";

const SkeletonReceiptCheck = ({ length = 1 }) => {
    const count = Array.from({ length: length }, (_, index) => index + 1);

    return (
        <>
            <table className="table table-compact w-full">
                <tbody>
                    {count.map((iteration) => {
                        return (
                            <tr
                                key={iteration}
                                className="flex flex-row justify-center"
                            >
                                <td>
                                    <div className="h-4 w-28 md:w-40 bg-slate-400/70 rounded-lg animate-pulse"></div>
                                </td>
                                <td>:</td>
                                <td>
                                    <div className="h-4 w-28 md:w-40 bg-slate-400/70 rounded-lg animate-pulse"></div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className=" my-3 p-2 animate-pulse">
                <div className="h-48 w-full rounded-lg  bg-slate-300"></div>
            </div>
        </>
    );
};

export default SkeletonReceiptCheck;
