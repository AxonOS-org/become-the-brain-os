# Become the Brain OS

### Play the operating-system layer between neural hardware and AI.

[![▶ Play Evolver](https://img.shields.io/badge/%E2%96%B6%20Play-Become%20the%20Brain%20OS%3A%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/)
![version](https://img.shields.io/badge/version-v9.3.8--evolver-0a4a8f?style=flat-square)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)
![static](https://img.shields.io/badge/deploy-GitHub%20Pages-475569?style=flat-square)

**Become the Brain OS** is a public educational browser game by the [AxonOS](https://github.com/AxonOS-org) project.

Canonical playable build:

```text
evolver-evolution-version/ · v9.3.8-evolver
```

This is a game. It does not read your brain and uses no sensor of any kind. It is a simulation that teaches how a real brain-computer operating system should handle signal, intent, consent, hard timing, and neural permissions.

## Play

- Online: https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/
- Offline: open `evolver-evolution-version/index.html`, or run `python3 -m http.server 8080`.
- Controls: hold signal, release in the gold band, then select the safe intent/privacy card before the card deadline.

## What's new in v9.3.8

This is an architecture-stabilization release, not a cosmetic version bump.

- Rebuilt the runtime as an explicit finite-state machine: `hold → choose → resolving → result`.
- Added a real card-selection deadline instead of allowing stale/unfinished choose states.
- Added idempotent result persistence, so XP, leaderboard, badges, and streaks are written once.
- Added pause/resume timer accounting for choice timers and transition timers.
- Hardened pointer/touch/keyboard input with pointer-id ownership and lost-capture handling.
- Separated `lastResult` from the active `game` object, so copy/share/retry remain stable after finish.
- Replaced the random generator with deterministic Mulberry32-style seeded randomness.
- Updated storage namespace to `axonos_v938_`.
- Updated challenge prefix to `v938-`.
- Updated share-card filename to `axonos-v938-share-card.png`.
- Rebuilt CI around `scripts/validate_v9_3_8.py`.

## Honesty boundary

The game teaches real AxonOS principles: derived intent over raw data, capability boundaries, consent revocation, privacy-vault discipline, artifact rejection, and deterministic OS control.

The input is simulated. There is no brain, no EEG, no sensor, no medical inference, and no clinical claim.

## Validate

```bash
python3 scripts/validate_v9_3_8.py
```

## Deploy

```bash
bash scripts/deploy_v9_3_8.sh
```

Expected live path:

```text
https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/
```

---

**The AxonOS Project**  
Licensed under Apache-2.0 OR MIT · a game built to explain real engineering.
