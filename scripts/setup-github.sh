#!/usr/bin/env bash
# SPDX-License-Identifier: Apache-2.0 OR MIT
# Set the GitHub "About" (description + homepage) and topics. Requires `gh`.
set -euo pipefail
REPO="AxonOS-org/become-the-brain-os"
gh repo edit "$REPO" \
  --description "Become the operating system of a brain–computer interface — a free browser game by AxonOS. Clean the signal, read the intent, beat the deadline, guard private thoughts." \
  --homepage "https://axonos-org.github.io/become-the-brain-os/" \
  --add-topic axonos \
  --add-topic bci \
  --add-topic brain-computer-interface \
  --add-topic neurotechnology \
  --add-topic educational-game \
  --add-topic stem \
  --add-topic simulation \
  --add-topic javascript \
  --add-topic html5-game
echo "About + topics set for $REPO"
