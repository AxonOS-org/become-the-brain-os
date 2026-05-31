#!/usr/bin/env bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp" TMP="$PWD/.git-tmp" TEMP="$PWD/.git-tmp"
python3 scripts/validate_v12_2_9.py
git add -A
git commit -m "release(evolver): v12.2.9 playability-first redesign" || echo "NOTE: nothing to commit"
git pull --rebase --autostash origin main
git push origin main
echo "https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=12.2.9"
