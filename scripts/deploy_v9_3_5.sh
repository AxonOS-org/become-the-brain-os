#!/usr/bin/env bash
set -euo pipefail

echo "== AxonOS Evolver v9.3.5 deploy helper =="

if [ ! -d .git ]; then
  echo "FAIL: run this from the repository root" >&2
  exit 1
fi

python3 scripts/validate_v9_3_5.py

git status --short

echo
read -r -p "Commit and push v9.3.5 to main? [y/N] " ans
case "$ans" in
  y|Y|yes|YES)
    git add README.md index.html CHANGELOG.md RELEASE_NOTES_v9.3.5.md LICENSE-APACHE LICENSE-MIT evolver-evolution-version scripts .github/workflows || true
    git commit -m "release(evolver): package v9.3.5" || echo "NOTE: nothing to commit"
    git push origin main
    echo "DONE"
    echo "Live path: https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.5"
    ;;
  *)
    echo "Cancelled before commit/push."
    ;;
esac
