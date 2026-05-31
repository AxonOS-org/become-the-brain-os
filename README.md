# Become the Brain OS

[![Play Evolver](https://img.shields.io/badge/%E2%96%B6%20Play-Become%20the%20Brain%20OS%3A%20Evolver-0a4a8f?style=for-the-badge&labelColor=050509)](https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.9)
![version](https://img.shields.io/badge/version-v9.3.9--evolver-0a4a8f?style=flat-square)
![local-only](https://img.shields.io/badge/local--only-no%20backend-0d7a5f?style=flat-square)
![neural data](https://img.shields.io/badge/neural%20data-none-0d7a5f?style=flat-square)

**Become the Brain OS: Evolver** is the public educational game for the AxonOS project.

Current build:

```text
v9.3.9-evolver
```

Live path:

```text
https://axonos-org.github.io/become-the-brain-os/evolver-evolution-version/?v=9.3.9
```

## What this game teaches

AxonOS is positioned as the operating-system layer between neural hardware and AI. This game turns that idea into a strict local-only simulation:

1. stabilize a synthetic signal;
2. release inside the gold timing window;
3. select derived intent, not raw neural data;
4. enforce neural permissions;
5. stop immediately on consent revocation;
6. reject artifacts before they become intent;
7. preserve local-only privacy.

## v9.3.9 QA stabilization

This release fixes issues found during real play-testing of the v9.3.x line:

- result/version metadata consistency;
- logical hold disable state instead of relying on `div.disabled` behavior;
- pointer ownership on cancel/release;
- `lostpointercapture` false cancellation after successful release;
- privacy-denial quest scoring;
- install validation false positives;
- CI validation target path;
- archive manifest clarity.

## Non-claim boundary

This is a game. It is not a medical device, not a BCI, not the AxonOS kernel, and does not read neural data.

## Validate

```bash
python3 scripts/validate_v9_3_9.py
```

## Deploy

```bash
bash scripts/install_v9_3_9_from_download.sh
```

Licensed under Apache-2.0 OR MIT.
