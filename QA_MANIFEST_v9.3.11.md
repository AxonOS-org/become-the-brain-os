# QA Manifest — v9.3.11

## Included files

- `README.md`
- `index.html`
- `CHANGELOG.md`
- `RELEASE_NOTES_v9.3.11.md`
- `QA_MANIFEST_v9.3.11.md`
- `LICENSE-APACHE`
- `LICENSE-MIT`
- `.gitignore`
- `.github/workflows/ci.yml`
- `evolver-evolution-version/index.html`
- `evolver-evolution-version/README.md`
- `evolver-evolution-version/VERSION`
- `scripts/validate_v9_3_11.py`
- `scripts/install_v9_3_11_from_download.sh`
- `scripts/deploy_v9_3_11.sh`

## Excluded

- `.ci-tmp/`
- `.git-tmp/`
- `.axon-v*/`
- unpack folders
- previous version installer scripts
- previous version validators

## Validation

`python3 scripts/validate_v9_3_11.py`

Checks:

- required files exist;
- public files contain `v9.3.11` and no stale v9.3.x markers;
- runtime constants match release files;
- CI is multi-line YAML and validates the correct game path;
- inline JavaScript exists;
- Node syntax check passes when Node is installed;
- no temp folders are present in the package.

- no-temp-folder-self-check: validator no longer fails because Termux/Git creates local `.git-tmp` or `.ci-tmp` folders.
