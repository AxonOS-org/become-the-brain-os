# Changelog

## v9.3.11-evolver

Cleanup and release-integrity stabilization.

- Fixed broken/one-line CI YAML risk.
- Added strict public-surface validation.
- Added legacy localStorage migration from prior v9.3.x builds.
- Hardened pointer-capture cleanup in runtime lifecycle paths.
- Guarded challenge copy against empty results.
- Added cache-busted result URL.
- Excluded temp folders from package and Git.

- no-temp-folder-self-check: validator no longer fails because Termux/Git creates local `.git-tmp` or `.ci-tmp` folders.
