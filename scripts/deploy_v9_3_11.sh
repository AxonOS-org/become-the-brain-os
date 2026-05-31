#!/usr/bin/env bash
set -euo pipefail

mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp"
export TMP="$TMPDIR"
export TEMP="$TMPDIR"

python3 scripts/validate_v9_3_11.py
rm -rf .ci-tmp

git status --short
git add -A
git commit -m "release(evolver): v9.3.11 cleanup stabilization" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main
