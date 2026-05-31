# Gameplay Spec v12.7.4-evolver

## Core loop

```text
home -> hold -> choose -> resolving -> result
```

## Design rules

- Player must always know the next action.
- Mistakes teach; they do not dead-end the run.
- Timeout triggers safe fallback.
- UI must remain visible even if runtime fails.
