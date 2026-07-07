import type { QuizQuestion } from '../types'

/**
 * Grammar and usage questions in norskprøven style: pick the sentence or
 * form that is correct, with a short explanation of the rule.
 */
export const grammarQuiz: QuizQuestion[] = [
  // ── A2 ──
  { id: 'q01', question: 'Hvilken setning er riktig?', options: ['Jeg liker ikke fisk.', 'Jeg ikke liker fisk.', 'Ikke jeg liker fisk.', 'Jeg liker fisk ikke aldri.'], answer: 0, explanation: 'I hovedsetninger kommer «ikke» etter verbet: Jeg liker ikke fisk.', level: 'A2', topic: 'nektelse' },
  { id: 'q02', question: 'Hva er flertall av «en bok»?', options: ['bøker', 'boker', 'bokene', 'bøkene'], answer: 0, explanation: '«Bok» har vokalskifte i flertall: en bok – bøker – bøkene.', level: 'A2', topic: 'substantiv' },
  { id: 'q03', question: '___ heter du?', options: ['Hva', 'Hvor', 'Hvem', 'Hvordan'], answer: 0, explanation: 'Man spør «Hva heter du?» — ikke «hvordan» som på engelsk.', level: 'A2', topic: 'spørreord' },
  { id: 'q04', question: 'Jeg ___ i Norge i ti år.', options: ['har bodd', 'bor', 'bodde', 'skal bo'], answer: 0, explanation: 'Presens perfektum (har bodd) brukes når noe startet i fortiden og fortsatt pågår.', level: 'A2', topic: 'verbtid' },
  { id: 'q05', question: 'Hva er riktig: «___ hus er stort.»', options: ['Huset', 'Hus', 'Husene', 'Huser'], answer: 0, explanation: 'Bestemt form entall av «et hus» er «huset». Men merk: setningen «Huset er stort» dropper ordet «hus» etterpå.', level: 'A2', topic: 'substantiv' },
  { id: 'q06', question: 'Klokka er 07:30. Hva sier du?', options: ['Klokka er halv åtte.', 'Klokka er halv sju.', 'Klokka er sju og tretti.', 'Klokka er åtte og halv.'], answer: 0, explanation: 'På norsk teller «halv» mot NESTE time: 07:30 = halv åtte.', level: 'A2', topic: 'tid' },
  { id: 'q07', question: 'Jeg gleder meg ___ sommeren.', options: ['til', 'på', 'for', 'av'], answer: 0, explanation: 'Fast uttrykk: å glede seg TIL noe.', level: 'A2', topic: 'preposisjoner' },
  { id: 'q08', question: 'Hun er ___ enn broren sin.', options: ['eldre', 'mer gammel', 'eldst', 'gamlere'], answer: 0, explanation: 'Komparativ av «gammel» er «eldre» (uregelrett).', level: 'A2', topic: 'adjektiv' },
  { id: 'q09', question: 'Vi ___ på kino i går.', options: ['gikk', 'går', 'har gått', 'skal gå'], answer: 0, explanation: '«I går» krever preteritum: gikk.', level: 'A2', topic: 'verbtid' },
  { id: 'q10', question: 'Hva er riktig rekkefølge? «___ du norsk?»', options: ['Snakker', 'Du snakker', 'Snakke', 'Å snakke'], answer: 0, explanation: 'Ja/nei-spørsmål begynner med verbet: Snakker du norsk?', level: 'A2', topic: 'spørsmål' },
  { id: 'q11', question: 'Barna ___ ute nå.', options: ['leker', 'leke', 'lekte', 'har lekt'], answer: 0, explanation: '«Nå» krever presens: leker.', level: 'A2', topic: 'verbtid' },
  { id: 'q12', question: 'Jeg bor ___ Oslo.', options: ['i', 'på', 'til', 'hos'], answer: 0, explanation: 'Man bor I byer: i Oslo, i Bergen. («På» brukes for noen mindre steder.)', level: 'A2', topic: 'preposisjoner' },

  // ── B1 ──
  { id: 'q13', question: 'Hvilken setning er riktig?', options: ['I morgen skal jeg jobbe.', 'I morgen jeg skal jobbe.', 'Jeg i morgen skal jobbe.', 'Skal i morgen jeg jobbe.'], answer: 0, explanation: 'V2-regelen: Når noe annet enn subjektet står først, kommer verbet før subjektet.', level: 'B1', topic: 'ordstilling' },
  { id: 'q14', question: 'Hun sier at hun ___ komme i kveld.', options: ['ikke kan', 'kan ikke', 'ikke kunne har', 'kan aldri ikke'], answer: 0, explanation: 'I leddsetninger kommer «ikke» FØR verbet: … at hun ikke kan komme.', level: 'B1', topic: 'ordstilling' },
  { id: 'q15', question: 'Jeg ___ at norsk er vanskelig.', options: ['synes', 'tror', 'tenker', 'mener på'], answer: 0, explanation: '«Synes» brukes om egen subjektiv opplevelse. «Tror» handler om noe man er usikker på.', level: 'B1', topic: 'ordvalg' },
  { id: 'q16', question: '___ jeg var liten, bodde vi i Polen.', options: ['Da', 'Når', 'Hvis', 'Om'], answer: 0, explanation: '«Da» brukes om én periode/hendelse i fortiden. «Når» brukes om gjentakelse og framtid. Husk: «den gang da, hver gang når».', level: 'B1', topic: 'ordvalg' },
  { id: 'q17', question: 'Boka ___ av mange studenter.', options: ['leses', 'leser', 'lese', 'har lese'], answer: 0, explanation: 'S-passiv: Boka leses = boka blir lest.', level: 'B1', topic: 'passiv' },
  { id: 'q18', question: 'Han kjøpte bilen ___ han egentlig ikke hadde råd.', options: ['selv om', 'fordi', 'derfor', 'så'], answer: 0, explanation: '«Selv om» = even though. «Fordi» gir grunn, «derfor» gir følge.', level: 'B1', topic: 'konjunksjoner' },
  { id: 'q19', question: 'Det regnet, ___ ble kampen avlyst.', options: ['derfor', 'fordi', 'siden', 'ettersom'], answer: 0, explanation: '«Derfor» innleder følgen (og gir inversjon): … derfor ble kampen avlyst.', level: 'B1', topic: 'konjunksjoner' },
  { id: 'q20', question: 'Jeg har bodd her ___ 2016.', options: ['siden', 'for', 'i', 'på'], answer: 0, explanation: '«Siden» + tidspunkt (2016). «I» + varighet (i åtte år).', level: 'B1', topic: 'preposisjoner' },
  { id: 'q21', question: 'Hva er riktig?', options: ['Hun vasker seg.', 'Hun vasker henne.', 'Hun vasker hun.', 'Hun vasker sine.'], answer: 0, explanation: 'Refleksivt pronomen «seg» når subjektet gjør noe med seg selv. «Henne» ville vært en annen person.', level: 'B1', topic: 'pronomen' },
  { id: 'q22', question: 'Per og kona ___ bor i Tromsø.', options: ['hans', 'sin', 'si', 'deres'], answer: 0, explanation: 'I subjektet kan man ikke bruke «sin»: «kona hans». «Sin» viser tilbake til subjektet i samme setning.', level: 'B1', topic: 'pronomen' },
  { id: 'q23', question: 'Jeg trenger ___ nytt pass.', options: ['et', 'en', 'ei', 'den'], answer: 0, explanation: '«Pass» er intetkjønn: et pass.', level: 'B1', topic: 'substantiv' },
  { id: 'q24', question: 'Hvilken setning er riktig?', options: ['Hvis jeg vinner, skal jeg reise jorda rundt.', 'Hvis jeg vinner, jeg skal reise jorda rundt.', 'Hvis jeg vinner, jorda rundt skal jeg reise.', 'Hvis vinner jeg, skal jeg reise jorda rundt.'], answer: 0, explanation: 'Leddsetning først → inversjon i hovedsetningen: skal jeg.', level: 'B1', topic: 'ordstilling' },
  { id: 'q25', question: 'Han spurte ___ jeg kunne hjelpe ham.', options: ['om', 'at', 'hvis', 'for'], answer: 0, explanation: 'Indirekte ja/nei-spørsmål bruker «om»: Han spurte om jeg kunne …', level: 'B1', topic: 'konjunksjoner' },
  { id: 'q26', question: 'Dette er mannen ___ hjalp meg i går.', options: ['som', 'hvem', 'hvilken', 'at'], answer: 0, explanation: 'Relativpronomen på norsk er «som» — aldri «hvem».', level: 'B1', topic: 'pronomen' },
  { id: 'q27', question: 'Du må huske ___ ta med paraply.', options: ['å', 'og', 'at', 'om'], answer: 0, explanation: 'Infinitivsmerket er «å»: huske å ta. («Og» binder sammen to like ledd.)', level: 'B1', topic: 'ordvalg' },
  { id: 'q28', question: 'Maten ___ på bordet da vi kom hjem.', options: ['sto', 'stilte', 'la', 'satt'], answer: 0, explanation: 'Ting som er plassert vertikalt/på flate «står»: Maten sto på bordet.', level: 'B1', topic: 'ordvalg' },
  { id: 'q29', question: 'Hvor mange ___ har leiligheten?', options: ['rom', 'rommer', 'rommene', 'romer'], answer: 0, explanation: 'Korte intetkjønnsord får ikke endelse i ubestemt flertall: et rom – flere rom.', level: 'B1', topic: 'substantiv' },
  { id: 'q30', question: 'Jeg er interessert ___ norsk historie.', options: ['i', 'på', 'av', 'for'], answer: 0, explanation: 'Fast uttrykk: interessert I noe.', level: 'B1', topic: 'preposisjoner' },

  // ── B2 ──
  { id: 'q31', question: 'Rapporten må ___ innen fredag.', options: ['leveres', 'levere', 'levert', 'leverte'], answer: 0, explanation: 'Modalverb + s-passiv: må leveres (= må bli levert).', level: 'B2', topic: 'passiv' },
  { id: 'q32', question: '___ han hatt mer erfaring, ville han fått jobben.', options: ['Hadde', 'Har', 'Skulle', 'Ville'], answer: 0, explanation: 'Kondisjonalis uten «hvis»: Hadde han hatt … (verbet først).', level: 'B2', topic: 'kondisjonalis' },
  { id: 'q33', question: 'Det er ingen tvil ___ at klimaet endrer seg.', options: ['om', 'på', 'i', 'til'], answer: 0, explanation: 'Fast uttrykk: tvil OM noe.', level: 'B2', topic: 'preposisjoner' },
  { id: 'q34', question: 'Jo mer du leser, ___ blir ordforrådet ditt.', options: ['desto større', 'større', 'jo større', 'mer stort'], answer: 0, explanation: '«Jo … desto …» + komparativ: Jo mer du leser, desto større blir ordforrådet.', level: 'B2', topic: 'ordstilling' },
  { id: 'q35', question: 'Hvilket ord betyr omtrent det samme som «å hevde»?', options: ['å påstå', 'å spørre', 'å nekte', 'å tvile'], answer: 0, explanation: '«Å hevde» og «å påstå» betyr begge å si noe bestemt uten nødvendigvis bevis.', level: 'B2', topic: 'ordforråd' },
  { id: 'q36', question: 'Forslaget ble vedtatt ___ stor motstand fra opposisjonen.', options: ['til tross for', 'på grunn av', 'takket være', 'i tillegg til'], answer: 0, explanation: '«Til tross for» = despite. «På grunn av» = because of.', level: 'B2', topic: 'preposisjonsuttrykk' },
  { id: 'q37', question: 'Hun uttalte seg ___ saken på pressekonferansen.', options: ['om', 'over', 'ved', 'etter'], answer: 0, explanation: 'Fast uttrykk: å uttale seg OM noe.', level: 'B2', topic: 'preposisjoner' },
  { id: 'q38', question: 'Hvilken setning er mest formell?', options: ['Vi ber Dem vennligst ta kontakt ved eventuelle spørsmål.', 'Bare ring hvis det er noe!', 'Slå på tråden om du lurer på noe.', 'Spør i vei!'], answer: 0, explanation: 'Formelt skriftspråk bruker høflighetsformer og faste fraser som «ved eventuelle spørsmål».', level: 'B2', topic: 'stil' },
  { id: 'q39', question: '«Å slå to fluer i en smekk» betyr:', options: ['å oppnå to ting på én gang', 'å gjøre en stor feil', 'å skynde seg', 'å gi opp'], answer: 0, explanation: 'Idiom: to kill two birds with one stone.', level: 'B2', topic: 'idiomer' },
  { id: 'q40', question: '«Å ta det med en klype salt» betyr:', options: ['å ikke tro helt på noe', 'å like maten', 'å bli fornærmet', 'å glemme noe'], answer: 0, explanation: 'Idiom: to take something with a pinch of salt — ikke ta det helt bokstavelig.', level: 'B2', topic: 'idiomer' },
]
