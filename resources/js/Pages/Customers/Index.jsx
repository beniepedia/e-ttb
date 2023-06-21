import Layout from "@/Layouts/Main";
import React, { useState, useEffect } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import CustomerList from "@/Components/Customers/CustomerList";
import ButtonFly from "@/Components/ButtonFly";
import * as Icon from "react-bootstrap-icons";
import { usePrevious } from "react-use";
import { Inertia } from "@inertiajs/inertia";
import pickBy from "lodash/pickBy";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Input from "@/Components/Input";

const Index = () => {
    const { customers, filters } = usePage().props;

    const [query, setQuery] = useState({
        search: filters.search || "",
    });

    const prevValues = usePrevious(query);
    const [page, setPage] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(customers.data);
        setPage(customers.links.next);
    }, [customers]);

    useEffect(() => {
        if (prevValues) {
            const search = Object.keys(pickBy(query)).length
                ? pickBy(query)
                : "";

            Inertia.get(route(route().current()), search, {
                preserveState: true,
                replace: true,
            });
        }
    }, [query]);

    function handleChange(e) {
        setQuery({ [e.target.name]: e.target.value });
    }

    async function next() {
        if (page) {
            const { data } = await axios.get(page);

            setItems([...items, ...data.data]);
            setPage(data.links.next);
        }
    }

    return (
        <>
            <Head title="Customers" />
            <div className="px-4 py-4 mb-4 ">
                <Input
                    type="search"
                    name="search"
                    value={query.search}
                    handleChange={handleChange}
                    placeHolder="Cari...."
                    className=""
                ></Input>
            </div>

            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={next}
                hasMore={page ? true : false}
                loader={
                    <div className="flex justify-center">
                        <img src="/images/assets/loading.svg" width="80" />
                    </div>
                }
                // endMessage={
                //     <p style={{ textAlign: 'center' }}>
                //         <b>Yay! You have seen it all</b>
                //     </p>
                // }
                // below props only if you need pull down functionality
            >
                {/* {customers.data} */}
                <CustomerList customers={items} />
            </InfiniteScroll>

            <ButtonFly
                href={route("customers.create")}
                className="dark:bg-blue-800 border-none shadow-xl bg-blue-600 hover:bg-blue-800"
                icon={<Icon.PersonPlusFill className="text-xl" />}
            />
        </>
    );
};

Index.layout = (page) => (
    <Layout auth={page.props.auth} errors={page.props.errors} children={page} />
);

export default Index;
