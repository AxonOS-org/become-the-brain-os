# Become the Brain OS

### Play the operating-system layer between neural hardware and AI.

[![▶ Play Evolver](https://img.shields.io/badge/%E2%96%B6%20Play-Become%20the%20Brain%20OS%3A%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/)
![version](https://img.shields.io/badge/version-v9.3.7--evolver-0a4a8f?style=flat-square)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)
![static](https://img.shields.io/badge/deploy-GitHub%20Pages-475569?style=flat-square)

**Become the Brain OS** is a public educational browser game by the [AxonOS](https://github.com/AxonOS-org) project.

Canonical playable build:

```text
evolver-evolution-version/ · v9.3.7-evolver
```

> This is a game. It does not read your brain and uses no sensor of any kind. It is a simulation that teaches how a real brain-computer operating system should handle signal, intent, consent, hard timing, and neural permissions.

---

## ▶ Play

- **Online:** <https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/>
- **Offline:** open `evolver-evolution-version/index.html`, or serve the repository with `python3 -m http.server 8080`.
- **Controls:** hold signal, release in the gold band, then select the safe intent/privacy card.

---

## What is this?

A brain-computer interface needs an operating-system layer between electrodes, decoders, applications, and AI agents.

For a short run, **you are that OS**.

Each round compresses one AxonOS idea into a playable decision:

1. **Stabilize signal** — lock onto a synthetic signal without pretending to read real neural data.
2. **Capture intent** — work with derived intent classes, not raw brain streams.
3. **Enforce neural permissions** — deny unsafe raw access requests.
4. **Respect consent** — revocation stops the flow immediately.
5. **Reject artifacts** — noise, drift, spikes, and phantom nodes must not become intent.
6. **Stay inside timing pressure** — the game dramatizes hard real-time constraints without claiming clinical timing proof.

---

## What's new in v9.3.7

This is a stabilization release after hands-on gameplay testing.

- Reworked input handling for touch, pointer, keyboard, blur, and lost pointer capture.
- Prevented duplicate hold/release paths and stale scheduled round transitions.
- Replaced random `Array.sort()` shuffles with deterministic Fisher-Yates shuffles.
- Fixed XP progress overflow on the home screen.
- Locked and marked cards after a decision so the player sees the correct gate.
- Cleaned result finalization so score, XP, badges, leaderboard, and Daily are written once.
- Hardened retry, challenge copy, share-card download, and clipboard fallback.
- Updated storage namespace to `axonos_v937_`, challenge prefix to `v937-`, and share-card filename to `axonos-v937-share-card.png`.
- Rebuilt CI and validation for the canonical `evolver-evolution-version/index.html` file.

---

## What's real vs simulated

The game teaches real AxonOS principles:

- signal path separation;
- derived intent over raw data;
- capability-based permissioning;
- consent revocation;
- privacy-vault boundaries;
- artifact rejection;
- deterministic operating-system discipline.

The input is simulated. There is no brain, no EEG, no sensor, no medical inference, and no clinical claim.

---

## Tech

- Single self-contained `evolver-evolution-version/index.html`.
- Vanilla JavaScript.
- Canvas for synthetic signal rendering and share-card generation.
- LocalStorage for local game progress only.
- No backend.
- No analytics.
- No trackers.
- No build step.

---

## Validate

```bash
python3 scripts/validate_v9_3_7.py
```

---

## Deploy

```bash
bash scripts/deploy_v9_3_7.sh
```

The deploy script is Termux-safe: it uses a writable temp directory inside the repository and does not use `/tmp`.

---

**The AxonOS Project**  
<https://axonos.org>  
<https://github.com/AxonOS-org>  
connect@axonos.org
