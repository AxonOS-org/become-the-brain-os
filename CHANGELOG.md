# Changelog

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
