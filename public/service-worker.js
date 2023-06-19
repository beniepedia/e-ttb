importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');


const { registerRoute } = workbox.routing;
const { NetworkFirst, CacheFirst } = workbox.strategies;

registerRoute(
    new RegExp('.*'),
    new CacheFirst()
);