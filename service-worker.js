const CACHE_NAME = 'Worker-Tab-Auto-Reloader';
const urlsToCache = [
    '.',
    './popup.html',
];

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.error('Error fetching:', error);
      })
  );
});