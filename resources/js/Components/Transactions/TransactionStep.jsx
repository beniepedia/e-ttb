import React from "react";
import Divider from "../Divider";

const TransactionStep = ({ instructions }) => {
    return (
        <>
            <Divider>CARA PEMBAYARAN</Divider>
            <div className="mt-3 space-y-2">
                {instructions.map((item, i) => {
                    return (
                        <div
                            tabIndex={0}
                            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg shadow text-sm"
                            key={i}
                        >
                            <div className="collapse-title font-medium">
                                {item.title}
                            </div>

                            <div className="collapse-content">
                                {item.steps.map((step, index) => (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: `<b>${
                                                index + 1
                                            } )</b>. ${step}`,
                                        }}
                                        key={index}
                                    ></p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default TransactionStep;
