#!/usr/bin/env bash
set -euo pipefail
TAG="v12.1.0"
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Tag $TAG already exists locally."
else
  git tag -a "$TAG" -m "AxonOS Evolver v12.1.0 major UX release"
fi
git push origin "$TAG"
