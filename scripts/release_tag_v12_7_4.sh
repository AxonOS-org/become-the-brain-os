#!/usr/bin/env bash
set -euo pipefail
TAG="v12.7.4"
git fetch origin --tags || true
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "tag $TAG already exists locally"
else
  git tag -a "$TAG" -m "Become the Brain OS: Evolver $TAG"
fi
git push origin "$TAG" || true
if command -v gh >/dev/null 2>&1; then
  if gh release view "$TAG" >/dev/null 2>&1; then
    echo "release $TAG already exists"
  else
    gh release create "$TAG" --title "Become the Brain OS: Evolver $TAG" --notes-file RELEASE_NOTES_v12.7.4.md --latest || gh release create "$TAG" --title "Become the Brain OS: Evolver $TAG" --notes-file RELEASE_NOTES_v12.7.4.md
  fi
fi
