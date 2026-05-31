#!/usr/bin/env python3
from __future__ import annotations

import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = [
    ROOT / 'README.md',
    ROOT / 'evolver-evolution-version' / 'README.md',
    ROOT / 'evolver-evolution-version' / 'VERSION',
    ROOT / 'evolver-evolution-version' / 'index.html',
]
REQUIRED = [
    ROOT / 'README.md',
    ROOT / 'index.html',
    ROOT / 'CHANGELOG.md',
    ROOT / 'RELEASE_NOTES_v12.2.9.md',
    ROOT / 'QA_MANIFEST_v12.2.9.md',
    ROOT / 'docs' / 'GAMEPLAY_SPEC_v12.2.9.md',
    ROOT / 'docs' / 'OPERATIONS_10M_READY.md',
    ROOT / 'evolver-evolution-version' / 'index.html',
    ROOT / 'evolver-evolution-version' / 'README.md',
    ROOT / 'evolver-evolution-version' / 'VERSION',
    ROOT / '.github' / 'workflows' / 'ci.yml',
]

def fail(msg: str) -> None:
    print(f'FAIL: {msg}')
    sys.exit(1)

for path in REQUIRED:
    if not path.exists():
        fail(f'missing required file: {path.relative_to(ROOT)}')

version = (ROOT / 'evolver-evolution-version' / 'VERSION').read_text(encoding='utf-8').strip()
if version != 'v12.2.9-evolver':
    fail(f'bad VERSION: {version!r}')

html = (ROOT / 'evolver-evolution-version' / 'index.html').read_text(encoding='utf-8')
required_tokens = [
    "const VERSION='12.2.9'",
    "const STORE='axonos_v1229_'",
    "v12.2.9",
    "hold signal -> release in gold",
    "function setHoldEnabled",
    "els.hold.disabled",
    "function startChoice",
    "function finishRun",
    "Challenge seed v1229-",
]
for token in required_tokens:
    if token not in html:
        fail(f'missing token in game html: {token}')

stale = ['v12.1.0', 'v9.3.11', 'v9.3.10', 'v9.3.9', 'v9.3.8', 'v9.3.7', 'v9.3.6', 'v9.3.5', 'v9.3.2', 'v7.1.5']
for path in PUBLIC:
    text = path.read_text(encoding='utf-8')
    for bad in stale:
        if bad in text:
            fail(f'stale marker {bad} in {path.relative_to(ROOT)}')

m = re.search(r'<script>\s*([\s\S]*?)\s*</script>', html, re.I)
if not m:
    fail('inline script not found')
js = m.group(1)
ci_tmp = ROOT / '.ci-tmp'
ci_tmp.mkdir(exist_ok=True)
js_path = ci_tmp / 'evolver-inline.js'
js_path.write_text(js, encoding='utf-8')
try:
    node = shutil.which('node')
    if node:
        subprocess.run([node, '--check', str(js_path)], cwd=ROOT, check=True)
finally:
    try:
        js_path.unlink()
        ci_tmp.rmdir()
    except OSError:
        pass

for bad_dir in ['.git-tmp', '.axon-v1229-clean']:
    if (ROOT / bad_dir).exists():
        print(f'NOTE: local temp present in working tree: {bad_dir}; ignored by package policy')

print('PASS: AxonOS Evolver v12.2.9 validation complete')
