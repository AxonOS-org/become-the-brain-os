# Become the Brain OS: Evolver

[![Play Evolver](https://img.shields.io/badge/%E2%96%B6%20Play-v9.3.9--evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.9)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)

Current build:

```text
v9.3.9-evolver
```

## Runtime contract

- Single-file browser game.
- No backend.
- No analytics.
- No trackers.
- No sensor access.
- No neural data.
- LocalStorage only for local progress.

## v9.3.9 fixes

- logical hold-enabled flag;
- pointer ownership guard;
- lost-pointer-capture false-cancel guard;
- result persistence remains idempotent;
- privacy-denial badge scoring repaired;
- share-card / challenge / storage namespaces moved to `v939`;
- CI validates `evolver-evolution-version/index.html`.

## Run locally

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/?v=9.3.9
```
