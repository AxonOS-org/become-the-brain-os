#!/usr/bin/env python3
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Validate AxonOS Evolver v9.3.11 release tree.

This validator is designed to run inside a live Git working tree. It deliberately
ignores local Termux/Git temp folders such as .git-tmp and .ci-tmp, because those
folders are runtime artifacts of validation/commit workflows, not package files.
"""
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
QA = ROOT / "QA_MANIFEST_v9.3.11.md"
RELEASE = ROOT / "RELEASE_NOTES_v9.3.11.md"
CHANGELOG = ROOT / "CHANGELOG.md"
GITIGNORE = ROOT / ".gitignore"

required = [INDEX, VERSION, EV_README, ROOT_README, ROOT_INDEX, CI, QA, RELEASE, CHANGELOG, GITIGNORE]
missing = [str(p.relative_to(ROOT)) for p in required if not p.exists()]
if missing:
    print("FAIL: missing required files:")
    for p in missing:
        print(" -", p)
    sys.exit(1)

public_files = [INDEX, VERSION, EV_README, ROOT_README, ROOT_INDEX, CI, QA, RELEASE, CHANGELOG, GITIGNORE]
texts = {p: p.read_text(encoding="utf-8") for p in public_files}
all_text = "\n".join(texts.values())

must_have = [
    "v9.3.11",
    "v9.3.11-evolver",
    "axonos_v9311_",
    "v9311-",
    "axonos-v9311-share-card.png",
    "evolver-evolution-version/index.html",
    "LEGACY_STORES",
    "holdEnabled",
    "expectedLostCapture",
    "function ownsPointer(",
    "function timeoutChoice(",
    "function armChoiceTimer(",
    "lastResult={",
    "game.persisted",
    "__AXONOS_EVOLVER_BUILD__",
    "legacy-storage-migration",
    "pointer-capture-cleanup",
    "no-temp-folder-self-check",
]
for marker in must_have:
    if marker not in all_text:
        print(f"FAIL: required marker not found: {marker}")
        sys.exit(1)

# Old runtime versions must not appear in visible public text/metadata.
# The only allowed old-version artifacts are legacy localStorage keys inside INDEX.
stale_visible = [
    "v7.1.5", "7.1.5", "v9.3.2", "9.3.2", "v9.3.5", "9.3.5",
    "v9.3.6", "9.3.6", "v9.3.7", "9.3.7", "v9.3.8", "9.3.8",
    "v9.3.9", "9.3.9", "v9.3.10", "9.3.10",
]
for p, s in texts.items():
    for marker in stale_visible:
        if marker in s:
            print(f"FAIL: stale visible marker remains in {p.relative_to(ROOT)}: {marker}")
            sys.exit(1)

# Old storage namespaces may exist only in the LEGACY_STORES line of the game JS.
index = texts[INDEX]
legacy_line = ""
for line in index.splitlines():
    if "LEGACY_STORES" in line:
        legacy_line = line
        break
if not legacy_line:
    print("FAIL: LEGACY_STORES line not found")
    sys.exit(1)
for marker in ["axonos_v9310_", "axonos_v939_", "axonos_v938_", "axonos_v937_", "axonos_v936_", "axonos_v935_"]:
    if marker not in legacy_line:
        print(f"FAIL: legacy storage marker missing from LEGACY_STORES: {marker}")
        sys.exit(1)

index_without_legacy = "\n".join(line for line in index.splitlines() if "LEGACY_STORES" not in line)
for marker in ["v9310", "v939", "v938", "v937", "v936", "v935", "v932", "v715",
               "axonos_v9310_", "axonos_v939_", "axonos_v938_", "axonos_v937_", "axonos_v936_", "axonos_v935_"]:
    if marker in index_without_legacy:
        print(f"FAIL: stale storage/challenge marker outside LEGACY_STORES: {marker}")
        sys.exit(1)

html = index
if 'body[data-screen="playScreen"].' in html:
    print('FAIL: broken mobile selector pattern remains')
    sys.exit(1)
if "holdPad.disabled" in html:
    print("FAIL: holdPad is a div; do not rely on disabled property")
    sys.exit(1)

ci = texts[CI]
if ci.count("\n") < 15:
    print("FAIL: CI YAML appears collapsed into one line")
    sys.exit(1)
if "python3 scripts/validate_v9_3_11.py" not in ci:
    print("FAIL: CI does not call the v9.3.11 validator")
    sys.exit(1)
if "readFileSync('index.html'" in ci or 'readFileSync("index.html"' in ci:
    print("FAIL: CI still checks root index.html instead of evolver build")
    sys.exit(1)

# Confirm gitignore protects validation temp artifacts.
gi = texts[GITIGNORE]
for pattern in [".ci-tmp/", ".git-tmp/", ".axon-v*/"]:
    if pattern not in gi:
        print(f"FAIL: .gitignore missing temp pattern: {pattern}")
        sys.exit(1)

scripts = [m.group(1) for m in re.finditer(r"<script[^>]*>(.*?)</script>", html, re.I | re.S) if m.group(1).strip()]
if not scripts:
    print("FAIL: no inline script found in evolver-evolution-version/index.html")
    sys.exit(1)

# Use a local temp folder for JS extraction, then delete it. Do not fail because it exists.
out = ROOT / ".ci-tmp"
out.mkdir(exist_ok=True)
js_path = out / "evolver-inline.js"
js_path.write_text("\n\n".join(scripts), encoding="utf-8")

node = shutil.which("node")
if node:
    subprocess.run([node, "--check", str(js_path)], check=True)
else:
    print("NOTE: node not found; skipped node --check")

try:
    shutil.rmtree(out)
except Exception:
    pass

print("PASS: AxonOS Evolver v9.3.11 validation complete")
