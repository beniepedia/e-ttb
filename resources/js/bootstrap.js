import _ from 'lodash';

window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then((registration) => {
                console.log(
                    "Service Worker registered with scope:",
                    registration.scope
                );
            })
            .catch((error) => {
                console.log("Service Worker registration failed:", error);
            });
    });
}

// bootstrap.js

window.addEventListener('load', () => {
    if (!navigator.onLine) {
        const offlineMessage = document.createElement('div');
        offlineMessage.innerText = 'Tidak ada koneksi internet.';
        offlineMessage.style.backgroundColor = '#ff0000';
        offlineMessage.style.color = '#ffffff';
        offlineMessage.style.padding = '10px';
        offlineMessage.style.textAlign = 'center';
        document.body.appendChild(offlineMessage);
    }
});

window.addEventListener('online', () => {
    const offlineMessage = document.querySelector('.offline-message');
    if (offlineMessage) {
        offlineMessage.remove();
    }
});

window.addEventListener('offline', () => {
    const offlineMessage = document.createElement('div');
    offlineMessage.innerText = 'Tidak ada koneksi internet.';
    offlineMessage.style.backgroundColor = '#ff0000';
    offlineMessage.style.color = '#ffffff';
    offlineMessage.style.padding = '10px';
    offlineMessage.style.textAlign = 'center';
    offlineMessage.classList.add('offline-message');
    document.body.appendChild(offlineMessage);
});

// ... Kode lainnya dalam bootstrap.js



/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });
