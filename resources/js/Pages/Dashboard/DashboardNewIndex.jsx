import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Page() {
    // Sample data - in a real app this would come from props or API
    const stats = [
        {
            title: "Total Customers",
            value: 8,
            icon: "bi-people",
            color: "bg-transparent",
            bg: "bg-purple-600 shadow-lg shadow-purple-300/80 text-neutral-50",
        },
        {
            title: "Total Receipts",
            value: 12,
            icon: "bi-file-text",
            color: "bg-transparent",
            bg: "bg-green-600 shadow-lg shadow-green-300/50 text-neutral-50",
        },
        {
            title: "Revenue",
            value: "Rp 20",
            icon: "bi-currency-dollar",
            color: "bg-transparent",
            bg: "bg-pink-500 shadow-lg shadow-pink-300 text-neutral-50",
        },
        {
            title: "Growth Rate",
            value: "12.5%",
            icon: "bi-graph-up",
            color: "bg-transparent",
            bg: "bg-orange-500 shadow-lg shadow-orange-300/70 text-neutral-50",
        },
    ];

    // Dummy data for the table
    const tableData = [
        {
            id: 1,
            customer: "John Doe",
            receipt: "RT-001",
            amount: "Rp 2.500.000",
            date: "2023-05-15",
        },
        {
            id: 2,
            customer: "Jane Smith",
            receipt: "RT-002",
            amount: "Rp 1.200.000",
            date: "2023-05-14",
        },
        {
            id: 3,
            customer: "Robert Johnson",
            receipt: "RT-003",
            amount: "Rp 3.100.000",
            date: "2023-05-14",
        },
        {
            id: 4,
            customer: "Emily Davis",
            receipt: "RT-004",
            amount: "Rp 950.000",
            date: "2023-05-13",
        },
        {
            id: 5,
            customer: "Michael Wilson",
            receipt: "RT-005",
            amount: "Rp 1.750.000",
            date: "2023-05-12",
        },
    ];

    // Dummy data for login history
    const loginHistory = [
        {
            id: 1,
            user: "Admin",
            ip: "192.168.1.100",
            time: "2023-05-15 08:30:22",
        },
        {
            id: 2,
            user: "Admin",
            ip: "192.168.1.100",
            time: "2023-05-14 14:15:45",
        },
        {
            id: 3,
            user: "Admin",
            ip: "192.168.1.105",
            time: "2023-05-14 09:20:10",
        },
        {
            id: 4,
            user: "Manager",
            ip: "192.168.1.110",
            time: "2023-05-13 16:45:33",
        },
        {
            id: 5,
            user: "Admin",
            ip: "192.168.1.100",
            time: "2023-05-13 08:15:17",
        },
    ];

    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`px-4 py-3 rounded  flex items-center ${stat.bg}`}
                    >
                        <div
                            className={`px-2 rounded-full text-neubg-neutral-50 mr-4 ${stat.color}`}
                        >
                            <i className={`bi ${stat.icon} text-3xl`}></i>
                        </div>
                        <div>
                            <h2 className="text-sm">{stat.title}</h2>
                            <h1 className="text-2xl font-bold">{stat.value}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Two Sections Below */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* First section - 8 columns */}
                <div className="lg:col-span-8">
                    {/* Table Section */}
                    <div className="bg-neutral-50 rounded shadow-lg  p-4">
                        <h2 className="text-xl font-bold mb-4">
                            Recent Receipts
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Receipt No.</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.customer}</td>
                                            <td>{row.receipt}</td>
                                            <td>{row.amount}</td>
                                            <td>{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Second section - 4 columns */}
                <div className="lg:col-span-4">
                    {/* Login History Section as List */}
                    <div className="bg-neutral-50 rounded shadow p-4">
                        <h2 className="text-xl font-bold mb-4">
                            Login History
                        </h2>
                        <ul className="menu bg-base-100 rounded-box">
                            {loginHistory.map((row) => (
                                <li key={row.id}>
                                    <a>
                                        <div>
                                            <div className="font-bold">
                                                {row.user}
                                            </div>
                                            <div className="text-sm">
                                                {row.ip}
                                            </div>
                                            <div className="text-sm opacity-70">
                                                {row.time}
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
