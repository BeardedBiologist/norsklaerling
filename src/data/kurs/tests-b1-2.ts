import type { ChapterTestBank, SpeakingTask } from '../../types'

/** Kapittelprøve banks for B1-kurs chapters 6–10. See tests-b1-1.ts. */
const conv = (id: string, prompt: string, ai: string, opening: string, goal: string, hints: string[], turns = 4): SpeakingTask => ({
  id,
  type: 'samtale',
  prompt,
  hints,
  role: { ai, opening, goal, turns },
})

export const testsB1b: Record<string, ChapterTestBank> = {
  'b1-6': {
    quiz: [
      { id: 'pb6-q1', question: 'Skjemaet må ___ i dag.', options: ['leveres', 'levert', 'blir levert', 'levere'], answer: 0, explanation: 'After a modal → s-passive.', level: 'B1', topic: 'passiv' },
      { id: 'pb6-q2', question: 'Butikken ___ pusset opp i fjor.', options: ['ble', 'var', 'har', 'fikk'], answer: 0, explanation: 'Single past event → bli-passive: ble pusset opp.', level: 'B1', topic: 'passiv' },
      { id: 'pb6-q3', question: 'Han ___ beskjed i går.', options: ['fikk', 'hadde', 'ble', 'har'], answer: 0, explanation: 'Received → få: fikk.', level: 'B1', topic: 'ha/få' },
      { id: 'pb6-q4', question: 'Det ___ kaldt i natt. (will be)', options: ['blir', 'er', 'har', 'var'], answer: 0, explanation: 'Future state → bli.', level: 'B1', topic: 'være/bli' },
      { id: 'pb6-q5', question: 'Søknaden ble lest ___ tre personer.', options: ['av', 'med', 'fra', 'for'], answer: 0, explanation: 'Agent in the passive → av.', level: 'B1', topic: 'passiv' },
      { id: 'pb6-q6', question: '___ flest liker fredager. (people in general)', options: ['Folk', 'Personer', 'Mennesket', 'Et folk'], answer: 0, explanation: '«Folk flest» = most people.', level: 'B1', topic: 'ordvalg' },
      { id: 'pb6-q7', question: 'Jeg fikk endelig ___ bilen. (reparere)', options: ['reparert', 'reparere', 'reparerte', 'repareres'], answer: 0, explanation: 'få + participle.', level: 'B1', topic: 'ha/få' },
      { id: 'pb6-q8', question: 'Vi ___ på kontoret til klokka fem. (stay)', options: ['blir', 'er blitt', 'ble til', 'har'], answer: 0, explanation: 'bli = stay.', level: 'B1', topic: 'være/bli' },
    ],
    sentences: [
      { id: 'pb6-s1', no: 'Søknader behandles fortløpende', en: 'Applications are processed continuously', level: 'B1', focus: 's-passiv', hint: 'behandles.' },
      { id: 'pb6-s2', no: 'Han ble ansatt som leder i fjor', en: 'He was hired as a manager last year', level: 'B1', focus: 'bli-passiv', hint: 'ble ansatt.' },
      { id: 'pb6-s3', no: 'Jeg har to års erfaring fra kundeservice', en: 'I have two years’ experience in customer service', level: 'B1', focus: 'jobbintervju', hint: 'Jeg har … erfaring fra …' },
      { id: 'pb6-s4', no: 'Det kommer til å bli en travel høst', en: 'It is going to be a busy autumn', level: 'B1', focus: 'framtid', hint: 'kommer til å bli.' },
      { id: 'pb6-s5', no: 'Vi fikk svar på søknaden etter en uke', en: 'We got an answer to the application after a week', level: 'B1', focus: 'få', hint: 'fikk svar.' },
      { id: 'pb6-s6', no: 'Skjemaet må fylles ut på nett', en: 'The form must be filled in online', level: 'B1', focus: 's-passiv', hint: 'må fylles ut.' },
      { id: 'pb6-s7', no: 'Mine sterke sider er at jeg er nøyaktig og strukturert', en: 'My strengths are that I am accurate and organised', level: 'B1', focus: 'jobbintervju', hint: 'Mine sterke sider er at …' },
    ],
    listening: [
      [
        { q: 'Hvor har Ling utdannelsen sin fra?', options: ['London School of Economics', 'NTNU', 'Et universitet i Kina', 'Norwegian on the Web'], answer: 0 },
        { q: 'Hvor gammel er Ling, ifølge søknaden?', options: ['28 år', '32 år', '24 år', '38 år'], answer: 0 },
      ],
      [
        { q: 'Hva gjorde Ling i den forrige jobben som økte effektiviteten?', options: ['Hun tok initiativ til nye rutiner', 'Hun ansatte flere folk', 'Hun kjøpte et nytt system', 'Hun jobbet overtid'], answer: 0 },
        { q: 'Hva tilbyr Per Ling å drikke?', options: ['Kaffe', 'Te', 'Vann', 'Ingenting'], answer: 0 },
      ],
      [
        { q: 'Hvorfor får en midlertidig ansatt kanskje ikke full respekt fra kollegaer?', options: ['Fordi man bare skal være der en periode', 'Fordi man er nyutdannet', 'Fordi man har lavere lønn', 'Fordi man jobber hjemmefra'], answer: 0 },
        { q: 'Hva ønsker de fleste seg etter hvert, ifølge essayet?', options: ['En fast stilling', 'Flere midlertidige jobber', 'Å jobbe deltid', 'Å bli selvstendig'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb6-o1', type: 'presenter', prompt: 'Presenter deg selv som om du søker drømmejobben din: utdanning, erfaring og hvorfor du passer.', hints: ['Jeg har … års erfaring', 'Jeg passer fordi …'] },
      { id: 'pb6-o2', type: 'fortell', prompt: 'Fortell om en gang du fikk eller mistet en jobb. Hva skjedde, og hva lærte du?', hints: ['Jeg ble …', 'Jeg lærte at …'] },
      { id: 'pb6-o3', type: 'mening', prompt: 'Hva er fordeler og ulemper med å jobbe i en stor bedrift sammenlignet med en liten?', hints: ['En fordel er …', 'En ulempe er …'] },
      { id: 'pb6-o4', type: 'beskriv', prompt: 'Beskriv en vanskelig situasjon på jobb og hvordan den ble løst. Bruk gjerne passiv.', hints: ['Problemet ble …', 'Det ble bestemt at …'] },
      conv('pb6-o5', 'Jobbintervju (kort)', 'Du er leder og intervjuer en kandidat. Still tre-fire vanlige intervjuspørsmål, ett om gangen, og følg opp svarene.', 'Takk for at du kom. Hvorfor søkte du på denne stillingen?', 'Svar godt på spørsmålene i et jobbintervju', ['Jeg søkte fordi …', 'Jeg har erfaring med …']),
      conv('pb6-o6', 'Be om fri', 'Du er sjefen. Den ansatte vil ha tre dager fri neste uke. Spør hvorfor, og hvem som kan ta over oppgavene.', 'Ja, hva gjelder det?', 'Be om fri og finn en løsning med sjefen', ['Jeg lurer på om …', 'Kollegaen min kan …']),
    ],
  },

  'b1-7': {
    quiz: [
      { id: 'pb7-q1', question: 'Han studerer ___ universitetet i Bergen.', options: ['ved', 'hos', 'til', 'av'], answer: 0, explanation: '«ved universitetet» (also: på universitetet).', level: 'B1', topic: 'preposisjoner' },
      { id: 'pb7-q2', question: 'Hun tar kurs ___ få en bedre jobb.', options: ['for å', 'fordi', 'til å', 'for'], answer: 0, explanation: 'Purpose + infinitive.', level: 'B1', topic: 'for å' },
      { id: 'pb7-q3', question: 'Vi venter ikke ___ på dem.', options: ['lenger', 'lengre', 'lang', 'lengst'], answer: 0, explanation: '«no longer» → lenger.', level: 'B1', topic: 'lenger/lengre' },
      { id: 'pb7-q4', question: 'Denne boka er ___ enn den andre.', options: ['lengre', 'lenger', 'mer lang', 'langere'], answer: 0, explanation: 'Comparative of lang → lengre.', level: 'B1', topic: 'lenger/lengre' },
      { id: 'pb7-q5', question: 'Vi trenger to stoler ___.', options: ['til', 'mer', 'igjen', 'også'], answer: 0, explanation: 'number + noun + til = more.', level: 'B1', topic: 'til' },
      { id: 'pb7-q6', question: 'Hun er veldig glad ___ barna sine.', options: ['i', 'for', 'på', 'av'], answer: 0, explanation: 'glad i = fond of.', level: 'B1', topic: 'faste uttrykk' },
      { id: 'pb7-q7', question: 'Jeg er redd ___ hunder.', options: ['for', 'av', 'med', 'på'], answer: 0, explanation: 'redd for.', level: 'B1', topic: 'faste uttrykk' },
      { id: 'pb7-q8', question: 'Kontoret ___ sjefen er stort. (genitive with til)', options: ['til', 'av', 'for', 'hos'], answer: 0, explanation: 'kontoret til sjefen.', level: 'B1', topic: 'genitiv' },
    ],
    sentences: [
      { id: 'pb7-s1', no: 'Han tok kveldskurs for å lære regnskap', en: 'He took evening classes to learn accounting', level: 'B1', focus: 'for å', hint: '… for å + infinitive.' },
      { id: 'pb7-s2', no: 'Reisen tok lengre tid enn vi trodde', en: 'The journey took longer than we thought', level: 'B1', focus: 'lengre', hint: 'lengre tid enn …' },
      { id: 'pb7-s3', no: 'Bilen til naboen står i veien', en: 'The neighbour’s car is in the way', level: 'B1', focus: 'genitiv med til', hint: 'Bilen til …' },
      { id: 'pb7-s4', no: 'Hun er stolt av utdanningen sin', en: 'She is proud of her education', level: 'B1', focus: 'stolt av', hint: 'stolt av + noun.' },
      { id: 'pb7-s5', no: 'Kan jeg få en kopp te til', en: 'Can I have another cup of tea', level: 'B1', focus: 'til', hint: '… te til.' },
      { id: 'pb7-s6', no: 'Vi bor ikke i Oslo lenger', en: 'We don’t live in Oslo anymore', level: 'B1', focus: 'lenger', hint: 'ikke … lenger.' },
      { id: 'pb7-s7', no: 'Han jobber ved sykehuset og bor på Hamar', en: 'He works at the hospital and lives in Hamar', level: 'B1', focus: 'ved / på', hint: 'ved sykehuset … på Hamar.' },
    ],
    listening: [
      [
        { q: 'Hva dekker deltakeravgiften på konferansen?', options: ['Lunsj begge dager', 'Hotell', 'Reisen', 'Ingenting'], answer: 0 },
        { q: 'Hvem snakket Marte mest med på konferansen?', options: ['Noen svenske forskere', 'Yang', 'Studentene sine', 'En professor fra Trondheim'], answer: 0 },
      ],
      [
        { q: 'Hvor lang tid tok det før Margrethe fikk svar på søknaden om opprykk?', options: ['Nesten ett år', 'To uker', 'Fem år', 'En måned'], answer: 0 },
        { q: 'Hva sier hun at professortittelen betyr i hverdagen?', options: ['Ingen ting, bortsett fra lønna', 'Mye mer arbeid', 'Lengre ferie', 'Mer undervisning'], answer: 0 },
      ],
      [
        { q: 'Hvor mange prosent av norske ungdommer velger å studere, ifølge teksten?', options: ['Ca. 30 prosent', 'Ca. 80 prosent', 'Ca. 10 prosent', 'Ca. 50 prosent'], answer: 0 },
        { q: 'Hvilket karaktersystem bruker universitetene og høyskolene?', options: ['Bokstaver fra A til F', 'Tall fra 1 til 6', 'Bestått/ikke bestått', 'Prosent'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb7-o1', type: 'presenter', prompt: 'Hold en kort presentasjon om utdanningen din eller yrket ditt for en klasse.', hints: ['I dag vil jeg fortelle om …', 'Til slutt …'] },
      { id: 'pb7-o2', type: 'mening', prompt: 'Bør voksne innvandrere få gratis norskkurs og utdanning? Begrunn.', hints: ['Jeg mener at …', 'For eksempel …'] },
      { id: 'pb7-o3', type: 'sammenlign', prompt: 'Sammenlign det å studere og det å jobbe rett etter videregående.', hints: ['Fordelen med … er …', 'mer … enn'] },
      { id: 'pb7-o4', type: 'fortell', prompt: 'Fortell om noe du har lært som voksen som du er stolt av.', hints: ['Jeg lærte …', 'Jeg er stolt av …'] },
      conv('pb7-o5', 'Samtale med studieveileder', 'Du er studieveileder. Personen vurderer å ta en utdanning. Spør om bakgrunn, mål og hvor mye tid de har, og gi råd.', 'Hei! Hva slags utdanning tenker du på?', 'Få råd om utdanning ut fra dine mål', ['Jeg ønsker å …', 'Er det mulig å …?']),
      conv('pb7-o6', 'Spørsmål etter presentasjon', 'Personen har nettopp presentert jobben sin. Still to-tre oppfølgingsspørsmål fra salen.', 'Takk for presentasjonen! Hva er det mest utfordrende med jobben din?', 'Svar på spørsmål etter en presentasjon', ['Det er et godt spørsmål', 'For eksempel …']),
    ],
  },

  'b1-8': {
    quiz: [
      { id: 'pb8-q1', question: 'Kan du si meg når ___?', options: ['toget går', 'går toget', 'toget går ikke', 'går'], answer: 0, explanation: 'Indirect question → no inversion.', level: 'B1', topic: 'indirekte spørsmål' },
      { id: 'pb8-q2', question: 'Jeg vet ikke hva ___ skjedde.', options: ['som', 'at', 'hvis', '—'], answer: 0, explanation: 'Question word as subject → hva som.', level: 'B1', topic: 'indirekte spørsmål' },
      { id: 'pb8-q3', question: '«Vi kommer.» → De sa at de ___.', options: ['kom', 'kommer ikke', 'har kommet', 'komme'], answer: 0, explanation: 'Past reporting verb → shift back.', level: 'B1', topic: 'indirekte tale' },
      { id: 'pb8-q4', question: 'Hvis jeg ___ rik, ville jeg reist mye.', options: ['var', 'er', 'blir', 'har vært'], answer: 0, explanation: 'Unreal condition → past tense.', level: 'B1', topic: 'betingelse' },
      { id: 'pb8-q5', question: 'Filmen ___ jeg så, var lang.', options: ['som', 'at', 'hva', 'hvem'], answer: 0, explanation: 'Refers to a noun → som.', level: 'B1', topic: 'at/som' },
      { id: 'pb8-q6', question: 'Hun spurte ___ jeg ville ha kaffe.', options: ['om', 'at', 'som', 'hva som'], answer: 0, explanation: 'Reported yes/no question → om.', level: 'B1', topic: 'indirekte tale' },
      { id: 'pb8-q7', question: '___ du trenger hjelp, kan du ringe oss. (formal if)', options: ['Dersom', 'Da', 'Mens', 'Før'], answer: 0, explanation: 'dersom = if (formal).', level: 'B1', topic: 'betingelse' },
      { id: 'pb8-q8', question: 'Det var Ibsen ___ skrev «Et dukkehjem».', options: ['som', 'at', 'hva', 'der'], answer: 0, explanation: 'Cleft sentence: Det var … som …', level: 'B1', topic: 'det' },
    ],
    sentences: [
      { id: 'pb8-s1', no: 'Vet du hvor nærmeste apotek ligger', en: 'Do you know where the nearest pharmacy is', level: 'B1', focus: 'indirekte spørsmål', hint: 'hvor + subject + verb.' },
      { id: 'pb8-s2', no: 'Hun sa at hun var for sliten til å komme', en: 'She said she was too tired to come', level: 'B1', focus: 'indirekte tale', hint: 'sa at + past.' },
      { id: 'pb8-s3', no: 'Hvis jeg hadde mer tid ville jeg lært spansk', en: 'If I had more time I would learn Spanish', level: 'B1', focus: 'betingelse', hint: 'Hvis-clause → ville → jeg.' },
      { id: 'pb8-s4', no: 'Jeg skjønner ikke hvorfor hun ikke ringte', en: 'I don’t understand why she didn’t call', level: 'B1', focus: 'ikke i leddsetning', hint: 'hvorfor + hun + ikke + ringte.' },
      { id: 'pb8-s5', no: 'Etter at vi hadde spist gikk vi en tur', en: 'After we had eaten we went for a walk', level: 'B1', focus: 'etter at', hint: 'Etter at-clause → gikk → vi.' },
      { id: 'pb8-s6', no: 'Det var Nansen som fikk fredsprisen', en: 'It was Nansen who got the peace prize', level: 'B1', focus: 'det-setning', hint: 'Det var … som …' },
      { id: 'pb8-s7', no: 'Legen spurte om jeg tok noen medisiner', en: 'The doctor asked if I took any medicines', level: 'B1', focus: 'om-setning', hint: 'spurte om …' },
    ],
    listening: [
      [
        { q: 'Hva er det eldste fagmiljøet ved NTNU?', options: ['Bergteknikk', 'Medisin', 'Kunst', 'Lærerutdanning'], answer: 0 },
        { q: 'Hva arbeider miljøet i Ålesund hovedsakelig med?', options: ['Maritim teknikk', 'Informasjonsteknologi', 'Medisin', 'Humaniora'], answer: 0 },
      ],
      [
        { q: 'Hva ble oppdaget i 2005?', options: ['Gittercellene', 'Kavli-instituttet', 'Alzheimers sykdom', 'Stedsansen hos mennesker'], answer: 0 },
        { q: 'Hvilke dyr forsket Moser-paret på?', options: ['Rotter', 'Mus', 'Aper', 'Fisk'], answer: 0 },
      ],
      [
        { q: 'Hvem fikk Nobelprisen i litteratur i 1903?', options: ['Bjørnstjerne Bjørnson', 'Knut Hamsun', 'Sigrid Undset', 'Henrik Ibsen'], answer: 0 },
        { q: 'Hvilket år fikk May-Britt og Edvard Moser prisen?', options: ['2014', '2004', '1996', '2010'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb8-o1', type: 'fortell', prompt: 'Gjenfortell en nyhet du har lest eller hørt nylig. Bruk indirekte tale: «Det sto at …», «De sa at …».', hints: ['Det sto at …', 'Han sa at …'] },
      { id: 'pb8-o2', type: 'svar', prompt: 'Hva ville du gjort annerledes hvis du kunne begynne livet i Norge på nytt?', hints: ['Hvis jeg kunne, ville jeg …'] },
      { id: 'pb8-o3', type: 'mening', prompt: 'Hvilken oppfinnelse eller oppdagelse har betydd mest for vanlige folk? Begrunn.', hints: ['Jeg tror at …', 'For eksempel …'] },
      { id: 'pb8-o4', type: 'beskriv', prompt: 'Beskriv en situasjon der du var veldig redd, glad eller skuffet, og hvorfor.', hints: ['Jeg ble …', 'fordi …'] },
      conv('pb8-o5', 'Hva sa legen?', 'Du er en venn. Personen har vært hos legen. Spør hva legen sa og spurte om, slik at personen må bruke indirekte tale.', 'Hei! Hvordan gikk det hos legen? Hva sa hun?', 'Fortell hva legen sa og spurte om (indirekte tale)', ['Hun sa at …', 'Hun spurte om …']),
      conv('pb8-o6', 'Hypotetisk samtale', 'Still personen hypotetiske spørsmål om livet: «Hva ville du gjort hvis …?» og følg opp.', 'Hva ville du gjort hvis du ikke måtte jobbe på et helt år?', 'Svar på hypotetiske spørsmål', ['Hvis jeg …, ville jeg …']),
    ],
  },

  'b1-9': {
    quiz: [
      { id: 'pb9-q1', question: 'Where does the comma go?', options: ['Når det er fint vær, går vi på tur.', 'Når det er fint, vær går vi på tur.', 'Når, det er fint vær går vi på tur.', 'No comma.'], answer: 0, explanation: 'Comma after an opening subordinate clause.', level: 'B1', topic: 'komma' },
      { id: 'pb9-q2', question: 'Which is correct?', options: ['Hun sa at hun var syk.', 'Hun sa, at hun var syk.', 'Hun sa at, hun var syk.', 'Hun, sa at hun var syk.'], answer: 0, explanation: 'No comma before «at».', level: 'B1', topic: 'komma' },
      { id: 'pb9-q3', question: 'Women got the vote in Norway in …', options: ['1913', '1905', '1814', '1945'], answer: 0, explanation: 'Stemmerett for kvinner i 1913.', level: 'B1', topic: 'historie' },
      { id: 'pb9-q4', question: '«In the 1600s» =', options: ['på 1600-tallet', 'i 1600-tallet', 'på 1600', 'i de 1600'], answer: 0, explanation: 'på + …-tallet.', level: 'B1', topic: 'tidsuttrykk' },
      { id: 'pb9-q5', question: 'Which needs commas around the som-clause?', options: ['Bergen, som ligger på Vestlandet, er kjent for regn.', 'Byen som jeg liker best, er Bergen.', 'Alle som vil, kan bli med.', 'Mannen som kom, var lege.'], answer: 0, explanation: 'Extra, removable information → commas both sides.', level: 'B1', topic: 'komma' },
      { id: 'pb9-q6', question: 'Det regnet ___ vi gikk ut likevel.', options: [', men', 'men,', ' men', ', men,'], answer: 0, explanation: 'Comma before men between main clauses.', level: 'B1', topic: 'komma' },
      { id: 'pb9-q7', question: 'Norway was occupied during the Second World War from …', options: ['1940 to 1945', '1914 to 1918', '1939 to 1940', '1905 to 1914'], answer: 0, explanation: 'Okkupasjonen 1940–45.', level: 'B1', topic: 'historie' },
      { id: 'pb9-q8', question: 'Vi spiste ___ vi så på toget.', options: ['mens', ', mens', 'mens,', 'og mens,'], answer: 0, explanation: 'No comma before a subordinate clause that follows.', level: 'B1', topic: 'komma' },
    ],
    sentences: [
      { id: 'pb9-s1', no: 'Da krigen var over feiret hele landet', en: 'When the war was over the whole country celebrated', level: 'B1', focus: 'leddsetning først', hint: 'Da-clause → feiret …' },
      { id: 'pb9-s2', no: 'Norge ble okkupert i 1940', en: 'Norway was occupied in 1940', level: 'B1', focus: 'bli-passiv', hint: 'ble okkupert.' },
      { id: 'pb9-s3', no: 'På nasjonaldagen går mange i bunad', en: 'On National Day many people wear a bunad', level: 'B1', focus: 'inversjon', hint: 'På nasjonaldagen → går …' },
      { id: 'pb9-s4', no: 'Vi gikk hjem fordi det begynte å regne', en: 'We went home because it started to rain', level: 'B1', focus: 'fordi uten komma', hint: 'No comma before fordi.' },
      { id: 'pb9-s5', no: 'Byen vokste mye på 1800-tallet', en: 'The town grew a lot in the 1800s', level: 'B1', focus: 'historie', hint: 'på 1800-tallet.' },
      { id: 'pb9-s6', no: 'Grunnloven er over 200 år gammel', en: 'The Constitution is over 200 years old', level: 'B1', focus: 'historie', hint: 'Grunnloven er …' },
      { id: 'pb9-s7', no: 'Når toget er ferdig spiser barna is', en: 'When the parade is over the children eat ice cream', level: 'B1', focus: 'leddsetning først', hint: 'Når-clause → spiser → barna.' },
    ],
    listening: [
      [
        { q: 'Når feiret Trondheim 1000-årsjubileum?', options: ['I 1997', 'I 997', 'I 1814', 'I 1964'], answer: 0 },
        { q: 'Hva er Stiftsgården i dag?', options: ['Offisiell kongebolig', 'Et museum', 'Rådhuset', 'En skole'], answer: 0 },
      ],
      [
        { q: 'Når samles barna ved Nidarosdomen for barnetoget?', options: ['Klokka 10', 'Klokka 13', 'Klokka 16', 'Klokka 8'], answer: 0 },
        { q: 'Hvilken sang synger alle på torget?', options: ['«Ja, vi elsker»', '«Gratulerer med dagen»', '«Kongesangen»', '«Norge i rødt, hvitt og blått»'], answer: 0 },
      ],
      [
        { q: 'Hva betyr «ka» på trøndersk?', options: ['Hva', 'Hvem', 'Hvor', 'Hvordan'], answer: 0 },
        { q: 'Hvilke to skriftspråk har norsk?', options: ['Bokmål og nynorsk', 'Trøndersk og bokmål', 'Samisk og nynorsk', 'Riksmål og dansk'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb9-o1', type: 'presenter', prompt: 'Fortell om tre viktige årstall i Norges historie og hva som skjedde.', hints: ['I 1814 …', 'I 1905 …', 'Fra 1940 til 1945 …'] },
      { id: 'pb9-o2', type: 'beskriv', prompt: 'Beskriv 17. mai for en som aldri har vært i Norge på nasjonaldagen.', hints: ['Om morgenen …', 'barnetoget', 'Etterpå …'] },
      { id: 'pb9-o3', type: 'mening', prompt: 'Hvorfor er det viktig å kjenne historien til landet man bor i? Gi eksempler.', hints: ['Det er viktig fordi …', 'For eksempel …'] },
      { id: 'pb9-o4', type: 'sammenlign', prompt: 'Sammenlign en nasjonaldag eller stor høytid i landet du kommer fra med 17. mai.', hints: ['I … feirer vi …, mens …'] },
      conv('pb9-o5', 'Eksaminator: Norge og historie', 'Du er eksaminator. Still spørsmål om hva personen vet om Norges historie og 17. mai, og om nasjonaldagen i hjemlandet. Følg opp svarene.', 'Hva vet du om hvorfor Norge feirer 17. mai?', 'Snakk om norsk historie og nasjonaldagen', ['I 1814 …', 'Hos oss …']),
      conv('pb9-o6', 'Guide for en venn', 'Du er en venn på besøk fra utlandet. Spør om historien til stedet personen bor og hva du bør se.', 'Så fint her! Hva er historien til denne byen?', 'Fortell om stedet ditt og historien', ['Byen ble …', 'Du bør se …']),
    ],
  },

  'b1-10': {
    quiz: [
      { id: 'pb10-q1', question: 'Vi gratulerer deg ___ den nye jobben!', options: ['med', 'til', 'for', 'på'], answer: 0, explanation: 'gratulere med.', level: 'B1', topic: 'faste uttrykk' },
      { id: 'pb10-q2', question: 'Det regnet ___ uka.', options: ['hele', 'all', 'alle', 'helt'], answer: 0, explanation: 'hele + definite singular.', level: 'B1', topic: 'hele/all' },
      { id: 'pb10-q3', question: 'Barna er ___. (indoors, no movement)', options: ['inne', 'inn', 'innom', 'innen'], answer: 0, explanation: 'No movement → inne.', level: 'B1', topic: 'adverb' },
      { id: 'pb10-q4', question: 'Han har vært gift ___ henne i ti år.', options: ['med', 'til', 'på', 'av'], answer: 0, explanation: 'gift med.', level: 'B1', topic: 'faste uttrykk' },
      { id: 'pb10-q5', question: 'Etter en lang arbeidsdag er jeg helt ___. (exhausted)', options: ['sliten', 'lei seg', 'trøtt på', 'lei'], answer: 0, explanation: 'sliten = worn out.', level: 'B1', topic: 'ordvalg' },
      { id: 'pb10-q6', question: 'Vi drar ___ uke. (next)', options: ['neste', 'den neste', 'nest', 'nesten'], answer: 0, explanation: 'neste + indefinite noun.', level: 'B1', topic: 'adjektiv' },
      { id: 'pb10-q7', question: 'Jeg er lei ___ å vente.', options: ['av', 'med', 'på', 'for'], answer: 0, explanation: 'lei av.', level: 'B1', topic: 'faste uttrykk' },
      { id: 'pb10-q8', question: 'Hun takket ___ gaven.', options: ['for', 'til', 'med', 'om'], answer: 0, explanation: 'takke for.', level: 'B1', topic: 'faste uttrykk' },
    ],
    sentences: [
      { id: 'pb10-s1', no: 'Vi gratulerer dere med den nye babyen', en: 'We congratulate you on the new baby', level: 'B1', focus: 'gratulere med', hint: 'gratulerer + dere + med …' },
      { id: 'pb10-s2', no: 'De har vært samboere siden 2015', en: 'They have lived together since 2015', level: 'B1', focus: 'perfektum', hint: 'har vært … siden …' },
      { id: 'pb10-s3', no: 'Etter begravelsen samlet familien seg hjemme', en: 'After the funeral the family gathered at home', level: 'B1', focus: 'inversjon', hint: 'Etter begravelsen → samlet …' },
      { id: 'pb10-s4', no: 'Han er lei seg fordi hunden er syk', en: 'He is sad because the dog is ill', level: 'B1', focus: 'lei seg', hint: 'lei seg + fordi.' },
      { id: 'pb10-s5', no: 'I Norge kan man velge religion selv fra man er femten', en: 'In Norway you can choose your religion yourself from age fifteen', level: 'B1', focus: 'man + V2', hint: 'I Norge → kan → man.' },
      { id: 'pb10-s6', no: 'Hele familien var samlet på julaften', en: 'The whole family was gathered on Christmas Eve', level: 'B1', focus: 'hele', hint: 'Hele familien …' },
      { id: 'pb10-s7', no: 'Takk for invitasjonen vi kommer gjerne', en: 'Thanks for the invitation we’d love to come', level: 'B1', focus: 'takke for', hint: 'Takk for …' },
    ],
    listening: [
      [
        { q: 'Når hentet ambulansen Steinar?', options: ['Klokka to om natta', 'Om morgenen', 'Klokka tolv', 'Om ettermiddagen'], answer: 0 },
        { q: 'Hva har Ingeborg allerede kontaktet?', options: ['Et begravelsesbyrå', 'En advokat', 'Kirka', 'Barna sine'], answer: 0 },
      ],
      [
        { q: 'Hvem er Peters forlover?', options: ['Bestevennen hans, Frank', 'Søstera til Eva', 'Faren hans', 'Broren hans'], answer: 0 },
        { q: 'Hva øver Susanne på i garderoben?', options: ['Talen sin', 'En sang', 'En dans', 'Et dikt'], answer: 0 },
      ],
      [
        { q: 'Hvor mange prosent av befolkningen er medlem i Human-Etisk Forbund?', options: ['1,6 prosent', '16 prosent', '70 prosent', '2,5 prosent'], answer: 0 },
        { q: 'Når regner mange kristne i Norge kirka som viktig?', options: ['I jula og ved dåp, konfirmasjon, bryllup og begravelser', 'Hver søndag', 'Bare til påske', 'Aldri'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb10-o1', type: 'fortell', prompt: 'Fortell om en stor dag i livet ditt — et bryllup, en fødsel eller en annen viktig hendelse.', hints: ['Den dagen …', 'Jeg husker at …'] },
      { id: 'pb10-o2', type: 'mening', prompt: 'Hva betyr religionsfrihet for deg, og hvorfor er det viktig i et demokrati?', hints: ['Religionsfrihet betyr at …', 'Det er viktig fordi …'] },
      { id: 'pb10-o3', type: 'sammenlign', prompt: 'Sammenlign hvordan man markerer et dødsfall i Norge og i landet du kommer fra.', hints: ['I Norge …, mens …'] },
      { id: 'pb10-o4', type: 'beskriv', prompt: 'Beskriv de viktigste verdiene i det norske samfunnet, slik du opplever dem.', hints: ['likestilling', 'tillit', 'For eksempel …'] },
      conv('pb10-o5', 'Kondolere en kollega', 'Du er en kollega som har mistet faren sin. Personen vil vise omtanke. Svar stille og fortell litt om begravelsen.', 'Hei … ja, jeg er tilbake på jobb i dag.', 'Kondoler og vis omtanke på en passende måte', ['Jeg kondolerer', 'Si fra hvis …']),
      conv('pb10-o6', 'Gratulere og planlegge', 'Du skal gifte deg og forteller personen om det. Snakk om planene og be om hjelp med noe.', 'Du, jeg har store nyheter: vi skal gifte oss i juni!', 'Gratuler og snakk om bryllupsplanene', ['Gratulerer så mye!', 'Kan jeg hjelpe med …?']),
    ],
  },
}
