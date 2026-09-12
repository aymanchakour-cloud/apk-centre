const CACHE_NAME = "apk-centre-v11";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js?v=11",
  "./manifest.webmanifest",
  "./assets/apk-centre-icon-192.png",
  "./assets/apk-centre-icon-512.png",
  "./assets/logo-apk-group.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
