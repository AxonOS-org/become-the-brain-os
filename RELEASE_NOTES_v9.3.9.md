# AxonOS Evolver v9.3.9 Release Notes

## Status

QA stabilization release after real play-testing of the previous v9.3.x line.

## Fixed

### Gameplay runtime

- Replaced implicit `div.disabled` checks with an explicit `holdEnabled` runtime flag.
- Added pointer ownership guard for cancel/release paths.
- Prevented `lostpointercapture` from cancelling a successful release.
- Hardened keyboard/touch/pointer hold lifecycle.
- Kept result persistence idempotent: XP, leaderboard, badges, Daily score write once.
- Repaired Vault Keeper / privacy-denial quest scoring for privacy, consent, agent, and vault missions.

### Release integrity

- `VERSION` is now `v9.3.9-evolver`.
- Runtime `VERSION` is `9.3.9`.
- LocalStorage namespace is `axonos_v939_`.
- Challenge prefix is `v939-`.
- Share-card filename is `axonos-v939-share-card.png`.
- Root README, Evolver README, CI, and scripts target v9.3.9.

### CI / deploy

- CI validates `evolver-evolution-version/index.html`, not root `index.html`.
- Validator checks public files and allows validator scripts to mention stale versions as forbidden markers.
- Temp folders are ignored and not committed.

## Non-claim

This remains an educational browser game. It is not a medical device, not a BCI, and reads no neural data.
