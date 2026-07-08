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
        ],
      },
      {
        heading: 'The traps',
        body: 'Short neuter words (one syllable) get NO ending in the indefinite plural: et barn → flere barn, et år → to år, et hus → mange hus. Saying «flere barner» is a classic immigrant error that graders notice immediately.\n\nSome everyday words change their vowel in the plural — these just have to be memorised:',
        examples: [
          { no: 'en bok – bøker', en: 'a book – books' },
          { no: 'ei/en hånd – hender', en: 'a hand – hands' },
          { no: 'en fot – føtter', en: 'a foot – feet' },
          { no: 'et tre – trær', en: 'a tree – trees' },
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
        body: 'Norwegian verbs are simpler than English ones: no -s for he/she, no continuous forms. «Jeg jobber» covers both "I work" and "I am working".\n\nThe three tenses you need daily:\n\n• Presens (now / habits): jobber, bor, snakker\n• Preteritum (finished past WITH a time): I går jobbet jeg. \n• Presens perfektum (past that touches now, or no time given): Jeg har jobbet her i ti år.',
        examples: [
          { no: 'I fjor bodde jeg i Bergen.', en: 'Last year I lived in Bergen.', note: 'time stated → preteritum' },
          { no: 'Jeg har bodd i Norge i ti år.', en: 'I have lived in Norway for ten years.', note: 'still true → perfektum' },
          { no: 'Har du noen gang vært i Tromsø?', en: 'Have you ever been to Tromsø?', note: 'no specific time → perfektum' },
        ],
      },
      {
        heading: 'The irregular verbs worth over-learning',
        body: 'Most verbs are regular (-et or -te in the past), but the most FREQUENT verbs are irregular. These twelve appear constantly in speech and on the exam:',
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
        ],
      },
      {
        heading: 'Subordinate clauses never invert',
        body: 'Inside a subordinate clause the order is always subject – (ikke) – verb, no matter what. Inversion (verb before subject) only ever happens in main clauses. Compare:\n\n«I dag kommer han ikke.» (main clause, inverted)\n«Jeg vet at han ikke kommer i dag.» (subordinate — no inversion, ikke before verb)',
        examples: [
          { no: 'Vet du om butikken er åpen?', en: 'Do you know if the shop is open?', note: 'om + subject + verb' },
          { no: 'Jeg vet ikke hvor bussen stopper.', en: 'I don’t know where the bus stops.', note: 'no inversion after hvor' },
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
        body: 'The rule Norwegians learn at school: «den gang DA, hver gang NÅR» — "that one time da, every time når".\n\n• da — ONE specific occasion in the past: Da jeg kom til Norge … (I came once.)\n• når — repeated events, and anything in the future: Når det snør, tar jeg buss. Når jeg blir pensjonist …\n\nRelated pair: «hvis» means if (condition), «om» means whether (indirect question). «Vet du om butikken er åpen?» — Do you know WHETHER the shop is open.',
        examples: [
          { no: 'Da jeg var liten, bodde vi i London.', en: 'When I was little, we lived in London.', note: 'one period in the past → da' },
          { no: 'Når jeg er sliten, legger jeg meg tidlig.', en: 'When I am tired, I go to bed early.', note: 'every time → når' },
          { no: 'Når jeg har bestått prøven, skal vi feire.', en: 'When I have passed the test, we will celebrate.', note: 'future → når' },
          { no: 'Hvis det regner, blir vi hjemme.', en: 'If it rains, we stay home.', note: 'condition → hvis' },
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
        heading: 'Comparison',
        body: 'Regular pattern: -ere / -est: varm → varmere → varmest. Long adjectives use mer/mest: mer interessant, mest interessant. The high-frequency irregulars:\n\n• god – bedre – best\n• gammel – eldre – eldst\n• stor – større – størst\n• liten – mindre – minst\n• mye – mer – mest\n• mange – flere – flest',
        examples: [
          { no: 'Norsk er lettere enn jeg trodde.', en: 'Norwegian is easier than I thought.' },
          { no: 'Jo mer du øver, desto bedre blir du.', en: 'The more you practise, the better you get.', note: 'jo + comparative … desto + comparative' },
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
        body: 'Two things English speakers must learn:\n\n1. The possessive usually comes AFTER the noun, which then takes definite form: «bilen min» (my car), «familien min». Putting it before («min bil») is correct too but sounds emphatic.\n\n2. sin/si/sitt/sine points back to the SUBJECT of the sentence. hans/hennes points to someone else. «Per vasker bilen sin» = Per washes his own car. «Per vasker bilen hans» = Per washes some other man’s car. Choosing wrong changes the meaning — examiners test this deliberately.',
        examples: [
          { no: 'Hun besøker moren sin.', en: 'She visits her (own) mother.' },
          { no: 'Hun besøker moren hennes.', en: 'She visits her (someone else’s) mother.' },
          { no: 'De solgte huset sitt i fjor.', en: 'They sold their (own) house last year.', note: 'sitt with et-words' },
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
        body: 'No language’s prepositions map neatly onto another’s, but these patterns help:\n\n• i + cities and countries: i Oslo, i Norge (some small places take på: på Hamar, på Lillehammer)\n• på + activities and institutions: på jobb, på skolen, på kino, på butikken (in everyday speech)\n• til + direction/destination: til Bergen, til legen, hjem til oss\n\nTime: i + seasons and years (i sommer, i 2020), på + days when repeated is om: om morgenen, om vinteren = habitually.',
        examples: [
          { no: 'Jeg er på jobb til klokka fire.', en: 'I am at work until four.' },
          { no: 'Vi skal til Danmark i påsken.', en: 'We are going to Denmark at Easter.' },
          { no: 'Om vinteren er det mørkt klokka fire.', en: 'In the winter it is dark at four.', note: 'om = habitually' },
        ],
      },
      {
        heading: 'Fixed verb + preposition pairs',
        body: 'These just have to be learned as units — they are heavily tested:\n\n• glede seg TIL (look forward to)\n• være interessert I (interested in)\n• være redd FOR (afraid of)\n• stole PÅ (trust)\n• være enig MED noen I noe (agree with sb about sth)\n• klage PÅ (complain about)\n• søke OM (apply for)',
        examples: [
          { no: 'Jeg gleder meg til helgen.', en: 'I am looking forward to the weekend.' },
          { no: 'Hun er interessert i historie.', en: 'She is interested in history.' },
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
        body: 'B1 speech is mostly A2 sentences JOINED PROPERLY. Learn these in pairs — cause and consequence:\n\n• fordi (because) starts a subordinate clause: normal word order after it.\n• derfor (therefore) starts a main clause: INVERSION after it.\n\n«Jeg er sliten fordi jeg sov dårlig.»\n«Jeg sov dårlig. Derfor er jeg sliten.» (derfor + verb + subject!)\n\nOther connectors that trigger inversion when they start the sentence: likevel (nevertheless), dessuten (besides), etterpå (afterwards), først (first).',
        examples: [
          { no: 'Vi ble hjemme fordi det regnet.', en: 'We stayed home because it rained.', note: 'fordi + normal order' },
          { no: 'Det regnet. Derfor ble vi hjemme.', en: 'It rained. Therefore we stayed home.', note: 'derfor + inversion' },
          { no: 'Det var dyrt. Likevel kjøpte vi det.', en: 'It was expensive. Nevertheless we bought it.' },
          { no: 'Det er dyrt, og dessuten tar det lang tid.', en: 'It is expensive, and besides, it takes a long time.' },
        ],
      },
      {
        heading: 'Upgrade your opinions',
        body: 'For the oral exam, practise frames you can reuse with any topic:\n\n• Etter min mening … (+ inversion): Etter min mening bør alle lære norsk.\n• På den ene siden …, på den andre siden …\n• Jeg er enig i at … / Jeg tviler på at …\n• Det viktigste for meg er at …\n\nDrop one of these into every answer and the examiner hears structure, not just vocabulary.',
        examples: [
          { no: 'Etter min mening er vinteren for lang.', en: 'In my opinion the winter is too long.' },
          { no: 'Det viktigste for meg er at barna trives.', en: 'The most important thing for me is that the kids are happy.' },
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
        heading: 'Det-constructions',
        body: 'Formal Norwegian also loves starting with det:\n\n• Det sies at … (it is said that)\n• Det er ingen tvil om at … (there is no doubt that)\n• Det lønner seg å … (it pays to)\n\nThese are ready-made B2 frames for the writing test — memorise them as whole chunks.',
        examples: [
          { no: 'Det sies at nordmenn er reserverte.', en: 'It is said that Norwegians are reserved.' },
          { no: 'Det er ingen tvil om at språket er nøkkelen.', en: 'There is no doubt that the language is the key.' },
        ],
      },
    ],
  },
]
