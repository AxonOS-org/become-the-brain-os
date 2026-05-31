# AxonOS Evolver v9.3.5 Release Notes

## Status

Full public browser-game package.

## Scope

This release packages the `evolver-evolution-version` build of **Become the Brain OS: Evolver** as a self-contained GitHub Pages-ready archive.

## Included

- `evolver-evolution-version/index.html` — complete single-file game build.
- `evolver-evolution-version/README.md` — build-specific public README.
- `evolver-evolution-version/VERSION` — canonical version marker.
- Root `README.md` — repository-facing public README.
- Root `index.html` — clean landing page that links to Evolver.
- `scripts/validate_v9_3_5.py` — deterministic validation script.
- `scripts/deploy_v9_3_5.sh` — deployment helper.
- `CHANGELOG.md`.
- Apache-2.0 and MIT license files.

## Fixed and hardened

### Runtime

- Normalized public build version to `v9.3.5-evolver`.
- Updated localStorage namespace to `axonos_v935_`.
- Updated challenge seed prefix to `v935-`.
- Updated generated share-card filename to `axonos-v935-share-card.png`.
- Added local-only XP, levels, badges, quests, streaks, and leaderboard.
- Added Daily Brain deterministic seed mode.

### UX

- Added mobile-safe layout.
- Added synthetic signal canvas.
- Added hold-and-release gold-zone mechanic.
- Added privacy, consent, artifact, deadline, mesh, vault, and agent mission cards.
- Added share-card PNG generation.
- Added copy-result and copy-challenge flows.

### Public posture

- Preserves the non-claim boundary: not a medical device, not a BCI, not the AxonOS kernel.
- States clearly that no neural data is read.
- States clearly that no backend, analytics, trackers, or remote storage are used.

## Validation

Run:

```bash
python3 scripts/validate_v9_3_5.py
```

Expected result:

```text
PASS: AxonOS Evolver v9.3.5 archive validation complete
```
