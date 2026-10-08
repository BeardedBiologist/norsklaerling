import type { ListeningQuestion } from '../../types'

/**
 * Comprehension questions for NTNU NoW2's texts (A, B, X per chapter),
 * keyed by chapter id. Our own questions — the texts are NTNU's and are
 * only played/linked. The correct option is always index 0.
 */
export const listeningB1: Record<string, ListeningQuestion[][]> = {
  'b1-1': [
    [
      { q: 'Hvorfor ville Yang tilbake til Trondheim?', options: ['Han trivdes godt i byen da han var utvekslingsstudent', 'Kona hans er fra Trondheim', 'Han fikk ikke jobb i London', 'Sønnen skulle studere der'], answer: 0 },
      { q: 'Hva er situasjonen til Ling?', options: ['Hun er økonom, men har ikke jobb i Norge ennå', 'Hun har fått jobb ved NTNU', 'Hun er sykepleier', 'Hun studerer kjemi'], answer: 0 },
      { q: 'Hva husker Yang om å gå på ski?', options: ['Det var vanskelig, og han falt mange ganger', 'Det var lett', 'Han har aldri prøvd', 'Han vant et skirenn'], answer: 0 },
    ],
    [
      { q: 'Hva har Simon studert?', options: ['Sykepleie', 'Skipsbygging', 'Medisin', 'Økonomi'], answer: 0 },
      { q: 'Hvorfor valgte Simon å studere i Ålesund?', options: ['Han ville bo nær familien og hadde hørt mye bra om utdanningen', 'Det var billigst', 'Kjæresten bodde der', 'Han fikk ikke plass i Trondheim'], answer: 0 },
      { q: 'Hvor møtte Simon kjæresten sin?', options: ['På en studentfest', 'På sykehjemmet', 'På tur i fjellet', 'På en forelesning'], answer: 0 },
    ],
    [
      { q: 'Hvor ligger Gjøvik?', options: ['Ved Mjøsa, omtrent 100 km nord for Oslo', 'Ved kysten på Vestlandet', 'I Nord-Norge', 'Rett utenfor Trondheim'], answer: 0 },
      { q: 'Hva er Skibladner?', options: ['En gammel hjuldamper som fortsatt går på Mjøsa', 'En kirke', 'Et fakultet ved NTNU', 'Et skianlegg'], answer: 0 },
      { q: 'Hva er Gjøvik-campusen spesielt opptatt av?', options: ['Helse, informasjonsteknologi og ingeniørfag', 'Kunst og musikk', 'Fiskeri', 'Jus'], answer: 0 },
    ],
  ],
  'b1-2': [
    [
      { q: 'Hva lager bestemor til middag?', options: ['Kjøttkaker med poteter, brun saus og grønnsaker', 'Fårikål', 'Fisk og ris', 'Pizza'], answer: 0 },
      { q: 'Hvorfor lager Markus sjelden sunn mat?', options: ['Det tar for mye tid, og han har liten plass', 'Han liker ikke grønnsaker', 'Han har ikke penger', 'Han spiser alltid hos bestemor'], answer: 0 },
      { q: 'Hvilket råd gir bestemor om lunsj?', options: ['Å smøre matpakke kvelden før', 'Å kjøpe salat i kantina', 'Å hoppe over lunsj', 'Å spise varm mat'], answer: 0 },
    ],
    [
      { q: 'Hvorfor går Ling på norskkurs?', options: ['For å få en god jobb i Norge', 'Fordi sønnen trenger hjelp', 'For å ta en mastergrad', 'Fordi Yang ber henne om det'], answer: 0 },
      { q: 'Hva er et avsnitt, ifølge læreren?', options: ['Flere setninger om samme tema', 'Overskriften på teksten', 'Den siste setningen', 'Et ord som binder sammen setninger'], answer: 0 },
      { q: 'Hva bør man gjøre i avslutningen?', options: ['Gjenta de viktigste punktene og si noe generelt om temaet', 'Skrive overskriften «Avslutning»', 'Komme med nye argumenter', 'Skrive minst ti setninger'], answer: 0 },
    ],
    [
      { q: 'Hva er en forskjell på mat i Sør- og Nord-Kina, ifølge essayet?', options: ['I sør spiser man mer ris, i nord mer brødmat og nudler', 'I nord spiser man mer fisk', 'I sør spiser man ikke grønnsaker', 'Det er ingen forskjell'], answer: 0 },
      { q: 'Hva synes skribenten er rart med norske matvaner?', options: ['At nordmenn spiser brød med ost og drikker kald melk til frokost', 'At nordmenn spiser varm mat tre ganger om dagen', 'At nordmenn spiser frosk', 'At nordmenn ikke drikker kaffe'], answer: 0 },
      { q: 'Hva syntes skribenten om fårikål og lapskaus?', options: ['OK, men lite krydder', 'Veldig sterkt', 'Kjempegodt', 'Hun har aldri smakt det'], answer: 0 },
    ],
  ],
  'b1-3': [
    [
      { q: 'Hva handler forskningen til Yang om?', options: ['Katalyse', 'Hjerneforskning', 'Skipsbygging', 'Medieteknologi'], answer: 0 },
      { q: 'Hva må forskerne gjøre før de utfører et forsøk?', options: ['En risikovurdering', 'Spørre sjefen om lov', 'Skrive en artikkel', 'Ta en eksamen'], answer: 0 },
      { q: 'Hvilket språk bruker de mest på instituttet?', options: ['Engelsk, men norsk i lunsjen', 'Bare norsk', 'Kinesisk', 'Tysk'], answer: 0 },
    ],
    [
      { q: 'Hvem er Kofi Akoto?', options: ['En ny ung spiller som RBK har kjøpt fra Ghana', 'Lindas nevø', 'Treneren til RBK', 'En kollega av Yang'], answer: 0 },
      { q: 'Hvordan spilte RBK i kampen Yang så?', options: ['Elendig — defensivt og passivt', 'Fantastisk', 'Helt OK', 'Kampen ble avlyst'], answer: 0 },
      { q: 'Hva mener Linda med at hun ikke er «medgangssupporter»?', options: ['Hun holder med laget sitt også når det går dårlig', 'Hun liker bare vinnerlag', 'Hun bytter lag ofte', 'Hun går aldri på kamp'], answer: 0 },
    ],
    [
      { q: 'Når begynner mange nordmenn å planlegge sommerferien?', options: ['I desember og januar', 'I mai', 'Rett før ferien', 'I september'], answer: 0 },
      { q: 'Hvorfor reiser mange til landene rundt Middelhavet om sommeren?', options: ['Kort reisevei, kjent og trygt', 'Det er billigst å fly dit om vinteren', 'De har familie der', 'Det er mindre varmt der'], answer: 0 },
      { q: 'Hvordan har ferievanene endret seg?', options: ['Flere vil oppleve steder med færre turister og spise lokalt', 'Færre reiser til utlandet', 'Alle vil bo på store hoteller', 'Folk reiser bare om vinteren'], answer: 0 },
    ],
  ],
  'b1-4': [
    [
      { q: 'Hva er egenkapital?', options: ['Penger man har spart, så man ikke må låne hele kjøpesummen', 'Renten på lånet', 'Husleien hver måned', 'Prisen på boligen'], answer: 0 },
      { q: 'Hvor bor de fleste skolebarn og ungdommer?', options: ['Hjemme hos foreldrene', 'På hybel', 'I studentby', 'Hos besteforeldrene'], answer: 0 },
      { q: 'Hva gjør mange eldre, ifølge teksten?', options: ['Selger huset og flytter til ei leilighet', 'Kjøper en større enebolig', 'Flytter til en hybel', 'Bygger nytt hus'], answer: 0 },
    ],
    [
      { q: 'Hva slags bolig er i annonsen?', options: ['Et rekkehus på Byåsen', 'Ei leilighet i sentrum', 'En enebolig på landet', 'En hybel'], answer: 0 },
      { q: 'Hva liker Elise med huset?', options: ['Kort vei til Bymarka, så hun kan gå tur med hunden', 'Det store kjøkkenet', 'At det ligger i sentrum', 'Den lave fellesgjelden'], answer: 0 },
      { q: 'Hva må de huske å ta hensyn til i budrunden?', options: ['Fellesgjelden, i tilfelle renta stiger', 'At huset må males', 'At de må selge bilen', 'At banken er stengt i helgen'], answer: 0 },
    ],
    [
      { q: 'Hva er ei sokkelleilighet?', options: ['Ei leilighet i kjelleren i en enebolig', 'Ei leilighet på toppen av ei blokk', 'Et rekkehus', 'En hybel i en studentby'], answer: 0 },
      { q: 'Hva kjennetegner et rekkehus?', options: ['Tre eller flere like hus i rekke med felles tomt', 'Ett hus som ligger for seg selv', 'Mange leiligheter med felles inngang', 'Et hus med to leiligheter'], answer: 0 },
      { q: 'Hva betaler du til banken når du eier en bolig med lån?', options: ['Avdrag og renter', 'Husleie', 'Felleskostnader til utleieren', 'Ingenting'], answer: 0 },
    ],
  ],
  'b1-5': [
    [
      { q: 'Hvorfor vil Ling at Ding skal gå på privatskole?', options: ['Hun stoler ikke på offentlige skoler og tror privatskole gir flere muligheter', 'Den ligger nærmere', 'Det er gratis', 'Yang vil det'], answer: 0 },
      { q: 'Hva sier Yang om karakterer i barneskolen?', options: ['Ingen skoler gir karakterer før ungdomsskolen', 'Bare privatskoler gir karakterer', 'Alle får karakterer fra første klasse', 'Karakterer gis bare i matte'], answer: 0 },
      { q: 'Hvorfor er den offentlige skolen praktisk for familien?', options: ['Den ligger bare ti minutter unna', 'Den har mindre klasser', 'Den har kinesiskundervisning', 'Den har lengre skoledager'], answer: 0 },
    ],
    [
      { q: 'Hva likte Andreas best på barneskolen?', options: ['Matematikk', 'Norsk', 'Gym', 'Musikk'], answer: 0 },
      { q: 'Hva syntes Andreas om karakterer på ungdomsskolen?', options: ['De var motiverende', 'De var urettferdige', 'De var unødvendige', 'Han fikk ingen karakterer'], answer: 0 },
      { q: 'Hvorfor valgte han studiespesialisering?', options: ['Han likte realfag og ville bli lege', 'Vennene hans valgte det', 'Det var nærmest', 'Foreldrene bestemte det'], answer: 0 },
    ],
    [
      { q: 'Hvem har ansvaret for de offentlige grunnskolene?', options: ['Kommunene', 'Fylkeskommunene', 'Staten', 'Foreldrene'], answer: 0 },
      { q: 'Hva gir yrkesfaglig opplæring?', options: ['Kompetanse i et yrke, men ikke rett til å studere ved universitet', 'Generell studiekompetanse', 'En bachelorgrad', 'Rett til å bli lærer'], answer: 0 },
      { q: 'Hva er spesielt med folkehøyskole?', options: ['Man bor på skolen og har verken karakterer eller eksamen', 'Den er bare for voksne', 'Den gir en mastergrad', 'Den er obligatorisk'], answer: 0 },
    ],
  ],
  'b1-6': [
    [
      { q: 'Hva slags stilling søker Ling?', options: ['Et ett års vikariat som regnskapsmedarbeider', 'En fast stilling som daglig leder', 'En deltidsjobb i butikk', 'En stilling som lærer'], answer: 0 },
      { q: 'Hva skriver Ling om språkene sine?', options: ['Hun snakker kinesisk, engelsk og norsk, og litt tysk og japansk', 'Hun snakker bare kinesisk og engelsk', 'Hun snakker flytende fransk', 'Hun skriver ikke om språk'], answer: 0 },
      { q: 'Hvordan beskriver Ling seg selv?', options: ['Selvstendig, systematisk og ryddig', 'Kreativ og spontan', 'Sjenert og stille', 'Konkurranseinnstilt'], answer: 0 },
    ],
    [
      { q: 'Hva sier Ling er hennes største svakhet?', options: ['Hun er litt sjenert og liker ikke å snakke foran mange', 'Hun er ofte for sein', 'Hun er dårlig med tall', 'Hun snakker dårlig norsk'], answer: 0 },
      { q: 'Hvorfor trenger firmaet en regnskapsmedarbeider nå?', options: ['De vil ikke kjøpe regnskapstjenester fra et annet firma lenger', 'Den forrige gikk av med pensjon', 'De har fått mange nye kunder', 'Daglig leder slutter'], answer: 0 },
      { q: 'Kan vikariatet bli fast?', options: ['Kanskje, ordningen skal evalueres om ett år', 'Nei, aldri', 'Ja, med en gang', 'Det sier de ikke noe om'], answer: 0 },
    ],
    [
      { q: 'Hvem har ofte midlertidige stillinger, ifølge essayet?', options: ['Nyutdannede og folk med lite utdanning', 'Bare eldre arbeidstakere', 'Bare ledere', 'Bare studenter'], answer: 0 },
      { q: 'Hva er en fordel med midlertidig stilling?', options: ['Man kan prøve ulike jobber og få et større nettverk', 'Man får høyere lønn', 'Det er lettere å få boliglån', 'Man får mer respekt'], answer: 0 },
      { q: 'Hva er en ulempe?', options: ['Det er vanskeligere å planlegge økonomien og få boliglån', 'Man må jobbe mer overtid', 'Man kan ikke bytte jobb', 'Man får ikke ferie'], answer: 0 },
    ],
  ],
  'b1-7': [
    [
      { q: 'Hvem er konferansen for?', options: ['Lærere, forskere og alle som er interessert i kjemi', 'Bare studenter', 'Bare professorer fra NTNU', 'Politikere'], answer: 0 },
      { q: 'Hvordan opplevde Marte konferansen?', options: ['Hun var nervøs før innlegget, men lærte mye og knyttet kontakter', 'Den var kjedelig', 'Hun fant ikke universitetet', 'Hun rakk ikke innlegget sitt'], answer: 0 },
      { q: 'Hva skal Marte gjøre nå?', options: ['Lage en eksamensoppgave innen slutten av uka', 'Reise til Sverige', 'Skrive en doktorgrad', 'Ta ferie'], answer: 0 },
    ],
    [
      { q: 'Hva er høydepunktet i karrieren til Margrethe?', options: ['Tverrfaglig samarbeid, særlig når forskere fra ulike fag publiserer sammen', 'Å bli professor', 'Å få høyere lønn', 'En pris hun vant'], answer: 0 },
      { q: 'Hvordan opplevde hun prosessen med å bli professor?', options: ['Tøff — hun fikk først nei', 'Lett og rask', 'Hun søkte aldri', 'Morsom'], answer: 0 },
      { q: 'Vil hun anbefale en karriere i akademia?', options: ['I utgangspunktet ikke, fordi det er vanskelig å få fast jobb', 'Ja, til alle', 'Bare til medisinere', 'Ja, fordi lønna er så god'], answer: 0 },
    ],
    [
      { q: 'Hva trenger man for å studere ved universitet eller høyskole?', options: ['Fullført videregående med generell studiekompetanse', 'En bachelorgrad', 'Arbeidserfaring', 'Bare være over 18 år'], answer: 0 },
      { q: 'Hva er den største forskjellen på universiteter og høyskoler i dag?', options: ['Størrelsen', 'Faglig nivå', 'Karaktersystemet', 'Prisen'], answer: 0 },
      { q: 'Hvem tar oftest høyere utdanning i Norge?', options: ['Kvinner', 'Menn', 'Like mange av hver', 'Utenlandske studenter'], answer: 0 },
    ],
  ],
  'b1-8': [
    [
      { q: 'Når ble NTNU etablert?', options: ['I 1996', 'I 1910', 'I 1657', 'I 2016'], answer: 0 },
      { q: 'Hva skjedde i 2016?', options: ['Høyskolene i Sør-Trøndelag, Ålesund og Gjøvik ble slått sammen med NTNU', 'NTNU ble lagt ned', 'NTNU flyttet til Oslo', 'Vitenskapsmuseet ble grunnlagt'], answer: 0 },
      { q: 'Hvorfor vil man samle NTNU rundt Gløshaugen?', options: ['For å utnytte felles ressurser, kompetanse og lokaler', 'Fordi det er billigere tomter der', 'Fordi studentene ønsker det', 'Fordi Dragvoll skal rives'], answer: 0 },
    ],
    [
      { q: 'Hva fikk May-Britt og Edvard Moser Nobelprisen for?', options: ['Forskning på stedsansen i hjernen', 'Forskning på kreft', 'Forskning på katalyse', 'Litteratur'], answer: 0 },
      { q: 'Hvem var Fred Kavli?', options: ['En velstående fysiker som finansierte et institutt ved NTNU', 'En nobelprisvinner', 'Rektor ved NTNU', 'En kjent politiker'], answer: 0 },
      { q: 'Hvordan kan forskningen hjelpe mennesker med Alzheimers sykdom?', options: ['Ved å forstå hva som går galt med hukommelse og stedsans i hjernen', 'Ved å lage nye sensorer til biler', 'Ved å trene opp musklene', 'Den kan ikke hjelpe'], answer: 0 },
    ],
    [
      { q: 'Hvilken norsk forfatter fikk Nobelprisen i litteratur i 1928?', options: ['Sigrid Undset', 'Knut Hamsun', 'Bjørnstjerne Bjørnson', 'Henrik Ibsen'], answer: 0 },
      { q: 'Hvem fikk Nobels fredspris i 1922?', options: ['Fridtjof Nansen', 'Christian Lous Lange', 'Odd Hassel', 'Ragnar Frisch'], answer: 0 },
      { q: 'I hvilket fag har flest nordmenn fått minneprisen?', options: ['Økonomi', 'Fysikk', 'Kjemi', 'Medisin'], answer: 0 },
    ],
  ],
  'b1-9': [
    [
      { q: 'Hva var det opprinnelige navnet på Trondheim?', options: ['Nidaros', 'Trondhjem', 'Bakklandet', 'Heimdal'], answer: 0 },
      { q: 'Hvem står på søylen på Torget?', options: ['Olav Tryggvason, grunnleggeren av byen', 'Olav den hellige', 'Kong Harald', 'En ukjent soldat'], answer: 0 },
      { q: 'Hvorfor ble det lagt en ny byplan i 1681?', options: ['Etter en stor brann, for å få bredere gater', 'Fordi kongen flyttet dit', 'For å bygge en jernbane', 'Fordi byen ble slått sammen med nabokommuner'], answer: 0 },
    ],
    [
      { q: 'Hvorfor feirer nordmenn 17. mai?', options: ['Til minne om grunnloven fra 1814', 'Til minne om slutten på andre verdenskrig', 'For å feire kongens bursdag', 'For å feire sommerens start'], answer: 0 },
      { q: 'Hva skjer når folketoget starter i Trondheim?', options: ['Det skytes salutt fra Kristiansten festning', 'Kongen holder tale', 'Russen starter festen', 'Alle synger på Gløshaugen'], answer: 0 },
      { q: 'Hvordan reagerer noen utenlandske kommentatorer på 17. mai?', options: ['De synes det er mange flagg og tolker det som nasjonalisme', 'De synes det er kjedelig', 'De vil feire det i sitt eget land', 'De legger ikke merke til det'], answer: 0 },
    ],
    [
      { q: 'Hvilke fire store grupper deler man norske dialekter i?', options: ['Østnorsk, vestnorsk, trøndersk og nordnorsk', 'Bokmål, nynorsk, samisk og trøndersk', 'Bergensk, oslosk, stavangersk og tromsøsk', 'Høy, lav, rask og langsom'], answer: 0 },
      { q: 'Hva betyr «æ» på trøndersk?', options: ['Jeg', 'Er', 'Hun', 'Ikke'], answer: 0 },
      { q: 'Hva betyr «itj» på trøndersk?', options: ['Ikke', 'Hvem', 'Hvordan', 'Denne'], answer: 0 },
    ],
  ],
  'b1-10': [
    [
      { q: 'Hvem er Steinar og Ingeborg for Ding?', options: ['Nesten som reservebesteforeldre', 'Lærerne hans', 'Hans ekte besteforeldre', 'Foreldrene til en venn'], answer: 0 },
      { q: 'Hva har skjedd med Steinar?', options: ['Han døde av hjertet i natt', 'Han er på sykehus', 'Han har flyttet', 'Han har brukket beinet'], answer: 0 },
      { q: 'Hvordan hjelper Ling Ingeborg?', options: ['Hun inviterer henne på middag og støtter henne i begravelsen', 'Hun ringer en ambulanse', 'Hun skriver dødsannonsen', 'Hun reiser bort'], answer: 0 },
    ],
    [
      { q: 'Hvem gifter seg?', options: ['Peter fra Tyskland og Eva fra Norge', 'Susanne og mannen hennes', 'Frank og søstera til Eva', 'Yang og Ling'], answer: 0 },
      { q: 'Hvor er vielsen?', options: ['I Nidarosdomen', 'På rådhuset', 'På et hotell', 'I Tyskland'], answer: 0 },
      { q: 'Hva betyr det når de norske gjestene klirrer med teskjeene mot glassene?', options: ['At brudeparet skal kysse hverandre', 'At maten er ferdig', 'At noen skal holde tale', 'At festen er slutt'], answer: 0 },
    ],
    [
      { q: 'Fra hvilken alder kan man selv velge religion i Norge?', options: ['15 år', '18 år', '12 år', '16 år'], answer: 0 },
      { q: 'Hvor mange prosent tilhører Den norske kirke?', options: ['Litt mer enn 70 prosent', 'Omtrent 50 prosent', 'Over 90 prosent', 'Omtrent 2,5 prosent'], answer: 0 },
      { q: 'Hva er den nest største religionen i Norge?', options: ['Islam', 'Buddhisme', 'Jødedom', 'Hinduisme'], answer: 0 },
    ],
  ],
}
