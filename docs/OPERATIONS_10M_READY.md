# 10M-in-24h Readiness Note

This document does not promise 10,000,000 users. It defines the static-delivery posture needed if a public release receives viral traffic.

## Static architecture

The game is a single HTML file under GitHub Pages. It requires no server session, no login, no database, no API, and no write path.

## Recommended launch posture

1. Keep GitHub Pages as canonical public mirror.
2. Add a CDN mirror at `play.axonos.org` before a major public launch.
3. Keep the build immutable under a versioned URL: `?v=12.1.0`.
4. Avoid analytics scripts in the game file.
5. Put press/social copy outside the runtime file.
6. Use a release tag: `v12.1.0`.
7. Keep README claims conservative: educational, local-only, no neural data.

## Failure containment

Because no server-side state is required, traffic spikes primarily stress static asset delivery. The browser stores gameplay state locally.
