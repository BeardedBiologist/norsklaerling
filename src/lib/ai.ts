/**
 * Spoken-Norwegian feedback from Google's Gemini through Firebase AI Logic.
 * Uses the Gemini Developer API free tier (no billing account needed); the
 * request goes straight from the browser via the Firebase SDK, so there is
 * no server and no secret key in the code. The recording itself is sent
 * along with the browser's transcript, so Gemini can judge pronunciation
 * as well as grammar.
 *
 * Setup (once): Firebase console → AI Logic → Get started → Gemini Developer API.
 */
import { getAI, getGenerativeModel, GoogleAIBackend, Schema, type GenerativeModel } from 'firebase/ai'
import { firebaseApp } from './firebase'
import { blobToWavBase64 } from './wav'

/** tried in order — the second is a lighter fallback if the first is unavailable or rate-limited */
const MODELS = ['gemini-3.5-flash', 'gemini-3.5-flash-lite']

export function aiAvailable(): boolean {
  return firebaseApp !== null
}

const errorSchema = Schema.object({
  properties: {
    said: Schema.string({ description: 'the words exactly as the learner said them' }),
    correct: Schema.string({ description: 'the corrected Norwegian' }),
    type: Schema.enumString({ enum: ['ordstilling', 'bøyning', 'ordvalg', 'uttale', 'annet'] }),
    explanation: Schema.string({ description: 'short explanation in English' }),
  },
})

const freeSchema = Schema.object({
  properties: {
    heard: Schema.string({ description: 'what the learner said, transcribed from the audio in Norwegian bokmål' }),
    corrected: Schema.string({ description: 'the whole answer rewritten as natural, correct bokmål, keeping the learner’s meaning and level' }),
    errors: Schema.array({ items: errorSchema }),
    pronunciation: Schema.object({
      properties: {
        score: Schema.integer({ description: '1–5, how easy the speech is to understand for a Norwegian' }),
        notes: Schema.array({
          items: Schema.object({
            properties: { word: Schema.string(), issue: Schema.string({ description: 'what to fix, in English' }) },
          }),
        }),
      },
    }),
    scores: Schema.object({
      properties: {
        task: Schema.integer({ description: '1–5: answers the question that was asked' }),
        coherence: Schema.integer({ description: '1–5: ideas linked, uses connectors' }),
        vocabulary: Schema.integer({ description: '1–5: range and precision' }),
        grammar: Schema.integer({ description: '1–5: accuracy' }),
        fluency: Schema.integer({ description: '1–5: flow, length, few long pauses' }),
      },
    }),
    level: Schema.enumString({ enum: ['A1', 'A2', 'B1', 'B2'] }),
    praise: Schema.string({ description: 'one short encouraging sentence in simple Norwegian about what went well' }),
    tip: Schema.string({ description: 'the single most useful thing to work on next, in English' }),
  },
})

const sentenceSchema = Schema.object({
  properties: {
    heard: Schema.string({ description: 'what the learner said or wrote' }),
    correct: Schema.boolean({ description: 'true if the answer is acceptable for this exercise (see the task rules)' }),
    corrected: Schema.string({ description: 'the best correct Norwegian version of what the learner was trying to say' }),
    errors: Schema.array({ items: errorSchema }),
    pronunciationScore: Schema.integer({ description: '1–5, how Norwegian it sounds; 0 if there is no recording' }),
    notes: Schema.array({
      items: Schema.object({
        properties: { word: Schema.string(), issue: Schema.string({ description: 'what to fix, in English' }) },
      }),
    }),
    tip: Schema.string({ description: 'one concrete tip in English' }),
  },
})

export interface FreeFeedback {
  heard: string
  corrected: string
  errors: { said: string; correct: string; type: 'ordstilling' | 'bøyning' | 'ordvalg' | 'uttale' | 'annet'; explanation: string }[]
  pronunciation: { score: number; notes: { word: string; issue: string }[] }
  scores: { task: number; coherence: number; vocabulary: number; grammar: number; fluency: number }
  level: 'A1' | 'A2' | 'B1' | 'B2'
  praise: string
  tip: string
}

export interface SentenceFeedback {
  heard: string
  correct: boolean
  corrected: string
  errors: FreeFeedback['errors']
  pronunciationScore: number
  notes: { word: string; issue: string }[]
  tip: string
}

function model(name: string, schema: ReturnType<typeof Schema.object>): GenerativeModel {
  const ai = getAI(firebaseApp!, { backend: new GoogleAIBackend() })
  return getGenerativeModel(ai, {
    model: name,
    generationConfig: { responseMimeType: 'application/json', responseSchema: schema, temperature: 0.2 },
  })
}

const NO_AUDIO = `
NO RECORDING IS ATTACHED — you only have the transcript. Do not comment on pronunciation at all:
set every pronunciation score to 0 and leave pronunciation notes empty.`

async function ask<T>(schema: ReturnType<typeof Schema.object>, prompt: string, audio: Blob | null): Promise<T> {
  if (!firebaseApp) throw new Error('Firebase er ikke konfigurert.')
  if (!audio) prompt += NO_AUDIO
  const parts: (string | { inlineData: { mimeType: string; data: string } })[] = [prompt]
  if (audio) parts.push({ inlineData: { mimeType: 'audio/wav', data: await blobToWavBase64(audio) } })
  let lastError: unknown
  for (const name of MODELS) {
    try {
      const res = await model(name, schema).generateContent(parts)
      return JSON.parse(res.response.text()) as T
    } catch (e) {
      lastError = e
    }
  }
  throw friendlyError(lastError)
}

function friendlyError(e: unknown): Error {
  const msg = e instanceof Error ? e.message : String(e)
  // classify by HTTP status / API error code — the request URL itself (…/models/x:generateContent on
  // firebasevertexai.googleapis.com) appears in every message, so loose word matching misfires
  if (/\[429\b|RESOURCE_EXHAUSTED|\bquota\b/i.test(msg))
    return new Error('Gratiskvoten er brukt opp for øyeblikket. Vent et minutt (eller til i morgen) og prøv igjen.')
  if (/App Check/i.test(msg))
    return new Error('AI-en avviste forespørselen fordi App Check ikke er satt opp for nettstedet. (Firebase-konsollen → App Check.)')
  if (/\[403\b|PERMISSION_DENIED|has not been used|is disabled/i.test(msg))
    return new Error('AI-tilbakemelding er ikke slått på ennå. Gå til Firebase-konsollen → AI Logic → Get started → Gemini Developer API.')
  if (/Failed to fetch|NetworkError|network/i.test(msg)) return new Error('Ingen kontakt med AI-tjenesten — sjekk internettforbindelsen.')
  return new Error(`AI-tjenesten svarte med en feil: ${msg.replace(/^AI: Error fetching from \S+: /, '').slice(0, 160)}`)
}

const EXAMINER = `You are an experienced, friendly examiner for Norskprøven (the Norwegian language test, oral part, levels A1–B2).
The learner is an adult English speaker who has lived in Norway for years and is aiming for B1–B2.
Judge ONLY what is actually in the recording. Use bokmål for all Norwegian. Be accurate but encouraging; do not invent mistakes.
Count verb-second (V2) word order, "ikke" placement in subordinate clauses, noun gender/definite forms, adjective agreement and verb tenses as grammar errors.
List at most 8 errors, most important first. If the answer is empty or not Norwegian, say so in "tip" and give low scores.`

/** what a good answer looks like, per speaking-task type */
const TASK_EXPECTATIONS: Record<string, string> = {
  svar: 'Answer the question in full sentences, with a little detail.',
  fortell: 'Tell what happened, mostly in the past tense, in a sensible order (først, så, etterpå, til slutt).',
  beskriv: 'Describe clearly with suitable adjectives and place/time words.',
  mening: 'State an opinion and justify it with at least two reasons and an example (fordi, derfor, for eksempel, på den ene/andre siden).',
  sammenlign: 'Compare using comparatives and contrast words (mer/mindre … enn, ikke så … som, mens, derimot).',
  presenter: 'Give a short structured presentation: introduction, main points, conclusion.',
}

export async function analyseFreeSpeech(opts: {
  question: string
  transcript: string
  audio: Blob | null
  level: string
  /** speaking-task type, for task-specific expectations */
  taskType?: string
  /** words or phrases the task suggested */
  hints?: string[]
}): Promise<FreeFeedback> {
  const expectation = opts.taskType && TASK_EXPECTATIONS[opts.taskType] ? `\nWhat a good answer does: ${TASK_EXPECTATIONS[opts.taskType]}` : ''
  const hints = opts.hints?.length ? `\nSuggested phrases (using them is a plus, not a requirement): ${opts.hints.join(' | ')}` : ''
  const prompt = `${EXAMINER}

Task the learner was answering (asked aloud in Norwegian): «${opts.question}»
Course level of this task: ${opts.level}. Score relative to what is expected at this level.${expectation}${hints}
The browser's speech recognition produced this transcript (it may contain recognition mistakes — trust the audio when they disagree): «${opts.transcript}»

Give structured feedback on the learner's spoken answer.`
  return ask<FreeFeedback>(freeSchema, prompt, opts.audio)
}

export type SentenceTask = 'gjenta' | 'si' | 'diktat'

const TASKS: Record<SentenceTask, (o: { target: string; english?: string; answer: string }) => string> = {
  gjenta: (o) => `Exercise: LISTEN AND REPEAT. The learner heard and repeated this exact Norwegian sentence: «${o.target}»
Browser transcript of what they said (may be imperfect — trust the audio): «${o.answer}»
"correct" = they said the target sentence (small slips allowed). Focus on pronunciation: word stress, vowel length, tones,
the Norwegian r, silent letters. Mention only words that really need work. List grammar errors only if they changed the words.`,
  si: (o) => `Exercise: SAY IT IN NORWEGIAN. The learner saw this English sentence and said it in Norwegian: «${o.english}»
Model answer: «${o.target}» — but ANY natural, grammatical Norwegian sentence with the same meaning is fully correct.
Browser transcript of what they said (may be imperfect — trust the audio): «${o.answer}»
"correct" = the meaning is right AND the Norwegian is grammatical. Explain each grammar or word-choice error, then comment on pronunciation.
"corrected" = the learner's own sentence fixed (keep their wording where it was fine).`,
  diktat: (o) => `Exercise: DICTATION. The learner heard this Norwegian sentence and typed it: «${o.target}»
What they typed: «${o.answer}»
"correct" = identical apart from capitalisation and punctuation. For every difference explain briefly WHY it is spelled that way
(e.g. silent d, double consonant after a short vowel, definite ending, verb ending, compound written as one word).
"corrected" = the target sentence. There is no recording: pronunciation score 0, no pronunciation notes.`,
}

export async function analyseSentence(opts: {
  task: SentenceTask
  target: string
  english?: string
  answer: string
  audio: Blob | null
}): Promise<SentenceFeedback> {
  const prompt = `${EXAMINER}

${TASKS[opts.task]({ target: opts.target, english: opts.english, answer: opts.answer })}`
  return ask<SentenceFeedback>(sentenceSchema, prompt, opts.task === 'diktat' ? null : opts.audio)
}

// ── conversations: the AI plays a role over several turns ──

export interface ConversationLine {
  who: 'ai' | 'learner'
  text: string
}

export interface ConversationTurn {
  heard: string
  reply: string
  notes: { word: string; issue: string }[]
}

const turnSchema = Schema.object({
  properties: {
    heard: Schema.string({ description: 'what the learner just said, transcribed from the audio in bokmål' }),
    reply: Schema.string({ description: 'your next line in the role, in Norwegian' }),
    notes: Schema.array({
      items: Schema.object({
        properties: { word: Schema.string(), issue: Schema.string({ description: 'pronunciation problem, in English' }) },
      }),
    }),
  },
})

function transcriptOf(history: ConversationLine[]): string {
  return history.map((l) => `${l.who === 'ai' ? 'DU (rollen)' : 'ELEVEN'}: ${l.text}`).join('\n')
}

/** one turn: hear the learner's answer and reply in the role */
export async function conversationTurn(opts: {
  role: string
  goal: string
  level: string
  history: ConversationLine[]
  transcript: string
  audio: Blob | null
  /** true when this should be the closing line */
  last: boolean
}): Promise<ConversationTurn> {
  const prompt = `You are role-playing a short everyday conversation in Norwegian with an adult learner (level ${opts.level}) to practise speaking.
Your role: ${opts.role}
The learner's goal: ${opts.goal}
Speak natural, simple bokmål suited to level ${opts.level}: one or two short sentences per line.
Stay in the role. Never correct the learner during the conversation — feedback comes afterwards.
${opts.last ? 'This is your LAST line: react briefly and close the conversation politely. Do not ask a new question.' : 'React to what the learner said and move the conversation forward with ONE question or prompt.'}
In "notes", list at most two words the learner clearly mispronounced (empty if none or if there is no recording).

Conversation so far:
${transcriptOf(opts.history)}

The learner's newest answer — browser transcript (may be imperfect, trust the audio): «${opts.transcript}»`
  return ask<ConversationTurn>(turnSchema, prompt, opts.audio)
}

/** feedback on a whole conversation (text only — pronunciation notes come from the turns) */
export async function conversationFeedback(opts: { role: string; goal: string; level: string; history: ConversationLine[] }): Promise<FreeFeedback> {
  const prompt = `${EXAMINER}

The learner just had a role-play conversation (level ${opts.level}).
Role played by the other person: ${opts.role}
The learner's goal: ${opts.goal}

Conversation:
${transcriptOf(opts.history)}

Judge ONLY the learner's lines (ELEVEN). "task" = did they reach the goal and respond appropriately to what was said.
"heard" = all the learner's lines joined together. "corrected" = the learner's lines rewritten correctly, one per line.`
  return ask<FreeFeedback>(freeSchema, prompt, null)
}
