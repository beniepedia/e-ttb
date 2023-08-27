importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');


const { registerRoute } = workbox.routing;
const { NetworkFirst, CacheFirst } = workbox.strategies;

registerRoute(
    new RegExp('.*'),
    new NetworkFirst()
);

self.addEventListener("install", (event) => {
    self.skipWaiting();
})

self.addEventListener('push', function (e) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    if (e.data) {
        var msg = e.data.json();
        e.waitUntil(self.registration.showNotification(msg.title, {
            body: msg.body,
            icon: msg.icon,
            actions: msg.actions,
            vibrate: msg.vibrate,
            data: {
                url: msg.data.url
            }
        }));
    }
});

self.addEventListener("notificationclick", function (event) {
    event.notification.close();
    const action = event.action;
    const urlToOpen = event.notification.data.url;

    if (action != 'close') {
        event.waitUntil(
            clients.openWindow(urlToOpen)
        );
    }

    // console.log({ action });
});