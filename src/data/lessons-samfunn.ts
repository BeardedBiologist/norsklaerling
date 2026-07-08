import type { Lesson } from '../types'

/**
 * Samfunnskunnskap chapters — the LEARN half of the citizenship module.
 * Written in simple Norwegian (the real test is in Norwegian, so reading
 * these IS test practice) with English translations per section.
 */
export const samfunnLessons: Lesson[] = [
  {
    id: 's-historie',
    title: 'Norges historie',
    titleEn: 'Norwegian history',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Fra vikingtid til oljefond — hele linjen, med de fire årstallene alle spør om.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (historie)' },
    sections: [
      {
        heading: 'Før 1814: vikinger, kristendom og dansketid',
        body: 'I vikingtiden (ca. 800–1050) seilte nordmenn til England, Irland og Island — noen for å handle, andre for å plyndre. Rundt år 1030 ble Norge kristnet; slaget på Stiklestad, der kong Olav den hellige falt, regnes som et vendepunkt.\n\nFra 1380 til 1814 var Norge i union med Danmark — perioden kalles ofte «dansketiden». København var hovedstad, og dansk ble skriftspråket i Norge. Det er grunnen til at bokmål og dansk fortsatt ligner på hverandre.',
        bodyEn: 'In the Viking Age (c. 800–1050), Norwegians sailed to England, Ireland and Iceland — some to trade, others to raid. Around the year 1030 Norway became Christian; the battle of Stiklestad, where King Olav the Holy fell, is seen as a turning point.\n\nFrom 1380 to 1814 Norway was in a union with Denmark — often called “the Danish era”. Copenhagen was the capital, and Danish became the written language in Norway. That is why bokmål and Danish still resemble each other.',
      },
      {
        heading: '1814 — Grunnloven',
        body: 'I 1814 tapte Danmark Napoleonskrigene og måtte gi Norge til Sverige. Men før svenskene rakk å overta, møttes 112 menn på Eidsvoll og skrev Norges grunnlov. Grunnloven ble underskrevet 17. mai 1814 — derfor er 17. mai Norges nasjonaldag. Vi feirer med barnetog, bunad og is, ikke med militærparade.\n\nGrunnloven var inspirert av den amerikanske og franske, og var en av Europas mest demokratiske: makten skulle deles, og borgerne skulle ha rettigheter. Etter en kort krig høsten 1814 måtte Norge likevel inn i union med Sverige — men fikk beholde grunnloven og sitt eget storting.',
        bodyEn: 'In 1814 Denmark lost the Napoleonic wars and had to cede Norway to Sweden. But before the Swedes could take over, 112 men met at Eidsvoll and wrote Norway’s constitution. It was signed on 17 May 1814 — which is why 17 May is the national day, celebrated with children’s parades, bunad and ice cream, not military parades.\n\nThe constitution was inspired by the American and French ones and was among Europe’s most democratic: power was to be divided and citizens were to have rights. After a short war in the autumn of 1814 Norway still had to enter a union with Sweden — but kept its constitution and its own parliament.',
      },
      {
        heading: '1905 — et fritt land',
        body: 'Unionen med Sverige ble oppløst fredelig i 1905 etter en folkeavstemning. Norge ble et helt selvstendig land og valgte sin egen konge: den danske prinsen Carl, som tok navnet Haakon 7. Dagens konge, Harald 5., er hans sønnesønn.\n\nRundt 1900 var Norge et fattig land. Mellom 1850 og 1920 utvandret om lag 800 000 nordmenn til Amerika — bare Irland sendte en større andel av folket sitt. Samtidig kom industrialiseringen: vannkraften ga fabrikker og etter hvert elektrisitet til hele landet.',
        bodyEn: 'The union with Sweden was dissolved peacefully in 1905 after a referendum. Norway became fully independent and chose its own king: the Danish prince Carl, who took the name Haakon VII. Today’s king, Harald V, is his grandson.\n\nAround 1900 Norway was a poor country. Between 1850 and 1920 about 800,000 Norwegians emigrated to America — only Ireland sent a larger share of its people. At the same time industrialisation arrived: hydropower brought factories and eventually electricity to the whole country.',
      },
      {
        heading: '1940–1945: krigen',
        body: 'Under andre verdenskrig ble Norge angrepet av Tyskland 9. april 1940. Kongen og regjeringen nektet å overgi seg, flyktet til England og ledet motstanden derfra. Nazisten Vidkun Quisling utropte seg til leder i Norge — navnet hans er i dag et internasjonalt ord for landsforræder.\n\nMotstandsbevegelsen («hjemmefronten») drev sabotasje og spredte illegale aviser. Mest kjent er tungtvannsaksjonen på Rjukan i 1943, som hindret det tyske atomvåpenprogrammet. Norge ble frigjort 8. mai 1945.',
        bodyEn: 'During World War II Norway was attacked by Germany on 9 April 1940. The king and government refused to surrender, fled to England and led the resistance from there. The Nazi Vidkun Quisling declared himself leader of Norway — his name is today an international word for traitor.\n\nThe resistance movement carried out sabotage and spread illegal newspapers. Most famous is the heavy water sabotage at Rjukan in 1943, which hindered the German nuclear weapons programme. Norway was liberated on 8 May 1945.',
      },
      {
        heading: 'Etterkrigstid og oljen',
        body: 'Etter krigen bygde Norge opp velferdsstaten: Folketrygden, gratis utdanning og helsevesen for alle. På slutten av 1960-tallet fant man olje i Nordsjøen (Ekofisk-feltet, 1969), og oljen og gassen gjorde Norge til et av verdens rikeste land.\n\nStaten sparer oljeinntektene i Statens pensjonsfond utland — «Oljefondet» — verdens største statlige fond. Politikerne kan bare bruke en liten del av fondet hvert år («handlingsregelen»), slik at rikdommen også kommer framtidige generasjoner til gode.\n\nÅrstall å kunne utenat: 1814 (Grunnloven) · 1905 (unionsoppløsning) · 1940–45 (krigen) · 1969 (oljen).',
        bodyEn: 'After the war Norway built the welfare state: National Insurance, free education and healthcare for all. At the end of the 1960s oil was found in the North Sea (Ekofisk, 1969), and oil and gas made Norway one of the world’s richest countries.\n\nThe state saves the oil income in the Government Pension Fund Global — “the Oil Fund” — the world’s largest sovereign fund. Politicians may only spend a small share each year (“the fiscal rule”), so the wealth benefits future generations too.\n\nYears to know by heart: 1814 (constitution) · 1905 (independence) · 1940–45 (the war) · 1969 (oil).',
      },
    ],
  },
  {
    id: 's-geografi',
    title: 'Geografi og befolkning',
    titleEn: 'Geography and population',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Fjell, fjorder, fylker og folketall — pluss Svalbard og samene.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (geografi)' },
    sections: [
      {
        body: 'Norge har i overkant av 5,5 millioner innbyggere. Hovedstaden er Oslo, som også er den største byen. Andre store byer er Bergen, Trondheim, Stavanger og Drammen.\n\nNorge grenser til tre land: Sverige (lengst), Finland og Russland (kortest, helt i nord). Landet er langt og smalt — fra Lindesnes i sør til Nordkapp i nord er det like langt som fra Lindesnes til Roma.',
        bodyEn: 'Norway has just over 5.5 million inhabitants. The capital is Oslo, which is also the largest city. Other large cities are Bergen, Trondheim, Stavanger and Drammen.\n\nNorway borders three countries: Sweden (longest border), Finland, and Russia (shortest, in the far north). The country is long and narrow — from Lindesnes in the south to the North Cape is as far as from Lindesnes to Rome.',
      },
      {
        heading: 'Natur og klima',
        body: 'Norges høyeste fjell er Galdhøpiggen (2 469 meter) i Jotunheimen. Den lengste fjorden er Sognefjorden — «fjordenes konge». Den største innsjøen er Mjøsa, og den lengste elva er Glomma.\n\nTakket være Golfstrømmen er klimaet mye mildere enn andre steder like langt nord. Nord for polarsirkelen har man midnattssol om sommeren og mørketid om vinteren — i Tromsø varer mørketiden i rundt to måneder. Da er nordlyset til gjengjeld på sitt vakreste.',
        bodyEn: 'Norway’s highest mountain is Galdhøpiggen (2,469 m) in Jotunheimen. The longest fjord is the Sognefjord — “the king of fjords”. The largest lake is Mjøsa and the longest river is Glomma.\n\nThanks to the Gulf Stream the climate is much milder than other places equally far north. North of the Arctic Circle there is midnight sun in summer and polar night in winter — in Tromsø the dark period lasts about two months. In return, that is when the northern lights are at their most beautiful.',
      },
      {
        heading: 'Fylker, kommuner og Svalbard',
        body: 'Norge er delt inn i fylker og rundt 350 kommuner. Kommunen har ansvar for det nære: skole, barnehage, eldreomsorg og vann. Fylkeskommunen har ansvar for blant annet videregående skoler og fylkesveier.\n\nSvalbard, øygruppen langt mot nord, er norsk territorium med spesielle regler etter Svalbardtraktaten. Longyearbyen er verdens nordligste by av noen størrelse — og har flere isbjørner enn innbyggere i området rundt.',
        bodyEn: 'Norway is divided into counties and around 350 municipalities. The municipality handles what is close to you: schools, kindergartens, elderly care and water. The county council is responsible for, among other things, upper secondary schools and county roads.\n\nSvalbard, the archipelago far to the north, is Norwegian territory with special rules under the Svalbard Treaty. Longyearbyen is the world’s northernmost town of any size — with more polar bears than people in the surrounding area.',
      },
      {
        heading: 'Språk og urfolk',
        body: 'De offisielle språkene er norsk og samisk. Norsk har to likestilte skriftformer: bokmål (som de fleste bruker) og nynorsk. Det finnes ikke ett «riktig» talespråk — dialektene brukes overalt, også på TV og i Stortinget.\n\nSamene er Norges urfolk og har bodd i nord lenge før grensene ble tegnet. De har eget flagg, egen nasjonaldag (6. februar) og eget folkevalgt organ — Sametinget i Karasjok. Reindrift er en tradisjonell samisk næring. Kvener, jøder, skogfinner, romer og romanifolk er nasjonale minoriteter.',
        bodyEn: 'The official languages are Norwegian and Sami. Norwegian has two equal written forms: bokmål (used by most) and nynorsk. There is no single “correct” spoken Norwegian — dialects are used everywhere, on TV and in Parliament alike.\n\nThe Sami are Norway’s indigenous people and lived in the north long before borders were drawn. They have their own flag, national day (6 February) and elected body — the Sami Parliament in Karasjok. Reindeer herding is a traditional Sami livelihood. Kvens, Jews, Forest Finns, Roma and Romani people are national minorities.',
      },
    ],
  },
  {
    id: 's-demokrati',
    title: 'Demokrati og valg',
    titleEn: 'Democracy and elections',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Stortinget, regjeringen, domstolene, partiene — hvem bestemmer hva, og hvem får stemme.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (demokrati)' },
    sections: [
      {
        body: 'Norge er et konstitusjonelt monarki og et parlamentarisk demokrati. Kongen er statsoverhode, men har liten politisk makt — han åpner Stortinget og representerer Norge. Makten er delt i tre:\n\n• Stortinget (169 representanter) vedtar lover og statsbudsjett — den lovgivende makten.\n• Regjeringen, ledet av statsministeren, styrer landet — den utøvende makten.\n• Domstolene dømmer — den dømmende makten. Rekkefølgen er tingrett → lagmannsrett → Høyesterett.',
        bodyEn: 'Norway is a constitutional monarchy and a parliamentary democracy. The King is head of state but has little political power — he opens Parliament and represents Norway. Power is divided in three:\n\n• The Storting (169 members) passes laws and the budget — the legislative power.\n• The government, led by the prime minister, governs — the executive power.\n• The courts judge — the judicial power. The order is district court → court of appeal → Supreme Court.',
      },
      {
        heading: 'Slik blir en regjering til',
        body: 'Etter et stortingsvalg dannes regjeringen av partiet eller partiene som har flertall i Stortinget bak seg — dette kalles parlamentarisme. Hvis ingen har rent flertall, dannes en mindretallsregjering eller en koalisjon av flere partier.\n\nDe største partiene har lange tradisjoner: Arbeiderpartiet (Ap) på venstresiden, Høyre (H) på høyresiden, og dessuten Fremskrittspartiet (FrP), Senterpartiet (Sp), Sosialistisk Venstreparti (SV), Venstre (V), Kristelig Folkeparti (KrF), Miljøpartiet De Grønne (MDG) og Rødt. Du trenger ikke kunne politikken deres — men navnene dukker opp i nyhetene hver dag.',
        bodyEn: 'After a parliamentary election, the government is formed by the party or parties with a majority in the Storting behind them — this is called parliamentarism. If no one has a clear majority, a minority government or a coalition is formed.\n\nThe largest parties have long traditions: Labour (Ap) on the left, the Conservatives (Høyre) on the right, plus the Progress Party (FrP), Centre Party (Sp), Socialist Left (SV), Liberals (V), Christian Democrats (KrF), Greens (MDG) and Red (Rødt). You don’t need to know their politics — but the names appear in the news every day.',
      },
      {
        heading: 'Valg',
        body: 'Det er stortingsvalg hvert fjerde år, og kommune- og fylkestingsvalg midt mellom — så det er valg i Norge annethvert år. Alle norske statsborgere over 18 år kan stemme ved stortingsvalg. Ved kommunevalg kan også utenlandske statsborgere stemme hvis de har bodd i Norge i minst tre år.\n\nValget er hemmelig, og valgdeltakelsen er høy (rundt 75–80 %). Man kan forhåndsstemme i ukene før valgdagen.',
        bodyEn: 'Parliamentary elections are held every four years, with municipal and county elections in between — so Norway votes every other year. All Norwegian citizens over 18 can vote in parliamentary elections. In municipal elections, foreign citizens can also vote if they have lived in Norway for at least three years.\n\nVoting is secret, and turnout is high (around 75–80 %). You can vote in advance in the weeks before election day.',
      },
      {
        heading: 'Norge og verden',
        body: 'Norge er IKKE medlem av EU — folket sa nei i folkeavstemninger i 1972 og 1994. Men gjennom EØS-avtalen er Norge med i EUs indre marked: varer, tjenester, kapital og personer beveger seg fritt. Derfor kan EU-borgere jobbe i Norge uten visum.\n\nNorge var med på å grunnlegge FN i 1945 (FNs første generalsekretær var nordmannen Trygve Lie) og NATO i 1949. Norge deler ut Nobels fredspris — de andre nobelprisene deles ut i Sverige.',
        bodyEn: 'Norway is NOT an EU member — the people said no in referendums in 1972 and 1994. But through the EEA agreement Norway is part of the EU internal market: goods, services, capital and people move freely. That is why EU citizens can work in Norway without a visa.\n\nNorway co-founded the UN in 1945 (the UN’s first Secretary-General was the Norwegian Trygve Lie) and NATO in 1949. Norway awards the Nobel Peace Prize — the other Nobel prizes are awarded in Sweden.',
      },
      {
        heading: 'Grunnleggende rettigheter',
        body: 'Ytringsfrihet, religionsfrihet, organisasjonsfrihet og pressefrihet er beskyttet av Grunnloven. Frie medier kalles ofte «den fjerde statsmakt» fordi de kontrollerer dem som har makt.\n\nAlle er like for loven. I en rettsstat kan ingen straffes uten lov og dom, alle har rett til forsvarer, og man er uskyldig til det motsatte er bevist.',
        bodyEn: 'Freedom of expression, religion, association and the press are protected by the Constitution. Free media are often called “the fourth estate” because they scrutinise those in power.\n\nEveryone is equal before the law. In a state governed by law no one can be punished without law and judgment, everyone has the right to a defence lawyer, and you are innocent until proven guilty.',
      },
    ],
  },
  {
    id: 's-velferd',
    title: 'Velferdsstaten',
    titleEn: 'The welfare state',
    category: 'samfunn',
    level: 'B1',
    teaser: 'NAV, fastlege, egenandel, pensjon — systemet du betaler skatt for, fra vugge til grav.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (velferd)' },
    sections: [
      {
        body: 'Velferdsstaten betyr at fellesskapet tar ansvar for innbyggernes helse, utdanning og økonomiske trygghet — «fra vugge til grav». Den finansieres gjennom skatter og avgifter; derfor er det både en rett og en plikt å betale skatt.\n\nGrunnmuren er Folketrygden, som alle som bor eller jobber i Norge, er medlem av. Den gir rett til helsetjenester, sykepenger, pensjon og mye mer.',
        bodyEn: 'The welfare state means the community takes responsibility for citizens’ health, education and economic security — “from cradle to grave”. It is financed through taxes; that is why paying tax is both a right and a duty.\n\nThe foundation is the National Insurance Scheme (Folketrygden), which everyone living or working in Norway belongs to. It gives rights to health services, sick pay, pensions and much more.',
      },
      {
        heading: 'NAV — ytelsene',
        body: 'NAV forvalter de fleste velferdsytelsene:\n\n• Dagpenger — når du blir arbeidsledig og søker ny jobb.\n• Sykepenger — full lønn i inntil ett år når du er syk. De første dagene kan du bruke egenmelding; etterpå trenger du sykemelding fra lege.\n• Foreldrepenger — nesten ett års betalt permisjon som deles mellom foreldrene, med egne kvoter for mor og far.\n• Barnetrygd — utbetales automatisk til alle med barn under 18 år.\n• Uføretrygd og alderspensjon — når du ikke lenger kan jobbe.',
        bodyEn: 'NAV administers most welfare benefits:\n\n• Unemployment benefit — when you lose your job and are seeking work.\n• Sick pay — full salary for up to a year when ill. For the first days you can self-certify; after that you need a doctor’s note.\n• Parental benefit — nearly a year of paid leave shared between parents, with quotas for each.\n• Child benefit — paid automatically to everyone with children under 18.\n• Disability benefit and retirement pension — when you can no longer work.',
      },
      {
        heading: 'Helsevesenet',
        body: 'Alle som bor i Norge, har rett til en fastlege — en fast lege som kjenner deg og følger deg opp. Hos legen betaler du en egenandel. Når egenandelene når et årlig tak, får du frikort automatisk og betaler ikke mer det året. Sykehusbehandling er i hovedsak gratis, og barn betaler ikke egenandel hos legen.\n\nTannlege er unntaket: barn og unge får gratis offentlig tannhelse, men voksne betaler selv — derfor spøker nordmenn med at tennene ikke er en del av kroppen.\n\nVed akutt sykdom utenom åpningstid: legevakt (116 117). Ved livstruende situasjoner: ring 113. Politi: 112. Brann: 110.',
        bodyEn: 'Everyone living in Norway has the right to a regular GP who knows you and follows you up. You pay a co-payment at the doctor’s. When co-payments reach an annual cap you automatically get an exemption card and pay no more that year. Hospital treatment is essentially free, and children pay no co-payment at the doctor’s.\n\nDentistry is the exception: children and young people get free public dental care, but adults pay themselves — hence the Norwegian joke that teeth are not part of the body.\n\nAcute illness outside office hours: emergency clinic (116 117). Life-threatening situations: call 113. Police: 112. Fire: 110.',
      },
      {
        heading: 'Barn og familie',
        body: 'Helsestasjonen følger opp alle barn gratis fra fødselen: vaksiner, kontroller og råd til foreldrene. Barnehagen er ikke gratis, men prisen har et makstak, og alle barn har rett til plass fra de fyller ett år.\n\nBarnevernet skal hjelpe barn som ikke har det trygt hjemme. De fleste sakene handler om hjelp og støtte til familien — omsorgsovertakelse er siste utvei og må besluttes av en nemnd.',
        bodyEn: 'The child health clinic follows all children free of charge from birth: vaccines, check-ups and advice for parents. Kindergarten is not free, but the price is capped, and every child is entitled to a place from age one.\n\nThe child welfare service helps children who are not safe at home. Most cases are about help and support for the family — taking a child into care is a last resort and must be decided by a tribunal.',
      },
    ],
  },
  {
    id: 's-arbeidsliv',
    title: 'Arbeidslivet',
    titleEn: 'Working life',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Kontrakt, prøvetid, fagforening, skattekort — rettighetene og kodene i norsk arbeidsliv.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (arbeidsliv)' },
    sections: [
      {
        body: 'Arbeidsmiljøloven regulerer arbeidslivet i Norge. Alle arbeidstakere har krav på skriftlig arbeidskontrakt. Normal arbeidstid er 37,5 timer i uka, og ferieloven gir rett til minst fire uker og én dag ferie — de fleste har fem uker gjennom tariffavtale.\n\nNye ansatte har som regel seks måneders prøvetid. Etter prøvetiden har du sterkt oppsigelsesvern: en oppsigelse må ha saklig grunn og være skriftlig.',
        bodyEn: 'The Working Environment Act regulates working life. All employees are entitled to a written contract. Normal working hours are 37.5 per week, and the Holiday Act gives at least four weeks and one day of holiday — most have five weeks through collective agreements.\n\nNew employees usually have a six-month probation period. After probation you have strong protection: dismissal must have objective grounds and be in writing.',
      },
      {
        heading: 'Den norske modellen',
        body: 'Norsk arbeidsliv bygger på et trepartssamarbeid mellom fagforeningene, arbeidsgiverne og staten. Lønn avtales i tariffavtaler — Norge har ingen lovfestet minstelønn.\n\nMange nordmenn er fagorganisert. På arbeidsplassen finnes det verneombud (velges av de ansatte og passer på sikkerheten) og ofte tillitsvalgte fra fagforeningen. Kulturen er flat: man bruker fornavn på sjefen, møter starter presis, og det forventes at alle sier sin mening — også til lederen.',
        bodyEn: 'Norwegian working life is built on three-way cooperation between unions, employers and the state. Pay is set in collective agreements — Norway has no statutory minimum wage.\n\nMany Norwegians are unionised. Workplaces have a safety representative (elected by employees) and often union shop stewards. The culture is flat: you call the boss by first name, meetings start on time, and everyone is expected to speak their mind — including to the manager.',
      },
      {
        heading: 'Å finne jobb',
        body: 'Ledige stillinger finner du på finn.no og arbeidsplassen.nav.no. En norsk jobbsøknad er kort: én side søknad pluss CV. Referanser fra tidligere arbeidsgivere betyr mye — be alltid om attest når du slutter i en jobb.\n\nNettverk er viktigere enn mange tror: mange stillinger lyses aldri ut. Frivillig arbeid og foreningsliv er en anerkjent vei inn i arbeidslivet — og god norsktrening.',
        bodyEn: 'Vacancies are found on finn.no and arbeidsplassen.nav.no. A Norwegian application is short: a one-page letter plus CV. References from previous employers matter a lot — always ask for a written reference when leaving a job.\n\nNetworks matter more than many think: many positions are never advertised. Volunteering and club life are a recognised way into working life — and good Norwegian practice.',
      },
      {
        heading: 'Skatt — slik virker det',
        body: 'Alle som jobber, trenger skattekort (bestilles hos Skatteetaten); arbeidsgiveren trekker skatten direkte av lønna. Hver vår får du skattemeldingen — sjekk at tallene stemmer, og legg til fradrag du har krav på. Etterpå kommer skatteoppgjøret: penger tilbake eller restskatt.\n\nSvart arbeid — å jobbe uten å betale skatt — er ulovlig og gir ingen rettigheter ved sykdom, skade eller pensjon. Det undergraver også velferdsstaten alle er avhengige av. Alle lønnstakere har dessuten krav på lønnsslipp.',
        bodyEn: 'Everyone who works needs a tax card (ordered from the Tax Administration); the employer deducts tax directly from your pay. Every spring you receive the tax return — check the numbers and add deductions you are entitled to. Then comes the settlement: money back or extra tax due.\n\nUndeclared work — working without paying tax — is illegal and gives no rights if you get sick, injured or retire. It also undermines the welfare state everyone depends on. All employees are entitled to a payslip.',
      },
    ],
  },
  {
    id: 's-utdanning',
    title: 'Skole og utdanning',
    titleEn: 'School and education',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Fra barnehage til universitet — gratisprinsippet, karakterene og Lånekassen.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (utdanning)' },
    sections: [
      {
        body: 'Barn i Norge har rett og plikt til ti års grunnskole: barneskole (1.–7. trinn) og ungdomsskole (8.–10. trinn). Barna begynner det året de fyller seks. Offentlig skole er gratis — bøker, undervisning og utstyr.\n\nPå barneskolen får elevene ikke karakterer; vurderingen skjer i samtaler med lærer og foreldre. Karakterer (fra 1 til 6, der 6 er best) kommer først på ungdomsskolen. Skolen forventer at foreldrene deltar: foreldremøter, utviklingssamtaler og gjerne dugnad.',
        bodyEn: 'Children in Norway have the right and obligation to ten years of basic school: primary (years 1–7) and lower secondary (8–10). Children start the year they turn six. Public school is free — books, teaching and equipment.\n\nIn primary school pupils get no grades; assessment happens through conversations with teacher and parents. Grades (1 to 6, where 6 is best) first appear in lower secondary. The school expects parents to participate: parents’ meetings, progress talks and often dugnad.',
      },
      {
        heading: 'Videregående: to veier',
        body: 'Etter ungdomsskolen har alle rett til videregående opplæring, og det finnes to hovedveier:\n\n• Studieforberedende (3 år) — mot studiekompetanse og høyere utdanning.\n• Yrkesfag (vanligvis 2 år skole + 2 år som lærling i bedrift) — mot fagbrev. En fagarbeider med fagbrev er høyt verdsatt og godt betalt i Norge.\n\nVoksne som ikke har fullført, har egne rettigheter til videregående opplæring senere i livet.',
        bodyEn: 'After lower secondary everyone is entitled to upper secondary education, and there are two main paths:\n\n• Academic (3 years) — towards university qualification.\n• Vocational (usually 2 years school + 2 years as an apprentice in a company) — towards a trade certificate. A certified tradesperson is highly valued and well paid in Norway.\n\nAdults who never finished have their own rights to upper secondary education later in life.',
      },
      {
        heading: 'Høyere utdanning',
        body: 'Universiteter og høyskoler er i hovedsak gratis også for voksne. Opptak skjer gjennom Samordna opptak. Gradene følger det europeiske systemet: bachelor (3 år), master (2 år til), ph.d.\n\nStudenter finansierer livet med lån og stipend fra Lånekassen — en del av lånet blir omgjort til stipend når du består eksamenene. Utenlandsk utdanning kan godkjennes i Norge; det søker man om hos Direktoratet for høyere utdanning og kompetanse (HK-dir).',
        bodyEn: 'Universities and colleges are essentially free, also for adults. Admission goes through Samordna opptak. Degrees follow the European system: bachelor (3 years), master (2 more), PhD.\n\nStudents finance life with loans and grants from Lånekassen — part of the loan converts to a grant when you pass your exams. Foreign qualifications can be recognised in Norway; you apply to the Directorate for Higher Education and Skills (HK-dir).',
      },
      {
        heading: 'Norskopplæring — og prøvene dine',
        body: 'Voksne innvandrere har rett til norskopplæring og samfunnskunnskapskurs gjennom kommunen (voksenopplæringen). Kursene forbereder deg til akkurat de prøvene denne appen trener på.\n\nNorskprøven har fire deler: leseprøve, lytteprøve, skriftlig og muntlig. Lese- og lytteprøven er adaptive — de tilpasser seg nivået ditt underveis. Til skriftlig og muntlig velger du nivå: A2–B1 eller B1–B2. For statsborgerskap trenger du muntlig på minst B1 — og bestått statsborgerprøve.',
        bodyEn: 'Adult immigrants are entitled to Norwegian classes and social studies courses through the municipality (adult education). The courses prepare you for exactly the tests this app trains.\n\nThe Norwegian test has four parts: reading, listening, writing and oral. Reading and listening are adaptive — they adjust to your level as you go. For writing and oral you choose a level: A2–B1 or B1–B2. For citizenship you need oral at B1 or higher — and a passed citizenship test.',
      },
    ],
  },
  {
    id: 's-verdier',
    title: 'Verdier, lover og hverdagsliv',
    titleEn: 'Values, laws and everyday life',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Likestilling, dugnad, allemannsretten, religion — og alle aldersgrensene på ett sted.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (verdier)' },
    sections: [
      {
        body: 'Likestilling mellom kjønnene står sterkt: kvinner og menn har samme rettigheter og plikter, begge foreldre tar foreldrepermisjon, og kvinner fikk stemmerett allerede i 1913 — blant de første landene i verden. Diskriminering på grunn av kjønn, religion, hudfarge, funksjonsevne eller seksuell orientering er forbudt.\n\nTo personer av samme kjønn kan gifte seg (siden 2009). Samboerskap er vanlig og akseptert — mange bor sammen og får barn uten å være gift. Tvangsekteskap og polygami er forbudt.',
        bodyEn: 'Gender equality is strong: women and men have the same rights and duties, both parents take parental leave, and women got the vote as early as 1913 — among the first countries in the world. Discrimination based on gender, religion, skin colour, disability or sexual orientation is prohibited.\n\nSame-sex couples can marry (since 2009). Cohabitation is common and accepted — many live together and have children without marrying. Forced marriage and polygamy are illegal.',
      },
      {
        heading: 'Barn har egne rettigheter',
        body: 'Norge følger FNs barnekonvensjon, og barn har egne, sterke rettigheter. All vold mot barn er forbudt — også lette klaps «i oppdragelsen». Barn har rett til å bli hørt i saker som gjelder dem, for eksempel ved skilsmisse.\n\nDen kriminelle lavalderen er 15 år. Barn under 15 kan ikke straffes, men barnevernet og politiet følger opp på andre måter.',
        bodyEn: 'Norway follows the UN Convention on the Rights of the Child, and children have strong rights of their own. All violence against children is forbidden — including light smacks “as discipline”. Children have the right to be heard in matters concerning them, for example in a divorce.\n\nThe age of criminal responsibility is 15. Children under 15 cannot be punished, but child welfare and police follow up in other ways.',
      },
      {
        heading: 'Religion i Norge',
        body: 'Det er full religionsfrihet: alle kan velge sin religion eller ingen religion. Den norske kirke (evangelisk-luthersk) er den største, men siden 2017 er den skilt fra staten. Alle trossamfunn kan få offentlig støtte.\n\nSamfunnet er samtidig ganske sekulært: religion regnes som en privatsak, og mange nordmenn går bare i kirken til jul, dåp, konfirmasjon og begravelse. Både kirkelig og borgerlig (humanistisk) konfirmasjon er vanlig.',
        bodyEn: 'There is full freedom of religion: everyone may choose their religion or none. The Church of Norway (Evangelical Lutheran) is the largest, but since 2017 it is separate from the state. All faith communities can receive public funding.\n\nSociety is at the same time quite secular: religion is considered a private matter, and many Norwegians only go to church at Christmas, christenings, confirmations and funerals. Both church and civil (humanist) confirmation are common.',
      },
      {
        heading: 'Dugnad, allemannsretten og kodene',
        body: 'Dugnad — frivillig fellesarbeid i borettslag, idrettslag og skoler — er en sterk norsk tradisjon. Å stille opp på dugnad er den raskeste veien inn i et norsk nabolag.\n\nAllemannsretten gir alle rett til å ferdes fritt i naturen, plukke bær og sopp og telte i utmark — så lenge man tar hensyn og rydder etter seg.\n\nUskrevne koder som er verdt å kunne: nordmenn er presise (kom klokka sju hvis du er invitert klokka sju), tar av seg skoene inne, og småprater lite med fremmede — det er ikke uhøflighet, bare respekt for privatlivet. Etter en invitasjon sier man gjerne «takk for sist» neste gang man møtes.',
        bodyEn: 'Dugnad — voluntary communal work in housing co-ops, sports clubs and schools — is a strong Norwegian tradition. Showing up for dugnad is the fastest way into a Norwegian neighbourhood.\n\nThe right to roam lets everyone move freely in nature, pick berries and mushrooms and camp on uncultivated land — as long as you show consideration and clean up.\n\nUnwritten codes worth knowing: Norwegians are punctual (arrive at seven if invited for seven), take their shoes off indoors, and rarely small-talk with strangers — it is not rudeness, just respect for privacy. After being someone’s guest you say «takk for sist» next time you meet.',
      },
      {
        heading: 'Høytider og aldersgrenser',
        body: 'Store høytider: jul (julaften feires 24. desember), påske (halve Norge drar på hytta), 17. mai (barnetog og bunad) og sankthans (23. juni, bål ved sjøen).\n\nTall prøven ofte spør om:\n\n• Stemmerett og myndig: 18 år\n• Kjøpe øl og vin: 18 år — brennevin: 20 år (selges kun på Vinmonopolet)\n• Promillegrense for bilkjøring: 0,2\n• Kriminell lavalder: 15 år • Seksuell lavalder: 16 år\n• Grunnskole: 10 år, skolestart det året barnet fyller 6\n• Stortingsvalg: hvert 4. år, 169 representanter\n• Statsborgerprøven: 36 spørsmål, 24 riktige for å bestå, 60 minutter',
        bodyEn: 'Major holidays: Christmas (celebrated on the 24th), Easter (half of Norway goes to the cabin), 17 May (children’s parades and bunad) and Midsummer (23 June, bonfires by the sea).\n\nNumbers the test often asks about:\n\n• Voting age and adulthood: 18\n• Buying beer and wine: 18 — spirits: 20 (only at Vinmonopolet)\n• Blood alcohol limit for driving: 0.02 %\n• Age of criminal responsibility: 15 • Age of consent: 16\n• Basic school: 10 years, starting the year the child turns 6\n• Parliamentary elections: every 4 years, 169 members\n• The citizenship test: 36 questions, 24 correct to pass, 60 minutes',
      },
    ],
  },
]
