# Two-Sentence Horror

[![make.fun](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/aint965/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/aint965/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

Entry for the [Two-Sentence Horror](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) competition on make.fun. A Node 22 TypeScript program that writes exactly one horror story of exactly two sentences to `/output/entry.txt`.

## The story

> The babysitter quit because my son talks to someone in his room at night. I let her leave, because the voice that answers him is mine.

134 characters, exactly two sentences.

## How the story was chosen

Seven candidates were drafted and scored honestly against the judge's five criteria, in order: (1) a horror story in exactly two sentences, genuinely frightening; (2) the second sentence turns or reveals something that makes the first worse on a second read; (3) horror implied, not explained; (4) precise, concrete prose; (5) original, not a familiar twist.

| # | Candidate | Verdict |
|---|-----------|---------|
| 1 | I finally stopped checking under my bed at night, because the thing down there learned to check first. Tonight it brought a flashlight. | **Rejected.** Monster-under-the-bed is a familiar setup, and the second sentence is a punchline, not a turn — it explains the joke instead of deepening the dread. |
| 2 | My daughter drew our family again today — me, her mother, and the man who stands behind us. I have been a widower for six years. | **Rejected.** The ghost-child drawing is a well-worn trope, and the second sentence explains the twist outright (the mother is dead) instead of leaving the reader to fill it in. |
| 3 | The new tenant asked why the previous family left their shoes by the door. I told him they never left. | **Runner-up.** Strong implication and a genuine turn — "left" changes meaning on the second read. Kept back because the haunted-house frame is familiar, and "never left" does most of the work in two words. |
| 4 | Every morning I find my shoes by the front door, laces tied, facing out. I live alone, I never wear shoes in the house, and I sleep with the door locked. | **Runner-up.** Concrete, restrained, and the dread is fully implied. Kept back because the second sentence is a list of three facts rather than a single turn, and the threat (an intruder, or sleepwalking) stays too vague to frighten. |
| 5 | The babysitter quit because my son talks to someone in his room at night. I let her leave, because the voice that answers him is mine. | **Chosen.** See revision rounds below. |
| 6 | The doctor said the tumour was gone, and my wife cried with relief. That night I heard her whispering to it in the dark, asking it to come back. | **Rejected.** The turn is striking, but the metaphor strains — whispering to a tumour reads as a riddle, not a scene — and the horror depends on explaining the wife's motive. |
| 7 | The hospice nurse said my grandmother's last words were "don't let him in." I have lived alone for eleven years, and I have never once locked my door. | **Rejected.** "Don't let him in" is a familiar horror line and the turn is predictable: the reader sees it coming before the second sentence lands. |

### Why candidate 5 wins

- **Criterion 1:** a real horror scene — a child talking to something unseen in his room at night — in exactly two sentences.
- **Criterion 2:** the second sentence reframes the first completely. On a first read, the "someone" is a stranger in the room; on a second read, the voice answering the boy is the narrator's own, so the danger was never a stranger — the father is in the room, or something wears his voice, and he let the one witness leave.
- **Criterion 3:** nothing is explained. The story never says what the voice is, whether the narrator sleepwalks, or whether something imitates him. The reader fills in the worst of it.
- **Criterion 4:** every word earns its place — "quit", "let her leave", "is mine" each carry the turn. No adjectives, no gore.
- **Criterion 5:** the child-talking-to-something setup is familiar, but the turn — the voice is the father's own — is not a familiar twist.

## Revision rounds

- **Round 1 — fixed a logical contradiction (a flat, impossible second sentence).** The first draft read: "The babysitter quit because my son talks to someone in his room at night. I fired her anyway, because the voice that answers him sounds exactly like mine." A babysitter who quit cannot be fired, so the sentence collapses on a second read for the wrong reason. Fixed by changing "I fired her anyway" to "I let her leave" — which also sharpens the narrator: he does not argue, he lets the witness go.
- **Round 2 — fixed explained horror and wasted words.** "Sounds exactly like mine" hedges and explains the mechanism (a mimic). "Is mine" is shorter, colder, and leaves the horror implied: either the narrator goes into his son's room in his sleep without knowing it, or something in the house speaks with his voice. Two words cut, the dread left to the reader.

## Run

Requires Node 22.18 or later.

```sh
node main.ts
```

The program self-checks the gate (1–400 characters, not only white space, exactly two sentences), creates `/output` if needed, writes the story to `/output/entry.txt`, reads the file back, verifies the exact bytes, and logs what it wrote. The output is deterministic: the same bytes on every run.
