#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp" TMP="$PWD/.git-tmp" TEMP="$PWD/.git-tmp"
ZIP="$(find /sdcard/Download /storage/emulated/0/Download "$HOME/storage/downloads" "$PWD" -maxdepth 2 -type f -name 'axonos-evolver-v12.2.9.zip' 2>/dev/null | head -n 1 || true)"
[ -n "$ZIP" ] || { echo 'FAIL: axonos-evolver-v12.2.9.zip not found'; exit 1; }
WORK="$PWD/.axon-v1229-clean"
rm -rf "$WORK"
mkdir -p "$WORK"
unzip -oq "$ZIP" -d "$WORK"
PKG="$WORK/axonos-evolver-v12.2.9"
[ -d "$PKG" ] || { echo 'FAIL: package folder not found'; find "$WORK" -maxdepth 3 -type f; exit 1; }
rm -rf evolver-evolution-version scripts .github/workflows .ci-tmp
mkdir -p .github "$PWD/.git-tmp"
cp -a "$PKG/README.md" .
cp -a "$PKG/index.html" .
cp -a "$PKG/CHANGELOG.md" .
cp -a "$PKG/RELEASE_NOTES_v12.2.9.md" .
cp -a "$PKG/QA_MANIFEST_v12.2.9.md" .
cp -a "$PKG/LICENSE-APACHE" .
cp -a "$PKG/LICENSE-MIT" .
cp -a "$PKG/.gitignore" .
cp -a "$PKG/evolver-evolution-version" .
cp -a "$PKG/scripts" .
cp -a "$PKG/docs" .
cp -a "$PKG/.github/." .github/
python3 scripts/validate_v12_2_9.py
rm -rf "$WORK" .ci-tmp
git status --short
