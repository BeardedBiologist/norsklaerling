import type { Level } from '../types'

export interface TranslationExercise {
  id: string
  /** the English sentence to translate */
  en: string
  /** accepted Norwegian translations — first one is shown as the model answer */
  accepted: string[]
  level: Level
  focus: string
  hint: string
}

/**
 * Free-production drills: the user types the Norwegian themselves.
 * Punctuation and case are ignored when checking, so variants only need
 * to cover real word choices (klokka/klokken, ham/han, med/sammen med …).
 */
export const translations: TranslationExercise[] = [
  // ── A2 ──
  { id: 't01', en: 'I live in Norway with my family.', accepted: ['Jeg bor i Norge med familien min', 'Jeg bor i Norge sammen med familien min'], level: 'A2', focus: 'grunnleggende', hint: 'å bo i + country; familien MIN (possessive after the noun).' },
  { id: 't02', en: 'Can you help me?', accepted: ['Kan du hjelpe meg'], level: 'A2', focus: 'spørsmål', hint: 'Yes/no question: verb first.' },
  { id: 't03', en: 'The weather is nice today.', accepted: ['Været er fint i dag', 'Det er fint vær i dag'], level: 'A2', focus: 'vær', hint: 'et vær → været; or start with «Det er …».' },
  { id: 't04', en: 'I would like a coffee, please.', accepted: ['Jeg vil gjerne ha en kaffe', 'Kan jeg få en kaffe'], level: 'A2', focus: 'høflighet', hint: '«vil gjerne ha» — Norwegian has no direct word for please.' },
  { id: 't05', en: 'We are going to the cinema tonight.', accepted: ['Vi skal på kino i kveld', 'Vi går på kino i kveld'], level: 'A2', focus: 'framtid', hint: 'skal på kino — no article, and «i kveld» = tonight.' },
  { id: 't06', en: 'How much does it cost?', accepted: ['Hvor mye koster det', 'Hva koster det'], level: 'A2', focus: 'spørsmål', hint: 'Hvor mye + verb + subject.' },
  { id: 't07', en: 'I don’t understand.', accepted: ['Jeg forstår ikke', 'Jeg skjønner ikke'], level: 'A2', focus: 'nektelse', hint: 'ikke comes after the verb.' },
  { id: 't08', en: 'She works in a shop.', accepted: ['Hun jobber i en butikk', 'Hun arbeider i en butikk'], level: 'A2', focus: 'grunnleggende', hint: 'å jobbe / å arbeide.' },
  { id: 't09', en: 'It is cold outside.', accepted: ['Det er kaldt ute'], level: 'A2', focus: 'vær', hint: 'Det er + adjective (neuter -t) + ute.' },
  { id: 't10', en: 'I get up at seven o’clock.', accepted: ['Jeg står opp klokka sju', 'Jeg står opp klokken sju', 'Jeg står opp klokka syv', 'Jeg står opp klokken syv'], level: 'A2', focus: 'hverdag', hint: 'å stå opp; klokka sju.' },
  { id: 't11', en: 'Do you speak Norwegian?', accepted: ['Snakker du norsk'], level: 'A2', focus: 'spørsmål', hint: 'Verb first, no «gjør du».' },
  { id: 't12', en: 'We have two children.', accepted: ['Vi har to barn'], level: 'A2', focus: 'grunnleggende', hint: 'et barn → flere barn (no plural ending).' },
  { id: 't13', en: 'The shop closes at nine.', accepted: ['Butikken stenger klokka ni', 'Butikken stenger klokken ni', 'Butikken stenger ni'], level: 'A2', focus: 'hverdag', hint: 'en butikk → butikken.' },
  { id: 't14', en: 'I am learning Norwegian.', accepted: ['Jeg lærer norsk', 'Jeg lærer meg norsk', 'Jeg holder på å lære norsk', 'Jeg holder på å lære meg norsk'], level: 'A2', focus: 'grunnleggende', hint: 'å lære (seg) norsk.' },
  { id: 't15', en: 'Where is the nearest pharmacy?', accepted: ['Hvor er nærmeste apotek', 'Hvor er det nærmeste apoteket'], level: 'A2', focus: 'spørsmål', hint: 'Hvor er + nærmeste …' },

  // ── B1 ──
  { id: 't16', en: 'Tomorrow I am going to the doctor.', accepted: ['I morgen skal jeg til legen', 'I morgen går jeg til legen', 'I morgen skal jeg gå til legen'], level: 'B1', focus: 'inversjon (V2)', hint: 'Time first → verb BEFORE subject: skal jeg.' },
  { id: 't17', en: 'I think it will rain tomorrow.', accepted: ['Jeg tror det blir regn i morgen', 'Jeg tror at det blir regn i morgen', 'Jeg tror det kommer til å regne i morgen', 'Jeg tror at det kommer til å regne i morgen', 'Jeg tror det vil regne i morgen'], level: 'B1', focus: 'leddsetning', hint: 'tror (at) + normal word order.' },
  { id: 't18', en: 'She says she doesn’t have time.', accepted: ['Hun sier at hun ikke har tid', 'Hun sier hun ikke har tid'], level: 'B1', focus: 'ikke i leddsetning', hint: 'In the at-clause, ikke comes BEFORE the verb.' },
  { id: 't19', en: 'If it rains, we will stay home.', accepted: ['Hvis det regner blir vi hjemme', 'Hvis det regner så blir vi hjemme', 'Vi blir hjemme hvis det regner'], level: 'B1', focus: 'hvis-setning', hint: 'Condition first → inversion after: blir vi.' },
  { id: 't20', en: 'When I came to Norway, I didn’t speak Norwegian.', accepted: ['Da jeg kom til Norge snakket jeg ikke norsk', 'Da jeg kom til Norge kunne jeg ikke norsk', 'Da jeg kom til Norge kunne jeg ikke snakke norsk'], level: 'B1', focus: 'da-setning', hint: 'Da (single past event) … → snakket jeg.' },
  { id: 't21', en: 'I have lived here for ten years.', accepted: ['Jeg har bodd her i ti år'], level: 'B1', focus: 'presens perfektum', hint: 'har bodd + i + duration.' },
  { id: 't22', en: 'We must buy food before the shop closes.', accepted: ['Vi må kjøpe mat før butikken stenger', 'Vi må handle mat før butikken stenger', 'Vi må handle før butikken stenger'], level: 'B1', focus: 'før-setning', hint: 'må + infinitive; før + subject + verb.' },
  { id: 't23', en: 'Unfortunately, I cannot come to the meeting.', accepted: ['Dessverre kan jeg ikke komme på møtet', 'Dessverre kan jeg ikke komme til møtet', 'Jeg kan dessverre ikke komme på møtet', 'Jeg kan dessverre ikke komme til møtet'], level: 'B1', focus: 'inversjon (V2)', hint: 'Dessverre first → kan jeg ikke.' },
  { id: 't24', en: 'He asked if I could help him.', accepted: ['Han spurte om jeg kunne hjelpe ham', 'Han spurte om jeg kunne hjelpe han'], level: 'B1', focus: 'indirekte spørsmål', hint: 'spurte OM (not hvis) + normal order.' },
  { id: 't25', en: 'I am looking forward to the summer.', accepted: ['Jeg gleder meg til sommeren'], level: 'B1', focus: 'refleksiv', hint: 'å glede SEG til noe.' },
  { id: 't26', en: 'You should speak more Norwegian at work.', accepted: ['Du burde snakke mer norsk på jobb', 'Du burde snakke mer norsk på jobben', 'Du bør snakke mer norsk på jobb', 'Du bør snakke mer norsk på jobben'], level: 'B1', focus: 'modalverb', hint: 'burde/bør + infinitive without å.' },
  { id: 't27', en: 'It is important to practise every day.', accepted: ['Det er viktig å øve hver dag', 'Det er viktig å øve seg hver dag'], level: 'B1', focus: 'infinitiv', hint: 'Det er + adjective + å + infinitive.' },
  { id: 't28', en: 'The man who lives next door is a doctor.', accepted: ['Mannen som bor ved siden av er lege', 'Mannen som bor ved siden av meg er lege', 'Mannen som bor i naboleiligheten er lege'], level: 'B1', focus: 'som-setning', hint: 'som starts the relative clause; er LEGE without article.' },
  { id: 't29', en: 'Even though it was expensive, we bought it.', accepted: ['Selv om det var dyrt kjøpte vi det', 'Vi kjøpte det selv om det var dyrt'], level: 'B1', focus: 'selv om', hint: 'Selv om-clause first → kjøpte vi.' },
  { id: 't30', en: 'I don’t know where the bus stops.', accepted: ['Jeg vet ikke hvor bussen stopper'], level: 'B1', focus: 'indirekte spørsmål', hint: 'hvor + subject + verb (no inversion inside).' },
  { id: 't31', en: 'Now the days are getting shorter.', accepted: ['Nå blir dagene kortere'], level: 'B1', focus: 'inversjon (V2)', hint: 'Nå first → blir dagene.' },
  { id: 't32', en: 'I have never been to Northern Norway.', accepted: ['Jeg har aldri vært i Nord-Norge'], level: 'B1', focus: 'adverb-plassering', hint: 'aldri between har and vært.' },
  { id: 't33', en: 'Have you decided to apply for citizenship?', accepted: ['Har du bestemt deg for å søke om statsborgerskap', 'Har du bestemt deg for å søke statsborgerskap'], level: 'B1', focus: 'refleksiv', hint: 'å bestemme SEG FOR å …' },
  { id: 't34', en: 'She is afraid of making mistakes.', accepted: ['Hun er redd for å gjøre feil'], level: 'B1', focus: 'faste uttrykk', hint: 'redd FOR å + infinitive.' },
  { id: 't35', en: 'We are renovating the bathroom ourselves.', accepted: ['Vi pusser opp badet selv'], level: 'B1', focus: 'partikkelverb', hint: 'å pusse opp; selv at the end.' },

  // ── B2 ──
  { id: 't36', en: 'The more you practise, the better you get.', accepted: ['Jo mer du øver desto bedre blir du', 'Jo mer du øver jo bedre blir du'], level: 'B2', focus: 'jo … desto', hint: 'Jo + comparative …, desto + comparative + verb + subject.' },
  { id: 't37', en: 'Despite the rain, we went hiking.', accepted: ['Til tross for regnet gikk vi på tur', 'Vi gikk på tur til tross for regnet', 'Tross regnet gikk vi på tur'], level: 'B2', focus: 'til tross for', hint: 'Fronted phrase → gikk vi.' },
  { id: 't38', en: 'It is said that Norwegians are reserved.', accepted: ['Det sies at nordmenn er reserverte'], level: 'B2', focus: 's-passiv', hint: 'Det sies at … (s-passive).' },
  { id: 't39', en: 'The proposal was adopted by a large majority.', accepted: ['Forslaget ble vedtatt med stort flertall', 'Forslaget ble vedtatt av et stort flertall'], level: 'B2', focus: 'passiv', hint: 'ble + vedtatt (bli-passive).' },
  { id: 't40', en: 'What worries me most is the housing prices.', accepted: ['Det som bekymrer meg mest er boligprisene'], level: 'B2', focus: 'utbrytning', hint: 'Det som … er … (cleft sentence).' },
  { id: 't41', en: 'Citizenship entails both rights and duties.', accepted: ['Statsborgerskap innebærer både rettigheter og plikter', 'Statsborgerskapet innebærer både rettigheter og plikter'], level: 'B2', focus: 'formelt språk', hint: 'å innebære; både … og …' },
  { id: 't42', en: 'Had I had more time, I would have read more.', accepted: ['Hadde jeg hatt mer tid ville jeg ha lest mer', 'Hadde jeg hatt mer tid ville jeg lest mer', 'Hadde jeg hatt bedre tid ville jeg ha lest mer', 'Hadde jeg hatt bedre tid ville jeg lest mer'], level: 'B2', focus: 'kondisjonalis', hint: 'Verb-first conditional: Hadde jeg hatt …' },
  { id: 't43', en: 'The government is introducing new measures against unemployment.', accepted: ['Regjeringen innfører nye tiltak mot arbeidsledighet'], level: 'B2', focus: 'formelt språk', hint: 'å innføre tiltak mot noe.' },
  { id: 't44', en: 'Everyone must contribute for society to function.', accepted: ['Alle må bidra for at samfunnet skal fungere'], level: 'B2', focus: 'for at', hint: 'for at + subject + skal + infinitive.' },
  { id: 't45', en: 'In my opinion, education should be free.', accepted: ['Etter min mening bør utdanning være gratis', 'Etter min mening burde utdanning være gratis'], level: 'B2', focus: 'meninger', hint: 'Etter min mening first → bør utdanning.' },
]
