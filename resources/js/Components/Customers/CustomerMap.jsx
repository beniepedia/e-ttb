import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const CustomerMap = () => {
    const { customer } = usePage().props;

    return (
        <div className="rounded-lg overflow-hidden my-4 shadow border-base-content border-2">
            <iframe
                // src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCt0AH-XJxxderpAyYPo3iyRplz8Kwm46M&q=${customer.location.display_name}&zoom=18`}
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCt0AH-XJxxderpAyYPo3iyRplz8Kwm46M&q=${customer.location.lat},${customer.location.lon}&zoom=15`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};
export default CustomerMap;
