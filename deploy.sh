#!/usr/bin/env bash
# ============================================================================
#  Ultra-win deploy for "Become the OS".
#  Pushes the game AND turns on GitHub Pages (branch build) using YOUR gh token
#  — which works even when the org blocks the Actions token from creating Pages.
#  No && chains, no /tmp, no node needed. Run from the repo root:
#       bash deploy.sh
# ============================================================================
set -uo pipefail            # deliberately NOT -e: every step handles its own failure

REPO="AxonOS-org/become-the-brain-os"
REMOTE="https://github.com/${REPO}.git"
BRANCH="main"

echo "▶ 1/5  git init"
git rev-parse --git-dir >/dev/null 2>&1 || git init -b "$BRANCH"
git checkout -B "$BRANCH" >/dev/null 2>&1 || true

echo "▶ 2/5  commit"
git add -A
if git commit -m "release: Become the OS v0.3.3" >/dev/null 2>&1; then
  echo "   committed"
else
  echo "   (nothing new to commit — ok)"
fi

echo "▶ 3/5  remote"
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE"
else
  git remote add origin "$REMOTE"
fi

echo "▶ 4/5  push (force — clean upload)"
if git push --force -u origin "$BRANCH"; then
  echo "   pushed"
else
  echo "   ✗ push failed — check 'gh auth status' and the repo name"; exit 1
fi

echo "▶ 5/5  enable GitHub Pages (branch build, via your gh token)"
if command -v gh >/dev/null 2>&1; then
  BODY='{"build_type":"legacy","source":{"branch":"'"$BRANCH"'","path":"/"}}'
  if echo "$BODY" | gh api -X POST "repos/${REPO}/pages" --input - >/dev/null 2>&1; then
    echo "   Pages enabled (branch build)"
  elif echo "$BODY" | gh api -X PUT "repos/${REPO}/pages" --input - >/dev/null 2>&1; then
    echo "   Pages updated (branch build)"
  else
    echo "   ! could not toggle Pages via API."
    echo "     Enable once by hand: Settings → Pages → Source: 'Deploy from a branch' → main / (root)"
  fi
else
  echo "   gh not found — enable manually: Settings → Pages → Deploy from a branch → main / root"
fi

echo ""
echo "✓ Done. Live in ~1 minute at:"
echo "  https://axonos-org.github.io/become-the-brain-os/"
