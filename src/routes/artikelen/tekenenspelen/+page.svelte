<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";
</script>

<header>
  <Header />
  <section>
    <h4 class="line">Case</h4>
  </section>
</header>

<section class="backgroundcolortitle">
  <h1>Tekenen en spelen met kinderen (en hun ouders)</h1>
</section>

<section class="textsection">
  <i
    >Sinds de romantiek zoeken kunstenaars de oorsprong van de creativiteit bij
    het kind. De belangstelling voor kindertekeningen groeide. Van het
    expressionisme en Cobra tot Marlene Dumas die haar dochter de tekeningen
    voor de Biënnale van Venetië liet inkleuren, proberen kunstenaars iets van
    die kinderlijke verwondering en onbevangenheid te heroveren. DIN PIETERS,
    ‘PICASSO EN DE KINDERWERELD: AFSTANDELIJK EN VROLIJK’</i
  >

  <p>
    Ook ik deed pogingen om de verwondering en onbevangenheid te terug te
    krijgen die ik bij mijn kind zag, maar kwam een aantal problemen tegen. Ik
    bleek bijvoorbeeld steeds vaker de neiging te hebben mijn zoon even achter
    de iPad te zetten – vanwege mijn eigen drukke leven. Dat leverde niet alleen
    schuldgevoelens op, maar voelde ook in een ander opzicht verkeerd. Ontnam ik
    hem zo zijn talent voor fantaseren? Dit was een van de overwegingen om aan
    het ontwerp te beginnen van wat inmiddels mijn methode is: kon ik niet een
    alternatief verzinnen, een digitaal spel dat niet zo’n zuigende werking had?
    Een spel waarbij hij juist gebruik kon maken van zijn fantasie? Ik
    onderzocht verschillende (digitale) spellen die veel door kinderen worden
    gespeeld zoals Toca Tea Partij (vanaf vier jaar) en Minecraft (vanaf zeven
    jaar) en ontdekte dat het probleem niet was dat de spellen zelf fantasieloos
    waren:
  </p>

  <i
    >Het is inderdaad niet goed voor de creatieve ontwikkeling van kinderen als
    ze te eenzijdig worden geconfronteerd met spellen die gebonden zijn aan
    vaste regels, zoals mens-erger-je-niet en ganzenbord. Het is echter onjuist
    te veronderstellen dat alle games vooropgestelde regels hebben. In sommige
    spellen kunnen kinderen hun fantasie geheel de vrije loop laten. Ze kunnen
    onder meer tekeningen maken, muziek componeren en creatieve verhalen
    schrijven. P. VALKENBURG, BEELDSCHERMKINDEREN</i
  >

  <p>
    Ik staarde me in eerste instantie blind op de (digitale) spellen zelf, maar
    kwam erachter dat er al heel veel spellen waren die juist erg tot de
    verbeelding spraken. Minecraft sluit bijvoorbeeld heel goed aan bij de
    manier waarop kinderen spelen: ze kunnen zelf hun eigen wereld creëren, er
    zijn nauwelijks regels, hun fantasie en creativiteit krijgen volop de
    ruimte. Ik bezocht kinderen thuis om ze te vragen waar ze het allerliefst
    mee speelden, en ontdekte dat sommige ouders het vervelend vinden dat hun
    kind veel op de computer speelt maar eigenlijk niet goed weten wat het
    precies uitvoert. De kinderen vertelden mij wel vol enthousiasme over wat ze
    allemaal voor spellen deden (zowel digitaal als analoog). Het kind dat zich
    volgens zijn vader vaak verveelde, verzon de meest fantasierijke en
    inventieve verhalen en wilde die vervolgens ook heel graag met de
    volwassenen delen. Het probleem was dus niet een gebrek aan fantasie, maar
    het feit dat er weinig uitgewisseld werd over wat de kinderen meemaakten als
    ze een digitaal spel speelden of naar een televisieprogramma keken. Wat ook
    niet hielp, was dat de ouders zélf steeds met hun mobiele telefoon in de
    weer waren. Ik begon na te denken over manieren om de interactie tussen
    kinderen en ouders te stimuleren en meer diepgang te geven.
  </p>

  <h2>Verbeelden met kinderen en hun ouders</h2>

  <p>
    Ik vroeg gezinnen in mijn omgeving om te participeren in mijn prototypes.
    Het eerste prototype was een kaartenspel met aanvankelijk alleen maar tekst.
    Ik wilde onderzoeken wat er zou gebeuren als ouder en kind samen iets zouden
    scheppen. Omdat verhalen vertellen een belangrijk onderdeel van de relatie
    en communicatie tussen ouder en kind is, besloot ik de participanten samen
    een verhaal te laten maken. Het uitgangspunt van dit prototype is de
    klassieke verhaalstructuur -set up-crisis-climax-ontknoping-einde. Die
    verhaalstructuur, gebaseerd op de pyramide van Gustav Freytag, moest de
    deelnemers door het verhaal heen leiden. Het idee was dat ik de ‘computer’
    was die de structuur zou aangeven. Ik legde bijvoorbeeld de kaart ‘Over wie
    gaat het?’ neer. De deelnemers hadden allebei een aantal kaarten in hun
    handen met woorden of zinsdelen. Ze mochten dan om de beurt een woord naar
    keuze neerleggen.
  </p>
</section>
<Footer />

<style>
  .line {
    text-transform: uppercase;
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 7rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    display: flex;
    align-items: center;
  }

  .backgroundcolortitle {
    background-color: rgb(240, 240, 240);
    padding: 1em;
    margin-top: -1.2em;
  }

  h1 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-size: xxx-large;
    margin-left: 12em;
  }

  h2{
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  .textsection{
    padding: 4em;
  }

  i{
    color: var(--vtDarkBlue);
    font-weight: bold;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5em;
    font-size: larger;
  }

  p{
    font-family: var(--vtSecondaryFont);
    line-height: 1.5em;
  }


</style>
