<script>
  import BlogButton from "./blogButton.svelte";
  import BlogText from "./blogText.svelte";
</script>

<section>
  <BlogText />
  <!-- CARDS - BORDER -->
  <article>
    <img src="/afbeelding_cover .webp" alt="Tekenen en spelen met kinderen (en hun ouders)" >
    <h1>Tekenen en spelen met kinderen (en hun ouders)</h1>
    <p>
      Toen ik klein was, verwonderde ik me over de wereld om me heen en maakte
      volop gebruik van mijn fantasie. Maar als ik nu de nieuwsgierigheid van
      mijn achtjarige zoon zie, vraag ik me soms af waar mijn eigen
      verwondering, creativiteit en concentratie gebleven zijn.
    </p>
    <BlogButton />
  </article>

  <article>
    <img src="/Samen_tekenen_lachen.webp" alt="Het ontstaan van de tekenmethode, tekenen, spelen delen" >
    <h1>Het ontstaan van de tekenmethode, tekenen, spelen delen</h1>
    <p>
      Tijdens mijn master ontwierp ik een methode met ‘verbinding’ als
      centraal thema. In eerste instantie wilde ik ouders en kinderen
      creatiever met elkaar laten communiceren, maar de methode bleek ook in
      andere contexten en met andere doelgroepen te werken.
    </p>
    <BlogButton />
  </article>
  
  <article>
    <img src="/portret.webp" alt="Interview met docent Oskar Maarleveld" >
    <h1>Interview met docent Oskar Maarleveld</h1>
    <p>
      Interview met docent tekenen en vakdidactiek Oskar Maarleveld,
      seniordocent vakdidactiek aan de Breitner academie en docent tekenen,
      ckv en theater aan het Fons Vitae Lyceum in Amsterdam.
    </p>
    <BlogButton />
  </article>

  <!-- CARDS - BORDER -->
  <article>
    <img src="/Docent.webp" alt="3 redenen waarom Visual Thinking waardevol is in het onderwijs" >
    <h1>3 redenen waarom Visual Thinking waardevol is in het onderwijs</h1>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a
      ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
      ultricies vehicula ut id elit. Integer posuere.
    </p>
    <BlogButton />
  </article>

  <article>
    <img src="/sketchnotes.webp" alt="Tips bij het gebruik van pijlen in je sketchnotes" >
    <h1>Tips bij het gebruik van pijlen in je sketchnotes</h1>
    <p>
      vCras mattis consectetur purus sit amet fermentum. Integer posuere erat
      a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
      ultricies vehicula ut id elit. Integer posuere.
    </p>
    <BlogButton />
  </article>

  <article>
    <img src="/Interview .webp" alt="Interview met Selma Koopman van de Betekenaar" >
    <h1>Interview met Selma Koopman van de Betekenaar</h1>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a
      ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
      ultricies vehicula ut id elit. Integer posuere.
    </p>
    <BlogButton />
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
    padding: 3em;
    margin: 3em;
  }

  article {
    height: 35em;
    width: 23vw;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
  }

  h1{
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    line-height: 1.2em;
    margin-top: 0em;
    padding: 1em;
  }

  p{
    font-family: var(--vtSecondaryFont);
    font-size: 20px;
    line-height: 1.5em;
    padding: 1em;
    margin-top: -3em;
  }

  img{
    width: 23vw;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    section {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      margin: -1em;
    }

    article {
      width: 14em;
      height: 30em;
    }

    img{
      width: 65vw;
    }

    h1{
    padding: 0.5em;
  }

  p{
    padding: 1em;
    margin-top: -2em;
  }
  }

  /* mobile */
  @media (max-width: 31em) {
    section {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: -1em;
    }

    article {
      height: 22em;
      width: 50vw;
    }
  }
</style>
