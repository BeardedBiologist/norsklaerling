import type { VocabCard } from '../types'
import { vocabA2 } from './vocab-a2'
import { vocabA2b } from './vocab-a2-2'
import { vocabA2c } from './vocab-a2-3'
import { vocabA2d } from './vocab-a2-4'
import { vocabA2e } from './vocab-a2-5'
import { vocabA2f } from './vocab-a2-6'
import { vocabB1 } from './vocab-b1'
import { vocabB1b } from './vocab-b1-2'
import { vocabB1c } from './vocab-b1-3'
import { vocabB1d } from './vocab-b1-4'
import { vocabB1e } from './vocab-b1-5'
import { vocabB2 } from './vocab-b2'
import { vocabB2b } from './vocab-b2-2'
import { vocabB2c } from './vocab-b2-3'
import { vocabB2d } from './vocab-b2-4'
import { vocabB2e } from './vocab-b2-5'
import { vocabB2f } from './vocab-b2-6'
import { vocabB2g } from './vocab-b2-7'

/**
 * Core vocabulary for A2 → B2, weighted toward what norskprøven and
 * everyday Norwegian life actually demand. Genders follow bokmål.
 *
 * IMPORTANT: card ids are referenced by users' SRS progress in Firestore —
 * never change or reuse an existing id. New words go in the vocab-a2/b1/b2
 * expansion files.
 */
const core: VocabCard[] = [
  // ───────────────────────── A2 · hverdagsliv ─────────────────────────
  { id: 'v001', no: 'hverdag', en: 'everyday life / weekday', type: 'substantiv', gender: 'en', example: 'Hverdagen min begynner klokka sju.', exampleEn: 'My everyday life starts at seven o’clock.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v002', no: 'å pleie', en: 'to usually (do) / to care for', type: 'verb', example: 'Jeg pleier å ta bussen til jobb.', exampleEn: 'I usually take the bus to work.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v003', no: 'å handle', en: 'to shop / buy groceries', type: 'verb', example: 'Vi handler mat på lørdager.', exampleEn: 'We buy groceries on Saturdays.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v004', no: 'å vaske', en: 'to wash / clean', type: 'verb', example: 'Jeg må vaske leiligheten i helgen.', exampleEn: 'I have to clean the apartment this weekend.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v005', no: 'å hente', en: 'to pick up / fetch', type: 'verb', example: 'Hun henter barna i barnehagen klokka fire.', exampleEn: 'She picks up the kids from kindergarten at four.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v006', no: 'å levere', en: 'to deliver / drop off / hand in', type: 'verb', example: 'Kan du levere pakken på posten?', exampleEn: 'Can you drop off the package at the post office?', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v007', no: 'avtale', en: 'an appointment / agreement', type: 'substantiv', gender: 'en', example: 'Jeg har en avtale hos legen i morgen.', exampleEn: 'I have an appointment at the doctor’s tomorrow.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v008', no: 'travel', en: 'busy', type: 'adjektiv', example: 'Det har vært en travel uke.', exampleEn: 'It has been a busy week.', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v009', no: 'å glemme', en: 'to forget', type: 'verb', example: 'Ikke glem å låse døra!', exampleEn: 'Don’t forget to lock the door!', level: 'A2', topic: 'hverdagsliv' },
  { id: 'v010', no: 'å huske', en: 'to remember', type: 'verb', example: 'Husker du hva hun sa?', exampleEn: 'Do you remember what she said?', level: 'A2', topic: 'hverdagsliv' },

  // ───────────────────────── A2 · familie og venner ─────────────────────────
  { id: 'v011', no: 'forhold', en: 'a relationship', type: 'substantiv', gender: 'et', example: 'De har et godt forhold til naboene.', exampleEn: 'They have a good relationship with the neighbours.', level: 'A2', topic: 'familie' },
  { id: 'v012', no: 'samboer', en: 'a live-in partner (cohabitant)', type: 'substantiv', gender: 'en', example: 'Hun bor sammen med samboeren sin i Bergen.', exampleEn: 'She lives with her partner in Bergen.', level: 'A2', topic: 'familie' },
  { id: 'v013', no: 'gift', en: 'married', type: 'adjektiv', example: 'De har vært gift i ti år.', exampleEn: 'They have been married for ten years.', level: 'A2', topic: 'familie' },
  { id: 'v014', no: 'barnebarn', en: 'a grandchild', type: 'substantiv', gender: 'et', example: 'Bestemor passer barnebarna hver fredag.', exampleEn: 'Grandma looks after the grandchildren every Friday.', level: 'A2', topic: 'familie' },
  { id: 'v015', no: 'å vokse opp', en: 'to grow up', type: 'verb', example: 'Jeg vokste opp i en liten by.', exampleEn: 'I grew up in a small town.', level: 'A2', topic: 'familie' },
  { id: 'v016', no: 'å bli kjent med', en: 'to get to know', type: 'uttrykk', example: 'Det tar tid å bli kjent med nordmenn.', exampleEn: 'It takes time to get to know Norwegians.', level: 'A2', topic: 'familie' },
  { id: 'v017', no: 'nabo', en: 'a neighbour', type: 'substantiv', gender: 'en', example: 'Naboen min hjelper meg ofte med hagen.', exampleEn: 'My neighbour often helps me with the garden.', level: 'A2', topic: 'familie' },
  { id: 'v018', no: 'å stole på', en: 'to trust / rely on', type: 'uttrykk', example: 'Du kan stole på henne.', exampleEn: 'You can trust her.', level: 'A2', topic: 'familie' },

  // ───────────────────────── A2 · mat og drikke ─────────────────────────
  { id: 'v019', no: 'måltid', en: 'a meal', type: 'substantiv', gender: 'et', example: 'Middag er det viktigste måltidet for mange familier.', exampleEn: 'Dinner is the most important meal for many families.', level: 'A2', topic: 'mat' },
  { id: 'v020', no: 'matpakke', en: 'packed lunch', type: 'substantiv', gender: 'en', example: 'De fleste tar med matpakke på jobb.', exampleEn: 'Most people bring a packed lunch to work.', level: 'A2', topic: 'mat' },
  { id: 'v021', no: 'å smake', en: 'to taste', type: 'verb', example: 'Maten smaker veldig godt.', exampleEn: 'The food tastes very good.', level: 'A2', topic: 'mat' },
  { id: 'v022', no: 'sulten', en: 'hungry', type: 'adjektiv', example: 'Barna er alltid sultne etter skolen.', exampleEn: 'The kids are always hungry after school.', level: 'A2', topic: 'mat' },
  { id: 'v023', no: 'tørst', en: 'thirsty', type: 'adjektiv', example: 'Er du tørst? Jeg kan lage kaffe.', exampleEn: 'Are you thirsty? I can make coffee.', level: 'A2', topic: 'mat' },
  { id: 'v024', no: 'pålegg', en: 'a (bread) topping / spread', type: 'substantiv', gender: 'et', example: 'Brunost er et typisk norsk pålegg.', exampleEn: 'Brown cheese is a typical Norwegian bread topping.', level: 'A2', topic: 'mat' },

  // ───────────────────────── A2 · vær og natur ─────────────────────────
  { id: 'v025', no: 'vær', en: 'weather', type: 'substantiv', gender: 'et', example: 'Det er fint vær i dag.', exampleEn: 'The weather is nice today.', level: 'A2', topic: 'natur' },
  { id: 'v026', no: 'å regne', en: 'to rain', type: 'verb', example: 'Det regner mye i Bergen.', exampleEn: 'It rains a lot in Bergen.', level: 'A2', topic: 'natur' },
  { id: 'v027', no: 'å snø', en: 'to snow', type: 'verb', example: 'Det snødde hele natten.', exampleEn: 'It snowed all night.', level: 'A2', topic: 'natur' },
  { id: 'v028', no: 'glatt', en: 'slippery', type: 'adjektiv', example: 'Vær forsiktig, det er glatt på veien.', exampleEn: 'Be careful, the road is slippery.', level: 'A2', topic: 'natur' },
  { id: 'v029', no: 'tur', en: 'a walk / trip / hike', type: 'substantiv', gender: 'en', example: 'Skal vi gå en tur i skogen?', exampleEn: 'Shall we go for a walk in the forest?', level: 'A2', topic: 'natur' },
  { id: 'v030', no: 'ute', en: 'outside / outdoors', type: 'adverb', example: 'Barna leker ute selv om det regner.', exampleEn: 'The kids play outside even if it rains.', level: 'A2', topic: 'natur' },

  // ───────────────────────── A2 · reise og transport ─────────────────────────
  { id: 'v031', no: 'å reise', en: 'to travel', type: 'verb', example: 'Vi reiser til Spania i sommer.', exampleEn: 'We are travelling to Spain this summer.', level: 'A2', topic: 'reise' },
  { id: 'v032', no: 'billett', en: 'a ticket', type: 'substantiv', gender: 'en', example: 'Har du kjøpt billett til toget?', exampleEn: 'Have you bought a ticket for the train?', level: 'A2', topic: 'reise' },
  { id: 'v033', no: 'forsinket', en: 'delayed', type: 'adjektiv', example: 'Bussen er ti minutter forsinket.', exampleEn: 'The bus is ten minutes delayed.', level: 'A2', topic: 'reise' },
  { id: 'v034', no: 'å rekke', en: 'to catch / make it in time', type: 'verb', example: 'Vi må løpe for å rekke toget.', exampleEn: 'We have to run to catch the train.', level: 'A2', topic: 'reise' },
  { id: 'v035', no: 'holdeplass', en: 'a (bus) stop', type: 'substantiv', gender: 'en', example: 'Holdeplassen ligger rett ved butikken.', exampleEn: 'The bus stop is right by the shop.', level: 'A2', topic: 'reise' },

  // ───────────────────────── A2 · jobb ─────────────────────────
  { id: 'v036', no: 'jobb', en: 'a job', type: 'substantiv', gender: 'en', example: 'Han har fått ny jobb i Oslo.', exampleEn: 'He has got a new job in Oslo.', level: 'A2', topic: 'jobb' },
  { id: 'v037', no: 'kollega', en: 'a colleague', type: 'substantiv', gender: 'en', example: 'Kollegaene mine er veldig hyggelige.', exampleEn: 'My colleagues are very nice.', level: 'A2', topic: 'jobb' },
  { id: 'v038', no: 'sjef', en: 'a boss', type: 'substantiv', gender: 'en', example: 'Sjefen min gir meg mye ansvar.', exampleEn: 'My boss gives me a lot of responsibility.', level: 'A2', topic: 'jobb' },
  { id: 'v039', no: 'lønn', en: 'a salary / wage', type: 'substantiv', gender: 'en', example: 'Lønna blir utbetalt den femtende hver måned.', exampleEn: 'The salary is paid on the fifteenth of every month.', level: 'A2', topic: 'jobb' },
  { id: 'v040', no: 'møte', en: 'a meeting', type: 'substantiv', gender: 'et', example: 'Vi har møte hver mandag morgen.', exampleEn: 'We have a meeting every Monday morning.', level: 'A2', topic: 'jobb' },
  { id: 'v041', no: 'å søke', en: 'to apply / search', type: 'verb', example: 'Hun søker på en stilling i kommunen.', exampleEn: 'She is applying for a position in the municipality.', level: 'A2', topic: 'jobb' },

  // ───────────────────────── A2 · helse ─────────────────────────
  { id: 'v042', no: 'lege', en: 'a doctor', type: 'substantiv', gender: 'en', example: 'Du bør bestille time hos legen.', exampleEn: 'You should book an appointment with the doctor.', level: 'A2', topic: 'helse' },
  { id: 'v043', no: 'syk', en: 'sick / ill', type: 'adjektiv', example: 'Jeg var syk i forrige uke.', exampleEn: 'I was sick last week.', level: 'A2', topic: 'helse' },
  { id: 'v044', no: 'vondt', en: 'pain / hurting', type: 'uttrykk', example: 'Jeg har vondt i hodet.', exampleEn: 'I have a headache.', level: 'A2', topic: 'helse' },
  { id: 'v045', no: 'apotek', en: 'a pharmacy', type: 'substantiv', gender: 'et', example: 'Du kan hente medisinen på apoteket.', exampleEn: 'You can pick up the medicine at the pharmacy.', level: 'A2', topic: 'helse' },
  { id: 'v046', no: 'å trene', en: 'to exercise / train', type: 'verb', example: 'Jeg trener tre ganger i uka.', exampleEn: 'I exercise three times a week.', level: 'A2', topic: 'helse' },

  // ───────────────────────── A2 · bolig ─────────────────────────
  { id: 'v047', no: 'leilighet', en: 'an apartment', type: 'substantiv', gender: 'en', example: 'De leier en leilighet i sentrum.', exampleEn: 'They rent an apartment in the city centre.', level: 'A2', topic: 'bolig' },
  { id: 'v048', no: 'å leie', en: 'to rent', type: 'verb', example: 'Det er dyrt å leie bolig i Oslo.', exampleEn: 'It is expensive to rent housing in Oslo.', level: 'A2', topic: 'bolig' },
  { id: 'v049', no: 'å eie', en: 'to own', type: 'verb', example: 'De fleste nordmenn eier sin egen bolig.', exampleEn: 'Most Norwegians own their own home.', level: 'A2', topic: 'bolig' },
  { id: 'v050', no: 'å flytte', en: 'to move (house)', type: 'verb', example: 'Vi flyttet til Norge for ti år siden.', exampleEn: 'We moved to Norway ten years ago.', level: 'A2', topic: 'bolig' },

  // ───────────────────────── B1 · jobb og arbeidsliv ─────────────────────────
  { id: 'v051', no: 'arbeidsliv', en: 'working life', type: 'substantiv', gender: 'et', example: 'Det norske arbeidslivet er preget av tillit.', exampleEn: 'Norwegian working life is characterised by trust.', level: 'B1', topic: 'jobb' },
  { id: 'v052', no: 'erfaring', en: 'an experience', type: 'substantiv', gender: 'en', example: 'Hun har lang erfaring med kundeservice.', exampleEn: 'She has long experience with customer service.', level: 'B1', topic: 'jobb' },
  { id: 'v053', no: 'ansvar', en: 'a responsibility', type: 'substantiv', gender: 'et', example: 'Alle ansatte har ansvar for et godt arbeidsmiljø.', exampleEn: 'All employees are responsible for a good working environment.', level: 'B1', topic: 'jobb' },
  { id: 'v054', no: 'å ansette', en: 'to hire / employ', type: 'verb', example: 'Bedriften skal ansette to nye medarbeidere.', exampleEn: 'The company is going to hire two new employees.', level: 'B1', topic: 'jobb' },
  { id: 'v055', no: 'arbeidsgiver', en: 'an employer', type: 'substantiv', gender: 'en', example: 'Arbeidsgiveren må betale sykepenger de første dagene.', exampleEn: 'The employer must pay sick pay for the first days.', level: 'B1', topic: 'jobb' },
  { id: 'v056', no: 'arbeidstaker', en: 'an employee', type: 'substantiv', gender: 'en', example: 'Arbeidstakere har rett til ferie hvert år.', exampleEn: 'Employees have the right to holiday every year.', level: 'B1', topic: 'jobb' },
  { id: 'v057', no: 'fagforening', en: 'a trade union', type: 'substantiv', gender: 'en', example: 'Mange nordmenn er medlem av en fagforening.', exampleEn: 'Many Norwegians are members of a trade union.', level: 'B1', topic: 'jobb' },
  { id: 'v058', no: 'søknad', en: 'an application', type: 'substantiv', gender: 'en', example: 'Jeg sendte en søknad, men fikk avslag.', exampleEn: 'I sent an application but was rejected.', level: 'B1', topic: 'jobb' },
  { id: 'v059', no: 'intervju', en: 'an interview', type: 'substantiv', gender: 'et', example: 'Han ble innkalt til intervju uka etter.', exampleEn: 'He was called in for an interview the following week.', level: 'B1', topic: 'jobb' },
  { id: 'v060', no: 'deltid', en: 'part-time', type: 'substantiv', gender: 'en', example: 'Hun jobber deltid mens hun studerer.', exampleEn: 'She works part-time while she studies.', level: 'B1', topic: 'jobb' },
  { id: 'v061', no: 'å si opp', en: 'to quit / give notice / dismiss', type: 'uttrykk', example: 'Han sa opp jobben for å starte for seg selv.', exampleEn: 'He quit his job to start his own business.', level: 'B1', topic: 'jobb' },
  { id: 'v062', no: 'frist', en: 'a deadline', type: 'substantiv', gender: 'en', example: 'Fristen for å søke er første mars.', exampleEn: 'The application deadline is the first of March.', level: 'B1', topic: 'jobb' },
  { id: 'v063', no: 'å utsette', en: 'to postpone', type: 'verb', example: 'Møtet ble utsatt til neste uke.', exampleEn: 'The meeting was postponed until next week.', level: 'B1', topic: 'jobb' },
  { id: 'v064', no: 'krav', en: 'a requirement / demand', type: 'substantiv', gender: 'et', example: 'Det er et krav om norskkunnskaper i mange yrker.', exampleEn: 'Norwegian skills are a requirement in many professions.', level: 'B1', topic: 'jobb' },

  // ───────────────────────── B1 · samfunn ─────────────────────────
  { id: 'v065', no: 'samfunn', en: 'a society', type: 'substantiv', gender: 'et', example: 'Norge er et samfunn med små forskjeller.', exampleEn: 'Norway is a society with small differences.', level: 'B1', topic: 'samfunn' },
  { id: 'v066', no: 'rettighet', en: 'a right', type: 'substantiv', gender: 'en', example: 'Alle barn har rett til utdanning.', exampleEn: 'All children have the right to education.', level: 'B1', topic: 'samfunn' },
  { id: 'v067', no: 'plikt', en: 'a duty / obligation', type: 'substantiv', gender: 'en', example: 'Med rettigheter følger det også plikter.', exampleEn: 'With rights come duties as well.', level: 'B1', topic: 'samfunn' },
  { id: 'v068', no: 'valg', en: 'an election / a choice', type: 'substantiv', gender: 'et', example: 'Det er stortingsvalg hvert fjerde år.', exampleEn: 'There is a parliamentary election every four years.', level: 'B1', topic: 'samfunn' },
  { id: 'v069', no: 'å stemme', en: 'to vote', type: 'verb', example: 'Alle over 18 år kan stemme ved valg.', exampleEn: 'Everyone over 18 can vote in elections.', level: 'B1', topic: 'samfunn' },
  { id: 'v070', no: 'skatt', en: 'a tax', type: 'substantiv', gender: 'en', example: 'Vi betaler skatt for å finansiere velferdsstaten.', exampleEn: 'We pay tax to finance the welfare state.', level: 'B1', topic: 'samfunn' },
  { id: 'v071', no: 'velferdsstat', en: 'a welfare state', type: 'substantiv', gender: 'en', example: 'Velferdsstaten gir alle rett til helsehjelp.', exampleEn: 'The welfare state gives everyone the right to healthcare.', level: 'B1', topic: 'samfunn' },
  { id: 'v072', no: 'likestilling', en: 'gender equality', type: 'substantiv', gender: 'en', example: 'Likestilling er en viktig verdi i Norge.', exampleEn: 'Gender equality is an important value in Norway.', level: 'B1', topic: 'samfunn' },
  { id: 'v073', no: 'ytringsfrihet', en: 'freedom of speech', type: 'substantiv', gender: 'en', example: 'Ytringsfrihet er beskyttet av Grunnloven.', exampleEn: 'Freedom of speech is protected by the Constitution.', level: 'B1', topic: 'samfunn' },
  { id: 'v074', no: 'kommune', en: 'a municipality', type: 'substantiv', gender: 'en', example: 'Kommunen har ansvar for skoler og barnehager.', exampleEn: 'The municipality is responsible for schools and kindergartens.', level: 'B1', topic: 'samfunn' },
  { id: 'v075', no: 'innvandrer', en: 'an immigrant', type: 'substantiv', gender: 'en', example: 'Mange innvandrere lærer norsk på voksenopplæringen.', exampleEn: 'Many immigrants learn Norwegian at adult education.', level: 'B1', topic: 'samfunn' },
  { id: 'v076', no: 'statsborgerskap', en: 'a citizenship', type: 'substantiv', gender: 'et', example: 'Hun søkte om norsk statsborgerskap i fjor.', exampleEn: 'She applied for Norwegian citizenship last year.', level: 'B1', topic: 'samfunn' },
  { id: 'v077', no: 'lov', en: 'a law', type: 'substantiv', gender: 'en', example: 'Stortinget vedtar nye lover.', exampleEn: 'The Parliament passes new laws.', level: 'B1', topic: 'samfunn' },
  { id: 'v078', no: 'å delta', en: 'to participate', type: 'verb', example: 'Det er viktig å delta i lokalsamfunnet.', exampleEn: 'It is important to participate in the local community.', level: 'B1', topic: 'samfunn' },
  { id: 'v079', no: 'dugnad', en: 'voluntary communal work', type: 'substantiv', gender: 'en', example: 'Borettslaget har dugnad hver vår.', exampleEn: 'The housing cooperative has communal work every spring.', level: 'B1', topic: 'samfunn' },
  { id: 'v080', no: 'tillit', en: 'trust', type: 'substantiv', gender: 'en', example: 'Det norske samfunnet bygger på tillit.', exampleEn: 'Norwegian society is built on trust.', level: 'B1', topic: 'samfunn' },

  // ───────────────────────── B1 · meninger og diskusjon ─────────────────────────
  { id: 'v081', no: 'å mene', en: 'to think / be of the opinion', type: 'verb', example: 'Jeg mener at alle bør lære seg norsk.', exampleEn: 'I think everyone should learn Norwegian.', level: 'B1', topic: 'meninger' },
  { id: 'v082', no: 'å synes', en: 'to think / find (subjective)', type: 'verb', example: 'Jeg synes vinteren er for lang.', exampleEn: 'I find the winter too long.', level: 'B1', topic: 'meninger' },
  { id: 'v083', no: 'enig', en: 'agreed / in agreement', type: 'adjektiv', example: 'Jeg er helt enig med deg.', exampleEn: 'I completely agree with you.', level: 'B1', topic: 'meninger' },
  { id: 'v084', no: 'fordel', en: 'an advantage', type: 'substantiv', gender: 'en', example: 'En stor fordel med Norge er naturen.', exampleEn: 'A big advantage of Norway is the nature.', level: 'B1', topic: 'meninger' },
  { id: 'v085', no: 'ulempe', en: 'a disadvantage', type: 'substantiv', gender: 'en', example: 'Den største ulempen er de høye prisene.', exampleEn: 'The biggest disadvantage is the high prices.', level: 'B1', topic: 'meninger' },
  { id: 'v086', no: 'derimot', en: 'on the other hand / however', type: 'adverb', example: 'Sommeren er kort. Vinteren, derimot, varer lenge.', exampleEn: 'The summer is short. The winter, however, lasts long.', level: 'B1', topic: 'meninger' },
  { id: 'v087', no: 'dessuten', en: 'besides / furthermore', type: 'adverb', example: 'Det er dyrt, og dessuten tar det lang tid.', exampleEn: 'It is expensive, and besides, it takes a long time.', level: 'B1', topic: 'meninger' },
  { id: 'v088', no: 'likevel', en: 'nevertheless / still', type: 'adverb', example: 'Det regnet, men vi gikk på tur likevel.', exampleEn: 'It was raining, but we went hiking anyway.', level: 'B1', topic: 'meninger' },
  { id: 'v089', no: 'å påstå', en: 'to claim', type: 'verb', example: 'Han påstår at han aldri har hørt om det.', exampleEn: 'He claims he has never heard of it.', level: 'B1', topic: 'meninger' },
  { id: 'v090', no: 'å foreslå', en: 'to suggest', type: 'verb', example: 'Jeg vil foreslå at vi møtes på fredag.', exampleEn: 'I would suggest that we meet on Friday.', level: 'B1', topic: 'meninger' },
  { id: 'v091', no: 'å anbefale', en: 'to recommend', type: 'verb', example: 'Kan du anbefale en god restaurant?', exampleEn: 'Can you recommend a good restaurant?', level: 'B1', topic: 'meninger' },
  { id: 'v092', no: 'å tvile', en: 'to doubt', type: 'verb', example: 'Jeg tviler på at det kommer til å skje.', exampleEn: 'I doubt that it is going to happen.', level: 'B1', topic: 'meninger' },

  // ───────────────────────── B1 · helse ─────────────────────────
  { id: 'v093', no: 'fastlege', en: 'a GP (regular doctor)', type: 'substantiv', gender: 'en', example: 'Alle som bor i Norge, har rett til en fastlege.', exampleEn: 'Everyone living in Norway has the right to a GP.', level: 'B1', topic: 'helse' },
  { id: 'v094', no: 'resept', en: 'a prescription', type: 'substantiv', gender: 'en', example: 'Legen skrev ut en resept på antibiotika.', exampleEn: 'The doctor wrote a prescription for antibiotics.', level: 'B1', topic: 'helse' },
  { id: 'v095', no: 'sykemelding', en: 'a sick note', type: 'substantiv', gender: 'en', example: 'Hun fikk sykemelding i to uker.', exampleEn: 'She got a sick note for two weeks.', level: 'B1', topic: 'helse' },
  { id: 'v096', no: 'legevakt', en: 'an emergency clinic', type: 'substantiv', gender: 'en', example: 'Vi måtte dra på legevakten midt på natten.', exampleEn: 'We had to go to the emergency clinic in the middle of the night.', level: 'B1', topic: 'helse' },
  { id: 'v097', no: 'å bekymre seg', en: 'to worry', type: 'uttrykk', example: 'Du trenger ikke å bekymre deg for meg.', exampleEn: 'You don’t need to worry about me.', level: 'B1', topic: 'helse' },
  { id: 'v098', no: 'behandling', en: 'a treatment', type: 'substantiv', gender: 'en', example: 'Behandlingen tar omtrent tre måneder.', exampleEn: 'The treatment takes about three months.', level: 'B1', topic: 'helse' },
  { id: 'v099', no: 'å anstrenge seg', en: 'to make an effort', type: 'uttrykk', example: 'Du må anstrenge deg litt mer hvis du vil bli bedre.', exampleEn: 'You have to make more of an effort if you want to improve.', level: 'B1', topic: 'helse' },

  // ───────────────────────── B1 · utdanning ─────────────────────────
  { id: 'v100', no: 'utdanning', en: 'an education', type: 'substantiv', gender: 'en', example: 'Hun tar utdanning som sykepleier.', exampleEn: 'She is training to be a nurse.', level: 'B1', topic: 'utdanning' },
  { id: 'v101', no: 'barnehage', en: 'a kindergarten', type: 'substantiv', gender: 'en', example: 'De fleste barn i Norge går i barnehage.', exampleEn: 'Most children in Norway attend kindergarten.', level: 'B1', topic: 'utdanning' },
  { id: 'v102', no: 'videregående skole', en: 'an upper secondary school', type: 'substantiv', gender: 'en', example: 'Etter ungdomsskolen begynner de fleste på videregående.', exampleEn: 'After lower secondary, most start upper secondary school.', level: 'B1', topic: 'utdanning' },
  { id: 'v103', no: 'gratis', en: 'free (of charge)', type: 'adjektiv', example: 'Offentlig skole er gratis i Norge.', exampleEn: 'Public school is free in Norway.', level: 'B1', topic: 'utdanning' },
  { id: 'v104', no: 'å lære', en: 'to learn / teach', type: 'verb', example: 'Man lærer språket raskere når man bruker det hver dag.', exampleEn: 'You learn the language faster when you use it every day.', level: 'B1', topic: 'utdanning' },
  { id: 'v105', no: 'prøve', en: 'a test / exam', type: 'substantiv', gender: 'en', example: 'Jeg skal ta norskprøven til våren.', exampleEn: 'I am taking the Norwegian test in the spring.', level: 'B1', topic: 'utdanning' },
  { id: 'v106', no: 'å bestå', en: 'to pass (a test)', type: 'verb', example: 'Hun bestod prøven på første forsøk.', exampleEn: 'She passed the test on the first attempt.', level: 'B1', topic: 'utdanning' },
  { id: 'v107', no: 'å øve', en: 'to practise', type: 'verb', example: 'Jo mer du øver, jo bedre blir du.', exampleEn: 'The more you practise, the better you get.', level: 'B1', topic: 'utdanning' },
  { id: 'v108', no: 'forsøk', en: 'an attempt', type: 'substantiv', gender: 'et', example: 'Det var et godt forsøk, men prøv igjen.', exampleEn: 'It was a good attempt, but try again.', level: 'B1', topic: 'utdanning' },

  // ───────────────────────── B1 · følelser ─────────────────────────
  { id: 'v109', no: 'å glede seg til', en: 'to look forward to', type: 'uttrykk', example: 'Jeg gleder meg til sommerferien.', exampleEn: 'I am looking forward to the summer holiday.', level: 'B1', topic: 'følelser' },
  { id: 'v110', no: 'skuffet', en: 'disappointed', type: 'adjektiv', example: 'Han ble skuffet da han ikke fikk jobben.', exampleEn: 'He was disappointed when he didn’t get the job.', level: 'B1', topic: 'følelser' },
  { id: 'v111', no: 'stolt', en: 'proud', type: 'adjektiv', example: 'Foreldrene er stolte av barna sine.', exampleEn: 'The parents are proud of their children.', level: 'B1', topic: 'følelser' },
  { id: 'v112', no: 'ensom', en: 'lonely', type: 'adjektiv', example: 'Mange eldre føler seg ensomme om vinteren.', exampleEn: 'Many elderly people feel lonely in the winter.', level: 'B1', topic: 'følelser' },
  { id: 'v113', no: 'å savne', en: 'to miss (someone/something)', type: 'verb', example: 'Jeg savner familien min i hjemlandet.', exampleEn: 'I miss my family in my home country.', level: 'B1', topic: 'følelser' },
  { id: 'v114', no: 'å trives', en: 'to thrive / feel at home', type: 'verb', example: 'Jeg trives veldig godt på jobben min.', exampleEn: 'I really enjoy my job.', level: 'B1', topic: 'følelser' },
  { id: 'v115', no: 'redd', en: 'afraid', type: 'adjektiv', example: 'Hun er redd for å snakke norsk foran andre.', exampleEn: 'She is afraid of speaking Norwegian in front of others.', level: 'B1', topic: 'følelser' },
  { id: 'v116', no: 'å le', en: 'to laugh', type: 'verb', example: 'Vi lo mye sammen i går kveld.', exampleEn: 'We laughed a lot together last night.', level: 'B1', topic: 'følelser' },

  // ───────────────────────── B1 · hverdagsliv og økonomi ─────────────────────────
  { id: 'v117', no: 'regning', en: 'a bill / invoice', type: 'substantiv', gender: 'en', example: 'Jeg betaler regningene i nettbanken.', exampleEn: 'I pay the bills in the online bank.', level: 'B1', topic: 'økonomi' },
  { id: 'v118', no: 'å spare', en: 'to save (money)', type: 'verb', example: 'De sparer til å kjøpe egen bolig.', exampleEn: 'They are saving to buy their own home.', level: 'B1', topic: 'økonomi' },
  { id: 'v119', no: 'lån', en: 'a loan', type: 'substantiv', gender: 'et', example: 'De tok opp lån i banken for å kjøpe hus.', exampleEn: 'They took out a bank loan to buy a house.', level: 'B1', topic: 'økonomi' },
  { id: 'v120', no: 'å ha råd til', en: 'to be able to afford', type: 'uttrykk', example: 'Vi har ikke råd til å reise i år.', exampleEn: 'We can’t afford to travel this year.', level: 'B1', topic: 'økonomi' },
  { id: 'v121', no: 'forsikring', en: 'an insurance', type: 'substantiv', gender: 'en', example: 'Har du forsikring på bilen?', exampleEn: 'Do you have insurance on the car?', level: 'B1', topic: 'økonomi' },
  { id: 'v122', no: 'avgift', en: 'a fee / duty / charge', type: 'substantiv', gender: 'en', example: 'Det er høye avgifter på bensin i Norge.', exampleEn: 'There are high duties on petrol in Norway.', level: 'B1', topic: 'økonomi' },
  { id: 'v123', no: 'å klage', en: 'to complain', type: 'verb', example: 'Du kan klage på vedtaket innen tre uker.', exampleEn: 'You can appeal the decision within three weeks.', level: 'B1', topic: 'økonomi' },
  { id: 'v124', no: 'vedtak', en: 'a (formal) decision', type: 'substantiv', gender: 'et', example: 'Kommunen fattet et vedtak om ny skole.', exampleEn: 'The municipality made a decision about a new school.', level: 'B1', topic: 'økonomi' },
  { id: 'v125', no: 'søppel', en: 'rubbish / garbage', type: 'substantiv', gender: 'et', example: 'Husk å sortere søppelet.', exampleEn: 'Remember to sort the rubbish.', level: 'B1', topic: 'hverdagsliv' },
  { id: 'v126', no: 'å låne', en: 'to borrow / lend', type: 'verb', example: 'Kan jeg låne boka di til i morgen?', exampleEn: 'Can I borrow your book until tomorrow?', level: 'B1', topic: 'hverdagsliv' },
  { id: 'v127', no: 'i hvert fall', en: 'at least / in any case', type: 'uttrykk', example: 'Det tar en time, i hvert fall med buss.', exampleEn: 'It takes an hour, at least by bus.', level: 'B1', topic: 'hverdagsliv' },
  { id: 'v128', no: 'å ordne', en: 'to arrange / sort out', type: 'verb', example: 'Jeg skal ordne alt før du kommer.', exampleEn: 'I will sort everything out before you arrive.', level: 'B1', topic: 'hverdagsliv' },

  // ───────────────────────── B2 · abstrakt og formelt ─────────────────────────
  { id: 'v129', no: 'forutsetning', en: 'a prerequisite / precondition', type: 'substantiv', gender: 'en', example: 'Godt språk er en forutsetning for å delta i arbeidslivet.', exampleEn: 'Good language skills are a prerequisite for taking part in working life.', level: 'B2', topic: 'samfunn' },
  { id: 'v130', no: 'å innebære', en: 'to entail / imply', type: 'verb', example: 'Statsborgerskap innebærer både rettigheter og plikter.', exampleEn: 'Citizenship entails both rights and duties.', level: 'B2', topic: 'samfunn' },
  { id: 'v131', no: 'hensyn', en: 'a consideration / regard', type: 'substantiv', gender: 'et', example: 'Vi må ta hensyn til naboene.', exampleEn: 'We must be considerate of the neighbours.', level: 'B2', topic: 'samfunn' },
  { id: 'v132', no: 'å vurdere', en: 'to assess / consider', type: 'verb', example: 'Kommunen vurderer å bygge en ny svømmehall.', exampleEn: 'The municipality is considering building a new swimming pool.', level: 'B2', topic: 'samfunn' },
  { id: 'v133', no: 'utfordring', en: 'a challenge', type: 'substantiv', gender: 'en', example: 'Eldrebølgen er en stor utfordring for velferdsstaten.', exampleEn: 'The ageing population is a major challenge for the welfare state.', level: 'B2', topic: 'samfunn' },
  { id: 'v134', no: 'å bidra', en: 'to contribute', type: 'verb', example: 'Alle må bidra for at samfunnet skal fungere.', exampleEn: 'Everyone must contribute for society to function.', level: 'B2', topic: 'samfunn' },
  { id: 'v135', no: 'utvikling', en: 'a development', type: 'substantiv', gender: 'en', example: 'Utviklingen i boligprisene bekymrer mange.', exampleEn: 'The development in housing prices worries many.', level: 'B2', topic: 'samfunn' },
  { id: 'v136', no: 'å påvirke', en: 'to influence / affect', type: 'verb', example: 'Sosiale medier påvirker hvordan vi snakker sammen.', exampleEn: 'Social media affects how we talk to each other.', level: 'B2', topic: 'samfunn' },
  { id: 'v137', no: 'inntrykk', en: 'an impression', type: 'substantiv', gender: 'et', example: 'Jeg fikk et godt inntrykk av den nye kollegaen.', exampleEn: 'I got a good impression of the new colleague.', level: 'B2', topic: 'meninger' },
  { id: 'v138', no: 'sammenheng', en: 'a connection / context', type: 'substantiv', gender: 'en', example: 'Det er en klar sammenheng mellom utdanning og lønn.', exampleEn: 'There is a clear connection between education and salary.', level: 'B2', topic: 'meninger' },
  { id: 'v139', no: 'å understreke', en: 'to emphasise', type: 'verb', example: 'Statsministeren understreket at alle skal med.', exampleEn: 'The prime minister emphasised that everyone should be included.', level: 'B2', topic: 'meninger' },
  { id: 'v140', no: 'på den ene siden … på den andre siden', en: 'on the one hand … on the other hand', type: 'uttrykk', example: 'På den ene siden er det dyrt, på den andre siden sparer man tid.', exampleEn: 'On the one hand it is expensive; on the other hand you save time.', level: 'B2', topic: 'meninger' },
  { id: 'v141', no: 'synspunkt', en: 'a point of view', type: 'substantiv', gender: 'et', example: 'Jeg forstår synspunktet ditt, men jeg er uenig.', exampleEn: 'I understand your point of view, but I disagree.', level: 'B2', topic: 'meninger' },
  { id: 'v142', no: 'å hevde', en: 'to assert / claim', type: 'verb', example: 'Forskerne hevder at klimaet endrer seg raskere enn før.', exampleEn: 'The researchers claim the climate is changing faster than before.', level: 'B2', topic: 'meninger' },
  { id: 'v143', no: 'årsak', en: 'a cause / reason', type: 'substantiv', gender: 'en', example: 'Hva er årsaken til at prisene stiger?', exampleEn: 'What is the cause of the rising prices?', level: 'B2', topic: 'meninger' },
  { id: 'v144', no: 'konsekvens', en: 'a consequence', type: 'substantiv', gender: 'en', example: 'Beslutningen fikk store konsekvenser for de ansatte.', exampleEn: 'The decision had major consequences for the employees.', level: 'B2', topic: 'meninger' },
  { id: 'v145', no: 'å oppnå', en: 'to achieve', type: 'verb', example: 'Hun jobbet hardt for å oppnå målet sitt.', exampleEn: 'She worked hard to achieve her goal.', level: 'B2', topic: 'meninger' },
  { id: 'v146', no: 'tilsynelatende', en: 'apparently / seemingly', type: 'adverb', example: 'Tilsynelatende var alt i orden, men noe var galt.', exampleEn: 'Seemingly everything was fine, but something was wrong.', level: 'B2', topic: 'meninger' },
  { id: 'v147', no: 'å fastslå', en: 'to establish / determine', type: 'verb', example: 'Rapporten fastslår at tiltakene har virket.', exampleEn: 'The report establishes that the measures have worked.', level: 'B2', topic: 'meninger' },
  { id: 'v148', no: 'omfattende', en: 'extensive / comprehensive', type: 'adjektiv', example: 'Kommunen har satt i gang et omfattende arbeid.', exampleEn: 'The municipality has started extensive work.', level: 'B2', topic: 'samfunn' },
  { id: 'v149', no: 'tiltak', en: 'a measure / initiative', type: 'substantiv', gender: 'et', example: 'Regjeringen innfører nye tiltak mot arbeidsledighet.', exampleEn: 'The government is introducing new measures against unemployment.', level: 'B2', topic: 'samfunn' },
  { id: 'v150', no: 'holdning', en: 'an attitude', type: 'substantiv', gender: 'en', example: 'Han har en positiv holdning til endringer.', exampleEn: 'He has a positive attitude towards change.', level: 'B2', topic: 'meninger' },
  { id: 'v151', no: 'å tilpasse seg', en: 'to adapt', type: 'uttrykk', example: 'Det tar tid å tilpasse seg en ny kultur.', exampleEn: 'It takes time to adapt to a new culture.', level: 'B2', topic: 'samfunn' },
  { id: 'v152', no: 'erstatning', en: 'a compensation / replacement', type: 'substantiv', gender: 'en', example: 'Han fikk erstatning etter ulykken.', exampleEn: 'He received compensation after the accident.', level: 'B2', topic: 'samfunn' },
  { id: 'v153', no: 'å avhenge av', en: 'to depend on', type: 'uttrykk', example: 'Resultatet avhenger av hvor mye du øver.', exampleEn: 'The result depends on how much you practise.', level: 'B2', topic: 'meninger' },
  { id: 'v154', no: 'vilkår', en: 'a condition / term', type: 'substantiv', gender: 'et', example: 'Les vilkårene nøye før du skriver under.', exampleEn: 'Read the terms carefully before you sign.', level: 'B2', topic: 'økonomi' },
  { id: 'v155', no: 'å gjennomføre', en: 'to carry out / complete', type: 'verb', example: 'Hun gjennomførte utdanningen på tre år.', exampleEn: 'She completed the education in three years.', level: 'B2', topic: 'utdanning' },
  { id: 'v156', no: 'flertall', en: 'a majority', type: 'substantiv', gender: 'et', example: 'Et flertall på Stortinget stemte for forslaget.', exampleEn: 'A majority in Parliament voted for the proposal.', level: 'B2', topic: 'samfunn' },
  { id: 'v157', no: 'mindretall', en: 'a minority', type: 'substantiv', gender: 'et', example: 'Mindretallet var sterkt imot forslaget.', exampleEn: 'The minority was strongly against the proposal.', level: 'B2', topic: 'samfunn' },
  { id: 'v158', no: 'å forhandle', en: 'to negotiate', type: 'verb', example: 'Fagforeningen forhandler om høyere lønn.', exampleEn: 'The union is negotiating for higher wages.', level: 'B2', topic: 'jobb' },
  { id: 'v159', no: 'bærekraft', en: 'sustainability', type: 'substantiv', gender: 'en', example: 'Bærekraft er viktig i norsk politikk.', exampleEn: 'Sustainability is important in Norwegian politics.', level: 'B2', topic: 'samfunn' },
  { id: 'v160', no: 'å redegjøre for', en: 'to account for / explain', type: 'uttrykk', example: 'Ministeren måtte redegjøre for saken i Stortinget.', exampleEn: 'The minister had to account for the matter in Parliament.', level: 'B2', topic: 'samfunn' },
]

export const vocabulary: VocabCard[] = [
  ...core,
  ...vocabA2,
  ...vocabA2b,
  ...vocabA2c,
  ...vocabA2d,
  ...vocabA2e,
  ...vocabA2f,
  ...vocabB1,
  ...vocabB1b,
  ...vocabB1c,
  ...vocabB1d,
  ...vocabB1e,
  ...vocabB2,
  ...vocabB2b,
  ...vocabB2c,
  ...vocabB2d,
  ...vocabB2e,
  ...vocabB2f,
  ...vocabB2g,
]

export const topics = [...new Set(vocabulary.map((v) => v.topic))].sort()
