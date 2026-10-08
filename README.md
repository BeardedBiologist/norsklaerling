# NorskLærling

A personal Norwegian trainer for getting from A1 to **B1/B2** — built around the two
exams required for Norwegian citizenship
([norskprøven](https://prove.hkdir.no/en/norwegian-language-test-a1-b2) with oral B1,
and the [statsborgerprøven](https://prove.hkdir.no/en/norwegian-citizenship-test):
36 questions, 24 correct to pass, 60 minutes).

## Modules

| Route | Module | What it does |
|---|---|---|
| `/` | Dashboard | Streak, words due, learned count, exam facts |
| `/kurs` | Nybegynnerkurs | 12 A1–A2 chapters sequenced after NTNU's free [LearnNoW](https://www.ntnu.edu/learnnow) course: grammar, chapter words, pronunciation, speaking prompts, chapter quiz + sentence drills, and links to LearnNoW's dialogues with audio. `?kapittel=N` on `/ord`, `/quiz` and `/setninger` narrows those modules to one chapter |
| `/ord` | Ordforråd | 2000+ flashcards (A2–B2) with SM-2 spaced repetition, example sentences and Norwegian text-to-speech |
| `/setninger` | Setningsbygging | 120 word-tile sentence drills for V2 inversion, `ikke` placement, subordinate clauses |
| `/quiz` | Grammatikkquiz | 40 norskprøve-style multiple-choice grammar questions with explanations |
| `/statsborger` | Statsborgerprøven | Practice mode with English aid + full exam simulation (36 questions, 60-minute timer, pass at 24) |

Progress (SRS schedule, streak, quiz history, exam attempts) persists in
`localStorage` — no backend needed.

## Stack

Vue 3 + TypeScript + Pinia + vue-router + Tailwind CSS v4 + Vite.

## Develop

```sh
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
```

## Adding content

All learning content lives in `src/data/`:

- `kurs/` — Nybegynnerkurs chapters. Explanations and exercises are our own;
  only the topic sequence, dialogue titles and links come from LearnNoW (its
  texts and audio are NTNU's and are linked, not copied). `chapter-words.ts`
  maps older cards to the chapter that introduces them.
- `vocabulary.ts` + `vocab-a1/a2/b1/b2.ts` — flashcards (keep the `en`/`ei`/`et` gender
  field for nouns). **Never change or reuse an existing card id** — users' SRS
  progress in Firestore is keyed by id. New words get new ids in the level files.
- `sentences.ts` — sentence drills (the `no` field splits on spaces into tiles)
- `grammarQuiz.ts` / `citizenship.ts` — multiple choice; **the correct answer is
  always index 0 in the data** and options are shuffled at runtime.
