# Changelog

## v12.2.9-evolver

### Changed

- Rebuilt gameplay around a readable two-step node loop: signal lock, then intent routing.
- Replaced punitive game-over logic with continuous learning feedback.
- Added Guided, Run, Sprint, and Zen modes.
- Reworked mobile layout to avoid cramped card / hold interactions.
- Rebuilt runtime state around explicit phases.

### Fixed

- Unclear difficulty curve.
- Ambiguous card choice pressure.
- Disabled state represented only visually.
- Timeout dead-end risk.
- Result-writing duplication risk.
- Touch/pointer state fragility.
- CI validation path drift.

### Release

- Runtime version: `12.2.9`.
- VERSION file: `v12.2.9-evolver`.
- Storage namespace: `axonos_v1229_`.
- Challenge prefix: `v1229-`.
