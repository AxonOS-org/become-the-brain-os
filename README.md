<div align="center">

# 🧠 Become the OS

### Play the operating system of a brain–computer interface.

**[▶ Play it live](https://axonos-org.github.io/become-the-brain-os/)** &nbsp;·&nbsp; a free browser game by the [AxonOS](https://github.com/AxonOS-org) project &nbsp;·&nbsp; `v0.3.3`

</div>

> ⚠️ **This is a game.** It does not read your brain and uses no sensor of any kind. It is a *simulation* that teaches how a real brain–computer operating system works.

---

## ▶ New — Become the Brain OS: Evolver (experimental)

<div align="center">

[![Run the Evolver build](https://img.shields.io/badge/%E2%96%B6%20Run-Become%20the%20Brain%20OS%3A%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/)

**`v9.3.2-evolver`** — a deeper, one-thumb run: signal stability, intent capture, privacy vaults, consent gates, and real-time neural-OS deadlines. Still being refined.

</div>

---

## ▶ Play in 10 seconds

- **Online:** open **[axonos-org.github.io/become-the-brain-os](https://axonos-org.github.io/become-the-brain-os/)** — nothing to install.
- **Offline:** download `index.html` and double-click it. That is the entire game — one file.
- **Controls:** one slider, mouse/tap, and arrow keys. ~90 seconds, 6 rounds.

## What is this?

A real brain–computer interface runs an operating system between the electrodes and the app you control. For ninety seconds, **you are that OS**, across four stages that repeat each round:

1. **Calibrate** — a quick ZeroCalib locks onto your "patterns" (instant here; ~70 s in the real system).
2. **Clean the signal** — filter power-line hum and muscle noise out of a live **3-channel** feed; reject sudden artifacts. The clearer the signal, the more confident the decode.
3. **Read the intent** — turn the cleaned waveform into one of four intents, each with a confidence score — **before a 4 ms real-time deadline closes.**
4. **Pass the consent gate** — grant an app only what it needs. Deny raw brain data. Your thoughts never leave the kernel.

Clean + correct + leak-free rounds build a **streak multiplier**; the run ends with a grade from **D to S** and a shareable result.

## Why it exists

AxonOS is an open-source, formally-verified real-time operating system for brain–computer interfaces, written in Rust. This game is the friendly front door: it makes the four core ideas — **acquisition, classification, hard real-time, and neurorights** — playable in a couple of minutes, then points to the real engineering for anyone who wants to go deeper. We're one engineer building it in the open, so curiosity and ⭐ genuinely help.

## What's new in v0.3.3

- **Live 3-channel oscilloscope** (Fz / Cz / Pz) with crisp, glowing scrolling traces.
- **ZeroCalib step** — an interactive calibration that primes decode accuracy.
- **Muscle-artifact events** — a >±120 µV spike you must *reject*, not decode (just like the real artifact guard).
- **Live `kernel.log`** — a running trace of what the OS is doing (filters, locks, denials, deadline misses).
- **Streak multiplier**, **end-screen grade**, and **one-tap "copy my result"** for sharing.
- **Subtle sound** (toggleable) and **particle feedback**. Sharper grid, type, and motion throughout.

## What's real vs simulated

Everything the game dramatises is real in AxonOS: the filter → classify pipeline, the bounded 4 ms deadline, the fixed-point confidence score, the ±120 µV artifact rejection, and the capability-based consent gate. The **only** fiction is the input: there is no brain and no sensor. The waveforms are generated math, and the game says so plainly.

## Tech

- A single self-contained `index.html`. No build step, no dependencies, no tracking, no analytics, no storage.
- Vanilla JavaScript + `<canvas>` for the live waveforms and effects; Web Audio for optional sound.
- Runs offline once loaded (web fonts aside). Deploys to any static host.

## Deploy

The repository ships an idempotent **`deploy.sh`** that pushes the game and enables GitHub Pages in one go (branch build, via your `gh` token — which works even when an org blocks the Actions token):

```bash
bash deploy.sh
```

Prefer to do it by hand? Push the repo, then **Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)`**. The site appears at `https://axonos-org.github.io/become-the-brain-os/`.

## Contributing

Issues and pull requests welcome — especially clearer explanations, accessibility, and translations. One rule: keep it **honest**. Nothing in here should suggest the game reads real brain activity.

---

<div align="center">

**The AxonOS Project** · [axonos.org](https://axonos.org) · [github.com/AxonOS-org](https://github.com/AxonOS-org) · [medium.com/@AxonOS](https://medium.com/@AxonOS)

Licensed under Apache-2.0 OR MIT · a game, built to explain real engineering

</div>
