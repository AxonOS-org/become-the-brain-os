#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
python3 scripts/validate_v9_3_8.py
git status --short
git add -A
git commit -m "release(evolver): v9.3.8 architecture stabilization" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main
echo "Live: https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.8"
