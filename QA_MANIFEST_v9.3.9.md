# QA Manifest — AxonOS Evolver v9.3.9

## Files intentionally shipped

```text
README.md
index.html
CHANGELOG.md
RELEASE_NOTES_v9.3.9.md
QA_MANIFEST_v9.3.9.md
LICENSE-APACHE
LICENSE-MIT
.gitignore
.github/workflows/ci.yml
evolver-evolution-version/README.md
evolver-evolution-version/VERSION
evolver-evolution-version/index.html
scripts/validate_v9_3_9.py
scripts/install_v9_3_9_from_download.sh
scripts/deploy_v9_3_9.sh
```

## Runtime markers required

```text
v9.3.9
v9.3.9-evolver
axonos_v939_
v939-
axonos-v939-share-card.png
```

## Bugs fixed from previous package line

| Area | Defect | v9.3.9 correction |
|---|---|---|
| Input lifecycle | `div.disabled` used as runtime guard | explicit `holdEnabled` flag |
| Pointer handling | unrelated pointer cancel could kill active hold | `ownsPointer(e)` guard |
| Pointer capture | successful release could trigger false `lostpointercapture` cancel | `expectedLostCapture` guard |
| Quest scoring | Vault Keeper could be undercounted | mission-kind based privacy denial scoring |
| Release integrity | VERSION/README/CI could drift | validator checks all public surfaces |
| Deploy workflow | stale-marker grep could self-match scripts | public-file-only stale scan |

## Validation performed

- `python3 scripts/validate_v9_3_9.py`
- inline JavaScript extraction from `evolver-evolution-version/index.html`
- `node --check` on extracted inline JavaScript
- archive SHA256 generation
