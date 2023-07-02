importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');


const { registerRoute } = workbox.routing;
const { NetworkFirst, CacheFirst } = workbox.strategies;

registerRoute(
    new RegExp('.*'),
    new NetworkFirst()
);

self.addEventListener('push', function (e) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    if (e.data) {
        var msg = e.data.json();
        e.waitUntil(self.registration.showNotification(msg.title, {
            body: msg.body,
            icon: msg.icon,
            actions: msg.actions
        }));
    }
});