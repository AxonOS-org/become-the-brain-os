# Operations: Static 10M-readiness

The build is a static artifact. It has no backend, no API, no database, no authentication, no analytics dependency, no cookies, and no server-side state.

For major traffic, front the GitHub Pages artifact with a CDN/mirror and cache-busted version URL.
