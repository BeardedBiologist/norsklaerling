import type { ChapterTestBank } from '../../types'

/** Kapittelprøve banks for Nybegynnerkurs chapters 7–12 (A2). See tests-nybegynner-1.ts. */
export const testsNybegynner2: Record<string, ChapterTestBank> = {
  '7': {
    quiz: [
      { id: 'p07-q1', question: 'I går ___ vi i hagen. (jobbe)', options: ['jobbet', 'jobbte', 'jobber', 'har jobbe'], answer: 0, explanation: 'Group 1: -et.', level: 'A2', topic: 'preteritum' },
      { id: 'p07-q2', question: 'Han ___ til jobben i går. (kjøre)', options: ['kjørte', 'kjøret', 'kjørde', 'kjører'], answer: 0, explanation: 'Group 2: -te.', level: 'A2', topic: 'preteritum' },
      { id: 'p07-q3', question: 'De ___ i Tromsø i fem år. (bo, past)', options: ['bodde', 'boet', 'bodet', 'bor'], answer: 0, explanation: 'Group 4: -dde.', level: 'A2', topic: 'preteritum' },
      { id: 'p07-q4', question: 'Past tense of «å ta»:', options: ['tok', 'tatt', 'tadde', 'tar'], answer: 0, explanation: 'ta – tok – har tatt.', level: 'A2', topic: 'preteritum' },
      { id: 'p07-q5', question: 'Past tense of «å si»:', options: ['sa', 'sagt', 'sidde', 'sier'], answer: 0, explanation: 'si – sa – har sagt.', level: 'A2', topic: 'preteritum' },
      { id: 'p07-q6', question: 'Det er ___ snø i år. (a lot of, uncountable)', options: ['mye', 'mange', 'flere', 'få'], answer: 0, explanation: 'Uncountable → mye.', level: 'A2', topic: 'kvantitet' },
      { id: 'p07-q7', question: 'Plural of «en lærer»:', options: ['lærere', 'lærerer', 'lærerne', 'lærers'], answer: 0, explanation: '-er nouns: -e in indefinite plural.', level: 'A2', topic: 'substantiv' },
      { id: 'p07-q8', question: 'Vi ___ et nytt hus i fjor. (bygge)', options: ['bygde', 'bygget', 'bygdet', 'bygger'], answer: 0, explanation: 'Group 3 (stem in -gg): bygde.', level: 'A2', topic: 'preteritum' },
    ],
    sentences: [
      { id: 'p07-s1', no: 'I går spiste vi middag hos mormor', en: 'Yesterday we had dinner at grandma’s', level: 'A2', focus: 'V2 + preteritum', hint: 'Time first, verb, subject.' },
      { id: 'p07-s2', no: 'Hun bodde i Polen før', en: 'She used to live in Poland', level: 'A2', focus: 'preteritum', hint: 'bodde.' },
      { id: 'p07-s3', no: 'Jeg skrev en lang rapport i morges', en: 'I wrote a long report this morning', level: 'A2', focus: 'sterke verb', hint: 'skrive → skrev.' },
      { id: 'p07-s4', no: 'Han begynte på skolen for to år siden', en: 'He started school two years ago', level: 'A2', focus: 'for … siden', hint: 'for + time + siden.' },
      { id: 'p07-s5', no: 'Det var mange folk på møtet', en: 'There were many people at the meeting', level: 'A2', focus: 'kvantitet', hint: 'Det var mange …' },
      { id: 'p07-s6', no: 'Vi kjøpte en ny bil i fjor', en: 'We bought a new car last year', level: 'A2', focus: 'preteritum', hint: 'kjøpte.' },
      { id: 'p07-s7', no: 'Etter lunsj gikk jeg tilbake til kontoret', en: 'After lunch I went back to the office', level: 'A2', focus: 'inversjon', hint: 'Etter lunsj → gikk → jeg.' },
    ],
    listening: [
      [
        { q: 'Hvilken dag våkner Alex tidlig?', options: ['Søndag', 'Mandag', 'Lørdag', 'Fredag'], answer: 0 },
        { q: 'Hvor finner Alex fjernkontrollen?', options: ['På hylla under bordet', 'I sofaen', 'På kjøkkenet', 'Under senga'], answer: 0 },
      ],
      [
        { q: 'Hva gjør Ben først på jobben?', options: ['Slår på PC-en og leser e-posten', 'Går på møte', 'Drikker kaffe med sjefen', 'Ringer Arne'], answer: 0 },
        { q: 'Hva gjør Ben etter lunsj?', options: ['Skriver en rapport og sender e-poster', 'Går hjem', 'Har møte med sjefen', 'Lager modeller'], answer: 0 },
      ],
      [
        { q: 'Hva gjorde Alex sammen med en annen gutt?', options: ['Bygde med lego', 'Spilte fotball', 'Tegnet', 'Leste ei bok'], answer: 0 },
        { q: 'Hva syntes Cecilie om personalet?', options: ['De virket hyggelige og flinke', 'De var strenge', 'De var nye', 'Hun møtte dem ikke'], answer: 0 },
      ],
      [
        { q: 'Hva gjør pappa når Dina kommer hjem?', options: ['Lager middag', 'Ser på TV', 'Jobber på kontoret', 'Henter Alex'], answer: 0 },
        { q: 'Hvordan var læreren Ole?', options: ['Ganske gammel, men snill og koselig', 'Ung og sur', 'Streng', 'Ny på skolen'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p07-o1', type: 'fortell', prompt: 'Fortell hva du gjorde forrige helg, fra fredag kveld til søndag.', hints: ['På fredag …', 'Etterpå …', 'På søndag …'] },
      { id: 'p07-o2', type: 'fortell', prompt: 'Fortell om en vanlig dag på jobben eller skolen i forrige uke.', hints: ['Jeg begynte …', 'Til lunsj …'] },
      { id: 'p07-o3', type: 'beskriv', prompt: 'Beskriv en kollega eller en venn: hvordan hun eller han ser ut og hva dere gjør sammen.', hints: ['Hun er …', 'Vi pleier å …'] },
    ],
  },

  '8': {
    quiz: [
      { id: 'p08-q1', question: 'Vi ___ bodd her i fem år.', options: ['har', 'er', 'hadde', 'blir'], answer: 0, explanation: 'har + participle.', level: 'A2', topic: 'perfektum' },
      { id: 'p08-q2', question: 'Har du ___ leksene? (gjøre)', options: ['gjort', 'gjorde', 'gjøret', 'gjør'], answer: 0, explanation: 'gjøre – gjorde – har gjort.', level: 'A2', topic: 'perfektum' },
      { id: 'p08-q3', question: 'Choose the correct word order:', options: ['På mandag begynner kurset.', 'På mandag kurset begynner.', 'Kurset på mandag begynner.', 'Begynner på mandag kurset.'], answer: 0, explanation: 'Verb second.', level: 'A2', topic: 'ordstilling' },
      { id: 'p08-q4', question: 'Hun sier at hun ___ har tid.', options: ['ikke', 'har ikke', 'ikke ikke', 'aldri ikke'], answer: 0, explanation: 'Subordinate clause: ikke before the verb.', level: 'A2', topic: 'leddsetning' },
      { id: 'p08-q5', question: 'Simple past or perfect? «Vi ___ i Bergen for to år siden.»', options: ['var', 'har vært', 'er', 'blir'], answer: 0, explanation: 'Specific past time → preteritum.', level: 'A2', topic: 'perfektum' },
      { id: 'p08-q6', question: 'Det ___ snø i morgen. (prediction)', options: ['kommer til å bli', 'vil å bli', 'skal blir', 'blir å'], answer: 0, explanation: 'kommer til å + infinitive.', level: 'A2', topic: 'framtid' },
      { id: 'p08-q7', question: 'Past participle of «å drikke»:', options: ['drukket', 'drakk', 'drikket', 'drukk'], answer: 0, explanation: 'drikke – drakk – har drukket.', level: 'A2', topic: 'perfektum' },
      { id: 'p08-q8', question: 'Jeg blir hjemme ___ jeg er syk.', options: ['fordi', 'derfor', 'men', 'så'], answer: 0, explanation: 'fordi = because.', level: 'A2', topic: 'leddsetning' },
    ],
    sentences: [
      { id: 'p08-s1', no: 'Vi har lært mye norsk i år', en: 'We have learnt a lot of Norwegian this year', level: 'A2', focus: 'perfektum', hint: 'har + participle.' },
      { id: 'p08-s2', no: 'I kveld skal jeg lese ei bok', en: 'Tonight I am going to read a book', level: 'A2', focus: 'inversjon', hint: 'I kveld → skal → jeg.' },
      { id: 'p08-s3', no: 'Hun vet at jeg ikke liker fisk', en: 'She knows that I don’t like fish', level: 'A2', focus: 'ikke i leddsetning', hint: 'at + subject + ikke + verb.' },
      { id: 'p08-s4', no: 'Har du noen gang vært i Tromsø', en: 'Have you ever been to Tromsø', level: 'A2', focus: 'perfektum', hint: 'Har du … vært.' },
      { id: 'p08-s5', no: 'Jeg tror at det kommer til å regne', en: 'I think it is going to rain', level: 'A2', focus: 'framtid', hint: 'kommer til å.' },
      { id: 'p08-s6', no: 'Han går ikke på jobb fordi han er syk', en: 'He isn’t going to work because he is ill', level: 'A2', focus: 'fordi', hint: 'fordi + subject + verb.' },
      { id: 'p08-s7', no: 'Neste år skal vi flytte til Bergen', en: 'Next year we are going to move to Bergen', level: 'A2', focus: 'inversjon', hint: 'Neste år → skal → vi.' },
    ],
    listening: [
      [
        { q: 'Hvor lenge har Alex gått i barnehagen?', options: ['I over to uker', 'I ett år', 'I to dager', 'I en måned'], answer: 0 },
        { q: 'Hvor har barnehagen vært på tur?', options: ['På biblioteket', 'I skogen', 'På museum', 'I parken'], answer: 0 },
      ],
      [
        { q: 'Hvor er norskkurset?', options: ['I et klasserom på Dinas skole', 'På universitetet', 'På jobben', 'Hjemme hos læreren'], answer: 0 },
        { q: 'Hva ligger på bordet foran Ben?', options: ['Ei skrivebok, en blyant og et viskelær', 'En PC', 'Ei avis', 'Ingenting'], answer: 0 },
      ],
      [
        { q: 'Hva leser Cecilie om i avisa?', options: ['Høstsalget og en kunstutstilling', 'Fotball', 'Været i Paris', 'Nye jobber'], answer: 0 },
        { q: 'Hva har Cecilie pakket?', options: ['Ekstra klær, frukt, sjokolade og kaffe', 'Bare vann', 'En matpakke', 'Regntøy'], answer: 0 },
      ],
      [
        { q: 'Hvor mange elever er det i klassen til Dina?', options: ['23', '15', '30', '19'], answer: 0 },
        { q: 'Hvilke fag liker Eva best?', options: ['Matematikk og samfunnsfag', 'Språk og historie', 'Engelsk', 'Naturfag'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p08-o1', type: 'svar', prompt: 'Hva har du gjort i Norge som du er stolt av? Bruk perfektum.', hints: ['Jeg har …', 'Det har vært …'] },
      { id: 'p08-o2', type: 'svar', prompt: 'Hva skal du gjøre i sommer? Bruk «skal» og «kommer til å».', hints: ['I sommer skal jeg …', 'Det kommer til å …'] },
      { id: 'p08-o3', type: 'mening', prompt: 'Hvorfor er det viktig å lære norsk når man bor i Norge? Bruk «fordi».', hints: ['Det er viktig fordi …', 'Dessuten …'] },
    ],
  },

  '9': {
    quiz: [
      { id: 'p09-q1', question: 'Dette er bilen ___. (our)', options: ['vår', 'vårt', 'våre', 'vårs'], answer: 0, explanation: 'en bil → vår.', level: 'A2', topic: 'eiendomsord' },
      { id: 'p09-q2', question: 'Huset ___ er stort. (my)', options: ['mitt', 'min', 'mine', 'mi'], answer: 0, explanation: 'et hus → mitt.', level: 'A2', topic: 'eiendomsord' },
      { id: 'p09-q3', question: '___ vi bodde i Bergen, regnet det hver dag.', options: ['Da', 'Når', 'Hvis', 'Om'], answer: 0, explanation: 'One period in the past → da.', level: 'A2', topic: 'da/når' },
      { id: 'p09-q4', question: '___ jeg har fri, går jeg på tur. (whenever)', options: ['Når', 'Da', 'Som', 'At'], answer: 0, explanation: 'Repeated → når.', level: 'A2', topic: 'da/når' },
      { id: 'p09-q5', question: 'Boka ___ ligger på bordet, er min.', options: ['som', 'hva', 'hvem', 'at'], answer: 0, explanation: 'Relative pronoun = som.', level: 'A2', topic: 'relativsetning' },
      { id: 'p09-q6', question: 'Correct spelling:', options: ['kjøkkenbord', 'kjøkken bord', 'kjøkken-bord', 'kjøkkenbor'], answer: 0, explanation: 'Compounds are one word.', level: 'A2', topic: 'sammensatte ord' },
      { id: 'p09-q7', question: 'Han er en mann som ___.', options: ['ikke snakker mye', 'snakker ikke mye', 'snakker mye ikke', 'ikke mye snakker'], answer: 0, explanation: 'som-clause: ikke before the verb.', level: 'A2', topic: 'relativsetning' },
      { id: 'p09-q8', question: 'Barna ___ heter Ida og Ola. (their)', options: ['deres', 'sin', 'sine', 'dems'], answer: 0, explanation: 'deres never changes.', level: 'A2', topic: 'eiendomsord' },
    ],
    sentences: [
      { id: 'p09-s1', no: 'Kvinnen som bor her er lærer', en: 'The woman who lives here is a teacher', level: 'A2', focus: 'som-setning', hint: 'Kvinnen + som-clause + er.' },
      { id: 'p09-s2', no: 'Da jeg var liten bodde vi på landet', en: 'When I was little we lived in the countryside', level: 'A2', focus: 'da + inversjon', hint: 'Da-clause → bodde → vi.' },
      { id: 'p09-s3', no: 'Når jeg er trøtt drikker jeg kaffe', en: 'When I am tired I drink coffee', level: 'A2', focus: 'når + inversjon', hint: 'Når-clause → drikker → jeg.' },
      { id: 'p09-s4', no: 'Sønnen vår går på skolen', en: 'Our son goes to school', level: 'A2', focus: 'eiendomsord', hint: 'Possessive after the noun.' },
      { id: 'p09-s5', no: 'Jeg lurer på om du kan hjelpe meg', en: 'I wonder if you can help me', level: 'A2', focus: 'om-setning', hint: 'lurer på + om …' },
      { id: 'p09-s6', no: 'Det er en jobb som passer for meg', en: 'It is a job that suits me', level: 'A2', focus: 'som-setning', hint: 'en jobb som …' },
      { id: 'p09-s7', no: 'Telefonnummeret mitt er nytt', en: 'My phone number is new', level: 'A2', focus: 'sammensatte ord', hint: 'One compound word.' },
    ],
    listening: [
      [
        { q: 'Hvem er Erik?', options: ['Vikaren', 'Bussjåføren', 'En forelder', 'Sjefen til Eli'], answer: 0 },
        { q: 'Hva har mamma fylt på termosen til Alex?', options: ['Kakao', 'Te', 'Saft', 'Melk'], answer: 0 },
      ],
      [
        { q: 'Hvem er Mathisen?', options: ['En mann fra Rønne Bygg AS', 'Sjefen til Ben', 'En kollega', 'En kunde fra Frankrike'], answer: 0 },
        { q: 'Når planlegger de å starte byggingen?', options: ['Om fem måneder', 'Neste uke', 'Om to år', 'I morgen'], answer: 0 },
      ],
      [
        { q: 'Hva setter Cecilie på etter blodprøven?', options: ['Bomull og et plaster', 'Is', 'Ingenting', 'En bandasje'], answer: 0 },
        { q: 'Hvem kjører Marit hjem?', options: ['Mannen hennes', 'Cecilie', 'En taxi', 'Hun kjører selv'], answer: 0 },
      ],
      [
        { q: 'Hvem vil Tone intervjue?', options: ['En pilot', 'En fotballspiller', 'Justin Bieber', 'En lege'], answer: 0 },
        { q: 'Hvorfor vil ikke Dina bli sykepleier?', options: ['Hun liker ikke å se blod', 'Hun hater matematikk', 'Det er dårlig lønn', 'Mamma sier nei'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p09-o1', type: 'beskriv', prompt: 'Beskriv en person du kjenner godt. Bruk minst to setninger med «som».', hints: ['Hun er en person som …', 'Han har en jobb som …'] },
      { id: 'p09-o2', type: 'fortell', prompt: 'Fortell om da du var barn. Bruk «da» og «når».', hints: ['Da jeg var liten …', 'Når det var sommer …'] },
      { id: 'p09-o3', type: 'svar', prompt: 'Fortell om familien din og bruk eiendomsord: mannen min, barna våre, søstera mi …', hints: ['… min', '… vår', '… hennes'] },
    ],
  },

  '10': {
    quiz: [
      { id: 'p10-q1', question: 'Kari ringer broren ___ hver uke. (her own)', options: ['sin', 'hennes', 'si', 'sitt'], answer: 0, explanation: 'Owner = subject → sin (en bror).', level: 'A2', topic: 'refleksivt eiendomsord' },
      { id: 'p10-q2', question: 'Denne jakka er ___ enn den. (billig)', options: ['billigere', 'mer billig', 'billigst', 'billigre'], answer: 0, explanation: 'billig – billigere – billigst.', level: 'A2', topic: 'komparasjon' },
      { id: 'p10-q3', question: 'Superlative of «dårlig»:', options: ['verst', 'dårligst', 'mest dårlig', 'verre'], answer: 0, explanation: 'dårlig – verre – verst.', level: 'A2', topic: 'komparasjon' },
      { id: 'p10-q4', question: 'Jeg ___ at det blir sol i morgen. (think likely)', options: ['tror', 'synes', 'tenker', 'mener på'], answer: 0, explanation: 'Belief about something likely → tror.', level: 'A2', topic: 'synes/tror/tenker' },
      { id: 'p10-q5', question: 'Hun har bodd her ___ seks år.', options: ['i', 'for', 'om', 'på'], answer: 0, explanation: 'Duration → i.', level: 'A2', topic: 'tidsuttrykk' },
      { id: 'p10-q6', question: 'Comparative of «gammel»:', options: ['eldre', 'gamlere', 'mer gammel', 'eldst'], answer: 0, explanation: 'gammel – eldre – eldst.', level: 'A2', topic: 'komparasjon' },
      { id: 'p10-q7', question: 'Jeg ___ på deg hele dagen. (think about)', options: ['tenker', 'tror', 'synes', 'mener'], answer: 0, explanation: 'Thinking about someone → tenker på.', level: 'A2', topic: 'synes/tror/tenker' },
      { id: 'p10-q8', question: 'Han synger ___. (beautifully, pen)', options: ['pent', 'pen', 'pene', 'penere'], answer: 0, explanation: 'Adverb = neuter form.', level: 'A2', topic: 'adverb' },
    ],
    sentences: [
      { id: 'p10-s1', no: 'Han har hatt vondt i ryggen i to uker', en: 'He has had back pain for two weeks', level: 'A2', focus: 'perfektum + i', hint: 'har hatt … i + duration.' },
      { id: 'p10-s2', no: 'Bergen er større enn Trondheim', en: 'Bergen is bigger than Trondheim', level: 'A2', focus: 'komparativ', hint: 'større enn.' },
      { id: 'p10-s3', no: 'Han kjører datteren sin til trening', en: 'He drives his daughter to training', level: 'A2', focus: 'sin', hint: 'datteren sin.' },
      { id: 'p10-s4', no: 'Jeg synes at maten er god', en: 'I think the food is good', level: 'A2', focus: 'synes at', hint: 'synes + at …' },
      { id: 'p10-s5', no: 'Dette er den beste dagen i år', en: 'This is the best day this year', level: 'A2', focus: 'superlativ', hint: 'den beste + noun.' },
      { id: 'p10-s6', no: 'Hun løper fortere enn broren sin', en: 'She runs faster than her brother', level: 'A2', focus: 'komparativ + sin', hint: 'fortere enn …' },
      { id: 'p10-s7', no: 'Timen er om tre dager', en: 'The appointment is in three days', level: 'A2', focus: 'tidsuttrykk', hint: 'om + time.' },
    ],
    listening: [
      [
        { q: 'Hvordan har været vært de siste dagene?', options: ['Bare to varmegrader og mye regn', 'Varmt og sol', 'Snø', 'Vind og storm'], answer: 0 },
        { q: 'Hvor legger Ben Alex?', options: ['Ved siden av Cecilie', 'I sofaen', 'I senga til Dina', 'På madrassen'], answer: 0 },
      ],
      [
        { q: 'Hva tar John for helsa om høsten og vinteren?', options: ['Tran og C-vitaminer', 'Smertestillende', 'Te', 'Ingenting'], answer: 0 },
        { q: 'Hva vil Alex gjøre når han våkner?', options: ['Se på tegnefilm', 'Gå i barnehagen', 'Spise frokost', 'Sove mer'], answer: 0 },
      ],
      [
        { q: 'Når kommer Cecilie på jobb?', options: ['Halv ni', 'Klokka ti', 'Klokka åtte', 'Klokka sju'], answer: 0 },
        { q: 'Hva tok Sissel fra medisinskapet?', options: ['Noen tabletter', 'Et plaster', 'Tran', 'Ingenting'], answer: 0 },
      ],
      [
        { q: 'Hvor lenge har Dina spilt håndball?', options: ['I seks år', 'I ett år', 'I tre år', 'I ti år'], answer: 0 },
        { q: 'Hvilken arm er Dina flinkest med?', options: ['Den høyre', 'Den venstre', 'Begge', 'Ingen av dem'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p10-o1', type: 'sammenlign', prompt: 'Sammenlign to byer eller steder du kjenner. Bruk komparativ og superlativ.', hints: ['større enn', 'den fineste', 'ikke så … som'] },
      { id: 'p10-o2', type: 'mening', prompt: 'Hva synes du er det viktigste for god helse? Bruk «synes» og «tror».', hints: ['Jeg synes at …', 'Jeg tror at …'] },
      { id: 'p10-o3', type: 'svar', prompt: 'Du ringer legekontoret. Forklar hva som feiler deg og hvor lenge du har vært syk.', hints: ['Jeg har hatt … i …', 'Jeg har vondt i …'] },
    ],
  },

  '11': {
    quiz: [
      { id: 'p11-q1', question: 'Det snødde. Derfor ___ hjemme.', options: ['ble vi', 'vi ble', 'vi ikke ble', 'ble'], answer: 0, explanation: 'derfor first → inversion.', level: 'A2', topic: 'fordi/derfor' },
      { id: 'p11-q2', question: 'Vi ble hjemme fordi det ___.', options: ['snødde', 'snødde ikke det', 'det snødde', 'snødd'], answer: 0, explanation: 'fordi + subject + verb: «fordi det snødde».', level: 'A2', topic: 'fordi/derfor' },
      { id: 'p11-q3', question: '– Har du ikke bil? – ___, jeg har bil.', options: ['Jo', 'Ja', 'Nei', 'Joda nei'], answer: 0, explanation: 'Yes to a negative question = jo.', level: 'A2', topic: 'ja/jo' },
      { id: 'p11-q4', question: '– Bor du i Oslo? – Ja, det ___ jeg.', options: ['gjør', 'bor', 'er', 'har'], answer: 0, explanation: 'Ordinary verbs → gjør in short answers.', level: 'A2', topic: 'korte svar' },
      { id: 'p11-q5', question: '– Er du gift? – Nei, det ___.', options: ['er jeg ikke', 'gjør jeg ikke', 'jeg er ikke', 'er ikke jeg'], answer: 0, explanation: '«være» repeats: det er jeg ikke.', level: 'A2', topic: 'korte svar' },
      { id: 'p11-q6', question: 'Jeg var trøtt, ___ jeg la meg tidlig.', options: ['så', 'derfor', 'fordi', 'enn'], answer: 0, explanation: 'så joins main clauses without inversion.', level: 'A2', topic: 'så' },
      { id: 'p11-q7', question: '– Har du vært i Bergen? – Ja, det ___ jeg.', options: ['har', 'gjør', 'er', 'var'], answer: 0, explanation: 'Perfect «har» repeats.', level: 'A2', topic: 'korte svar' },
      { id: 'p11-q8', question: 'Han kom ikke ___ han var syk.', options: ['fordi', 'derfor', 'så', 'men'], answer: 0, explanation: 'Reason in a subordinate clause → fordi.', level: 'A2', topic: 'fordi/derfor' },
    ],
    sentences: [
      { id: 'p11-s1', no: 'Det regnet derfor tok vi bussen', en: 'It was raining so we took the bus', level: 'A2', focus: 'derfor + inversjon', hint: 'derfor + verb + subject.' },
      { id: 'p11-s2', no: 'Vi tok bussen fordi det regnet', en: 'We took the bus because it was raining', level: 'A2', focus: 'fordi', hint: 'fordi + subject + verb.' },
      { id: 'p11-s3', no: 'Ja det har jeg', en: 'Yes I have', level: 'A2', focus: 'korte svar', hint: 'Ja + det + har + jeg.' },
      { id: 'p11-s4', no: 'Jeg var sulten så jeg spiste', en: 'I was hungry so I ate', level: 'A2', focus: 'så', hint: 'No inversion after så.' },
      { id: 'p11-s5', no: 'Hun kom ikke fordi hun ikke hadde tid', en: 'She didn’t come because she didn’t have time', level: 'A2', focus: 'fordi + ikke', hint: 'fordi + hun + ikke + hadde.' },
      { id: 'p11-s6', no: 'Nei det kan jeg ikke', en: 'No I can’t', level: 'A2', focus: 'korte svar', hint: 'Modal repeats.' },
      { id: 'p11-s7', no: 'Vi skal på konsert i kveld', en: 'We are going to a concert tonight', level: 'A2', focus: 'modal uten hovedverb', hint: 'skal + på konsert.' },
    ],
    listening: [
      [
        { q: 'Hva har skomakeren vunnet?', options: ['Ei pen, lita dokke', 'Penger', 'En ring', 'Et hus'], answer: 0 },
        { q: 'Hva gjør barna etter forestillingen?', options: ['Klapper høyt og lenge', 'Går hjem', 'Synger', 'Spiser is'], answer: 0 },
      ],
      [
        { q: 'Hvor lenge går Ben og Hans på stien?', options: ['Tre kvarter', 'To timer', 'Ti minutter', 'En hel dag'], answer: 0 },
        { q: 'Hva har hytta?', options: ['Strøm og vann, men ikke toalett', 'Toalett, men ikke strøm', 'Ingenting', 'Alt som et vanlig hus'], answer: 0 },
      ],
      [
        { q: 'Hvilken opera vil Nina se?', options: ['Figaros bryllup', 'Peer Gynt', 'Carmen', 'Tryllefløyten'], answer: 0 },
        { q: 'Hva gjør Cecilie med musikk?', options: ['Hun spiller gitar og synger i kor', 'Hun spiller piano', 'Hun hører bare på radio', 'Hun liker ikke musikk'], answer: 0 },
      ],
      [
        { q: 'Hvorfor drar jentene hjem fra Gardermoen?', options: ['Det går rykter om at han allerede er i Oslo', 'Flyet var forsinket', 'De ble sultne', 'Pappa hentet dem'], answer: 0 },
        { q: 'Hvem kjører jentene til Oslo?', options: ['Pappa', 'Mamma', 'Evas mor', 'De tar toget'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p11-o1', type: 'mening', prompt: 'Vil du heller bo i byen eller på landet? Begrunn med både «fordi» og «derfor».', hints: ['fordi …', 'Derfor …'] },
      { id: 'p11-o2', type: 'fortell', prompt: 'Fortell om en konsert, en forestilling eller en tur du har vært på. Hva skjedde?', hints: ['Først …', 'Til slutt …'] },
      { id: 'p11-o3', type: 'svar', prompt: 'Svar med korte svar og si én setning mer: Har du barn? Liker du snø? Kan du kjøre bil? Er du fra Norge?', hints: ['Ja, det har jeg', 'Nei, det kan jeg ikke'] },
    ],
  },

  '12': {
    quiz: [
      { id: 'p12-q1', question: 'Present tense: Vi ___ ved kinoen. (møtes)', options: ['møtes', 'møter', 'møtser', 'møtes oss'], answer: 0, explanation: 's-verbs: no -r.', level: 'A2', topic: 's-verb' },
      { id: 'p12-q2', question: 'I går ___ jeg at filmen var kjedelig. (synes, past)', options: ['syntes', 'synes', 'synte', 'synset'], answer: 0, explanation: 'synes – syntes – har syntes.', level: 'A2', topic: 's-verb' },
      { id: 'p12-q3', question: 'Choose the correct word order:', options: ['I jula reiser vi til Bergen.', 'I jula vi reiser til Bergen.', 'Vi i jula reiser til Bergen.', 'Reiser vi til Bergen i jula i.'], answer: 0, explanation: 'Verb in second place.', level: 'A2', topic: 'ordstilling' },
      { id: 'p12-q4', question: 'Where does the comma go?', options: ['Hvis det snør, går vi på ski.', 'Hvis det snør går, vi på ski.', 'Hvis, det snør går vi på ski.', 'No comma.'], answer: 0, explanation: 'Comma after an opening subordinate clause.', level: 'A2', topic: 'komma' },
      { id: 'p12-q5', question: 'Han sier ___ han kommer.', options: ['at', ', at', 'som', 'så'], answer: 0, explanation: 'No comma before «at».', level: 'A2', topic: 'komma' },
      { id: 'p12-q6', question: 'Jeg vet at hun ___ liker lutefisk.', options: ['aldri', 'liker aldri', 'aldri ikke', 'ikke aldri'], answer: 0, explanation: 'Sentence adverb before the verb in a subordinate clause.', level: 'A2', topic: 'ordstilling' },
      { id: 'p12-q7', question: 'Hun ___ godt i den nye jobben. (trives)', options: ['trives', 'triver', 'trives seg', 'trivs'], answer: 0, explanation: 'trives – no -r.', level: 'A2', topic: 's-verb' },
      { id: 'p12-q8', question: 'Reply to «Takk for maten!»:', options: ['Vel bekomme!', 'Takk selv!', 'Skål!', 'God jul!'], answer: 0, explanation: 'The standard reply is «Vel bekomme».', level: 'A2', topic: 'uttrykk' },
    ],
    sentences: [
      { id: 'p12-s1', no: 'I jula besøker vi besteforeldrene', en: 'At Christmas we visit the grandparents', level: 'A2', focus: 'inversjon', hint: 'I jula → besøker → vi.' },
      { id: 'p12-s2', no: 'Når det snør går barna ut', en: 'When it snows the children go out', level: 'A2', focus: 'leddsetning først', hint: 'Når-clause → går → barna.' },
      { id: 'p12-s3', no: 'Vi møtes på torget klokka tre', en: 'We are meeting in the square at three', level: 'A2', focus: 's-verb', hint: 'møtes.' },
      { id: 'p12-s4', no: 'Jeg tror at hun alltid kommer for sent', en: 'I think she always comes late', level: 'A2', focus: 'adverb i leddsetning', hint: 'at + hun + alltid + verb.' },
      { id: 'p12-s5', no: 'De trives godt i Norge', en: 'They are happy living in Norway', level: 'A2', focus: 's-verb', hint: 'trives.' },
      { id: 'p12-s6', no: 'Etter middagen åpnet vi gavene', en: 'After dinner we opened the presents', level: 'A2', focus: 'inversjon', hint: 'Etter middagen → åpnet → vi.' },
      { id: 'p12-s7', no: 'Takk for maten det var veldig godt', en: 'Thanks for the meal it was very good', level: 'A2', focus: 'uttrykk', hint: 'Takk for maten …' },
    ],
    listening: [
      [
        { q: 'Hvor mye er klokka når teksten begynner?', options: ['Halv ti om morgenen', 'Sju om morgenen', 'Tolv', 'Fire om ettermiddagen'], answer: 0 },
        { q: 'Hva henter Alex til snømannen?', options: ['Ei lue og en gulrot', 'Et skjerf og en pinne', 'Votter', 'Ei bøtte'], answer: 0 },
      ],
      [
        { q: 'Hvordan ser svigerforeldrene ut når de kommer?', options: ['Røde i kinnene, med snø i håret', 'Trøtte og våte', 'Sinte', 'Pyntet i bunad'], answer: 0 },
        { q: 'Hva gjør Alex og Dina når gjestene kommer?', options: ['De er oppe og skifter klær', 'De leker ute', 'De sover', 'De åpner gaver'], answer: 0 },
      ],
      [
        { q: 'Hva syntes Ben første gang han så flagg på juletreet?', options: ['At det var rart', 'At det var fint', 'Ingenting', 'At det var norsk tradisjon han kjente'], answer: 0 },
        { q: 'Hva serverer Cecilie til dessert?', options: ['Karamellpudding', 'Riskrem', 'Is', 'Eplekake'], answer: 0 },
      ],
      [
        { q: 'Hvorfor tror ikke Dina det er lurt at Alex hjelper?', options: ['Han kan ikke lese ordentlig ennå', 'Han er for liten til å bære', 'Han river i stykker pakkene', 'Han er trøtt'], answer: 0 },
        { q: 'Hva gjør Alex med en gang etter at han har åpnet den store pakken?', options: ['Legger seg på gulvet og begynner å bygge', 'Åpner neste pakke', 'Gir mamma en klem', 'Leser kortet'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p12-o1', type: 'fortell', prompt: 'Fortell om en høytid eller fest du har feiret. Bruk riktig ordstilling når du begynner med tid eller sted.', hints: ['I fjor …', 'Om kvelden …', 'Når vi …'] },
      { id: 'p12-o2', type: 'mening', prompt: 'Trives du i Norge? Fortell hva du trives med og hva som er vanskelig.', hints: ['Jeg trives med …', 'Det som er vanskelig, er …'] },
      { id: 'p12-o3', type: 'sammenlign', prompt: 'Sammenlign hvordan man feirer en stor høytid i Norge og i landet du kommer fra.', hints: ['I Norge …, mens …', 'mer / mindre … enn'] },
    ],
  },
}
