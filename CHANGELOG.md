# Changelog

## v9.3.6-evolver

Clean hotfix release.

### Fixed

- Prevented repeated result/XP/leaderboard writes after timeout by making `finish()` idempotent and stopping the RAF loop after completion.
- Made Daily Brain deterministic by routing gameplay randomness through the seeded RNG.
- Fixed Retry to restart the actual just-played mode.
- Fixed Copy challenge to use the actual run mode.
- Added clipboard fallback for mobile browsers and non-secure contexts.
- Added pointer/keyboard guards to avoid duplicate hold starts.
- Updated share-card filename and storage namespace to v9.3.6.
- Replaced broken CI with a clean workflow that validates `evolver-evolution-version/index.html`.
- Cleaned root README, Evolver README, VERSION, and root landing page.
