# Changelog

## v17.1.0

- **Luxury UX pass:** refined type scale and spacing, gradient wordmark, glass chrome, eased micro-interactions (button press, packet pop-in / fly-off, combo pulse, heart-loss, low-life vignette), focus-visible rings, `prefers-reduced-motion` support, and safe-area insets — a premium, jank-free feel built mobile-first.
- **Virality — Challenge a friend:** runs are now seeded; the end screen copies a `?s=<seed>` link that replays your *exact* packet sequence, so two players can compare scores fairly. Seeded determinism is verified by test.
- **Smoother escalation:** load (deadline) now ramps continuously with packets handled, so difficulty always climbs and the opening is learnable.
- **Polish:** new-best indicator, "LOAD n" announcements, tasteful particles/flash/shake, combo-scaled sound.
- Pure gameplay logic **unit-tested by execution in Node** (RNG, seeded-challenge determinism, packet generation, the allow/block/leak truth table, scoring, grading, full simulated runs); all DOM ids verified; fail-open boot guard.
- Funnel intact: footers and the challenge link drive back to the live game and to axonos.org.
- Release hygiene: a `release.sh` that sets the repository **About** (description + topics) and publishes the release, plus a **green, dynamic release badge** that always shows the current version (no more stale badge); version-agnostic CI that checks the build against `VERSION`.

## v16.3.0

- New gameplay: **Neural Triage** — a fast, escalating arcade firewall. Allow derived intent, block raw neural data / artifacts / revoked consent; combo, waves, 3 lives, and "thoughts leaked" as the headline metric.
- Replaced the slow tap-the-label quiz with a juicy arcade loop (particles, screen flash, shake, combo sound, wave escalation) designed to be replayable and shareable.
- Privacy framing front and centre — the leak you avoid is a raw thought escaping, which is exactly AxonOS's reason to exist.
- Gameplay logic is pure and **unit-tested by execution in Node** (RNG, packet generation, the allow/block/leak truth table, scoring, grading, full simulated runs).
- Fail-open boot guard (readable error panel, never a black screen); all DOM ids verified present.
- Funnel baked into shared artifacts: the copied result and every footer point to axonos.org and the repository.
- **Repository cleaned to a single canonical organism**: real Apache-2.0 and MIT license texts (replacing placeholders), one `index.html`, coherent README / ABOUT / VERSION / CHANGELOG, version-agnostic CI; removed the experimental `evolver-evolution-version/`, the `deploy.sh` workaround, and version-pinned validation scripts.

## v14.2.0

- Clean, robust rewrite as a single, self-contained `index.html`.
- New core loop: decode intent before the deadline, deny raw neural data, respect consent, reject artifacts.
- Removed the fragile canvas timing mechanic that caused glitches; the gameplay logic is now pure and **unit-tested by execution in Node** (RNG, prompt generation, scoring, leak rules, grading, full simulated runs).
- Fail-open boot guard: a readable error panel instead of a black screen if anything fails to load.
- Funnel baked into shared artifacts: the copied result and all footers link to axonos.org and the repository.
- Honest framing throughout: no sensor, no neural data, no backend; a game about the real AxonOS OS layer.
- Repository consolidated into one canonical build: removed the experimental `evolver-evolution-version/`, the `deploy.sh` workaround, and version-pinned validation scripts.
- Version-agnostic CI: extracts the inline script, runs `node --check`, and asserts core invariants.

## v12.7.4-evolver

- Emergency black-screen prevention release.
- Rebuilt runtime with fail-open visible UI.
- Added boot error panel instead of blank screen on JS failure.
- Rebuilt gameplay as guided, forgiving loop.
- Repaired pointer, keyboard, timeout, abort, result, copy and persistence paths.
- Rebuilt CI as multiline YAML.
