const CACHE_NAME = 'kundenservice-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.min.css',
    '/script.min.js',
    '/leistungen.html',
    '/faq.html',
    '/kontakt.html',
    '/impressum.html',
    '/datenschutz.html',
    '/webmanifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});