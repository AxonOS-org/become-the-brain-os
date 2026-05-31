# Operations Readiness — v12.5.1-evolver

This release is a static GitHub Pages artifact.

## Load profile

The game has:

- no backend;
- no API;
- no database;
- no login;
- no analytics dependency;
- no cookies;
- no server-side state.

The limiting factor is static hosting/CDN delivery, not application server capacity.

## Launch checklist

1. Push `main`.
2. Push annotated tag `v12.5.1`.
3. Create GitHub Release marked latest.
4. Open the game with `?v=12.5.1`.
5. Test mobile and desktop.
