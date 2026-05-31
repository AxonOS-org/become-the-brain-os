# Become the Brain OS v9.3.2 — Evolver Public Run Release

**Repository:** `AxonOS-org/become-the-brain-os`  
**Target folder:** `evolver-evolution-version/`  
**Release type:** experimental build promotion candidate  
**Version:** `v9.3.2-evolver`  
**Status:** specification-ready / implementation-ready  
**Owner:** The AxonOS Project  

---

## 1. Release thesis

`v9.3.2` turns the current `evolver-evolution-version` build from an isolated experiment into a public, runnable, GitHub-native AxonOS game surface.

The goal is not to add random features. The goal is to make one message instantly clear:

> You are the operating system between neural hardware and an application. Stabilize signal. Classify intent. Enforce neural permissions. Respect consent. Reject artifacts. Launch the Brain OS.

This release must remain honest:

- it is a browser game;
- it reads no neural data;
- it uses no sensor;
- it is not medical software;
- it has no backend;
- it has no analytics;
- all score/progression data stay local.

The release should strengthen AxonOS as an “OS for the Brain,” not dilute it into a generic AI-agent game.

---

## 2. Current baseline

The current public experimental folder already contains:

```text
evolver-evolution-version/
  index.html
  README.md
  VERSION
```

The current build is `v7.1.5-evolver`.

The baseline gameplay already includes:

- one-thumb hold/release timing;
- gold-zone signal lock;
- intent/privacy/consent/artifact decisions;
- multiple modes;
- XP, levels, badges, quests;
- daily streak;
- local leaderboard;
- downloadable local share card;
- copyable challenge links;
- safe local-only execution model.

`v9.3.2` should keep this core and refine it into a sharper public release.

---

## 3. Product rule for v9.3.2

The version number becomes the release rule:

### 9

Nine playable cognitive OS layers:

1. Boot
2. Signal
3. Gold Lock
4. Intent
5. Deadline
6. Privacy Vault
7. Consent Gate
8. Artifact Rejection
9. Brain OS Online

### 3

Three-second first action:

1. see the hero;
2. press **Run Evolver**;
3. hold the signal.

No manual should be required before the first interaction.

### 2

Two public loops:

1. **Run loop** — instant replay, score, XP, badges, local rival.
2. **Share loop** — result copy, PNG card, challenge seed, GitHub Pages path.

---

## 4. Public positioning

### Current problem

The experimental folder is technically present but under-positioned. The README says “standalone experimental build,” which is accurate but not strong enough for a public visitor.

### New positioning

Use this headline:

```text
Become the Brain OS: Evolver
```

Use this subheadline:

```text
A one-thumb browser game about the real operating-system layer between neural hardware and AI.
```

Use this core line:

```text
Hold signal. Release in gold. Capture intent. Deny raw neural leaks. Respect consent. Bring AxonOS online.
```

Use this honesty line:

```text
Educational simulation only. No sensors. No neural data. No backend. Local-only.
```

---

## 5. Required public run banner

Add a visible public run banner either to the root README or the root landing page:

```markdown
## Run the experimental Evolver build

[▶ Run Become the Brain OS: Evolver](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/)

A local-only browser game about signal stability, intent capture, privacy vaults, consent gates, and real-time neural OS deadlines.
```

This is the fastest improvement because it turns the GitHub folder from hidden code into a visible product artifact.

---

## 6. v9.3.2 feature set

### 6.1 Evolver hero

Replace generic hero copy with product-specific copy.

Required hero structure:

```text
AxonOS // Become the Brain OS
v9.3.2 · Evolver Public Run

Become the Brain OS: Evolver
Hold signal. Release in gold. Capture intent. Deny raw neural leaks. Respect consent. Bring AxonOS online.

[Run Evolver] [Daily Brain] [How it works]

local-only · no neural data · no backend · no analytics
```

### 6.2 Nine-layer release ladder

The current build has release/progression concepts. v9.3.2 formalizes them into nine cognitive OS layers.

```javascript
const RELEASE_LAYERS = [
  ['R1', 'Boot', 'Start the cognitive runtime'],
  ['R2', 'Signal', 'Hold to stabilize incoming signal'],
  ['R3', 'Gold Lock', 'Release inside the gold timing band'],
  ['R4', 'Intent', 'Capture the derived intent class'],
  ['R5', 'Deadline', 'Respond before the real-time window closes'],
  ['R6', 'Privacy Vault', 'Deny raw neural data access'],
  ['R7', 'Consent Gate', 'Respect revocation immediately'],
  ['R8', 'Artifact Rejection', 'Reject noise, phantom nodes, drift, and shock'],
  ['R9', 'Brain OS Online', 'Complete the run with stable, private intent flow']
];
```

### 6.3 Evolver difficulty model

Difficulty should adapt without feeling random.

Inputs:

- current stability;
- current leak count;
- best streak;
- stage number;
- chosen mode;
- deterministic seed.

Rules:

- early stages should be forgiving;
- privacy mistakes must be expensive;
- consent mistakes must be very expensive;
- artifact mistakes should reduce stability but not always end the run;
- high streak should tighten deadlines;
- low stability should slightly widen gold timing to allow recovery.

### 6.4 Neural Passport v2

Keep local progression but make it more AxonOS-branded.

Fields:

```text
Title
Level
XP
Best grade
Best streak
0-leak count
Daily streak
Badges
Last run seed
```

Suggested titles:

```text
Level 1-3:   Rookie Operator
Level 4-6:   Intent Operator
Level 7-9:   Signal Master
Level 10-13: Neural Strategist
Level 14-17: Vault Commander
Level 18+:   AxonOS Architect
```

### 6.5 Badge set

Required badges:

```text
First Run
0-Leak Run
Gold Lock x5
Combo x8
S-Rank Operator
Daily Brain
Vault Purist
Consent Guardian
Artifact Clear
Deadline Runner
AxonOS Online
```

### 6.6 Modes

Keep the current multi-mode architecture, but make labels more legible.

Recommended mode list:

| Mode | Duration | Purpose |
|---|---:|---|
| Evolver Run | 60s | default public run |
| Daily Brain | 60s | deterministic daily seed |
| Arcade Sprint | 42s | short replay loop |
| Focus Lock | 50s | calmer signal training |
| Artifact Rush | 72s | boss/artifact-heavy mode |
| Pressure Gate | 75s | high-deadline pressure |
| Zen Signal | 50s | soft showcase mode |
| Mars Challenge | 70s | brutal challenge mode |
| Perfect Launch | 45s | cinematic launch mode |

### 6.7 Boss/artifact set

Keep nine boss beats and make them canonical.

```text
Blink Spike
Muscle Noise
Cable Drift
Phantom Node
Neural Inertia
Motion Shock
Mirror Artifact
Consent Shock
Vault Mirage
```

Gameplay effect:

- `Blink Spike` — sudden visual waveform deviation;
- `Muscle Noise` — false high-confidence intent;
- `Cable Drift` — cursor movement becomes asymmetric;
- `Phantom Node` — fake “correct” choice appears;
- `Neural Inertia` — late input penalty grows;
- `Motion Shock` — stability hit if ignored;
- `Mirror Artifact` — reversed decision mapping for one prompt;
- `Consent Shock` — consent revocation appears mid-flow;
- `Vault Mirage` — permission request disguises raw data as harmless telemetry.

### 6.8 Privacy Vault v2

Permission events must teach the core AxonOS principle:

> Apps receive derived intent, not raw cognition.

Permission cards:

| Permission | Correct action | Reason |
|---|---|---|
| `raw.neural.signal` | Deny | raw neural data must never leave the boundary |
| `biometric.identity` | Deny | identity leak |
| `stimulus.write` | Deny | unsafe write path |
| `intent.class` | Allow | derived intent only |
| `intent.confidence` | Allow | bounded derived metadata |
| `telemetry.score.local` | Allow | local-only game score |
| `session.seed` | Allow | challenge seed, not neural data |
| `artifact.trace.raw` | Deny | raw artifact trace |
| `vault.audit.local` | Allow | local audit state |

### 6.9 Consent Gate v2

Consent must behave as a hard gate, not a soft notification.

Rules:

- if consent is revoked, the correct player response is stop/deny/respect;
- ignoring revocation adds a severe penalty;
- respecting revocation grants “Consent Guardian” progress;
- copy must avoid implying clinical or legal compliance.

### 6.10 Share card v2

The PNG share card must show:

```text
Grade
Score
Leaks
Avg latency
Best combo
Mode
Seed
Version v9.3.2
local-only · no raw neural data
```

Card copy:

```text
I ran a Brain OS. 0 leaks. Can you keep cognition private?
```

For non-perfect runs:

```text
I tried to run a Brain OS. The vault exposed my mistakes.
```

### 6.11 Result copy

Result line format:

```text
I ran Become the Brain OS: Evolver for {duration}s. {grade}-rank. {leaks} leaks. {latency}ms avg latency. {bestStreak}x combo. AxonOS v9.3.2 — local-only, no neural data.
```

Challenge link format:

```text
/evolver-evolution-version/?mode={mode}&seed={seed}
```

### 6.12 Kernel log polish

The log should feel like a real OS trace, not generic game text.

Examples:

```text
[00.00] boot.v9.3.2 mode=Evolver seed=v932-evolver-k9f3
[00.31] local_only=true analytics=false backend=false raw_neural_data=false
[02.14] signal.lock quality=91% latency=842ms
[03.02] intent.captured class=FOCUS confidence=0.87 deadline=OK
[04.77] vault.deny permission=raw.neural.signal result=BLOCKED
[07.44] consent.revoked result=RESPECTED
[10.81] artifact.reject type=phantom_node result=CLEARED
[60.00] brain_os.online grade=S leaks=0
```

---

## 7. Data model

Use a new localStorage namespace so v9.3.2 does not corrupt older local data.

```javascript
const VERSION = '9.3.2';
const STORE = 'axonos_v932_';
```

Required keys:

```text
axonos_v932_profile
axonos_v932_scores
axonos_v932_sound
axonos_v932_motion
axonos_v932_last_mode
```

Do not use cookies.

Do not create remote calls.

Do not add third-party scripts.

---

## 8. Non-claims

The game must never claim that it:

- reads a real brain;
- processes real EEG;
- connects to BCI hardware;
- is clinical software;
- is a medical device;
- provides diagnosis, therapy, rehabilitation, or safety certification;
- proves real AxonOS kernel guarantees;
- is FDA/CE/ISO/IEC approved;
- validates actual neural intent decoding.

Allowed wording:

```text
Educational browser game.
Simulated neural signal.
Teaches AxonOS concepts.
No real neural data.
Local-only.
```

Avoid wording:

```text
Real BCI demo.
Medical-grade.
Clinically validated.
Reads your brain.
Certified neurorights engine.
```

---

## 9. UI aesthetic

The visual direction is AxonOS digital luxury:

- black graphite background;
- muted gold accents;
- restrained cyan only for signal/online status;
- reduced glow density;
- no neon arcade clutter;
- high contrast on mobile;
- large touch targets;
- minimal but precise typography;
- premium technical instrument feel.

Reference mood:

```text
Patek Philippe interface discipline + aerospace mission console + BCI privacy vault.
```

---

## 10. Accessibility and mobile requirements

Required:

- first action visible above fold on Android;
- touch target minimum ~44px;
- no horizontal overflow;
- works in Chrome Android and mobile GitHub Pages WebView;
- `prefers-reduced-motion` honored;
- keyboard support retained;
- visible boot error if DOM IDs are missing;
- no dependency on hover.

Keyboard controls:

```text
Space / Enter — hold and release
1-4           — choose card
Esc           — pause/resume
```

---

## 11. Files to change

### Required

```text
evolver-evolution-version/index.html
evolver-evolution-version/README.md
evolver-evolution-version/VERSION
```

### Recommended

```text
evolver-evolution-version/RELEASE_NOTES_v9.3.2.md
evolver-evolution-version/SPEC_v9.3.2.md
```

### Optional root repo change

```text
README.md
```

Add a small run banner pointing to the experimental build.

---

## 12. README.md replacement for `evolver-evolution-version/`

```markdown
# Become the Brain OS: Evolver

**Version:** `v9.3.2-evolver`  
**Path:** `/evolver-evolution-version/`  
**Status:** experimental public run build

A one-thumb browser game about the operating-system layer between neural hardware and AI.

> Hold signal. Release in gold. Capture intent. Deny raw neural leaks. Respect consent. Bring AxonOS online.

## Run

From the repository root:

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/
```

GitHub Pages path:

```text
https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/
```

## What this build teaches

1. Signal stabilization.
2. Gold-zone timing.
3. Intent classification.
4. Hard real-time deadline pressure.
5. Neural permission boundaries.
6. Consent revocation.
7. Artifact rejection.
8. Local-only progression.
9. Brain OS launch.

## Game loop

```text
Hold signal → release inside gold → capture intent → enforce privacy vault → respect consent → reject artifacts → bring AxonOS online → share result
```

## Features

- Evolver Run default mode.
- Daily Brain deterministic challenge.
- Arcade Sprint replay loop.
- Focus Lock calmer training mode.
- Artifact Rush boss mode.
- Pressure Gate high-deadline mode.
- Zen Signal showcase mode.
- Mars Challenge brutal mode.
- Perfect Launch cinematic mode.
- Neural Passport: XP, levels, titles, badges.
- Local leaderboard.
- Copyable challenge seed.
- Downloadable local PNG share card.

## Privacy

This is an educational simulation.

It does **not** read, collect, infer, transmit, or process real neural data.

Runtime posture:

- single `index.html`;
- no backend;
- no analytics;
- no trackers;
- no external scripts;
- no cookies;
- localStorage only for scores, settings, badges, streaks, and local progression.

## Non-claim

This game is not the AxonOS kernel, not medical software, and not a clinical BCI system. It is a public educational front door for AxonOS concepts.

---

The AxonOS Project · axonos.org · GitHub: AxonOS-org
```

---

## 13. VERSION file

`evolver-evolution-version/VERSION` must contain exactly:

```text
v9.3.2-evolver
```

---

## 14. Release notes

```markdown
# Become the Brain OS v9.3.2 — Evolver Public Run Release

## Release intent

v9.3.2 promotes the Evolver experimental build into a cleaner public run surface for AxonOS.

The release focuses on clarity, replayability, privacy posture, and direct GitHub Pages usability.

## Product rule

- 9 cognitive OS layers.
- 3-second first action.
- 2 public loops: replay and share.

## Highlights

- Repositioned the build as **Become the Brain OS: Evolver**.
- Added direct public-run framing for GitHub Pages.
- Formalized the nine-layer cognitive OS ladder.
- Refined Neural Passport progression.
- Expanded privacy-vault permissions.
- Strengthened consent-gate behavior.
- Preserved local-only architecture.
- Preserved single-file deployment.
- Improved share copy and result identity.
- Kept strict non-claims around neural data and medical use.

## Runtime model

- Single `index.html`.
- Vanilla JavaScript.
- Canvas rendering.
- Optional Web Audio.
- No backend.
- No analytics.
- No trackers.
- No external scripts.
- localStorage only.
- No real neural data.

## Suggested signed commit

```bash
git add evolver-evolution-version
git commit -S -m "game: release Evolver public run v9.3.2"
```

## Suggested signed tag

```bash
git tag -s v9.3.2-evolver -m "Become the Brain OS v9.3.2 — Evolver Public Run Release"
git push origin main
git push origin v9.3.2-evolver
```
```

---

## 15. Implementation patch checklist

### HTML metadata

Change:

```html
<title>AxonOS — Become the OS · educational game (experimental)</title>
```

To:

```html
<title>Become the Brain OS: Evolver · AxonOS v9.3.2</title>
```

Update description:

```html
<meta name="description" content="Become the Brain OS: Evolver is a local-only educational browser game about signal stability, intent capture, neural permissions, consent gates, artifact rejection, and real-time AxonOS concepts. No sensors. No neural data. No backend." />
```

### Version constants

Change:

```javascript
const VERSION='7.1.5';
const STORE='axonos_v715_';
```

To:

```javascript
const VERSION='9.3.2';
const STORE='axonos_v932_';
```

### Seed prefix

Change any seed prefix like:

```javascript
'v715-'
```

To:

```javascript
'v932-'
```

### Share card filename

Change:

```javascript
axonos-v715-share-card.png
```

To:

```javascript
axonos-v932-evolver-share-card.png
```

### Topbar copy

Change:

```text
v7.1.5 · educational game
```

To:

```text
v9.3.2 · Evolver Public Run
```

### Hero heading

Change generic:

```text
AxonOS
```

To:

```text
Become the Brain OS: Evolver
```

### CTA

Change:

```text
Start
```

To:

```text
Run Evolver
```

### Footer copy

Required footer line:

```text
A game by The AxonOS Project · axonos.org · v9.3.2 · local-only · reads no neural data
```

---

## 16. Acceptance checks

Before commit:

```bash
cd ~/axonos-work/become-the-brain-os
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/
```

Manual QA:

1. Page loads with no boot error.
2. Topbar shows `v9.3.2`.
3. `VERSION` file shows `v9.3.2-evolver`.
4. First action is visible without scrolling on mobile.
5. Run starts from **Run Evolver**.
6. Hold/release works by touch.
7. Space/Enter works on keyboard.
8. Intent cards work.
9. Raw neural permission must be denied.
10. Consent revoke must be respected.
11. At least one artifact event appears in artifact-heavy mode.
12. End screen shows grade, score, latency, leaks, stability, XP, badge.
13. Copy result works or fails safely.
14. Copy challenge works or fails safely.
15. Download card works or fails safely.
16. Local leaderboard persists after reload.
17. No external network requests are introduced by the game code.
18. No copy claims that real neural data is read.

Static QA:

```bash
python3 - <<'PY'
from pathlib import Path
import re
html = Path('evolver-evolution-version/index.html').read_text(encoding='utf-8')
ids = re.findall(r'id="([^"]+)"', html)
assert len(ids) == len(set(ids)), 'duplicate DOM ids found'
assert "const VERSION='9.3.2'" in html or 'const VERSION="9.3.2"' in html
assert "axonos_v932_" in html
assert 'reads no neural data' in html.lower() or 'no neural data' in html.lower()
print('PASS: v9.3.2 static checks')
PY
```

JavaScript syntax check:

```bash
python3 - <<'PY'
from pathlib import Path
import re
html = Path('evolver-evolution-version/index.html').read_text(encoding='utf-8')
parts = re.findall(r'<script>([\s\S]*?)</script>', html)
Path('/tmp/axonos_v932_check.js').write_text('\n'.join(parts), encoding='utf-8')
print('/tmp/axonos_v932_check.js')
PY
node --check /tmp/axonos_v932_check.js
```

---

## 17. Termux implementation script

Save as:

```text
release_v9_3_2_evolver.sh
```

Script:

```bash
#!/data/data/com.termux/files/usr/bin/bash
set -Eeuo pipefail

REPO_DIR="${REPO_DIR:-$HOME/axonos-work/become-the-brain-os}"
BRANCH="${BRANCH:-release/evolver-v9.3.2}"
TAG="${TAG:-v9.3.2-evolver}"

say() { printf '\n== %s ==\n' "$*"; }
fail() { echo "ERROR: $*" >&2; exit 1; }

say "Prepare repository"
cd "$REPO_DIR" || fail "repo not found: $REPO_DIR"
git rev-parse --is-inside-work-tree >/dev/null || fail "not inside git repo"

git fetch origin main
git checkout main
git pull --ff-only origin main
git checkout -B "$BRANCH"

say "Check target files"
[ -f evolver-evolution-version/index.html ] || fail "missing evolver-evolution-version/index.html"
[ -f evolver-evolution-version/README.md ] || fail "missing evolver-evolution-version/README.md"
[ -f evolver-evolution-version/VERSION ] || fail "missing evolver-evolution-version/VERSION"

say "Backup current evolver build"
mkdir -p .release-backups/v9.3.2-evolver
cp evolver-evolution-version/index.html .release-backups/v9.3.2-evolver/index.backup.html
cp evolver-evolution-version/README.md .release-backups/v9.3.2-evolver/README.backup.md
cp evolver-evolution-version/VERSION .release-backups/v9.3.2-evolver/VERSION.backup

say "Update VERSION"
printf 'v9.3.2-evolver\n' > evolver-evolution-version/VERSION

say "Patch index.html text and namespace"
python3 - <<'PY'
from pathlib import Path
p = Path('evolver-evolution-version/index.html')
s = p.read_text(encoding='utf-8')
repl = {
    'v7.1.5 · educational game': 'v9.3.2 · Evolver Public Run',
    'v7.1.5': 'v9.3.2',
    "const VERSION='7.1.5';": "const VERSION='9.3.2';",
    "const STORE='axonos_v715_';": "const STORE='axonos_v932_';",
    'v715-': 'v932-',
    'axonos-v715-share-card.png': 'axonos-v932-evolver-share-card.png',
    'AxonOS — Become the OS · educational game (experimental)': 'Become the Brain OS: Evolver · AxonOS v9.3.2',
    'Hold. Release in gold. Choose correctly.': 'Hold signal. Release in gold. Capture intent.',
    'Start</button>': 'Run Evolver</button>',
    '<h2>AxonOS</h2>': '<h2>Become the Brain OS: Evolver</h2>',
}
for a,b in repl.items():
    s = s.replace(a,b)
# Strengthen meta description if present
old = 'An educational browser game about how AxonOS — a real-time operating system for brain–computer interfaces — handles signal, intent decoding, and privacy. Not a medical device and reads no neural data. Local-only.'
new = 'Become the Brain OS: Evolver is a local-only educational browser game about signal stability, intent capture, neural permissions, consent gates, artifact rejection, and real-time AxonOS concepts. No sensors. No neural data. No backend.'
s = s.replace(old,new)
p.write_text(s, encoding='utf-8')
PY

say "Write README"
cat > evolver-evolution-version/README.md <<'EOF_README'
# Become the Brain OS: Evolver

**Version:** `v9.3.2-evolver`  
**Path:** `/evolver-evolution-version/`  
**Status:** experimental public run build

A one-thumb browser game about the operating-system layer between neural hardware and AI.

> Hold signal. Release in gold. Capture intent. Deny raw neural leaks. Respect consent. Bring AxonOS online.

## Run

From the repository root:

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/
```

GitHub Pages path:

```text
https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/
```

## Runtime posture

- Single `index.html`
- No backend
- No analytics
- No trackers
- No external scripts
- No cookies
- localStorage only
- No real neural data

## Non-claim

This game is not the AxonOS kernel, not medical software, and not a clinical BCI system. It is a public educational front door for AxonOS concepts.
EOF_README

say "Write release notes"
cat > evolver-evolution-version/RELEASE_NOTES_v9.3.2.md <<'EOF_NOTES'
# Become the Brain OS v9.3.2 — Evolver Public Run Release

## Release intent

v9.3.2 promotes the Evolver experimental build into a cleaner public run surface for AxonOS.

## Product rule

- 9 cognitive OS layers.
- 3-second first action.
- 2 public loops: replay and share.

## Highlights

- Repositioned the build as Become the Brain OS: Evolver.
- Added direct public-run framing for GitHub Pages.
- Refined local-only privacy posture.
- Preserved single-file architecture.
- Preserved no-backend, no-analytics, no-real-neural-data constraints.

## Suggested tag

```bash
git tag -s v9.3.2-evolver -m "Become the Brain OS v9.3.2 — Evolver Public Run Release"
```
EOF_NOTES

say "Static checks"
python3 - <<'PY'
from pathlib import Path
import re
html = Path('evolver-evolution-version/index.html').read_text(encoding='utf-8')
ids = re.findall(r'id="([^"]+)"', html)
if len(ids) != len(set(ids)):
    dup = sorted({x for x in ids if ids.count(x)>1})
    raise SystemExit('duplicate ids: ' + ', '.join(dup))
if '9.3.2' not in html:
    raise SystemExit('version text not found')
if 'axonos_v932_' not in html:
    raise SystemExit('storage namespace not found')
print('PASS: static checks')
PY

if command -v node >/dev/null 2>&1; then
  say "JS syntax check"
  python3 - <<'PY'
from pathlib import Path
import re
html = Path('evolver-evolution-version/index.html').read_text(encoding='utf-8')
parts = re.findall(r'<script>([\s\S]*?)</script>', html)
Path('/tmp/axonos_v932_check.js').write_text('\n'.join(parts), encoding='utf-8')
PY
  node --check /tmp/axonos_v932_check.js
else
  echo "WARN: node not found; JS syntax check skipped"
fi

say "Git status"
git status --short

git add evolver-evolution-version
if git diff --cached --quiet; then
  echo "No changes staged"
else
  git commit -S -m "game: release Evolver public run v9.3.2"
fi

if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Tag already exists: $TAG"
else
  git tag -s "$TAG" -m "Become the Brain OS v9.3.2 — Evolver Public Run Release"
fi

echo
echo "Local preview:"
echo "  python3 -m http.server 8080"
echo "  http://localhost:8080/evolver-evolution-version/"
echo
echo "Push:"
echo "  git push -u origin $BRANCH"
echo "  git push origin $TAG"
```

---

## 18. Suggested commit sequence

```bash
cd ~/axonos-work/become-the-brain-os
nano release_v9_3_2_evolver.sh
chmod +x release_v9_3_2_evolver.sh
bash release_v9_3_2_evolver.sh
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/evolver-evolution-version/
```

Then push:

```bash
git push -u origin release/evolver-v9.3.2
git push origin v9.3.2-evolver
```

If you want this directly in `main` after local QA:

```bash
git checkout main
git merge --ff-only release/evolver-v9.3.2
git push origin main
git push origin v9.3.2-evolver
```

---

## 19. Final release definition

`v9.3.2` is successful when a first-time visitor can open the GitHub Pages path, understand in three seconds that this is a game about the AxonOS brain operating-system layer, play without instructions, finish a run, copy/share a result, and leave with the correct technical impression:

```text
AxonOS is the privacy-first, real-time OS layer between neural hardware and AI.
```

Not:

```text
AxonOS is a generic AI-agent UI.
```

Not:

```text
This game reads a real brain.
```
