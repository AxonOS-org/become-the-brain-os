#!/usr/bin/env bash
set -euo pipefail
python3 scripts/validate_v12_5_1.py
git push origin main
echo "https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=12.5.1"
