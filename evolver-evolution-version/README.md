# Become the Brain OS: Evolver

[![Run Evolver](https://img.shields.io/badge/%E2%96%B6%20Run-v12.1.0%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=12.1.0)
![version](https://img.shields.io/badge/version-v12.1.0--evolver-0a4a8f?style=flat-square)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural-data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)

**Become the Brain OS: Evolver v12.1.0** is the major-release public game surface for AxonOS.

It is a static, local-only educational browser game explaining the operating-system layer between neural hardware and AI.

## Live

<https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=12.1.0>

## Current build

```text
v12.1.0-evolver
```

## v12.1.0 release objective

This release is built for high-friction public traffic: one static HTML file, no backend dependency, no analytics dependency, no account creation, no cookie consent friction, and no neural-data processing.

## Non-claim boundary

This is not the AxonOS kernel, not a medical device, not a BCI, and does not read neural data.

## Local run

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/?v=12.1.0
```

## Release files

- `evolver-evolution-version/index.html` — canonical game build.
- `evolver-evolution-version/VERSION` — `v12.1.0-evolver`.
- `scripts/validate_v12_1_0.py` — release validator.
- `scripts/install_v12_1_0_from_download.sh` — Termux-safe installer.
- `scripts/release_tag_v12_1_0.sh` — annotated release tag script.

Licensed under Apache-2.0 OR MIT.
