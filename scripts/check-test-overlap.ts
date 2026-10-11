/**
 * Checks that no kapittelprøve item repeats a practice item: quiz
 * questions, sentences, listening questions and speaking prompts must all
 * differ from the chapter's own exercises. Also checks every chapter has a
 * full bank. Run: npx tsx scripts/check-test-overlap.ts
 */
import { kurs } from '../src/data/kurs'
import { listeningFor } from '../src/data/kurs/listening'
import { speakingTasksFor } from '../src/data/kurs/speaking'
import { oralPlan, testBankFor } from '../src/data/kurs/tests'

const norm = (s: string) => s.toLowerCase().replace(/[^a-zæøå0-9 ]/g, '').replace(/\s+/g, ' ').trim()
let problems = 0
const flag = (msg: string) => {
  problems++
  console.log('✗', msg)
}

// practice material across all chapters (a test item shouldn't repeat any of it)
const quizKey = (q: { question: string; options: string[] }) => norm(q.question + ' ' + [...q.options].sort().join(' '))
const practiceQuiz = new Set(kurs.flatMap((c) => c.quiz.map((q) => norm(q.question))))
const practiceQuizFull = new Set(kurs.flatMap((c) => c.quiz.map(quizKey)))
const practiceSent = new Set(kurs.flatMap((c) => c.sentences.map((s) => norm(s.no))))
const practiceListen = new Set(kurs.flatMap((c) => listeningFor(c).flat().map((q) => norm(q.q))))
const practiceSpeak = new Set(kurs.flatMap((c) => speakingTasksFor(c).map((t) => norm(t.prompt))))
const ids = new Set<string>()

for (const c of kurs) {
  const b = testBankFor(c)
  if (!b) {
    flag(`${c.id}: no test bank`)
    continue
  }
  const p = oralPlan(c)
  if (b.quiz.length < 6) flag(`${c.id}: only ${b.quiz.length} quiz items`)
  if (b.sentences.length < 5) flag(`${c.id}: only ${b.sentences.length} sentences`)
  if (b.listening.length !== c.dialogues.length) flag(`${c.id}: ${b.listening.length} listening groups for ${c.dialogues.length} texts`)
  if (b.oral.filter((t) => t.type !== 'samtale').length < p.monologues) flag(`${c.id}: too few oral answers`)
  if (b.oral.filter((t) => t.type === 'samtale').length < p.conversations) flag(`${c.id}: too few oral conversations`)

  for (const x of [...b.quiz, ...b.sentences, ...b.oral]) {
    if (ids.has(x.id)) flag(`duplicate id ${x.id}`)
    ids.add(x.id)
  }
  for (const q of b.quiz) {
    // generic stems («Which is correct?») may recur, but not with the same options
    const generic = /^(which|where|choose|velg)/i.test(q.question)
    if ((practiceQuiz.has(norm(q.question)) && !generic) || practiceQuizFull.has(quizKey(q))) flag(`${c.id} quiz repeats practice: ${q.question}`)
    if (q.answer !== 0) flag(`${c.id} ${q.id}: answer not at index 0`)
  }
  for (const s of b.sentences) if (practiceSent.has(norm(s.no))) flag(`${c.id} sentence repeats practice: ${s.no}`)
  b.listening.flat().forEach((q) => {
    if (practiceListen.has(norm(q.q))) flag(`${c.id} listening repeats practice: ${q.q}`)
    if (q.answer !== 0) flag(`${c.id} listening answer not at index 0: ${q.q}`)
  })
  for (const t of b.oral) if (practiceSpeak.has(norm(t.prompt))) flag(`${c.id} oral repeats practice: ${t.prompt}`)
}

console.log(problems ? `\n${problems} problem(s)` : `✓ ${kurs.length} chapters: no test item repeats a practice item`)
process.exit(problems ? 1 : 0)
