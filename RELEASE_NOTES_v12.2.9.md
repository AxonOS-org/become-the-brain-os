# Release Notes — v12.2.9-evolver

## Status

Playability-first major release.

## Why this release exists

The previous gameplay loop was too brittle and too punishing. v12.2.9 redesigns the player experience around clarity, stable input, and continuous forward progress.

## Gameplay contract

A player should understand the first run within 10 seconds:

1. Hold to stabilize signal.
2. Release in the gold band.
3. Read the request.
4. Choose the safest OS action.
5. Continue to the next node.

No single miss should make the game feel broken.

## Technical contract

- One active game object.
- Explicit phase transitions.
- Owned timers.
- Real disabled button state.
- No raw neural data.
- No backend.
- No analytics.
- Local-only persistence.
