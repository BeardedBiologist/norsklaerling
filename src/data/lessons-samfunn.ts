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
    teaser: '1814, unionene, krigen og oljen — de fire tingene alle spør om.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (historie)' },
    sections: [
      {
        heading: '1814 — Grunnloven',
        body: 'I flere hundre år var Norge i union med Danmark. I 1814 møttes 112 menn på Eidsvoll og skrev Norges grunnlov. Grunnloven ble underskrevet 17. mai 1814 — derfor er 17. mai Norges nasjonaldag. Vi feirer dagen med barnetog, bunad og is, ikke med militærparade.\n\nEtter 1814 kom Norge i en ny union, denne gangen med Sverige. Norge hadde sin egen grunnlov og sitt eget storting, men kongen var svensk.',
        bodyEn: 'For several hundred years Norway was in a union with Denmark. In 1814, 112 men met at Eidsvoll and wrote Norway’s constitution. It was signed on 17 May 1814 — which is why 17 May is Norway’s national day, celebrated with children’s parades, national costumes and ice cream, not military parades.\n\nAfter 1814 Norway entered a new union, this time with Sweden. Norway had its own constitution and parliament, but the king was Swedish.',
      },
      {
        heading: '1905 — et fritt land',
        body: 'Unionen med Sverige ble oppløst i 1905. Norge ble et helt selvstendig land og fikk sin egen konge, Haakon 7. Dagens konge heter Harald 5.\n\nUnder andre verdenskrig ble Norge angrepet av Tyskland 9. april 1940. Landet var okkupert i fem år, til 8. mai 1945. Kongen og regjeringen flyktet til England og ledet motstanden derfra.',
        bodyEn: 'The union with Sweden was dissolved in 1905. Norway became fully independent and got its own king, Haakon VII. Today’s king is Harald V.\n\nDuring World War II, Norway was attacked by Germany on 9 April 1940. The country was occupied for five years, until 8 May 1945. The king and government fled to England and led the resistance from there.',
      },
      {
        heading: 'Oljen forandret Norge',
        body: 'På slutten av 1960-tallet fant man olje i Nordsjøen (Ekofisk-feltet, 1969). Oljen og gassen gjorde Norge til et av verdens rikeste land. Staten sparer inntektene i Statens pensjonsfond utland — «Oljefondet» — som skal sikre velferden også for framtidige generasjoner.\n\nVerdt å vite: Samene er Norges urfolk og har eget folkevalgt organ, Sametinget, i Karasjok (åpnet 1989).',
        bodyEn: 'At the end of the 1960s, oil was found in the North Sea (the Ekofisk field, 1969). Oil and gas made Norway one of the world’s richest countries. The state saves the income in the Government Pension Fund Global — “the Oil Fund” — to secure welfare for future generations too.\n\nWorth knowing: the Sami are Norway’s indigenous people and have their own elected body, the Sami Parliament, in Karasjok (opened 1989).',
      },
    ],
  },
  {
    id: 's-geografi',
    title: 'Geografi og befolkning',
    titleEn: 'Geography and population',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Fjell, fjorder, naboland og de største byene — tallene prøven spør om.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (geografi)' },
    sections: [
      {
        body: 'Norge har i overkant av 5,5 millioner innbyggere. Hovedstaden er Oslo, som også er den største byen. Andre store byer er Bergen, Trondheim og Stavanger.\n\nNorge grenser til tre land: Sverige, Finland og Russland. Landet er langt og smalt, med en av verdens lengste kystlinjer.',
        bodyEn: 'Norway has just over 5.5 million inhabitants. The capital is Oslo, which is also the largest city. Other large cities are Bergen, Trondheim and Stavanger.\n\nNorway borders three countries: Sweden, Finland and Russia. The country is long and narrow, with one of the world’s longest coastlines.',
      },
      {
        heading: 'Natur og klima',
        body: 'Norges høyeste fjell er Galdhøpiggen (2 469 meter). Den lengste fjorden er Sognefjorden, ofte kalt «fjordenes konge». Nord for polarsirkelen har man midnattssol om sommeren og mørketid om vinteren — i Tromsø varer mørketiden i rundt to måneder.\n\nDe offisielle språkene er norsk (med to skriftformer: bokmål og nynorsk) og samisk.',
        bodyEn: 'Norway’s highest mountain is Galdhøpiggen (2,469 metres). The longest fjord is the Sognefjord, often called “the king of fjords”. North of the Arctic Circle there is midnight sun in summer and polar night in winter — in Tromsø the dark period lasts about two months.\n\nThe official languages are Norwegian (with two written forms: bokmål and nynorsk) and Sami.',
      },
    ],
  },
  {
    id: 's-demokrati',
    title: 'Demokrati og valg',
    titleEn: 'Democracy and elections',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Stortinget, regjeringen, domstolene — hvem bestemmer hva, og hvem får stemme.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (demokrati)' },
    sections: [
      {
        body: 'Norge er et konstitusjonelt monarki og et parlamentarisk demokrati. Kongen er statsoverhode, men har liten politisk makt. Makten er delt i tre:\n\n• Stortinget (169 representanter) vedtar lover og statsbudsjett.\n• Regjeringen, ledet av statsministeren, styrer landet.\n• Domstolene dømmer. Høyesterett er øverste domstol.',
        bodyEn: 'Norway is a constitutional monarchy and a parliamentary democracy. The King is head of state but has little political power. Power is divided in three:\n\n• The Storting (169 members) passes laws and the national budget.\n• The government, led by the prime minister, governs the country.\n• The courts judge. The Supreme Court is the highest court.',
      },
      {
        heading: 'Valg',
        body: 'Det er stortingsvalg hvert fjerde år. Alle norske statsborgere over 18 år kan stemme. Ved kommunevalg (også hvert fjerde år) kan også utenlandske statsborgere stemme hvis de har bodd i Norge i minst tre år.\n\nNorge er IKKE medlem av EU — folket sa nei i 1972 og 1994 — men er med i EØS-samarbeidet, som gir tilgang til EUs indre marked. Norge var med på å grunnlegge NATO i 1949 og FN i 1945.',
        bodyEn: 'Parliamentary elections are held every four years. All Norwegian citizens over 18 can vote. In municipal elections (also every four years), foreign citizens can vote too if they have lived in Norway for at least three years.\n\nNorway is NOT an EU member — the people voted no in 1972 and 1994 — but participates in the EEA, which gives access to the EU internal market. Norway co-founded NATO in 1949 and the UN in 1945.',
      },
      {
        heading: 'Grunnleggende rettigheter',
        body: 'Ytringsfrihet, religionsfrihet og organisasjonsfrihet er beskyttet av Grunnloven. Alle er like for loven. I en rettsstat kan ingen straffes uten lov og dom — og alle har rett til forsvarer.',
        bodyEn: 'Freedom of expression, freedom of religion and freedom of association are protected by the Constitution. Everyone is equal before the law. In a state governed by law, no one can be punished without law and judgment — and everyone has the right to a defence lawyer.',
      },
    ],
  },
  {
    id: 's-velferd',
    title: 'Velferdsstaten',
    titleEn: 'The welfare state',
    category: 'samfunn',
    level: 'B1',
    teaser: 'NAV, fastlege, egenandel og frikort — systemet du betaler skatt for.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (velferd)' },
    sections: [
      {
        body: 'Velferdsstaten betyr at fellesskapet tar ansvar for innbyggernes helse, utdanning og økonomiske trygghet. Den finansieres gjennom skatter og avgifter — derfor er det både en rett og en plikt å betale skatt.\n\nNAV utbetaler de fleste ytelsene: dagpenger ved arbeidsledighet, sykepenger, foreldrepenger, barnetrygd og pensjon. Barnetrygd får alle som har barn under 18 år.',
        bodyEn: 'The welfare state means the community takes responsibility for citizens’ health, education and economic security. It is financed through taxes — which is why paying tax is both a right and a duty.\n\nNAV pays most benefits: unemployment benefit, sick pay, parental benefit, child benefit and pensions. Everyone with children under 18 receives child benefit.',
      },
      {
        heading: 'Helsevesenet',
        body: 'Alle som bor i Norge, har rett til en fastlege — en fast lege som følger deg opp over tid. Hos legen betaler du en egenandel. Når egenandelene når et årlig tak, får du frikort og betaler ikke mer det året. Sykehusbehandling er i hovedsak gratis.\n\nVed akutt sykdom utenom åpningstid drar man til legevakten. Ved livstruende situasjoner ringer man 113.',
        bodyEn: 'Everyone living in Norway has the right to a GP (fastlege) — a regular doctor who follows you over time. You pay a co-payment at the doctor’s. When your co-payments reach an annual cap, you get an exemption card (frikort) and pay nothing more that year. Hospital treatment is essentially free.\n\nFor acute illness outside opening hours you go to the emergency clinic (legevakt). In life-threatening situations you call 113.',
      },
    ],
  },
  {
    id: 's-arbeidsliv',
    title: 'Arbeidslivet',
    titleEn: 'Working life',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Arbeidskontrakt, fagforening, ferie og skatt — rettighetene dine på jobb.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (arbeidsliv)' },
    sections: [
      {
        body: 'Arbeidsmiljøloven regulerer arbeidslivet i Norge. Alle arbeidstakere har krav på skriftlig arbeidskontrakt. Normal arbeidstid er 37,5 timer i uka, og ferieloven gir rett til minst fire uker og én dag ferie — de fleste har fem uker gjennom tariffavtale.\n\nDet norske arbeidslivet er preget av flat struktur og tillit: man bruker fornavn på sjefen, og det forventes at alle sier sin mening.',
        bodyEn: 'The Working Environment Act regulates working life in Norway. All employees are entitled to a written contract. Normal working hours are 37.5 per week, and the Holiday Act gives at least four weeks and one day of holiday — most have five weeks through collective agreements.\n\nNorwegian working life is characterised by flat structure and trust: you call the boss by first name, and everyone is expected to speak their mind.',
      },
      {
        heading: 'Fagforeninger og skatt',
        body: 'Mange nordmenn er medlem av en fagforening. Fagforeningene forhandler om lønn og arbeidsvilkår — Norge har ingen lovfestet minstelønn, lønna avtales i tariffavtaler.\n\nAlle som jobber, betaler skatt av inntekten. Svart arbeid — å jobbe uten å betale skatt — er ulovlig og gir ingen rettigheter hvis du blir syk eller skadet. Hver vår sjekker man skattemeldingen fra Skatteetaten.',
        bodyEn: 'Many Norwegians are union members. The unions negotiate pay and conditions — Norway has no statutory minimum wage; pay is set in collective agreements.\n\nEveryone who works pays income tax. Undeclared work — working without paying tax — is illegal and gives you no rights if you get sick or injured. Every spring you check your tax return from the Tax Administration.',
      },
    ],
  },
  {
    id: 's-utdanning',
    title: 'Skole og utdanning',
    titleEn: 'School and education',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Fra barnehage til universitet — gratisprinsippet og Lånekassen.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (utdanning)' },
    sections: [
      {
        body: 'Barn i Norge har rett og plikt til ti års grunnskole: barneskole (1.–7. trinn) og ungdomsskole (8.–10. trinn). Barna begynner det året de fyller seks. Offentlig skole er gratis — også videregående.\n\nFør skolen går de fleste barn i barnehage, og mange skolebarn går på SFO (skolefritidsordning) etter skoletid. Foreldrene betaler noe for begge, men prisene har makstak.',
        bodyEn: 'Children in Norway have the right and obligation to ten years of basic school: primary (years 1–7) and lower secondary (8–10). Children start the year they turn six. Public school is free — including upper secondary.\n\nBefore school most children attend kindergarten, and many school children go to after-school care (SFO). Parents pay something for both, but prices are capped.',
      },
      {
        heading: 'Etter grunnskolen',
        body: 'Etter ungdomsskolen har alle rett til videregående opplæring: studieforberedende (mot universitet) eller yrkesfag (mot fagbrev). Universiteter og høyskoler er også i hovedsak gratis. Studenter kan få lån og stipend fra Lånekassen.\n\nVoksne innvandrere har rett til norskopplæring gjennom kommunen — og samfunnskunnskapskurs, som forbereder deg til nettopp statsborgerprøven.',
        bodyEn: 'After lower secondary, everyone has the right to upper secondary education: academic (towards university) or vocational (towards a trade certificate). Universities are also essentially free. Students can get loans and grants from Lånekassen.\n\nAdult immigrants are entitled to Norwegian classes through the municipality — and social studies courses, which prepare you for exactly the citizenship test.',
      },
    ],
  },
  {
    id: 's-verdier',
    title: 'Verdier, lover og hverdagsliv',
    titleEn: 'Values, laws and everyday life',
    category: 'samfunn',
    level: 'B1',
    teaser: 'Likestilling, dugnad, allemannsretten — og aldersgrensene alle må kunne.',
    test: { to: '/statsborger', label: 'Test deg: Statsborgerprøven (verdier)' },
    sections: [
      {
        body: 'Likestilling mellom kjønnene står sterkt: kvinner og menn har samme rettigheter og plikter, og begge foreldre tar foreldrepermisjon. Diskriminering er forbudt. To personer av samme kjønn kan gifte seg (siden 2009). Tvangsekteskap og polygami er forbudt.\n\nAll vold mot barn er forbudt — også i oppdragelsen. Den kriminelle lavalderen er 15 år.',
        bodyEn: 'Gender equality is strong: women and men have the same rights and duties, and both parents take parental leave. Discrimination is prohibited. Two people of the same sex can marry (since 2009). Forced marriage and polygamy are forbidden.\n\nAll violence against children is prohibited — including as discipline. The age of criminal responsibility is 15.',
      },
      {
        heading: 'Tradisjoner og friluftsliv',
        body: 'Dugnad — frivillig fellesarbeid i borettslag, idrettslag og skoler — er en sterk norsk tradisjon. Allemannsretten gir alle rett til å ferdes fritt i naturen, plukke bær og telte i utmark, så lenge man tar hensyn.\n\nStore høytider: jul (julaften feires 24. desember), påske (da drar halve Norge på hytta), 17. mai og sankthans (23. juni).',
        bodyEn: 'Dugnad — voluntary communal work in housing co-ops, sports clubs and schools — is a strong Norwegian tradition. The right to roam lets everyone move freely in nature, pick berries and camp on uncultivated land, as long as they show consideration.\n\nMajor holidays: Christmas (celebrated on the 24th), Easter (when half of Norway goes to their cabin), 17 May, and Midsummer (23 June).',
      },
      {
        heading: 'Aldersgrenser og regler',
        body: 'Tall prøven ofte spør om:\n\n• Stemmerett og myndig: 18 år\n• Kjøpe øl og vin: 18 år — brennevin: 20 år (selges kun på Vinmonopolet)\n• Promillegrense for bilkjøring: 0,2\n• Kriminell lavalder: 15 år\n• Grunnskole: 10 år, skolestart det året barnet fyller 6\n• Stortingsvalg: hvert 4. år, 169 representanter\n• Statsborgerprøven: 36 spørsmål, 24 riktige for å bestå, 60 minutter',
        bodyEn: 'Numbers the test often asks about:\n\n• Voting age and legal adulthood: 18\n• Buying beer and wine: 18 — spirits: 20 (sold only at Vinmonopolet)\n• Blood alcohol limit for driving: 0.02 %\n• Age of criminal responsibility: 15\n• Basic school: 10 years, starting the year the child turns 6\n• Parliamentary elections: every 4 years, 169 members\n• The citizenship test: 36 questions, 24 correct to pass, 60 minutes',
      },
    ],
  },
]
