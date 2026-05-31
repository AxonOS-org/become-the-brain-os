#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
python3 scripts/validate_v12_5_1.py
git status --short
git add -A
git commit -m "release(evolver): v12.5.1 cleanup bugfix" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main
