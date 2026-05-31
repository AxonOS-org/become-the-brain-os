# Become the Brain OS

### Play the operating system layer between neural hardware and AI.

[![▶ Play Evolver](https://img.shields.io/badge/%E2%96%B6%20Play-Become%20the%20Brain%20OS%3A%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/)
![version](https://img.shields.io/badge/version-v9.3.5--evolver-0a4a8f?style=flat-square)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)
![static](https://img.shields.io/badge/deploy-GitHub%20Pages-475569?style=flat-square)

**Become the Brain OS** is a public educational browser game by the [AxonOS](https://github.com/AxonOS-org) project.

The canonical playable build in this package is:

```text
evolver-evolution-version/ · v9.3.5-evolver
```

> ⚠️ **This is a game.** It does not read your brain and uses no sensor of any kind. It is a simulation that teaches how a real brain-computer operating system should handle signal, intent, consent, hard timing, and neural permissions.

---

## ▶ Play in 10 seconds

- **Online:** open <https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/>.
- **Offline:** open `evolver-evolution-version/index.html` directly, or serve the repository with `python3 -m http.server 8080`.
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

Clean, correct, leak-free rounds build score, combo, XP, badges, and local leaderboard entries.

---

## Why it exists

AxonOS is the missing operating-system layer between neural hardware and AI.

This game is the public front door. It gives a non-specialist a fast, honest understanding of why AxonOS is not just an AI-agent OS, not just a demo UI, and not a generic app framework.

It is an **OS for the Brain** concept demonstration.

---

## What's new in v9.3.5

- Full `evolver-evolution-version/` package.
- Correct `v9.3.5-evolver` version surface.
- Single-file game build with no external runtime dependencies.
- Local-only XP, levels, badges, quests, streaks, and leaderboard.
- Daily Brain mode with deterministic challenge seed.
- Share-card PNG generation.
- Copy-result and copy-challenge flows.
- Mobile-safe layout.
- Validation script for stale markers and JavaScript parse errors.
- Release notes and deploy script.

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
python3 scripts/validate_v9_3_5.py
```

The validator checks:

- required files;
- `v9.3.5` version markers;
- stale older-version markers;
- stale storage namespaces;
- broken mobile selector patterns;
- share-card filename;
- inline JavaScript extraction;
- `node --check` when Node.js is available.

---

## Deploy to GitHub Pages

```bash
bash scripts/deploy_v9_3_5.sh
```

Manual path:

```text
Settings → Pages → Source: Deploy from a branch → main / root
```

Expected live path:

```text
https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/
```

---

## Repository layout

```text
.
├── README.md
├── index.html
├── LICENSE-APACHE
├── LICENSE-MIT
├── CHANGELOG.md
├── RELEASE_NOTES_v9.3.5.md
├── evolver-evolution-version/
│   ├── index.html
│   ├── README.md
│   └── VERSION
└── scripts/
    ├── validate_v9_3_5.py
    └── deploy_v9_3_5.sh
```

---

## Contributing

Issues and pull requests are welcome, especially around accessibility, language clarity, mobile UX, and educational precision.

One rule: keep it honest. Nothing in this repository should imply that the game reads real brain activity.

---

**The AxonOS Project**  
<https://axonos.org>  
<https://github.com/AxonOS-org>  
<https://medium.com/@AxonOS>

Licensed under Apache-2.0 OR MIT · a game built to explain real engineering.
