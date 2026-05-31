#!/usr/bin/env bash
set -euo pipefail
TAG="v12.2.9"
git fetch origin --tags
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Tag $TAG already exists locally"
else
  git tag -a "$TAG" -m "Become the Brain OS: Evolver $TAG"
fi
git push origin "$TAG"
