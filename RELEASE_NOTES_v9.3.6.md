# AxonOS Evolver v9.3.6 Release Notes

## Status

Clean hotfix release for **Become the Brain OS: Evolver**.

## Why this release exists

The previous browser build was playable, but several bugs and release-surface inconsistencies remained:

- result completion could execute repeatedly after timeout;
- Daily Brain was not fully deterministic;
- Retry and challenge-copy could use stale UI mode instead of the actual run mode;
- clipboard copy failed on some mobile/browser contexts;
- duplicate pointer/keyboard hold events could reset the hold timer;
- root README, CI, and public metadata were not fully aligned.

## Fixed

### Runtime/gameplay

- Made `finish()` idempotent.
- Stopped the animation loop after the result screen.
- Guarded timeout callbacks after finish.
- Guarded pause/resume/hold input after finish.
- Added pointer capture/release guards.
- Added clipboard fallback using a temporary textarea when `navigator.clipboard` is unavailable.

### Daily Brain determinism

The seeded RNG now drives:

- mission order;
- initial needle position;
- card shuffle;
- latency simulation;
- artifact pulses.

### UX

- Retry now restarts the actual just-played mode.
- Copy challenge now uses the actual run mode.
- Share-card filename is now `axonos-v936-share-card.png`.

### Release surface

- Version normalized to `v9.3.6-evolver`.
- Storage namespace normalized to `axonos_v936_`.
- Challenge prefix normalized to `v936-`.
- Root README rewritten for v9.3.6.
- Evolver README rewritten for v9.3.6.
- `VERSION` updated to `v9.3.6-evolver`.
- CI rewritten to validate `evolver-evolution-version/index.html`.

## Non-claim

This is an educational browser game. It is not a medical device, not a BCI, not the AxonOS kernel, and it reads no neural data.
