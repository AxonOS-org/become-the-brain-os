#!/usr/bin/env python3
from __future__ import annotations

import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "evolver-evolution-version" / "index.html"
ROOT_INDEX = ROOT / "index.html"
README = ROOT / "README.md"
EVOLVER_README = ROOT / "evolver-evolution-version" / "README.md"
VERSION = ROOT / "evolver-evolution-version" / "VERSION"
RELEASE = ROOT / "RELEASE_NOTES_v9.3.5.md"
CHANGELOG = ROOT / "CHANGELOG.md"

REQUIRED = [INDEX, ROOT_INDEX, README, EVOLVER_README, VERSION, RELEASE, CHANGELOG]
STALE = [
    "v0.3.3",
    "v7.1.5",
    "7.1.5",
    "v9.3.2",
    "9.3.2",
    "v9.3.3",
    "9.3.3",
    "v9.3.4",
    "9.3.4",
    "axonos_v715_",
    "axonos_v932_",
    "axonos-v715-share-card.png",
    "axonos-v932-share-card.png",
    'body[data-screen="playScreen"].',
]


def fail(msg: str) -> None:
    print(f"FAIL: {msg}", file=sys.stderr)
    raise SystemExit(1)


def read(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError as exc:
        fail(f"{path} is not valid UTF-8: {exc}")


def main() -> None:
    for path in REQUIRED:
        if not path.exists():
            fail(f"missing required file: {path.relative_to(ROOT)}")

    combined = "\n".join(read(p) for p in REQUIRED)
    for pattern in STALE:
        if pattern in combined:
            fail(f"stale marker remains: {pattern!r}")

    version = read(VERSION).strip()
    if version != "v9.3.5-evolver":
        fail(f"bad VERSION content: {version!r}")

    index = read(INDEX)
    required_markers = [
        "const VERSION='9.3.5'",
        "const STORE='axonos_v935_'",
        "v935-",
        "axonos-v935-share-card.png",
        "Become the Brain OS: Evolver",
        "reads no neural data",
        "No backend",
    ]
    for marker in required_markers:
        if marker not in index:
            fail(f"missing index marker: {marker!r}")

    # Extract inline scripts and run Node syntax validation when available.
    scripts = re.findall(r"<script[^>]*>(.*?)</script>", index, flags=re.S | re.I)
    if not scripts:
        fail("no inline script found in evolver index")

    tmp = ROOT / ".tmp_v935_check.js"
    tmp.write_text("\n\n".join(scripts), encoding="utf-8")
    try:
        node = shutil.which("node")
        if node:
            result = subprocess.run([node, "--check", str(tmp)], text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            if result.returncode != 0:
                print(result.stdout)
                fail("node --check failed")
        else:
            print("NOTE: node not found; skipped JS parser check")
    finally:
        tmp.unlink(missing_ok=True)

    print("PASS: AxonOS Evolver v9.3.5 archive validation complete")


if __name__ == "__main__":
    main()
