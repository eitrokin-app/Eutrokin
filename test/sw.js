/* EUTROKIN TEST only. No caches, no offline claims, no production worker changes. */
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
// No fetch interception: the browser handles network requests normally.
