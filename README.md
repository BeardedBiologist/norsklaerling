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
| `/kurs` | Reisen | The journey: one path from A1 chapter 1 to B1 chapter 10, each chapter is a checklist of items in six steps (listen & understand → grammar → words → practise → speak → kapittelprøve); items tick off automatically (grammar sections by hand) and sync with the account (`src/lib/journey.ts`, `progress.kursSteps`). A chapter is passed only by its test at `/kurs/:id/prove` (listening, grammar, sentence building, dictation; 80 % to pass), which unlocks the next chapter; the test can be taken at any time to test out. The home page resumes at the exact next item. Course details: Nybegynnerkurs: 12 A1–A2 chapters after NTNU's free [LearnNoW](https://www.ntnu.edu/learnnow); B1-kurs (`/kurs?kurs=b1`): 10 A2–B1 chapters after [NoW2](https://www.ntnu.edu/now2). Each chapter has: NTNU's recordings with our own comprehension questions (`listening-*.ts`), grammar, chapter words, pronunciation, speaking prompts, chapter quiz + sentence drills, and links to NTNU's texts with audio. `?kapittel=<id>` (e.g. `3`, `b1-3`) on `/ord`, `/quiz` and `/setninger` narrows those modules to one chapter |
| `/ord` | Ordforråd | 2000+ flashcards (A2–B2) with SM-2 spaced repetition, example sentences and Norwegian text-to-speech |
| `/setninger` | Setningsbygging | 120 word-tile sentence drills for V2 inversion, `ikke` placement, subordinate clauses |
| `/quiz` | Grammatikkquiz | 40 norskprøve-style multiple-choice grammar questions with explanations |
| `/lytt` | Lytt og snakk | Dictation, hear-and-repeat, say-it-in-Norwegian (graded word by word via the browser's speech recognition) and free speaking with recording + transcript. Chapter dialogues and ~1,700 word pronunciations stream NTNU's own recordings from hf.ntnu.no (`src/lib/audio.ts`, `word-audio.json`) |
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

- `kurs/` — course chapters (`chapters-*.ts` = Nybegynner, `b1-chapters-*.ts` = B1). Explanations and exercises are our own;
  only the topic sequence, text titles and links come from LearnNoW/NoW2 (their
  texts and audio are NTNU's and are linked, not copied). `chapter-words.ts`
  maps older cards to the chapter that introduces them.
- `vocabulary.ts` + `vocab-a1/a2/b1/b1k/b2.ts` — flashcards (keep the `en`/`ei`/`et` gender
  field for nouns). **Never change or reuse an existing card id** — users' SRS
  progress in Firestore is keyed by id. New words get new ids in the level files.
- `sentences.ts` — sentence drills (the `no` field splits on spaces into tiles)
- `grammarQuiz.ts` / `citizenship.ts` — multiple choice; **the correct answer is
  always index 0 in the data** and options are shuffled at runtime.
