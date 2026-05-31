# PWA Setup

The frontend includes:

- `public/manifest.json`
- `public/service-worker.js`
- theme color and install metadata

The service worker caches the app shell and successful GET requests. Form submissions still require network access, which is safer for diagnosis uploads and marketplace changes.
