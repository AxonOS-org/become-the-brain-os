#!/usr/bin/env python3
from pathlib import Path
import re
import subprocess
import sys

VERSION = "12.5.1"
TAG = "v12.5.1"
FULL = "v12.5.1-evolver"
STORE = "axonos_v1251_"
ROOT = Path(__file__).resolve().parents[1]
PUBLIC = [ROOT / "README.md", ROOT / "evolver-evolution-version" / "README.md", ROOT / "evolver-evolution-version" / "index.html", ROOT / "evolver-evolution-version" / "VERSION"]
REQUIRED = [
    ROOT / "README.md",
    ROOT / "index.html",
    ROOT / "evolver-evolution-version" / "index.html",
    ROOT / "evolver-evolution-version" / "README.md",
    ROOT / "evolver-evolution-version" / "VERSION",
    ROOT / ".github" / "workflows" / "ci.yml",
]
for path in REQUIRED:
    if not path.exists():
        raise SystemExit(f"FAIL: missing {path.relative_to(ROOT)}")

version_file = (ROOT / "evolver-evolution-version" / "VERSION").read_text(encoding="utf-8").strip()
if version_file != FULL:
    raise SystemExit(f"FAIL: VERSION is {version_file!r}, expected {FULL!r}")

index = (ROOT / "evolver-evolution-version" / "index.html").read_text(encoding="utf-8")
for token in [VERSION, FULL, STORE, "v12.5.1", "axonos_v1251_"]:
    if token not in index and token not in VERSION:
        raise SystemExit(f"FAIL: token missing from index: {token}")

stale = ["v9.3.5", "v9.3.6", "v9.3.7", "v9.3.8", "v9.3.9", "v9.3.10", "v9.3.11", "v9.3.12", "v12.1.0", "v12.2.9"]
for path in PUBLIC:
    text = path.read_text(encoding="utf-8")
    for bad in stale:
        if bad in text:
            raise SystemExit(f"FAIL: stale token {bad} in {path.relative_to(ROOT)}")

m = re.search(r"<script>\s*([\s\S]*?)\s*</script>", index, re.I)
if not m:
    raise SystemExit("FAIL: inline script not found")

ci_tmp = ROOT / ".ci-tmp"
ci_tmp.mkdir(exist_ok=True)
js = ci_tmp / "evolver-inline.js"
js.write_text(m.group(1), encoding="utf-8")
try:
    subprocess.run(["node", "--check", str(js)], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
except FileNotFoundError:
    pass
except subprocess.CalledProcessError as exc:
    print(exc.stdout)
    print(exc.stderr)
    raise SystemExit("FAIL: node --check failed")
finally:
    try:
        js.unlink()
        ci_tmp.rmdir()
    except OSError:
        pass

print("PASS: AxonOS Evolver v12.5.1 validation complete")
