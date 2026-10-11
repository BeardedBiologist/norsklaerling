import type { ListeningQuestion } from '../../types'

/**
 * Comprehension questions for NTNU LearnNoW's texts, keyed by chapter id;
 * one array per text, in A–D order. Every question must be answerable from
 * what the RECORDING says — NTNU's pages sometimes add context that is not
 * spoken (chapter 1 especially), and that must never be asked about. The questions are our own — the texts
 * themselves are NTNU's and are only played/linked, never reproduced.
 * The correct option is always index 0 (options are shuffled at runtime).
 */
export const listeningNybegynner: Record<string, ListeningQuestion[][]> = {
  // Chapter 1's recordings are one greeting each — ask only about what is said.
  '1': [
    [
      { q: 'Hva heter han?', en: 'What is his name?', options: ['Alex', 'Ben', 'Dina', 'Hans'], answer: 0 },
      { q: 'Hva spør han deg om?', en: 'What does he ask you?', options: ['Hva du heter', 'Hvor du kommer fra', 'Hvor gammel du er', 'Hvor du bor'], answer: 0 },
    ],
    [
      { q: 'Hva heter han?', en: 'What is his name?', options: ['Benjamin Vidal', 'Alex Vidal', 'Benjamin Hansen', 'Hans Olsen'], answer: 0 },
      { q: 'Hva sier han til slutt?', en: 'What does he say at the end?', options: ['Hyggelig å hilse på deg!', 'Hva heter du?', 'Ha det bra!', 'Hvor kommer du fra?'], answer: 0 },
    ],
    [
      { q: 'Hva sier Cecilie om seg selv?', en: 'What does Cecilie say about herself?', options: ['At hun er norsk', 'At hun er fransk', 'At hun bor i Paris', 'At hun er lege'], answer: 0 },
      { q: 'Hva spør hun deg om?', en: 'What does she ask you?', options: ['Om du er norsk', 'Hva du heter', 'Hvor du bor', 'Om du snakker fransk'], answer: 0 },
    ],
    [
      { q: 'Hvor kommer Dina fra?', en: 'Where does Dina come from?', options: ['Frankrike', 'Norge', 'Sverige', 'England'], answer: 0 },
      { q: 'Hva spør hun deg om?', en: 'What does she ask you?', options: ['Hvor du kommer fra', 'Hva du heter', 'Om du er norsk', 'Hvor gammel du er'], answer: 0 },
    ],
  ],
  '2': [
    [
      { q: 'Hvem snakker Alex med på flyet?', en: 'Who does Alex talk to on the plane?', options: ['Ei norsk dame', 'Pappa', 'En pilot', 'Dina'], answer: 0 },
      { q: 'Hvor kommer Emma fra?', en: 'Where is Emma from?', options: ['Oslo', 'Paris', 'Fjordvik', 'Bergen'], answer: 0 },
      { q: 'Hvor venter pappa?', en: 'Where is dad waiting?', options: ['På Gardermoen', 'I Paris', 'Hjemme i Fjordvik', 'På togstasjonen'], answer: 0 },
    ],
    [
      { q: 'Hvor er Benjamin?', en: 'Where is Benjamin?', options: ['På en kafé på Gardermoen', 'På et fly', 'Hjemme', 'På jobben'], answer: 0 },
      { q: 'Hvor gammel er Benjamin?', en: 'How old is Benjamin?', options: ['Førti år', 'Trettiåtte år', 'Fjorten år', 'Femti år'], answer: 0 },
      { q: 'Hva heter mannen Benjamin snakker med?', en: 'What is the name of the man Benjamin talks to?', options: ['Ola', 'Hans', 'Per', 'Arne'], answer: 0 },
    ],
    [
      { q: 'Hvem kontrollerer passene?', en: 'Who checks the passports?', options: ['En mann', 'Ei dame', 'Benjamin', 'Emma'], answer: 0 },
      { q: 'Hvilket pass har Alex?', en: 'Which passport does Alex have?', options: ['Et fransk pass', 'Et norsk pass', 'Ingen pass', 'Et svensk pass'], answer: 0 },
      { q: 'Bor familien i Norge fra før?', en: 'Does the family already live in Norway?', options: ['Nei, de flytter dit nå', 'Ja, i mange år', 'Ja, i Oslo', 'Nei, de er på ferie'], answer: 0 },
    ],
    [
      { q: 'Hvem roper «Hei, pappa»?', en: 'Who shouts «Hi, dad»?', options: ['Dina', 'Alex', 'Cecilie', 'Emma'], answer: 0 },
      { q: 'Hvordan har Dina det etter reisen?', en: 'How does Dina feel after the journey?', options: ['Hun er trøtt', 'Hun er sulten', 'Hun er syk', 'Hun er sint'], answer: 0 },
      { q: 'Hvor lang tid tar det å kjøre til Fjordvik?', en: 'How long does it take to drive to Fjordvik?', options: ['Én time', 'Ti minutter', 'Tre timer', 'En halvtime'], answer: 0 },
    ],
  ],
  '3': [
    [
      { q: 'Hvilken dag er det?', en: 'Which day is it?', options: ['Mandag', 'Søndag', 'Fredag', 'Lørdag'], answer: 0 },
      { q: 'Hva venter familien på?', en: 'What is the family waiting for?', options: ['En flyttebil', 'Et fly', 'Mormor og morfar', 'En taxi'], answer: 0 },
      { q: 'Hva tenker Alex på?', en: 'What is Alex thinking about?', options: ['At han må finne en venn', 'At han vil til Paris', 'At han er sulten', 'At han skal på skolen'], answer: 0 },
    ],
    [
      { q: 'Hvor kommer møblene fra?', en: 'Where are the furniture coming from?', options: ['Fra Frankrike', 'Fra en butikk i Fjordvik', 'Fra mormor', 'Fra Oslo'], answer: 0 },
      { q: 'Hvem er Hans Olsen?', en: 'Who is Hans Olsen?', options: ['Naboen', 'Sjåføren', 'Sjefen til Ben', 'Morfar'], answer: 0 },
      { q: 'Hva kan Hans kalle Benjamin?', en: 'What can Hans call Benjamin?', options: ['Ben', 'Benny', 'Jamin', 'Vidal'], answer: 0 },
    ],
    [
      { q: 'Hvor mange soverom har leiligheten?', en: 'How many bedrooms does the flat have?', options: ['Tre', 'To', 'Fire', 'Ett'], answer: 0 },
      { q: 'Hva må familien kjøpe til stua?', en: 'What does the family need to buy for the living room?', options: ['En TV', 'En sofa', 'Et salongbord', 'En lenestol'], answer: 0 },
      { q: 'Hvem ringer Alex til?', en: 'Who does Alex phone?', options: ['Mormor', 'Pappa', 'Dina', 'Naboen'], answer: 0 },
    ],
    [
      { q: 'Hva gjør Dina på rommet?', en: 'What is Dina doing in her room?', options: ['Hun tar bilder av rommet', 'Hun gjør lekser', 'Hun sover', 'Hun ringer pappa'], answer: 0 },
      { q: 'Hvem henger det bilder av på veggen?', en: 'Who are the pictures on the wall of?', options: ['Justin Bieber', 'Familien', 'Vennene i Frankrike', 'Alex'], answer: 0 },
      { q: 'Hvem skal se bildene?', en: 'Who will see the photos?', options: ['Vennene i Frankrike', 'Mamma', 'Lærerne', 'Naboene'], answer: 0 },
    ],
  ],
  '4': [
    [
      { q: 'Hvor er morfar når Alex kommer?', en: 'Where is grandad when Alex arrives?', options: ['På butikken', 'I hagen', 'På jobb', 'I stua'], answer: 0 },
      { q: 'Hvor lang tid tar det å kjøre til mormor og morfar nå?', en: 'How long does it take to drive to the grandparents now?', options: ['Ti minutter', 'En dag', 'En time', 'Fem minutter'], answer: 0 },
      { q: 'Hva vil Alex gjøre med morfar?', en: 'What does Alex want to do with grandad?', options: ['Spille fotball', 'Se på TV', 'Spise middag', 'Gå på tur'], answer: 0 },
    ],
    [
      { q: 'Når står Ben opp?', en: 'When does Ben get up?', options: ['Halv sju', 'Sju', 'Halv åtte', 'Kvart på sju'], answer: 0 },
      { q: 'Hvordan kommer Ben seg til jobben?', en: 'How does Ben get to work?', options: ['Han går', 'Han kjører bil', 'Han tar bussen', 'Han sykler'], answer: 0 },
      { q: 'Hvor skal Cecilie begynne å jobbe?', en: 'Where is Cecilie going to start working?', options: ['På sykehuset', 'På skolen', 'I barnehagen', 'På kontoret'], answer: 0 },
    ],
    [
      { q: 'Hvem skal få pakken?', en: 'Who is the parcel for?', options: ['Moren til Ben', 'Mormor', 'Anne', 'En venninne i Paris'], answer: 0 },
      { q: 'Hvor er postkontoret?', en: 'Where is the post office?', options: ['I butikken Matbua', 'Ved skolen', 'I sentrum', 'Ved kirka'], answer: 0 },
      { q: 'Hvordan kommer Cecilie til postkontoret?', en: 'How does Cecilie get to the post office?', options: ['Anne kjører henne', 'Hun går', 'Hun tar bussen', 'Ben kjører henne'], answer: 0 },
    ],
    [
      { q: 'Hvilken klasse skal Dina begynne i?', en: 'Which class is Dina starting in?', options: ['Niende klasse', 'Første klasse', 'Tiende klasse', 'Sjuende klasse'], answer: 0 },
      { q: 'Hvordan vil Dina komme til skolen?', en: 'How does Dina want to get to school?', options: ['Hun vil gå alene', 'Pappa skal kjøre', 'Hun vil ta bussen', 'Mamma skal gå med henne'], answer: 0 },
      { q: 'Hva gir pappa til Dina?', en: 'What does dad give Dina?', options: ['Et kart', 'En mobil', 'Penger', 'En sykkel'], answer: 0 },
    ],
  ],
  '5': [
    [
      { q: 'Hvor sitter katten?', en: 'Where is the cat sitting?', options: ['På trappa utenfor huset', 'På kjøkkenet', 'I hagen', 'På taket'], answer: 0 },
      { q: 'Hva gir Alex katten?', en: 'What does Alex give the cat?', options: ['Ei skive ost', 'Melk', 'Skinke', 'Fisk'], answer: 0 },
      { q: 'Hvorfor er Alex glad på slutten?', en: 'Why is Alex happy at the end?', options: ['Nå har han en venn', 'Katten er hans', 'Han får is', 'Pappa kommer hjem'], answer: 0 },
    ],
    [
      { q: 'Hvor spiser Ben og kollegaene lunsj?', en: 'Where do Ben and his colleagues eat lunch?', options: ['Ute på terrassen', 'På kontoret', 'På en restaurant', 'I bilen'], answer: 0 },
      { q: 'Hva snakker de om?', en: 'What do they talk about?', options: ['Fotball', 'Været', 'Jobben', 'Familien'], answer: 0 },
      { q: 'Hvilket lag mener Arne er nummer én?', en: 'Which team does Arne think is number one?', options: ['Molde', 'Rosenborg', 'Paris Saint-Germain', 'Et lag fra Oslo'], answer: 0 },
    ],
    [
      { q: 'Hva finner Alex i butikken?', en: 'What does Alex find in the shop?', options: ['Gulrøttene', 'Potetene', 'Melka', 'Laksen'], answer: 0 },
      { q: 'Hva synes Cecilie om prisen?', en: 'What does Cecilie think of the price?', options: ['Det er dyrt', 'Det er billig', 'Det er som i Frankrike', 'Hun sier ingenting'], answer: 0 },
      { q: 'Hvor jobber Anne?', en: 'Where does Anne work?', options: ['I administrasjonen på sykehuset', 'I butikken', 'På skolen', 'I barnehagen'], answer: 0 },
    ],
    [
      { q: 'Hvem har Dina med seg hjem?', en: 'Who does Dina bring home?', options: ['To venninner', 'Alex', 'En lærer', 'Naboen'], answer: 0 },
      { q: 'Hvor kommer lenestolen fra?', en: 'Where does the armchair come from?', options: ['Fra bestemor', 'Fra en butikk', 'Fra Frankrike', 'Fra naboen'], answer: 0 },
      { q: 'Hva sier Dina til Alex?', en: 'What does Dina say to Alex?', options: ['At han må gå ut', 'At han kan komme inn', 'At han skal spise', 'At mamma roper'], answer: 0 },
    ],
  ],
  '6': [
    [
      { q: 'Hvilken dag er det?', en: 'Which day is it?', options: ['Lørdag', 'Mandag', 'Søndag', 'Fredag'], answer: 0 },
      { q: 'Hva hjelper Alex mamma med?', en: 'What does Alex help mum with?', options: ['Å dekke på bordet', 'Å lage kaffe', 'Å vaske opp', 'Å kjøpe brød'], answer: 0 },
      { q: 'Hvorfor vil Dina likevel stå opp?', en: 'Why does Dina get up after all?', options: ['Familien skal til byen', 'Hun er sulten', 'Venninnene kommer', 'Hun skal på skolen'], answer: 0 },
    ],
    [
      { q: 'Hva har Ben og Alex kjøpt?', en: 'What have Ben and Alex bought?', options: ['En ny TV', 'Ei jakke', 'En sofa', 'En PC'], answer: 0 },
      { q: 'Hvor venter Cecilie og Dina?', en: 'Where are Cecilie and Dina waiting?', options: ['På en benk i Nygata', 'På torget', 'På en kafé', 'I bilen'], answer: 0 },
      { q: 'Hvorfor vil Dina gå på kjøpesenteret?', en: 'Why does Dina want to go to the shopping centre?', options: ['Det er salg', 'Hun er sulten', 'Hun skal møte en venn', 'Det regner'], answer: 0 },
    ],
    [
      { q: 'Når skal familien møtes igjen?', en: 'When will the family meet again?', options: ['Klokka halv tre', 'Klokka tre', 'Om to timer', 'Klokka tolv'], answer: 0 },
      { q: 'Hva kjøper Cecilie?', en: 'What does Cecilie buy?', options: ['Et par sko', 'Ei vinterjakke', 'En kjole', 'Ei lue'], answer: 0 },
      { q: 'Hvorfor kjøper hun ikke vinterjakke?', en: 'Why doesn’t she buy a winter jacket?', options: ['De må tilbake til Ben og Alex', 'Butikken er stengt', 'Hun har ikke penger', 'Dina liker ikke jakkene'], answer: 0 },
    ],
    [
      { q: 'Hvorfor vil Dina gå på kafé?', en: 'Why does Dina want to go to a café?', options: ['Hun er sulten og tørst', 'Hun skal møte Eva', 'Det regner', 'Hun vil se på folk'], answer: 0 },
      { q: 'Hvilken kake får de?', en: 'Which cake do they get?', options: ['Eplekake', 'Sjokoladekake', 'Bløtkake', 'Gulrotkake'], answer: 0 },
      { q: 'Hvordan betaler de?', en: 'How do they pay?', options: ['Med kort', 'Med en tohundrelapp', 'Med Vipps', 'Dina betaler med egne penger'], answer: 0 },
    ],
  ],
  '7': [
    [
      { q: 'Hva tenker Alex på når han våkner?', options: ['Dagen i går', 'Barnehagen', 'Katten', 'Julaften'], answer: 0 },
      { q: 'Hvordan betalte pappa på kafeen?', options: ['Med kort', 'Med kontanter', 'Mamma betalte', 'Det var gratis'], answer: 0 },
      { q: 'Hvem skremmer Alex?', options: ['Dina', 'Pappa', 'Katten', 'Mamma'], answer: 0 },
    ],
    [
      { q: 'Hva slags firma jobber Ben i?', options: ['Et byggfirma', 'Et sykehus', 'En bank', 'En butikk'], answer: 0 },
      { q: 'Hva gjør Ben når han har problemer?', options: ['Han ringer til Arne', 'Han går hjem', 'Han spør sjefen', 'Han sender en e-post til Cecilie'], answer: 0 },
      { q: 'Når drar Ben hjem?', options: ['Klokka halv fem', 'Klokka tolv', 'Klokka åtte', 'Klokka seks'], answer: 0 },
    ],
    [
      { q: 'Hvor var Cecilie i morges?', options: ['I barnehagen med Alex', 'På jobb', 'På butikken', 'Hos moren sin'], answer: 0 },
      { q: 'Hva heter Alex sin nye bestevenn?', options: ['Jens', 'Robin', 'Erik', 'Ole'], answer: 0 },
      { q: 'Hva sa Alex til mamma etter en time?', options: ['At hun kunne gå hjem', 'At han ville hjem', 'At han var sulten', 'At han var lei seg'], answer: 0 },
    ],
    [
      { q: 'Hvem kom Dina i klasse med?', options: ['Tone og Eva', 'Ole og Ingrid', 'Jens og Alex', 'Ingen hun kjente'], answer: 0 },
      { q: 'Hva spurte jentene i klassen om?', options: ['Frankrike og Paris', 'Familien hennes', 'Fotball', 'Leksene'], answer: 0 },
      { q: 'Hvordan var læreren Ingrid?', options: ['Hun ble fort sint og sur', 'Hun var gammel og snill', 'Hun var morsom', 'Hun var syk'], answer: 0 },
    ],
  ],
  '8': [
    [
      { q: 'Hvem henter Alex i barnehagen i dag?', options: ['Dina', 'Mamma', 'Pappa', 'Mormor'], answer: 0 },
      { q: 'Hvorfor blir Dina flau?', options: ['Alex gir henne en stor klem', 'Hun kommer for seint', 'Hun glemmer jakka', 'Jens ler av henne'], answer: 0 },
      { q: 'Hva skal de lage når de kommer hjem?', options: ['Pannekaker', 'Pizza', 'Kake', 'Middag med fisk'], answer: 0 },
    ],
    [
      { q: 'Hvorfor går Ben på norskkurs?', options: ['Han er ikke så flink til å skrive norsk', 'Han kan ikke snakke norsk', 'Sjefen krever det', 'Han vil bli lærer'], answer: 0 },
      { q: 'Hvorfor er Ben trøtt på kurset?', options: ['Lang dag og tung middag', 'Han har sovet dårlig', 'Kurset er kjedelig', 'Han er syk'], answer: 0 },
      { q: 'Hvordan føler Ben seg etter kurset?', options: ['Fornøyd', 'Lei seg', 'Sint', 'Skuffet'], answer: 0 },
    ],
    [
      { q: 'Hvorfor vil Cecilie ut på tur i dag?', options: ['Det er fint vær, men det blir regn i morgen', 'Hun har fri fra jobb hele uka', 'Anne har spurt henne', 'Det er salg i byen'], answer: 0 },
      { q: 'Hvordan vil Cecilie dra på tur?', options: ['På sykkel', 'Med bil', 'Til fots', 'Med buss'], answer: 0 },
      { q: 'Hvor skal Cecilie og Anne møtes?', options: ['Ved den gamle parkeringsplassen', 'Ved hytta på Skogly', 'Hjemme hos Anne', 'På Høgåsen'], answer: 0 },
    ],
    [
      { q: 'Hva synes Dina er forskjellig fra skolen i Frankrike?', options: ['Det var mer disiplin og flere lekser der', 'Det var færre elever der', 'Lærerne var snillere der', 'Skolen var mindre der'], answer: 0 },
      { q: 'Hvilke fag liker Dina?', options: ['Språk og historie', 'Matematikk og naturfag', 'Gym og musikk', 'Bare samfunnsfag'], answer: 0 },
      { q: 'Hvorfor har ikke Dina gjort leksene?', options: ['Hun laget pannekaker med Alex', 'Hun var syk', 'Hun spilte håndball', 'Hun visste ikke om dem fordi hun var borte'], answer: 0 },
    ],
  ],
  '9': [
    [
      { q: 'Hvorfor trengte barnehagen en vikar?', options: ['En barnehagelærer var syk', 'Eli var på ferie', 'De skulle ha to busser', 'Bussjåføren kom ikke'], answer: 0 },
      { q: 'Hvem pakket sekken til Alex?', options: ['Alex selv', 'Mamma', 'Pappa', 'Eli'], answer: 0 },
      { q: 'Hvor ligger støvlene til Alex?', options: ['I sekken', 'Hjemme', 'I bagasjerommet', 'På føttene hans'], answer: 0 },
    ],
    [
      { q: 'Hva skal Rønne Bygg AS bygge?', options: ['Et kjøpesenter utenfor Fjordvik', 'Et nytt sykehus', 'En skole', 'Boliger i sentrum'], answer: 0 },
      { q: 'Når skal senteret være ferdig?', options: ['Om to og et halvt år', 'Om fem måneder', 'Neste uke', 'Om ett år'], answer: 0 },
      { q: 'Hva spør sjefen Ben om etter møtet?', options: ['Om han vil være prosjektleder', 'Om han kan jobbe overtid', 'Om han vil ha mer lønn', 'Om han kan ringe Mathisen'], answer: 0 },
    ],
    [
      { q: 'Hva gjør Cecilie mest nå på jobben?', options: ['Tar prøver av pasienter som kommer til undersøkelse og kontroll', 'Jobber med akutt syke pasienter', 'Opererer pasienter', 'Jobber i administrasjonen'], answer: 0 },
      { q: 'Hva er forskjellig fra jobben i Frankrike?', options: ['Hun bruker mye mer tid foran datamaskinen', 'Hun har flere pasienter', 'Hun jobber om natta', 'Hun har kortere dager'], answer: 0 },
      { q: 'Hva liker ikke Marit Andersen?', options: ['Å se blod', 'Å vente', 'Å kjøre bil', 'Sykehus'], answer: 0 },
    ],
    [
      { q: 'Hva skal avisa handle om?', options: ['Yrker og arbeidsliv', 'Musikk', 'Sport', 'Skolen'], answer: 0 },
      { q: 'Hvorfor vil ikke Dina bli ingeniør?', options: ['Hun hater matematikk', 'Hun liker ikke å se blod', 'Det er dårlig lønn', 'Pappa sier nei'], answer: 0 },
      { q: 'Hva vil Dina skrive om?', options: ['Læreryrket', 'Sykepleiere', 'Popstjerner', 'Piloter'], answer: 0 },
    ],
  ],
  '10': [
    [
      { q: 'Hvorfor våkner Ben midt på natta?', options: ['Alex gråter', 'Telefonen ringer', 'Det regner', 'Cecilie er syk'], answer: 0 },
      { q: 'Hvor høy feber har Alex?', options: ['Over 39 grader', 'Litt over 37', '38 grader', '41 grader'], answer: 0 },
      { q: 'Hva tror Cecilie at Alex har?', options: ['Influensa', 'Vondt i magen', 'Utslett', 'Halsbetennelse'], answer: 0 },
    ],
    [
      { q: 'Hvorfor ringer Ben til jobben?', options: ['Han må være hjemme med Alex', 'Han er syk selv', 'Han kommer for seint', 'Han vil ha fri'], answer: 0 },
      { q: 'Når må man levere legeerklæring?', options: ['Når man er hjemme i mer enn tre dager', 'Alltid', 'Etter én dag', 'Aldri'], answer: 0 },
      { q: 'Hva vil Ben hente på kontoret?', options: ['Den bærbare PC-en', 'Noen permer', 'Bilen', 'Tran'], answer: 0 },
    ],
    [
      { q: 'Hva skal Cecilie lære på kurset?', options: ['Hjerte- og lungeredning', 'Å ta blodprøver', 'Datasystemer', 'Tannhelse'], answer: 0 },
      { q: 'Hva er problemet til Sissel?', options: ['Hun har vondt i ei tann', 'Hun har feber', 'Hun har vondt i ryggen', 'Hun er stresset'], answer: 0 },
      { q: 'Når får Sissel time hos tannlegen?', options: ['Neste dag', 'Samme dag', 'Neste måned', 'Om en uke'], answer: 0 },
    ],
    [
      { q: 'Hvor ofte trener Dina håndball?', options: ['To ganger i uka', 'Hver dag', 'Én gang i uka', 'Bare i helgene'], answer: 0 },
      { q: 'Hva er viktig i håndball, ifølge teksten?', options: ['Sterke bein, god kondisjon og taktikk', 'Bare muskler', 'Bare å kaste hardt', 'Å være høy'], answer: 0 },
      { q: 'Hva er Dinas største drøm?', options: ['Å bli profesjonell håndballspiller', 'Å bli trener', 'Å flytte til Frankrike', 'Å bli lærer'], answer: 0 },
    ],
  ],
  '11': [
    [
      { q: 'Hvem spiller teater i barnehagen?', options: ['Et ektepar med dokketeater', 'Barna selv', 'Eli og Erik', 'En skoleklasse'], answer: 0 },
      { q: 'Hvordan forandrer skomakeren seg i eventyret?', options: ['Han blir mer hjelpsom og mindre sur', 'Han blir rik', 'Han flytter', 'Han blir syk'], answer: 0 },
      { q: 'Hvorfor synes Alex synd på skomakeren?', options: ['Han har ikke et ordentlig barn', 'Han er fattig', 'Han er alene på julaften', 'Han mistet dokka'], answer: 0 },
    ],
    [
      { q: 'Hvorfor gleder Ben seg til turen?', options: ['Han har aldri vært på ei norsk hytte', 'Han skal møte kongen', 'Han liker å kjøre bil', 'Det er hans fødselsdag'], answer: 0 },
      { q: 'Hva mangler hytta?', options: ['Toalett inne', 'Strøm', 'Vann', 'Senger'], answer: 0 },
      { q: 'Hva henger på veggen på utedoen?', options: ['Et bilde av kongen og et dikt', 'Et kart', 'En kalender', 'Et speil'], answer: 0 },
    ],
    [
      { q: 'Hvem er Nina?', options: ['Cecilies beste venninne fra tenårene', 'Søstera til Cecilie', 'En kollega', 'Naboen'], answer: 0 },
      { q: 'Hva synes Cecilie om opera først?', options: ['Hun er usikker på om hun liker det', 'Hun elsker opera', 'Hun har aldri hørt om det', 'Hun synger opera selv'], answer: 0 },
      { q: 'Hva skal de gjøre på søndag?', options: ['Gå på Nasjonalgalleriet', 'Se «Peer Gynt»', 'Gå på kino', 'Reise hjem'], answer: 0 },
    ],
    [
      { q: 'Hvorfor drar jentene til Gardermoen?', options: ['De har hørt rykter om at Justin Bieber kommer dit', 'De skal reise til Frankrike', 'De skal hente pappa', 'De har billetter til et fly'], answer: 0 },
      { q: 'Hvor er konserten?', options: ['Ved Operaen i Oslo', 'På Gardermoen', 'I Fjordvik', 'På et stadion'], answer: 0 },
      { q: 'Hva synes Dina om konserten?', options: ['Kjempebra, men altfor kort', 'Kjedelig', 'For lang', 'Hun hørte ingenting'], answer: 0 },
    ],
  ],
  '12': [
    [
      { q: 'Hvorfor har Alex sovet lite?', options: ['Han gledet seg til julaften', 'Han var syk', 'Det var kaldt', 'Dina vekket ham'], answer: 0 },
      { q: 'Hva lager Alex i snøen?', options: ['En snømann', 'Et snøslott', 'En snøhule', 'En snøengel'], answer: 0 },
      { q: 'Hvorfor er ikke Dina fornøyd med bildene?', options: ['Kameraet er for dårlig, så noen bilder blir uskarpe', 'Det er for mørkt', 'Alex vil ikke være med', 'Hun har glemt kameraet'], answer: 0 },
    ],
    [
      { q: 'Hvem kommer på besøk på julaften?', options: ['Foreldrene til Cecilie', 'Naboene', 'Bens familie fra Frankrike', 'Nina'], answer: 0 },
      { q: 'Hvor har gjestene vært før de kommer?', options: ['I kirka', 'På butikken', 'På hytta', 'Hjemme hos Per og Kari'], answer: 0 },
      { q: 'Hva tenker Ben om alle gavene?', options: ['Barna blir bortskjemte', 'Det er for få', 'De er for dyre for besteforeldrene', 'Han vil ha flere selv'], answer: 0 },
    ],
    [
      { q: 'Hva serverer Cecilie til julemiddag?', options: ['Ribbe', 'Lutefisk', 'Pinnekjøtt', 'Torsk'], answer: 0 },
      { q: 'Hva synes Ben om lutefisk?', options: ['Han er skeptisk', 'Han elsker det', 'Han har aldri hørt om det', 'Han lager det selv'], answer: 0 },
      { q: 'Hvorfor sier Ben at de skal sove middag?', options: ['Han tuller med Alex', 'Han er veldig trøtt', 'Det er en fransk tradisjon', 'Alex er syk'], answer: 0 },
    ],
    [
      { q: 'Hvem er familiens «pakkesjef»?', options: ['Dina', 'Alex', 'Mamma', 'Morfar'], answer: 0 },
      { q: 'Hva får Alex fra onkel Per og tante Kari?', options: ['Et stort byggesett med lego', 'Et kamera', 'En bok', 'En fotball'], answer: 0 },
      { q: 'Hva får Dina fra mamma og pappa?', options: ['Et speilreflekskamera', 'En mobil', 'Billetter til en konsert', 'Ei jakke'], answer: 0 },
    ],
  ],
}
