import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Test() {
    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* <div className="p-6 bg-white rounded shadow">Statistik 1</div>
                <div className="p-6 bg-white rounded shadow">Statistik 2</div>
                <div className="p-6 bg-white rounded shadow">Statistik 3</div> */}
            </div>
        </AdminLayout>
    );
}
