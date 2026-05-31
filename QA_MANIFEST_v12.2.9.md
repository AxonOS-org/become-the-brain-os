# QA Manifest — v12.2.9

## Files

- `evolver-evolution-version/index.html`
- `evolver-evolution-version/VERSION`
- `README.md`
- `.github/workflows/ci.yml`
- `scripts/validate_v12_2_9.py`

## Manual QA checklist

- Start Guided Run.
- Hold and release early: game continues.
- Hold and release in gold: score increases.
- Hold too long: auto-accepts partial lock.
- Choose correct card: green state appears.
- Choose wrong card: correct route is revealed.
- Let card timer expire: safe fallback continues.
- Retry starts the same mode.
- Copy result works after finish.
- Escape aborts to home.
- Mobile layout has no horizontal scrolling.

## Automated QA

- Version markers checked.
- Inline JavaScript extracted and syntax checked by Node when available.
- Temp folders excluded from package.
