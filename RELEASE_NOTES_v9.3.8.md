# AxonOS Evolver v9.3.8 Release Notes

## Status

Architecture stabilization release.

## Why this exists

The previous browser builds still behaved like a UI patch layer. v9.3.8 treats the game as a small runtime: every run has a single lifecycle, every timer has ownership, every result is persisted once, and every input path is guarded.

## Fixed

### Gameplay lifecycle

- Introduced explicit phases: `hold`, `choose`, `resolving`, `finished`.
- Added a real deadline for card selection.
- Added timeout resolution when no card is selected.
- Added transition scheduling with run-id ownership.

### Result correctness

- Result persistence is idempotent.
- XP, leaderboard, streaks, badges, and Daily Brain scores are written once.
- Copy/share/retry/challenge now read from `lastResult`, not from a mutable active run.

### Mobile/input

- Pointer ownership is tracked by `pointerId`.
- Lost capture and window blur cancel holds safely.
- Keyboard Space handling is guarded by phase.
- Hold pad disabled state is enforced both logically and visually.

### Determinism

- Daily Brain uses a deterministic hash seed.
- Mission/card shuffle uses seeded Fisher-Yates.

### Release surface

- Version: `v9.3.8-evolver`.
- Storage namespace: `axonos_v938_`.
- Challenge prefix: `v938-`.
- Share-card file: `axonos-v938-share-card.png`.

## Non-claim

This is a local-only educational simulation. It is not a medical device, not a BCI, not the AxonOS kernel, and reads no neural data.
