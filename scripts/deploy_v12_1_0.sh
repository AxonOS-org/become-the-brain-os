#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp"
python3 scripts/validate_v12_1_0.py
git status --short
git add -A
git commit -m "release(evolver): v12.1.0 major UX release" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main
bash scripts/release_tag_v12_1_0.sh
