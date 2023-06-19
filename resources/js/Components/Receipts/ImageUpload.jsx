import React from "react";

export default function ImageUpload({ handleChange, src, onclick }) {
    return (
        <div>
            <div className="flex w-full items-center justify-center bg-grey-lighter mt-3">
                <label className="w-full flex items-center p-5 gap-3 bg-white text-blue rounded shadow tracking-wide uppercase border border-slate-400 cursor-pointer hover:bg-slate-200">
                    <svg
                        className="w-10 h-10 animate-bounce"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="text-base leading-normal">
                        Upload photo
                    </span>
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </label>
            </div>

            {src && (
                <div className="flex items-center flex-col p-4 bg-gray-400 rounded-xl shadow-md mt-4">
                    <img
                        src={src}
                        alt=""
                        className="drop-shadow-xl w-full md:w-1/3 rounded-xl"
                    />

                    <button
                        type="button"
                        className="btn btn-error mt-3"
                        onClick={onclick}
                    >
                        hapus gambar
                    </button>
                    {/* <h3 className='bg-white rounded-md italic px-3 shadow-sm'>{name}</h3> */}
                </div>
            )}
        </div>
    );
}
