#!/usr/bin/env bash
# Release helper for "Become the Brain OS". Sets the GitHub About (description +
# topics) and publishes the release. Run AFTER pushing the v20.1.2 commit.
set -euo pipefail
REPO="AxonOS-org/become-the-brain-os"
TAG="v20.1.2"
PAGES_URL="https://axonos-org.github.io/become-the-brain-os/"

echo "→ About: description + homepage…"
gh repo edit "$REPO" \
  --description "🧠 Become the Brain OS — a local-only cognitive-firewall game: allow derived intent, block raw cognition, distortions, revoked consent and artifacts across the mind↔world boundary. Scenarios, daily seed, challenge-a-friend. A game about the real AxonOS real-time OS. No sensor, no neural data." \
  --homepage "$PAGES_URL"

echo "→ Tags (topics)…"
gh repo edit "$REPO" \
  --add-topic brain-computer-interface --add-topic neurotechnology --add-topic privacy \
  --add-topic real-time --add-topic open-source --add-topic game --add-topic html5-game \
  --add-topic javascript --add-topic educational-game --add-topic axonos

echo "→ Ensuring GitHub Pages (branch main, root)…"
gh api --method POST "repos/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
  && echo "   Pages enabled." || echo "   Pages already enabled (ok)."

echo "→ Publishing release $TAG (green badge tracks this)…"
NOTES="Luxury-UX cognitive firewall — bug-fix + polish release. Fixed packet double-fire, keyboard ALLOW conflict, and stuck challenge replay; added flash/shake/haptics/optional sound and a fail-open boot guard. Allow derived intent, block raw cognition — a game about the real AxonOS privacy-first real-time OS. Local-only, reads no neural data. Play: $PAGES_URL"
if gh release view "$TAG" -R "$REPO" >/dev/null 2>&1; then
  gh release edit "$TAG" -R "$REPO" --title "Become the Brain OS $TAG" --notes "$NOTES"
else
  gh release create "$TAG" -R "$REPO" --title "Become the Brain OS $TAG" --notes "$NOTES"
fi
echo "✓ Done — About, tags, Pages, and the $TAG release are set."
