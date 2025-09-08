import React from "react";
import { usePrevious } from "react-use";
import * as _ from "lodash";
import { router, usePage } from "@inertiajs/react";

export default function Filters({ className = null, placeHolder = "Cari..." }) {
    const { filters } = usePage().props;
    const [query, setQuery] = React.useState({
        search: filters.search || "",
    });
    const [loading, setLoading] = React.useState(false);
    const prevValues = usePrevious(query);
    const handleSearchChange = (e) => {
        setQuery({ [e.target.name]: e.target.value });
    };
    React.useEffect(() => {
        if (prevValues) {
            const keyword = Object.keys(_.pickBy(query)).length
                ? _.pickBy(query)
                : {};
            setLoading(true);
            const timeout = setTimeout(() => {
                router.get(route(route().current()), keyword, {
                    replace: true,
                    preserveState: true,
                });
                setLoading(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [query]);

    return (
        <label className={`input ${className} `}>
            <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input
                type="search"
                className={`grow `}
                name="search"
                value={query.search}
                onChange={handleSearchChange}
                placeholder={placeHolder}
            />
            {loading && (
                <span className="loading loading-spinner loading-md"></span>
            )}
        </label>
    );
}
