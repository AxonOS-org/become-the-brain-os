# AxonOS Evolver v9.3.10 Release Notes

## Type

Cleanup and release-integrity stabilization release.

## Fixed

### Game/runtime

- Added migration from older v9.3.x LocalStorage namespaces into the current namespace.
- Hardened pointer-capture cleanup during cancel, abort, finish, and navigation transitions.
- Challenge copy now requires an actual completed result.
- Shared result URL now includes `?v=9.3.10`.

### Release surface

- `VERSION` is `v9.3.10-evolver`.
- Runtime constant is `9.3.10`.
- Storage namespace is `axonos_v9310_`.
- Challenge prefix is `v9310-`.
- Share-card filename is `axonos-v9310-share-card.png`.

### CI/package hygiene

- Rebuilt `.github/workflows/ci.yml` as valid multi-line YAML.
- CI validates `evolver-evolution-version/index.html`, not a stale root file.
- Validation excludes self-matching script internals from stale public marker scans.
- Package excludes local temp and unpack folders.

## Non-claim

This is an educational browser simulation. It is not a medical device, not a BCI, not the AxonOS kernel, and reads no neural data.
