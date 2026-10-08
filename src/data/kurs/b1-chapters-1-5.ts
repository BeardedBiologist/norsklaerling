import type { KursChapter } from '../../types'

/**
 * B1-kurs chapters 1–5. The grammar sequence follows NTNU's free NoW2
 * course (ntnu.edu/now2), which revises A2 grammar in depth and adds B1
 * structures. All explanations, examples and exercises here are our own,
 * and every chapter adds the spoken skills the B1 oral test asks for.
 */
export const b1Chapters1to5: KursChapter[] = [
  {
    id: 'b1-1',
    course: 'b1',
    n: 1,
    title: 'Ny i byen',
    titleEn: 'New in town',
    level: 'B1',
    theme: 'Moving to a Norwegian city, studying, and presenting a place you know.',
    canDo: [
      { no: 'Jeg kan presentere en by eller et sted jeg kjenner godt.', en: 'I can present a town or place I know well.' },
      { no: 'Jeg kan velge riktig tid: presens, preteritum eller perfektum.', en: 'I can choose the right tense: present, past or perfect.' },
      { no: 'Jeg kan be om hjelp når jeg ikke forstår.', en: 'I can ask for help when I don’t understand.' },
    ],
    dialogues: ['Yang kommer til Trondheim', 'Simon har studert i Ålesund', 'Gjøvik – en av tre NTNU-byer'],
    phrases: [
      { no: 'Byen ligger ved kysten / innerst i en fjord / midt i landet.', en: 'The town is on the coast / at the head of a fjord / in the middle of the country.' },
      { no: 'Det bor cirka 30 000 mennesker der.', en: 'About 30,000 people live there.' },
      { no: 'Det som er spesielt med byen, er …', en: 'What is special about the town is …' },
      { no: 'Unnskyld, kan du snakke litt saktere?', en: 'Sorry, could you speak a bit more slowly?' },
      { no: 'Hva mener du med det?', en: 'What do you mean by that?' },
      { no: 'Kan du forklare hva «dugnad» betyr?', en: 'Can you explain what «dugnad» means?' },
    ],
    grammar: [
      {
        heading: 'The verb system at a glance',
        body: 'Every Norwegian verb has four key forms: infinitive – present – past – past participle.\n\nå bo – bor – bodde – har bodd\nå skrive – skriver – skrev – har skrevet\n\nAt B1 you are expected to use all four confidently. The rest of this chapter is about choosing the right one.',
        examples: [
          { no: 'Jeg bor i Trondheim nå.', en: 'I live in Trondheim now.', note: 'presens' },
          { no: 'Jeg bodde i Ålesund i fem år.', en: 'I lived in Ålesund for five years.', note: 'preteritum' },
          { no: 'Jeg har bodd i Norge siden 2014.', en: 'I have lived in Norway since 2014.', note: 'presens perfektum' },
        ],
      },
      {
        heading: 'Present tense: now, always — and the future',
        body: 'Presens covers what is happening now, habits and general truths — and also planned future events when a time expression makes it clear:\n\nHun studerer informatikk. (now / these days)\nVi spiser middag klokka fem. (habit)\nToget går klokka åtte i morgen. (scheduled future)',
        examples: [
          { no: 'Jeg begynner på ny jobb i august.', en: 'I start a new job in August.' },
        ],
      },
      {
        heading: 'Past tense vs. present perfect',
        body: 'This is the most common tense mistake at B1.\n\nPreteritum = a finished event at a known time in the past. Signals: i går, i fjor, for to år siden, da jeg var liten, i 2015.\n\nPresens perfektum = past events connected to now:\n• the time is not mentioned or not important: «Jeg har vært i Tromsø.»\n• the situation continues until now: «Jeg har bodd her i ti år.»\n• the result matters now: «Jeg har mistet nøkkelen» (so I can’t get in).\n\nEnglish works roughly the same way — but Norwegians use perfect more often with «i dag», «denne uka» and «i år» while those periods are still running.',
        examples: [
          { no: 'Jeg flyttet til Norge i 2014.', en: 'I moved to Norway in 2014.', note: 'known time → preteritum' },
          { no: 'Jeg har lært mye norsk siden da.', en: 'I have learnt a lot of Norwegian since then.', note: 'connected to now → perfektum' },
          { no: 'Har du noen gang vært på Svalbard?', en: 'Have you ever been to Svalbard?' },
        ],
      },
      {
        heading: 'Time expressions you need to control',
        body: 'for … siden = … ago (past): for tre år siden\ni … = for (duration): Jeg har bodd her i ti år.\nom … = in (future): Vi flytter om en måned.\nsiden = since: siden 2014, siden jeg kom\ni + season/day = this/last: i sommer, i vinter (the current or most recent one)\npå + day/season = general: på søndager, om sommeren (in summers generally)',
        examples: [
          { no: 'Jeg kom til Norge for ti år siden.', en: 'I came to Norway ten years ago.' },
          { no: 'Om sommeren er det lyst hele natta.', en: 'In summer it is light all night.' },
        ],
      },
      {
        heading: 'S-verbs',
        body: 'Some verbs always end in -s and have no -r in the present:\n\nå finnes / fins (exist) · å synes (think) · å trives (be happy, thrive) · å lykkes (succeed) · å møtes (meet each other) · å ses (see each other) · å skyldes (be due to)\n\nDet fins mange studenter i Trondheim. · Hun trives godt på jobben.\n\nPast: trivdes, syntes, møttes, lyktes. Perfect: har trivdes, har syntes, har møttes, har lyktes.',
        examples: [
          { no: 'Jeg trivdes ikke i begynnelsen, men nå trives jeg godt.', en: 'I wasn’t happy at first, but now I’m very happy here.' },
          { no: 'Det fins ingen enkle svar.', en: 'There are no easy answers.' },
        ],
      },
      {
        heading: 'Nationality words',
        body: 'Country: Norge, Polen, Kina · Adjective/language (small letter): norsk, polsk, kinesisk · Person: nordmann, polakk, kineser\n\nAt B1 you should also handle regions: nordnorsk, vestnorsk, trøndersk — and people: nordlending, vestlending, trønder.',
        examples: [
          { no: 'Kona mi er trønder, så vi snakker trøndersk hjemme.', en: 'My wife is from Trøndelag, so we speak the Trøndelag dialect at home.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Dialects: understand them, don’t imitate them',
      body: 'Norway has no single spoken standard — the examiner may speak any dialect. Common differences you will hear:\n\njeg → «jæ», «e», «æ», «eg» · ikke → «ikkje», «itte», «ikkje» · hva → «ka», «kva», «hå»\n\nTrøndersk drops endings (å snakk, å kast) and uses «æ» for jeg. Bergen and the west use «eg» and «ikkje». You don’t need to speak a dialect — clear Eastern Norwegian (the way you hear on NRK) is perfect for the test.',
    },
    speaking: [
      'Presenter byen eller stedet der du bor: hvor ligger det, hvor mange bor der, og hva er spesielt?',
      'Hvor lenge har du bodd i Norge, og hva gjorde du da du kom?',
      'Sammenlign stedet du bor nå med stedet du vokste opp.',
      'Hva synes du er det beste og det verste med å bo i Norge?',
      'Fortell om første gang du ikke forsto noe på norsk. Hva gjorde du?',
    ],
    quiz: [
      { id: 'b1k1-q1', question: 'Jeg ___ til Norge i 2014.', options: ['flyttet', 'har flyttet', 'flytter', 'hadde flyttet'], answer: 0, explanation: 'A known past time (i 2014) → preteritum.', level: 'B1', topic: 'verbtid' },
      { id: 'b1k1-q2', question: 'Jeg ___ i Norge i ti år nå.', options: ['har bodd', 'bodde', 'bor', 'hadde bodd'], answer: 0, explanation: 'Continues until now → presens perfektum (har bodd … i ti år).', level: 'B1', topic: 'verbtid' },
      { id: 'b1k1-q3', question: 'Hun ___ godt på den nye jobben.', options: ['trives', 'triver', 'trivser', 'trives seg'], answer: 0, explanation: 's-verbs have no -r in the present.', level: 'B1', topic: 's-verb' },
      { id: 'b1k1-q4', question: 'Vi flytter ___ en måned.', options: ['om', 'for', 'i', 'siden'], answer: 0, explanation: 'om + time = in (the future).', level: 'B1', topic: 'tidsuttrykk' },
      { id: 'b1k1-q5', question: 'Past tense of «å synes»:', options: ['syntes', 'synes', 'synte', 'har synes'], answer: 0, explanation: 'synes – syntes – har syntes.', level: 'B1', topic: 's-verb' },
      { id: 'b1k1-q6', question: '___ du noen gang vært i Nord-Norge?', options: ['Har', 'Var', 'Er', 'Hadde'], answer: 0, explanation: '«Ever» with no time mentioned → perfektum.', level: 'B1', topic: 'verbtid' },
      { id: 'b1k1-q7', question: 'A person from Trøndelag is a …', options: ['trønder', 'trøndersk', 'trøndelag', 'trøndermann'], answer: 0, explanation: 'trønder (person) · trøndersk (adjective/dialect).', level: 'B1', topic: 'nasjonalitet' },
    ],
    sentences: [
      { id: 'b1k1-s1', no: 'Jeg har bodd i Norge i over ti år', en: 'I have lived in Norway for over ten years', level: 'B1', focus: 'perfektum + i', hint: 'har bodd … i + duration.' },
      { id: 'b1k1-s2', no: 'Da jeg kom til Norge kunne jeg ikke et ord norsk', en: 'When I came to Norway I didn’t know a word of Norwegian', level: 'B1', focus: 'da + inversjon', hint: 'Da-clause first, then the verb.' },
      { id: 'b1k1-s3', no: 'Byen ligger ved kysten og har cirka 30 000 innbyggere', en: 'The town is on the coast and has about 30,000 inhabitants', level: 'B1', focus: 'presentere sted', hint: 'Byen ligger … og har …' },
      { id: 'b1k1-s4', no: 'Det fins mange fine turstier rundt byen', en: 'There are lots of nice walking paths around the town', level: 'B1', focus: 's-verb', hint: 'Det fins …' },
      { id: 'b1k1-s5', no: 'I begynnelsen trivdes jeg ikke så godt', en: 'At first I wasn’t very happy', level: 'B1', focus: 'inversjon + s-verb', hint: 'Time expression → verb → subject → ikke.' },
    ],
  },

  {
    id: 'b1-2',
    course: 'b1',
    n: 2,
    title: 'Familie, mat og tekster',
    titleEn: 'Family, food and texts',
    level: 'B1',
    theme: 'Sunday dinner at grandma’s, Norwegian class, and how to write a short essay.',
    canDo: [
      { no: 'Jeg kan beskrive en familietradisjon og en matrett.', en: 'I can describe a family tradition and a dish.' },
      { no: 'Jeg kan velge mellom ubestemt og bestemt form.', en: 'I can choose between indefinite and definite form.' },
      { no: 'Jeg kan bygge en tekst med innledning, hoveddel og avslutning.', en: 'I can build a text with an introduction, main part and conclusion.' },
    ],
    dialogues: ['Søndagsmiddag hos bestemor', 'På norskkurs', 'Essay'],
    phrases: [
      { no: 'Hos oss er det vanlig å …', en: 'In our family it’s usual to …' },
      { no: 'Retten består av kjøtt, poteter og grønnsaker.', en: 'The dish consists of meat, potatoes and vegetables.' },
      { no: 'For det første … For det andre … Til slutt …', en: 'Firstly … Secondly … Finally …' },
      { no: 'Dessuten … / I tillegg …', en: 'Moreover … / In addition …' },
      { no: 'På den ene siden … på den andre siden …', en: 'On the one hand … on the other hand …' },
      { no: 'Alt i alt mener jeg at …', en: 'All in all I think that …' },
    ],
    grammar: [
      {
        heading: 'When to drop en/ei/et',
        body: 'Norwegian leaves out the indefinite article more often than English:\n\n• jobs, nationality, religion, status after «være/bli»: Hun er lege. Han ble far i fjor.\n• uncountable things: Vi trenger melk og brød.\n• things you normally have one of, after «ha»: Har du bil? Jeg har ikke førerkort.\n• many fixed expressions: ta buss, gå på kino, ha lyst på, få jobb.',
        examples: [
          { no: 'Har dere hund?', en: 'Do you have a dog?' },
          { no: 'Hun fikk jobb som sykepleier.', en: 'She got a job as a nurse.' },
        ],
      },
      {
        heading: 'Indefinite or definite form?',
        body: 'Indefinite: something new, or one of many: «Jeg kjøpte en bil.»\nDefinite: something already known or unique: «Bilen er rød.» «Sola skinner.»\n\nNorwegian uses the definite form in some places English doesn’t:\n• general statements about a category: «Livet er kort.» «Naturen er viktig for nordmenn.»\n• body parts and personal things: «Jeg har vondt i hodet.» «Han tok på seg jakka.»\n• institutions: «Han er på sykehuset / i fengselet.»',
        examples: [
          { no: 'Kaffen er dyr i Norge.', en: 'Coffee is expensive in Norway.', note: 'general statement' },
          { no: 'Hun brakk armen.', en: 'She broke her arm.', note: 'body part' },
        ],
      },
      {
        heading: 'Irregular nouns',
        body: 'Learn these as sets (singular – the – plural – the plural):\n\nen mann – mannen – menn – mennene\nen bror – broren – brødre – brødrene\nen far – faren – fedre – fedrene\nei mor – mora – mødre – mødrene\nei datter – dattera – døtre – døtrene\nen bok – boka – bøker – bøkene\nen fot – foten – føtter – føttene\net barn – barnet – barn – barna\net øye – øyet – øyne – øynene\nen sko – skoen – sko – skoene\n\nNouns in -er: en lærer – lærere – lærerne. Nouns in -el: en onkel – onkler – onklene.',
        examples: [
          { no: 'Jeg har to brødre og tre søstre.', en: 'I have two brothers and three sisters.' },
          { no: 'Barna leker med onklene sine.', en: 'The children are playing with their uncles.' },
        ],
      },
      {
        heading: 'Text binding: linking ideas',
        body: 'A B1 text (and a B1 answer in the oral test) needs linking words. Watch the word order:\n\nAdverbs → inversion: dessuten, derfor, likevel, i tillegg, for eksempel, først, deretter, til slutt\n«Dessuten ER maten billig.»\n\nConjunctions → no change: og, men, eller, for, så\n«Maten er god, og den ER billig.»\n\nSubjunctions → subordinate clause: fordi, selv om, når, hvis, at\n«… fordi den ikke ER dyr.»',
        examples: [
          { no: 'Fårikål er enkelt å lage. Dessuten er det billig.', en: 'Fårikål is easy to make. Moreover, it’s cheap.' },
          { no: 'Først steker du kjøttet, deretter tilsetter du grønnsakene.', en: 'First you fry the meat, then you add the vegetables.' },
        ],
      },
      {
        heading: 'Building a short essay',
        body: 'The written test (and many oral tasks) rewards a clear structure:\n\nInnledning — introduce the topic in 1–2 sentences, maybe with a question.\nHoveddel — 2–3 paragraphs, each with ONE point plus an example or reason.\nAvslutning — sum up and give your own view: «Alt i alt mener jeg at …»\n\nUse the same structure when you speak for a minute about a topic.',
      },
    ],
    pronunciation: {
      heading: 'Stress in compounds',
      body: 'In a compound noun, the main stress falls on the FIRST part, and the whole word usually takes tone 2:\n\nSØNdagsmiddag · BARnehage · NORskkurs · FAMilieselskap\n\nSaying «søndags-MIDdag» sounds foreign. Practise by clapping on the first syllable.',
    },
    speaking: [
      'Beskriv en typisk søndag eller helg i familien din.',
      'Fortell om en rett fra hjemlandet ditt. Hva består den av, og når spiser dere den?',
      'Sammenlign norske matvaner med matvanene i landet du kommer fra.',
      'Hva er viktigst for deg: familie, venner eller jobb? Begrunn svaret.',
      'Snakk i ett minutt om «å lære norsk som voksen» — med innledning, to poeng og en avslutning.',
    ],
    quiz: [
      { id: 'b1k2-q1', question: 'Hun er ___.', options: ['sykepleier', 'en sykepleier', 'sykepleieren', 'ei sykepleier'], answer: 0, explanation: 'No article with professions after «være».', level: 'B1', topic: 'substantiv' },
      { id: 'b1k2-q2', question: '___ er kort. (Life is short.)', options: ['Livet', 'Liv', 'Et liv', 'Livene'], answer: 0, explanation: 'General statements about a concept often take the definite form.', level: 'B1', topic: 'bestemt form' },
      { id: 'b1k2-q3', question: 'Jeg har vondt i ___.', options: ['ryggen', 'min rygg', 'en rygg', 'rygg'], answer: 0, explanation: 'Body parts take the definite form, not a possessive.', level: 'B1', topic: 'bestemt form' },
      { id: 'b1k2-q4', question: 'Plural of «en bror»:', options: ['brødre', 'brorer', 'brødrer', 'brorre'], answer: 0, explanation: 'bror – broren – brødre – brødrene.', level: 'B1', topic: 'uregelmessige substantiv' },
      { id: 'b1k2-q5', question: 'Maten er billig. Dessuten ___ god.', options: ['er den', 'den er', 'den ikke er', 'er'], answer: 0, explanation: '«Dessuten» is an adverb → inversion.', level: 'B1', topic: 'tekstbinding' },
      { id: 'b1k2-q6', question: 'Plural of «et øye»:', options: ['øyne', 'øyer', 'øye', 'øyene'], answer: 0, explanation: 'et øye – øyet – øyne – øynene.', level: 'B1', topic: 'uregelmessige substantiv' },
      { id: 'b1k2-q7', question: 'Har du ___?', options: ['bil', 'en bil', 'bilen', 'bilene'], answer: 0, explanation: 'Things you normally own one of, after «ha»: no article.', level: 'B1', topic: 'substantiv' },
    ],
    sentences: [
      { id: 'b1k2-s1', no: 'Hos oss er det vanlig å spise middag sammen', en: 'In our family it’s usual to eat dinner together', level: 'B1', focus: 'inversjon', hint: 'Hos oss + er + det …' },
      { id: 'b1k2-s2', no: 'Dessuten er det billig og enkelt å lage', en: 'Moreover it is cheap and easy to make', level: 'B1', focus: 'tekstbinding', hint: 'Dessuten → verb → subject.' },
      { id: 'b1k2-s3', no: 'Alt i alt mener jeg at familien er viktigst', en: 'All in all I think that family is most important', level: 'B1', focus: 'avslutning', hint: 'Alt i alt + mener jeg + at …' },
      { id: 'b1k2-s4', no: 'Har dere bil eller tar dere buss', en: 'Do you have a car or do you take the bus', level: 'B1', focus: 'uten artikkel', hint: 'No article with bil or buss here.' },
      { id: 'b1k2-s5', no: 'Jeg har to brødre og en søster', en: 'I have two brothers and a sister', level: 'B1', focus: 'uregelmessig flertall', hint: 'bror → brødre.' },
    ],
  },

  {
    id: 'b1-3',
    course: 'b1',
    n: 3,
    title: 'Jobb og fritid',
    titleEn: 'Work and leisure',
    level: 'B1',
    theme: 'Talking about your job, sport and hobbies, holidays abroad and social gatherings.',
    canDo: [
      { no: 'Jeg kan forklare hva jeg jobber med.', en: 'I can explain what I do for a living.' },
      { no: 'Jeg kan bruke pronomen og eiendomsord riktig.', en: 'I can use pronouns and possessives correctly.' },
      { no: 'Jeg kan småprate i sosiale sammenhenger.', en: 'I can make small talk in social situations.' },
    ],
    dialogues: ['Kjemisk prosessteknologi', 'Sport i lunsjen', 'Syden'],
    phrases: [
      { no: 'Jeg jobber som … / Jeg jobber med …', en: 'I work as … / I work with …' },
      { no: 'Arbeidsdagen min består stort sett av …', en: 'My working day mostly consists of …' },
      { no: 'Hva driver du med på fritida?', en: 'What do you do in your free time?' },
      { no: 'Takk for sist!', en: 'Thanks for last time! (said when you meet someone you last saw socially)' },
      { no: 'Skal vi ta en kaffe en dag?', en: 'Shall we grab a coffee some day?' },
      { no: 'Det spørs. Det kommer an på været.', en: 'It depends. It depends on the weather.' },
    ],
    grammar: [
      {
        heading: 'Personal pronouns: subject, object, reflexive',
        body: 'subject: jeg du han hun den/det vi dere de\nobject: meg deg ham/han henne den/det oss dere dem\nreflexive: meg deg seg seg seg oss dere seg\n\nThe reflexive «seg» points back to the subject of the SAME clause. Compare:\nHan vasker seg. (himself)\nHan vasker ham. (another man)\n\nIn speech, many Norwegians say «han» for both he/him and «dem» for they — but write «ham» and «de» on the test.',
        examples: [
          { no: 'De gleder seg til ferien.', en: 'They are looking forward to the holiday.' },
          { no: 'Jeg ba dem komme tidlig.', en: 'I asked them to come early.' },
        ],
      },
      {
        heading: 'Possessives: after the noun is normal',
        body: 'Neutral Norwegian puts the possessive AFTER a definite noun:\nbilen min · huset vårt · jobben hennes\n\nBefore the noun (indefinite) = emphasis or contrast:\nMIN bil er eldre enn DIN.\n\nFamily words often drop the definite ending in speech: «mora mi», «far min», «bror min».',
        examples: [
          { no: 'Kollegaene mine er veldig hyggelige.', en: 'My colleagues are very nice.' },
          { no: 'Det er ikke min feil!', en: 'It’s not MY fault!', note: 'emphasis' },
        ],
      },
      {
        heading: 'sin / si / sitt / sine',
        body: 'Use sin/si/sitt/sine when the owner is the 3rd-person subject of the same clause:\n\nAnna liker jobben sin. (her own job)\nAnna liker jobben hennes. (another woman’s job)\n\n«Sin» never appears in the subject itself: «Anna og mannen hennes» (not «mannen sin») kommer i kveld.',
        examples: [
          { no: 'Han spiller fotball med kollegaene sine i lunsjen.', en: 'He plays football with his colleagues at lunch.' },
          { no: 'Faren hennes er fra Bergen.', en: 'Her father is from Bergen.', note: 'part of the subject → hennes' },
        ],
      },
      {
        heading: 'Demonstratives: den/det/de vs. denne/dette/disse',
        body: 'den / det / de = that / those (or, unstressed, «the» before an adjective)\ndenne / dette / disse = this / these\n\nThe noun is DEFINITE after both: denne jobben, det huset, disse menneskene.\n\nIn speech, «den her / den der» is common for this/that: «den jakka her».',
        examples: [
          { no: 'Denne uka har jeg jobbet mye.', en: 'This week I have worked a lot.' },
          { no: 'Husker du den ferien i Spania?', en: 'Do you remember that holiday in Spain?' },
        ],
      },
      {
        heading: 'More reflexive expressions',
        body: 'å interessere seg for · å bry seg om (care about) · å konsentrere seg om · å forberede seg på · å slappe av (no seg!) · å kjede seg (be bored) · å gifte seg med · å bestemme seg for · å forelske seg i · å skynde seg\n\nThe preposition belongs to the verb — learn them together.',
        examples: [
          { no: 'Jeg interesserer meg for historie.', en: 'I am interested in history.' },
          { no: 'Vi har bestemt oss for å bli i Norge.', en: 'We have decided to stay in Norway.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Unstressed pronouns melt into the verb',
      body: 'Object pronouns are almost never stressed, so they attach to the word before:\n\n«Jeg så ham» → «jæ så’n» · «Har du sett henne?» → «ha’ru sett a?» · «Gi meg den» → «gi meg’n»\n\nIn the oral test you can speak clearly — but you must UNDERSTAND these reductions, or the examiner’s questions will be hard to follow.',
    },
    speaking: [
      'Hva jobber du med? Beskriv en vanlig arbeidsdag.',
      'Hva driver du med på fritida, og hvorfor liker du det?',
      'Ferie i Syden eller på hytta i Norge — hva foretrekker du? Begrunn svaret.',
      'Hvordan er det å være kollega med nordmenn? Gi eksempler.',
      'Rollespill: Du møter en kollega på butikken. Småprat i ett minutt.',
    ],
    quiz: [
      { id: 'b1k3-q1', question: 'Per kjører kona ___ på jobben.', options: ['si', 'hans', 'sin', 'hennes'], answer: 0, explanation: 'Owner = subject (Per) + feminine noun «kona» → si.', level: 'B1', topic: 'eiendomsord' },
      { id: 'b1k3-q2', question: 'Kari og mannen ___ kommer i kveld.', options: ['hennes', 'sin', 'hans', 'seg'], answer: 0, explanation: '«sin» can’t be part of the subject.', level: 'B1', topic: 'eiendomsord' },
      { id: 'b1k3-q3', question: 'Jeg interesserer ___ for politikk.', options: ['meg', 'seg', 'jeg', 'min'], answer: 0, explanation: 'Reflexive for «jeg» is «meg».', level: 'B1', topic: 'refleksiv' },
      { id: 'b1k3-q4', question: '___ uka har vært travel.', options: ['Denne', 'Dette', 'Disse', 'Den her'], answer: 0, explanation: 'ei uke → denne uka.', level: 'B1', topic: 'demonstrativ' },
      { id: 'b1k3-q5', question: 'Vi har bestemt oss ___ å flytte.', options: ['for', 'til', 'om', 'på'], answer: 0, explanation: 'å bestemme seg for.', level: 'B1', topic: 'preposisjoner' },
      { id: 'b1k3-q6', question: 'Neutral word order: «my car» = ?', options: ['bilen min', 'min bilen', 'bil min', 'mine bil'], answer: 0, explanation: 'Definite noun + possessive is the neutral order.', level: 'B1', topic: 'eiendomsord' },
      { id: 'b1k3-q7', question: 'De gleder ___ til sommeren.', options: ['seg', 'dem', 'de', 'sin'], answer: 0, explanation: 'Reflexive 3rd person plural = seg.', level: 'B1', topic: 'refleksiv' },
    ],
    sentences: [
      { id: 'b1k3-s1', no: 'Han spiller fotball med kollegaene sine i lunsjen', en: 'He plays football with his colleagues at lunch', level: 'B1', focus: 'sin/sine', hint: 'Owner is the subject → sine.' },
      { id: 'b1k3-s2', no: 'Jeg interesserer meg mest for historie og natur', en: 'I am most interested in history and nature', level: 'B1', focus: 'refleksive uttrykk', hint: 'interesserer meg for …' },
      { id: 'b1k3-s3', no: 'Arbeidsdagen min består stort sett av møter', en: 'My working day mostly consists of meetings', level: 'B1', focus: 'eiendomsord', hint: 'Arbeidsdagen min …' },
      { id: 'b1k3-s4', no: 'Denne uka har jeg jobbet mye overtid', en: 'This week I have worked a lot of overtime', level: 'B1', focus: 'demonstrativ + inversjon', hint: 'Denne uka → har → jeg.' },
      { id: 'b1k3-s5', no: 'Det spørs om vi har tid i helgen', en: 'It depends whether we have time at the weekend', level: 'B1', focus: 'om-setning', hint: 'Det spørs + om …' },
    ],
  },

  {
    id: 'b1-4',
    course: 'b1',
    n: 4,
    title: 'Bolig',
    titleEn: 'Housing',
    level: 'B1',
    theme: 'Choosing where to live, reading a property ad, and Norwegian housing types.',
    canDo: [
      { no: 'Jeg kan beskrive og sammenligne boliger.', en: 'I can describe and compare homes.' },
      { no: 'Jeg kan forstå en boligannonse.', en: 'I can understand a property advert.' },
      { no: 'Jeg kan bøye og gradbøye adjektiver.', en: 'I can inflect and compare adjectives.' },
    ],
    dialogues: ['Valg av bolig', 'En boligannonse', 'Boligtyper'],
    phrases: [
      { no: 'Leiligheten er på 75 kvadratmeter.', en: 'The flat is 75 square metres.' },
      { no: 'Det er kort vei til skole og butikk.', en: 'It’s a short distance to the school and shops.' },
      { no: 'Prisantydningen er 4,2 millioner.', en: 'The asking price is 4.2 million.' },
      { no: 'Vi leier, men vi vil gjerne kjøpe.', en: 'We rent, but we’d like to buy.' },
      { no: 'Fordelen med å bo sentralt er at …', en: 'The advantage of living centrally is that …' },
      { no: 'Ulempen er at det er dyrt.', en: 'The disadvantage is that it’s expensive.' },
    ],
    grammar: [
      {
        heading: 'Adjectives: the main pattern',
        body: 'Indefinite: en stor stue · ei stor stue · et stort kjøkken · store rom\nDefinite: den store stua · det store kjøkkenet · de store rommene\nAfter a possessive or genitive: min store stue · Pers nye hus (always -e)\n\nRemember: definite = adjective in -e + definite noun + den/det/de in front.',
        examples: [
          { no: 'Vi kjøpte et gammelt hus med en stor hage.', en: 'We bought an old house with a big garden.' },
          { no: 'Det gamle huset trenger nytt tak.', en: 'The old house needs a new roof.' },
        ],
      },
      {
        heading: 'Other adjective patterns',
        body: '• no -t: adjectives in -ig, -lig, -isk: et hyggelig nabolag, et praktisk kjøkken\n• no change at all: adjectives in -e or -s: moderne, stille, gammeldags, felles\n• double consonant drops: grønn – grønt, trygg – trygt\n• -el, -en, -er lose the e in plural: gammel – gamle, sulten – sultne, vakker – vakre\n• liten: en liten · ei lita · et lite · små · den lille',
        examples: [
          { no: 'Leiligheten har et moderne bad og et trivelig kjøkken.', en: 'The flat has a modern bathroom and a pleasant kitchen.' },
          { no: 'De vakre gamle husene ligger ved elva.', en: 'The beautiful old houses are by the river.' },
        ],
      },
      {
        heading: 'Comparison',
        body: 'Regular pattern: -ere, -est (-st after -ig/-som): varm – varmere – varmest · billig – billigere – billigst\n\nmer/mest for long words and participles: mer praktisk, mest moderne, mer interessert\n\nIrregular: god – bedre – best · dårlig – verre – verst · gammel – eldre – eldst · ung – yngre – yngst · stor – større – størst · liten – mindre – minst · lang – lengre – lengst · mange – flere – flest · mye – mer – mest\n\nDefinite superlative takes -e: det største rommet, den billigste leiligheten.',
        examples: [
          { no: 'Huset er større, men leiligheten er mer praktisk.', en: 'The house is bigger, but the flat is more practical.' },
          { no: 'Dette er den billigste boligen vi har sett.', en: 'This is the cheapest home we have seen.' },
        ],
      },
      {
        heading: 'Comparing: like … som, enn',
        body: 'like stor som = as big as · ikke så stor som = not as big as · større enn = bigger than · den største av = the biggest of · jo større, jo dyrere = the bigger, the more expensive',
        examples: [
          { no: 'Jo nærmere sentrum, jo dyrere blir det.', en: 'The closer to the centre, the more expensive it gets.' },
          { no: 'Hagen er ikke så stor som jeg trodde.', en: 'The garden isn’t as big as I thought.' },
        ],
      },
      {
        heading: 'Words for quantity',
        body: 'Countable: mange, flere, få, noen, et par, hundrevis av\nUncountable: mye, mer, lite, litt, noe\n\nfersk vs. frisk: fersk = fresh (food): ferskt brød · frisk = healthy / fresh (air): Er du frisk igjen? frisk luft.',
        examples: [
          { no: 'Det er få ledige leiligheter og mange som vil kjøpe.', en: 'There are few vacant flats and many people who want to buy.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Saying big numbers',
      body: 'Norwegian reads numbers from the left, with «og» before the last part:\n\n4 250 000 = fire millioner to hundre og femti tusen\n75 m² = syttifem kvadratmeter\n1 995 = (year) nitten nittifem · (amount) ett tusen ni hundre og nittifem\n\nPrices: «fire komma to millioner» (4,2 mill.). Norwegian uses a comma for decimals.',
    },
    speaking: [
      'Beskriv boligen din: hvor stor er den, hvor mange rom har den, og hva liker du med den?',
      'Hva er fordeler og ulemper med å bo i sentrum og på landet?',
      'Leie eller eie? Hva synes du, og hvorfor?',
      'Beskriv drømmeboligen din.',
      'Sammenlign boligen du vokste opp i med den du bor i nå.',
    ],
    quiz: [
      { id: 'b1k4-q1', question: 'Vi har et ___ kjøkken. (praktisk)', options: ['praktisk', 'praktiskt', 'praktiske', 'praktiskere'], answer: 0, explanation: 'Adjectives in -isk take no -t.', level: 'B1', topic: 'adjektiv' },
      { id: 'b1k4-q2', question: 'Det ___ huset ligger ved sjøen. (gammel)', options: ['gamle', 'gammle', 'gammelt', 'gammel'], answer: 0, explanation: 'Definite form → gamle (the e in -el drops).', level: 'B1', topic: 'adjektiv' },
      { id: 'b1k4-q3', question: 'Comparative of «stor»:', options: ['større', 'storere', 'mer stor', 'størst'], answer: 0, explanation: 'stor – større – størst.', level: 'B1', topic: 'komparasjon' },
      { id: 'b1k4-q4', question: 'Dette er den ___ leiligheten. (billig, superlative)', options: ['billigste', 'billigst', 'billigeste', 'mest billig'], answer: 0, explanation: 'Definite superlative takes -e.', level: 'B1', topic: 'komparasjon' },
      { id: 'b1k4-q5', question: 'Jo nærmere sentrum, ___ dyrere.', options: ['jo', 'enn', 'som', 'så'], answer: 0, explanation: 'jo …, jo … = the …, the …', level: 'B1', topic: 'sammenligning' },
      { id: 'b1k4-q6', question: 'Er du ___ igjen etter influensaen?', options: ['frisk', 'fersk', 'ferske', 'friskt'], answer: 0, explanation: 'frisk = healthy. fersk = fresh food.', level: 'B1', topic: 'ordvalg' },
      { id: 'b1k4-q7', question: 'Det er ___ ledige leiligheter i byen.', options: ['få', 'lite', 'mye', 'litt'], answer: 0, explanation: 'Countable → få (few). Uncountable → lite.', level: 'B1', topic: 'kvantitet' },
    ],
    sentences: [
      { id: 'b1k4-s1', no: 'Leiligheten er mindre men mye mer praktisk', en: 'The flat is smaller but much more practical', level: 'B1', focus: 'komparativ', hint: 'mindre … mer praktisk.' },
      { id: 'b1k4-s2', no: 'Fordelen med å bo sentralt er at alt er i nærheten', en: 'The advantage of living centrally is that everything is nearby', level: 'B1', focus: 'fordeler', hint: 'Fordelen med å … er at …' },
      { id: 'b1k4-s3', no: 'Jo eldre huset er jo mer må man pusse opp', en: 'The older the house is, the more you have to renovate', level: 'B1', focus: 'jo … jo', hint: 'Jo + adjective …, jo + …' },
      { id: 'b1k4-s4', no: 'Det gamle huset har en stor og solrik hage', en: 'The old house has a big, sunny garden', level: 'B1', focus: 'bestemt form', hint: 'Det gamle huset …' },
      { id: 'b1k4-s5', no: 'Hagen er ikke så stor som jeg trodde', en: 'The garden is not as big as I thought', level: 'B1', focus: 'ikke så … som', hint: 'ikke så + adjective + som.' },
    ],
  },

  {
    id: 'b1-5',
    course: 'b1',
    n: 5,
    title: 'Skole og utdanning',
    titleEn: 'School and education',
    level: 'B1',
    theme: 'Private or public school, memories of school days, and the Norwegian education system.',
    canDo: [
      { no: 'Jeg kan forklare det norske skolesystemet i hovedtrekk.', en: 'I can explain the main features of the Norwegian school system.' },
      { no: 'Jeg kan delta i en diskusjon og si meningen min.', en: 'I can take part in a discussion and give my opinion.' },
      { no: 'Jeg behersker ordstilling i helsetninger og leddsetninger.', en: 'I can control word order in main and subordinate clauses.' },
    ],
    dialogues: ['Privat eller offentlig skole?', 'Andreas sin skoletid', 'Utdanningssystemet'],
    phrases: [
      { no: 'Etter min mening …', en: 'In my opinion …' },
      { no: 'Jeg er enig med deg i at …', en: 'I agree with you that …' },
      { no: 'Jeg er ikke helt enig. Jeg synes heller at …', en: 'I don’t quite agree. I think rather that …' },
      { no: 'Det er et godt poeng, men …', en: 'That’s a good point, but …' },
      { no: 'Hva mener du om det?', en: 'What do you think about that?' },
      { no: 'Det kommer an på …', en: 'It depends on …' },
    ],
    grammar: [
      {
        heading: 'The main clause: V2 is non-negotiable',
        body: 'Slot 1: anything (subject, time, place, object, a whole subordinate clause)\nSlot 2: the conjugated verb\nThen: subject (if not in slot 1) → sentence adverb → other verbs → object → place → time\n\nI fjor begynte sønnen min på ungdomsskolen.\nPå skolen lærer barna engelsk fra første klasse.\nHvis du vil studere, må du ha studiekompetanse.',
        examples: [
          { no: 'I Norge begynner barna på skolen når de er seks år.', en: 'In Norway children start school when they are six.' },
        ],
      },
      {
        heading: 'Sentence adverbs: where does «ikke» go?',
        body: 'Sentence adverbs: ikke, aldri, alltid, ofte, sjelden, også, bare, kanskje, nok, jo, vel, egentlig, heller ikke\n\nMain clause: after the conjugated verb (or after the subject if it’s inverted):\nJeg liker ikke matte. · I dag har jeg ikke tid. · Har du aldri vært der?\n\nBUT an object pronoun comes before «ikke»: Jeg kjenner ham ikke. Jeg forstår det ikke.',
        examples: [
          { no: 'Sønnen min liker egentlig ikke skolen.', en: 'My son doesn’t really like school.' },
          { no: 'Jeg husker det ikke.', en: 'I don’t remember it.', note: 'pronoun before ikke' },
        ],
      },
      {
        heading: 'Subordinate clauses: the adverb jumps forward',
        body: 'In a subordinate clause, the order is fixed: subjunction + subject + sentence adverb + verb.\n\nJeg tror at hun IKKE KOMMER.\nDet er synd at du ALDRI HAR tid.\n… fordi han OFTE ER syk.\n\nThis is the single most important word-order rule to show at B1.',
        examples: [
          { no: 'Mange mener at privatskoler ikke er bedre enn offentlige skoler.', en: 'Many think that private schools are not better than public schools.' },
        ],
      },
      {
        heading: 'With or without «at»',
        body: 'After verbs of saying and thinking, «at» can be dropped — the clause stays a subordinate clause:\n\nJeg tror (at) hun har rett.\n\nBut if the clause comes FIRST, keep «at»: «At hun har rett, er klart.»',
        examples: [{ no: 'Jeg synes skolen burde være gratis for alle.', en: 'I think school should be free for everyone.' }],
      },
      {
        heading: 'Subordinate clause first: count it as slot 1',
        body: 'When a subordinate clause opens the sentence, the main-clause verb comes straight after the comma:\n\nNår jeg kommer hjem, LAGER jeg middag.\nFordi det regnet, BLE vi hjemme.\nHvis du har spørsmål, KAN du ringe meg.',
        examples: [{ no: 'Da jeg gikk på skolen, var lærerne mye strengere.', en: 'When I was at school, the teachers were much stricter.' }],
      },
      {
        heading: 'som, da/når, fordi/derfor — revision',
        body: 'som = who/which (subordinate: adverb before verb): elever som ikke trives\nda = once in the past · når = now, future, repeated, questions\nfordi + subordinate clause · derfor + inversion',
        examples: [
          { no: 'Elever som ikke trives, lærer mindre.', en: 'Pupils who aren’t happy learn less.' },
          { no: 'Han fikk dårlige karakterer. Derfor tok han et friår.', en: 'He got bad grades. That’s why he took a gap year.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Intonation in questions and opinions',
      body: 'Norwegian statements usually end with a rising melody in the Oslo area — so a rise doesn’t automatically mean a question.\n\nWhen you give an opinion, stress the key word: «Jeg synes IKKE det.» «Det er VELDIG viktig.» Flat, unstressed speech sounds unsure in an oral test.',
    },
    speaking: [
      'Forklar kort det norske skolesystemet: barnehage, grunnskole, videregående og høyere utdanning.',
      'Privatskole eller offentlig skole — hva mener du? Gi to argumenter.',
      'Sammenlign skolen i Norge med skolen i hjemlandet ditt.',
      'Fortell om en lærer du husker godt. Hvorfor husker du ham eller henne?',
      'Bør skoledagen være lengre? Diskuter fordeler og ulemper.',
    ],
    quiz: [
      { id: 'b1k5-q1', question: 'Jeg tror at hun ___.', options: ['ikke kommer', 'kommer ikke', 'ikke kom ikke', 'kommer ikke i dag'], answer: 0, explanation: 'Subordinate clause: «ikke» before the verb.', level: 'B1', topic: 'leddsetning' },
      { id: 'b1k5-q2', question: 'Jeg kjenner ___.', options: ['ham ikke', 'ikke ham', 'han ikke ham', 'ikke han'], answer: 0, explanation: 'An unstressed object pronoun goes before «ikke».', level: 'B1', topic: 'setningsadverb' },
      { id: 'b1k5-q3', question: 'Når jeg kommer hjem, ___ middag.', options: ['lager jeg', 'jeg lager', 'jeg ikke lager', 'lage jeg'], answer: 0, explanation: 'A subordinate clause in slot 1 → verb next.', level: 'B1', topic: 'ordstilling' },
      { id: 'b1k5-q4', question: 'Elever som ___, lærer mindre.', options: ['ikke trives', 'trives ikke', 'ikke trive', 'trives ikke seg'], answer: 0, explanation: 'som-clause → «ikke» before the verb: som ikke trives.', level: 'B1', topic: 'relativsetning' },
      { id: 'b1k5-q5', question: 'Jeg er enig ___ deg.', options: ['med', 'i', 'på', 'til'], answer: 0, explanation: 'enig med (a person) · enig i (a statement) · enig om (agree on).', level: 'B1', topic: 'preposisjoner' },
      { id: 'b1k5-q6', question: 'I Norge ___ barna på skolen når de er seks år.', options: ['begynner', 'de begynner', 'barna begynner', 'begynte'], answer: 0, explanation: '«I Norge» in slot 1 → the verb comes next, then the subject.', level: 'B1', topic: 'V2' },
      { id: 'b1k5-q7', question: 'Det kommer an ___ hvor mye det koster.', options: ['på', 'om', 'til', 'av'], answer: 0, explanation: 'å komme an på = to depend on.', level: 'B1', topic: 'preposisjoner' },
    ],
    sentences: [
      { id: 'b1k5-s1', no: 'Etter min mening burde skolen være gratis for alle', en: 'In my opinion school should be free for everyone', level: 'B1', focus: 'mening + V2', hint: 'Etter min mening → burde → skolen.' },
      { id: 'b1k5-s2', no: 'Mange mener at privatskoler ikke er bedre', en: 'Many think that private schools are not better', level: 'B1', focus: 'at + ikke', hint: 'at + subject + ikke + verb.' },
      { id: 'b1k5-s3', no: 'Da jeg gikk på skolen var lærerne mye strengere', en: 'When I was at school the teachers were much stricter', level: 'B1', focus: 'leddsetning først', hint: 'Da-clause → var → lærerne.' },
      { id: 'b1k5-s4', no: 'Jeg er enig med deg i at det er viktig', en: 'I agree with you that it is important', level: 'B1', focus: 'enig med / i', hint: 'enig med + person + i at …' },
      { id: 'b1k5-s5', no: 'Sønnen min liker egentlig ikke matte', en: 'My son doesn’t really like maths', level: 'B1', focus: 'setningsadverb', hint: 'verb + egentlig + ikke.' },
    ],
  },
]
