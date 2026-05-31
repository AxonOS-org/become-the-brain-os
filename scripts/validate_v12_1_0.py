#!/usr/bin/env python3
from pathlib import Path
import re, subprocess, shutil, sys, os

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = [ROOT/'README.md', ROOT/'index.html', ROOT/'evolver-evolution-version'/'README.md', ROOT/'evolver-evolution-version'/'VERSION', ROOT/'evolver-evolution-version'/'index.html', ROOT/'CHANGELOG.md', ROOT/'RELEASE_NOTES_v12.1.0.md', ROOT/'QA_MANIFEST_v12.1.0.md']
REQUIRED = PUBLIC + [ROOT/'.github/workflows/ci.yml', ROOT/'scripts/install_v12_1_0_from_download.sh', ROOT/'scripts/deploy_v12_1_0.sh', ROOT/'scripts/release_tag_v12_1_0.sh']

for p in REQUIRED:
    if not p.exists():
        raise SystemExit(f'FAIL: missing {p.relative_to(ROOT)}')

version_file = (ROOT/'evolver-evolution-version/VERSION').read_text(encoding='utf-8').strip()
if version_file != 'v12.1.0-evolver':
    raise SystemExit(f'FAIL: VERSION is {version_file!r}')

for p in PUBLIC:
    s = p.read_text(encoding='utf-8')
    if 'v12.1.0' not in s and p.name != 'VERSION':
        raise SystemExit(f'FAIL: v12.1.0 missing from {p.relative_to(ROOT)}')

for p in PUBLIC:
    s = p.read_text(encoding='utf-8')
    if re.search(r'v9\.3\.|v7\.1\.5', s):
        raise SystemExit(f'FAIL: stale public marker in {p.relative_to(ROOT)}')

html = (ROOT/'evolver-evolution-version/index.html').read_text(encoding='utf-8')
needles = ['VERSION=\'12.1.0\'', 'STORE=\'axonos_v1210_\'', 'CHALLENGE_PREFIX=\'v1210-\'', 'SHARE_FILE=\'axonos-v1210-share-card.png\'', 'AxonOS Standard Style', 'function setHoldEnabled', 'function finish(reason)', 'LEGACY_STORES']
for n in needles:
    if n not in html:
        raise SystemExit(f'FAIL: missing runtime marker {n}')

scripts = re.findall(r'<script\b[^>]*>([\s\S]*?)</script>', html, flags=re.I)
scripts = [s for s in scripts if s.strip()]
if not scripts:
    raise SystemExit('FAIL: no inline script found')

ci_tmp = ROOT/'.ci-tmp'
ci_tmp.mkdir(exist_ok=True)
js_path = ci_tmp/'evolver-inline.js'
js_path.write_text('\n\n'.join(scripts), encoding='utf-8')

node = shutil.which('node')
if node:
    subprocess.run([node, '--check', str(js_path)], check=True)

try:
    js_path.unlink()
    ci_tmp.rmdir()
except OSError:
    pass

ci = (ROOT/'.github/workflows/ci.yml').read_text(encoding='utf-8')
if '\n' not in ci or 'scripts/validate_v12_1_0.py' not in ci:
    raise SystemExit('FAIL: CI is malformed or points at wrong validator')

for bad in ['.git-tmp', '.ci-tmp', '.axon-v1210-clean']:
    if (ROOT/bad).exists():
        # Working trees may create them during Termux operations; package archives must not include them.
        pass

print('PASS: AxonOS Evolver v12.1.0 validation complete')
