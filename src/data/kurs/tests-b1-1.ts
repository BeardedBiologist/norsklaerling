import type { ChapterTestBank, SpeakingTask } from '../../types'

/** Kapittelprøve banks for B1-kurs chapters 1–5. Test-only material; oral part draws 2 tasks + 1 conversation. */
const conv = (id: string, prompt: string, ai: string, opening: string, goal: string, hints: string[], turns = 4): SpeakingTask => ({
  id,
  type: 'samtale',
  prompt,
  hints,
  role: { ai, opening, goal, turns },
})

export const testsB1a: Record<string, ChapterTestBank> = {
  'b1-1': {
    quiz: [
      { id: 'pb1-q1', question: 'Vi ___ til Trondheim for tre år siden.', options: ['flyttet', 'har flyttet', 'flytter', 'hadde flyttet'], answer: 0, explanation: '«for tre år siden» = known past time → preteritum.', level: 'B1', topic: 'verbtid' },
      { id: 'pb1-q2', question: 'Hun ___ her siden 2019.', options: ['har jobbet', 'jobbet', 'jobber', 'hadde jobbe'], answer: 0, explanation: 'Continues until now (siden …) → perfektum.', level: 'B1', topic: 'verbtid' },
      { id: 'pb1-q3', question: 'Det ___ mange gode turstier her.', options: ['fins', 'finner', 'finns', 'finnes seg'], answer: 0, explanation: 'å finnes / fins — s-verb.', level: 'B1', topic: 's-verb' },
      { id: 'pb1-q4', question: 'Kurset begynner ___ to uker.', options: ['om', 'for', 'i', 'på'], answer: 0, explanation: 'Future time → om.', level: 'B1', topic: 'tidsuttrykk' },
      { id: 'pb1-q5', question: 'Past tense of «å trives»:', options: ['trivdes', 'trives', 'trivet', 'trivde'], answer: 0, explanation: 'trives – trivdes – har trivdes.', level: 'B1', topic: 's-verb' },
      { id: 'pb1-q6', question: '___ du noen gang smakt lutefisk?', options: ['Har', 'Var', 'Er', 'Gjorde'], answer: 0, explanation: '«ever», no time given → perfektum.', level: 'B1', topic: 'verbtid' },
      { id: 'pb1-q7', question: 'Someone from Northern Norway is a …', options: ['nordlending', 'nordnorsk', 'nordmann fra nord', 'nordling'], answer: 0, explanation: 'nordlending (person) · nordnorsk (adjective).', level: 'B1', topic: 'nasjonalitet' },
      { id: 'pb1-q8', question: '___ sommeren er det lyst om natta. (in summers generally)', options: ['Om', 'I', 'På', 'For'], answer: 0, explanation: 'om sommeren = in summers generally.', level: 'B1', topic: 'tidsuttrykk' },
    ],
    sentences: [
      { id: 'pb1-s1', no: 'Vi har bodd i denne byen i seks år', en: 'We have lived in this town for six years', level: 'B1', focus: 'perfektum + i', hint: 'har bodd … i …' },
      { id: 'pb1-s2', no: 'Da vi flyttet hit hadde vi ingen venner', en: 'When we moved here we had no friends', level: 'B1', focus: 'da + inversjon', hint: 'Da-clause → hadde → vi.' },
      { id: 'pb1-s3', no: 'Byen ligger ved en fjord og har mange gamle trehus', en: 'The town lies by a fjord and has many old wooden houses', level: 'B1', focus: 'presentere sted', hint: 'Byen ligger … og har …' },
      { id: 'pb1-s4', no: 'Han trives godt i den nye jobben', en: 'He is happy in his new job', level: 'B1', focus: 's-verb', hint: 'trives.' },
      { id: 'pb1-s5', no: 'Om vinteren går mange på ski', en: 'In winter many people go skiing', level: 'B1', focus: 'inversjon', hint: 'Om vinteren → går → mange.' },
      { id: 'pb1-s6', no: 'Kan du forklare hva det betyr', en: 'Can you explain what it means', level: 'B1', focus: 'indirekte spørsmål', hint: 'hva + det + betyr.' },
      { id: 'pb1-s7', no: 'Jeg kom til Norge for ti år siden', en: 'I came to Norway ten years ago', level: 'B1', focus: 'preteritum', hint: 'for … siden.' },
    ],
    listening: [
      [
        { q: 'Hvor i Trondheim skal familien bo?', options: ['På Tyholt', 'I sentrum', 'På Byåsen', 'På Heimdal'], answer: 0 },
        { q: 'Hva er den mest kjente turistattraksjonen i Trondheim, ifølge teksten?', options: ['Nidarosdomen', 'Bymarka', 'Elva', 'Universitetet'], answer: 0 },
      ],
      [
        { q: 'Hvor mange studenter er det ved NTNU i Ålesund?', options: ['Omtrent 2 300', 'Omtrent 45 000', 'Omtrent 230', 'Omtrent 23 000'], answer: 0 },
        { q: 'Hva studerer Ida?', options: ['Skipsbygging', 'Sykepleie', 'Økonomi', 'Medisin'], answer: 0 },
      ],
      [
        { q: 'Når var de olympiske vinterlekene på Lillehammer?', options: ['I 1994', 'I 1856', 'I 2004', 'I 1952'], answer: 0 },
        { q: 'Hvor mange innbyggere har Gjøvik kommune?', options: ['Cirka 30 000', 'Cirka 190 000', 'Cirka 3 000', 'Cirka 100 000'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb1-o1', type: 'presenter', prompt: 'Presenter stedet der du bor for en som vurderer å flytte dit: fordeler, ulemper og hva man kan gjøre der.', hints: ['Stedet ligger …', 'En fordel er …', 'En ulempe er …'] },
      { id: 'pb1-o2', type: 'fortell', prompt: 'Fortell om de første månedene dine i Norge. Hva var lett, og hva var vanskelig?', hints: ['Da jeg kom …', 'Det var vanskelig å …'] },
      { id: 'pb1-o3', type: 'sammenlign', prompt: 'Sammenlign livet i en norsk by med livet i en by i landet du kommer fra.', hints: ['mens', 'mer … enn', 'ikke så … som'] },
      { id: 'pb1-o4', type: 'mening', prompt: 'Hva mener du er det viktigste for å trives når man har flyttet til et nytt land?', hints: ['Det viktigste er …', 'For eksempel …'] },
      conv('pb1-o5', 'Eksaminator: om bosted og bakgrunn', 'Du er eksaminator på muntlig norskprøve. Still spørsmål om hvor personen bor, hvorfor de bor der og hvordan de trives. Følg opp svarene.', 'Hei og velkommen. Hvor bor du, og hvorfor bor du akkurat der?', 'Snakk om bosted og bakgrunn med eksaminator', ['Jeg bor i …', 'Jeg trives fordi …']),
      conv('pb1-o6', 'Tips til en turist', 'Du er en turist i byen der personen bor. Spør om hva du bør se, hvor du bør spise og hvordan du kommer deg rundt.', 'Unnskyld, bor du her? Hva synes du jeg bør se i byen?', 'Gi en turist gode råd om byen din', ['Du bør …', 'Det tar cirka …']),
    ],
  },

  'b1-2': {
    quiz: [
      { id: 'pb2-q1', question: 'Hun ble ___ i fjor. (became a mother)', options: ['mor', 'en mor', 'moren', 'ei mor'], answer: 0, explanation: 'Status after «bli/være» → no article.', level: 'B1', topic: 'substantiv' },
      { id: 'pb2-q2', question: '___ er viktig for helsa. (Sleep, in general)', options: ['Søvnen', 'En søvn', 'Søvner', 'Søvnene'], answer: 0, explanation: 'General statements often take the definite form.', level: 'B1', topic: 'bestemt form' },
      { id: 'pb2-q3', question: 'Hun brakk ___. (her leg)', options: ['beinet', 'sitt bein', 'et bein', 'bein'], answer: 0, explanation: 'Body parts → definite form.', level: 'B1', topic: 'bestemt form' },
      { id: 'pb2-q4', question: 'Plural of «ei datter»:', options: ['døtre', 'datterer', 'døttrer', 'datter'], answer: 0, explanation: 'datter – dattera – døtre – døtrene.', level: 'B1', topic: 'uregelmessige substantiv' },
      { id: 'pb2-q5', question: 'Retten er sunn. I tillegg ___ billig.', options: ['er den', 'den er', 'er', 'den ikke er'], answer: 0, explanation: '«I tillegg» is an adverb → inversion.', level: 'B1', topic: 'tekstbinding' },
      { id: 'pb2-q6', question: 'Plural of «en fot»:', options: ['føtter', 'foter', 'føter', 'fotter'], answer: 0, explanation: 'fot – foten – føtter – føttene.', level: 'B1', topic: 'uregelmessige substantiv' },
      { id: 'pb2-q7', question: 'Vi trenger ___ og egg. (milk)', options: ['melk', 'en melk', 'melka', 'melker'], answer: 0, explanation: 'Uncountable → no article.', level: 'B1', topic: 'substantiv' },
      { id: 'pb2-q8', question: 'Which word starts a conclusion?', options: ['Alt i alt', 'For det første', 'Dessuten', 'For eksempel'], answer: 0, explanation: '«Alt i alt» = all in all.', level: 'B1', topic: 'tekstbinding' },
    ],
    sentences: [
      { id: 'pb2-s1', no: 'Hos oss pleier vi å spise sammen på søndager', en: 'In our family we usually eat together on Sundays', level: 'B1', focus: 'inversjon', hint: 'Hos oss → pleier → vi.' },
      { id: 'pb2-s2', no: 'I tillegg er det sunt og billig', en: 'In addition it is healthy and cheap', level: 'B1', focus: 'tekstbinding', hint: 'I tillegg → er → det.' },
      { id: 'pb2-s3', no: 'For det første er familien viktig', en: 'Firstly family is important', level: 'B1', focus: 'tekstbinding', hint: 'For det første → er …' },
      { id: 'pb2-s4', no: 'Har du søsken', en: 'Do you have siblings', level: 'B1', focus: 'uten artikkel', hint: 'No article.' },
      { id: 'pb2-s5', no: 'Mine tre døtre bor i Oslo', en: 'My three daughters live in Oslo', level: 'B1', focus: 'uregelmessig flertall', hint: 'datter → døtre.' },
      { id: 'pb2-s6', no: 'Han har vondt i hodet', en: 'He has a headache', level: 'B1', focus: 'bestemt form', hint: 'vondt i hodet.' },
      { id: 'pb2-s7', no: 'Livet er for kort til dårlig mat', en: 'Life is too short for bad food', level: 'B1', focus: 'bestemt form', hint: 'Livet …' },
    ],
    listening: [
      [
        { q: 'Hvor gammel er bestemora til Markus?', options: ['82 år', '72 år', '92 år', '62 år'], answer: 0 },
        { q: 'Hva spiser de til dessert?', options: ['Jordbær med fløte', 'Is', 'Karamellpudding', 'Eplekake'], answer: 0 },
      ],
      [
        { q: 'Hvor lang bør innledningen være, ifølge læreren?', options: ['Cirka fem setninger', 'Én setning', 'En hel side', 'Tre avsnitt'], answer: 0 },
        { q: 'Hva skal Ling skrive om i leksa?', options: ['Mat og matvaner i Norge og hjemlandet', 'Familien sin', 'Jobben sin', 'Trondheim'], answer: 0 },
      ],
      [
        { q: 'Hvor i Kina kommer skribenten fra?', options: ['Sør-Kina', 'Nord-Kina', 'Beijing', 'Det står ikke'], answer: 0 },
        { q: 'Hva slags mat spiser sønnen i barnehagen?', options: ['Bare norsk mat', 'Bare kinesisk mat', 'Matpakke hjemmefra', 'Ingenting'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb2-o1', type: 'presenter', prompt: 'Snakk i ett minutt om temaet «mat og helse», med innledning, to poeng og avslutning.', hints: ['For det første …', 'For det andre …', 'Alt i alt …'] },
      { id: 'pb2-o2', type: 'beskriv', prompt: 'Beskriv en fest eller et familieselskap i familien din: hvem som kommer, hva dere spiser og gjør.', hints: ['Vanligvis kommer …', 'Vi spiser …'] },
      { id: 'pb2-o3', type: 'sammenlign', prompt: 'Sammenlign hverdagsmiddag og festmat i landet du kommer fra.', hints: ['Til hverdags …, men til fest …'] },
      { id: 'pb2-o4', type: 'mening', prompt: 'Bør familier spise middag sammen hver dag? Begrunn svaret ditt.', hints: ['Jeg mener at …', 'På den andre siden …'] },
      conv('pb2-o5', 'Gjest til middag', 'Du har invitert personen på middag og har laget en norsk rett. Spør om maten, om matvaner i hjemlandet og om hva de liker å lage.', 'Velkommen! Sett deg. Har du smakt fiskesuppe før?', 'Prat om mat og vaner som gjest ved et middagsbord', ['Det smaker …', 'Hos oss …']),
      conv('pb2-o6', 'Uenig om helgen', 'Du er partneren til personen. Du vil besøke svigerfamilien i helgen, men personen har andre planer. Diskuter og finn en løsning.', 'Jeg har lovet mamma at vi kommer på middag på søndag. Det går fint, ikke sant?', 'Forklar planene dine og bli enige om helgen', ['Jeg forstår, men …', 'Hva om vi …?']),
    ],
  },

  'b1-3': {
    quiz: [
      { id: 'pb3-q1', question: 'Ole hjelper kona ___ med jobben.', options: ['si', 'hans', 'sin', 'hennes'], answer: 0, explanation: 'Owner = subject (Ole) + ei kone → si.', level: 'B1', topic: 'eiendomsord' },
      { id: 'pb3-q2', question: 'Anne og broren ___ skal på kino.', options: ['hennes', 'sin', 'seg', 'hans'], answer: 0, explanation: '«sin» cannot be part of the subject.', level: 'B1', topic: 'eiendomsord' },
      { id: 'pb3-q3', question: 'Vi bryr ___ om miljøet.', options: ['oss', 'seg', 'vi', 'våre'], answer: 0, explanation: 'Reflexive for «vi» = oss.', level: 'B1', topic: 'refleksiv' },
      { id: 'pb3-q4', question: '___ huset er solgt. (that)', options: ['Det', 'Den', 'De', 'Dette her'], answer: 0, explanation: 'et hus → det (that).', level: 'B1', topic: 'demonstrativ' },
      { id: 'pb3-q5', question: 'Hun konsentrerer seg ___ jobben.', options: ['om', 'for', 'til', 'av'], answer: 0, explanation: 'å konsentrere seg om.', level: 'B1', topic: 'preposisjoner' },
      { id: 'pb3-q6', question: 'Neutral word order: «our house» = ?', options: ['huset vårt', 'vårt huset', 'hus vårt', 'våre hus'], answer: 0, explanation: 'Definite noun + possessive.', level: 'B1', topic: 'eiendomsord' },
      { id: 'pb3-q7', question: 'Du må skynde ___!', options: ['deg', 'seg', 'du', 'din'], answer: 0, explanation: 'Reflexive for «du» = deg.', level: 'B1', topic: 'refleksiv' },
      { id: 'pb3-q8', question: 'Vi har bestemt oss ___ å reise til Spania.', options: ['for', 'til', 'om', 'på'], answer: 0, explanation: 'å bestemme seg for.', level: 'B1', topic: 'preposisjoner' },
    ],
    sentences: [
      { id: 'pb3-s1', no: 'Hun spiser lunsj med kollegaene sine hver dag', en: 'She eats lunch with her colleagues every day', level: 'B1', focus: 'sin/sine', hint: 'kollegaene sine.' },
      { id: 'pb3-s2', no: 'Vi interesserer oss mye for sport', en: 'We are very interested in sport', level: 'B1', focus: 'refleksive uttrykk', hint: 'interesserer oss for …' },
      { id: 'pb3-s3', no: 'Jobben min består stort sett av møter', en: 'My job mostly consists of meetings', level: 'B1', focus: 'eiendomsord', hint: 'Jobben min …' },
      { id: 'pb3-s4', no: 'Denne helgen har vi ikke tid', en: 'This weekend we don’t have time', level: 'B1', focus: 'demonstrativ + inversjon', hint: 'Denne helgen → har → vi.' },
      { id: 'pb3-s5', no: 'Det kommer an på været', en: 'It depends on the weather', level: 'B1', focus: 'uttrykk', hint: 'Det kommer an på …' },
      { id: 'pb3-s6', no: 'Faren hennes jobber på sykehuset', en: 'Her father works at the hospital', level: 'B1', focus: 'eiendomsord i subjekt', hint: 'Faren hennes …' },
      { id: 'pb3-s7', no: 'De kjeder seg aldri på hytta', en: 'They are never bored at the cabin', level: 'B1', focus: 'refleksiv', hint: 'kjeder seg aldri.' },
    ],
    listening: [
      [
        { q: 'Hva håper Yang å gjøre når forsøkene er ferdige?', options: ['Skrive et sammendrag til en internasjonal konferanse', 'Ta ferie', 'Bytte jobb', 'Reise til Kina'], answer: 0 },
        { q: 'Hvilke klær må man ha på seg på laben?', options: ['Labfrakk og vernebriller', 'Hansker og hjelm', 'Vanlige klær', 'Regntøy'], answer: 0 },
      ],
      [
        { q: 'Hvor jobber Linda?', options: ['I administrasjonen ved instituttet', 'På laben', 'For Rosenborg', 'I kantina'], answer: 0 },
        { q: 'Hvor var Yang forrige helg?', options: ['På Lerkendal med familien', 'På hytta', 'I Oslo', 'Hjemme'], answer: 0 },
      ],
      [
        { q: 'Hvor reiser mange nordmenn om vinteren?', options: ['Til eksotiske reisemål som Thailand og Gran Canaria', 'Til Middelhavet', 'Til fjellet i Norge', 'De reiser ikke'], answer: 0 },
        { q: 'Hva forbinder nordmenn med «Syden»?', options: ['Sol, varme, strender og billig mat og drikke', 'Kulde og snø', 'Storbyer og museer', 'Fjell og fjorder'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb3-o1', type: 'beskriv', prompt: 'Beskriv arbeidsplassen din eller skolen din for en som skal begynne der.', hints: ['Det er …', 'De fleste …', 'Husk å …'] },
      { id: 'pb3-o2', type: 'presenter', prompt: 'Presenter en fritidsaktivitet du anbefaler, og forklar hvorfor.', hints: ['Jeg anbefaler …', 'Det er bra fordi …'] },
      { id: 'pb3-o3', type: 'mening', prompt: 'Er det lurt å bruke ferien på å reise langt, eller å slappe av hjemme? Begrunn.', hints: ['Jeg foretrekker …', 'fordi …'] },
      { id: 'pb3-o4', type: 'fortell', prompt: 'Fortell om en ferie eller tur som ikke gikk som planlagt.', hints: ['Vi skulle …, men …'] },
      conv('pb3-o5', 'Ny kollega i lunsjen', 'Du er en ny kollega. Spør om personens jobb, fritid og tips til arbeidsplassen. Del litt om deg selv også.', 'Hei! Jeg begynte her på mandag. Hvor lenge har du jobbet her?', 'Bli kjent med en ny kollega', ['Jeg har jobbet her i …', 'På fritida …']),
      conv('pb3-o6', 'Melde seg på et kurs', 'Du jobber på en fritidsklubb for voksne. Personen vil melde seg på en aktivitet. Spør om interesser og forklar tider og pris.', 'Hei! Hva slags aktivitet er du interessert i?', 'Finn en aktivitet og meld deg på', ['Jeg er interessert i …', 'Når er …?']),
    ],
  },

  'b1-4': {
    quiz: [
      { id: 'pb4-q1', question: 'Vi bor i et ___ nabolag. (rolig)', options: ['rolig', 'roligt', 'rolige', 'roligere'], answer: 0, explanation: '-ig adjectives take no -t.', level: 'B1', topic: 'adjektiv' },
      { id: 'pb4-q2', question: 'De ___ husene ligger i sentrum. (vakker)', options: ['vakre', 'vakkere', 'vakkre', 'vakker'], answer: 0, explanation: 'Definite/plural: vakker → vakre.', level: 'B1', topic: 'adjektiv' },
      { id: 'pb4-q3', question: 'Comparative of «liten»:', options: ['mindre', 'litenere', 'mer liten', 'minst'], answer: 0, explanation: 'liten – mindre – minst.', level: 'B1', topic: 'komparasjon' },
      { id: 'pb4-q4', question: 'Dette er det ___ rommet. (stor, superlative)', options: ['største', 'størst', 'storeste', 'mest store'], answer: 0, explanation: 'Definite superlative → -e.', level: 'B1', topic: 'komparasjon' },
      { id: 'pb4-q5', question: 'Jo større bolig, ___ høyere strømregning.', options: ['jo', 'enn', 'som', 'desto ikke'], answer: 0, explanation: 'jo …, jo … = the …, the …', level: 'B1', topic: 'sammenligning' },
      { id: 'pb4-q6', question: 'Kjøp ___ grønnsaker på markedet. (fresh)', options: ['ferske', 'friske', 'ferskt', 'frisk'], answer: 0, explanation: 'fresh food → fersk (plural ferske).', level: 'B1', topic: 'ordvalg' },
      { id: 'pb4-q7', question: 'Det er ___ trafikk her i dag. (little, uncountable)', options: ['lite', 'få', 'små', 'mindre enn'], answer: 0, explanation: 'Uncountable → lite.', level: 'B1', topic: 'kvantitet' },
      { id: 'pb4-q8', question: 'Leiligheten er ___ dyr som huset.', options: ['like', 'lik', 'mer', 'samme'], answer: 0, explanation: 'like … som = as … as.', level: 'B1', topic: 'sammenligning' },
    ],
    sentences: [
      { id: 'pb4-s1', no: 'Huset er større men leiligheten er billigere', en: 'The house is bigger but the flat is cheaper', level: 'B1', focus: 'komparativ', hint: 'større … billigere.' },
      { id: 'pb4-s2', no: 'Ulempen med å bo på landet er at alt ligger langt unna', en: 'The disadvantage of living in the country is that everything is far away', level: 'B1', focus: 'ulemper', hint: 'Ulempen med å … er at …' },
      { id: 'pb4-s3', no: 'Jo nærmere sjøen jo dyrere blir boligen', en: 'The closer to the sea the more expensive the home', level: 'B1', focus: 'jo … jo', hint: 'Jo + comparative …' },
      { id: 'pb4-s4', no: 'Den gamle leiligheten har et moderne bad', en: 'The old flat has a modern bathroom', level: 'B1', focus: 'bestemt form', hint: 'Den gamle leiligheten …' },
      { id: 'pb4-s5', no: 'Stua er ikke like stor som kjøkkenet', en: 'The living room is not as big as the kitchen', level: 'B1', focus: 'like … som', hint: 'ikke like … som.' },
      { id: 'pb4-s6', no: 'Vi har få naboer og mye plass', en: 'We have few neighbours and lots of space', level: 'B1', focus: 'kvantitet', hint: 'få … mye …' },
      { id: 'pb4-s7', no: 'Dette er den fineste utsikten jeg har sett', en: 'This is the finest view I have seen', level: 'B1', focus: 'superlativ', hint: 'den fineste + noun.' },
    ],
    listening: [
      [
        { q: 'Hvor mange av personene over 45 år eier bolig?', options: ['Cirka ni av ti', 'Omtrent halvparten', 'Seks av ti', 'Alle'], answer: 0 },
        { q: 'Hvilke faktorer kan påvirke valg av bolig, ifølge teksten?', options: ['Økonomi, arbeidssted, fritidsinteresser og hvor man kommer fra', 'Bare økonomi', 'Bare alder', 'Været'], answer: 0 },
      ],
      [
        { q: 'Hvor mye egenkapital har Elise og Sara?', options: ['250 000 kroner', '3 500 000 kroner', '120 000 kroner', '3 200 000 kroner'], answer: 0 },
        { q: 'Hva har Sara lyst til å gjøre med huset?', options: ['Pusse opp soverommene', 'Bygge garasje', 'Selge det igjen', 'Male fasaden'], answer: 0 },
      ],
      [
        { q: 'Hva er en enebolig?', options: ['Ett hus som ligger for seg selv', 'Et hus med fire leiligheter', 'En hybel i en studentby', 'Et rekkehus'], answer: 0 },
        { q: 'Hva kaller man ei blokk med mer enn fire etasjer?', options: ['Ei høyblokk', 'En bygård', 'Et rekkehus', 'En tomannsbolig'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb4-o1', type: 'beskriv', prompt: 'Beskriv boligen og nabolaget ditt for en som skal leie den mens du er bortreist.', hints: ['Leiligheten har …', 'I nærheten …'] },
      { id: 'pb4-o2', type: 'sammenlign', prompt: 'Sammenlign det å leie og det å eie bolig. Bruk komparativ.', hints: ['billigere', 'tryggere', 'mer fleksibelt'] },
      { id: 'pb4-o3', type: 'mening', prompt: 'Hva er viktigst for en barnefamilie når de velger bolig? Gi minst to argumenter.', hints: ['For det første …', 'For det andre …'] },
      { id: 'pb4-o4', type: 'fortell', prompt: 'Fortell om et sted du har bodd som du likte godt eller ikke likte.', hints: ['Jeg bodde i …', 'Det var …'] },
      conv('pb4-o5', 'Ringe om en leilighet til leie', 'Du er utleier av en leilighet. Personen ringer om annonsen. Svar på spørsmål om størrelse, pris, strøm og når den er ledig. Spør om personen.', 'Hallo, det er Lise.', 'Ring utleieren og få vite det viktigste om leiligheten', ['Jeg ringer angående annonsen', 'Er strøm inkludert?']),
      conv('pb4-o6', 'Felles problem i borettslaget', 'Du er leder i borettslaget. Personen tar opp et problem med søppel og parkering. Spør hva de foreslår.', 'Hei! Du ville snakke med meg om noe i borettslaget?', 'Ta opp et problem og foreslå en løsning', ['Problemet er at …', 'Jeg foreslår at …']),
    ],
  },

  'b1-5': {
    quiz: [
      { id: 'pb5-q1', question: 'Hun sier at hun ___ kan komme.', options: ['ikke', 'kan ikke', 'ikke kan ikke', 'kan'], answer: 0, explanation: 'Subordinate clause: ikke before the verb.', level: 'B1', topic: 'leddsetning' },
      { id: 'pb5-q2', question: 'Jeg forstår ___.', options: ['det ikke', 'ikke det', 'det ikke ikke', 'ikke'], answer: 0, explanation: 'Unstressed pronoun before ikke.', level: 'B1', topic: 'setningsadverb' },
      { id: 'pb5-q3', question: 'Hvis det regner, ___ hjemme.', options: ['blir vi', 'vi blir', 'vi ikke blir', 'blir'], answer: 0, explanation: 'Subordinate clause first → verb next.', level: 'B1', topic: 'ordstilling' },
      { id: 'pb5-q4', question: 'Lærere som ___ tid, er stresset.', options: ['ikke har', 'har ikke', 'har ikke ikke', 'ikke'], answer: 0, explanation: 'som-clause: ikke before the verb.', level: 'B1', topic: 'relativsetning' },
      { id: 'pb5-q5', question: 'Jeg er enig ___ det du sier.', options: ['i', 'med', 'på', 'om'], answer: 0, explanation: 'enig i (a statement).', level: 'B1', topic: 'preposisjoner' },
      { id: 'pb5-q6', question: 'På videregående ___ elevene mellom mange program.', options: ['velger', 'elevene velger', 'velger ikke', 'valgte'], answer: 0, explanation: 'V2: «På videregående» → verb → subject.', level: 'B1', topic: 'V2' },
      { id: 'pb5-q7', question: 'Vi ble enige ___ en løsning.', options: ['om', 'med', 'i', 'til'], answer: 0, explanation: 'enig om = agree on.', level: 'B1', topic: 'preposisjoner' },
      { id: 'pb5-q8', question: 'Han mener ___ skolen er for lang.', options: ['at', 'som', 'om', 'hva'], answer: 0, explanation: 'Reported opinion → at.', level: 'B1', topic: 'leddsetning' },
    ],
    sentences: [
      { id: 'pb5-s1', no: 'Etter min mening burde skoledagen være kortere', en: 'In my opinion the school day should be shorter', level: 'B1', focus: 'mening + V2', hint: 'Etter min mening → burde …' },
      { id: 'pb5-s2', no: 'Mange foreldre mener at lekser ikke hjelper', en: 'Many parents think that homework doesn’t help', level: 'B1', focus: 'at + ikke', hint: 'at + lekser + ikke + verb.' },
      { id: 'pb5-s3', no: 'Hvis du vil studere må du ha studiekompetanse', en: 'If you want to study you must have entrance qualifications', level: 'B1', focus: 'leddsetning først', hint: 'Hvis-clause → må → du.' },
      { id: 'pb5-s4', no: 'Jeg er ikke helt enig med deg', en: 'I don’t quite agree with you', level: 'B1', focus: 'enig med', hint: 'enig med + person.' },
      { id: 'pb5-s5', no: 'Elever som trives lærer mer', en: 'Pupils who are happy learn more', level: 'B1', focus: 'som-setning', hint: 'Elever som … lærer …' },
      { id: 'pb5-s6', no: 'Jeg husker ham ikke så godt', en: 'I don’t remember him very well', level: 'B1', focus: 'setningsadverb', hint: 'pronoun before ikke.' },
      { id: 'pb5-s7', no: 'I Norge går nesten alle barn i barnehage', en: 'In Norway almost all children go to kindergarten', level: 'B1', focus: 'V2', hint: 'I Norge → går …' },
    ],
    listening: [
      [
        { q: 'Hva kan Ding allerede før han begynner på skolen?', options: ['Skrive navnet sitt og telle til ti på norsk', 'Lese bøker', 'Snakke engelsk', 'Regne gangestykker'], answer: 0 },
        { q: 'Hva er Ling bekymret for på slutten?', options: ['At de begrenser mulighetene hans senere, for eksempel hvis de flytter til England', 'At skolen er for dyr', 'At Ding ikke får venner', 'At skolen ligger for nær'], answer: 0 },
      ],
      [
        { q: 'Hvordan kom Andreas seg til skolen på barneskolen?', options: ['Han syklet sammen med en nabogutt', 'Han tok bussen', 'Foreldrene kjørte ham', 'Han gikk alene'], answer: 0 },
        { q: 'Hvilket karaktersnitt trengte han for å komme inn på medisin?', options: ['Over 5', 'Over 4', 'Over 3', 'Han trengte ikke karakterer'], answer: 0 },
      ],
      [
        { q: 'Når begynner barna i første trinn?', options: ['Det året de fyller seks år', 'Når de er sju år', 'Når de er fem år', 'Etter barnehagen, når foreldrene vil'], answer: 0 },
        { q: 'Hva må studentene betale selv, selv om utdanningen i prinsippet er gratis?', options: ['Semesteravgift, læringsmateriell og leve- og bokostnader', 'Skolepenger', 'Ingenting', 'Bare bøker'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'pb5-o1', type: 'presenter', prompt: 'Forklar det norske skolesystemet for en familie som nettopp har flyttet til Norge.', hints: ['Først går barna i …', 'Etter grunnskolen …'] },
      { id: 'pb5-o2', type: 'mening', prompt: 'Bør barn få karakterer på barneskolen? Gi argumenter for og mot.', hints: ['På den ene siden …', 'På den andre siden …'] },
      { id: 'pb5-o3', type: 'sammenlign', prompt: 'Sammenlign lærerne og undervisningen da du gikk på skolen med skolen i Norge i dag.', hints: ['strengere', 'mer … enn', 'mens'] },
      { id: 'pb5-o4', type: 'fortell', prompt: 'Fortell om et viktig valg du har tatt om utdanning eller jobb.', hints: ['Jeg valgte …', 'fordi …'] },
      conv('pb5-o5', 'Foreldremøte', 'Du er lærer på foreldremøte og vil høre forelderens mening om lekser og skjermbruk. Still spørsmål og vær litt uenig.', 'Vi lurer på hva foreldrene mener om lekser. Hva tenker du?', 'Si meningen din om lekser og skole og begrunn den', ['Jeg synes at …', 'Det er et godt poeng, men …']),
      conv('pb5-o6', 'Diskusjon: gratis studier', 'Du mener at studenter burde betale litt for høyere utdanning. Diskuter høflig med personen.', 'Jeg synes ikke det er rettferdig at alle skal få studere gratis. Hva mener du?', 'Delta i en diskusjon og forsvar meningen din', ['Jeg er uenig fordi …', 'Det kommer an på …']),
    ],
  },
}
