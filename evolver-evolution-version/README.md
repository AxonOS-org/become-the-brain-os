# Become the Brain OS: Evolver

[![Play Evolver](https://img.shields.io/badge/%E2%96%B6%20Play-Become%20the%20Brain%20OS%3A%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/)
![version](https://img.shields.io/badge/version-v9.3.6--evolver-0a4a8f?style=flat-square)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)
![single file](https://img.shields.io/badge/build-single%20index.html-475569?style=flat-square)

**Become the Brain OS: Evolver** is a one-thumb educational browser game about the operating-system layer between neural hardware and AI.

You are the OS.

You stabilize the signal, release inside the gold timing band, capture intent before the deadline collapses, enforce neural permissions, respect consent revocation, reject artifacts, and bring AxonOS online.

---

## Play

Live:

<https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/>

No install. No backend. No account. No analytics.

---

## Version

```text
v9.3.6-evolver
```

---

## Fixed in v9.3.6

- Repeated finish/result execution after timeout.
- Daily Brain non-determinism caused by unseeded `Math.random()` calls.
- Retry mode mismatch after Daily/Sprint/Focus runs.
- Challenge seed mode mismatch.
- Clipboard failure on some mobile browsers.
- Duplicate hold start events from repeated pointer/keyboard input.
- Broken/stale CI path that checked root `index.html` instead of this build.

---

## Game loop

```text
Hold signal
  -> release in gold
  -> capture intent
  -> enforce privacy vault
  -> respect consent
  -> reject artifacts
  -> bring AxonOS online
  -> share result
```

---

## Privacy posture

This game:

- reads no neural data;
- uses no sensor;
- has no backend;
- has no analytics;
- has no trackers;
- sends no gameplay data anywhere;
- stores scores, badges, XP, streaks, and settings locally on the device only.

`localStorage` is used only for local progress.

---

## Non-claim

This is an educational simulation.

It is **not** the AxonOS kernel.

It is **not** medical software.

It is **not** a clinical BCI system.

It does not read a brain, process EEG, infer real intent, or prove kernel timing guarantees.

AxonOS itself is the real open-source operating-system project. This game is the public front door for explaining the concept.

---

## Local run

From repository root:

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/
```
