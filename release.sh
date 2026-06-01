#!/usr/bin/env bash
# Release helper for "Become the Brain OS".
# Sets the GitHub repository About (description + topics/tags + homepage),
# ensures Pages is live, and publishes the release. Run AFTER pushing the
# v17.1.0 commit:  bash release.sh
set -euo pipefail

REPO="AxonOS-org/become-the-brain-os"
TAG="v17.1.0"
PAGES_URL="https://axonos-org.github.io/become-the-brain-os/"

echo "→ About: description + homepage…"
gh repo edit "$REPO" \
  --description "🧠 Become the Brain OS — a local-only educational arcade where you are the privacy firewall of a brain–computer interface: allow derived intent, block raw neural data, survive the load. A game about the real AxonOS real-time OS. No sensor, no neural data." \
  --homepage "$PAGES_URL"

echo "→ Tags (topics)…"
gh repo edit "$REPO" \
  --add-topic brain-computer-interface \
  --add-topic neurotechnology \
  --add-topic privacy \
  --add-topic real-time \
  --add-topic open-source \
  --add-topic game \
  --add-topic html5-game \
  --add-topic javascript \
  --add-topic educational-game \
  --add-topic axonos

echo "→ Ensuring GitHub Pages (branch main, root)…"
gh api --method POST "repos/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
  && echo "   Pages enabled." || echo "   Pages already enabled (ok)."

echo "→ Publishing release $TAG (green badge will track this)…"
NOTES="Neural Triage — the breakthrough release. Luxury UX, smoother escalating difficulty, particles/flash/combo juice, and **Challenge a friend** (a link that replays your exact packet sequence for a fair score fight). Allow derived intent, block raw neural data — a game about the real AxonOS privacy-first real-time OS. Local-only, reads no neural data. Play: $PAGES_URL"
if gh release view "$TAG" -R "$REPO" >/dev/null 2>&1; then
  gh release edit "$TAG" -R "$REPO" --title "Become the Brain OS $TAG — Neural Triage" --notes "$NOTES"
else
  gh release create "$TAG" -R "$REPO" --title "Become the Brain OS $TAG — Neural Triage" --notes "$NOTES"
fi

echo "✓ Done — About, tags, Pages, and the $TAG release are set."
