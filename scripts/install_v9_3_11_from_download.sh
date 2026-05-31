#!/usr/bin/env bash
set -euo pipefail

cd "${1:-$HOME/axonos-work/become-the-brain-os}" || exit 1

mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp"
export TMP="$TMPDIR"
export TEMP="$TMPDIR"

git checkout main
git fetch origin main
git pull --rebase --autostash origin main

ZIP="$(find /sdcard/Download /storage/emulated/0/Download "$HOME/storage/downloads" "$PWD" \
  -maxdepth 2 -type f -name 'axonos-evolver-v9.3.11.zip' 2>/dev/null | head -n 1 || true)"

if [ -z "$ZIP" ]; then
  echo "FAIL: axonos-evolver-v9.3.11.zip not found"
  exit 1
fi

WORK="$PWD/.axon-v9311-clean"
rm -rf "$WORK"
mkdir -p "$WORK"
unzip -oq "$ZIP" -d "$WORK"
PKG="$WORK/axonos-evolver-v9.3.11"

if [ ! -d "$PKG" ]; then
  echo "FAIL: package folder not found"
  find "$WORK" -maxdepth 3 -type f
  exit 1
fi

rm -rf evolver-evolution-version scripts .github/workflows .ci-tmp .git-tmp
mkdir -p .github "$PWD/.git-tmp"

cp -a "$PKG/README.md" .
cp -a "$PKG/index.html" .
cp -a "$PKG/CHANGELOG.md" .
cp -a "$PKG/RELEASE_NOTES_v9.3.11.md" .
cp -a "$PKG/QA_MANIFEST_v9.3.11.md" .
cp -a "$PKG/LICENSE-APACHE" .
cp -a "$PKG/LICENSE-MIT" .
cp -a "$PKG/.gitignore" .
cp -a "$PKG/evolver-evolution-version" .
cp -a "$PKG/scripts" .
cp -a "$PKG/.github/." .github/

python3 scripts/validate_v9_3_11.py
rm -rf "$WORK" .ci-tmp

git status --short
git add -A
git commit -m "release(evolver): v9.3.11 cleanup stabilization" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main

echo "DONE"
echo "https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.11"
