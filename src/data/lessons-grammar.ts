import type { Lesson } from '../types'

/**
 * Grammar lessons — the LEARN half of each drill module. Written in English
 * (you learn rules fastest in your strongest language) with Norwegian
 * examples you can listen to.
 */
export const grammarLessons: Lesson[] = [
  {
    id: 'g-kjonn',
    title: 'Substantiv og kjønn',
    titleEn: 'Nouns and gender',
    category: 'grammatikk',
    level: 'A2',
    teaser: 'en, ei or et? The system behind Norwegian genders — and how to guess right.',
    test: { to: '/ord', label: 'Test deg: kjønnsquiz i Ordforråd' },
    sections: [
      {
        body: 'Every Norwegian noun has a gender: masculine (en), feminine (ei) or neuter (et). The gender decides the article, the definite ending and how adjectives agree — so it is worth learning the gender WITH every new word, never the word alone.\n\nGood news for bokmål: every feminine noun can also be written as masculine. «Ei jente / jenta» and «en jente / jenten» are both correct. If in doubt, en is never wrong for a feminine word. Neuter (et) is the one you cannot cheat on.',
        examples: [
          { no: 'en stol – stolen', en: 'a chair – the chair', note: 'masculine' },
          { no: 'ei/en bok – boka/boken', en: 'a book – the book', note: 'feminine (both forms correct)' },
          { no: 'et hus – huset', en: 'a house – the house', note: 'neuter' },
        ],
      },
      {
        heading: 'How to guess the gender',
        body: 'There is no perfect rule, but these patterns cover a lot:\n\n• Words for people are usually en (en lærer, en venn) — even for women.\n• Words ending in -sjon, -het, -ing are almost always en: en stasjon, en mulighet, en regning.\n• Many short, common one-syllable things are et: et hus, et barn, et år, et ord.\n• Words ending in -um are often et: et museum, et sentrum.\n\nAbout 75 % of Norwegian nouns are masculine — so when you truly have no idea, guess en.',
        examples: [
          { no: 'en utdanning, en søknad, en avtale', en: 'education, application, appointment', note: '-ing/-ad/-e → usually en' },
          { no: 'et samfunn, et ansvar, et valg', en: 'society, responsibility, election', note: 'abstract et-words the exam loves' },
          { no: 'en frihet, en mulighet, en nyhet', en: 'freedom, possibility, news item', note: '-het → always en' },
        ],
      },
      {
        heading: 'Compound words inherit the LAST gender',
        body: 'Norwegian glues words together constantly, and the compound always takes the gender of its last part:\n\n• et hus + en dør → en husdør\n• en bil + et sete → et bilsete\n• et barn + en hage → en barnehage\n\nThis is a superpower: if you know the gender of ~50 common "last parts" (rom, hus, dag, tid, plass, kort …), you automatically know the gender of hundreds of compounds. Et rom → et soverom, et klasserom, et venterom.',
        examples: [
          { no: 'en jobb + et intervju → et jobbintervju', en: 'a job interview', note: 'the last word decides' },
          { no: 'en fødsel + en dag → en fødselsdag', en: 'a birthday' },
          { no: 'et arbeid + en giver → en arbeidsgiver', en: 'an employer' },
        ],
      },
      {
        heading: 'Same word, two genders, two meanings',
        body: 'A few words change meaning with their gender — worth knowing so you are not confused when you meet them:\n\n• et øre (the ear) vs en øre (the coin, 1/100 krone)\n• et rom (a room) vs en rom (a Roma person)\n• en fisk (the animal) vs et fiske (fishing as an activity)\n\nWhen a word surprises you with the "wrong" article, suspect a second meaning before assuming an error.',
        examples: [
          { no: 'Jeg har vondt i øret.', en: 'My ear hurts.', note: 'et øre' },
          { no: 'Det koster femti kroner og null øre.', en: 'It costs fifty kroner and zero øre.', note: 'en øre (coin)' },
        ],
      },
      {
        heading: 'Common errors to stop making today',
        body: '• «en hus», «en barn», «en år» — these three neuters are so frequent that getting them wrong is loud. Drill: et hus, et barn, et år.\n• Using en with -em/-um words: et problem, et system, et museum.\n• «en møte» → et møte. You attend mange møter, but the word is neuter.\n• Remember: adjectives will expose you! If you say «et stor hus» or «en stort bil», the gender error doubles. Gender and adjective agreement are learned together.',
        examples: [
          { no: 'et problem – problemet – problemer', en: 'a problem – the problem – problems' },
          { no: 'et møte – møtet – møter', en: 'a meeting – the meeting – meetings' },
        ],
      },
    ],
  },
  {
    id: 'g-bestemt',
    title: 'Bestemt form og flertall',
    titleEn: 'Definite form and plurals',
    category: 'grammatikk',
    level: 'A2',
    teaser: 'Why "the house" is one word in Norwegian: huset. The four forms every noun has.',
    test: { to: '/boyning', label: 'Test deg: Bøyning (substantiv)' },
    sections: [
      {
        body: 'Norwegian has no separate word for "the". Instead, the article moves to the END of the noun: en bil → bilen (the car), et hus → huset (the house), ei jente → jenta (the girl).\n\nEvery noun has four forms, and the norskprøve expects you to control all of them: indefinite singular, definite singular, indefinite plural, definite plural.',
        examples: [
          { no: 'en måned – måneden – måneder – månedene', en: 'a month – the month – months – the months' },
          { no: 'et eple – eplet – epler – eplene', en: 'an apple – the apple – apples – the apples' },
          { no: 'ei/en hytte – hytta/hytten – hytter – hyttene', en: 'a cabin – the cabin – cabins – the cabins' },
        ],
      },
      {
        heading: 'The traps',
        body: 'Short neuter words (one syllable) get NO ending in the indefinite plural: et barn → flere barn, et år → to år, et hus → mange hus. Saying «flere barner» is a classic immigrant error that graders notice immediately.\n\nSome everyday words change their vowel in the plural — these just have to be memorised:',
        examples: [
          { no: 'en bok – bøker – bøkene', en: 'a book – books – the books' },
          { no: 'ei/en hånd – hender – hendene', en: 'a hand – hands – the hands' },
          { no: 'en fot – føtter – føttene', en: 'a foot – feet – the feet' },
          { no: 'et tre – trær – trærne', en: 'a tree – trees – the trees' },
          { no: 'en mann – menn – mennene', en: 'a man – men – the men' },
          { no: 'ei/en natt – netter – nettene', en: 'a night – nights – the nights' },
          { no: 'en far – fedre, en mor – mødre, en bror – brødre', en: 'father – fathers, mother – mothers, brother – brothers', note: 'family words shift vowels' },
        ],
      },
      {
        heading: 'Double definite — the Norwegian speciality',
        body: 'When an adjective comes before a definite noun, Norwegian marks definiteness TWICE: a little word in front (den/det/de) AND the ending:\n\n• den røde bilen — the red car\n• det gamle huset — the old house\n• de nye naboene — the new neighbours\n\nEnglish speakers tend to drop one half («den røde bil» or just «røde bilen»). Standard bokmål wants both. Note the adjective always takes -e in this position.',
        examples: [
          { no: 'den norske modellen', en: 'the Norwegian model', note: 'den + -en' },
          { no: 'det viktigste spørsmålet', en: 'the most important question', note: 'det + -et' },
          { no: 'de fleste nordmenn', en: 'most Norwegians', note: 'de + plural' },
        ],
      },
      {
        heading: 'When Norwegian SKIPS the article',
        body: 'Norwegian drops articles where English keeps them:\n\n• Professions and roles after er/blir: «Hun er lege.» (not "en lege") «Han ble statsborger i fjor.»\n• Fixed phrases: til fots, på ferie, i fengsel, på kino, i barnehage.\n• Body parts and clothes with a reflexive feel use the definite instead of a possessive: «Jeg vasker hendene» (I wash my hands), «Han tok av seg skoene».\n\nPossession uses -s WITHOUT an apostrophe: Norges hovedstad, Olas bil, barnas rom.',
        examples: [
          { no: 'Hun er sykepleier og han er lærer.', en: 'She is a nurse and he is a teacher.', note: 'no article with professions' },
          { no: 'Jeg fryser på hendene.', en: 'My hands are cold.', note: 'definite form, no possessive' },
          { no: 'Norges lengste fjord er Sognefjorden.', en: 'Norway’s longest fjord is the Sognefjord.', note: 's-genitive, no apostrophe' },
        ],
      },
    ],
  },
  {
    id: 'g-verbtid',
    title: 'Verbtidene',
    titleEn: 'The verb tenses',
    category: 'grammatikk',
    level: 'A2',
    teaser: 'Presens, preteritum, perfektum — when to use which, and the irregulars that matter.',
    test: { to: '/boyning', label: 'Test deg: Bøyning (verb)' },
    sections: [
      {
        body: 'Norwegian verbs are simpler than English ones: no -s for he/she, no continuous forms. «Jeg jobber» covers both "I work" and "I am working".\n\nThe three tenses you need daily:\n\n• Presens (now / habits): jobber, bor, snakker\n• Preteritum (finished past WITH a time): I går jobbet jeg.\n• Presens perfektum (past that touches now, or no time given): Jeg har jobbet her i ti år.',
        examples: [
          { no: 'I fjor bodde jeg i Bergen.', en: 'Last year I lived in Bergen.', note: 'time stated → preteritum' },
          { no: 'Jeg har bodd i Norge i ti år.', en: 'I have lived in Norway for ten years.', note: 'still true → perfektum' },
          { no: 'Har du noen gang vært i Tromsø?', en: 'Have you ever been to Tromsø?', note: 'no specific time → perfektum' },
        ],
      },
      {
        heading: 'The four regular verb classes',
        body: 'Regular verbs form the past in one of four ways. You do not need the theory — but seeing the groups makes the endings predictable:\n\n1. -et (largest group): å snakke → snakket → har snakket. Also: jobbet, kastet, våknet.\n2. -te (stems ending in l, n, s, r …): å spise → spiste → har spist. Also: kjørte, lærte, begynte.\n3. -de (stems ending in v, g, diphthong): å leve → levde → har levd. Also: prøvde, bygde, pleide.\n4. -dde (stems ending in a stressed vowel): å bo → bodde → har bodd. Also: nådde, trodde, snødde.\n\nWhen you learn a new verb, learn its preteritum with it — the Bøyning module drills exactly this.',
        examples: [
          { no: 'Jeg snakket med naboen i går.', en: 'I spoke with the neighbour yesterday.', note: 'class 1: -et' },
          { no: 'Vi spiste middag klokka fem.', en: 'We ate dinner at five.', note: 'class 2: -te' },
          { no: 'De bodde i Oslo før.', en: 'They lived in Oslo before.', note: 'class 4: -dde' },
        ],
      },
      {
        heading: 'The irregular verbs worth over-learning',
        body: 'Most verbs are regular, but the most FREQUENT verbs are irregular. These appear constantly in speech and on the exam:',
        examples: [
          { no: 'å være – er – var – har vært', en: 'to be' },
          { no: 'å ha – har – hadde – har hatt', en: 'to have' },
          { no: 'å gjøre – gjør – gjorde – har gjort', en: 'to do' },
          { no: 'å gå – går – gikk – har gått', en: 'to walk/go' },
          { no: 'å få – får – fikk – har fått', en: 'to get' },
          { no: 'å ta – tar – tok – har tatt', en: 'to take' },
          { no: 'å se – ser – så – har sett', en: 'to see' },
          { no: 'å si – sier – sa – har sagt', en: 'to say' },
          { no: 'å komme – kommer – kom – har kommet', en: 'to come' },
          { no: 'å vite – vet – visste – har visst', en: 'to know (a fact)' },
          { no: 'å spørre – spør – spurte – har spurt', en: 'to ask' },
          { no: 'å forstå – forstår – forsto – har forstått', en: 'to understand' },
          { no: 'å gi – gir – ga – har gitt', en: 'to give' },
          { no: 'å finne – finner – fant – har funnet', en: 'to find' },
          { no: 'å ligge – ligger – lå – har ligget', en: 'to lie' },
          { no: 'å legge – legger – la – har lagt', en: 'to lay/put' },
        ],
      },
      {
        heading: 'Pluskvamperfektum and reported speech',
        body: 'Hadde + participle = "had done" — for something that happened BEFORE something else in the past:\n\n«Da vi kom hjem, hadde barna allerede spist.»\n\nThe same shift happens when you report what someone said: direct «Jeg er syk» becomes «Hun sa at hun VAR syk». Norwegian moves the tense back exactly like English does — one of the few grammar points where your English instinct is simply right.',
        examples: [
          { no: 'Toget hadde gått da jeg kom til stasjonen.', en: 'The train had left when I got to the station.' },
          { no: 'Han sa at han hadde glemt avtalen.', en: 'He said he had forgotten the appointment.' },
        ],
      },
      {
        heading: 'Verbs that end in -s',
        body: 'A few common verbs simply end in -s in all forms — they are not passives, just built that way:\n\n• å finnes (to exist): Det finnes mange dialekter i Norge.\n• å trives (to thrive / be happy somewhere): Jeg trives på jobben.\n• å møtes (to meet each other): Skal vi møtes klokka sju?\n• å synes (to think / find): Jeg synes norsk er gøy.\n\n«Jeg trives i Norge» is one of the most Norwegian sentences you can say — use it in the oral exam when they ask how you like living here.',
        examples: [
          { no: 'Det finnes ingen enkel løsning.', en: 'There is no simple solution.' },
          { no: 'Jeg har trivdes her helt siden jeg kom.', en: 'I have been happy here ever since I came.', note: 'perfektum: har trivdes' },
          { no: 'Vi møttes på norskkurs.', en: 'We met at Norwegian class.', note: 'a lovely answer to “how did you meet?”' },
        ],
      },
    ],
  },
  {
    id: 'g-modal',
    title: 'Modalverb',
    titleEn: 'Modal verbs',
    category: 'grammatikk',
    level: 'A2',
    teaser: 'skal, vil, må, kan, bør — small words that carry meaning, plans and politeness.',
    test: { to: '/quiz', label: 'Test deg: Grammatikkquiz' },
    sections: [
      {
        body: 'Modal verbs are followed by an infinitive WITHOUT å: «Jeg må gå» (not «må å gå»).\n\n• skal — plan or promise: Jeg skal ta prøven i mai.\n• vil — want to: Jeg vil bli norsk statsborger.\n• må — must: Du må ha med legitimasjon.\n• kan — can/may: Kan du hjelpe meg?\n• bør/burde — should: Du bør øve hver dag.\n• får — is allowed to / gets to: Du får ikke røyke her.',
        examples: [
          { no: 'Jeg skal reise til England i juli.', en: 'I am going to travel to England in July.', note: 'skal = plan, not just future' },
          { no: 'Hun vil gjerne lære seg norsk.', en: 'She would really like to learn Norwegian.', note: 'vil gjerne = polite want' },
          { no: 'Du burde snakke norsk hjemme.', en: 'You should speak Norwegian at home.' },
        ],
      },
      {
        heading: 'Future without "will"',
        body: 'Norwegian often uses plain presens for the future when a time is mentioned: «Jeg kommer i morgen» — I will come tomorrow. «Kommer til å» expresses a prediction: «Det kommer til å regne» — it is going to rain. Overusing «vil» for the future is an English habit; in Norwegian «vil» usually means WANT.',
        examples: [
          { no: 'Toget går klokka åtte.', en: 'The train leaves at eight.', note: 'presens as future' },
          { no: 'Du kommer til å klare prøven.', en: 'You are going to pass the test.', note: 'prediction' },
          { no: 'Vil du ha kaffe? — Ja, gjerne.', en: 'Do you want coffee? — Yes, please.', note: 'vil = want' },
        ],
      },
      {
        heading: 'The past forms unlock politeness',
        body: 'Each modal has a past form, and the past forms double as POLITE forms — exactly like English "could you" vs "can you":\n\n• kan → kunne: Kunne du hjelpe meg litt?\n• vil → ville: Jeg ville gjerne bestille time.\n• skal → skulle: Jeg skulle gjerne ha snakket med legen.\n• må → måtte: Vi måtte vente i to timer. (plain past)\n\n«Jeg skulle gjerne …» and «Kunne du …?» are the sound of a courteous adult — perfect for phone calls to the kommune.',
        examples: [
          { no: 'Kunne du si det en gang til?', en: 'Could you say that once more?', note: 'THE exam survival phrase' },
          { no: 'Jeg skulle gjerne ha byttet time.', en: 'I would like to change my appointment.', note: 'polite request' },
          { no: 'Som barn kunne jeg ikke svømme.', en: 'As a child I couldn’t swim.', note: 'kunne = plain past too' },
        ],
      },
      {
        heading: 'Modal + ha + participle: guessing and regretting',
        body: 'Modals combine with the perfect to speculate about the past:\n\n• Han må ha glemt møtet. — He must have forgotten the meeting.\n• Hun kan ha tatt feil buss. — She may have taken the wrong bus.\n• Du skulle ha sett nordlyset i går! — You should have seen the northern lights yesterday!\n• Jeg burde ha begynt å lære norsk for ti år siden. — Every immigrant’s sentence. Now you can say it correctly.',
        examples: [
          { no: 'De må ha reist tidlig.', en: 'They must have left early.' },
          { no: 'Jeg burde ha sagt fra før.', en: 'I should have spoken up earlier.' },
        ],
      },
    ],
  },
  {
    id: 'g-v2',
    title: 'Ordstilling 1: V2-regelen',
    titleEn: 'Word order 1: the V2 rule',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'The single most important rule in Norwegian — and the one English speakers break most.',
    test: { to: '/setninger', label: 'Test deg: Setningsbygging' },
    sections: [
      {
        body: 'In a Norwegian main clause, the verb must be the SECOND element. Not the second word — the second element. If anything other than the subject starts the sentence (a time, a place, "unfortunately"), the subject must move BEHIND the verb.\n\nEnglish: "Tomorrow I will take the test."\nNorwegian: «I morgen skal jeg ta prøven.» — literally "Tomorrow shall I take the test."\n\nThis inversion feels wrong to English speakers, which is exactly why examiners listen for it. Master it and you instantly sound a level better.',
        examples: [
          { no: 'Jeg skal ta prøven i morgen.', en: 'I am taking the test tomorrow.', note: 'subject first — normal order' },
          { no: 'I morgen skal jeg ta prøven.', en: 'Tomorrow I am taking the test.', note: 'time first → verb before subject' },
          { no: 'Dessverre kan jeg ikke komme.', en: 'Unfortunately I cannot come.', note: 'adverb first → kan jeg' },
          { no: 'I Norge betaler alle skatt.', en: 'In Norway everyone pays tax.', note: 'place first → betaler alle' },
        ],
      },
      {
        heading: 'The whole phrase counts as one element',
        body: '«For ti år siden» is three words but ONE element — the verb comes right after it. The same applies when a whole subordinate clause starts the sentence: it counts as element number one, so the main clause verb comes next, before its subject.',
        examples: [
          { no: 'For ti år siden flyttet jeg til Norge.', en: 'Ten years ago I moved to Norway.' },
          { no: 'Hvis det regner, blir vi hjemme.', en: 'If it rains, we stay home.', note: 'clause first → blir vi' },
          { no: 'Da jeg kom til Norge, kunne jeg ikke norsk.', en: 'When I came to Norway, I didn’t know Norwegian.' },
          { no: 'Etter å ha bodd her i ti år føler jeg meg hjemme.', en: 'After living here for ten years I feel at home.' },
        ],
      },
      {
        heading: 'You can front almost anything',
        body: 'Norwegians front objects and whole ideas for emphasis — the verb stays in slot two and the subject slides behind it:\n\n• Fisk spiser jeg aldri. — Fish, I never eat.\n• Det visste jeg ikke. — That, I didn’t know.\n• Norsk lærer man best ved å snakke. — Norwegian is best learned by speaking.\n\nYou do not have to produce these to pass B1 — but you must not fall apart when you hear them. The subject is whoever comes AFTER the verb.',
        examples: [
          { no: 'Det husker jeg godt.', en: 'I remember that well.', note: 'object fronted' },
          { no: 'Brunost liker jeg faktisk.', en: 'Brown cheese I actually like.' },
        ],
      },
      {
        heading: 'Questions: the verb comes FIRST',
        body: 'Yes/no questions put the verb in slot one: «Snakker du norsk?», «Har du bodd her lenge?» — no "do" helper, ever.\n\nQuestion-word questions put the verb straight after the question word: «Hvor bor du?», «Når begynte du å lære norsk?», «Hvorfor flyttet du hit?»\n\nEnglish speakers’ classic error: «Hvor du bor?» That word order only exists inside INDIRECT questions (see the next lesson).',
        examples: [
          { no: 'Kommer du på festen?', en: 'Are you coming to the party?', note: 'verb first, no “do”' },
          { no: 'Hvor lenge har du bodd i Norge?', en: 'How long have you lived in Norway?' },
          { no: 'Hva gjør du i helgene?', en: 'What do you do at weekends?', note: 'guaranteed oral exam question' },
        ],
      },
      {
        heading: 'Self-check: the three-step repair',
        body: 'When you write a sentence, run this check:\n\n1. What is in position one? (One element — a subject, a time, a place, a clause.)\n2. Is the verb in position two? If not, move it there.\n3. If position one is NOT the subject, did the subject move behind the verb?\n\n«I går jeg jobbet hjemme» fails step 3 → «I går jobbet jeg hjemme.» This single repair fixes the most common written error at A2–B1.',
        examples: [
          { no: 'I går jobbet jeg hjemmefra.', en: 'Yesterday I worked from home.' },
          { no: 'Neste uke begynner kurset.', en: 'Next week the course starts.' },
        ],
      },
    ],
  },
  {
    id: 'g-leddsetning',
    title: 'Ordstilling 2: ikke og leddsetninger',
    titleEn: 'Word order 2: ikke and subordinate clauses',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'Where does «ikke» go? It depends on the clause type — here is the whole system.',
    test: { to: '/setninger', label: 'Test deg: Setningsbygging' },
    sections: [
      {
        body: 'In a MAIN clause, ikke comes after the verb:\n«Jeg snakker ikke svensk.»\n\nIn a SUBORDINATE clause (after at, fordi, hvis, når, som, om …), ikke jumps to BEFORE the verb:\n«Hun sier at hun IKKE HAR tid.»\n\nThe same goes for other small adverbs: alltid, aldri, ofte, egentlig. A perfect sentence like «Han sier at han aldri har vært der» is strong B1 evidence to an examiner.',
        examples: [
          { no: 'Jeg har ikke bil.', en: 'I don’t have a car.', note: 'main clause: verb + ikke' },
          { no: 'Hun sier at hun ikke har bil.', en: 'She says she doesn’t have a car.', note: 'at-clause: ikke + verb' },
          { no: 'Vi blir hjemme fordi barna ikke er friske.', en: 'We stay home because the kids aren’t well.' },
          { no: 'Han spør om vi ikke kan komme litt før.', en: 'He asks if we can’t come a bit earlier.' },
        ],
      },
      {
        heading: 'Know your subordinators',
        body: 'These words START a subordinate clause — after any of them, use subject + (ikke) + verb, never inversion:\n\n• at (that) • om (whether/if) • fordi (because) • hvis/dersom (if)\n• når (when — future/repeated) • da (when — past) • mens (while)\n• før (before) • etter at (after) • siden (since) • selv om (even though)\n• som (who/which) • slik at (so that) • så snart (as soon as)\n\nIf you can spot these, you always know which word-order rules apply.',
        examples: [
          { no: 'Vi venter til regnet gir seg.', en: 'We wait until the rain stops.' },
          { no: 'Mens jeg lagde middag, gjorde barna lekser.', en: 'While I made dinner, the kids did homework.' },
          { no: 'Selv om det var kaldt, gikk vi på tur.', en: 'Even though it was cold, we went hiking.' },
        ],
      },
      {
        heading: 'Subordinate clauses never invert',
        body: 'Inside a subordinate clause the order is always subject – (ikke) – verb, no matter what. Inversion (verb before subject) only ever happens in main clauses. Compare:\n\n«I dag kommer han ikke.» (main clause, inverted)\n«Jeg vet at han ikke kommer i dag.» (subordinate — no inversion, ikke before verb)\n\nIndirect questions follow the same rule. Direct: «Hvor bor du?» Indirect: «Kan du si meg hvor du bor?» — subject BEFORE verb inside the indirect question.',
        examples: [
          { no: 'Vet du om butikken er åpen?', en: 'Do you know if the shop is open?', note: 'om + subject + verb' },
          { no: 'Jeg vet ikke hvor bussen stopper.', en: 'I don’t know where the bus stops.', note: 'no inversion after hvor' },
          { no: 'Hun lurer på når prøven begynner.', en: 'She wonders when the test starts.' },
        ],
      },
      {
        heading: 'som-clauses: describing things',
        body: '«Som» is the all-purpose relative word — who, which and that rolled into one:\n\n• Mannen som bor ved siden av, er lege.\n• Boka som jeg leser, handler om Norge.\n\nWhen som is the OBJECT, you can drop it, just like English: «Boka (som) jeg leser …». When it is the subject, it must stay.\n\nWith ikke: «Folk som ikke betaler skatt, mister rettigheter.» — ikke before the verb, as always in subordinate clauses.',
        examples: [
          { no: 'Jeg har en kollega som kommer fra Polen.', en: 'I have a colleague who comes from Poland.' },
          { no: 'Det er det beste rådet jeg har fått.', en: 'That is the best advice I have received.', note: 'som dropped (object)' },
          { no: 'Elever som ikke møter opp, mister plassen.', en: 'Pupils who don’t show up lose their place.' },
        ],
      },
      {
        heading: 'The BIFF memory rule',
        body: 'Norwegian schoolchildren learn: «I Bisetning kommer Ikke Foran Finitt verb» — in a subordinate clause, ikke comes before the conjugated verb. BIFF.\n\nQuick self-test — fix these classic errors:\n\n✗ «Hun sier at hun kan ikke komme.» → ✓ «… at hun ikke kan komme.»\n✗ «Jeg vet ikke hvor er banken.» → ✓ «… hvor banken er.»\n✗ «Fordi jeg var syk, jeg ble hjemme.» → ✓ «Fordi jeg var syk, ble jeg hjemme.» (clause first → main clause inverts)',
        examples: [
          { no: 'Hun sier at hun ikke kan komme.', en: 'She says she cannot come.' },
          { no: 'Fordi jeg var syk, ble jeg hjemme.', en: 'Because I was ill, I stayed home.' },
        ],
      },
    ],
  },
  {
    id: 'g-danaar',
    title: 'da eller når?',
    titleEn: 'da or når?',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'Both mean "when" — Norwegians pick the right one by instinct. Here is the trick.',
    test: { to: '/quiz', label: 'Test deg: Grammatikkquiz' },
    sections: [
      {
        body: 'The rule Norwegians learn at school: «den gang DA, hver gang NÅR» — "that one time da, every time når".\n\n• da — ONE specific occasion or period in the past: Da jeg kom til Norge … (I came once.)\n• når — repeated events, and anything in the future: Når det snør, tar jeg buss. Når jeg blir pensjonist …',
        examples: [
          { no: 'Da jeg var liten, bodde vi i London.', en: 'When I was little, we lived in London.', note: 'one period in the past → da' },
          { no: 'Når jeg er sliten, legger jeg meg tidlig.', en: 'When I am tired, I go to bed early.', note: 'every time → når' },
          { no: 'Når jeg har bestått prøven, skal vi feire.', en: 'When I have passed the test, we will celebrate.', note: 'future → når' },
          { no: 'Da krigen var over, kom kongen hjem.', en: 'When the war was over, the king came home.', note: 'historic events → da' },
        ],
      },
      {
        heading: 'hvis, om, dersom — the "if" family',
        body: '• hvis — the everyday "if" for conditions: Hvis det regner, blir vi hjemme.\n• dersom — same meaning, more formal/written. You will meet it in letters from the kommune: «Dersom du ikke svarer innen fristen …».\n• om — "whether" in indirect questions: Jeg vet ikke om jeg kan komme. Also a formal alternative to hvis.\n\nThe error to avoid: using hvis for "whether". «Jeg lurer på hvis …» is wrong — it must be «Jeg lurer på om …».',
        examples: [
          { no: 'Hvis du vil, kan vi øve sammen.', en: 'If you want, we can practise together.' },
          { no: 'Vet du om prøven er digital?', en: 'Do you know whether the test is digital?', note: 'whether → om' },
          { no: 'Dersom søknaden mangler vedlegg, blir den avvist.', en: 'If the application lacks attachments, it will be rejected.', note: 'formal letters use dersom' },
        ],
      },
      {
        heading: 'når in questions — and time expressions to steal',
        body: 'As a question word, når is simply "when": «Når kommer bussen?» — main clause, so verb right after.\n\nRelated time expressions worth having ready in the oral exam:\n\n• med en gang (right away) • etter hvert (gradually) • i det siste (lately)\n• for … siden (ago): for tre år siden • om (in … from now): om to uker\n• innen (by/within a deadline): innen fredag — the bureaucratic favourite',
        examples: [
          { no: 'Når begynte du å lære norsk?', en: 'When did you start learning Norwegian?' },
          { no: 'Vi flyttet hit for ti år siden.', en: 'We moved here ten years ago.' },
          { no: 'Svar innen 14 dager.', en: 'Reply within 14 days.', note: 'innen = deadline' },
          { no: 'Prøven er om tre uker.', en: 'The test is in three weeks.', note: 'om = in (future)' },
        ],
      },
    ],
  },
  {
    id: 'g-adjektiv',
    title: 'Adjektiv: samsvar og gradbøyning',
    titleEn: 'Adjectives: agreement and comparison',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'stor, stort, store — adjectives change with the noun. Plus comparatives the exam loves.',
    test: { to: '/boyning', label: 'Test deg: Bøyning (adjektiv)' },
    sections: [
      {
        body: 'Adjectives agree with the noun’s gender and number:\n\n• en stor bil (masculine — base form)\n• et stort hus (neuter — add -t)\n• store biler / store hus (plural — add -e)\n\nAfter «er» the same agreement applies: «Huset er stort», «Bilene er store». Forgetting the -t with neuter nouns («huset er stor») is one of the most common errors at A2 — fixing it is a cheap way to sound B1.',
        examples: [
          { no: 'Det er et viktig spørsmål.', en: 'It is an important question.', note: 'adjectives ending in -ig never take -t' },
          { no: 'Vannet er kaldt.', en: 'The water is cold.', note: 'neuter → kaldt' },
          { no: 'Barna er sultne.', en: 'The children are hungry.', note: 'plural → -e' },
        ],
      },
      {
        heading: 'The definite form: always -e',
        body: 'After den/det/de (and after possessives), the adjective takes -e regardless of gender:\n\n• den store bilen, det store huset, de store barna\n• min beste venn, hans nye jobb\n\nSo an adjective really has three forms to control: base (stor), neuter (stort), definite/plural (store). Say them as a chant when you learn a new one: fin – fint – fine, dyr – dyrt – dyre.',
        examples: [
          { no: 'det norske samfunnet', en: 'Norwegian society', note: 'definite → -e' },
          { no: 'den viktigste regelen', en: 'the most important rule' },
          { no: 'mine gamle foreldre', en: 'my old parents', note: 'after possessive → -e' },
        ],
      },
      {
        heading: 'liten — the wildest adjective in the language',
        body: 'The word for "small" has its own private system, and it is far too common to avoid:\n\n• en liten bil (masc) • ei lita jente (fem) • et lite hus (neuter)\n• den lille bilen (definite singular!) • små barn (plural) • de små barna\n\nYes: liten → lille in the definite and → små in the plural. Learn it as a chant: liten – lita – lite – lille – små.',
        examples: [
          { no: 'Vi bor i et lite rekkehus.', en: 'We live in a small terraced house.' },
          { no: 'Den lille butikken på hjørnet er stengt.', en: 'The little shop on the corner is closed.' },
          { no: 'Små barn trenger mye søvn.', en: 'Small children need a lot of sleep.' },
        ],
      },
      {
        heading: 'Comparison',
        body: 'Regular pattern: -ere / -est: varm → varmere → varmest. Long adjectives use mer/mest: mer interessant, mest interessant. The high-frequency irregulars:\n\n• god – bedre – best\n• gammel – eldre – eldst\n• stor – større – størst\n• liten – mindre – minst\n• mye – mer – mest\n• mange – flere – flest\n• lang – lengre – lengst\n• ung – yngre – yngst\n• tung – tyngre – tyngst',
        examples: [
          { no: 'Norsk er lettere enn jeg trodde.', en: 'Norwegian is easier than I thought.' },
          { no: 'Jo mer du øver, desto bedre blir du.', en: 'The more you practise, the better you get.', note: 'jo + comparative … desto + comparative' },
          { no: 'Oslo er større enn Bergen, men Bergen har finere natur.', en: 'Oslo is bigger than Bergen, but Bergen has nicer nature.', note: 'opinion + comparison = B1 gold' },
        ],
      },
      {
        heading: 'Adjectives that refuse to change',
        body: 'A handful of everyday adjectives are indeclinable — same form everywhere:\n\n• bra: et bra tilbud, bra folk\n• gratis: et gratis kurs\n• moderne: et moderne hus\n• stille: et stille barn\n• spennende, imponerende … (all -ende words)\n\nAnd nationality adjectives in -sk take no -t: et norsk pass, et engelsk ord — but they DO take -e in plural/definite: norske aviser, det norske flagget.',
        examples: [
          { no: 'Kurset er gratis for alle.', en: 'The course is free for everyone.' },
          { no: 'Det norske flagget er rødt, hvitt og blått.', en: 'The Norwegian flag is red, white and blue.', note: 'and there the colours DO agree' },
        ],
      },
    ],
  },
  {
    id: 'g-possessiv',
    title: 'min, din, sin — eiendomsord',
    titleEn: 'Possessives: min, din, sin',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'Whose is it really? The sin/hans distinction English simply does not have.',
    test: { to: '/quiz', label: 'Test deg: Grammatikkquiz' },
    sections: [
      {
        body: 'Two things English speakers must learn:\n\n1. The possessive usually comes AFTER the noun, which then takes definite form: «bilen min» (my car), «familien min». Putting it before («min bil») is correct too but adds emphasis — MY car, not yours.\n\n2. Possessives agree with the THING owned, not the owner: min bil, mitt hus, mine barn.',
        examples: [
          { no: 'Dette er mannen min.', en: 'This is my husband.', note: 'noun in definite + min' },
          { no: 'Huset vårt ligger ved skolen.', en: 'Our house is by the school.' },
          { no: 'Mitt problem er uttalen.', en: 'MY problem is the pronunciation.', note: 'fronted = emphasis' },
        ],
      },
      {
        heading: 'The full table',
        body: 'Owner → forms (masc / neuter / plural):\n\n• jeg → min / mitt / mine\n• du → din / ditt / dine\n• han → hans (never changes)\n• hun → hennes (never changes)\n• vi → vår / vårt / våre\n• dere/de → deres (never changes)\n\nFeminine nouns can take mi/di/si with the -a form: boka mi, søstera di — common in speech; boken min is equally correct.',
        examples: [
          { no: 'barna mine – jobben din – huset vårt', en: 'my children – your job – our house' },
          { no: 'Datteren deres går i barnehagen.', en: 'Their daughter attends the kindergarten.' },
        ],
      },
      {
        heading: 'sin — the reflexive possessive',
        body: 'sin/si/sitt/sine points back to the SUBJECT of the clause. hans/hennes/deres points to someone else:\n\n• Per vasker bilen SIN. = Per washes his own car.\n• Per vasker bilen HANS. = Per washes some other man’s car.\n\nChoosing wrong changes the meaning — examiners test this deliberately. Rule of thumb: if the owner is the subject of the same clause, use sin.',
        examples: [
          { no: 'Hun besøker moren sin.', en: 'She visits her (own) mother.' },
          { no: 'Hun besøker moren hennes.', en: 'She visits her (someone else’s) mother.' },
          { no: 'De solgte huset sitt i fjor.', en: 'They sold their (own) house last year.', note: 'sitt with et-words' },
        ],
      },
      {
        heading: 'Where sin CANNOT go',
        body: 'Because sin points to the subject, it can never describe the subject itself:\n\n✗ «Per og kona SIN bor i Tromsø.» → ✓ «Per og kona HANS bor i Tromsø.» (kona is part of the subject — sin has nothing to point back to)\n\nAnd inside an at-clause, sin points to THAT clause’s subject: «Hun sa at Per hadde solgt bilen sin» = Per’s own car, not hers.\n\nBonus word: egen/eget/egne (own) strengthens possession: «Jeg har min egen bedrift» — I have my very own company.',
        examples: [
          { no: 'Per og kona hans bor i Tromsø.', en: 'Per and his wife live in Tromsø.', note: 'subject → hans, not sin' },
          { no: 'Hun har sitt eget kontor.', en: 'She has her own office.' },
        ],
      },
    ],
  },
  {
    id: 'g-preposisjoner',
    title: 'Preposisjoner: i, på, til',
    titleEn: 'Prepositions: i, på, til',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'i Oslo but på Hamar? på jobb but i butikken? The patterns and the fixed phrases.',
    test: { to: '/quiz', label: 'Test deg: Grammatikkquiz' },
    sections: [
      {
        body: 'No language’s prepositions map neatly onto another’s, but these patterns help:\n\n• i + cities and countries: i Oslo, i Norge (some inland towns take på: på Hamar, på Lillehammer, på Gjøvik)\n• på + activities and institutions: på jobb, på skolen, på kino, på butikken (everyday speech)\n• til + direction/destination: til Bergen, til legen, hjem til oss\n\nRule of thumb for surfaces vs rooms: på bordet (on the table), i skuffen (in the drawer).',
        examples: [
          { no: 'Jeg er på jobb til klokka fire.', en: 'I am at work until four.' },
          { no: 'Vi skal til Danmark i påsken.', en: 'We are going to Denmark at Easter.' },
          { no: 'Maten står på bordet.', en: 'The food is on the table.' },
        ],
      },
      {
        heading: 'The time system',
        body: 'Time prepositions follow their own logic — learn them as a set:\n\n• i + seasons/years/months as points: i sommer (this summer), i 2016, i januar\n• om + habitual times: om morgenen, om vinteren (= every morning/winter)\n• på + days: på mandag (this/next Monday) — but om mandagene (on Mondays generally)\n• for … siden = ago: for to år siden\n• om = in (future): om en time (an hour from now)\n• i + duration: i tre år (for three years) • på + how fast: på ti minutter (in ten minutes)',
        examples: [
          { no: 'Om vinteren er det mørkt klokka fire.', en: 'In the winter it is dark at four.', note: 'om = habitually' },
          { no: 'Jeg lærte det på tre uker.', en: 'I learned it in three weeks.', note: 'på = how fast' },
          { no: 'Vi har bodd her i ti år.', en: 'We have lived here for ten years.', note: 'i = duration' },
        ],
      },
      {
        heading: 'People and transport',
        body: '• hos + person = at someone’s place (French "chez"): hos legen, hos oss, hos frisøren\n• med + transport: med buss, med tog, med fly — but til fots (on foot)\n• til + person (to), fra + person (from): en gave fra mormor.\n\n«Hos» has no English equivalent, which is why learners under-use it — dropping it in naturally («Jeg var hos tannlegen i går») is an instant naturalness boost.',
        examples: [
          { no: 'Barna er hos besteforeldrene i helgen.', en: 'The kids are at their grandparents’ this weekend.' },
          { no: 'Jeg tar toget til jobb, men hjem kjører jeg med en kollega.', en: 'I take the train to work, but drive home with a colleague.' },
        ],
      },
      {
        heading: 'Fixed verb + preposition pairs',
        body: 'These just have to be learned as units — they are heavily tested:\n\n• glede seg TIL (look forward to)\n• være interessert I (interested in)\n• være redd FOR (afraid of)\n• stole PÅ (trust)\n• være enig MED noen I noe (agree with sb about sth)\n• klage PÅ (complain about)\n• søke OM (apply for)\n• passe PÅ (look after)\n• bry seg OM (care about)\n• være avhengig AV (depend on)\n• delta I (participate in)\n• bestå AV (consist of)',
        examples: [
          { no: 'Jeg gleder meg til helgen.', en: 'I am looking forward to the weekend.' },
          { no: 'Hun søkte om statsborgerskap i mars.', en: 'She applied for citizenship in March.' },
          { no: 'Du kan stole på meg.', en: 'You can trust me.' },
        ],
      },
    ],
  },
  {
    id: 'g-bindeord',
    title: 'Bindeord: fordi, derfor, likevel',
    titleEn: 'Connectors: because, therefore, nevertheless',
    category: 'grammatikk',
    level: 'B1',
    teaser: 'The glue words that turn A2 sentences into B1 speech — with their word-order effects.',
    test: { to: '/oversett', label: 'Test deg: Oversettelse' },
    sections: [
      {
        body: 'B1 speech is mostly A2 sentences JOINED PROPERLY. Learn these in pairs — cause and consequence:\n\n• fordi (because) starts a subordinate clause: normal word order after it.\n• derfor (therefore) starts a main clause: INVERSION after it.\n\n«Jeg er sliten fordi jeg sov dårlig.»\n«Jeg sov dårlig. Derfor er jeg sliten.» (derfor + verb + subject!)',
        examples: [
          { no: 'Vi ble hjemme fordi det regnet.', en: 'We stayed home because it rained.', note: 'fordi + normal order' },
          { no: 'Det regnet. Derfor ble vi hjemme.', en: 'It rained. Therefore we stayed home.', note: 'derfor + inversion' },
          { no: 'Det var dyrt. Likevel kjøpte vi det.', en: 'It was expensive. Nevertheless we bought it.' },
        ],
      },
      {
        heading: 'The three families of connectors',
        body: '1. og, men, eller, for, så — join two main clauses, NO word-order change: «Jeg leser og hun ser på TV.»\n\n2. fordi, hvis, når, selv om, at … — start subordinate clauses (subject before verb, ikke before verb).\n\n3. derfor, likevel, dessuten, etterpå, først, da — adverbs that trigger INVERSION when they open the sentence.\n\nMost word-order errors at B1 come from treating family 3 like family 1. If the connector opens the sentence and is not og/men/eller/for/så — invert.',
        examples: [
          { no: 'Jeg ville gå på tur, men det regnet.', en: 'I wanted to go hiking, but it rained.', note: 'men — no inversion' },
          { no: 'Dessuten er det billigere å ta bussen.', en: 'Besides, it is cheaper to take the bus.', note: 'dessuten + inversion' },
          { no: 'Først spiste vi, etterpå gikk vi en tur.', en: 'First we ate, afterwards we took a walk.', note: 'both halves invert' },
        ],
      },
      {
        heading: 'Sequencing a story',
        body: 'The oral exam always asks you to describe or narrate something. Skeleton that works every time:\n\n«Først … Deretter … Etter det … Til slutt …»\n\nEach of these opens a main clause, so each triggers inversion: «Først våknet jeg klokka seks. Deretter leverte jeg barna i barnehagen. Til slutt rakk jeg bussen — så vidt.» Practise narrating your morning with this skeleton until it is automatic.',
        examples: [
          { no: 'Først må du fylle ut skjemaet.', en: 'First you must fill in the form.' },
          { no: 'Deretter sender du inn søknaden.', en: 'Then you submit the application.' },
          { no: 'Til slutt får du svar i posten.', en: 'Finally you get a reply in the mail.' },
        ],
      },
      {
        heading: 'Upgrade your opinions',
        body: 'For the oral exam, practise frames you can reuse with any topic:\n\n• Etter min mening … (+ inversion): Etter min mening bør alle lære norsk.\n• På den ene siden …, på den andre siden …\n• Jeg er enig i at … / Jeg tviler på at …\n• Det viktigste for meg er at …\n• Det kommer an på … (it depends on …)\n\nDrop one of these into every answer and the examiner hears structure, not just vocabulary.',
        examples: [
          { no: 'Etter min mening er vinteren for lang.', en: 'In my opinion the winter is too long.' },
          { no: 'Det kommer an på været.', en: 'It depends on the weather.', note: 'universal answer-starter' },
          { no: 'På den ene siden er byen dyr, på den andre siden er lønna høyere.', en: 'On the one hand the city is expensive, on the other hand the pay is higher.' },
        ],
      },
    ],
  },
  {
    id: 'g-passiv',
    title: 'Passiv og formelt språk',
    titleEn: 'The passive and formal language',
    category: 'grammatikk',
    level: 'B2',
    teaser: 'bli-passive, s-passive and the style of letters from UDI — decoding official Norwegian.',
    test: { to: '/setninger', label: 'Test deg: Setningsbygging (B2)' },
    sections: [
      {
        body: 'Official Norwegian (NAV letters, UDI decisions, news) leans on the passive. Two forms:\n\n• bli-passive: Søknaden BLIR BEHANDLET innen tre uker. (is being processed)\n• s-passive: Søknaden BEHANDLES innen tre uker. (same meaning, more formal/written)\n\nWith modals, the s-passive is standard: «Skjemaet må leveres innen fristen» → må leveres, skal sendes, kan hentes. Recognising these instantly makes bureaucratic letters far less scary.',
        examples: [
          { no: 'Prøven avholdes fire ganger i året.', en: 'The test is held four times a year.' },
          { no: 'Søknaden ble avslått.', en: 'The application was rejected.' },
          { no: 'Dokumentene må leveres innen fristen.', en: 'The documents must be submitted by the deadline.' },
        ],
      },
      {
        heading: 'Which passive when?',
        body: 'Rules of thumb:\n\n• s-passive for rules, routines and instructions (timeless): «Butikken åpnes klokka ni.»\n• bli-passive for single, completed events: «Han ble innkalt til intervju.»\n• In the past tense, bli-passive dominates: ble sendt, ble bygget, ble vedtatt.\n\nAlternative to both: the impersonal «man» — «Man må søke innen fristen» (one must apply before the deadline). Very common in speech, and a safe way to avoid the passive entirely in your own writing.',
        examples: [
          { no: 'Det snakkes norsk og samisk i Norge.', en: 'Norwegian and Sami are spoken in Norway.' },
          { no: 'Grunnloven ble skrevet i 1814.', en: 'The constitution was written in 1814.' },
          { no: 'Man må ha gyldig legitimasjon.', en: 'One must have valid ID.', note: 'man = passive avoidance' },
        ],
      },
      {
        heading: 'Det-constructions',
        body: 'Formal Norwegian also loves starting with det:\n\n• Det sies at … (it is said that)\n• Det er ingen tvil om at … (there is no doubt that)\n• Det lønner seg å … (it pays to)\n• Det kreves at … (it is required that)\n• Det forventes at … (it is expected that)\n\nThese are ready-made B2 frames for the writing test — memorise them as whole chunks.',
        examples: [
          { no: 'Det sies at nordmenn er reserverte.', en: 'It is said that Norwegians are reserved.' },
          { no: 'Det kreves B1-nivå for statsborgerskap.', en: 'B1 level is required for citizenship.' },
          { no: 'Det er ingen tvil om at språket er nøkkelen.', en: 'There is no doubt that the language is the key.' },
        ],
      },
      {
        heading: 'Reading a letter from the kommune',
        body: 'The style you will meet, decoded:\n\n• «Vi viser til …» = referring to (your letter/application of …)\n• «Vedlagt følger …» = enclosed is …\n• «Du bes om å …» = you are asked to … (s-passive of be!)\n• «Vedtaket kan påklages innen tre uker.» = the decision can be appealed …\n• «Ved eventuelle spørsmål, ta kontakt …» = if you have any questions …\n\nWrite your replies simpler than they write to you — clear subject, verb second, short sentences. Officials appreciate plain Norwegian; nobody expects you to imitate kansellistil.',
        examples: [
          { no: 'Vi viser til søknaden din av 3. mars.', en: 'We refer to your application of 3 March.' },
          { no: 'Vedtaket kan påklages innen tre uker.', en: 'The decision may be appealed within three weeks.' },
        ],
      },
    ],
  },
]
