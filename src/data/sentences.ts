import type { SentenceExercise } from '../types'

/**
 * Sentence-building drills. Each sentence splits on spaces into tiles.
 * The focus areas mirror what norskprøven graders listen for:
 * V2 inversion, adverb placement, subordinate clauses, tenses.
 */
export const sentences: SentenceExercise[] = [
  // ── A2 · basic word order ──
  { id: 's01', no: 'Jeg står opp klokka sju hver dag', en: 'I get up at seven o’clock every day', level: 'A2', focus: 'grunnleggende ordstilling', hint: 'Subject first, then verb: Jeg står …' },
  { id: 's02', no: 'Hun snakker norsk på jobben', en: 'She speaks Norwegian at work', level: 'A2', focus: 'grunnleggende ordstilling', hint: 'Subject – verb – object – place.' },
  { id: 's03', no: 'Vi skal reise til Bergen i morgen', en: 'We are going to travel to Bergen tomorrow', level: 'A2', focus: 'modalverb', hint: 'Modal verb (skal) + infinitive (reise).' },
  { id: 's04', no: 'Kan du hjelpe meg med leksene', en: 'Can you help me with the homework', level: 'A2', focus: 'spørsmål', hint: 'Yes/no questions start with the verb.' },
  { id: 's05', no: 'Jeg liker ikke kaffe uten melk', en: 'I don’t like coffee without milk', level: 'A2', focus: 'nektelse', hint: 'In main clauses, ikke comes after the verb.' },
  { id: 's06', no: 'Hvor lenge har du bodd i Norge', en: 'How long have you lived in Norway', level: 'A2', focus: 'spørsmål', hint: 'Question word first, then verb, then subject.' },
  { id: 's07', no: 'Det er kaldt ute i dag', en: 'It is cold outside today', level: 'A2', focus: 'det-setninger', hint: 'Weather sentences start with Det.' },
  { id: 's08', no: 'Han har jobbet her i fem år', en: 'He has worked here for five years', level: 'A2', focus: 'presens perfektum', hint: 'har + past participle (jobbet).' },
  { id: 's09', no: 'Vi må kjøpe mat før butikken stenger', en: 'We must buy food before the shop closes', level: 'A2', focus: 'modalverb', hint: 'må + infinitive; før introduces the time clause.' },
  { id: 's10', no: 'Barna leker i hagen etter skolen', en: 'The children play in the garden after school', level: 'A2', focus: 'grunnleggende ordstilling', hint: 'Place before time at the end.' },

  // ── B1 · V2 inversion ──
  { id: 's11', no: 'I morgen skal jeg ta norskprøven', en: 'Tomorrow I am taking the Norwegian test', level: 'B1', focus: 'inversjon (V2)', hint: 'Time first → verb comes before the subject: I morgen skal jeg …' },
  { id: 's12', no: 'Nå bor vi i en leilighet i sentrum', en: 'Now we live in an apartment in the centre', level: 'B1', focus: 'inversjon (V2)', hint: 'Nå first → verb second, subject third.' },
  { id: 's13', no: 'På lørdager pleier vi å gå på tur', en: 'On Saturdays we usually go hiking', level: 'B1', focus: 'inversjon (V2)', hint: 'Fronted time phrase forces inversion: pleier vi.' },
  { id: 's14', no: 'For ti år siden flyttet jeg til Norge', en: 'Ten years ago I moved to Norway', level: 'B1', focus: 'inversjon (V2)', hint: 'The whole time phrase counts as position one.' },
  { id: 's15', no: 'Dessverre kan jeg ikke komme på festen', en: 'Unfortunately I cannot come to the party', level: 'B1', focus: 'inversjon (V2)', hint: 'Adverb first → kan jeg ikke …' },
  { id: 's16', no: 'Etter jobb henter hun barna i barnehagen', en: 'After work she picks up the kids from kindergarten', level: 'B1', focus: 'inversjon (V2)', hint: 'Fronted “Etter jobb” pushes the subject after the verb.' },

  // ── B1 · subordinate clauses ──
  { id: 's17', no: 'Jeg tror at det blir fint vær i helgen', en: 'I think the weather will be nice this weekend', level: 'B1', focus: 'leddsetning med at', hint: 'at + subject + verb — no inversion in the subordinate clause.' },
  { id: 's18', no: 'Hun sier at hun ikke har tid i dag', en: 'She says that she doesn’t have time today', level: 'B1', focus: 'ikke i leddsetning', hint: 'In subordinate clauses, ikke comes BEFORE the verb.' },
  { id: 's19', no: 'Hvis det regner i morgen blir vi hjemme', en: 'If it rains tomorrow we will stay home', level: 'B1', focus: 'hvis-setning', hint: 'Condition first, then inversion in the main clause: blir vi.' },
  { id: 's20', no: 'Jeg lærer norsk fordi jeg vil bli statsborger', en: 'I am learning Norwegian because I want to become a citizen', level: 'B1', focus: 'fordi', hint: 'fordi + subject + verb (normal order).' },
  { id: 's21', no: 'Da jeg kom til Norge kunne jeg ikke norsk', en: 'When I came to Norway I didn’t know Norwegian', level: 'B1', focus: 'da-setning', hint: 'Da for a single past event; main clause inverts: kunne jeg.' },
  { id: 's22', no: 'Når jeg er ferdig med kurset skal jeg ta prøven', en: 'When I finish the course I will take the test', level: 'B1', focus: 'når-setning', hint: 'Når for future/repeated events; then skal jeg.' },
  { id: 's23', no: 'Mannen som bor ved siden av meg er lege', en: 'The man who lives next to me is a doctor', level: 'B1', focus: 'som-setning', hint: 'som starts the relative clause about mannen.' },
  { id: 's24', no: 'Vet du om butikken er åpen på søndag', en: 'Do you know if the shop is open on Sunday', level: 'B1', focus: 'indirekte spørsmål', hint: 'om = “if/whether”; normal word order after it.' },
  { id: 's25', no: 'Selv om det var dyrt kjøpte vi huset', en: 'Even though it was expensive we bought the house', level: 'B1', focus: 'selv om', hint: 'Selv om first → inversion in the main clause: kjøpte vi.' },

  // ── B1 · tense and modality ──
  { id: 's26', no: 'Jeg har aldri vært i Nord-Norge', en: 'I have never been to Northern Norway', level: 'B1', focus: 'plassering av aldri', hint: 'aldri sits between har and vært.' },
  { id: 's27', no: 'Du burde snakke mer norsk hjemme', en: 'You should speak more Norwegian at home', level: 'B1', focus: 'modalverb', hint: 'burde + infinitive without å.' },
  { id: 's28', no: 'Vi hadde allerede spist da gjestene kom', en: 'We had already eaten when the guests arrived', level: 'B1', focus: 'preteritum perfektum', hint: 'hadde + spist; allerede between them.' },
  { id: 's29', no: 'Hun kommer til å bestå prøven uten problemer', en: 'She is going to pass the test without problems', level: 'B1', focus: 'framtid', hint: 'kommer til å + infinitive = going to.' },
  { id: 's30', no: 'Det er viktig å øve litt hver dag', en: 'It is important to practise a little every day', level: 'B1', focus: 'infinitiv med å', hint: 'Det er + adjective + å + infinitive.' },

  // ── B2 · complex structures ──
  { id: 's31', no: 'Jo mer du øver desto bedre blir du', en: 'The more you practise, the better you become', level: 'B2', focus: 'jo … desto', hint: 'Jo + comparative … desto + comparative + verb + subject.' },
  { id: 's32', no: 'Til tross for regnet valgte de å gå på tur', en: 'Despite the rain they chose to go hiking', level: 'B2', focus: 'til tross for', hint: 'Fronted phrase → valgte de.' },
  { id: 's33', no: 'Huset som ble bygget i fjor er allerede solgt', en: 'The house that was built last year is already sold', level: 'B2', focus: 'passiv', hint: 'ble bygget = passive past; er solgt = passive perfect.' },
  { id: 's34', no: 'Hadde jeg hatt bedre tid ville jeg ha lest mer', en: 'Had I had more time, I would have read more', level: 'B2', focus: 'kondisjonalis', hint: 'Verb-first conditional: Hadde jeg hatt …' },
  { id: 's35', no: 'Det som overrasket meg mest var hvor dyrt alt er', en: 'What surprised me most was how expensive everything is', level: 'B2', focus: 'utbrytning', hint: 'Det som … var … cleft structure.' },
  { id: 's36', no: 'Etter å ha bodd her i ti år føler jeg meg norsk', en: 'After living here for ten years I feel Norwegian', level: 'B2', focus: 'etter å ha', hint: 'Etter å ha + participle; then inversion: føler jeg.' },
]
