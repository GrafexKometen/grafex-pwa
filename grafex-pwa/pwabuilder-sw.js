const CACHE_NAME = "grafex-cache-v1";
const urlsToCache = [
 "/",
 "https://static.wixstatic.com/media/cba45a_1740682af0df45ce9edabdeff156310a~mv2.png",
 "https://static.wixstatic.com/media/cba45a_eaea083764fd4de095809f4c5d0065b1~mv2.png"
];

// Install
self.addEventListener("install", event => {
 event.waitUntil(
   caches.open(CACHE_NAME)
     .then(cache => cache.addAll(urlsToCache))
 );
});

// Fetch
self.addEventListener("fetch", event => {
 event.respondWith(
   caches.match(event.request)
     .then(response => response || fetch(event.request))
 );
});