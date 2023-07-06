import { usePage } from "@inertiajs/inertia-react";
import { capitalize } from "lodash";
import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Grafik = () => {
    const { data } = usePage().props;
    const chartData = data.chart_data.map((item) => ({
        name: capitalize(item.teknisi),
        total: item.total,
    }));

    console.log(data);
    return (
        <ResponsiveContainer aspect={2}>
            <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                    dataKey="total"
                    name="Jumlah Servis teknisi"
                    fill="#9333ea"
                    label={{ fill: "white" }}
                    barSize={50}
                    background={{ fill: "rgba(147,51,234,0.20)" }}
                />
                {/* <Bar dataKey="pv" fill="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Grafik;
