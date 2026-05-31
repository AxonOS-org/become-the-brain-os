#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0 OR MIT
set -euo pipefail

cd "$HOME/axonos-work/become-the-brain-os"

mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp"
export TMP="$TMPDIR"
export TEMP="$TMPDIR"

git checkout main

git pull --rebase --autostash origin main

ZIP="$(find /sdcard/Download /storage/emulated/0/Download "$HOME/storage/downloads" "$PWD" \
  -maxdepth 2 -type f -name 'axonos-evolver-v9.3.6.zip' 2>/dev/null | head -n 1 || true)"

if [ -z "$ZIP" ]; then
  echo "FAIL: axonos-evolver-v9.3.6.zip not found in Download."
  echo "Expected: /sdcard/Download/axonos-evolver-v9.3.6.zip"
  exit 1
fi

echo "FOUND ZIP: $ZIP"

WORK="$PWD/.axon-v936-unpack"
rm -rf "$WORK"
mkdir -p "$WORK"
unzip -q "$ZIP" -d "$WORK"

PKG="$WORK/axonos-evolver-v9.3.6"
if [ ! -d "$PKG" ]; then
  echo "FAIL: package folder axonos-evolver-v9.3.6 not found inside archive."
  find "$WORK" -maxdepth 3 -type f | sed 's#^# - #'
  exit 1
fi

cp -a "$PKG/README.md" .
cp -a "$PKG/index.html" .
cp -a "$PKG/CHANGELOG.md" .
cp -a "$PKG/RELEASE_NOTES_v9.3.6.md" .
cp -a "$PKG/LICENSE-APACHE" .
cp -a "$PKG/LICENSE-MIT" .

rm -rf evolver-evolution-version
cp -a "$PKG/evolver-evolution-version" .

rm -rf scripts
cp -a "$PKG/scripts" .

mkdir -p .github
cp -a "$PKG/.github/." .github/

python3 scripts/validate_v9_3_6.py

rm -rf "$WORK"

git status --short

git add -A

git commit -m "release(evolver): v9.3.6 clean hotfix" || echo "NOTE: nothing to commit"

git pull --rebase --autostash origin main

git push origin main

echo "DONE"
echo "https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.6"
