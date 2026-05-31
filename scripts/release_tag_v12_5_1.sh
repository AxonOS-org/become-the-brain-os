#!/usr/bin/env bash
set -euo pipefail
git fetch origin --tags
if git rev-parse "v12.5.1" >/dev/null 2>&1; then
  echo "Tag v12.5.1 already exists locally."
else
  git tag -a "v12.5.1" -m "Become the Brain OS: Evolver v12.5.1"
fi
git push origin "v12.5.1"
if command -v gh >/dev/null 2>&1; then
  gh release view "v12.5.1" >/dev/null 2>&1 || gh release create "v12.5.1" --title "Become the Brain OS: Evolver v12.5.1" --notes-file "RELEASE_NOTES_v12.5.1.md" --latest
else
  echo "GitHub CLI not installed; create the GitHub Release manually from tag v12.5.1."
fi
