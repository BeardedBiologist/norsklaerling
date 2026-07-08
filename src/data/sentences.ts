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

  // ── expansion pack ──
  // A2 · everyday routines
  { id: 's37', no: 'Jeg drikker kaffe før jeg drar på jobb', en: 'I drink coffee before I leave for work', level: 'A2', focus: 'før-setning', hint: 'før + subject + verb.' },
  { id: 's38', no: 'Hun tar bussen til byen hver morgen', en: 'She takes the bus to town every morning', level: 'A2', focus: 'grunnleggende ordstilling', hint: 'Subject – verb – object – place – time.' },
  { id: 's39', no: 'Hva skal du gjøre i helgen', en: 'What are you going to do this weekend', level: 'A2', focus: 'spørsmål', hint: 'Question word + verb + subject.' },
  { id: 's40', no: 'Jeg vil gjerne bestille et bord til to', en: 'I would like to book a table for two', level: 'A2', focus: 'høflighet', hint: 'vil gjerne + infinitive is the polite request form.' },
  { id: 's41', no: 'Kan jeg få en kaffe og en bolle takk', en: 'Can I have a coffee and a bun please', level: 'A2', focus: 'høflighet', hint: 'Kan jeg få … is how you order.' },
  { id: 's42', no: 'Vi trenger ikke å kjøpe mer melk', en: 'We don’t need to buy more milk', level: 'A2', focus: 'nektelse', hint: 'trenger ikke å + infinitive.' },
  { id: 's43', no: 'Hvor mye koster denne genseren', en: 'How much does this sweater cost', level: 'A2', focus: 'spørsmål', hint: 'Hvor mye + verb + subject.' },
  { id: 's44', no: 'Det tar tjue minutter å gå til sentrum', en: 'It takes twenty minutes to walk to the centre', level: 'A2', focus: 'det-setninger', hint: 'Det tar + time + å + infinitive.' },
  { id: 's45', no: 'Jeg skal hente barna klokka fire i dag', en: 'I am picking up the kids at four today', level: 'A2', focus: 'modalverb', hint: 'skal + infinitive; time at the end.' },
  { id: 's46', no: 'Han liker å lese aviser om morgenen', en: 'He likes to read newspapers in the morning', level: 'A2', focus: 'infinitiv med å', hint: 'liker å + infinitive.' },

  // B1 · inversion drills
  { id: 's47', no: 'Hver sommer reiser vi til hjemlandet mitt', en: 'Every summer we travel to my home country', level: 'B1', focus: 'inversjon (V2)', hint: 'Time phrase first → reiser vi.' },
  { id: 's48', no: 'Heldigvis fant jeg lommeboka igjen', en: 'Luckily I found my wallet again', level: 'B1', focus: 'inversjon (V2)', hint: 'Adverb first → fant jeg.' },
  { id: 's49', no: 'I Norge betaler alle skatt av inntekten sin', en: 'In Norway everyone pays tax on their income', level: 'B1', focus: 'inversjon (V2)', hint: 'Place first → betaler alle.' },
  { id: 's50', no: 'Neste år skal datteren min begynne på skolen', en: 'Next year my daughter starts school', level: 'B1', focus: 'inversjon (V2)', hint: 'Neste år first → skal datteren min.' },
  { id: 's51', no: 'Av og til savner jeg familien min veldig', en: 'Sometimes I miss my family a lot', level: 'B1', focus: 'inversjon (V2)', hint: '“Av og til” counts as position one → savner jeg.' },
  { id: 's52', no: 'For to uker siden begynte jeg i ny jobb', en: 'Two weeks ago I started a new job', level: 'B1', focus: 'inversjon (V2)', hint: 'The whole time phrase is position one.' },

  // B1 · subordinate clauses
  { id: 's53', no: 'Hun spør om du kan komme litt tidligere', en: 'She asks if you can come a bit earlier', level: 'B1', focus: 'indirekte spørsmål', hint: 'om + subject + verb.' },
  { id: 's54', no: 'Jeg vet ikke hvor bussen stopper', en: 'I don’t know where the bus stops', level: 'B1', focus: 'indirekte spørsmål', hint: 'Question word + subject + verb — no inversion inside.' },
  { id: 's55', no: 'Han sier at han alltid har likt å lage mat', en: 'He says that he has always liked cooking', level: 'B1', focus: 'adverb i leddsetning', hint: 'In subordinate clauses, alltid comes before har.' },
  { id: 's56', no: 'Vi blir hjemme fordi sønnen vår er syk', en: 'We are staying home because our son is ill', level: 'B1', focus: 'fordi', hint: 'fordi + subject + verb.' },
  { id: 's57', no: 'Læreren som underviser oss kommer fra Bergen', en: 'The teacher who teaches us comes from Bergen', level: 'B1', focus: 'som-setning', hint: 'som-clause sits right after the noun it describes.' },
  { id: 's58', no: 'Hvis du trenger hjelp kan du ringe meg', en: 'If you need help you can call me', level: 'B1', focus: 'hvis-setning', hint: 'Condition first → kan du in the main clause.' },
  { id: 's59', no: 'Når vinteren kommer blir dagene veldig korte', en: 'When winter comes the days become very short', level: 'B1', focus: 'når-setning', hint: 'Når-clause first → blir dagene.' },
  { id: 's60', no: 'Jeg håper at dere ikke må vente lenge', en: 'I hope you don’t have to wait long', level: 'B1', focus: 'ikke i leddsetning', hint: 'ikke before må in the at-clause.' },
  { id: 's61', no: 'Selv om jeg er sliten trener jeg tre ganger i uka', en: 'Even though I am tired I train three times a week', level: 'B1', focus: 'selv om', hint: 'Selv om-clause first → trener jeg.' },
  { id: 's62', no: 'Da vi flyttet hit kjente vi ingen', en: 'When we moved here we knew no one', level: 'B1', focus: 'da-setning', hint: 'Da for one past event; then kjente vi.' },

  // B1 · practical life
  { id: 's63', no: 'Jeg vil gjerne bestille time hos fastlegen', en: 'I would like to book an appointment with my GP', level: 'B1', focus: 'høflighet', hint: 'bestille time hos + person.' },
  { id: 's64', no: 'Du må sende søknaden før fristen går ut', en: 'You must send the application before the deadline expires', level: 'B1', focus: 'modalverb', hint: 'må + infinitive; før-clause at the end.' },
  { id: 's65', no: 'Vi har lyst til å kjøpe et lite rekkehus', en: 'We want to buy a small terraced house', level: 'B1', focus: 'faste uttrykk', hint: 'å ha lyst til å + infinitive.' },
  { id: 's66', no: 'Det lønner seg å sammenligne priser på nettet', en: 'It pays to compare prices online', level: 'B1', focus: 'det-setninger', hint: 'Det lønner seg å + infinitive.' },
  { id: 's67', no: 'Hun har bodd i Norge i over ti år', en: 'She has lived in Norway for over ten years', level: 'B1', focus: 'presens perfektum', hint: 'har bodd + i + duration.' },
  { id: 's68', no: 'Jeg pleier å trene rett etter jobb', en: 'I usually exercise right after work', level: 'B1', focus: 'faste uttrykk', hint: 'pleier å + infinitive = usually.' },
  { id: 's69', no: 'Kan du si det en gang til litt saktere', en: 'Can you say that once more a bit more slowly', level: 'B1', focus: 'muntlige fraser', hint: 'Useful exam phrase! Verb first in the question.' },
  { id: 's70', no: 'Det viktigste for meg er at barna trives', en: 'The most important thing for me is that the kids are happy', level: 'B1', focus: 'utbrytning', hint: 'Det viktigste … er at + clause.' },

  // B2 · complex structures
  { id: 's71', no: 'Etter min mening bør alle lære seg litt norsk historie', en: 'In my opinion everyone should learn some Norwegian history', level: 'B2', focus: 'meninger', hint: 'Fronted opinion phrase → bør alle.' },
  { id: 's72', no: 'Det sies at nordmenn er kalde men det stemmer ikke', en: 'It is said that Norwegians are cold but that is not true', level: 'B2', focus: 's-passiv', hint: 'Det sies at … = it is said that.' },
  { id: 's73', no: 'Desto lenger jeg bor her desto bedre trives jeg', en: 'The longer I live here the better I like it', level: 'B2', focus: 'jo/desto', hint: 'Both halves take comparative + inversion in the second.' },
  { id: 's74', no: 'Skulle det oppstå problemer kan du kontakte oss', en: 'Should problems arise you can contact us', level: 'B2', focus: 'kondisjonalis', hint: 'Verb-first conditional: Skulle det …' },
  { id: 's75', no: 'Å lære et nytt språk krever både tid og tålmodighet', en: 'Learning a new language requires both time and patience', level: 'B2', focus: 'infinitiv som subjekt', hint: 'The infinitive phrase is the subject.' },
  { id: 's76', no: 'Undersøkelsen viser at stadig flere jobber hjemmefra', en: 'The survey shows that more and more people work from home', level: 'B2', focus: 'formelt språk', hint: 'viser at + subject + verb.' },
  { id: 's77', no: 'Til tross for språkbarrieren fikk hun jobben', en: 'Despite the language barrier she got the job', level: 'B2', focus: 'til tross for', hint: 'Fronted phrase → fikk hun.' },
  { id: 's78', no: 'Det som bekymrer meg mest er de økende prisene', en: 'What worries me most is the rising prices', level: 'B2', focus: 'utbrytning', hint: 'Det som … er … cleft.' },
  { id: 's79', no: 'Hadde det ikke vært for naboene hadde vi aldri klart det', en: 'Had it not been for the neighbours we would never have managed', level: 'B2', focus: 'kondisjonalis', hint: 'Verb-first in both clauses.' },
  { id: 's80', no: 'Debatten handler i bunn og grunn om tillit', en: 'The debate is fundamentally about trust', level: 'B2', focus: 'idiomer', hint: '«i bunn og grunn» = basically, at heart.' },

  // ── s81-s120 · traffic, housing, bureaucracy, school, life events, climate ──
  // A2 · traffic & town
  { id: 's81', no: 'Du må kjøre sakte i rundkjøringen', en: 'You must drive slowly in the roundabout', level: 'A2', focus: 'grunnleggende ordstilling', hint: 'Subject – modal – verb – adverb – place.' },
  { id: 's82', no: 'Bussen er forsinket på grunn av en ulykke', en: 'The bus is delayed because of an accident', level: 'A2', focus: 'forklaring', hint: 'på grunn av + noun explains the reason.' },
  { id: 's83', no: 'Det er vanskelig å finne parkering i sentrum', en: 'It is hard to find parking in the centre', level: 'A2', focus: 'det-setninger', hint: 'Det er + adjective + å + infinitive.' },
  { id: 's84', no: 'Vi tar ferga fordi broa er stengt', en: 'We are taking the ferry because the bridge is closed', level: 'A2', focus: 'forklaring', hint: 'fordi + subject + verb.' },
  { id: 's85', no: 'Hvor er nærmeste bensinstasjon', en: 'Where is the nearest petrol station', level: 'A2', focus: 'spørsmål', hint: 'Hvor + verb + subject.' },

  // A2 · money & shopping
  { id: 's86', no: 'Jeg betaler regningene i nettbanken hver måned', en: 'I pay the bills in the online bank every month', level: 'A2', focus: 'grunnleggende ordstilling', hint: 'Time at the end: hver måned.' },
  { id: 's87', no: 'Kan jeg betale med kort eller kontanter', en: 'Can I pay by card or cash', level: 'A2', focus: 'spørsmål', hint: 'Question starts with the modal verb.' },
  { id: 's88', no: 'Det lønner seg å sammenligne priser før du kjøper', en: 'It pays to compare prices before you buy', level: 'A2', focus: 'det-setninger', hint: 'Det lønner seg å + infinitive.' },
  { id: 's89', no: 'Jeg har ikke råd til å kjøpe ny mobil nå', en: 'I cannot afford to buy a new mobile now', level: 'A2', focus: 'faste uttrykk', hint: 'å ha råd til å + infinitive.' },
  { id: 's90', no: 'Hun overførte penger til sparekontoen i går', en: 'She transferred money to the savings account yesterday', level: 'A2', focus: 'preteritum', hint: 'Past tense: overførte.' },

  // B1 · housing & bureaucracy
  { id: 's91', no: 'Husleia inkluderer strøm internett og felleskostnader', en: 'The rent includes electricity, internet and shared costs', level: 'B1', focus: 'grunnleggende ordstilling', hint: 'List items with commas; og before the last item.' },
  { id: 's92', no: 'Vi må sende søknaden før fristen går ut', en: 'We must send the application before the deadline expires', level: 'B1', focus: 'før-setning', hint: 'før + subject + verb.' },
  { id: 's93', no: 'Etter at vi flyttet inn har vi trivdes veldig godt', en: 'Since we moved in we have been very happy', level: 'B1', focus: 'etter at', hint: 'etter at + past; main clause inversion: har vi.' },
  { id: 's94', no: 'Behandlingstiden for oppholdstillatelse er dessverre lang', en: 'The processing time for a residence permit is unfortunately long', level: 'B1', focus: 'formelt språk', hint: 'Subject – verb – adverb – adjective.' },
  { id: 's95', no: 'Hvis du ikke fornyer kortet ditt mister du rettighetene', en: 'If you do not renew your card you lose the rights', level: 'B1', focus: 'hvis-setning', hint: 'Condition first; main clause: mister du.' },
  { id: 's96', no: 'Jeg håper at vi får flytte inn til neste måned', en: 'I hope that we can move in by next month', level: 'B1', focus: 'leddsetning med at', hint: 'at + subject + verb — no inversion.' },
  { id: 's97', no: 'På generalforsamlingen diskuterte beboerne felleskostnadene', en: 'At the general meeting the residents discussed the shared costs', level: 'B1', focus: 'inversjon (V2)', hint: 'Place first → diskuterte beboerne.' },

  // B1 · school & university
  { id: 's98', no: 'Datteren min begynner på videregående til høsten', en: 'My daughter starts upper secondary school this autumn', level: 'B1', focus: 'grunnleggende ordstilling', hint: 'Possessive + noun as subject.' },
  { id: 's99', no: 'Han leser til eksamen så han kan ikke komme i kveld', en: 'He is studying for the exam so he cannot come tonight', level: 'B1', focus: 'forklaring', hint: 'så introduces the consequence.' },
  { id: 's100', no: 'Innleveringen må være ferdig før klokka tolv', en: 'The assignment must be finished before twelve o’clock', level: 'B1', focus: 'modalverb', hint: 'må + være + adjective.' },
  { id: 's101', no: 'Studentene får støtte fra Lånekassen hvert semester', en: 'The students receive support from the Loan Fund every semester', level: 'B1', focus: 'grunnleggende ordstilling', hint: 'Subject – verb – object – source – time.' },

  // B1 · life events
  { id: 's102', no: 'De skal gifte seg i sommer etter ti år sammen', en: 'They are getting married this summer after ten years together', level: 'B1', focus: 'faste uttrykk', hint: 'å gifte seg = to get married.' },
  { id: 's103', no: 'Hun er gravid og skal ha barselpermisjon til våren', en: 'She is pregnant and will take parental leave in the spring', level: 'B1', focus: 'grunnleggende ordstilling', hint: 'Two clauses joined by og.' },
  { id: 's104', no: 'Etter skilsmissen deler de omsorgen for barna', en: 'After the divorce they share custody of the children', level: 'B1', focus: 'etter', hint: 'etter + noun; subject + verb.' },
  { id: 's105', no: 'Han pensjonerte seg da han fylte sekstisju', en: 'He retired when he turned sixty-seven', level: 'B1', focus: 'da-setning', hint: 'da + past tense for a single event.' },

  // B1 · climate & environment
  { id: 's106', no: 'Klimaendringene påvirker været i hele verden', en: 'Climate change affects the weather all over the world', level: 'B1', focus: 'formelt språk', hint: 'Subject – verb – object – place.' },
  { id: 's107', no: 'Norge produserer nesten all strøm fra vannkraft', en: 'Norway produces almost all its electricity from hydropower', level: 'B1', focus: 'grunnleggende ordstilling', hint: 'Subject – verb – quantity – object – source.' },
  { id: 's108', no: 'Det er viktig å sortere søppelet riktig', en: 'It is important to sort the rubbish correctly', level: 'B1', focus: 'det-setninger', hint: 'Det er + adjective + å + infinitive.' },
  { id: 's109', no: 'Flere og flere velger å kjøpe elbil i Norge', en: 'More and more people choose to buy an electric car in Norway', level: 'B1', focus: 'infinitiv med å', hint: 'velger å + infinitive.' },

  // B2 · law & justice
  { id: 's110', no: 'Alle er like for loven uansett hvor de kommer fra', en: 'Everyone is equal before the law regardless of where they come from', level: 'B2', focus: 'uansett', hint: 'uansett + question word = regardless.' },
  { id: 's111', no: 'Hvis du bryter loven må du ta konsekvensene', en: 'If you break the law you must face the consequences', level: 'B2', focus: 'hvis-setning', hint: 'Condition first → må du.' },
  { id: 's112', no: 'Retten konkluderte med at tiltalte var skyldig', en: 'The court concluded that the accused was guilty', level: 'B2', focus: 'formelt språk', hint: 'konkluderte med at + subject + verb.' },
  { id: 's113', no: 'Til tross for mangel på bevis ble han frikjent', en: 'Despite the lack of evidence he was acquitted', level: 'B2', focus: 'til tross for', hint: 'Fronted phrase → ble han frikjent.' },

  // B2 · politics & economy
  { id: 's114', no: 'Regjeringen la fram et nytt lovforslag i går', en: 'The government presented a new bill yesterday', level: 'B2', focus: 'formelt språk', hint: 'la fram = presented; time at the end.' },
  { id: 's115', no: 'Et flertall på Stortinget stemte for forslaget', en: 'A majority in Parliament voted for the proposal', level: 'B2', focus: 'formelt språk', hint: 'Subject – place – verb – preposition – object.' },
  { id: 's116', no: 'Inflasjonen gjør at vanlige folk får mindre å rutte med', en: 'Inflation means that ordinary people have less to manage with', level: 'B2', focus: 'leddsetning med at', hint: 'gjør at + subject + verb.' },
  { id: 's117', no: 'Næringslivet trenger flere fagarbeidere for å vokse', en: 'The business sector needs more skilled workers to grow', level: 'B2', focus: 'infinitiv med å', hint: 'trenger + object + for å + infinitive.' },

  // B2 · argumentation & society
  { id: 's118', no: 'La meg først oppsummere de viktigste argumentene', en: 'Let me first summarise the main arguments', level: 'B2', focus: 'meninger', hint: 'La meg + infinitive.' },
  { id: 's119', no: 'Det er ingen selvfølge at alle har tilgang på helsehjelp', en: 'It is not a given that everyone has access to healthcare', level: 'B2', focus: 'det-setninger', hint: 'Det er ingen selvfølge at + clause.' },
  { id: 's120', no: 'Jo mer samfunnet endrer seg desto viktigere blir utdanning', en: 'The more society changes, the more important education becomes', level: 'B2', focus: 'jo … desto', hint: 'Jo + comparative … desto + comparative + verb + subject.' },
]
