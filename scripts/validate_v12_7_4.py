#!/usr/bin/env python3
from pathlib import Path
import re, subprocess, sys, zipfile, tarfile

ROOT=Path(__file__).resolve().parents[1]
VERSION='12.7.4'
PUBLIC=[ROOT/'README.md', ROOT/'index.html', ROOT/'evolver-evolution-version'/'README.md', ROOT/'evolver-evolution-version'/'VERSION', ROOT/'evolver-evolution-version'/'index.html']
for p in PUBLIC:
    if not p.exists(): raise SystemExit(f'FAIL: missing {p.relative_to(ROOT)}')
idx=(ROOT/'evolver-evolution-version'/'index.html').read_text(encoding='utf-8')
if 'v12.7.4' not in idx or "VERSION='12.7.4'" not in idx: raise SystemExit('FAIL: v12.7.4 runtime markers missing')
if 'bootError' not in idx or 'Runtime guard:' not in idx: raise SystemExit('FAIL: fail-open error guard missing')
if '<main id="home" class="screen active">' not in idx: raise SystemExit('FAIL: visible home fallback missing')
for p in PUBLIC:
    s=p.read_text(encoding='utf-8')
    for bad in ['v12.5.1','v12.2.9','v12.1.0','v9.3.11','v9.3.8','v9.3.5','v7.1.5']:
        if bad in s: raise SystemExit(f'FAIL: stale marker {bad} in {p.relative_to(ROOT)}')
match=re.search(r'<script>\s*([\s\S]*?)\s*</script>', idx, re.I)
if not match: raise SystemExit('FAIL: inline script missing')
tmp=ROOT/'.ci-tmp'; tmp.mkdir(exist_ok=True)
js=tmp/'evolver-inline.js'; js.write_text(match.group(1), encoding='utf-8')
try:
    subprocess.run(['node','--check',str(js)], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
except FileNotFoundError:
    pass
except subprocess.CalledProcessError as e:
    print(e.stdout); print(e.stderr); raise SystemExit('FAIL: node --check failed')
finally:
    try: js.unlink(); tmp.rmdir()
    except OSError: pass
ci=(ROOT/'.github'/'workflows'/'ci.yml').read_text(encoding='utf-8')
if '\n' not in ci or 'python3 scripts/validate_v12_7_4.py' not in ci: raise SystemExit('FAIL: CI not clean multiline YAML')
print('PASS: AxonOS Evolver v12.7.4 validation complete')
