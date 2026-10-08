import type { KursChapter } from '../../types'

/**
 * Nybegynnerkurs chapters 1–4. The grammar sequence follows NTNU's free
 * LearnNoW course (ntnu.edu/learnnow) so the two can be used side by side;
 * all explanations, examples and exercises here are our own.
 */
export const chapters1to4: KursChapter[] = [
  {
    n: 1,
    title: 'Hei! Hva heter du?',
    titleEn: 'Hi! What’s your name?',
    level: 'A1',
    theme: 'Meeting people: saying hello, your name, where you come from and which languages you speak.',
    canDo: [
      { no: 'Jeg kan hilse og si hva jeg heter.', en: 'I can say hello and tell people my name.' },
      { no: 'Jeg kan si hvor jeg kommer fra.', en: 'I can say where I come from.' },
      { no: 'Jeg kan stille enkle spørsmål med hva og hvor.', en: 'I can ask simple questions with what and where.' },
    ],
    dialogues: ['Alex', 'Ben', 'Cecilie', 'Dina'],
    phrases: [
      { no: 'Hei! Jeg heter Josh.', en: 'Hi! My name is Josh.' },
      { no: 'Hva heter du?', en: 'What’s your name?' },
      { no: 'Hvor kommer du fra?', en: 'Where are you from?' },
      { no: 'Jeg kommer fra England.', en: 'I come from England.' },
      { no: 'Hyggelig å hilse på deg!', en: 'Nice to meet you!' },
      { no: 'God morgen! / God dag! / God kveld!', en: 'Good morning! / Good day! / Good evening!' },
    ],
    grammar: [
      {
        heading: 'Word order: the verb comes second',
        body: 'A Norwegian statement is built around the verb. The subject usually comes first and the verb second — just like English at this stage:\n\nsubject + verb + the rest\n\nUnlike English, Norwegian verbs do not change with the person. «Jeg heter», «du heter», «hun heter» — always «heter». That makes the present tense very easy.',
        examples: [
          { no: 'Jeg heter Maria.', en: 'My name is Maria.', note: 'jeg (subject) + heter (verb)' },
          { no: 'Hun kommer fra Spania.', en: 'She comes from Spain.' },
          { no: 'Vi snakker norsk.', en: 'We speak Norwegian.' },
        ],
      },
      {
        heading: 'Yes/no questions: start with the verb',
        body: 'To turn a statement into a yes/no question, simply move the verb to the front. There is no helper word like English «do».\n\nverb + subject + the rest?',
        examples: [
          { no: 'Du snakker engelsk. → Snakker du engelsk?', en: 'You speak English. → Do you speak English?' },
          { no: 'Kommer du fra Polen?', en: 'Do you come from Poland?' },
          { no: 'Er du norsk?', en: 'Are you Norwegian?' },
        ],
      },
      {
        heading: 'Question words',
        body: 'With a question word, the question word goes first and the verb comes straight after it — then the subject:\n\nquestion word + verb + subject …?\n\nhva = what · hvor = where · hvem = who · når = when · hvordan = how · hvorfor = why\n\nNotice the «hv-» spelling: the h is silent, so «hva» sounds like «va».',
        examples: [
          { no: 'Hva heter du?', en: 'What is your name?', note: 'hva + heter + du' },
          { no: 'Hvor bor du?', en: 'Where do you live?' },
          { no: 'Hvordan går det?', en: 'How are you?' },
        ],
      },
      {
        heading: 'Countries, nationalities and languages',
        body: 'Country names have a capital letter, but nationality adjectives and language names are written with a small letter: «Norge» but «norsk». The language and the adjective are often the same word.\n\nNorge → norsk · England → engelsk · Polen → polsk · Spania → spansk · Frankrike → fransk · Tyskland → tysk · Sverige → svensk\n\nA person from a country often gets «-er», «-mann» or «-ing»: en nordmann, en engelskmann, en polakk, en svenske.',
        examples: [
          { no: 'Jeg kommer fra England. Jeg er engelsk.', en: 'I come from England. I am English.' },
          { no: 'Hun snakker polsk og norsk.', en: 'She speaks Polish and Norwegian.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'The Norwegian vowels æ, ø, å',
      body: 'Norwegian has nine vowels: a e i o u y æ ø å.\n\nå ≈ the «aw» in «law» (på, gå) · ø ≈ the «u» in «fur» with rounded lips (Bjørn, søt) · æ ≈ the «a» in «bad» (være, lære) · y is an «ee» said with rounded lips (ny, by) · o often sounds like English «oo» (bo, ko) · u is a tight, rounded sound (du, hus).\n\nTip: the silent letters in «hv-» (hva, hvor) and «hj-» (hjem, hjelpe) — you only hear the second letter.',
    },
    speaking: [
      'Hva heter du?',
      'Hvor kommer du fra?',
      'Hvor bor du nå?',
      'Hvilke språk snakker du?',
      'Hvordan går det med deg i dag?',
    ],
    quiz: [
      { id: 'k01-q1', question: '___ heter du?', options: ['Hva', 'Hvor', 'Hvem', 'Når'], answer: 0, explanation: '«Hva heter du?» = What is your name? Norwegian asks literally «what are you called».', level: 'A1', topic: 'spørreord' },
      { id: 'k01-q2', question: 'Which is a correct yes/no question?', options: ['Snakker du norsk?', 'Du snakker norsk?', 'Gjør du snakke norsk?', 'Snakke du norsk?'], answer: 0, explanation: 'Yes/no questions start with the verb. There is no «do» in Norwegian.', level: 'A1', topic: 'ordstilling' },
      { id: 'k01-q3', question: 'Jeg kommer ___ Irland.', options: ['fra', 'på', 'til', 'med'], answer: 0, explanation: '«å komme fra» = to come from.', level: 'A1', topic: 'preposisjoner' },
      { id: 'k01-q4', question: 'She speaks English: Hun snakker ___.', options: ['engelsk', 'Engelsk', 'England', 'engelske'], answer: 0, explanation: 'Language names have a small letter in Norwegian.', level: 'A1', topic: 'nasjonalitet' },
      { id: 'k01-q5', question: 'Choose the correct form: Vi ___ i Bergen.', options: ['bor', 'borer', 'bore', 'å bo'], answer: 0, explanation: 'Present tense is the infinitive + -r, and it is the same for every person: jeg/du/vi bor.', level: 'A1', topic: 'verb' },
      { id: 'k01-q6', question: '«Hvor bor du?» means …', options: ['Where do you live?', 'Who do you live with?', 'How do you live?', 'When do you live?'], answer: 0, explanation: 'hvor = where.', level: 'A1', topic: 'spørreord' },
    ],
    sentences: [
      { id: 'k01-s1', no: 'Jeg heter Anna', en: 'My name is Anna', level: 'A1', focus: 'subjekt + verb', hint: 'Subject first, verb second.' },
      { id: 'k01-s2', no: 'Hva heter du', en: 'What is your name?', level: 'A1', focus: 'spørreord', hint: 'Question word, then verb, then subject.' },
      { id: 'k01-s3', no: 'Hvor kommer du fra', en: 'Where do you come from?', level: 'A1', focus: 'spørreord', hint: 'The preposition «fra» goes at the end.' },
      { id: 'k01-s4', no: 'Snakker du norsk', en: 'Do you speak Norwegian?', level: 'A1', focus: 'ja/nei-spørsmål', hint: 'Start with the verb.' },
      { id: 'k01-s5', no: 'Jeg kommer fra England', en: 'I come from England', level: 'A1', focus: 'subjekt + verb', hint: 'jeg + verb + fra + country.' },
    ],
  },

  {
    n: 2,
    title: 'På reise',
    titleEn: 'Travelling',
    level: 'A1',
    theme: 'Arriving in Norway: the plane, the airport, passport control and phoning home.',
    canDo: [
      { no: 'Jeg kan si hvordan det går med meg.', en: 'I can say how I am.' },
      { no: 'Jeg kan bruke verb i presens.', en: 'I can use verbs in the present tense.' },
      { no: 'Jeg kan si nei med «ikke».', en: 'I can make a sentence negative with «ikke».' },
    ],
    dialogues: ['Fra Paris til Oslo', 'På Gardermoen', 'Passkontroll', 'Hei, pappa!'],
    phrases: [
      { no: 'Hvordan går det? – Det går bra, takk!', en: 'How are you? – Fine, thanks!' },
      { no: 'Unnskyld, hvor er toget til Oslo?', en: 'Excuse me, where is the train to Oslo?' },
      { no: 'Jeg forstår ikke.', en: 'I don’t understand.' },
      { no: 'Kan du si det igjen?', en: 'Can you say that again?' },
      { no: 'Ha det bra! / Ha det!', en: 'Goodbye! / Bye!' },
      { no: 'Velkommen til Norge!', en: 'Welcome to Norway!' },
    ],
    grammar: [
      {
        heading: 'Personal pronouns (subject form)',
        body: 'jeg = I · du = you (one person) · han = he · hun = she · den/det = it · vi = we · dere = you (several people) · de = they\n\nNorwegians use «du» with almost everyone — strangers, your boss, the doctor. The polite «De» is very old-fashioned.',
        examples: [
          { no: 'Han er fra Frankrike.', en: 'He is from France.' },
          { no: 'Dere snakker godt norsk!', en: 'You (all) speak good Norwegian!' },
          { no: 'De venter på bussen.', en: 'They are waiting for the bus.' },
        ],
      },
      {
        heading: 'The infinitive and the present tense',
        body: 'The infinitive is the dictionary form, often with «å» in front: å snakke, å bo, å komme.\n\nThe present tense = infinitive + r. It is the same for every person:\n\nå snakke → snakker · å bo → bor · å komme → kommer\n\nA few very common verbs are irregular: å være → er · å gjøre → gjør · å si → sier · å vite → vet · å spørre → spør.\n\nNorwegian present tense covers both «I speak» and «I am speaking».',
        examples: [
          { no: 'Jeg snakker med mamma.', en: 'I am talking to mum.' },
          { no: 'Hun er sjåfør.', en: 'She is a driver.' },
          { no: 'Vi drar til Oslo i dag.', en: 'We are going to Oslo today.' },
        ],
      },
      {
        heading: 'stå / sitte / ligge + another verb',
        body: 'Norwegian often describes what someone is doing by saying how they are positioned: «står og», «sitter og», «ligger og» + present tense. It is the closest thing Norwegian has to the English «-ing» form.',
        examples: [
          { no: 'Han står og venter.', en: 'He is (standing there) waiting.' },
          { no: 'Hun sitter og leser.', en: 'She is (sitting) reading.' },
          { no: 'Barna ligger og sover.', en: 'The children are (lying) asleep.' },
        ],
      },
      {
        heading: 'Nouns have three genders',
        body: 'Every noun is masculine, feminine or neuter. You see it in the indefinite article:\n\nen (masculine) · ei (feminine) · et (neuter)\n\nen bil · ei jente · et hus\n\nAll feminine nouns may also use «en» in bokmål (en jente), so the big split to learn is en/ei vs. et. There is no reliable rule — learn the article together with the word. The flashcards in this app always show the gender.\n\nWe leave out the article when talking about a job, nationality or religion: «Hun er lege» (not «en lege»).',
        examples: [
          { no: 'et fly · en kafé · ei dame', en: 'a plane · a café · a lady' },
          { no: 'Han er sjåfør.', en: 'He is a driver.', note: 'no article with professions' },
        ],
      },
      {
        heading: 'Negation with «ikke»',
        body: 'In a main clause, «ikke» goes straight after the verb:\n\nsubject + verb + ikke\n\nIn a question, after the subject: «Snakker du ikke norsk?»',
        examples: [
          { no: 'Jeg forstår ikke.', en: 'I don’t understand.' },
          { no: 'Hun snakker ikke fransk.', en: 'She doesn’t speak French.' },
          { no: 'Er du ikke trøtt?', en: 'Aren’t you tired?' },
        ],
      },
      {
        heading: 'Little linking words: og, men, eller',
        body: 'og = and · men = but · eller = or · for = because (formal)\n\nThese join two main clauses without changing the word order in either.',
        examples: [
          { no: 'Jeg er trøtt, men glad.', en: 'I am tired but happy.' },
          { no: 'Vil du ha te eller kaffe?', en: 'Do you want tea or coffee?' },
        ],
      },
      {
        heading: '«i» or «på»?',
        body: 'Both can mean «in/at». A rough guide:\n\n• i + countries, big cities, enclosed spaces: i Norge, i Oslo, i bilen\n• på + islands, smaller towns (often), surfaces, many public places: på Gardermoen, på bordet, på kafé, på jobb, på skolen\n\nMany combinations just have to be learnt — notice them in every text you read.',
        examples: [
          { no: 'Vi bor i Bergen.', en: 'We live in Bergen.' },
          { no: 'Hun er på jobb.', en: 'She is at work.' },
          { no: 'Flyet lander på Gardermoen.', en: 'The plane lands at Gardermoen.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Stress is usually on the first syllable',
      body: 'Most native Norwegian words are stressed on the first syllable: SNAK-ke, KOM-me, MOR-gen. Many loan words (often from French) are stressed at the end: ka-FÉ, i-DÉ, pas-sa-SJER.\n\nThe «-e» at the end of a word is always pronounced, like a short «uh»: snakke = «SNAK-kuh».',
    },
    speaking: [
      'Hvordan går det med deg?',
      'Hvor står du nå? Hva gjør du?',
      'Hvilke språk snakker du ikke?',
      'Bor du i en by eller på landet?',
      'Hvem ringer du til når du er på reise?',
    ],
    quiz: [
      { id: 'k02-q1', question: 'Jeg ___ ikke norsk så godt.', options: ['snakker', 'snakke', 'å snakke', 'snakket'], answer: 0, explanation: 'Present tense = infinitive + r: snakke → snakker.', level: 'A1', topic: 'verb' },
      { id: 'k02-q2', question: 'Where does «ikke» go? «Hun ___ ___ i dag.» (jobber, ikke)', options: ['jobber ikke', 'ikke jobber', 'jobber i dag ikke', 'ikke i dag jobber'], answer: 0, explanation: 'In a main clause, «ikke» comes right after the verb.', level: 'A1', topic: 'negasjon' },
      { id: 'k02-q3', question: 'Han er ___.', options: ['lærer', 'en lærer', 'et lærer', 'læreren'], answer: 0, explanation: 'No article with professions: «Han er lærer».', level: 'A1', topic: 'substantiv' },
      { id: 'k02-q4', question: 'Vi bor ___ Norge.', options: ['i', 'på', 'til', 'fra'], answer: 0, explanation: 'Countries take «i».', level: 'A1', topic: 'preposisjoner' },
      { id: 'k02-q5', question: 'Which pronoun means «you» when talking to several people?', options: ['dere', 'du', 'de', 'deg'], answer: 0, explanation: 'du = one person, dere = several people, de = they.', level: 'A1', topic: 'pronomen' },
      { id: 'k02-q6', question: '«Hun sitter og leser» means …', options: ['She is reading.', 'She sits and then reads.', 'She has read.', 'She wants to read.'], answer: 0, explanation: 'sitter/står/ligger + og + verb describes an ongoing activity.', level: 'A1', topic: 'verb' },
      { id: 'k02-q7', question: 'The present tense of «å være» is …', options: ['er', 'værer', 'var', 'være'], answer: 0, explanation: '«å være» is irregular: jeg er, du er, vi er …', level: 'A1', topic: 'verb' },
    ],
    sentences: [
      { id: 'k02-s1', no: 'Jeg forstår ikke', en: 'I don’t understand', level: 'A1', focus: 'ikke etter verbet', hint: '«ikke» comes after the verb.' },
      { id: 'k02-s2', no: 'Han står og venter på bussen', en: 'He is waiting for the bus', level: 'A1', focus: 'står og + verb', hint: 'står og venter …' },
      { id: 'k02-s3', no: 'Vi bor i Oslo men vi jobber på Lillestrøm', en: 'We live in Oslo, but we work in Lillestrøm', level: 'A1', focus: 'men + i/på', hint: 'Two main clauses joined by «men».' },
      { id: 'k02-s4', no: 'Snakker du ikke engelsk', en: 'Don’t you speak English?', level: 'A1', focus: 'ikke i spørsmål', hint: 'verb + subject + ikke.' },
      { id: 'k02-s5', no: 'Hun er sjåfør', en: 'She is a driver', level: 'A1', focus: 'yrke uten artikkel', hint: 'No article before the job.' },
    ],
  },

  {
    n: 3,
    title: 'Hjemme',
    titleEn: 'At home',
    level: 'A1',
    theme: 'Moving into a new home: rooms, furniture, the family and the time of day.',
    canDo: [
      { no: 'Jeg kan beskrive hjemmet mitt.', en: 'I can describe my home.' },
      { no: 'Jeg kan bruke bestemt form og flertall.', en: 'I can use the definite form and plural of nouns.' },
      { no: 'Jeg kan bruke kan, må, vil, skal og bør.', en: 'I can use the modal verbs can, must, want, shall and should.' },
    ],
    dialogues: ['Alex våkner i Fjordvik', 'Flyttebilen kommer', 'Hjemme', 'Dinas rom'],
    phrases: [
      { no: 'Hvor skal sofaen stå?', en: 'Where should the sofa go?' },
      { no: 'Kan du hjelpe meg?', en: 'Can you help me?' },
      { no: 'Det er et stort rom.', en: 'It’s a big room.' },
      { no: 'Hva er klokka? – Den er ti.', en: 'What time is it? – It’s ten.' },
      { no: 'Dette er rommet mitt.', en: 'This is my room.' },
    ],
    grammar: [
      {
        heading: 'Object pronouns',
        body: 'When a pronoun is the object (someone the action is done to), it changes form:\n\njeg → meg · du → deg · han → ham (or han) · hun → henne · vi → oss · dere → dere · de → dem',
        examples: [
          { no: 'Kan du hjelpe meg?', en: 'Can you help me?' },
          { no: 'Vi ser dem i morgen.', en: 'We’ll see them tomorrow.' },
          { no: 'Jeg ringer henne i kveld.', en: 'I’ll call her tonight.' },
        ],
      },
      {
        heading: '«den» or «det» for «it»',
        body: 'Use «den» to refer back to an en/ei noun and «det» for an et noun. «Det» is also the dummy «it» in phrases like «det regner» (it’s raining) and «det er» (there is / it is).',
        examples: [
          { no: 'Jeg liker sofaen. Den er fin.', en: 'I like the sofa. It’s nice.', note: 'en sofa → den' },
          { no: 'Huset er gammelt, men det er stort.', en: 'The house is old, but it’s big.', note: 'et hus → det' },
        ],
      },
      {
        heading: 'Modal verbs + infinitive',
        body: 'kan (can) · må (must) · vil (want to) · skal (shall / going to) · bør (should)\n\nAfter a modal verb comes the infinitive — WITHOUT «å»:\n\nJeg kan snakke. (not «kan å snakke»)\n\n«Skal» is the most common way to talk about plans: «Vi skal flytte» = We are going to move.',
        examples: [
          { no: 'Jeg må gå nå.', en: 'I have to go now.' },
          { no: 'Vil du ha kaffe?', en: 'Would you like coffee?' },
          { no: 'Vi skal male stua.', en: 'We are going to paint the living room.' },
        ],
      },
      {
        heading: 'The definite form: the article goes on the end',
        body: 'English puts «the» in front. Norwegian adds it to the end of the noun:\n\nen bil → bilen (the car)\nei jente → jenta (the girl)\net hus → huset (the house)\n\nSo: masculine -en, feminine -a, neuter -et. (Feminine words may also take -en: jenten — but -a is more common in speech.)',
        examples: [
          { no: 'Sofaen står i stua.', en: 'The sofa is in the living room.' },
          { no: 'Døra er åpen.', en: 'The door is open.', note: 'ei dør → døra' },
          { no: 'Rommet er lite.', en: 'The room is small.' },
        ],
      },
      {
        heading: 'Plural',
        body: 'Indefinite plural usually adds -er, definite plural -ene:\n\nen bil – biler – bilene\nei jente – jenter – jentene\n\nMost one-syllable et-words get NO ending in the indefinite plural:\n\net hus – hus – husene\net rom – rom – rommene\n\nSome common irregular plurals: en mann – menn · en bok – bøker · et barn – barn – barna · en far – fedre · en mor – mødre.',
        examples: [
          { no: 'Vi har tre soverom.', en: 'We have three bedrooms.', note: 'et rom → rom (no ending)' },
          { no: 'Barna er på skolen.', en: 'The children are at school.' },
        ],
      },
      {
        heading: 'Genitive: «s» with no apostrophe',
        body: 'Add -s directly to the owner, with no apostrophe: Dinas rom, mammas bil, Norges hovedstad.\n\nIn speech, the «sin/si/sitt» construction is also common: «Dina sitt rom».',
        examples: [
          { no: 'Dette er Bens kontor.', en: 'This is Ben’s office.' },
          { no: 'Oslo er Norges hovedstad.', en: 'Oslo is Norway’s capital.' },
        ],
      },
      {
        heading: '«Det er» and «det står»',
        body: '«Det er» = there is / there are. Norwegians also use position verbs: «det står en sofa i stua» (there is a sofa standing…), «det ligger en bok på bordet».',
        examples: [
          { no: 'Det er tre rom i leiligheten.', en: 'There are three rooms in the flat.' },
          { no: 'Det står en lampe i hjørnet.', en: 'There is a lamp in the corner.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'Long and short vowels',
      body: 'A vowel followed by ONE consonant is usually long; a vowel followed by TWO consonants is short.\n\nhat (hate, long a) vs. hatt (hat, short a) · tak (roof) vs. takk (thanks) · vin (wine) vs. vinn (win!)\n\nGetting this right is often the difference between two words — listen for it in the LearnNoW recordings.',
    },
    speaking: [
      'Bor du i et hus eller i en leilighet?',
      'Hvor mange rom har du? Beskriv stua.',
      'Hva står på kjøkkenet ditt?',
      'Hva må du gjøre i dag? Hva vil du gjøre?',
      'Hvem bor du sammen med?',
    ],
    quiz: [
      { id: 'k03-q1', question: 'Jeg kan ___ norsk.', options: ['snakke', 'å snakke', 'snakker', 'snakket'], answer: 0, explanation: 'After a modal verb (kan, må, vil, skal, bør) comes the infinitive without «å».', level: 'A1', topic: 'modalverb' },
      { id: 'k03-q2', question: 'et hus → the house = ?', options: ['huset', 'husen', 'husa', 'det hus'], answer: 0, explanation: 'Neuter nouns take -et in the definite singular.', level: 'A1', topic: 'substantiv' },
      { id: 'k03-q3', question: 'Plural: Vi har to ___ (et rom).', options: ['rom', 'rommer', 'rommene', 'romer'], answer: 0, explanation: 'One-syllable et-words usually have no ending in the indefinite plural.', level: 'A1', topic: 'substantiv' },
      { id: 'k03-q4', question: 'Liker du lampa? Ja, ___ er fin.', options: ['den', 'det', 'han', 'dem'], answer: 0, explanation: 'ei lampe is feminine → refer to it with «den».', level: 'A1', topic: 'pronomen' },
      { id: 'k03-q5', question: 'Kan du ringe ___? (me)', options: ['meg', 'jeg', 'min', 'mi'], answer: 0, explanation: 'Object form: jeg → meg.', level: 'A1', topic: 'pronomen' },
      { id: 'k03-q6', question: 'Ben’s car = ?', options: ['Bens bil', 'Ben’s bil', 'bil Bens', 'Ben bil'], answer: 0, explanation: 'Norwegian genitive: add -s, no apostrophe.', level: 'A1', topic: 'genitiv' },
      { id: 'k03-q7', question: 'ei jente → the girl = ?', options: ['jenta', 'jentet', 'jenten', 'jentene'], answer: 0, explanation: 'Feminine nouns take -a (jenten is also allowed, but -a is standard in speech). jentene = the girls.', level: 'A1', topic: 'substantiv' },
    ],
    sentences: [
      { id: 'k03-s1', no: 'Jeg må gå nå', en: 'I have to go now', level: 'A1', focus: 'modalverb + infinitiv', hint: 'må + infinitive without «å».' },
      { id: 'k03-s2', no: 'Sofaen står i stua', en: 'The sofa is in the living room', level: 'A1', focus: 'bestemt form', hint: 'Definite forms: sofaen, stua.' },
      { id: 'k03-s3', no: 'Kan du hjelpe meg', en: 'Can you help me?', level: 'A1', focus: 'objektsform', hint: 'Object pronoun at the end.' },
      { id: 'k03-s4', no: 'Det er tre rom i huset', en: 'There are three rooms in the house', level: 'A1', focus: 'det er', hint: 'Start with «Det er».' },
      { id: 'k03-s5', no: 'Vi skal flytte i juni', en: 'We are going to move in June', level: 'A1', focus: 'skal + infinitiv', hint: 'skal = plans.' },
    ],
  },

  {
    n: 4,
    title: 'Familie og hverdag',
    titleEn: 'Family and everyday life',
    level: 'A1',
    theme: 'Visiting grandparents, a morning routine, sending a parcel and asking the way.',
    canDo: [
      { no: 'Jeg kan si hva klokka er.', en: 'I can tell the time.' },
      { no: 'Jeg kan forklare veien.', en: 'I can give directions.' },
      { no: 'Jeg kan gi beskjeder med imperativ.', en: 'I can give instructions with the imperative.' },
    ],
    dialogues: ['Hos mormor og morfar', 'Bens morgen', 'Cecilie sender en pakke', 'Veien til skolen'],
    phrases: [
      { no: 'Hva er klokka? – Den er kvart over sju.', en: 'What time is it? – It’s quarter past seven.' },
      { no: 'Gå rett fram, og ta til venstre ved lyskrysset.', en: 'Go straight ahead and turn left at the lights.' },
      { no: 'Er det langt herfra?', en: 'Is it far from here?' },
      { no: 'Gratulerer med dagen!', en: 'Happy birthday!' },
      { no: 'Jeg vil gjerne sende en pakke.', en: 'I’d like to send a parcel.' },
    ],
    grammar: [
      {
        heading: 'The imperative: giving instructions',
        body: 'The imperative is the infinitive without the final -e (and without «å»):\n\nå komme → Kom! · å vente → Vent! · å spise → Spis!\n\nIf the infinitive does not end in -e, it stays the same: å gå → Gå! · å bo → Bo!\n\nAdd «gjerne» or «vær så snill» to be polite: «Vent litt, er du snill.»',
        examples: [
          { no: 'Kom inn!', en: 'Come in!' },
          { no: 'Ta til høyre ved kirken.', en: 'Turn right at the church.' },
          { no: 'Ikke glem nøklene!', en: 'Don’t forget the keys!' },
        ],
      },
      {
        heading: '«Hvilken / hvilket / hvilke» = which',
        body: '«Which» agrees with the noun that follows:\n\nhvilken + en/ei word · hvilket + et word · hvilke + plural',
        examples: [
          { no: 'Hvilken buss tar du?', en: 'Which bus do you take?' },
          { no: 'Hvilket hus bor dere i?', en: 'Which house do you live in?' },
          { no: 'Hvilke dager jobber du?', en: 'Which days do you work?' },
        ],
      },
      {
        heading: 'Telling the time',
        body: 'Norwegian counts towards the next half hour:\n\n7.00 klokka sju · 7.15 kvart over sju · 7.30 halv åtte (!) · 7.45 kvart på åtte\n7.20 ti på halv åtte · 7.40 ti over halv åtte\n\n«Halv åtte» means half TO eight — the most common mistake for English speakers. Timetables use the 24-hour clock: «klokka 19.30».',
        examples: [
          { no: 'Klokka er halv fire.', en: 'It is half past three.', note: 'halv fire = 3.30' },
          { no: 'Vi møtes kvart over to.', en: 'We are meeting at quarter past two.' },
        ],
      },
    ],
    pronunciation: {
      heading: 'The «kj» and «sj» sounds',
      body: 'kj (also k before i/y) = a soft hissing sound like German «ich»: kjøre, kino, kirke.\n\nsj / skj (also sk before i/y) = like English «sh»: sjø, skjorte, ski.\n\nMany younger Norwegians merge the two — but in the oral exam it pays to keep them apart: kjære vs. skjære.',
    },
    speaking: [
      'Hva er klokka nå?',
      'Hva gjør du om morgenen? Fortell fra du står opp.',
      'Forklar veien fra huset ditt til butikken.',
      'Når har du fødselsdag?',
      'Hvem i familien din snakker du mest med?',
    ],
    quiz: [
      { id: 'k04-q1', question: 'Imperative of «å vente»:', options: ['Vent!', 'Vente!', 'Venter!', 'Å vent!'], answer: 0, explanation: 'Drop the final -e from the infinitive: vente → vent.', level: 'A1', topic: 'imperativ' },
      { id: 'k04-q2', question: '___ hus bor dere i?', options: ['Hvilket', 'Hvilken', 'Hvilke', 'Hva'], answer: 0, explanation: 'et hus → hvilket.', level: 'A1', topic: 'spørreord' },
      { id: 'k04-q3', question: '«Halv sju» is …', options: ['6.30', '7.30', '6.45', '7.15'], answer: 0, explanation: 'Half (on the way) to seven = 6.30.', level: 'A1', topic: 'klokka' },
      { id: 'k04-q4', question: '7.45 in Norwegian:', options: ['kvart på åtte', 'kvart over sju', 'halv åtte', 'kvart over åtte'], answer: 0, explanation: 'Quarter to eight = kvart på åtte.', level: 'A1', topic: 'klokka' },
      { id: 'k04-q5', question: 'Imperative of «å gå»:', options: ['Gå!', 'Gåe!', 'Går!', 'Gå du!'], answer: 0, explanation: 'Verbs that don’t end in -e keep the infinitive form.', level: 'A1', topic: 'imperativ' },
      { id: 'k04-q6', question: 'Vi spiser middag ___ mormor i dag.', options: ['hos', 'på', 'med', 'til'], answer: 0, explanation: '«hos» = at someone’s place.', level: 'A1', topic: 'preposisjoner' },
    ],
    sentences: [
      { id: 'k04-s1', no: 'Ta til venstre ved lyskrysset', en: 'Turn left at the traffic lights', level: 'A1', focus: 'imperativ', hint: 'Start with the imperative.' },
      { id: 'k04-s2', no: 'Hvilken buss går til sentrum', en: 'Which bus goes to the centre?', level: 'A1', focus: 'hvilken', hint: 'Hvilken + noun + verb.' },
      { id: 'k04-s3', no: 'Klokka er kvart over sju', en: 'It is quarter past seven', level: 'A1', focus: 'klokka', hint: 'Klokka er …' },
      { id: 'k04-s4', no: 'Ikke glem matpakka', en: 'Don’t forget your packed lunch!', level: 'A1', focus: 'imperativ + ikke', hint: 'Negative imperative starts with «Ikke».' },
      { id: 'k04-s5', no: 'Vi spiser middag hos mormor', en: 'We are having dinner at grandma’s', level: 'A1', focus: 'hos', hint: '«hos» + person.' },
    ],
  },
]
