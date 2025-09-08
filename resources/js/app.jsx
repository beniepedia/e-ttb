import "react-toastify/dist/ReactToastify.css";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";
import { createRoot } from "react-dom/client";
// import { render } from "react-dom";
import { Alert } from "@/Components/Alert";
import { initSw } from "./Libs/enable-webpush";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    // resolvePageComponent(
    //     `./Pages/${name}.jsx`,
    //     import.meta.glob("./Pages/**/*.jsx")
    // ),
    setup({ el, App, props }) {
        // const resolveShared = (key) => {
        //     const sharedData = JSON.parse(el.dataset.shared);
        //     return sharedData[key];
        // };

        createRoot(el).render(<App {...props} />);

        initSw();

        // return render(
        //     <React.Fragment>
        //         <App {...props} resolveShared={resolveShared} />
        //         <Alert />
        //     </React.Fragment>,
        //     el
        // );
    },
});

InertiaProgress.init({ color: "#ff004c" });
