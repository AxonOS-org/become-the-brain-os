#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0 OR MIT

from pathlib import Path
import re
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "evolver-evolution-version" / "index.html"
VERSION = ROOT / "evolver-evolution-version" / "VERSION"
EV_README = ROOT / "evolver-evolution-version" / "README.md"
ROOT_README = ROOT / "README.md"
ROOT_INDEX = ROOT / "index.html"
CI = ROOT / ".github" / "workflows" / "ci.yml"
QA = ROOT / "QA_MANIFEST_v9.3.9.md"

required = [INDEX, VERSION, EV_README, ROOT_README, ROOT_INDEX, CI, QA]
missing = [str(p.relative_to(ROOT)) for p in required if not p.exists()]
if missing:
    print("FAIL: missing required files:")
    for p in missing:
        print(" -", p)
    sys.exit(1)

public_files = [INDEX, VERSION, EV_README, ROOT_README, ROOT_INDEX, CI, QA]
text = "\n".join(p.read_text(encoding="utf-8") for p in public_files)

must_have = [
    "v9.3.9",
    "v9.3.9-evolver",
    "axonos_v939_",
    "v939-",
    "axonos-v939-share-card.png",
    "evolver-evolution-version/index.html",
    "holdEnabled",
    "expectedLostCapture",
    "function ownsPointer(",
    "function timeoutChoice(",
    "function armChoiceTimer(",
    "lastResult={",
    "game.persisted",
    "__AXONOS_EVOLVER_BUILD__",
]
for marker in must_have:
    if marker not in text:
        print(f"FAIL: required marker not found: {marker}")
        sys.exit(1)

# Only public release surfaces are stale-scanned. Validator scripts may mention old
# versions as forbidden markers; that is not a release-surface defect.
stale_public = [
    "v7.1.5", "7.1.5",
    "v9.3.2", "9.3.2",
    "v9.3.5", "9.3.5",
    "v9.3.6", "9.3.6",
    "v9.3.7", "9.3.7",
    "v9.3.8", "9.3.8",
    "v715", "v932", "v935", "v936", "v937", "v938",
    "axonos_v715_", "axonos_v932_", "axonos_v935_", "axonos_v936_", "axonos_v937_", "axonos_v938_",
    "axonos-v935-share-card.png", "axonos-v936-share-card.png", "axonos-v937-share-card.png", "axonos-v938-share-card.png",
]
for marker in stale_public:
    if marker in text:
        print(f"FAIL: stale public marker remains: {marker}")
        sys.exit(1)

html = INDEX.read_text(encoding="utf-8")
if 'body[data-screen="playScreen"].' in html:
    print('FAIL: broken mobile selector pattern remains')
    sys.exit(1)

scripts = [m.group(1) for m in re.finditer(r"<script[^>]*>(.*?)</script>", html, re.I | re.S) if m.group(1).strip()]
if not scripts:
    print("FAIL: no inline script found in evolver-evolution-version/index.html")
    sys.exit(1)

js = "\n\n".join(scripts)
out = ROOT / ".ci-tmp"
out.mkdir(exist_ok=True)
js_path = out / "evolver-inline.js"
js_path.write_text(js, encoding="utf-8")

node = shutil.which("node")
if node:
    subprocess.run([node, "--check", str(js_path)], check=True)
else:
    print("NOTE: node not found; skipped node --check")

print("PASS: AxonOS Evolver v9.3.9 validation complete")
