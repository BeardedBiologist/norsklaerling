import type { ChapterTestBank } from '../../types'

/**
 * Kapittelprøve banks for Nybegynnerkurs chapters 1–6. Same content as the
 * chapters, but no item is reused from practice. Listening questions are
 * answerable from the recordings alone.
 */
export const testsNybegynner1: Record<string, ChapterTestBank> = {
  '1': {
    quiz: [
      { id: 'p01-q1', question: '___ bor du? — I Trondheim.', options: ['Hvor', 'Hva', 'Hvem', 'Når'], answer: 0, explanation: 'hvor = where.', level: 'A1', topic: 'spørreord' },
      { id: 'p01-q2', question: 'Turn into a question: «Du heter Ola.»', options: ['Heter du Ola?', 'Du heter Ola?', 'Ola heter du?', 'Heter Ola du?'], answer: 0, explanation: 'Yes/no questions start with the verb.', level: 'A1', topic: 'ordstilling' },
      { id: 'p01-q3', question: 'Han kommer fra Polen. Han er ___.', options: ['polsk', 'Polsk', 'polen', 'polske'], answer: 0, explanation: 'Nationality adjectives have a small letter.', level: 'A1', topic: 'nasjonalitet' },
      { id: 'p01-q4', question: 'Hun ___ fra Spania.', options: ['kommer', 'komme', 'kommerer', 'å komme'], answer: 0, explanation: 'Present tense: infinitive + r, same for all persons.', level: 'A1', topic: 'verb' },
      { id: 'p01-q5', question: 'Which question asks for a name?', options: ['Hva heter du?', 'Hvor heter du?', 'Hvem heter du?', 'Når heter du?'], answer: 0, explanation: 'Norwegian asks «what are you called».', level: 'A1', topic: 'spørreord' },
      { id: 'p01-q6', question: 'The language spoken in Germany is …', options: ['tysk', 'Tyskland', 'tyske', 'Tysk'], answer: 0, explanation: 'Tyskland → tysk (small letter).', level: 'A1', topic: 'nasjonalitet' },
      { id: 'p01-q7', question: 'Choose the correct word order:', options: ['Jeg bor i Bergen.', 'Bor jeg i Bergen.', 'I Bergen jeg bor.', 'Jeg i Bergen bor.'], answer: 0, explanation: 'A statement: subject + verb + the rest.', level: 'A1', topic: 'ordstilling' },
      { id: 'p01-q8', question: '«Hyggelig å hilse på deg» means …', options: ['Nice to meet you', 'See you soon', 'Thank you', 'How are you?'], answer: 0, explanation: 'Said when you meet someone for the first time.', level: 'A1', topic: 'hilsener' },
    ],
    sentences: [
      { id: 'p01-s1', no: 'Jeg kommer fra Polen', en: 'I come from Poland', level: 'A1', focus: 'subjekt + verb', hint: 'jeg + verb + fra …' },
      { id: 'p01-s2', no: 'Hvor bor du', en: 'Where do you live', level: 'A1', focus: 'spørreord', hint: 'Question word, verb, subject.' },
      { id: 'p01-s3', no: 'Hun heter Maria', en: 'Her name is Maria', level: 'A1', focus: 'subjekt + verb', hint: 'Subject first.' },
      { id: 'p01-s4', no: 'Kommer du fra Norge', en: 'Do you come from Norway', level: 'A1', focus: 'ja/nei-spørsmål', hint: 'Start with the verb.' },
      { id: 'p01-s5', no: 'Vi snakker engelsk og norsk', en: 'We speak English and Norwegian', level: 'A1', focus: 'subjekt + verb', hint: 'vi + verb.' },
      { id: 'p01-s6', no: 'Hva heter læreren', en: 'What is the teacher called', level: 'A1', focus: 'spørreord', hint: 'Hva + verb + subject.' },
      { id: 'p01-s7', no: 'Han bor i Oslo', en: 'He lives in Oslo', level: 'A1', focus: 'subjekt + verb', hint: 'han + bor + i …' },
    ],
    listening: [
      [
        { q: 'Hvordan hilser Alex?', en: 'How does Alex greet you?', options: ['Hei!', 'God dag!', 'Hallo!', 'God morgen!'], answer: 0 },
        { q: 'Hva forteller Alex om seg selv?', en: 'What does Alex tell you about himself?', options: ['Navnet sitt', 'Hvor han bor', 'Hvor gammel han er', 'Hva han liker'], answer: 0 },
      ],
      [
        { q: 'Hvordan hilser Benjamin?', en: 'How does Benjamin greet you?', options: ['God dag!', 'Hei!', 'Hallo!', 'God kveld!'], answer: 0 },
        { q: 'Hva er etternavnet hans?', en: 'What is his surname?', options: ['Vidal', 'Hansen', 'Olsen', 'Benjamin'], answer: 0 },
      ],
      [
        { q: 'Hvordan hilser Cecilie?', en: 'How does Cecilie greet you?', options: ['Hallo!', 'Hei!', 'God dag!', 'God morgen!'], answer: 0 },
        { q: 'Hva er hele navnet hennes?', en: 'What is her full name?', options: ['Cecilie Hansen Vidal', 'Cecilie Olsen', 'Cecilie Vidal Hansen', 'Cecilie Hansen'], answer: 0 },
      ],
      [
        { q: 'Hva heter hun?', en: 'What is her name?', options: ['Dina', 'Cecilie', 'Emma', 'Anna'], answer: 0 },
        { q: 'Hvordan hilser Dina?', en: 'How does Dina greet you?', options: ['Hei!', 'God dag!', 'Hallo!', 'Takk!'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p01-o1', type: 'presenter', prompt: 'Presenter deg selv for en ny kollega: navn, land og hvor du bor.', en: 'Introduce yourself to a new colleague.', hints: ['Jeg heter …', 'Jeg kommer fra …'] },
      { id: 'p01-o2', type: 'svar', prompt: 'Hvilke språk snakker du, og hvor bor familien din?', en: 'Which languages do you speak, and where does your family live?', hints: ['Jeg snakker …', 'Familien min bor i …'] },
    ],
  },

  '2': {
    quiz: [
      { id: 'p02-q1', question: 'Hun ___ ikke kaffe.', options: ['drikker', 'drikke', 'å drikke', 'drakk ikke'], answer: 0, explanation: 'Present tense = infinitive + r.', level: 'A1', topic: 'verb' },
      { id: 'p02-q2', question: 'Correct placement of «ikke»: «Vi ___ ___ i dag.» (jobber, ikke)', options: ['jobber ikke', 'ikke jobber', 'jobber i dag ikke', 'ikke i dag'], answer: 0, explanation: '«ikke» right after the verb in a main clause.', level: 'A1', topic: 'negasjon' },
      { id: 'p02-q3', question: 'Hun er ___ (nurse).', options: ['sykepleier', 'en sykepleier', 'ei sykepleier', 'sykepleieren'], answer: 0, explanation: 'No article with professions.', level: 'A1', topic: 'substantiv' },
      { id: 'p02-q4', question: 'Flyet lander ___ Gardermoen.', options: ['på', 'i', 'til', 'fra'], answer: 0, explanation: 'på Gardermoen (airports and many places take «på»).', level: 'A1', topic: 'preposisjoner' },
      { id: 'p02-q5', question: '«they» in Norwegian is …', options: ['de', 'dere', 'dem', 'du'], answer: 0, explanation: 'de = they (subject).', level: 'A1', topic: 'pronomen' },
      { id: 'p02-q6', question: 'Present tense of «å gjøre»:', options: ['gjør', 'gjører', 'gjorde', 'gjøre'], answer: 0, explanation: 'Irregular: jeg gjør.', level: 'A1', topic: 'verb' },
      { id: 'p02-q7', question: '«Han ligger og sover» means …', options: ['He is sleeping.', 'He lies, then sleeps.', 'He slept.', 'He wants to sleep.'], answer: 0, explanation: 'ligger/sitter/står og + verb = ongoing activity.', level: 'A1', topic: 'verb' },
      { id: 'p02-q8', question: 'Jeg er trøtt, ___ jeg er glad.', options: ['men', 'og så', 'eller', 'fordi'], answer: 0, explanation: 'men = but.', level: 'A1', topic: 'konjunksjoner' },
    ],
    sentences: [
      { id: 'p02-s1', no: 'Vi snakker ikke fransk', en: 'We don’t speak French', level: 'A1', focus: 'ikke etter verbet', hint: 'verb + ikke.' },
      { id: 'p02-s2', no: 'Hun sitter og leser avisa', en: 'She is reading the newspaper', level: 'A1', focus: 'sitter og + verb', hint: 'sitter og leser …' },
      { id: 'p02-s3', no: 'Han er lege i Oslo', en: 'He is a doctor in Oslo', level: 'A1', focus: 'yrke uten artikkel', hint: 'No article before the job.' },
      { id: 'p02-s4', no: 'Er du ikke trøtt', en: 'Aren’t you tired', level: 'A1', focus: 'ikke i spørsmål', hint: 'verb + subject + ikke.' },
      { id: 'p02-s5', no: 'De bor i Bergen men jobber i Oslo', en: 'They live in Bergen but work in Oslo', level: 'A1', focus: 'men', hint: 'Two parts joined with men.' },
      { id: 'p02-s6', no: 'Jeg venter på bussen', en: 'I am waiting for the bus', level: 'A1', focus: 'presens', hint: 'jeg + venter + på …' },
      { id: 'p02-s7', no: 'Dere snakker godt norsk', en: 'You speak good Norwegian', level: 'A1', focus: 'pronomen', hint: 'dere + verb.' },
    ],
    listening: [
      [
        { q: 'Hvor gammel er Alex?', en: 'How old is Alex?', options: ['Fem år', 'Fjorten år', 'Seks år', 'Fire år'], answer: 0 },
        { q: 'Hvem reiser Alex sammen med?', en: 'Who is Alex travelling with?', options: ['Mamma og Dina', 'Pappa og Dina', 'Bare mamma', 'Emma'], answer: 0 },
      ],
      [
        { q: 'Hvem venter Benjamin på?', en: 'Who is Benjamin waiting for?', options: ['Cecilie, Dina og Alex', 'Ola', 'En kollega', 'Mormor'], answer: 0 },
        { q: 'Hvorfor er Ola på Gardermoen?', en: 'Why is Ola at the airport?', options: ['Han venter også på et fly', 'Han jobber der', 'Han skal til Paris', 'Han henter Ben'], answer: 0 },
      ],
      [
        { q: 'Hvor gammel er Cecilie?', en: 'How old is Cecilie?', options: ['Trettiåtte år', 'Førti år', 'Fjorten år', 'Femti år'], answer: 0 },
        { q: 'Hvor gammel er Dina?', en: 'How old is Dina?', options: ['Fjorten år', 'Fem år', 'Tolv år', 'Seksten år'], answer: 0 },
      ],
      [
        { q: 'Hvem er trøtte etter reisen?', en: 'Who is tired after the trip?', options: ['Dina og Alex', 'Bare pappa', 'Mamma og pappa', 'Ingen'], answer: 0 },
        { q: 'Hvor kjører familien?', en: 'Where does the family drive?', options: ['Til Fjordvik', 'Til Oslo', 'Til Paris', 'Til Gardermoen'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p02-o1', type: 'beskriv', prompt: 'Hva gjør du og familien din akkurat nå? Bruk «sitter og», «står og» eller «ligger og».', en: 'What are you and your family doing right now?', hints: ['Jeg sitter og …', 'Barna ligger og …'] },
      { id: 'p02-o2', type: 'svar', prompt: 'Si tre ting du gjør og tre ting du ikke gjør i helgen.', en: 'Say three things you do and three you don’t do at the weekend.', hints: ['Jeg … ikke …'] },
    ],
  },

  '3': {
    quiz: [
      { id: 'p03-q1', question: 'Hun må ___ hjem nå.', options: ['gå', 'å gå', 'går', 'gikk'], answer: 0, explanation: 'After a modal verb: infinitive without «å».', level: 'A1', topic: 'modalverb' },
      { id: 'p03-q2', question: 'en stol → the chair = ?', options: ['stolen', 'stolet', 'stola', 'den stol'], answer: 0, explanation: 'Masculine nouns take -en.', level: 'A1', topic: 'substantiv' },
      { id: 'p03-q3', question: 'Plural: to ___ (et bord).', options: ['bord', 'border', 'bordene', 'bordet'], answer: 0, explanation: 'One-syllable et-words: no ending in indefinite plural.', level: 'A1', topic: 'substantiv' },
      { id: 'p03-q4', question: 'Huset er gammelt, men ___ er fint.', options: ['det', 'den', 'han', 'dem'], answer: 0, explanation: 'et hus → det.', level: 'A1', topic: 'pronomen' },
      { id: 'p03-q5', question: 'Vi besøker ___ i morgen. (them)', options: ['dem', 'de', 'deres', 'seg'], answer: 0, explanation: 'Object form: de → dem.', level: 'A1', topic: 'pronomen' },
      { id: 'p03-q6', question: 'Mamma’s car = ?', options: ['mammas bil', 'mamma’s bil', 'bil mammas', 'mamma bil'], answer: 0, explanation: '-s with no apostrophe.', level: 'A1', topic: 'genitiv' },
      { id: 'p03-q7', question: 'ei dør → the door = ?', options: ['døra', 'døret', 'dørene', 'den dør'], answer: 0, explanation: 'Feminine -a (døren also allowed).', level: 'A1', topic: 'substantiv' },
      { id: 'p03-q8', question: 'Plural of «et barn» (the children):', options: ['barna', 'barnene', 'barner', 'barnet'], answer: 0, explanation: 'et barn – barnet – barn – barna.', level: 'A1', topic: 'substantiv' },
    ],
    sentences: [
      { id: 'p03-s1', no: 'Vi må kjøpe en ny sofa', en: 'We have to buy a new sofa', level: 'A1', focus: 'modalverb', hint: 'må + infinitive.' },
      { id: 'p03-s2', no: 'Kjøleskapet står på kjøkkenet', en: 'The fridge is in the kitchen', level: 'A1', focus: 'bestemt form', hint: 'Both nouns definite.' },
      { id: 'p03-s3', no: 'Kan du ringe meg i kveld', en: 'Can you call me tonight', level: 'A1', focus: 'objektsform', hint: 'Object pronoun after the verb.' },
      { id: 'p03-s4', no: 'Det står en lampe i hjørnet', en: 'There is a lamp in the corner', level: 'A1', focus: 'det står', hint: 'Start with «Det står».' },
      { id: 'p03-s5', no: 'Huset har tre soverom', en: 'The house has three bedrooms', level: 'A1', focus: 'flertall', hint: 'rom → rom (plural).' },
      { id: 'p03-s6', no: 'Barna vil spise nå', en: 'The children want to eat now', level: 'A1', focus: 'modalverb', hint: 'vil + infinitive.' },
      { id: 'p03-s7', no: 'Dette er Dinas rom', en: 'This is Dina’s room', level: 'A1', focus: 'genitiv', hint: 'Dinas + noun.' },
    ],
    listening: [
      [
        { q: 'Hvor skal Alex gå nå som de bor i Norge?', en: 'Where will Alex go now they live in Norway?', options: ['I barnehagen', 'På skolen', 'På jobb', 'På kurs'], answer: 0 },
        { q: 'Hva gjør familien til frokost?', en: 'What does the family do at breakfast?', options: ['De sitter rundt bordet og spiser sammen', 'De spiser i bilen', 'De spiser på kafé', 'De hopper over frokosten'], answer: 0 },
      ],
      [
        { q: 'Hva har familien i huset før flyttebilen kommer?', en: 'What does the family have before the van arrives?', options: ['Fire madrasser, fire stoler og ett bord', 'Ingenting', 'Alle møblene', 'En sofa og en TV'], answer: 0 },
        { q: 'Hvem bor naboen Hans sammen med?', en: 'Who does neighbour Hans live with?', options: ['Anne', 'Cecilie', 'Ola', 'Dina'], answer: 0 },
      ],
      [
        { q: 'Hva står i hjørnet på kjøkkenet?', en: 'What stands in the corner of the kitchen?', options: ['Et kjøleskap', 'En sofa', 'En vaskemaskin', 'En TV'], answer: 0 },
        { q: 'Hvor står bilen?', en: 'Where is the car?', options: ['I garasjen', 'Foran huset', 'Hos mormor', 'På gata'], answer: 0 },
      ],
      [
        { q: 'Hva står mellom døra og senga?', en: 'What is between the door and the bed?', options: ['Et klesskap', 'En kommode', 'Et skrivebord', 'En lenestol'], answer: 0 },
        { q: 'Hva gjør Dina foran speilet?', en: 'What does Dina do in front of the mirror?', options: ['Ordner håret og tar på sminke', 'Pusser tennene', 'Prøver nye sko', 'Ringer en venninne'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p03-o1', type: 'beskriv', prompt: 'Beskriv stua di: hva står der, og hvor står det?', en: 'Describe your living room.', hints: ['Det står en sofa …', 'ved siden av'] },
      { id: 'p03-o2', type: 'svar', prompt: 'Hva må du, vil du og skal du gjøre denne uka?', en: 'What must, will and are you going to do this week?', hints: ['Jeg må …', 'Jeg vil …', 'Jeg skal …'] },
    ],
  },

  '4': {
    quiz: [
      { id: 'p04-q1', question: 'Imperative of «å lese»:', options: ['Les!', 'Lese!', 'Leser!', 'Å les!'], answer: 0, explanation: 'Drop the final -e.', level: 'A1', topic: 'imperativ' },
      { id: 'p04-q2', question: '___ bil er din? (en bil)', options: ['Hvilken', 'Hvilket', 'Hvilke', 'Hva'], answer: 0, explanation: 'en bil → hvilken.', level: 'A1', topic: 'spørreord' },
      { id: 'p04-q3', question: '«Halv ni» is …', options: ['8.30', '9.30', '8.45', '9.15'], answer: 0, explanation: 'Half (way) to nine.', level: 'A1', topic: 'klokka' },
      { id: 'p04-q4', question: '6.15 in Norwegian:', options: ['kvart over seks', 'kvart på seks', 'halv sju', 'kvart på sju'], answer: 0, explanation: 'Quarter past six.', level: 'A1', topic: 'klokka' },
      { id: 'p04-q5', question: 'Negative imperative: «Don’t run!»', options: ['Ikke løp!', 'Løp ikke!', 'Ikke løpe!', 'Ikke løper!'], answer: 0, explanation: 'Ikke + imperative.', level: 'A1', topic: 'imperativ' },
      { id: 'p04-q6', question: '___ bøker liker du? (plural)', options: ['Hvilke', 'Hvilken', 'Hvilket', 'Hvem'], answer: 0, explanation: 'Plural → hvilke.', level: 'A1', topic: 'spørreord' },
      { id: 'p04-q7', question: 'Hun bor ___ mormor nå.', options: ['hos', 'på', 'til', 'med'], answer: 0, explanation: 'hos + person = at someone’s place.', level: 'A1', topic: 'preposisjoner' },
      { id: 'p04-q8', question: '«ti på halv fire» is …', options: ['3.20', '4.20', '3.40', '2.50'], answer: 0, explanation: 'Ten to half-past-three = 3.20.', level: 'A1', topic: 'klokka' },
    ],
    sentences: [
      { id: 'p04-s1', no: 'Gå rett fram og ta til høyre', en: 'Go straight ahead and turn right', level: 'A1', focus: 'imperativ', hint: 'Two imperatives.' },
      { id: 'p04-s2', no: 'Hvilket hus bor dere i', en: 'Which house do you live in', level: 'A1', focus: 'hvilket', hint: 'Hvilket + noun + verb.' },
      { id: 'p04-s3', no: 'Klokka er halv åtte', en: 'It is half past seven', level: 'A1', focus: 'klokka', hint: 'halv åtte = 7.30.' },
      { id: 'p04-s4', no: 'Ikke glem nøklene dine', en: 'Don’t forget your keys', level: 'A1', focus: 'imperativ + ikke', hint: 'Start with Ikke.' },
      { id: 'p04-s5', no: 'Vi spiser frokost klokka sju', en: 'We eat breakfast at seven', level: 'A1', focus: 'klokka', hint: '… klokka sju.' },
      { id: 'p04-s6', no: 'Kom inn og sett deg', en: 'Come in and sit down', level: 'A1', focus: 'imperativ', hint: 'Kom … sett deg.' },
      { id: 'p04-s7', no: 'Skolen ligger ved siden av kirka', en: 'The school is next to the church', level: 'A1', focus: 'preposisjoner', hint: 'ved siden av.' },
    ],
    listening: [
      [
        { q: 'Hvem står og venter på trappa?', en: 'Who is waiting on the steps?', options: ['Mormor', 'Morfar', 'Pappa', 'Dina'], answer: 0 },
        { q: 'Hva drikker de voksne mens de spiser is?', en: 'What do the adults drink while eating ice cream?', options: ['Kaffe', 'Te', 'Brus', 'Melk'], answer: 0 },
      ],
      [
        { q: 'Når spiser Ben frokost?', en: 'When does Ben eat breakfast?', options: ['Klokka sju', 'Halv sju', 'Klokka åtte', 'Kvart over sju'], answer: 0 },
        { q: 'Hvem treffer Ben utenfor huset?', en: 'Who does Ben meet outside the house?', options: ['Naboen Hans', 'Anne', 'Sjefen', 'Mormor'], answer: 0 },
      ],
      [
        { q: 'Hvorfor må pakken sendes nå?', en: 'Why must the parcel be sent now?', options: ['Bens mor har snart fødselsdag', 'Det er jul', 'Posten stenger', 'Den er til Dina'], answer: 0 },
        { q: 'Hvor ligger Matbua?', en: 'Where is Matbua?', options: ['Ved lyskrysset ved bensinstasjonen', 'I sentrum', 'Ved skolen', 'Ved kirka'], answer: 0 },
      ],
      [
        { q: 'Hvorfor kan ikke pappa vise Dina veien i kveld?', en: 'Why can’t dad show Dina the way tonight?', options: ['Han skal lese for Alex og se fotball', 'Han er på jobb', 'Det regner', 'Bilen er borte'], answer: 0 },
        { q: 'Hvor langt er det å gå til skolen?', en: 'How far is it to walk to school?', options: ['Cirka en kilometer', 'Ti kilometer', 'Hundre meter', 'Fem kilometer'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p04-o1', type: 'beskriv', prompt: 'Forklar veien fra huset ditt til nærmeste busstopp.', en: 'Explain the way from your home to the nearest bus stop.', hints: ['Gå rett fram', 'Ta til høyre'] },
      { id: 'p04-o2', type: 'fortell', prompt: 'Fortell hva du gjør om morgenen, med klokkeslett.', en: 'Tell what you do in the morning, with times.', hints: ['Klokka halv sju …'] },
    ],
  },

  '5': {
    quiz: [
      { id: 'p05-q1', question: 'Vi koser ___ på hytta.', options: ['oss', 'seg', 'vi', 'dere'], answer: 0, explanation: 'Reflexive for «vi» = oss.', level: 'A1', topic: 'refleksiv' },
      { id: 'p05-q2', question: 'Det er et ___ eple. (rød)', options: ['rødt', 'rød', 'røde', 'rødet'], answer: 0, explanation: 'et-word → -t.', level: 'A1', topic: 'adjektiv' },
      { id: 'p05-q3', question: 'Eplene er ___. (søt)', options: ['søte', 'søt', 'søtt', 'søtene'], answer: 0, explanation: 'Plural → -e.', level: 'A1', topic: 'adjektiv' },
      { id: 'p05-q4', question: 'Barna er ___. (at home)', options: ['hjemme', 'hjem', 'hjemmet', 'til hjemme'], answer: 0, explanation: 'No movement → hjemme.', level: 'A1', topic: 'adverb' },
      { id: 'p05-q5', question: 'De gleder ___ til ferien.', options: ['seg', 'dem', 'de', 'sin'], answer: 0, explanation: '3rd person reflexive = seg.', level: 'A1', topic: 'refleksiv' },
      { id: 'p05-q6', question: 'Hun har et ___ rom. (koselig)', options: ['koselig', 'koseligt', 'koselige', 'koseligs'], answer: 0, explanation: '-ig adjectives take no -t.', level: 'A1', topic: 'adjektiv' },
      { id: 'p05-q7', question: 'Jeg går ___ butikken nå. (to)', options: ['til', 'hos', 'på', 'i'], answer: 0, explanation: 'Direction → til.', level: 'A1', topic: 'preposisjoner' },
      { id: 'p05-q8', question: 'Kom ___! (come out)', options: ['ut', 'ute', 'utenfor', 'uten'], answer: 0, explanation: 'Movement → ut.', level: 'A1', topic: 'adverb' },
    ],
    sentences: [
      { id: 'p05-s1', no: 'Hun gleder seg til sommeren', en: 'She is looking forward to the summer', level: 'A1', focus: 'refleksive verb', hint: 'glede + seg + til.' },
      { id: 'p05-s2', no: 'Vi har et lite hus og en stor hage', en: 'We have a small house and a big garden', level: 'A1', focus: 'adjektiv', hint: 'et lite … en stor …' },
      { id: 'p05-s3', no: 'Brødet er ferskt', en: 'The bread is fresh', level: 'A1', focus: 'adjektiv -t', hint: 'et brød → ferskt.' },
      { id: 'p05-s4', no: 'Katten sitter ute på trappa', en: 'The cat is sitting outside on the steps', level: 'A1', focus: 'ute/ut', hint: 'No movement → ute.' },
      { id: 'p05-s5', no: 'Sett deg ved bordet', en: 'Sit down at the table', level: 'A1', focus: 'refleksiv', hint: 'Sett deg …' },
      { id: 'p05-s6', no: 'Vi kjøper to kilo poteter', en: 'We are buying two kilos of potatoes', level: 'A1', focus: 'handle', hint: 'to kilo + noun.' },
      { id: 'p05-s7', no: 'Jentene koser seg på rommet', en: 'The girls are having a good time in the room', level: 'A1', focus: 'refleksiv', hint: 'koser + seg.' },
    ],
    listening: [
      [
        { q: 'Hva drikker mamma?', en: 'What does mum drink?', options: ['En kopp te', 'Kaffe', 'Melk', 'Brus'], answer: 0 },
        { q: 'Hvorfor kan ikke katten komme inn?', en: 'Why can’t the cat come in?', options: ['Den er ikke deres', 'Den er syk', 'Pappa er allergisk', 'Den er for stor'], answer: 0 },
      ],
      [
        { q: 'Hvor ligger kantina?', en: 'Where is the canteen?', options: ['I andre etasje', 'I første etasje', 'I kjelleren', 'I et annet bygg'], answer: 0 },
        { q: 'Hvilke lag liker Ben?', en: 'Which teams does Ben like?', options: ['Franske og spanske lag', 'Engelske lag', 'Norske lag', 'Svenske lag'], answer: 0 },
      ],
      [
        { q: 'Hva vil Alex ha på brødskivene?', en: 'What does Alex want on his bread?', options: ['Fransk ost, skinke og syltetøy', 'Salami', 'Laks', 'Bare smør'], answer: 0 },
        { q: 'Hva jobber Cecilie som?', en: 'What does Cecilie work as?', options: ['Sykepleier', 'Lege', 'Lærer', 'Ingeniør'], answer: 0 },
      ],
      [
        { q: 'Hva heter venninnene?', en: 'What are the friends called?', options: ['Eva og Tone', 'Emma og Anne', 'Ida og Sara', 'Kari og Nina'], answer: 0 },
        { q: 'Hvilken farge har lenestolen?', en: 'What colour is the armchair?', options: ['Blå', 'Rød', 'Grønn', 'Brun'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p05-o1', type: 'beskriv', prompt: 'Beskriv tre ting du kjøper i butikken hver uke, med adjektiver.', en: 'Describe three things you buy every week, with adjectives.', hints: ['et grovt brød', 'ferske epler'] },
      { id: 'p05-o2', type: 'svar', prompt: 'Hva gleder du deg til, og hvordan koser du deg i helgen?', en: 'What are you looking forward to, and how do you relax at the weekend?', hints: ['Jeg gleder meg til …', 'Jeg koser meg med …'] },
    ],
  },

  '6': {
    quiz: [
      { id: 'p06-q1', question: '___ skoene er nye. (these)', options: ['Disse', 'Denne', 'Dette', 'De her'], answer: 0, explanation: 'Plural → disse.', level: 'A1', topic: 'demonstrativ' },
      { id: 'p06-q2', question: 'Vi begynner ___ spise.', options: ['å', '—', 'og', 'til'], answer: 0, explanation: '«begynne» is not a modal → å + infinitive.', level: 'A1', topic: 'infinitiv' },
      { id: 'p06-q3', question: 'Det ___ huset er vårt. (hvit)', options: ['hvite', 'hvit', 'hvitt', 'hvites'], answer: 0, explanation: 'Definite form → -e.', level: 'A1', topic: 'adjektiv' },
      { id: 'p06-q4', question: 'Hun har ei ___ veske. (liten)', options: ['lita', 'liten', 'lite', 'lille'], answer: 0, explanation: 'ei-word → lita.', level: 'A1', topic: 'adjektiv' },
      { id: 'p06-q5', question: '«Vi må hjem nå» means …', options: ['We have to go home now.', 'We must be at home.', 'We have a home now.', 'We live here now.'], answer: 0, explanation: 'Modal + direction: the movement verb is understood.', level: 'A1', topic: 'modalverb' },
      { id: 'p06-q6', question: '___ jakka er dyr. (this, ei jakke)', options: ['Denne', 'Dette', 'Disse', 'Den her'], answer: 0, explanation: 'en/ei-word → denne.', level: 'A1', topic: 'demonstrativ' },
      { id: 'p06-q7', question: 'Den ___ gutten heter Alex. (liten)', options: ['lille', 'lite', 'liten', 'små'], answer: 0, explanation: 'Definite singular of liten = lille.', level: 'A1', topic: 'adjektiv' },
      { id: 'p06-q8', question: 'Har du en ___ farge? (other)', options: ['annen', 'annet', 'andre', 'anna'], answer: 0, explanation: 'en farge → en annen.', level: 'A1', topic: 'adjektiv' },
    ],
    sentences: [
      { id: 'p06-s1', no: 'Dette brødet er veldig godt', en: 'This bread is very good', level: 'A1', focus: 'demonstrativ', hint: 'dette + definite noun.' },
      { id: 'p06-s2', no: 'Den blå jakka er for liten', en: 'The blue jacket is too small', level: 'A1', focus: 'dobbel bestemmelse', hint: 'den + adjective + noun-a.' },
      { id: 'p06-s3', no: 'Jeg skal ha en te og en bolle', en: 'I’ll have a tea and a bun', level: 'A1', focus: 'bestille', hint: 'Jeg skal ha …' },
      { id: 'p06-s4', no: 'Hun liker å gå i byen', en: 'She likes going into town', level: 'A1', focus: 'å + infinitiv', hint: 'liker å …' },
      { id: 'p06-s5', no: 'Vi skal til byen på lørdag', en: 'We are going to town on Saturday', level: 'A1', focus: 'modal uten hovedverb', hint: 'skal + til byen.' },
      { id: 'p06-s6', no: 'De små barna sover', en: 'The small children are asleep', level: 'A1', focus: 'liten/små', hint: 'De små + noun.' },
      { id: 'p06-s7', no: 'Har dere denne i en annen størrelse', en: 'Do you have this in another size', level: 'A1', focus: 'demonstrativ', hint: 'Har dere denne …' },
    ],
    listening: [
      [
        { q: 'Hva gjør pappa på badet?', en: 'What does dad do in the bathroom?', options: ['Vasker seg og barberer seg', 'Dusjer Dina', 'Pusser tennene til Alex', 'Ingenting'], answer: 0 },
        { q: 'Hva skal pappa og Alex kjøpe etter frokost?', en: 'What will dad and Alex buy after breakfast?', options: ['En TV', 'Klær', 'Mat', 'En sykkel'], answer: 0 },
      ],
      [
        { q: 'Hvor parkerer Ben og Alex?', en: 'Where do Ben and Alex park?', options: ['I ei lita gate', 'Ved torget', 'I et parkeringshus', 'Utenfor apoteket'], answer: 0 },
        { q: 'Hva er det rundt torget?', en: 'What is around the square?', options: ['Små kafeer, butikker, en bank og et apotek', 'Bare hus', 'En stor park', 'En skole'], answer: 0 },
      ],
      [
        { q: 'Hvor mye koster skoene med rabatt?', en: 'How much are the shoes with the discount?', options: ['489 kroner', '699 kroner', '500 kroner', '300 kroner'], answer: 0 },
        { q: 'Hvorfor kjøper hun ikke noe i klesbutikken?', en: 'Why doesn’t she buy anything in the clothes shop?', options: ['Klærne er dyre, og de må tilbake', 'Butikken stenger', 'Dina vil gå', 'Hun finner ikke størrelse'], answer: 0 },
      ],
      [
        { q: 'Hva vil Alex ha på kafeen?', en: 'What does Alex want at the café?', options: ['Brus og is', 'Kaffe og kake', 'Te', 'Sjokoladekake'], answer: 0 },
        { q: 'Hvor sitter familien?', en: 'Where does the family sit?', options: ['Ved vinduet', 'Ute', 'Ved disken', 'I andre etasje'], answer: 0 },
      ],
    ],
    oral: [
      { id: 'p06-o1', type: 'beskriv', prompt: 'Beskriv klærne til en person du ser for deg. Bruk «den», «det» og farger.', en: 'Describe someone’s clothes using colours and definite forms.', hints: ['den blå jakka', 'det svarte skjerfet'] },
      { id: 'p06-o2', type: 'svar', prompt: 'Hva liker du å gjøre i byen, og hva vil du bestille på kafé?', en: 'What do you like doing in town, and what would you order at a café?', hints: ['Jeg liker å …', 'Jeg skal ha …'] },
    ],
  },
}
