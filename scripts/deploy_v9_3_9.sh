#!/usr/bin/env bash
set -euo pipefail
python3 scripts/validate_v9_3_9.py
git status --short
git add -A
git commit -m "release(evolver): v9.3.9 QA stabilization" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main
