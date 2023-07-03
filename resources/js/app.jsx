import "react-toastify/dist/ReactToastify.css";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import { render } from "react-dom";
import { Alert } from "@/Components/Alert";
import { initSw } from "./Libs/enable-webpush";

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

        initSw();

        return render(
            <React.Fragment>
                <App {...props} resolveShared={resolveShared} />
                <Alert />
            </React.Fragment>,
            el
        );
    },
});

InertiaProgress.init({ color: "#ff004c" });
