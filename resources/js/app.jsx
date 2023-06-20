import "../css/app.css";

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { stringify } from "postcss";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const resolveShared = (key) => {
            const sharedData = JSON.parse(el.dataset.shared);
            return sharedData[key];
        };

        return render(<App {...props} resolveShared={resolveShared} />, el);
    },
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
            window.localStorage.setItem(
                "location",
                JSON.stringify({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                })
            );
        },
        (error) => {
            window.localStorage.removeItem("location");
        },
        {
            enableHighAccuracy: true,
        }
    );
}

InertiaProgress.init({ color: "#ff004c" });
