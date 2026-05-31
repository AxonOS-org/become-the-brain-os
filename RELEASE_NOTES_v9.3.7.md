# AxonOS Evolver v9.3.7 Release Notes

## Status

Gameplay stabilization release.

## Why this release exists

v9.3.6 was playable but still felt rough during real mobile gameplay. v9.3.7 focuses on the actual feel of the run: input reliability, one-shot state transitions, deterministic seeded behavior, correct result handling, and clean CI.

## Fixed

### Input and controls

- Hardened touch, pointer, keyboard, browser blur, and lost pointer capture handling.
- Prevented duplicate hold-start and release paths.
- Lowered valid hold threshold from 260 ms to 220 ms to make mobile play less sticky without making it trivial.
- Disabled hold input after the card gate opens.

### Round state

- Added round transition timer cleanup.
- Prevented stale scheduled transitions from older runs.
- Added run IDs to guard against delayed callbacks writing into a new run.
- Locked cards after one answer.
- Revealed the correct card after a wrong answer.

### Determinism and scoring

- Replaced `Array.sort(() => rnd() - .5)` with Fisher-Yates shuffle.
- Fixed final score expression to use explicit clean bonus.
- Ensured score, XP, badges, Daily score, and leaderboard are persisted once per result.
- Fixed XP progress overflow.

### Share/copy

- Clipboard fallback now works better on mobile browsers.
- Share-card download appends/removes a temporary anchor for broader browser support.
- Challenge prefix updated to `v937-`.
- Share-card filename updated to `axonos-v937-share-card.png`.

### Release hygiene

- Updated version to `v9.3.7-evolver`.
- Updated storage namespace to `axonos_v937_`.
- Updated validator and CI.
- Removed stale v9.3.6/v9.3.5/v9.3.2/v7.1.5 public markers.

## Non-claim

This remains an educational browser game. It is not a medical device, not a BCI, not the AxonOS kernel, and reads no neural data.
