# Changelog

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.3.3] — 2026-05-31

### Added
- Live **3-channel scrolling oscilloscope** (Fz / Cz / Pz) with crisp glowing traces.
- **ZeroCalib** calibration step that primes decode clarity.
- **Muscle-artifact events** (>±120 µV) that must be rejected rather than decoded.
- Live **`kernel.log`** panel tracing filters, locks, denials, and deadline misses.
- **Streak multiplier**, end-screen **grade (D–S)**, and **copy-result** sharing.
- Optional **Web Audio** feedback (toggle) and **particle** effects.

### Changed
- Sharper hairline grid, refined typography, motion, and depth throughout.
- Confidence now blends signal quality with calibration quality.
- Deadline budget spans CLEAN→CLASSIFY only; the consent gate is deliberate and untimed.

### Removed
- Actions-based Pages workflow (replaced by a branch build enabled via `deploy.sh`/`gh`),
  which avoids organisations that restrict the Actions token from creating a Pages site.

### Honesty
- Reaffirmed throughout: no brain and no sensor are ever read. It is a simulation
  of how the real AxonOS works.
