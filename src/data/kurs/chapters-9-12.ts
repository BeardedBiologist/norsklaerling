import type { KursChapter } from '../../types'

/** Nybegynnerkurs chapters 9–12 — see chapters-1-4.ts for the approach. */
export const chapters9to12: KursChapter[] = [
  {
    id: '9',
    course: 'nybegynner',
    n: 9,
    title: 'På tur og på jobb',
    titleEn: 'Trips and work',
    level: 'A2',
    theme: 'A kindergarten trip, a new project at work, the hospital and a class newspaper.',
    canDo: [
      { no: 'Jeg kan si hvem noe tilhører.', en: 'I can say who something belongs to.' },
      { no: 'Jeg kan beskrive mennesker og ting med «som».', en: 'I can describe people and things with «som».' },
      { no: 'Jeg kan velge mellom «da» og «når».', en: 'I can choose between «da» and «når».' },
    ],
    dialogues: ['Barnehagen drar på tur', 'Et nytt prosjekt', 'Fjordvik sykehus', 'Klasseavis'],
    phrases: [
      { no: 'Er dette sekken din?', en: 'Is this your bag?' },
      { no: 'Kollegaen min, som heter Per, er fra Bodø.', en: 'My colleague, who is called Per, is from Bodø.' },
      { no: 'Når kommer du hjem?', en: 'When are you coming home?' },
      { no: 'Da jeg var liten, bodde vi på landet.', en: 'When I was little, we lived in the countryside.' },
      { no: 'Jeg lurer på om du kan hjelpe meg.', en: 'I wonder if you can help me.' },
    ],
    grammar: [
      {
        heading: 'Possessives',
        body: 'Possessives agree with the THING owned:\n\nmin / mi / mitt / mine (my)\ndin / di / ditt / dine (your)\nvår / vår / vårt / våre (our)\n\nThese never change: hans (his) · hennes (her) · deres (their / your pl.)\n\nThe usual position is AFTER the noun, which is then definite: bilen min, huset vårt, barna deres. Putting it first (min bil) adds emphasis.',
        examples: [
          { no: 'Dette er kona mi og sønnen vår.', en: 'This is my wife and our son.' },
          { no: 'Huset deres er stort.', en: 'Their house is big.' },
          { no: 'Barna mine går på skolen.', en: 'My children go to school.' },
        ],
      },
      {
        heading: 'Compound nouns',
        body: 'Norwegian writes compounds as ONE word, and the LAST part decides the gender:\n\nen barnehage (et barn + en hage) · et kjøkkenbord · ei bokhylle\n\nSometimes an -s- or -e- joins the parts: en arbeidsdag, en barnehagelærer, et tidsskrift.\n\nWriting them apart («barne hage») is one of the most common mistakes on the written test.',
        examples: [
          { no: 'Hun er barnehagelærer.', en: 'She is a kindergarten teacher.' },
          { no: 'Jeg har en lang arbeidsdag.', en: 'I have a long working day.' },
        ],
      },
      {
        heading: 'Relative clauses with «som»',
        body: '«som» = who / which / that. It introduces a subordinate clause, so «ikke» goes before the verb.\n\nIf «som» is the object of the clause, it can be left out — just like English «that»: «Boka (som) jeg leser, er spennende.»',
        examples: [
          { no: 'Mannen som bor ved siden av, er lege.', en: 'The man who lives next door is a doctor.' },
          { no: 'Det er en film som jeg ikke liker.', en: 'It’s a film that I don’t like.' },
        ],
      },
      {
        heading: '«Da» or «når» = when?',
        body: 'da — one specific occasion in the PAST: «Da jeg kom til Norge, …»\nnår — the present, the future, repeated events (whenever), and ALL questions: «Når kommer du?» «Når det regner, tar jeg bussen.»\n\nA subordinate clause first in the sentence counts as position 1, so the main-clause verb comes right after it: «Da jeg kom hjem, VAR det mørkt.»',
        examples: [
          { no: 'Da jeg var barn, bodde jeg i Kenya.', en: 'When I was a child, I lived in Kenya.', note: 'one period in the past → da' },
          { no: 'Når jeg er syk, blir jeg hjemme.', en: 'When(ever) I’m ill, I stay at home.', note: 'repeated → når' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Diphthongs: ei, øy, au',
      body: 'Norwegian has three common gliding vowels:\n\nei ≈ «ay» in «say»: hei, vei, nei\nøy ≈ a rounded «oy»: øy, høy, fløyte\nau ≈ «æu», like a short «ow» with an open start: sau, haug, august\n\nKeep them short and tight — English speakers tend to drag them out.',
    },
    speaking: [
      'Beskriv familien din: Hva heter de, og hva gjør de?',
      'Fortell om en person som har hjulpet deg i Norge.',
      'Hva gjorde du da du kom til Norge første gang?',
      'Hva gjør du når du har fri?',
      'Hva er yrket ditt, og hva liker du med jobben?',
    ],
    quiz: [
      { id: 'k09-q1', question: 'Dette er huset ___. (our)', options: ['vårt', 'vår', 'våre', 'vårs'], answer: 0, explanation: 'et hus → vårt.', level: 'A2', topic: 'eiendomsord' },
      { id: 'k09-q2', question: 'Barna ___ er på skolen. (my)', options: ['mine', 'min', 'mitt', 'mi'], answer: 0, explanation: 'Plural → mine.', level: 'A2', topic: 'eiendomsord' },
      { id: 'k09-q3', question: '___ jeg var liten, bodde vi i Polen.', options: ['Da', 'Når', 'Om', 'Hvis'], answer: 0, explanation: 'One period in the past → da.', level: 'A2', topic: 'da/når' },
      { id: 'k09-q4', question: '___ kommer bussen?', options: ['Når', 'Da', 'Hvem', 'Hvilken'], answer: 0, explanation: 'Questions always use «når».', level: 'A2', topic: 'da/når' },
      { id: 'k09-q5', question: 'Kvinnen ___ jobber i resepsjonen, er hyggelig.', options: ['som', 'hvem', 'hva', 'at'], answer: 0, explanation: 'Relative pronoun = som.', level: 'A2', topic: 'relativsetning' },
      { id: 'k09-q6', question: 'Correct spelling of the compound:', options: ['barnehagelærer', 'barne hagelærer', 'barnehage lærer', 'barne-hage-lærer'], answer: 0, explanation: 'Compounds are written as one word.', level: 'A2', topic: 'sammensatte ord' },
      { id: 'k09-q7', question: 'Det er en film som jeg ___.', options: ['ikke liker', 'liker ikke', 'liker ikke den', 'ikke liker den'], answer: 0, explanation: 'Subordinate clause: «ikke» before the verb.', level: 'A2', topic: 'relativsetning' },
    ],
    sentences: [
      { id: 'k09-s1', no: 'Mannen som bor ved siden av er lege', en: 'The man who lives next door is a doctor', level: 'A2', focus: 'som-setning', hint: 'Mannen + som-clause + er.' },
      { id: 'k09-s2', no: 'Da jeg kom hjem var det mørkt', en: 'When I came home it was dark', level: 'A2', focus: 'da + inversjon', hint: 'The da-clause takes position 1 → verb next.' },
      { id: 'k09-s3', no: 'Når det regner tar jeg bussen', en: 'When it rains I take the bus', level: 'A2', focus: 'når + inversjon', hint: 'Når-clause, then verb, then subject.' },
      { id: 'k09-s4', no: 'Dette er kona mi og barna våre', en: 'This is my wife and our children', level: 'A2', focus: 'eiendomsord etter substantivet', hint: 'Possessive after the definite noun.' },
      { id: 'k09-s5', no: 'Jeg lurer på om butikken er åpen', en: 'I wonder if the shop is open', level: 'A2', focus: 'om-setning', hint: 'lurer på + om + subject + verb.' },
    ],
  },

  {
    id: '10',
    course: 'nybegynner',
    n: 10,
    title: 'Helse og sport',
    titleEn: 'Health and sport',
    level: 'A2',
    theme: 'Fever, staying home with a sick child, going on a course and playing handball.',
    canDo: [
      { no: 'Jeg kan fortelle legen hva som er galt.', en: 'I can tell the doctor what is wrong.' },
      { no: 'Jeg kan sammenligne ting.', en: 'I can compare things.' },
      { no: 'Jeg kan si min mening med «synes».', en: 'I can give my opinion with «synes».' },
    ],
    dialogues: ['Alex har feber', 'Hjemme med sykt barn', 'Cecilie skal på kurs', 'Dina spiller håndball'],
    phrases: [
      { no: 'Jeg har vondt i hodet.', en: 'I have a headache.' },
      { no: 'Jeg har feber og hoste.', en: 'I have a fever and a cough.' },
      { no: 'Jeg må være hjemme med sykt barn.', en: 'I have to stay home with a sick child.' },
      { no: 'Jeg synes at det er viktig å trene.', en: 'I think it’s important to exercise.' },
      { no: 'God bedring!', en: 'Get well soon!' },
    ],
    grammar: [
      {
        heading: 'Reflexive possessive: sin / si / sitt / sine',
        body: 'When the owner is the SUBJECT of the same clause (and is he/she/it/they), use sin/si/sitt/sine instead of hans/hennes/deres:\n\nPer ringer moren sin. (his own mother)\nPer ringer moren hans. (some other man’s mother!)\n\nsin (en) · si (ei) · sitt (et) · sine (plural). «Sin» can never be part of the subject itself.',
        examples: [
          { no: 'Hun henter datteren sin i barnehagen.', en: 'She picks up her (own) daughter from kindergarten.' },
          { no: 'De selger huset sitt.', en: 'They are selling their (own) house.' },
        ],
      },
      {
        heading: 'Comparing: -ere and -est',
        body: 'Most adjectives add -ere and -est:\n\nbillig – billigere – billigst · varm – varmere – varmest\n\nLong adjectives and -isk words use mer / mest: interessant – mer interessant – mest interessant · praktisk – mer praktisk.\n\n«enn» = than: Hun er eldre enn meg.',
        examples: [
          { no: 'Det er kaldere i dag enn i går.', en: 'It’s colder today than yesterday.' },
          { no: 'Dette er den billigste sykkelen.', en: 'This is the cheapest bike.' },
        ],
      },
      {
        heading: 'Irregular comparison',
        body: 'god/bra – bedre – best\ndårlig – verre – verst\ngammel – eldre – eldst\nung – yngre – yngst\nstor – større – størst\nliten – mindre – minst\nmange – flere – flest\nmye – mer – mest\nlang – lengre – lengst',
        examples: [
          { no: 'Jeg føler meg bedre i dag.', en: 'I feel better today.' },
          { no: 'Broren min er yngre enn meg.', en: 'My brother is younger than me.' },
        ],
      },
      {
        heading: 'Adverbs from adjectives',
        body: 'The neuter form (-t) of an adjective doubles as an adverb: Hun synger pent. · Han løper fort. · Det gikk bra.',
        examples: [{ no: 'Du snakker godt norsk!', en: 'You speak Norwegian well!' }],
      },
      {
        heading: 'Time expressions',
        body: 'i dag (today) · i går (yesterday) · i morgen (tomorrow)\ni morges (this morning, past) · i kveld (this evening) · i natt (tonight / last night)\ni fjor (last year) · i år (this year) · neste år (next year)\nfor to dager siden (two days ago) · om to dager (in two days)\npå mandag (this coming Monday) · på mandager (on Mondays)\ni to timer (for two hours)',
        examples: [
          { no: 'Jeg har vært syk i tre dager.', en: 'I have been ill for three days.' },
          { no: 'Timen er om en uke.', en: 'The appointment is in a week.' },
        ],
      },
      {
        heading: 'Synes, tror, tenker — all «think»',
        body: 'synes = opinion based on your own experience: Jeg synes maten er god.\ntror = believe / think something is likely: Jeg tror det blir regn.\ntenker = the activity of thinking / considering: Jeg tenker på deg. Jeg tenker på å flytte.\n\nIn the oral exam, «Jeg synes at …» and «Jeg tror at …» are your best friends.',
        examples: [
          { no: 'Jeg synes at Bergen er en fin by.', en: 'I think Bergen is a nice city.' },
          { no: 'Jeg tror at butikken er stengt.', en: 'I think the shop is closed.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Saying the body: «vondt i …»',
      body: '«vondt» is pronounced «vunt» — the d is silent and the o sounds like «u».\n\nUseful set: vondt i hodet («hoe-e»), vondt i magen, vondt i halsen, vondt i ryggen, vondt i tenna.\n\n«Hodet» — the d and t are both silent.',
    },
    speaking: [
      'Ring legekontoret: Forklar hva som er galt med deg.',
      'Hva gjør du når barna er syke?',
      'Sammenlign Norge og landet du kommer fra.',
      'Hva synes du om norsk vinter?',
      'Hvilken sport liker du best? Hvorfor?',
    ],
    quiz: [
      { id: 'k10-q1', question: 'Per kjører datteren ___ til skolen. (his own)', options: ['sin', 'hans', 'si', 'sine'], answer: 0, explanation: 'Owner = the subject (Per) → sin.', level: 'A2', topic: 'refleksivt eiendomsord' },
      { id: 'k10-q2', question: 'Det er ___ i dag enn i går. (varm)', options: ['varmere', 'mer varm', 'varmest', 'varmre'], answer: 0, explanation: 'varm – varmere – varmest.', level: 'A2', topic: 'komparasjon' },
      { id: 'k10-q3', question: 'Comparative of «god»:', options: ['bedre', 'godere', 'mer god', 'best'], answer: 0, explanation: 'god – bedre – best.', level: 'A2', topic: 'komparasjon' },
      { id: 'k10-q4', question: 'Jeg ___ at norsk er et vakkert språk. (opinion)', options: ['synes', 'tenker', 'tror på', 'mener på'], answer: 0, explanation: 'A personal opinion → synes.', level: 'A2', topic: 'synes/tror/tenker' },
      { id: 'k10-q5', question: 'Jeg har vært syk ___ tre dager.', options: ['i', 'for', 'på', 'om'], answer: 0, explanation: 'Duration → i: i tre dager.', level: 'A2', topic: 'tidsuttrykk' },
      { id: 'k10-q6', question: 'Broren min er ___ enn meg. (ung)', options: ['yngre', 'ungere', 'mer ung', 'yngst'], answer: 0, explanation: 'ung – yngre – yngst.', level: 'A2', topic: 'komparasjon' },
      { id: 'k10-q7', question: 'Legetimen er ___ to dager. (in two days)', options: ['om', 'i', 'for', 'på'], answer: 0, explanation: 'om + time = in (the future).', level: 'A2', topic: 'tidsuttrykk' },
    ],
    sentences: [
      { id: 'k10-s1', no: 'Jeg har hatt feber i tre dager', en: 'I have had a fever for three days', level: 'A2', focus: 'perfektum + i', hint: 'har hatt … i + duration.' },
      { id: 'k10-s2', no: 'Det er kaldere i Tromsø enn i Oslo', en: 'It is colder in Tromsø than in Oslo', level: 'A2', focus: 'komparativ', hint: 'kaldere … enn …' },
      { id: 'k10-s3', no: 'Hun henter sønnen sin i barnehagen', en: 'She picks up her son from kindergarten', level: 'A2', focus: 'sin', hint: 'Owner is the subject → sin.' },
      { id: 'k10-s4', no: 'Jeg synes at det er viktig å trene', en: 'I think it is important to exercise', level: 'A2', focus: 'synes at', hint: 'synes + at + det er …' },
      { id: 'k10-s5', no: 'Jeg må være hjemme med sykt barn i dag', en: 'I have to stay at home with a sick child today', level: 'A2', focus: 'modalverb', hint: 'må + være + hjemme.' },
    ],
  },

  {
    id: '11',
    course: 'nybegynner',
    n: 11,
    title: 'Kultur og hytteliv',
    titleEn: 'Culture and cabin life',
    level: 'A2',
    theme: 'A puppet show, a cabin trip, an invitation to Oslo and a pop concert.',
    canDo: [
      { no: 'Jeg kan forklare hvorfor med «fordi» og «derfor».', en: 'I can explain why with «because» and «therefore».' },
      { no: 'Jeg kan gi korte svar som «Ja, det gjør jeg».', en: 'I can give short answers like «Yes, I do».' },
      { no: 'Jeg kan svare «jo» på negative spørsmål.', en: 'I can answer «jo» to negative questions.' },
    ],
    dialogues: ['Skomakerdokka', 'På hyttetur', 'En invitasjon til Oslo', 'Justin Bieber-konsert'],
    phrases: [
      { no: 'Vi drar på hytta i helgen.', en: 'We’re going to the cabin this weekend.' },
      { no: 'Det er ikke strøm på hytta, så vi bruker stearinlys.', en: 'There’s no electricity at the cabin, so we use candles.' },
      { no: '– Liker du ikke fisk? – Jo, det gjør jeg!', en: '– Don’t you like fish? – Yes, I do!' },
      { no: 'Takk for invitasjonen!', en: 'Thanks for the invitation!' },
      { no: 'Lenge siden sist!', en: 'Long time no see!' },
    ],
    grammar: [
      {
        heading: '«Fordi» vs. «derfor»',
        body: 'Both explain a reason, but the word order is different:\n\nfordi (because) starts a SUBORDINATE clause → subject + (ikke) + verb\nJeg blir hjemme fordi jeg er syk.\n\nderfor (therefore / that’s why) is an adverb in a MAIN clause → if it comes first, the verb comes second (inversion)\nJeg er syk. Derfor blir jeg hjemme.',
        examples: [
          { no: 'Vi tok toget fordi bilen ikke startet.', en: 'We took the train because the car wouldn’t start.' },
          { no: 'Bilen startet ikke. Derfor tok vi toget.', en: 'The car wouldn’t start. That’s why we took the train.' },
        ],
      },
      {
        heading: '«Så» = so (result)',
        body: '«så» meaning «so / and therefore» joins two main clauses WITHOUT changing word order (like og and men):\n\nDet regnet, så vi ble hjemme.\n\nCompare: «Derfor ble vi hjemme» (inversion) — same meaning, different word order.',
        examples: [
          { no: 'Jeg var sulten, så jeg lagde en brødskive.', en: 'I was hungry, so I made a sandwich.' },
        ],
      },
      {
        heading: 'Short answers',
        body: 'Norwegians rarely answer with just «ja» or «nei». They repeat the verb — or use «gjør» for ordinary verbs:\n\n– Er du trøtt? – Ja, det er jeg.\n– Kan du kjøre? – Nei, det kan jeg ikke.\n– Liker du kaffe? – Ja, det gjør jeg.\n– Har du barn? – Ja, det har jeg.\n\nPattern: Ja/Nei + det + verb + subject (+ ikke).',
        examples: [
          { no: '– Bor du i Oslo? – Nei, det gjør jeg ikke.', en: '– Do you live in Oslo? – No, I don’t.' },
          { no: '– Har du vært på hytta? – Ja, det har jeg.', en: '– Have you been to the cabin? – Yes, I have.' },
        ],
      },
      {
        heading: '«Ja» vs. «jo»',
        body: 'Answering YES to a NEGATIVE question takes «jo», not «ja»:\n\n– Kommer du ikke? – Jo! (Yes, I am!)\n– Kommer du? – Ja!\n\nUsing «ja» to a negative question sounds like you agree with the negative — confusing for the listener.',
        examples: [
          { no: '– Har du ikke spist? – Jo, jeg har spist.', en: '– Haven’t you eaten? – Yes, I have.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Linking words in natural speech',
      body: 'In everyday speech, short words melt together:\n\n«Det er» → «de’e» · «Jeg har» → «jæ har» / «e har» · «Hva er det?» → «Va’e de?» · «Har du» → «ha’ru»\n\nYou don’t need to speak like this, but you need to understand it — Norwegians will speak this way in the oral test too.',
    },
    speaking: [
      'Har du vært på hytta? Fortell om turen.',
      'Hva gjør du på en fin søndag?',
      'Hvilken konsert eller forestilling har du sett? Hvordan var den?',
      'Svar med korte svar: Liker du snø? Har du bil? Kan du gå på ski?',
      'Hvorfor bor du i Norge? Bruk «fordi» og «derfor».',
    ],
    quiz: [
      { id: 'k11-q1', question: 'Jeg er syk. Derfor ___ hjemme.', options: ['blir jeg', 'jeg blir', 'jeg ikke blir', 'blir'], answer: 0, explanation: '«Derfor» first → the verb comes second (inversion).', level: 'A2', topic: 'fordi/derfor' },
      { id: 'k11-q2', question: 'Jeg blir hjemme fordi jeg ___.', options: ['ikke føler meg bra', 'føler meg ikke bra', 'føler ikke meg bra', 'ikke meg føler bra'], answer: 0, explanation: '«fordi» → subordinate clause: «ikke» before the verb.', level: 'A2', topic: 'fordi/derfor' },
      { id: 'k11-q3', question: '– Kommer du ikke i kveld? – ___, jeg kommer!', options: ['Jo', 'Ja', 'Nei', 'Joa'], answer: 0, explanation: 'Yes to a negative question = jo.', level: 'A2', topic: 'ja/jo' },
      { id: 'k11-q4', question: '– Liker du fisk? – Ja, det ___ jeg.', options: ['gjør', 'liker', 'er', 'har'], answer: 0, explanation: 'Ordinary verbs are replaced by «gjør» in short answers.', level: 'A2', topic: 'korte svar' },
      { id: 'k11-q5', question: '– Kan du gå på ski? – Nei, det ___.', options: ['kan jeg ikke', 'gjør jeg ikke', 'jeg kan ikke', 'kan ikke jeg'], answer: 0, explanation: 'Modal verbs repeat themselves: det kan jeg ikke.', level: 'A2', topic: 'korte svar' },
      { id: 'k11-q6', question: 'Det regnet, ___ vi ble hjemme.', options: ['så', 'derfor', 'fordi', 'enn'], answer: 0, explanation: '«så» joins two main clauses with no inversion.', level: 'A2', topic: 'så' },
    ],
    sentences: [
      { id: 'k11-s1', no: 'Bilen startet ikke derfor tok vi toget', en: 'The car didn’t start so we took the train', level: 'A2', focus: 'derfor + inversjon', hint: 'derfor + verb + subject.' },
      { id: 'k11-s2', no: 'Vi tok toget fordi bilen ikke startet', en: 'We took the train because the car didn’t start', level: 'A2', focus: 'fordi + ikke', hint: 'fordi + subject + ikke + verb.' },
      { id: 'k11-s3', no: 'Nei det gjør jeg ikke', en: 'No, I don’t', level: 'A2', focus: 'korte svar', hint: 'Nei + det + gjør + jeg + ikke.' },
      { id: 'k11-s4', no: 'Det var kaldt så vi tente bål', en: 'It was cold so we lit a fire', level: 'A2', focus: 'så', hint: 'No inversion after «så».' },
      { id: 'k11-s5', no: 'Vi skal på hytta i helgen', en: 'We are going to the cabin at the weekend', level: 'A2', focus: 'modal uten hovedverb', hint: 'skal + på hytta.' },
    ],
  },

  {
    id: '12',
    course: 'nybegynner',
    n: 12,
    title: 'Jul i Norge',
    titleEn: 'Christmas in Norway',
    level: 'A2',
    theme: 'Playing in the snow, having guests, Christmas dinner and opening presents.',
    canDo: [
      { no: 'Jeg kan fortelle om høytider og tradisjoner.', en: 'I can talk about holidays and traditions.' },
      { no: 'Jeg kan bruke s-verb som «å møtes» og «å synes».', en: 'I can use s-verbs like «å møtes» and «å synes».' },
      { no: 'Jeg kan bygge lengre setninger med riktig ordstilling og komma.', en: 'I can build longer sentences with correct word order and commas.' },
    ],
    dialogues: ['Lek i snøen', 'Ben tar imot gjester', 'Julemiddag', 'Julegaveåpning'],
    phrases: [
      { no: 'God jul og godt nytt år!', en: 'Merry Christmas and Happy New Year!' },
      { no: 'Takk for maten! – Vel bekomme!', en: 'Thanks for the meal! – You’re welcome!' },
      { no: 'Vær så god, forsyn dere!', en: 'Please, help yourselves!' },
      { no: 'Skål!', en: 'Cheers!' },
      { no: 'Takk for gaven, den var akkurat det jeg ønsket meg.', en: 'Thanks for the present, it was just what I wanted.' },
    ],
    grammar: [
      {
        heading: 'S-verbs',
        body: 'Some verbs end in -s. There are three kinds:\n\n1. Reciprocal (each other): å møtes (meet each other), å ses (see each other), å treffes. «Vi ses!» = See you!\n2. Deponent verbs that only exist with -s: å synes, å lykkes (succeed), å trives (thrive / be happy somewhere), å finnes (exist).\n3. Passive: -s added to the infinitive or present: «Butikken stenges klokka åtte.» (is closed)\n\nPresent tense of an s-verb has no -r: jeg synes, vi møtes, hun trives.',
        examples: [
          { no: 'Jeg trives godt i Norge.', en: 'I really like living in Norway.' },
          { no: 'Vi møtes utenfor kinoen.', en: 'We’ll meet outside the cinema.' },
          { no: 'Det finnes mange tradisjoner.', en: 'There are many traditions.' },
        ],
      },
      {
        heading: 'Word order summary — main clause',
        body: 'Think of the main clause as slots:\n\n1 (anything) · 2 VERB · 3 subject (if not in 1) · 4 adverb (ikke, alltid) · 5 other verbs · 6 object · 7 place · 8 time\n\nI morgen | skal | vi | ikke | spise | ribbe | hos mormor.\nVi | spiser | — | alltid | — | ribbe | hjemme | på julaften.\n\nThe golden rule: the finite verb is ALWAYS in slot 2.',
        examples: [
          { no: 'På julaften spiser vi ribbe.', en: 'On Christmas Eve we eat pork ribs.' },
          { no: 'Vi spiser ikke lutefisk.', en: 'We don’t eat lutefisk.' },
        ],
      },
      {
        heading: 'Word order summary — subordinate clause',
        body: 'conjunction · subject · adverb (ikke) · verb(s) · object · place · time\n\n… fordi | vi | ikke | har spist | ribbe | hjemme | i år.\n\nNo inversion inside a subordinate clause — the subject always comes straight after the conjunction.',
        examples: [
          { no: 'Jeg vet at barna alltid gleder seg til jul.', en: 'I know that the children always look forward to Christmas.' },
        ],
      },
      {
        heading: 'Comma rules',
        body: 'Norwegian commas are simpler than they look:\n\n• Put a comma AFTER a subordinate clause that starts the sentence: «Når jeg kommer hjem, lager jeg middag.»\n• Put a comma before «men» and before «så» (result) between two main clauses.\n• Put a comma around a «som»-clause that could be removed: «Mormor, som er åtti år, baker sju slag.»\n• NO comma before «at» or before a subordinate clause that comes after the main clause: «Jeg tror at det snør.»',
        examples: [
          { no: 'Da vi kom hjem, var det mørkt.', en: 'When we got home, it was dark.' },
          { no: 'Jeg vil gjerne komme, men jeg har ikke tid.', en: 'I’d like to come, but I don’t have time.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Putting it together: rhythm',
      body: 'Norwegian is stress-timed: stressed syllables come at a fairly even beat, and the unstressed words between them get squeezed.\n\n«Jeg SKAL til BYen i MORgen» — three beats.\n\nPractice: read one LearnNoW dialogue aloud, tapping the table on every stressed syllable, then try it at normal speed. This does more for sounding natural in the oral exam than any single sound.',
    },
    speaking: [
      'Hvordan feirer du jul eller andre høytider?',
      'Hva spiser dere til høytidene i landet ditt?',
      'Trives du i Norge? Hvorfor / hvorfor ikke?',
      'Fortell om en gave du har fått som du ble glad for.',
      'Hva er forskjellen på jul i Norge og i hjemlandet ditt?',
    ],
    quiz: [
      { id: 'k12-q1', question: 'Present tense: Jeg ___ godt i Norge. (trives)', options: ['trives', 'trivser', 'triver', 'trivses'], answer: 0, explanation: 'S-verbs have no -r in the present: jeg trives.', level: 'A2', topic: 's-verb' },
      { id: 'k12-q2', question: 'Vi ___ i morgen! (see each other)', options: ['ses', 'ser', 'seser', 'så'], answer: 0, explanation: '«Vi ses» = see you (reciprocal s-verb).', level: 'A2', topic: 's-verb' },
      { id: 'k12-q3', question: 'Choose the correct word order:', options: ['På julaften spiser vi ribbe.', 'På julaften vi spiser ribbe.', 'Vi på julaften spiser ribbe.', 'Spiser vi ribbe på julaften på.'], answer: 0, explanation: 'Verb in second place.', level: 'A2', topic: 'ordstilling' },
      { id: 'k12-q4', question: 'Where does the comma go?', options: ['Når jeg kommer hjem, lager jeg middag.', 'Når jeg kommer, hjem lager jeg middag.', 'Når, jeg kommer hjem lager jeg middag.', 'No comma needed.'], answer: 0, explanation: 'A comma after a subordinate clause at the start of the sentence.', level: 'A2', topic: 'komma' },
      { id: 'k12-q5', question: 'Jeg tror ___ det snør i morgen.', options: ['at', ', at', 'som', 'så'], answer: 0, explanation: 'No comma before «at».', level: 'A2', topic: 'komma' },
      { id: 'k12-q6', question: '– Takk for maten! – ___', options: ['Vel bekomme!', 'Vær så god!', 'Takk selv!', 'Skål!'], answer: 0, explanation: 'The standard reply to «Takk for maten» is «Vel bekomme».', level: 'A2', topic: 'uttrykk' },
    ],
    sentences: [
      { id: 'k12-s1', no: 'På julaften spiser vi ribbe hos svigermor', en: 'On Christmas Eve we eat pork ribs at my mother-in-law’s', level: 'A2', focus: 'inversjon', hint: 'Time first → verb → subject.' },
      { id: 'k12-s2', no: 'Når jeg kommer hjem lager jeg middag', en: 'When I get home I make dinner', level: 'A2', focus: 'leddsetning først', hint: 'Subordinate clause = position 1.' },
      { id: 'k12-s3', no: 'Jeg trives veldig godt i Norge', en: 'I really like living in Norway', level: 'A2', focus: 's-verb', hint: 'trives — no -r.' },
      { id: 'k12-s4', no: 'Jeg vet at barna alltid gleder seg til jul', en: 'I know that the children always look forward to Christmas', level: 'A2', focus: 'adverb i leddsetning', hint: 'at + subject + alltid + verb.' },
      { id: 'k12-s5', no: 'Vi ses ikke før neste år', en: 'We won’t see each other until next year', level: 'A2', focus: 's-verb + ikke', hint: 'ses + ikke.' },
    ],
  },
]
