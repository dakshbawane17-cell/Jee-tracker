// Minimal service worker — required by Chrome to treat this as an installable PWA.
// It doesn't need to do real caching for our purposes; just being registered is enough.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through: just let the network handle every request normally.
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
