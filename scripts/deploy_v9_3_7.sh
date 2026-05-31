#!/usr/bin/env bash
set -euo pipefail

mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp"
export TMP="$TMPDIR"
export TEMP="$TMPDIR"

python3 scripts/validate_v9_3_7.py

git status --short
git add -A
git commit -m "release(evolver): v9.3.7 gameplay stabilization" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main

echo "DONE"
echo "https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.7"
