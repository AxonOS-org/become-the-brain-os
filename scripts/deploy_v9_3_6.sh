#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0 OR MIT
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

mkdir -p "$PWD/.git-tmp"
export TMPDIR="$PWD/.git-tmp"
export TMP="$TMPDIR"
export TEMP="$TMPDIR"

echo "== AxonOS Evolver v9.3.6 clean deploy =="

git checkout main

git pull --rebase --autostash origin main

python3 scripts/validate_v9_3_6.py

git status --short

git add README.md \
        index.html \
        CHANGELOG.md \
        RELEASE_NOTES_v9.3.6.md \
        LICENSE-APACHE \
        LICENSE-MIT \
        evolver-evolution-version \
        scripts \
        .github

git commit -m "release(evolver): v9.3.6 clean hotfix" || echo "NOTE: nothing to commit"

git pull --rebase --autostash origin main

git push origin main

echo "DONE"
echo "https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.6"
