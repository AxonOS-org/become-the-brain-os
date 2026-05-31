# Gameplay Specification — v12.2.9

## Product goal

Make the AxonOS concept playable by a first-time mobile user.

## Primary loop

```text
Signal Lock -> Intent Routing -> Feedback -> Next Node
```

## Difficulty model

- Guided: forgiving, high time allowance, clear prompts.
- Run: balanced.
- Sprint: shorter and higher multiplier.
- Zen: no hard card timer.

## Failure model

No hard fail. A failed action becomes feedback and the mission continues.

## Scoring

- Signal quality gives partial or full points.
- Correct routing gives points.
- Leaks penalize final score.
- Timeout does not create raw leak; it uses safe fallback.
