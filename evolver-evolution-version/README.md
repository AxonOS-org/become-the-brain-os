# Experimental builds — awaiting refinement

This folder holds **experimental builds** of the *Become the OS* educational
game. They are work-in-progress prototypes, kept here for iteration and not yet
promoted to the live game.

> **The canonical, deployed game is the root `index.html`** of this repository
> (*Become the OS*, v0.3.3). These experimental builds do **not** replace it.

## What this build is

`index.html` is a standalone, single-file build (currently **v7.1.5**) that
explores a more elaborate shape for the game:

- a home screen with multiple modes (Run, Daily, Sprint, Focus, Artifacts,
  Pressure, Signal, Challenge);
- a hold-and-release timing core — stabilise the signal, release inside the
  gold zone;
- intent, privacy-vault, consent, and artifact decisions under a deadline;
- progression: XP, levels, badges, quests, a daily streak, and a local
  leaderboard;
- a shareable result card and copyable challenge seeds.

It is **experimental**: balance, copy, and UI are still being tuned, and it has
not had the review the root build has.

## Honesty

This is an **educational game**. AxonOS is a real open-source real-time
operating system for brain-computer interfaces; the game teaches its ideas and
is **not the software itself**. It reads **no neural data**, has no backend and
no analytics, and stores scores, XP, badges, and settings **locally on your
device only**.

## Run locally

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/evolver-evolution-version/
```

## Status

| Property        | Value                                    |
|:----------------|:-----------------------------------------|
| Stage           | Experimental - awaiting refinement       |
| Build           | Single `index.html`, no external scripts |
| Backend         | None                                     |
| Analytics       | None                                     |
| Storage         | Local device only                        |
| Neural data     | None - reads nothing                     |

---

The AxonOS Project · [axonos.org](https://axonos.org) · connect@axonos.org · security@axonos.org
[medium.com/@AxonOS](https://medium.com/@AxonOS) · [github.com/AxonOS-org](https://github.com/AxonOS-org)
Singapore · Zurich · Berlin · Milano · San Mateo
