<script>
  import { onMount } from "svelte";

  export let data;

  console.log(data);

  // Dit is een variabele om de geselecteerde categorie-ID bij te houden
  let selectedCategoryId = null;

  // Voer code uit na het renderen van de component
  onMount(() => {
    // Haal de queryparameters op uit de URL
    const queryParams = new URLSearchParams(window.location.search);

    // Haal de waarde op van de 'filter' queryparameter
    const filterParam = queryParams.get("filter");

    console.log(selectedCategoryId);

    // Controleer of er een filterparameter is en wijs deze toe aan de variabele
    if (filterParam) {
      selectedCategoryId = filterParam;
    }
  });

  // Definieer een functie om methoden te filteren op basis van de geselecteerde categorie
  function filterMethodsByCategory() {
    // Als er geen categorie is geselecteerd, retourneer alle methoden
    if (selectedCategoryId === null) {
      return data.methods;
    } else {
      // Filter methoden op basis van de geselecteerde categorie-ID
      return data.methods.filter((method) =>
        method.categories.some((category) => category.id === selectedCategoryId)
      );
    }
  }
</script>


<section>
  <h4 class="line">Tekenmethodes</h4>
</section>

<section class="intro">
  <article class="intro-text">
    <h1>Tekenmethodes</h1>
    <p class="lowercase">
      Welkom op onze pagina over Visual Thinking! Visual Thinking is een super
      toffe manier om informatie te begrijpen, te ordenen en te delen met
      anderen door middel van plaatjes in plaats van alleen maar woorden. Dit
      maakt het gemakkelijker om complexe ideeën te begrijpen en te delen met
      anderen. <br />
      <br />
      Op deze pagina vind je verschillende Visual Thinking tekenmethodes die je kunt
      gebruiken om je creativiteit en productiviteit te vergroten. Of je nu een student
      bent, of gewoon geïnteresseerd bent in Visual Thinking, wij hebben de juiste
      tools en technieken voor jou. <br />
      <br />
      Hier vind je ook een heleboel tips en trucs voor het gebruik van Visual Thinking
      in je dagelijks leven en je studie. Dus waar wacht je nog op? Ontdek vandaag
      nog de kracht van Visual Thinking en maak je ideeën visueel!
    </p>
  </article>
</section>

<section class="categories-mobile">
  <label for="touch"><span id="menu-icon">Categorieën</span></label>
  <img src="/arrow-down.svg" alt="" class="arrow-down" />
  <input type="checkbox" id="touch" />
  <ul class="slide">
    <img src="/onderzoeken-en-begrijpen.svg" alt="" class="img-categorie" />
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch"
        >Onderzoeken en begrijpen</a
      >
    </li>
    <img src="/organiseren-en-plannen.svg" alt="" class="img-categorie" />
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch"
        >Organiseren en plannen</a
      >
    </li>
    <img src="/leren-over-anderen.svg" alt="" class="img-categorie" />
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch"
        >Leren over anderen</a
      >
    </li>
    <img src="/leren-over-jezelf.svg" alt="" class="img-categorie" />
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch"
        >Leren over jezelf</a
      >
    </li>
    <img src="/communiceren.svg" alt="" class="img-categorie" />
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch"
        >Communiceren en presenteren</a
      >
    </li>
    <img src="/creatief.svg" alt="" class="img-categorie" />
    <li class="categorie-name">
      <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch"
        >Creatief denken</a
      >
    </li>
  </ul>
</section>

<section class="categories">
  <section class="categories-container">
    <ul class="categorie-names">
      <img src="/onderzoeken-en-begrijpen.svg" alt="" class="img-categorie" />
      <li class="categorie-name">
        <a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch"
          >Onderzoeken en begrijpen</a
        >
      </li>
      <img src="/organiseren-en-plannen.svg" alt="" class="img-categorie" />
      <li class="categorie-name">
        <a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch"
          >Organiseren en plannen</a
        >
      </li>
      <img src="/leren-over-anderen.svg" alt="" class="img-categorie" />
      <li class="categorie-name">
        <a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch"
          >Leren over anderen</a
        >
      </li>
      <img src="/leren-over-jezelf.svg" alt="" class="img-categorie" />
      <li class="categorie-name">
        <a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch"
          >Leren over jezelf</a
        >
      </li>
      <img src="/communiceren.svg" alt="" class="img-categorie" />
      <li class="categorie-name">
        <a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch"
          >Communiceren en presenteren</a
        >
      </li>
      <img src="/creatief.svg" alt="" class="img-categorie" />
      <li class="categorie-name">
        <a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch"
          >Creatief denken</a
        >
      </li>
    </ul>
  </section>
</section>

<main class="tekenmethodes-main">
  <article class="methods">
    {#if data && data.methods && data.methods.length > 0}
      {#each data.methods as method, index}
        <section class="method-container" data-index={index}>
          <a href="/tekenmethodes/{method.slug}" class="link-detail-page">
            {#if method.template && method.template.url}
              <picture>
                <source
                  type="image/webp"
                  srcset={method.template.url}
                  class={method.categories[0].title.replaceAll(" ", "-")}
                  loading="lazy"
                />
                <img
                  src={method.template.url.replace(":webp", ":png")}
                  alt={"Voorbeeld van " + method.title}
                  class={method.categories[0].title.replaceAll(" ", "-")}
                  loading="lazy"
                />
              </picture>
            {:else}
              <img
                class={method.categories[0].title.replaceAll(" ", "-")}
                src="/placeholder.webp"
                alt="Placeholder"
                loading="lazy"
              />
            {/if}
            <section class="methods-titles">
              <h2>{method.title}</h2>
            </section>
          </a>
        </section>
      {/each}
    {/if}
  </article>
</main>

<style>

  :root {
    --vtDarkBlue: #090940;
    --vtLightBlue: #67c5d1;
    --vtYellow: #feb51e;
    --vtRed: #f96c4f;
    --vtWhite: #ffffff;
    
    --vtDarkBlue-80: #3a3a66;
    --vtDarkBlue-50: #6b6b8c;
    --vtDarkBlue-30: #9d9db3;
    --vtDarkBlue-10: #ceced9;

    --vtLightBlue-80: #85d1da;
    --vtLightBlue-50: #a4dce3;
    --vtLightBlue-30: #c2e8ed;
    --vtLightBlue-10: #e1f3f6;

    --vtYellow-80: #fec44b;
    --vtYellow-50: #fed378;
    --vtYellow-30: #ffe1a5;
    --vtYellow-10: #fff0d2;

    --vtRed-80: #fa8972;
    --vtRed-50: #fba795;
    --vtRed-30: #fdc4b9;
    --vtRed-10: #fee2dc;

    --vtGrey-80: #c0beb9;
    --vtGrey-50: #e0dedc;
    --vtGrey-10: #f9f8f8;

    --vtSec-Red: #af1301;
    --vtSec-Red-30: #fbc5b4;
    --vtSec-Green: #169861;
    --vtSec-Green-30: #63c09f;
    --vtSec-LightBlue: #4fbbc2;
    --vtSec-DarkBlue: #31439c;
    --vtSec-Brown: #8b3a00;
    --vtSec-Orange: #fe6f07;

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
  }

  .line {
    text-transform: uppercase;
    background-color: var(--vtYellow);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    margin-top: 0%;
    display: flex;
    height: 30px;
  }

  .page {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
  }

  .a {
    color: var(--vtDarkBlue);
  }

  .img {
    width: 290px;
    height: 210px;
  }

  h2 {
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
  }

  .h1-detail {
    padding-left: 6.7rem;
    max-width: 30rem;
    max-height: 6rem;
  }

  .h2-detail,
  .bold {
    font-size: 1rem;
    font-weight: 400;

    font-family: var(--vtPrimaryFont);
    color: var(--vtSec-DarkBlue);
  }

  .bold {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  .text,
  .template-url {
    margin-top: 3rem;
  }

  .text {
    padding-top: 1.5rem;
    max-width: 35rem;
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    color: var(--vtSec-DarkBlue);
  }

  h4 {
    font-size: 1rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
  }

  p {
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    text-transform: uppercase;
  }

  .lowercase {
    text-transform: none;
    line-height: 1.5rem;
  }

  .arrows {
    margin-bottom: -7%;
  }

  .about-text,
  .about {
    display: grid;
    justify-items: center;
  }

  .about,
  .about2 {
    width: 60%;
  }

  .arrows-line {
    width: 1%;
    transform: rotate(180deg);
  }

  .icon {
    width: 6.5%;
    height: 94.5%;
  }

  .columntag {
    display: flex;
    margin-left: -0.8rem;
  }

  /*---CATEGORIEEN---*/

  .categorien {
    display: flex;
    flex-direction: column;
  }

  .categorie {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2em 2.05em;
  }

  .view-method {
    display: none;
  }

  /*---TEKENMETHODES---*/

  .tekenmethodes-main {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-left: 8em;
  }

  /*---INTRO---*/

  .intro {
    display: grid;
    grid: ". intro ." 1fr / 1fr 5fr 1fr;
    gap: 8px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 75px;
  }

  .intro-text {
    grid-area: intro;
    min-width: 0em;
  }

  .intro-text h1 {
    margin-bottom: 20px;
  }

  /*---DROPDOWN MENU---*/

  .categories {
    display: none;
  }

  li a {
    text-decoration: none;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 16px;
    padding-left: 20px;
  }

  li a:hover {
    color: var(--vtLightBlue);
  }

  li a:active {
    color: var(--vtDarkBlue);
    font-weight: 600;
  }

  .active {
    font-weight: 700;
  }

  .slide {
    clear: both;
    width: 100%;
    height: 0px;
    overflow: hidden;
    transition: height 0.4s ease;
  }

  .slide li {
    display: flex;
    align-items: center;
    padding: 30px;
  }

  .img-categorie {
    float: left;
    left: 10%;
  }

  .categories-mobile {
    width: 100%;
    background: var(--vtGrey);
    margin: 10px auto;
    margin-bottom: 75px;
  }

  .categories-mobile span {
    padding: 30px;
    background: var(--vtGrey);
    color: var(--vtDarkBlue);
    font-size: 1.2em;
    cursor: pointer;
    display: block;
    font-family: var(--vtPrimaryFont);
    font-weight: 800;
    font-size: 16px;
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: auto;
  }

  #touch:checked + .slide {
    height: auto;
  }

  /*---METHODS---*/

  .methods {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }

  .method-container img {
    width: 300px;
    border: 2px solid;
    border-color: var(--vtGrey-50);
  }

  .methods-titles {
    width: 90%;
    margin-top: -0.7em;
    margin-bottom: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    hyphens: auto;
  }

  .methods-titles:hover {
    white-space: unset;
    text-overflow: unset;
  }

  .detail-main {
    margin: 2rem 0;
  }

  /*---METHOD CATEGORY COLORS---*/

  .Leren-over-jezelf-en-reflecteren {
    border-color: var(--vtSec-DarkBlue) !important;
  }

  .Leren-over-anderen {
    border-color: var(--vtSec-DarkBlue) !important;
  }

  .Creatief-denken {
    border-color: var(--vtSec-DarkBlue) !important;
  }

  .Organiseren-en-plannen {
    border-color: var(--vtSec-DarkBlue) !important;
  }

  .Communcieren-en-presenteren {
    border-color: var(--vtSec-DarkBlue) !important;
  }

  .Onderzoeken-en-begrijpen {
    border-color: var(--vtSec-DarkBlue) !important;
  }

    /*---RESPONSIVE DESKTOP---*/
  @media (min-width: 68em) {
    
  .line {
    padding-left: 9% !important;
  }

    /*---TEKENMETHODES---*/

    .intro {
      display: grid;
      grid: ". intro ." 1fr / 0.75fr 3fr 0.75fr;
      gap: 8px;
      padding-top: 25px;
      padding-bottom: 25px;
      margin-bottom: 75px;
    }

    .intro-text {
      grid-area: intro;
    }

    .intro-text h1 {
      font-size: 3.157rem;
    }

    .intro-text p {
      font-size: 20px;
    }

    /*---CATEGORIEEN---*/

    .categories-mobile {
      display: none;
    }

    .categories {
      display: grid !important;
      grid: ". category ." 1fr / 1fr 4fr 1fr;
      margin-bottom: 50px;
    }

    .categories-container {
      grid-area: category;
    }

    li a {
      text-decoration: none;
      color: var(--vtDarkBlue);
      font-family: var(--vtPrimaryFont);
      font-size: 20px !important;
      padding-left: 40px !important;
    }

    .categorie-names li {
      display: flex;
      align-items: center;
      padding-bottom: 0px;
      list-style: none;
      flex: 0 0 calc(33.33% - 60px);
      margin-bottom: 1em;
      }
    
    .categorie-names {
      display: flex;
      flex-wrap: wrap;
    }
        
    .categorien {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 8rem;
      grid-row-gap: 3rem;
      max-width: 100%;
      margin: 0 4.1rem;
      align-items: center;
    }

    .img-categorie {
    float: left;
    left: 10%;
    margin-top: -1em;
  }

    .lower {
      margin: 3em 0;
    }

    /*---METHODS---*/

    .tekenmethodes-main {
      display: grid;
      grid: ". methods ." 1fr / 0.75fr 3fr 0.75fr;
      grid-auto-flow: dense;
      margin-bottom: 100px;
    }

    .methods {
      grid-area: methods;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      grid-gap: 25px;
    }

    .methods img {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: var(--vtGrey-50);
    }

    .methods-titles h2 {
      font-family: var(--vtPrimaryFont);
      font-size: 24px;
      color: var(--vtDarkBlue);
      width: 80%;
    }
  }

  /*---RESPONSIVE TABLET GROOT---*/
  @media (min-width: 45em) {
  
    /*---CATEGORIEEN---*/
    .categorien {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 5rem;
      grid-row-gap: 2rem;
      max-width: 100%;
      margin: 0 2.05rem;
    }

    .categorie {
      margin: 0;
    }

    .categories {
      display: none;
    }

    li a {
      text-decoration: none;
      color: var(--vtDarkBlue);
      font-family: var(--vtPrimaryFont);
      font-size: 18px;
      padding-left: 20px;
      padding-right: 1em;
      margin-left: -1.5em;
    }

    /*---METHODS---*/

    .tekenmethodes-main {
      display: grid;
      grid: ". methods ." 1fr / 0.5fr 3fr 0.5fr;
      grid-auto-flow: dense;
      margin-bottom: 100px;
    }

    .methods {
      grid-area: methods;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 25px;
    }

    .methods img {
      width: 100%;
      height: auto;
      border: 1px solid;
      border-color: var(--vtGrey-50);
    }
  }

   /*---RESPONSIVE TABLET MINI---*/
  @media (min-width: 31em) {

  .view-method {
    display: flex;
    font-weight: bold;
    flex-direction: column;
    margin-top: 0.83em;
  }

  .arrow-down {
    width: 15px;
    float: right;
    margin-right: 1em;
    margin-top: -2.2em;
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  .content {
    padding: 0 50px;
  }

  .toggler {
    display: none;
  }

  nav ul li {
    display: inline-block;
    padding-right: 30px;
    padding-top: 5px;
    color: var(--vtDarkBlue);
    font: var(--vtMenuFont);
  }

  .account {
    padding-left: 30px;
    padding-bottom: 15px;
  }

  .tekenmethodes-main {
    margin-left: 0em;
  }

  .line {
    padding-left: 20%;
  }

    /*---DROPDOWN---*/
    
  .categories {
    display: none;
  }

  li a {
    text-decoration: none;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 18px;
    padding-left: 20px;
    padding-right: 1em;
    margin-left: -1.5em;
  }
  }

   /*---RESPONSIVE MOBILE---*/
   @media (max-width: 31em) {

  h1 {
    font-size: 1.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  .arrow-down {
    width: 15px;
    float: right;
    margin-right: 1em;
    margin-top: -2.2em;
  }

.line {
    padding-left: 11%;
  }

}


</style>
