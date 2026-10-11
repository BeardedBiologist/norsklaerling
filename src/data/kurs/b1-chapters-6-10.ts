import type { KursChapter } from '../../types'

/** B1-kurs chapters 6–10 — see b1-chapters-1-5.ts for the approach. */
export const b1Chapters6to10: KursChapter[] = [
  {
    id: 'b1-6',
    course: 'b1',
    n: 6,
    title: 'Søke jobb',
    titleEn: 'Applying for a job',
    level: 'B1',
    theme: 'Reading a job ad, writing an application and getting through a job interview.',
    canDo: [
      { no: 'Jeg kan presentere meg selv på et jobbintervju.', en: 'I can present myself in a job interview.' },
      { no: 'Jeg kan bruke passiv og forstå den i offisielle tekster.', en: 'I can use the passive and understand it in official texts.' },
      { no: 'Jeg kan veie fordeler og ulemper.', en: 'I can weigh pros and cons.' },
    ],
    dialogues: ['Ling søker på jobb', 'På jobbintervju', 'Eksempelessay'],
    phrases: [
      { no: 'Jeg viser til stillingsannonsen på finn.no.', en: 'I refer to the job advert on finn.no.' },
      { no: 'Jeg har fem års erfaring fra …', en: 'I have five years’ experience in …' },
      { no: 'Mine sterke sider er at jeg er strukturert og løsningsorientert.', en: 'My strengths are that I am organised and solution-oriented.' },
      { no: 'En svakhet er kanskje at jeg …', en: 'One weakness is perhaps that I …' },
      { no: 'Jeg ser fram til å høre fra dere.', en: 'I look forward to hearing from you.' },
      { no: 'Har dere noen spørsmål til meg?', en: 'Do you have any questions for me?' },
    ],
    grammar: [
      {
        heading: 'være vs. bli',
        body: 'være = to be (a state): Hun er sjef.\nbli = to become / to stay / will be (a change or a future state): Hun ble sjef i fjor. Det blir regn i morgen. Vi blir her til fredag.\n\nbli – ble – har blitt. In the future, «bli» is far more natural than «være»: «Det blir bra!»',
        examples: [
          { no: 'Han ble arbeidsløs da fabrikken stengte.', en: 'He became unemployed when the factory closed.' },
          { no: 'Jeg blir hjemme i dag.', en: 'I’m staying at home today.' },
        ],
      },
      {
        heading: 'ha vs. få',
        body: 'ha = to have (a state): Jeg har jobb.\nfå = to get / receive (a change): Jeg fikk jobb i går.\n\nfå has other key meanings:\n• permission: Får jeg låne bilen? (May I…)\n• få + participle = get something done: Jeg fikk reparert bilen.\n• få til = manage: Jeg fikk det ikke til.',
        examples: [
          { no: 'Hun fikk tilbud om fast stilling.', en: 'She was offered a permanent position.' },
          { no: 'Vi fikk endelig solgt huset.', en: 'We finally got the house sold.' },
        ],
      },
      {
        heading: 'The passive: s-passive',
        body: 'The passive focuses on what happens, not who does it. It is everywhere in job ads, letters from NAV, UDI and the kommune.\n\ns-passive = infinitive + s: «Søknaden må sendes innen 1. mai.» (must be sent)\n\nUse it:\n• after modal verbs: kan sendes, må fylles ut, skal betales, bør leses\n• in the present for rules and routines: «Butikken stenges klokka 20.» «Søknader behandles fortløpende.»',
        examples: [
          { no: 'Skjemaet må fylles ut og leveres innen fredag.', en: 'The form must be filled in and handed in by Friday.' },
          { no: 'Stillingen lyses ut på nytt.', en: 'The position is being re-advertised.' },
        ],
      },
      {
        heading: 'The passive: bli-passive',
        body: 'bli + past participle — used for single events and in the past/perfect:\n\nHun ble ansatt i mars. (was hired)\nSøknaden er blitt sendt. / Søknaden har blitt sendt. (has been sent)\n\nThe person who does it comes after «av»: «Han ble intervjuet av to ledere.»',
        examples: [
          { no: 'Jeg ble kalt inn til intervju.', en: 'I was called in for an interview.' },
          { no: 'Huset ble bygd i 1950.', en: 'The house was built in 1950.' },
        ],
      },
      {
        heading: 'Talking about the future',
        body: 'skal — plans and intentions: Jeg skal søke på jobben.\nkommer til å — prediction: Det kommer til å bli vanskelig.\nvil — strong will or prediction in formal text: Stillingen vil passe for deg.\nblir — future states: Det blir travelt.\npresens + time: Jeg begynner på mandag.',
        examples: [{ no: 'Jeg tror at jeg kommer til å trives i den nye jobben.', en: 'I think I will enjoy the new job.' }],
      },
      {
        heading: 'mennesker, personer, folk',
        body: 'et menneske — a human being (general, emotional): Hun er et godt menneske.\nen person — an individual, often counted: Det var fem personer på intervjuet.\nfolk — people in general (no article, plural meaning): Folk flest liker sommeren. Det var mye folk.',
        examples: [{ no: 'Stillingen passer for en person som liker å jobbe med folk.', en: 'The position suits a person who likes working with people.' }],
      },
    ],
    pronunciation: {
      heading: 'Sounding confident in an interview',
      body: 'Slow down. Finish your sentences with a falling tone, and pause briefly at commas instead of filling with «eh».\n\nUseful fillers that sound natural: «Ja, altså …», «La meg tenke …», «Det er et godt spørsmål.» These buy you time without sounding stuck.',
    },
    speaking: [
      'Presenter deg selv som på et jobbintervju: utdanning, erfaring og sterke sider.',
      'Hva er dine sterke og svake sider? Gi eksempler.',
      'Hvorfor er det vanskelig for mange innvandrere å få jobb i Norge? Hva kan gjøres?',
      'Fast jobb eller frilans — fordeler og ulemper?',
      'Fortell om en jobb du har hatt. Hva lærte du der?',
    ],
    quiz: [
      { id: 'b1k6-q1', question: 'Søknaden må ___ innen fredag.', options: ['sendes', 'sendt', 'blir sendt', 'sende'], answer: 0, explanation: 'After a modal verb → s-passive (infinitive + s).', level: 'B1', topic: 'passiv' },
      { id: 'b1k6-q2', question: 'Hun ___ ansatt i mars.', options: ['ble', 'var', 'ha', 'fikk'], answer: 0, explanation: 'A single past event → bli-passive: ble ansatt.', level: 'B1', topic: 'passiv' },
      { id: 'b1k6-q3', question: 'Jeg ___ jobb i går!', options: ['fikk', 'hadde', 'har', 'ble'], answer: 0, explanation: 'A change (got) → få: fikk.', level: 'B1', topic: 'ha/få' },
      { id: 'b1k6-q4', question: 'Det ___ regn i morgen.', options: ['blir', 'er', 'var', 'har'], answer: 0, explanation: 'Future state → bli.', level: 'B1', topic: 'være/bli' },
      { id: 'b1k6-q5', question: 'Han ble intervjuet ___ to ledere.', options: ['av', 'med', 'fra', 'for'], answer: 0, explanation: 'The agent in a passive sentence comes after «av».', level: 'B1', topic: 'passiv' },
      { id: 'b1k6-q6', question: 'Det var mye ___ på møtet.', options: ['folk', 'personer', 'menneske', 'en folk'], answer: 0, explanation: '«mye folk» = a lot of people.', level: 'B1', topic: 'ordvalg' },
      { id: 'b1k6-q7', question: 'Vi fikk endelig ___ huset.', options: ['solgt', 'selge', 'solgte', 'selges'], answer: 0, explanation: 'få + past participle = get something done.', level: 'B1', topic: 'ha/få' },
    ],
    sentences: [
      { id: 'b1k6-s1', no: 'Søknaden må sendes innen første mai', en: 'The application must be sent by the first of May', level: 'B1', focus: 's-passiv', hint: 'må + sendes.' },
      { id: 'b1k6-s2', no: 'Jeg ble kalt inn til intervju i forrige uke', en: 'I was called in for an interview last week', level: 'B1', focus: 'bli-passiv', hint: 'ble + participle.' },
      { id: 'b1k6-s3', no: 'Jeg har fem års erfaring fra butikk', en: 'I have five years’ experience from retail', level: 'B1', focus: 'jobbintervju', hint: 'Jeg har … erfaring fra …' },
      { id: 'b1k6-s4', no: 'Jeg tror at jeg kommer til å trives her', en: 'I think I will enjoy it here', level: 'B1', focus: 'framtid', hint: 'kommer til å + infinitive.' },
      { id: 'b1k6-s5', no: 'Hun fikk tilbud om fast stilling', en: 'She was offered a permanent position', level: 'B1', focus: 'få', hint: 'fikk tilbud om …' },
    ],
  },

  {
    id: 'b1-7',
    course: 'b1',
    n: 7,
    title: 'Utdanning og arbeidsliv',
    titleEn: 'Higher education and working life',
    level: 'B1',
    theme: 'A conference, an interview with a professor, and universities and university colleges in Norway.',
    canDo: [
      { no: 'Jeg kan bruke de vanligste preposisjonene riktig.', en: 'I can use the most common prepositions correctly.' },
      { no: 'Jeg kan forklare hvorfor med «for å».', en: 'I can explain purpose with «for å».' },
      { no: 'Jeg kan skille mellom lenger og lengre.', en: 'I can tell lenger and lengre apart.' },
    ],
    dialogues: ['En kjemikonferanse på Gjøvik', 'Intervju med prof. Jensen', 'Universitet og høyskole'],
    phrases: [
      { no: 'Jeg tok en bachelorgrad i økonomi.', en: 'I took a bachelor’s degree in economics.' },
      { no: 'Utdanningen min er godkjent i Norge.', en: 'My education is recognised in Norway.' },
      { no: 'Jeg vil gjerne ta mer utdanning ved siden av jobben.', en: 'I’d like to take more education alongside my job.' },
      { no: 'Til forskjell fra … / I motsetning til …', en: 'Unlike … / In contrast to …' },
      { no: 'Det samme gjelder for …', en: 'The same applies to …' },
    ],
    grammar: [
      {
        heading: 'Place prepositions — the system',
        body: 'i — inside, enclosed, cities and countries: i Oslo, i bilen, i stua, i barnehagen\npå — surfaces, islands, many workplaces and institutions: på bordet, på Hitra, på jobb, på sykehuset, på universitetet, på kjøkkenet, på badet, på kontoret\nved — next to, by; also «employed at»: ved sjøen, Hun jobber ved NTNU.\nhos — at a person’s place: hos legen, hos frisøren\nunder, over, mellom, bak, foran, ved siden av, rundt, langs\n\nRooms: i stua, i gangen, på soverommet, på kjøkkenet, på badet (learn as pairs).\nTowns: «i» for most towns; «på» for some (på Lillehammer, på Gjøvik, på Hamar, på Røros).',
        examples: [
          { no: 'Han studerer på universitetet og jobber på et lager.', en: 'He studies at the university and works in a warehouse.' },
          { no: 'Hun er ansatt ved Sykehuset Innlandet.', en: 'She is employed at Innlandet Hospital.' },
        ],
      },
      {
        heading: 'Genitive with «til»',
        body: 'Besides -s (Pers bil), spoken Norwegian often uses «til» or «sin/si/sitt/sine» for possession:\n\nbilen til Per = Pers bil = Per sin bil\nmora til Anna\n\n«til» is especially natural with long names and phrases: «kontoret til den nye sjefen».',
        examples: [{ no: 'Har du sett jakka til læreren?', en: 'Have you seen the teacher’s jacket?' }],
      },
      {
        heading: 'Purpose: «for å» + infinitive',
        body: '«for å» = in order to:\nJeg tar kurs for å få bedre jobb.\n\n«fordi» gives a reason with a full clause; «for å» gives a purpose with an infinitive:\nJeg lærer norsk fordi jeg bor her. / Jeg lærer norsk for å bli statsborger.',
        examples: [{ no: 'Hun flyttet til Trondheim for å studere.', en: 'She moved to Trondheim to study.' }],
      },
      {
        heading: 'Wanting more: «til»',
        body: '«til» after a number or «en/ei/et» means «more / another»:\n\nKan jeg få en kopp kaffe til? (another cup)\nVi trenger to stoler til. (two more chairs)\nVil du ha litt mer? (uncountable → mer)',
        examples: [{ no: 'Jeg må ta ett år til før jeg er ferdig.', en: 'I have to take one more year before I’m finished.' }],
      },
      {
        heading: 'lenger vs. lengre',
        body: 'lengre = longer (physical length or duration — comparative of lang): Denne veien er lengre.\nlenger = further / any longer (distance or time, adverb): Han bor ikke her lenger. Vi kan ikke gå lenger.\n\nRule of thumb: if you can say «more long», use lengre.',
        examples: [
          { no: 'Studiet tar lengre tid enn jeg trodde.', en: 'The studies take longer than I thought.' },
          { no: 'Jeg jobber ikke der lenger.', en: 'I don’t work there anymore.' },
        ],
      },
      {
        heading: 'Prepositions that look alike',
        body: 'om — snakke om, drømme om, om sommeren\npå — tenke på, vente på, stole på\nfor — takk for, redd for, ansvarlig for\ntil — glede seg til, invitere til\nav — lei av, stolt av\ni — interessert i, glad i\n\nMany verbs and adjectives choose a preposition you can’t predict — learn them as phrases: interessert i, redd for, glad i, stolt av, lei av, fornøyd med, opptatt av, flink til.',
        examples: [{ no: 'Jeg er veldig fornøyd med kurset og glad i lærerne.', en: 'I’m very satisfied with the course and fond of the teachers.' }],
      },
    ],
    pronunciation: {
      heading: 'Academic and loan words',
      body: 'Many words from Latin and French are stressed at the END: universitET, fakultET, informasJON, institusJON, konferANSE, profesSOR (but PROfessor is also heard).\n\n-sjon is pronounced «-shoon»: stasjon, utdanningsinstitusjon. Get these right and you sound far more fluent when talking about education and work.',
    },
    speaking: [
      'Fortell om utdanningen din. Er den godkjent i Norge?',
      'Bør det være gratis å studere? Hvorfor / hvorfor ikke?',
      'Hva er forskjellen på et universitet og en høyskole i Norge?',
      'Hva er viktigst når man velger utdanning: interesse, lønn eller jobbsikkerhet?',
      'Hva vil du gjøre for å få en bedre jobb i framtida?',
    ],
    quiz: [
      { id: 'b1k7-q1', question: 'Hun jobber ___ sykehuset.', options: ['på', 'i', 'hos', 'til'], answer: 0, explanation: 'Many institutions take «på»: på sykehuset, på skolen, på universitetet.', level: 'B1', topic: 'preposisjoner' },
      { id: 'b1k7-q2', question: 'Jeg lærer norsk ___ bli statsborger.', options: ['for å', 'fordi', 'til å', 'for'], answer: 0, explanation: 'Purpose + infinitive → for å.', level: 'B1', topic: 'for å' },
      { id: 'b1k7-q3', question: 'Han bor ikke her ___.', options: ['lenger', 'lengre', 'lang', 'lengst'], answer: 0, explanation: '«not any longer» → lenger.', level: 'B1', topic: 'lenger/lengre' },
      { id: 'b1k7-q4', question: 'Denne veien er ___ enn den andre.', options: ['lengre', 'lenger', 'langere', 'mer lang'], answer: 0, explanation: 'Comparative of «lang» = lengre.', level: 'B1', topic: 'lenger/lengre' },
      { id: 'b1k7-q5', question: 'Kan jeg få en kopp kaffe ___?', options: ['til', 'mer', 'igjen', 'også'], answer: 0, explanation: '«en … til» = another one.', level: 'B1', topic: 'til' },
      { id: 'b1k7-q6', question: 'Jeg er interessert ___ historie.', options: ['i', 'for', 'på', 'om'], answer: 0, explanation: 'interessert i (not «for»).', level: 'B1', topic: 'faste uttrykk' },
      { id: 'b1k7-q7', question: 'Jeg er stolt ___ barna mine.', options: ['av', 'over', 'på', 'for'], answer: 0, explanation: 'stolt av.', level: 'B1', topic: 'faste uttrykk' },
    ],
    sentences: [
      { id: 'b1k7-s1', no: 'Hun flyttet til Trondheim for å studere medisin', en: 'She moved to Trondheim to study medicine', level: 'B1', focus: 'for å', hint: '… for å + infinitive.' },
      { id: 'b1k7-s2', no: 'Studiet tar lengre tid enn jeg trodde', en: 'The studies take longer than I thought', level: 'B1', focus: 'lengre', hint: 'lengre tid enn …' },
      { id: 'b1k7-s3', no: 'Kontoret til den nye sjefen er i tredje etasje', en: 'The new boss’s office is on the third floor', level: 'B1', focus: 'genitiv med til', hint: 'kontoret til …' },
      { id: 'b1k7-s4', no: 'Jeg er veldig fornøyd med utdanningen min', en: 'I am very satisfied with my education', level: 'B1', focus: 'fornøyd med', hint: 'fornøyd med + noun.' },
      { id: 'b1k7-s5', no: 'Han jobber ved universitetet og bor på Gjøvik', en: 'He works at the university and lives in Gjøvik', level: 'B1', focus: 'ved / på', hint: 'jobber ved … bor på …' },
    ],
  },

  {
    id: 'b1-8',
    course: 'b1',
    n: 8,
    title: 'Historie og forskning',
    titleEn: 'History and research',
    level: 'B1',
    theme: 'The history of a university, the Nobel Prize and Norwegian Nobel laureates.',
    canDo: [
      { no: 'Jeg kan uttrykke betingelser med hvis, om og dersom.', en: 'I can express conditions with if.' },
      { no: 'Jeg kan bruke indirekte spørsmål og indirekte tale.', en: 'I can use indirect questions and reported speech.' },
      { no: 'Jeg kan uttrykke sterke følelser.', en: 'I can express strong feelings.' },
    ],
    dialogues: ['NTNUs historie', 'Nobelprisen', 'Norske nobelprisvinnere'],
    phrases: [
      { no: 'Jeg ble så glad / lettet / skuffet da …', en: 'I was so happy / relieved / disappointed when …' },
      { no: 'Det var helt fantastisk!', en: 'It was absolutely fantastic!' },
      { no: 'Det er forferdelig at …', en: 'It’s terrible that …' },
      { no: 'Jeg er så lei av …', en: 'I’m so fed up with …' },
      { no: 'Han spurte om jeg kunne hjelpe ham.', en: 'He asked if I could help him.' },
    ],
    grammar: [
      {
        heading: 'Conditions: hvis, om, dersom',
        body: 'All three mean «if»:\nhvis — most common in speech and writing\nom — also «if», especially in speech (and also «whether»)\ndersom — formal, typical in rules and letters\n\nHvis du kommer for sent, må du vente.\nDersom søknaden ikke er komplett, blir den avvist.\n\nUnreal conditions use the past: «Hvis jeg hadde mer tid, ville jeg lest mer.» (If I had more time, I would read more.)',
        examples: [
          { no: 'Hvis jeg vinner i Lotto, skal jeg kjøpe hytte.', en: 'If I win the lottery, I’ll buy a cabin.' },
          { no: 'Hvis jeg var deg, ville jeg ringt legen.', en: 'If I were you, I would call the doctor.' },
        ],
      },
      {
        heading: 'Time clauses: når, da, etter at, før, mens',
        body: 'når — repeated / present / future · da — once in the past · mens — while · før — before · etter at — after (often with perfect / pluperfect):\n\nEtter at jeg har spist, tar jeg oppvasken.\nEtter at han hadde fått jobben, flyttet han.\n\n«etter» alone is a preposition (etter middag); «etter at» introduces a clause.',
        examples: [{ no: 'Etter at vi hadde flyttet, begynte barna på ny skole.', en: 'After we had moved, the children started at a new school.' }],
      },
      {
        heading: 'Indirect questions',
        body: 'A question inside a sentence becomes a subordinate clause — NO inversion, and «ikke» before the verb:\n\nHvor bor han? → Vet du hvor han bor?\nKommer hun? → Jeg lurer på om hun kommer.\nHvorfor kom han ikke? → Jeg skjønner ikke hvorfor han ikke kom.\n\nWhen the question word is the subject, add «som»: Hvem kommer? → Jeg vet ikke hvem som kommer.',
        examples: [
          { no: 'Kan du si meg hvor stasjonen er?', en: 'Can you tell me where the station is?' },
          { no: 'Jeg vet ikke hva som skjedde.', en: 'I don’t know what happened.', note: 'hva = subject → hva som' },
        ],
      },
      {
        heading: 'Reported speech',
        body: 'Report what someone said with «at» (statements), «om» (yes/no questions) or a question word. Shift the tense back if the reporting verb is in the past:\n\n«Jeg er syk.» → Hun sa at hun var syk.\n«Kommer du?» → Han spurte om jeg kom.\n«Hvor bor du?» → De spurte hvor jeg bodde.',
        examples: [{ no: 'Legen sa at jeg måtte hvile i en uke.', en: 'The doctor said that I had to rest for a week.' }],
      },
      {
        heading: '«at» or «som»?',
        body: 'som — refers back to a noun (relative): Boka som jeg leste, var god.\nat — introduces what is said / thought / known: Jeg leste at boka var god.\n\nTest: can you replace it with «which/who»? → som. With «that» after a verb of saying/thinking? → at.',
        examples: [{ no: 'Det er en oppdagelse som har endret medisinen.', en: 'It is a discovery that has changed medicine.' }],
      },
      {
        heading: 'The many jobs of «det»',
        body: 'pronoun for an et-word: Huset? Det er gammelt.\nformal subject: Det regner. Det er kaldt.\n«there is»: Det er mange som …\nreferring to a whole idea: Det visste jeg ikke.\nCleft sentence for emphasis: Det var Nansen som fikk fredsprisen. (It was Nansen who …)',
        examples: [{ no: 'Det var i 1922 at Nansen fikk Nobels fredspris.', en: 'It was in 1922 that Nansen received the Nobel Peace Prize.' }],
      },
    ],
    pronunciation: {
      heading: 'Emotion through tone',
      body: 'Norwegians show feelings more through melody than volume. To sound enthusiastic, widen the tone-2 rise: «Så HYGgelig!» «Det var FANtastisk!»\n\nTo sound sympathetic, slow down and drop the pitch: «Å nei, så leit.» This matters in the oral test, where you may have to react to the examiner’s story.',
    },
    speaking: [
      'Fortell om en dag da du ble veldig glad — eller veldig skuffet.',
      'Hvilken historisk person fra Norge eller hjemlandet ditt beundrer du? Hvorfor?',
      'Hva ville du gjort hvis du fikk en million kroner?',
      'Er forskning viktig for samfunnet? Gi eksempler.',
      'Gjenfortell en samtale du hadde i går med indirekte tale: «Han sa at …»',
    ],
    quiz: [
      { id: 'b1k8-q1', question: 'Vet du hvor ___?', options: ['han bor', 'bor han', 'han bodd', 'bor'], answer: 0, explanation: 'Indirect question → no inversion.', level: 'B1', topic: 'indirekte spørsmål' },
      { id: 'b1k8-q2', question: 'Jeg vet ikke hvem ___ kommer.', options: ['som', 'at', 'hvis', '—'], answer: 0, explanation: 'When the question word is the subject: hvem som.', level: 'B1', topic: 'indirekte spørsmål' },
      { id: 'b1k8-q3', question: '«Jeg er syk.» → Hun sa at hun ___ syk.', options: ['var', 'er', 'har vært', 'blir'], answer: 0, explanation: 'Past reporting verb → shift back: er → var.', level: 'B1', topic: 'indirekte tale' },
      { id: 'b1k8-q4', question: 'Hvis jeg ___ mer tid, ville jeg lest mer.', options: ['hadde', 'har', 'hatt', 'ha'], answer: 0, explanation: 'Unreal condition → past tense: hadde.', level: 'B1', topic: 'betingelse' },
      { id: 'b1k8-q5', question: 'Boka ___ jeg leste, var spennende.', options: ['som', 'at', 'hva', 'hvem'], answer: 0, explanation: 'Refers back to a noun → som.', level: 'B1', topic: 'at/som' },
      { id: 'b1k8-q6', question: 'Han spurte ___ jeg kunne hjelpe ham.', options: ['om', 'at', 'hvis ikke', 'som'], answer: 0, explanation: 'Reported yes/no question → om.', level: 'B1', topic: 'indirekte tale' },
      { id: 'b1k8-q7', question: '___ søknaden ikke er komplett, blir den avvist. (formal)', options: ['Dersom', 'Da', 'Mens', 'Siden'], answer: 0, explanation: '«dersom» = if, formal.', level: 'B1', topic: 'betingelse' },
    ],
    sentences: [
      { id: 'b1k8-s1', no: 'Kan du si meg hvor stasjonen er', en: 'Can you tell me where the station is', level: 'B1', focus: 'indirekte spørsmål', hint: 'hvor + subject + verb.' },
      { id: 'b1k8-s2', no: 'Legen sa at jeg måtte hvile i en uke', en: 'The doctor said I had to rest for a week', level: 'B1', focus: 'indirekte tale', hint: 'sa at + past tense.' },
      { id: 'b1k8-s3', no: 'Hvis jeg var deg ville jeg ringt legen', en: 'If I were you I would call the doctor', level: 'B1', focus: 'betingelse', hint: 'Hvis-clause → ville → jeg.' },
      { id: 'b1k8-s4', no: 'Jeg lurer på hvorfor han ikke kom', en: 'I wonder why he didn’t come', level: 'B1', focus: 'ikke i leddsetning', hint: 'hvorfor + subject + ikke + verb.' },
      { id: 'b1k8-s5', no: 'Etter at vi hadde flyttet begynte barna på ny skole', en: 'After we had moved the children started at a new school', level: 'B1', focus: 'etter at', hint: 'Etter at-clause → verb → subject.' },
    ],
  },

  {
    id: 'b1-9',
    course: 'b1',
    n: 9,
    title: 'Byens historie og 17. mai',
    titleEn: 'A city’s history and Constitution Day',
    level: 'B1',
    theme: 'Trondheim’s history, celebrating 17 May, dialects — and writing with correct commas.',
    canDo: [
      { no: 'Jeg kan fortelle om norsk historie med viktige årstall.', en: 'I can talk about Norwegian history with key dates.' },
      { no: 'Jeg kan beskrive hvordan nordmenn feirer 17. mai.', en: 'I can describe how Norwegians celebrate 17 May.' },
      { no: 'Jeg kan sette komma riktig.', en: 'I can use commas correctly.' },
    ],
    dialogues: ['Trondheims historie', '17. mai i Trondheim', 'Trøndersk'],
    phrases: [
      { no: 'Grunnloven ble underskrevet 17. mai 1814.', en: 'The Constitution was signed on 17 May 1814.' },
      { no: 'Norge ble selvstendig i 1905.', en: 'Norway became independent in 1905.' },
      { no: 'Barnetoget går gjennom sentrum.', en: 'The children’s parade goes through the centre.' },
      { no: 'Gratulerer med dagen! Hipp hipp hurra!', en: 'Happy Constitution Day! Hip hip hooray!' },
      { no: 'På 1800-tallet … / I middelalderen …', en: 'In the 1800s … / In the Middle Ages …' },
    ],
    grammar: [
      {
        heading: 'Comma rule 1: after a subordinate clause at the start',
        body: 'Put a comma where the opening subordinate clause ends — right before the main-clause verb:\n\nNår det er 17. mai, går vi i tog.\nFordi det regnet, ble vi hjemme.\nHvis du vil, kan du bli med.',
        examples: [{ no: 'Da Norge ble selvstendig i 1905, fikk landet sin egen konge.', en: 'When Norway became independent in 1905, the country got its own king.' }],
      },
      {
        heading: 'Comma rule 2: between main clauses with og/men/eller/for/så',
        body: 'Use a comma before men and for (because), and before og/eller/så when both sides have their own subject and verb:\n\nVi gikk i toget, og etterpå spiste vi is.\nDet var kaldt, men alle var glade.\n\nNo comma when there is only one subject: «Vi gikk i toget og spiste is.»',
        examples: [{ no: 'Byen ble grunnlagt i 997, og den var Norges første hovedstad.', en: 'The town was founded in 997, and it was Norway’s first capital.' }],
      },
      {
        heading: 'Comma rule 3: around extra information',
        body: 'A som-clause that only adds extra information (could be removed) gets commas on both sides:\nOlav Tryggvason, som grunnla byen, var konge i fem år.\n\nA som-clause that identifies WHICH one gets no comma at the front — but a comma at the end if the sentence continues:\nKongen som grunnla byen, het Olav.\n\nAlso: comma after an appositive: Trondheim, Norges tredje største by, …',
        examples: [{ no: 'Nidarosdomen, som ble bygd på 1000-tallet, er Nordens største middelalderkirke.', en: 'Nidaros Cathedral, which was built in the 11th century, is the largest medieval church in the Nordic countries.' }],
      },
      {
        heading: 'No comma before «at» or a subordinate clause that follows',
        body: 'Jeg vet at det er 17. mai i dag. (no comma)\nVi ble hjemme fordi det regnet. (no comma)\nHun spurte hvor toget gikk. (no comma)\n\nThis is where English speakers most often add commas that Norwegian doesn’t want.',
      },
      {
        heading: 'Years, centuries and dates',
        body: 'Years: 1814 = atten fjorten · 1905 = nitten null fem · 2024 = to tusen og tjuefire\nCenturies: på 1800-tallet (in the 1800s / 19th century) · på 900-tallet\nDates: 17. mai (syttende mai) · den 8. mai 1945\n\nKey dates for the citizenship test: 1814 Grunnloven · 1905 unionsoppløsningen · 1913 stemmerett for kvinner · 1940–45 okkupasjonen · 1969 olje funnet · 1972/1994 nei til EF/EU.',
        examples: [{ no: 'Kvinner fikk stemmerett i 1913.', en: 'Women got the vote in 1913.' }],
      },
    ],
    pronunciation: {
      heading: 'Dates and ordinal numbers',
      body: 'Ordinals: første, andre, tredje, fjerde, femte, sjette, sjuende, åttende, niende, tiende, ellevte, tolvte … syttende, tjuende, tjueførste.\n\nWritten with a full stop: 17. mai = «syttende mai». «Den åttende mai nitten førtifem» = 8. mai 1945.',
    },
    speaking: [
      'Hvordan feirer nordmenn 17. mai? Har du vært med?',
      'Hva skjedde i 1814 og i 1905?',
      'Fortell om nasjonaldagen i landet ditt, og sammenlign med 17. mai.',
      'Hvorfor tror du 17. mai er så viktig for nordmenn?',
      'Fortell om historien til byen eller stedet der du bor.',
    ],
    quiz: [
      { id: 'b1k9-q1', question: 'Where does the comma go?', options: ['Hvis du vil, kan du bli med.', 'Hvis du vil kan, du bli med.', 'Hvis, du vil kan du bli med.', 'No comma.'], answer: 0, explanation: 'Comma after an opening subordinate clause.', level: 'B1', topic: 'komma' },
      { id: 'b1k9-q2', question: 'Which is correct?', options: ['Jeg vet at det er sant.', 'Jeg vet, at det er sant.', 'Jeg vet at, det er sant.', 'Jeg, vet at det er sant.'], answer: 0, explanation: 'No comma before «at».', level: 'B1', topic: 'komma' },
      { id: 'b1k9-q3', question: 'Norway got its Constitution in …', options: ['1814', '1905', '1945', '1884'], answer: 0, explanation: 'Grunnloven ble vedtatt på Eidsvoll og underskrevet 17. mai 1814.', level: 'B1', topic: 'historie' },
      { id: 'b1k9-q4', question: '«In the 1800s» =', options: ['på 1800-tallet', 'i 1800-tallet', 'på 1800', 'i det 1800'], answer: 0, explanation: 'på + …-tallet.', level: 'B1', topic: 'tidsuttrykk' },
      { id: 'b1k9-q5', question: 'Which needs commas around the som-clause?', options: ['Nansen, som var polfarer, fikk fredsprisen.', 'Mannen som bor her, er lege.', 'Boka som jeg leser, er god.', 'Alle som vil, kan komme.'], answer: 0, explanation: 'Extra (removable) information → commas on both sides.', level: 'B1', topic: 'komma' },
      { id: 'b1k9-q6', question: 'Det var kaldt ___ alle var glade.', options: [', men', 'men,', ' men', ', men,'], answer: 0, explanation: 'Comma before «men» between two main clauses.', level: 'B1', topic: 'komma' },
      { id: 'b1k9-q7', question: 'Norway became fully independent from Sweden in …', options: ['1905', '1814', '1940', '1972'], answer: 0, explanation: 'Unionen med Sverige ble oppløst i 1905.', level: 'B1', topic: 'historie' },
    ],
    sentences: [
      { id: 'b1k9-s1', no: 'Da Norge ble selvstendig fikk landet sin egen konge', en: 'When Norway became independent the country got its own king', level: 'B1', focus: 'leddsetning først', hint: 'Da-clause → fikk → landet.' },
      { id: 'b1k9-s2', no: 'Grunnloven ble underskrevet på Eidsvoll i 1814', en: 'The Constitution was signed at Eidsvoll in 1814', level: 'B1', focus: 'bli-passiv + dato', hint: 'Grunnloven ble …' },
      { id: 'b1k9-s3', no: 'På nasjonaldagen går barna i tog gjennom sentrum', en: 'On National Day the children walk in a parade through the centre', level: 'B1', focus: 'inversjon', hint: 'På nasjonaldagen → går → barna.' },
      { id: 'b1k9-s4', no: 'Vi ble hjemme fordi det regnet hele dagen', en: 'We stayed home because it rained all day', level: 'B1', focus: 'fordi uten komma', hint: 'No comma before fordi.' },
      { id: 'b1k9-s5', no: 'Kvinner fikk stemmerett i Norge i 1913', en: 'Women got the vote in Norway in 1913', level: 'B1', focus: 'historie', hint: 'Kvinner fikk …' },
    ],
  },

  {
    id: 'b1-10',
    course: 'b1',
    n: 10,
    title: 'Livets gang',
    titleEn: 'The course of life',
    level: 'B1',
    theme: 'A funeral and a wedding, religion and life stances in Norway, and how we mark big days.',
    canDo: [
      { no: 'Jeg kan snakke om religion og livssyn i Norge.', en: 'I can talk about religion and life stances in Norway.' },
      { no: 'Jeg kan si riktige ting i glede og sorg.', en: 'I can say the right things on happy and sad occasions.' },
      { no: 'Jeg kan mange faste uttrykk med preposisjoner.', en: 'I know many fixed expressions with prepositions.' },
    ],
    dialogues: ['En sørgelig dag', 'En festdag', 'Religion i Norge'],
    phrases: [
      { no: 'Gratulerer så mye med bryllupet!', en: 'Congratulations on the wedding!' },
      { no: 'Jeg kondolerer. / Mine kondolanser.', en: 'My condolences.' },
      { no: 'Så leit å høre.', en: 'So sorry to hear that.' },
      { no: 'Tusen takk for invitasjonen, vi kommer gjerne.', en: 'Thanks so much for the invitation, we’d love to come.' },
      { no: 'Skål for brudeparet!', en: 'A toast to the bride and groom!' },
      { no: 'Hvile i fred.', en: 'Rest in peace.' },
    ],
    grammar: [
      {
        heading: 'Adjective + noun: special cases',
        body: '• Definite adjective, indefinite noun after «første, neste, siste, samme, hele, halve»: neste uke, samme dag, hele tida (but: den første dagen)\n• In titles and names: Det hvite hus, Svarte Hav\n• hele vs. all: hele dagen (the whole day) · all maten (all the food) · alle gjestene (all the guests)\n• egen: min egen bil, sitt eget hus, våre egne barn',
        examples: [
          { no: 'Vi var der hele dagen og så alle gjestene.', en: 'We were there all day and saw all the guests.' },
          { no: 'Bryllupet er neste lørdag.', en: 'The wedding is next Saturday.' },
        ],
      },
      {
        heading: 'Adverbs: with and without movement',
        body: 'Movement (where to?) / no movement (where?):\nhjem / hjemme · ut / ute · inn / inne · opp / oppe · ned / nede · bort / borte · fram / framme\n\nHan kom hjem. Han er hjemme.\nVi er framme! (we’ve arrived) Gå fram til alteret.',
        examples: [{ no: 'Gjestene gikk inn i kirka, men barna ble ute.', en: 'The guests went into the church, but the children stayed outside.' }],
      },
      {
        heading: 'Fixed expressions by preposition',
        body: 'på: tenke på, vente på, svare på, tro på, stole på, være sint på\ni: interessert i, forelsket i, glad i, delta i, enig i\ntil: glede seg til, invitere til, gratulere med (!), bidra til\nmed: gift med, fornøyd med, slutte med, hjelpe med\nfor: takke for, redd for, ansvarlig for\nav: lei av, stolt av, består av\nom: snakke om, drømme om, be om, handle om\netter: lengte etter, lete etter\nover: overrasket over, glad over, klage over\nfra: skilt fra, forskjellig fra',
        examples: [
          { no: 'Vi gratulerer dere med bryllupet og ønsker dere alt godt.', en: 'We congratulate you on the wedding and wish you all the best.' },
          { no: 'Hun er gift med en nordmann og glad i Norge.', en: 'She is married to a Norwegian and fond of Norway.' },
        ],
      },
      {
        heading: 'trøtt, sliten, lei',
        body: 'trøtt = sleepy: Jeg er trøtt, jeg må legge meg.\nsliten = worn out, exhausted: Etter jobben er jeg helt sliten.\nlei (av) = fed up (with): Jeg er lei av regnet.\nlei seg = sad, sorry: Hun er lei seg fordi bestefaren døde.',
        examples: [{ no: 'Etter bryllupet var alle slitne, men ingen var lei seg.', en: 'After the wedding everyone was worn out, but nobody was sad.' }],
      },
      {
        heading: 'Life events and forms of living together',
        body: 'å bli født · å bli døpt (christened) · å konfirmere seg (confirmation, age 15) · å flytte sammen · å bli samboere · å forlove seg · å gifte seg · å få barn · å skille seg · å bli pensjonist · å dø · en begravelse / en bisettelse\n\nIn Norway, samboere (cohabiting couples) are very common, and many marry after having children. Same-sex marriage has been legal since 2009.',
        examples: [{ no: 'De har vært samboere i ti år og har to barn.', en: 'They have lived together for ten years and have two children.' }],
      },
    ],
    pronunciation: {
      heading: 'Saying difficult words softly',
      body: 'Formal phrases are spoken quietly and slowly: «Jeg kondolerer» (kun-du-LÉ-rer), «Hvile i fred.»\n\nAt celebrations it’s the opposite — loud and rhythmic: «Skål!», «Hipp hipp hurra!» Matching the register to the situation is part of B1 sociolinguistic competence.',
    },
    speaking: [
      'Fortell om et bryllup eller en annen fest du har vært i.',
      'Hvordan markerer man fødsel, bryllup og død i kulturen din?',
      'Norge har religionsfrihet. Hva betyr det, og hvorfor er det viktig?',
      'Hva synes du om at mange nordmenn er samboere i stedet for gift?',
      'Hva sier du til en kollega som har mistet en i familien?',
    ],
    quiz: [
      { id: 'b1k10-q1', question: 'Gratulerer ___ bryllupet!', options: ['med', 'til', 'for', 'på'], answer: 0, explanation: 'gratulere med (not «til»).', level: 'B1', topic: 'faste uttrykk' },
      { id: 'b1k10-q2', question: 'Vi var der ___ dagen.', options: ['hele', 'all', 'alle', 'helt'], answer: 0, explanation: 'hele = the whole (with a definite singular noun).', level: 'B1', topic: 'hele/all' },
      { id: 'b1k10-q3', question: 'Gjestene ble ___. (stayed outside)', options: ['ute', 'ut', 'utenfor', 'uten'], answer: 0, explanation: 'No movement → ute.', level: 'B1', topic: 'adverb' },
      { id: 'b1k10-q4', question: 'Hun er gift ___ en nordmann.', options: ['med', 'til', 'på', 'av'], answer: 0, explanation: 'gift med.', level: 'B1', topic: 'faste uttrykk' },
      { id: 'b1k10-q5', question: 'Hun er ___ fordi hunden døde.', options: ['lei seg', 'lei av', 'trøtt', 'sliten'], answer: 0, explanation: 'lei seg = sad.', level: 'B1', topic: 'ordvalg' },
      { id: 'b1k10-q6', question: 'Bryllupet er ___ lørdag.', options: ['neste', 'den neste', 'nest', 'nesten'], answer: 0, explanation: '«neste» + indefinite noun, no article.', level: 'B1', topic: 'adjektiv' },
      { id: 'b1k10-q7', question: 'Jeg er lei ___ regnet.', options: ['av', 'med', 'på', 'for'], answer: 0, explanation: 'lei av = fed up with.', level: 'B1', topic: 'faste uttrykk' },
    ],
    sentences: [
      { id: 'b1k10-s1', no: 'Vi gratulerer dere med bryllupet og ønsker dere alt godt', en: 'We congratulate you on the wedding and wish you all the best', level: 'B1', focus: 'gratulere med', hint: 'gratulerer + dere + med …' },
      { id: 'b1k10-s2', no: 'De har vært samboere i ti år og har to barn', en: 'They have lived together for ten years and have two children', level: 'B1', focus: 'perfektum', hint: 'har vært … i ti år.' },
      { id: 'b1k10-s3', no: 'Etter bryllupet var alle helt slitne', en: 'After the wedding everyone was completely worn out', level: 'B1', focus: 'inversjon', hint: 'Etter bryllupet → var → alle.' },
      { id: 'b1k10-s4', no: 'Hun er lei seg fordi bestefaren døde', en: 'She is sad because her grandfather died', level: 'B1', focus: 'lei seg', hint: 'lei seg + fordi …' },
      { id: 'b1k10-s5', no: 'I Norge er det religionsfrihet for alle', en: 'In Norway there is freedom of religion for everyone', level: 'B1', focus: 'det er', hint: 'I Norge → er → det.' },
    ],
  },
]
