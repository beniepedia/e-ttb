import React from "react";

const ListOptions = ({ title, children }) => {
    return (
        <div>
            {title}
            <span className="text-[0.80rem] block text-slate-500">
                {children}
            </span>
        </div>
    );
};

export default ListOptions;
