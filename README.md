# NorskLærling

A personal Norwegian trainer for getting from A2 to **B1/B2** — built around the two
exams required for Norwegian citizenship
([norskprøven](https://prove.hkdir.no/en/norwegian-language-test-a1-b2) with oral B1,
and the [statsborgerprøven](https://prove.hkdir.no/en/norwegian-citizenship-test):
36 questions, 24 correct to pass, 60 minutes).

## Modules

| Route | Module | What it does |
|---|---|---|
| `/` | Dashboard | Streak, words due, learned count, exam facts |
| `/ord` | Ordforråd | 160 flashcards (A2–B2) with SM-2 spaced repetition, example sentences and Norwegian text-to-speech |
| `/setninger` | Setningsbygging | Word-tile sentence building drilling V2 inversion, `ikke` placement, subordinate clauses |
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

- `vocabulary.ts` — flashcards (keep the `en`/`ei`/`et` gender field for nouns)
- `sentences.ts` — sentence drills (the `no` field splits on spaces into tiles)
- `grammarQuiz.ts` / `citizenship.ts` — multiple choice; **the correct answer is
  always index 0 in the data** and options are shuffled at runtime.
