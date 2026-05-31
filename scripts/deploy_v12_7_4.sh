#!/usr/bin/env bash
set -euo pipefail
cd "${1:-$PWD}"
mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp" TMP="$PWD/.git-tmp" TEMP="$PWD/.git-tmp"
ZIP="$(find /sdcard/Download /storage/emulated/0/Download "$HOME/storage/downloads" "$PWD" -maxdepth 2 -type f -name 'axonos-evolver-v12.7.4.zip' 2>/dev/null | head -n 1 || true)"
if [ -z "$ZIP" ]; then echo 'FAIL: axonos-evolver-v12.7.4.zip not found'; exit 1; fi
WORK="$PWD/.axon-v1274-clean"; rm -rf "$WORK"; mkdir -p "$WORK"; unzip -oq "$ZIP" -d "$WORK"
PKG="$WORK/axonos-evolver-v12.7.4"; [ -d "$PKG" ] || { echo 'FAIL: package folder not found'; exit 1; }
rm -rf evolver-evolution-version scripts .github/workflows .ci-tmp
mkdir -p .github "$PWD/.git-tmp"
cp -a "$PKG/README.md" "$PKG/index.html" "$PKG/CHANGELOG.md" "$PKG/RELEASE_NOTES_v12.7.4.md" "$PKG/QA_MANIFEST_v12.7.4.md" "$PKG/LICENSE-APACHE" "$PKG/LICENSE-MIT" "$PKG/.gitignore" .
cp -a "$PKG/evolver-evolution-version" "$PKG/scripts" "$PKG/docs" .
cp -a "$PKG/.github/." .github/
python3 scripts/validate_v12_7_4.py
rm -rf "$WORK" .ci-tmp
git status --short
git add -A
git commit -m "release(evolver): v12.7.4 black-screen recovery" || echo 'NOTE: nothing to commit'
git pull --rebase --autostash origin main
git push origin main
bash scripts/release_tag_v12_7_4.sh
