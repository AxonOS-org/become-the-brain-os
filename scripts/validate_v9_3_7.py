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

required = [INDEX, VERSION, EV_README, ROOT_README, ROOT_INDEX, CI]
missing = [str(p.relative_to(ROOT)) for p in required if not p.exists()]
if missing:
    print("FAIL: missing required files:")
    for p in missing:
        print(" -", p)
    sys.exit(1)

public_files = [INDEX, VERSION, EV_README, ROOT_README, ROOT_INDEX, CI]
text = "\n".join(p.read_text(encoding="utf-8") for p in public_files)

must_have = [
    "v9.3.7",
    "v9.3.7-evolver",
    "axonos_v937_",
    "v937-",
    "axonos-v937-share-card.png",
    "evolver-evolution-version/index.html",
]
for marker in must_have:
    if marker not in text:
        print(f"FAIL: required marker not found: {marker}")
        sys.exit(1)

stale = [
    "v7.1.5", "7.1.5",
    "v9.3.2", "9.3.2",
    "v9.3.5", "9.3.5",
    "v9.3.6", "9.3.6",
    "v715", "v932", "v935", "v936",
    "axonos_v715_", "axonos_v932_", "axonos_v935_", "axonos_v936_",
    "axonos-v935-share-card.png", "axonos-v936-share-card.png",
]
for marker in stale:
    if marker in text:
        print(f"FAIL: stale marker remains: {marker}")
        sys.exit(1)

html = INDEX.read_text(encoding="utf-8")
if 'body[data-screen="playScreen"].' in html:
    print('FAIL: broken mobile selector pattern remains')
    sys.exit(1)

required_js_markers = [
    "function shuffle(",
    "function clearNextTimer(",
    "function lockCards(",
    "runId:++runSeq",
    "node --check",
]
for marker in required_js_markers[:-1]:
    if marker not in html:
        print(f"FAIL: gameplay hardening marker missing: {marker}")
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

print("PASS: AxonOS Evolver v9.3.7 validation complete")
