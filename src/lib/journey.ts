/**
 * The learning journey. Every course chapter is a checklist of items grouped
 * in six steps; most items tick off automatically from what the learner does
 * in the modules (stored per chapter in progress.kursSteps), grammar sections
 * are ticked by hand. A chapter is only finished when its kapittelprøve is
 * passed — and the next chapter stays locked until then.
 */
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { KursChapter } from '../types'
import { chapterWords, courses, kurs, kursLessonId } from '../data/kurs'
import { listeningFor } from '../data/kurs/listening'
import { useProgressStore } from '../stores/progress'

export type StepKey = 'lytt' | 'grammatikk' | 'ord' | 'ov' | 'snakk' | 'prove'

export const LISTEN_PASS = 0.66
export const WORDS_PASS = 0.8
export const QUIZ_PASS = 0.7
/** share of the kapittelprøve needed to pass the chapter */
export const TEST_PASS = 0.8

export interface JourneyItem {
  /** key in progress.kursSteps[chapter] */
  key: string
  label: string
  done: boolean
  /** optional items are suggestions; they never block the step */
  required: boolean
  detail?: string
  /** element id on the chapter page */
  anchor: string
  /** module to open for items that live outside the chapter page */
  to?: RouteLocationRaw
  /** ticked by hand on the chapter page */
  manual?: boolean
  /** can be marked finished by hand even though it normally ticks itself */
  markable?: boolean
}

/** progress key for marking an automatic item finished by hand */
export const overrideKey = (key: string) => `ok-${key}`

export interface JourneyStep {
  key: StepKey
  icon: string
  title: string
  goal: string
  items: JourneyItem[]
  done: boolean
}

export function useJourney() {
  const progress = useProgressStore()

  function stepsFor(c: KursChapter): JourneyStep[] {
    const v = (k: string) => progress.stepValue(c.id, k)
    const marked = (k: string) => v(overrideKey(k)) === 1
    /** automatic items can also be marked finished by hand */
    const auto = (i: JourneyItem): JourneyItem => ({ ...i, done: i.done || marked(i.key), markable: true })
    const letters = courses[c.course].dialogueLetters
    const q = { kapittel: c.id }

    const listening = listeningFor(c)
    const lytt: JourneyItem[] = c.dialogues.map((title, i) => {
      const best = v(`lytt-${i}`)
      const n = listening[i]?.length ?? 0
      const heard = v(`hort-${i}`) === 1
      return auto({
        key: `lytt-${i}`,
        label: `${letters[i]} · ${title}`,
        done: n ? (best ?? 0) >= LISTEN_PASS : heard,
        required: true,
        detail: `${heard ? '🎧 Hørt ✓' : '🎧 Ikke hørt'} · ❓ ${best !== undefined ? `${Math.round(best * n)}/${n} riktige` : `0/${n}`}`,
        anchor: `item-lytt-${i}`,
      })
    })

    const gram: JourneyItem[] = [
      { key: 'gram-phrases', label: 'Nyttige uttrykk', done: v('gram-phrases') === 1, required: true, anchor: 'item-gram-phrases', manual: true },
      ...c.grammar.map((s, i) => ({
        key: `gram-${i}`,
        label: s.heading ?? `Del ${i + 1}`,
        done: v(`gram-${i}`) === 1,
        required: true,
        anchor: `item-gram-${i}`,
        manual: true,
      })),
      { key: 'gram-uttale', label: `Uttale: ${c.pronunciation.heading}`, done: v('gram-uttale') === 1, required: true, anchor: 'item-gram-uttale', manual: true },
    ]

    const words = chapterWords(c)
    const seen = words.filter((w) => progress.state.srs[w.id]).length
    const ord: JourneyItem[] = [
      auto({
        key: 'ord',
        label: 'Lær kapittelets ord',
        done: !words.length || seen / words.length >= WORDS_PASS,
        required: true,
        detail: `${seen} av ${words.length} ord gjennomgått`,
        anchor: 'item-ord',
        to: { path: '/ord', query: q },
      }),
    ]

    const pct = (k: string) => (v(k) !== undefined ? `Beste: ${Math.round(v(k)! * 100)} %` : 'Ikke tatt')
    const ov: JourneyItem[] = ([
      { key: 'bygg', label: 'Bygg setninger', done: v('bygg') !== undefined, required: true, detail: pct('bygg'), anchor: 'item-bygg', to: { path: '/setninger', query: q } },
      { key: 'sjekk', label: 'Grammatikkquiz (minst 70 %)', done: (v('sjekk') ?? 0) >= QUIZ_PASS, required: true, detail: pct('sjekk'), anchor: 'item-sjekk', to: { path: '/quiz', query: q } },
      { key: 'bygg-lytt', label: 'Hør og bygg', done: v('bygg-lytt') !== undefined, required: false, detail: pct('bygg-lytt'), anchor: 'item-bygg-lytt', to: { path: '/setninger', query: { ...q, lytt: '1' } } },
      { key: 'diktat', label: 'Diktat', done: v('diktat') !== undefined, required: false, detail: pct('diktat'), anchor: 'item-diktat', to: { path: '/lytt', query: { ...q, modus: 'diktat' } } },
    ] as JourneyItem[]).map(auto)

    const snakk: JourneyItem[] = ([
      {
        key: 'snakk-fritt',
        label: 'Snakk fritt',
        done: v('snakk-fritt') !== undefined || v('snakk') !== undefined,
        required: true,
        anchor: 'item-snakk-fritt',
        to: { path: '/lytt', query: { ...q, modus: 'fritt' } },
      },
      { key: 'snakk-si', label: 'Si det på norsk', done: v('snakk-si') !== undefined, required: false, detail: pct('snakk-si'), anchor: 'item-snakk-si', to: { path: '/lytt', query: { ...q, modus: 'si' } } },
      { key: 'snakk-gjenta', label: 'Hør og gjenta', done: v('snakk-gjenta') !== undefined, required: false, detail: pct('snakk-gjenta'), anchor: 'item-snakk-gjenta', to: { path: '/lytt', query: { ...q, modus: 'gjenta' } } },
    ] as JourneyItem[]).map(auto)

    const prove: JourneyItem[] = [
      {
        key: 'prove',
        label: `Kapittelprøven (minst ${Math.round(TEST_PASS * 100)} %)`,
        done: isPassed(c),
        required: true,
        detail: pct('prove'),
        anchor: 'item-prove',
        to: `/kurs/${c.id}/prove`,
      },
    ]

    const step = (key: StepKey, icon: string, title: string, goal: string, items: JourneyItem[]): JourneyStep => ({
      key,
      icon,
      title,
      goal,
      items,
      done: items.filter((i) => i.required).every((i) => i.done),
    })
    return [
      step('lytt', '🎧', 'Lytt og forstå', 'Hør hver tekst og svar riktig på minst 2 av 3 spørsmål.', lytt),
      step('grammatikk', '📖', 'Grammatikk', 'Les hver del, si eksemplene høyt og hak av når du har forstått.', gram),
      step('ord', '🗂', 'Ord', 'Gå gjennom minst 80 % av kapittelets ord.', ord),
      step('ov', '🧩', 'Øv', 'Bygg setningene og få minst 70 % på grammatikkquizen.', ov),
      step('snakk', '🎙', 'Snakk', 'Svar muntlig på kapittelets spørsmål i «Snakk fritt».', snakk),
      step('prove', '🏁', 'Kapittelprøve', `Bestå prøven med minst ${Math.round(TEST_PASS * 100)} % for å låse opp neste kapittel.`, prove),
    ]
  }

  /** a chapter is passed when its test is passed (or it was marked finished before tests existed) */
  function isPassed(c: KursChapter): boolean {
    return (progress.stepValue(c.id, 'prove') ?? 0) >= TEST_PASS || progress.isLessonRead(kursLessonId(c))
  }

  /** the first chapter is always open; every other one opens when the previous chapter is passed */
  function isUnlocked(c: KursChapter): boolean {
    const i = kurs.findIndex((x) => x.id === c.id)
    return i <= 0 || isPassed(kurs[i - 1])
  }

  function previousChapter(c: KursChapter): KursChapter | undefined {
    const i = kurs.findIndex((x) => x.id === c.id)
    return i > 0 ? kurs[i - 1] : undefined
  }

  /** the first required item not yet done, with its step */
  function nextItem(c: KursChapter) {
    for (const s of stepsFor(c)) {
      const item = s.items.find((i) => i.required && !i.done)
      if (item) return { step: s, item }
    }
    return null
  }

  function requiredCounts(c: KursChapter) {
    const items = stepsFor(c).flatMap((s) => s.items.filter((i) => i.required))
    return { done: isPassed(c) ? items.length : items.filter((i) => i.done).length, total: items.length }
  }

  /** where the learner is: the last opened open-and-unpassed chapter, else the first unpassed one */
  const current = computed(() => {
    const last = kurs.find((c) => c.id === progress.state.lastChapter)
    const chapter = last && isUnlocked(last) && !isPassed(last) ? last : (kurs.find((c) => !isPassed(c)) ?? null)
    return chapter ? { chapter, next: nextItem(chapter) } : null
  })

  const passedCount = computed(() => kurs.filter(isPassed).length)
  const overall = computed(() => {
    let done = 0
    let total = 0
    for (const c of kurs) {
      const r = requiredCounts(c)
      done += r.done
      total += r.total
    }
    return total ? done / total : 0
  })

  /** link that opens the chapter page at an item */
  function itemLink(c: KursChapter, item: JourneyItem): RouteLocationRaw {
    return { path: `/kurs/${c.id}`, hash: `#${item.anchor}` }
  }

  return { stepsFor, isPassed, isUnlocked, previousChapter, nextItem, requiredCounts, current, passedCount, overall, itemLink }
}
