# QA Manifest — v12.5.1-evolver

## Required public version surfaces

- `README.md` contains `v12.5.1-evolver`.
- `evolver-evolution-version/VERSION` equals `v12.5.1-evolver`.
- `evolver-evolution-version/index.html` contains `VERSION='12.5.1'`.
- Storage namespace is `axonos_v1251_`.
- Challenge URL uses `?v=12.5.1`.

## Runtime checks

- JS syntax passes `node --check`.
- Inline script exists in `evolver-evolution-version/index.html`.
- Game has no hard dead-end state.
- Cards lock after choice.
- Results are written once.
- Copy result requires a finished run.

## Package hygiene

- No `.git-tmp/`.
- No `.ci-tmp/`.
- No `.axon-*` unpack folders.
