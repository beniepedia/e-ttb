import { usePage } from "@inertiajs/inertia-react";
import { capitalize } from "lodash";
import {
    Bar,
    BarChart,
    CartesianGrid,
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
        fail: item.total_fail,
        success: item.total_success,
    }));

    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <BarChart
                width={500}
                height={500}
                data={chartData}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <XAxis dataKey="name" />
                <Tooltip />
                {/* <Legend
                    verticalAlign="top"
                    label="tasdasdases"
                    name="asdsa"
                    height={36}
                /> */}
                <Bar
                    dataKey="success"
                    name="Jumlah Berhasil"
                    fill="#2AA124"
                    label={{ fill: "white" }}
                    maxBarSize={40}
                    background={{ fill: "rgba(147,51,234,0.20)" }}
                />
                <Bar
                    dataKey="fail"
                    name="Jumlah Gagal"
                    fill="tomato"
                    label={{ fill: "white" }}
                    maxBarSize={40}
                    background={{ fill: "rgba(147,51,234,0.20)" }}
                />

                <Bar
                    dataKey="total"
                    name="Jumlah Servis"
                    fill="#9333ea"
                    label={{ fill: "white" }}
                    maxBarSize={40}
                    background={{ fill: "rgba(147,51,234,0.20)" }}
                />

                {/* <Bar dataKey="pv" fill="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Grafik;
