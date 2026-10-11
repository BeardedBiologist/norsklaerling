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
    heard: Schema.string({ description: 'what the learner said, transcribed from the audio' }),
    correct: Schema.boolean({ description: 'true if the learner said the target sentence (small pronunciation slips allowed)' }),
    pronunciationScore: Schema.integer({ description: '1–5, how Norwegian it sounds' }),
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

async function ask<T>(schema: ReturnType<typeof Schema.object>, prompt: string, audio: Blob | null): Promise<T> {
  if (!firebaseApp) throw new Error('Firebase er ikke konfigurert.')
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
  if (/quota|429|exhausted|rate/i.test(msg)) return new Error('Gratiskvoten er brukt opp for øyeblikket. Vent et minutt (eller til i morgen) og prøv igjen.')
  if (/api.*not.*enabled|PERMISSION_DENIED|403|firebasevertexai|AI Logic/i.test(msg))
    return new Error('AI-tilbakemelding er ikke slått på ennå. Gå til Firebase-konsollen → AI Logic → Get started → Gemini Developer API.')
  return new Error(`Fikk ikke kontakt med AI-tjenesten (${msg.slice(0, 120)}).`)
}

const EXAMINER = `You are an experienced, friendly examiner for Norskprøven (the Norwegian language test, oral part, levels A1–B2).
The learner is an adult English speaker who has lived in Norway for years and is aiming for B1–B2.
Judge ONLY what is actually in the recording. Use bokmål for all Norwegian. Be accurate but encouraging; do not invent mistakes.
Count verb-second (V2) word order, "ikke" placement in subordinate clauses, noun gender/definite forms, adjective agreement and verb tenses as grammar errors.
List at most 8 errors, most important first. If the answer is empty or not Norwegian, say so in "tip" and give low scores.`

export async function analyseFreeSpeech(opts: { question: string; transcript: string; audio: Blob | null; level: string }): Promise<FreeFeedback> {
  const prompt = `${EXAMINER}

Task the learner was answering (asked aloud in Norwegian): «${opts.question}»
Course level of this task: ${opts.level}.
The browser's speech recognition produced this transcript (it may contain recognition mistakes — trust the audio when they disagree): «${opts.transcript}»

Give structured feedback on the learner's spoken answer.`
  return ask<FreeFeedback>(freeSchema, prompt, opts.audio)
}

export async function analyseSentence(opts: { target: string; transcript: string; audio: Blob | null }): Promise<SentenceFeedback> {
  const prompt = `${EXAMINER}

The learner tried to say this exact Norwegian sentence: «${opts.target}»
Browser transcript (may be imperfect): «${opts.transcript}»

Judge whether they said it, and how their pronunciation was — word stress, vowel length, tones, the Norwegian r, silent letters. Mention only words that really need work.`
  return ask<SentenceFeedback>(sentenceSchema, prompt, opts.audio)
}
