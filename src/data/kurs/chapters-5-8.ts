import type { KursChapter } from '../../types'

/** Nybegynnerkurs chapters 5–8 — see chapters-1-4.ts for the approach. */
export const chapters5to8: KursChapter[] = [
  {
    id: '5',
    course: 'nybegynner',
    n: 5,
    title: 'I butikken',
    titleEn: 'At the shop',
    level: 'A1',
    theme: 'Pets, football, buying food and making new friends.',
    canDo: [
      { no: 'Jeg kan handle mat og spørre om pris.', en: 'I can buy food and ask about prices.' },
      { no: 'Jeg kan beskrive ting med adjektiver.', en: 'I can describe things with adjectives.' },
      { no: 'Jeg kan bruke refleksive verb som «å glede seg».', en: 'I can use reflexive verbs like «å glede seg».' },
    ],
    dialogues: ['Katten', 'Fotball', 'I butikken', 'To nye venninner'],
    phrases: [
      { no: 'Hvor mye koster det?', en: 'How much does it cost?' },
      { no: 'Jeg vil gjerne ha en kilo epler.', en: 'I’d like a kilo of apples.' },
      { no: 'Kan jeg betale med kort?', en: 'Can I pay by card?' },
      { no: 'Trenger du pose? – Nei takk.', en: 'Do you need a bag? – No thanks.' },
      { no: 'Jeg gleder meg til helgen!', en: 'I’m looking forward to the weekend!' },
    ],
    grammar: [
      {
        heading: 'Reflexive pronouns and verbs',
        body: 'Some verbs need a pronoun that points back to the subject. The reflexive pronoun is the same as the object pronoun, except for 3rd person, which is always «seg»:\n\njeg vasker meg · du vasker deg · han/hun vasker seg · vi vasker oss · dere vasker dere · de vasker seg\n\nCommon reflexive verbs: å glede seg (til) = look forward to · å kose seg = have a nice time · å sette seg = sit down · å skynde seg = hurry · å føle seg = feel · å kle på seg = get dressed.',
        examples: [
          { no: 'Vi gleder oss til ferien.', en: 'We are looking forward to the holiday.' },
          { no: 'Sett deg, er du snill.', en: 'Sit down, please.' },
          { no: 'De koser seg på hytta.', en: 'They are having a lovely time at the cabin.' },
        ],
      },
      {
        heading: 'Adjectives before the noun (attributive)',
        body: 'An adjective agrees with the noun it describes. With the indefinite article:\n\nen fin bil · ei fin jakke · et fint hus · fine biler (plural)\n\nRule: + -t for et-words, + -e for plural. Adjectives ending in -ig don’t take -t: et hyggelig hus.',
        examples: [
          { no: 'Vi har en stor hund.', en: 'We have a big dog.' },
          { no: 'Det er et godt brød.', en: 'It’s a good loaf.', note: 'god → godt' },
          { no: 'Hun kjøper ferske rundstykker.', en: 'She buys fresh rolls.', note: 'plural -e' },
        ],
      },
      {
        heading: 'Adjectives after «er» (predicative)',
        body: 'The same endings apply when the adjective comes after «er/blir»:\n\nBilen er fin. · Huset er fint. · Bilene er fine.\n\nLook at what the adjective describes — that noun decides the ending.',
        examples: [
          { no: 'Brødet er ferskt.', en: 'The bread is fresh.', note: 'et brød → ferskt' },
          { no: 'Eplene er søte.', en: 'The apples are sweet.' },
        ],
      },
      {
        heading: 'Where? vs. where to? — hjemme/hjem, ute/ut, inne/inn',
        body: 'Some place words have two forms: one for being somewhere (no movement), one for going there (movement):\n\nhjemme / hjem · ute / ut · inne / inn · oppe / opp · nede / ned · borte / bort\n\nJeg er hjemme (I am at home) vs. Jeg går hjem (I’m going home).',
        examples: [
          { no: 'Barna leker ute.', en: 'The children are playing outside.' },
          { no: 'Kom inn!', en: 'Come in!' },
          { no: 'Jeg drar hjem klokka fire.', en: 'I go home at four.' },
        ],
      },
      {
        heading: 'Prepositions of place: i, på, til, hos',
        body: 'i = in (inside, cities, countries): i butikken, i Bergen\npå = on / at (surfaces, many institutions): på bordet, på kino, på butikken (in speech), på biblioteket\ntil = to (direction): til byen, til Norge\nhos = at someone’s place: hos legen, hos mormor\n\n«Til» shows movement towards; «i/på/hos» show where something is.',
        examples: [
          { no: 'Jeg går til legen.', en: 'I am going to the doctor.' },
          { no: 'Jeg er hos legen.', en: 'I am at the doctor’s.' },
          { no: 'Melka står i kjøleskapet.', en: 'The milk is in the fridge.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'The letter «g» is sometimes silent',
      body: 'g is silent in -ig and -lig at the end of a word: hyggelig, ferdig, billig.\n\nBefore i and y, g often sounds like English «y»: gi (give), gift (married), gym.\n\nIn «jeg» the g is silent or very soft: «jæi».',
    },
    speaking: [
      'Hva kjøper du vanligvis i butikken?',
      'Hva koster en liter melk der du bor?',
      'Hva gleder du deg til?',
      'Beskriv hjemmet ditt med tre adjektiver.',
      'Har du et kjæledyr? Hvordan ser det ut?',
    ],
    quiz: [
      { id: 'k05-q1', question: 'Hun gleder ___ til jul.', options: ['seg', 'henne', 'sin', 'hun'], answer: 0, explanation: 'Third person reflexive is always «seg».', level: 'A1', topic: 'refleksiv' },
      { id: 'k05-q2', question: 'Vi har et ___ hus.', options: ['stort', 'stor', 'store', 'storte'], answer: 0, explanation: 'et-words take -t: et stort hus.', level: 'A1', topic: 'adjektiv' },
      { id: 'k05-q3', question: 'Rundstykkene er ___.', options: ['ferske', 'fersk', 'ferskt', 'ferskene'], answer: 0, explanation: 'Plural → -e.', level: 'A1', topic: 'adjektiv' },
      { id: 'k05-q4', question: 'Jeg går ___ nå. (going home)', options: ['hjem', 'hjemme', 'hjemmet', 'til hjem'], answer: 0, explanation: 'Movement → hjem. Being there → hjemme.', level: 'A1', topic: 'adverb' },
      { id: 'k05-q5', question: 'Sett ___! (to «du»)', options: ['deg', 'seg', 'du', 'din'], answer: 0, explanation: 'Reflexive for «du» is «deg».', level: 'A1', topic: 'refleksiv' },
      { id: 'k05-q6', question: 'Det er et ___ menneske.', options: ['hyggelig', 'hyggeligt', 'hyggelige', 'hyggeligte'], answer: 0, explanation: 'Adjectives ending in -ig take no -t.', level: 'A1', topic: 'adjektiv' },
      { id: 'k05-q7', question: 'Jeg er ___ legen klokka to.', options: ['hos', 'til', 'på', 'med'], answer: 0, explanation: '«hos legen» = at the doctor’s (a person’s place).', level: 'A1', topic: 'preposisjoner' },
    ],
    sentences: [
      { id: 'k05-s1', no: 'Vi gleder oss til helgen', en: 'We are looking forward to the weekend', level: 'A1', focus: 'refleksive verb', hint: 'glede + oss + til.' },
      { id: 'k05-s2', no: 'Jeg vil gjerne ha et stort brød', en: 'I would like a big loaf', level: 'A1', focus: 'adjektiv -t', hint: 'et + adjective with -t + noun.' },
      { id: 'k05-s3', no: 'Hvor mye koster eplene', en: 'How much do the apples cost', level: 'A1', focus: 'spørreord', hint: 'Hvor mye + verb + subject.' },
      { id: 'k05-s4', no: 'Barna leker ute i hagen', en: 'The children are playing outside in the garden', level: 'A1', focus: 'ute/ut', hint: 'No movement → ute.' },
      { id: 'k05-s5', no: 'Kan jeg betale med kort', en: 'Can I pay by card', level: 'A1', focus: 'modalverb', hint: 'Kan + jeg + infinitive.' },
    ],
  },

  {
    id: '6',
    course: 'nybegynner',
    n: 6,
    title: 'I byen',
    titleEn: 'In town',
    level: 'A1',
    theme: 'Breakfast, a trip into town, the sales and ordering at a café.',
    canDo: [
      { no: 'Jeg kan bestille på kafé.', en: 'I can order at a café.' },
      { no: 'Jeg kan peke ut ting med denne/dette/disse.', en: 'I can point things out with this/these.' },
      { no: 'Jeg kan bruke bestemt form av adjektiver.', en: 'I can use adjectives with the definite form.' },
    ],
    dialogues: ['Frokost', 'I byen', 'Salg', 'På kafé'],
    phrases: [
      { no: 'Jeg skal ha en kaffe latte og et stykke eplekake.', en: 'I’ll have a latte and a slice of apple cake.' },
      { no: 'Har du denne i en annen størrelse?', en: 'Do you have this in another size?' },
      { no: 'Kan jeg prøve den?', en: 'Can I try it on?' },
      { no: 'Det blir 89 kroner.', en: 'That’ll be 89 kroner.' },
      { no: 'Tast koden din, takk.', en: 'Enter your PIN, please.' },
    ],
    grammar: [
      {
        heading: 'Demonstratives: denne, dette, disse / den, det, de',
        body: 'this = denne (en/ei) · dette (et) · disse (plural)\nthat = den (en/ei) · det (et) · de (plural)\n\nThe noun after a demonstrative is in the DEFINITE form: denne jakka (this jacket), det huset (that house), disse skoene (these shoes).',
        examples: [
          { no: 'Denne jakka er for stor.', en: 'This jacket is too big.' },
          { no: 'Dette brødet er godt.', en: 'This bread is good.' },
          { no: 'Disse skoene er på salg.', en: 'These shoes are on sale.' },
        ],
      },
      {
        heading: 'Infinitive with «å» — and when to leave it out',
        body: 'Use «å» before an infinitive after most verbs and expressions: liker å lese, begynner å regne, har lyst til å gå.\n\nNO «å» after modal verbs (kan, må, vil, skal, bør) or after «få» and «la».',
        examples: [
          { no: 'Jeg liker å bake.', en: 'I like baking.' },
          { no: 'Det begynner å snø.', en: 'It’s starting to snow.' },
          { no: 'Jeg må handle.', en: 'I have to go shopping.', note: 'modal → no å' },
        ],
      },
      {
        heading: 'Modals without a main verb: «Jeg skal til byen»',
        body: 'With a place or direction, Norwegians often drop the verb of movement after a modal verb:\n\nJeg skal til byen. (= skal dra til byen)\nVi må hjem nå. (= må gå hjem)\nHun vil ut. (= vil gå ut)',
        examples: [
          { no: 'Jeg skal på kafé med Lise.', en: 'I’m going to a café with Lise.' },
          { no: 'Vi må hjem før åtte.', en: 'We have to be home before eight.' },
        ],
      },
      {
        heading: 'Adjectives with the definite form',
        body: 'In the definite form, the adjective always ends in -e, and a separate article (den, det, de) goes in front:\n\nden fine bilen · den fine jakka · det fine huset · de fine bilene\n\nYes — «the» is marked twice: den … bilen. This «double definite» is typical of Norwegian.',
        examples: [
          { no: 'Den røde kåpa er på salg.', en: 'The red coat is on sale.' },
          { no: 'Jeg liker det store vinduet.', en: 'I like the big window.' },
        ],
      },
      {
        heading: 'Irregular adjectives: liten, annen, gammel',
        body: 'liten (small): en liten bil · ei lita jente · et lite hus · små hus · den lille bilen\nannen (other): en annen · ei anna · et annet · andre\ngammel (old): gammel · gammelt · gamle',
        examples: [
          { no: 'Vi bor i et lite hus.', en: 'We live in a small house.' },
          { no: 'Har du en annen farge?', en: 'Do you have another colour?' },
          { no: 'De små barna sover.', en: 'The small children are asleep.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'The «rd», «rn», «rt», «rs» sounds (retroflex)',
      body: 'In Eastern Norwegian, r + d/l/n/s/t merge into one sound made with the tongue curled back:\n\nrs → «sh»: norsk, først, kurs\nrt: kort, sort\nrn: barn, gjerne\nrd: bord (the d is silent)\n\n«Norsk» sounds like «nosjk».',
    },
    speaking: [
      'Hva spiser du til frokost?',
      'Hva bestiller du på kafé?',
      'Beskriv klærne du har på deg i dag.',
      'Hva liker du å gjøre i byen?',
      'Hva må du kjøpe denne uka?',
    ],
    quiz: [
      { id: 'k06-q1', question: '___ huset er gammelt.', options: ['Dette', 'Denne', 'Disse', 'Den'], answer: 0, explanation: 'et hus → dette (this).', level: 'A1', topic: 'demonstrativ' },
      { id: 'k06-q2', question: 'Jeg liker ___ lese.', options: ['å', '—', 'og', 'til'], answer: 0, explanation: '«liker» is not a modal verb, so it takes «å».', level: 'A1', topic: 'infinitiv' },
      { id: 'k06-q3', question: 'Den ___ bilen er min. (rød)', options: ['røde', 'rød', 'rødt', 'rødene'], answer: 0, explanation: 'Definite form → adjective always ends in -e.', level: 'A1', topic: 'adjektiv' },
      { id: 'k06-q4', question: 'Vi bor i et ___ hus.', options: ['lite', 'liten', 'lita', 'lille'], answer: 0, explanation: 'liten → et lite hus.', level: 'A1', topic: 'adjektiv' },
      { id: 'k06-q5', question: '«Jeg skal til byen» means …', options: ['I’m going into town.', 'I should be in town.', 'I have the town.', 'I live in town.'], answer: 0, explanation: 'Modal + direction: the movement verb is understood.', level: 'A1', topic: 'modalverb' },
      { id: 'k06-q6', question: 'Disse ___ er for små.', options: ['skoene', 'sko', 'skoen', 'skoa'], answer: 0, explanation: 'After denne/dette/disse the noun is definite: disse skoene.', level: 'A1', topic: 'demonstrativ' },
      { id: 'k06-q7', question: 'De ___ barna leker. (liten)', options: ['små', 'lille', 'lite', 'liten'], answer: 0, explanation: 'Plural of liten is «små».', level: 'A1', topic: 'adjektiv' },
    ],
    sentences: [
      { id: 'k06-s1', no: 'Denne jakka er for stor', en: 'This jacket is too big', level: 'A1', focus: 'demonstrativ', hint: 'denne + definite noun.' },
      { id: 'k06-s2', no: 'Den røde kåpa er på salg', en: 'The red coat is on sale', level: 'A1', focus: 'dobbel bestemmelse', hint: 'den + adjective-e + definite noun.' },
      { id: 'k06-s3', no: 'Jeg skal ha en kaffe og et stykke kake', en: 'I’ll have a coffee and a piece of cake', level: 'A1', focus: 'bestille', hint: 'Jeg skal ha …' },
      { id: 'k06-s4', no: 'Vi må hjem før klokka åtte', en: 'We have to be home before eight', level: 'A1', focus: 'modal uten hovedverb', hint: 'må + hjem.' },
      { id: 'k06-s5', no: 'Jeg liker å gå i byen på lørdager', en: 'I like going into town on Saturdays', level: 'A1', focus: 'å + infinitiv', hint: 'liker + å + infinitive.' },
    ],
  },

  {
    id: '7',
    course: 'nybegynner',
    n: 7,
    title: 'Jobb og skole',
    titleEn: 'Work and school',
    level: 'A2',
    theme: 'A working day at the office, kindergarten and the first day at school — told in the past tense.',
    canDo: [
      { no: 'Jeg kan fortelle hva jeg gjorde i går.', en: 'I can tell what I did yesterday.' },
      { no: 'Jeg kan bøye regelrette verb i preteritum.', en: 'I can put regular verbs in the past tense.' },
      { no: 'Jeg kan snakke om jobben min.', en: 'I can talk about my job.' },
    ],
    dialogues: ['Alex våkner tidlig', 'På kontoret', 'Om barnehagen', 'Første dag på skolen'],
    phrases: [
      { no: 'Hva gjorde du i helgen?', en: 'What did you do at the weekend?' },
      { no: 'Jeg jobber som ingeniør.', en: 'I work as an engineer.' },
      { no: 'Jeg begynte i ny jobb for to uker siden.', en: 'I started a new job two weeks ago.' },
      { no: 'Det var en lang dag.', en: 'It was a long day.' },
      { no: 'Hvordan var første skoledag?', en: 'How was the first day at school?' },
    ],
    grammar: [
      {
        heading: 'The past tense (preteritum)',
        body: 'Norwegian past tense is one form for every person: jeg/du/hun/vi snakket.\n\nRegular verbs fall into four groups. You can’t always predict the group, but these rules of thumb help a lot:',
        examples: [
          { no: 'I går jobbet jeg hjemmefra.', en: 'Yesterday I worked from home.' },
          { no: 'Vi spiste middag klokka fem.', en: 'We ate dinner at five.' },
        ],
      },
      {
        heading: 'Group 1: -et (two or more consonants before -e)',
        body: 'å snakke → snakket · å jobbe → jobbet · å vaske → vasket · å hoppe → hoppet\n\nThe biggest group — when in doubt, -et is the safest guess.',
        examples: [{ no: 'Han snakket med sjefen.', en: 'He talked to the boss.' }],
      },
      {
        heading: 'Group 2: -te (one consonant before -e)',
        body: 'å spise → spiste · å lese → leste · å kjøre → kjørte · å høre → hørte · å lære → lærte\n\nAll verbs in -ere: studere → studerte · parkere → parkerte.',
        examples: [{ no: 'Hun kjørte til jobben.', en: 'She drove to work.' }],
      },
      {
        heading: 'Group 3: -de (stem ending in -v, -g, or a diphthong)',
        body: 'å leve → levde · å bygge → bygde · å prøve → prøvde · å greie → greide',
        examples: [{ no: 'De bygde et nytt hus.', en: 'They built a new house.' }],
      },
      {
        heading: 'Group 4: -dde (short verbs ending in a stressed vowel)',
        body: 'å bo → bodde · å tro → trodde · å bety → betydde · å snu → snudde',
        examples: [{ no: 'Vi bodde i Stavanger før.', en: 'We used to live in Stavanger.' }],
      },
      {
        heading: 'Irregular (strong) verbs',
        body: 'The most common verbs are irregular — learn them as a list:\n\nvære → var · ha → hadde · gå → gikk · komme → kom · ta → tok · se → så · si → sa · gjøre → gjorde · få → fikk · gi → ga · dra → dro · skrive → skrev · sitte → satt · ligge → lå · stå → sto · sove → sov · drikke → drakk · finne → fant · vite → visste\n\nThe Bøyning module drills all of these.',
        examples: [
          { no: 'Jeg gikk til skolen.', en: 'I walked to school.' },
          { no: 'Det var kaldt i går.', en: 'It was cold yesterday.' },
        ],
      },
      {
        heading: 'Nouns with special plurals',
        body: 'Masculine nouns ending in -er (often people) take -e in plural and -ne in definite plural:\n\nen lærer – lærere – lærerne · en arbeider – arbeidere – arbeiderne',
        examples: [{ no: 'Lærerne er på møte.', en: 'The teachers are at a meeting.' }],
      },
      {
        heading: 'Quantities',
        body: 'mye (much, uncountable) vs. mange (many, countable) · lite (little) vs. få (few) · litt (a bit) · noen (some) · flere (more, countable) · mer (more, uncountable)',
        examples: [
          { no: 'Vi har mye arbeid og mange møter.', en: 'We have a lot of work and many meetings.' },
          { no: 'Kan jeg få litt mer kaffe?', en: 'Can I have a bit more coffee?' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Tone: «bønder» vs. «bønner»',
      body: 'Norwegian has two word melodies (tonemes). Tone 1 is a simple fall-rise; tone 2 has a dip and a second rise — the «sing-song» of Norwegian.\n\nMost one-syllable words have tone 1. Many two-syllable words have tone 2: «jente», «gate», «snakke».\n\nThe classic pair: «bønder» (farmers, tone 1) vs. «bønner» (beans/prayers, tone 2). Listen to the LearnNoW pronunciation pages and copy the melody, not just the sounds.',
    },
    speaking: [
      'Hva gjorde du i går?',
      'Fortell om din første dag på jobb i Norge.',
      'Hvor bodde du før du kom til Norge?',
      'Hva jobber du som? Hva gjør du på jobben?',
      'Hva spiste du til middag i går?',
    ],
    quiz: [
      { id: 'k07-q1', question: 'I går ___ jeg hjemmefra. (jobbe)', options: ['jobbet', 'jobbte', 'jobbde', 'jobber'], answer: 0, explanation: 'Two consonants before -e → group 1, -et.', level: 'A2', topic: 'preteritum' },
      { id: 'k07-q2', question: 'Vi ___ i Stavanger før. (bo)', options: ['bodde', 'boet', 'bode', 'bodet'], answer: 0, explanation: 'Short verb ending in a vowel → -dde.', level: 'A2', topic: 'preteritum' },
      { id: 'k07-q3', question: 'Past tense of «å gå»:', options: ['gikk', 'gådde', 'gått', 'gikket'], answer: 0, explanation: 'Irregular: gå – gikk – har gått.', level: 'A2', topic: 'preteritum' },
      { id: 'k07-q4', question: 'Hun ___ avisa i morges. (lese)', options: ['leste', 'leset', 'les', 'lest'], answer: 0, explanation: 'One consonant before -e → group 2, -te.', level: 'A2', topic: 'preteritum' },
      { id: 'k07-q5', question: 'Det er ___ folk på bussen i dag.', options: ['mange', 'mye', 'mer', 'lite'], answer: 0, explanation: 'People can be counted → mange.', level: 'A2', topic: 'kvantitet' },
      { id: 'k07-q6', question: 'Past tense of «å være»:', options: ['var', 'vært', 'været', 'vardde'], answer: 0, explanation: 'være – var – har vært.', level: 'A2', topic: 'preteritum' },
      { id: 'k07-q7', question: 'Hun ___ medisin i Bergen. (studere, past)', options: ['studerte', 'studeret', 'studerde', 'studert'], answer: 0, explanation: 'All -ere verbs take -te.', level: 'A2', topic: 'preteritum' },
    ],
    sentences: [
      { id: 'k07-s1', no: 'I går jobbet jeg hjemmefra', en: 'Yesterday I worked from home', level: 'A2', focus: 'V2 + preteritum', hint: 'Time first, then the verb, then the subject.' },
      { id: 'k07-s2', no: 'Vi bodde i Bergen i tre år', en: 'We lived in Bergen for three years', level: 'A2', focus: 'preteritum', hint: 'bo → bodde.' },
      { id: 'k07-s3', no: 'Hun gikk til skolen i morges', en: 'She walked to school this morning', level: 'A2', focus: 'sterke verb', hint: 'gå → gikk.' },
      { id: 'k07-s4', no: 'Jeg begynte i ny jobb for to uker siden', en: 'I started a new job two weeks ago', level: 'A2', focus: 'for … siden', hint: 'for + time + siden.' },
      { id: 'k07-s5', no: 'Det var en lang og travel dag', en: 'It was a long and busy day', level: 'A2', focus: 'var', hint: 'Det var …' },
    ],
  },

  {
    id: '8',
    course: 'nybegynner',
    n: 8,
    title: 'Norskkurs og fritid',
    titleEn: 'Norwegian class and free time',
    level: 'A2',
    theme: 'Norwegian class, a trip into nature, a school break — and what you have done.',
    canDo: [
      { no: 'Jeg kan si hva jeg har gjort.', en: 'I can say what I have done.' },
      { no: 'Jeg kan snakke om planer for framtida.', en: 'I can talk about future plans.' },
      { no: 'Jeg kan bruke leddsetninger med «at» og «fordi».', en: 'I can use subordinate clauses with «that» and «because».' },
    ],
    dialogues: ['Dina henter Alex', 'På norskkurs', 'En fin høstdag', 'Et friminutt'],
    phrases: [
      { no: 'Hvor lenge har du bodd i Norge?', en: 'How long have you lived in Norway?' },
      { no: 'Jeg har bodd her i ti år.', en: 'I have lived here for ten years.' },
      { no: 'Jeg skal ta norskprøven til våren.', en: 'I’m going to take the Norwegian test in the spring.' },
      { no: 'Jeg tror at det blir fint vær.', en: 'I think it will be nice weather.' },
      { no: 'Det høres bra ut!', en: 'That sounds good!' },
    ],
    grammar: [
      {
        heading: 'Present perfect: har + past participle',
        body: '«har» + past participle. Use it for things that happened at an unspecified time, or that started in the past and are still true:\n\nJeg har bodd i Norge i ti år. (and still do)\nHar du vært i Tromsø? (ever)\n\nBut with a specific past time — i går, i fjor, for to år siden — use the simple past: «Jeg var i Tromsø i fjor.»',
        examples: [
          { no: 'Jeg har lært mye norsk.', en: 'I have learnt a lot of Norwegian.' },
          { no: 'Har du spist?', en: 'Have you eaten?' },
        ],
      },
      {
        heading: 'Past participles of regular verbs',
        body: 'group 1: snakke – snakket – har snakket\ngroup 2: spise – spiste – har spist\ngroup 3: prøve – prøvde – har prøvd\ngroup 4: bo – bodde – har bodd\n\nThe participle is the past tense minus the final -e (groups 2–4) or the same as the past tense (group 1).',
        examples: [{ no: 'Vi har kjøpt ny bil.', en: 'We have bought a new car.' }],
      },
      {
        heading: 'Irregular participles to know',
        body: 'være – var – har vært · ha – hadde – har hatt · gå – gikk – har gått · komme – kom – har kommet · se – så – har sett · si – sa – har sagt · gjøre – gjorde – har gjort · få – fikk – har fått · skrive – skrev – har skrevet · ta – tok – har tatt · drikke – drakk – har drukket\n\nModals: kan – kunne – har kunnet · må – måtte – har måttet · vil – ville – har villet · skal – skulle – har skullet.',
        examples: [
          { no: 'Jeg har aldri sett nordlys.', en: 'I have never seen the northern lights.' },
          { no: 'Har du gjort leksene?', en: 'Have you done your homework?' },
        ],
      },
      {
        heading: 'Talking about the future',
        body: 'Three common ways:\n\nskal + infinitive — plans: Jeg skal reise til Spania.\nkommer til å + infinitive — predictions: Det kommer til å regne.\nPresent tense + time expression: Jeg drar i morgen.\n\n«Vil» means «want to» — don’t use it for «will».',
        examples: [
          { no: 'Vi skal flytte neste år.', en: 'We are going to move next year.' },
          { no: 'Du kommer til å like det.', en: 'You will like it.' },
        ],
      },
      {
        heading: 'Adjectives: comparing in everyday speech',
        body: 'Some adjectives that come up constantly: god/bra (good) · dårlig (bad) · flink (good at) · heldig (lucky) · ferdig (finished) · glad (happy) · lei (fed up).\n\n«bra» never changes: et bra kurs, bra kurs.',
        examples: [{ no: 'Kurset var bra, og læreren var flink.', en: 'The course was good and the teacher was skilled.' }],
      },
      {
        heading: 'Main clauses vs. subordinate clauses',
        body: 'A main clause can stand alone. A subordinate clause (leddsetning) starts with a word like at (that), fordi (because), når (when), hvis (if), som (who/which), om (whether) and cannot stand alone.\n\nTwo big word-order rules:\n\n1. Main clause — the verb is ALWAYS in second place. If you start with something other than the subject, the subject moves after the verb (inversion):\nI dag jobber jeg. (not «I dag jeg jobber»)\n\n2. Subordinate clause — «ikke» and other sentence adverbs (alltid, aldri, ofte) come BEFORE the verb:\n… fordi jeg ikke har tid. (not «fordi jeg har ikke tid»)',
        examples: [
          { no: 'I morgen skal vi på tur.', en: 'Tomorrow we are going hiking.', note: 'inversion: verb before subject' },
          { no: 'Jeg vet at han ikke kommer.', en: 'I know that he isn’t coming.', note: 'ikke before the verb' },
          { no: 'Hun er sliten fordi hun aldri sover nok.', en: 'She is tired because she never sleeps enough.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Silent «d» and «t»',
      body: 'Final -d is often silent after a vowel or l/n/r: god, rød, med, kald, land, bord.\n\nThe -t in «det» and the definite neuter ending -et is silent: det = «de», huset = «huse».\n\nBut -t in adjectives like «godt» is pronounced: «gått».',
    },
    speaking: [
      'Hvor lenge har du bodd i Norge?',
      'Hva har du gjort i dag?',
      'Hvilke steder i Norge har du besøkt?',
      'Hva skal du gjøre i helgen?',
      'Hvorfor lærer du norsk? Svar med «fordi …».',
    ],
    quiz: [
      { id: 'k08-q1', question: 'Jeg ___ bodd i Norge i ti år.', options: ['har', 'er', 'hadde vært', 'blir'], answer: 0, explanation: 'Present perfect = har + participle.', level: 'A2', topic: 'perfektum' },
      { id: 'k08-q2', question: 'Har du ___ «Kon-Tiki»? (se)', options: ['sett', 'så', 'seet', 'ser'], answer: 0, explanation: 'se – så – har sett.', level: 'A2', topic: 'perfektum' },
      { id: 'k08-q3', question: 'Choose the correct word order:', options: ['I dag jobber jeg hjemme.', 'I dag jeg jobber hjemme.', 'I dag jobber hjemme jeg.', 'Jobber i dag jeg hjemme.'], answer: 0, explanation: 'The verb is always second in a main clause.', level: 'A2', topic: 'ordstilling' },
      { id: 'k08-q4', question: 'Jeg kommer ikke fordi jeg ___.', options: ['ikke har tid', 'har ikke tid', 'har tid ikke', 'tid ikke har'], answer: 0, explanation: 'In a subordinate clause «ikke» goes before the verb.', level: 'A2', topic: 'leddsetning' },
      { id: 'k08-q5', question: 'Simple past or perfect? «Jeg ___ i Tromsø i fjor.»', options: ['var', 'har vært', 'er', 'har vært i'], answer: 0, explanation: 'A specific past time (i fjor) → simple past.', level: 'A2', topic: 'perfektum' },
      { id: 'k08-q6', question: 'Det ___ regne i morgen. (prediction)', options: ['kommer til å', 'vil', 'skal å', 'blir å'], answer: 0, explanation: '«kommer til å» = will (prediction). «vil» means «want to».', level: 'A2', topic: 'framtid' },
      { id: 'k08-q7', question: 'Past participle of «å skrive»:', options: ['skrevet', 'skrev', 'skrivd', 'skrevd'], answer: 0, explanation: 'skrive – skrev – har skrevet.', level: 'A2', topic: 'perfektum' },
    ],
    sentences: [
      { id: 'k08-s1', no: 'Jeg har bodd i Norge i ti år', en: 'I have lived in Norway for ten years', level: 'A2', focus: 'perfektum', hint: 'har + participle.' },
      { id: 'k08-s2', no: 'I morgen skal vi gå på tur', en: 'Tomorrow we are going hiking', level: 'A2', focus: 'inversjon', hint: 'Time first → verb → subject.' },
      { id: 'k08-s3', no: 'Jeg vet at han ikke kommer i dag', en: 'I know that he isn’t coming today', level: 'A2', focus: 'ikke i leddsetning', hint: 'at + subject + ikke + verb.' },
      { id: 'k08-s4', no: 'Hun lærer norsk fordi hun vil bli sykepleier', en: 'She is learning Norwegian because she wants to become a nurse', level: 'A2', focus: 'fordi', hint: 'fordi + subject + verb.' },
      { id: 'k08-s5', no: 'Det kommer til å regne i kveld', en: 'It is going to rain tonight', level: 'A2', focus: 'framtid', hint: 'kommer til å + infinitive.' },
    ],
  },
]
