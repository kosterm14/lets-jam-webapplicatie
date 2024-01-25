<script>
  import Header from "$lib/molecules/header.svelte";
  import Footer from "$lib/molecules/footer.svelte";

  export let data;

  // Log het voorbeeld van de eerste methode in de console
  console.log(data.methods[0].examples);

  // Importeer de onMount functie van Svelte om code uit te voeren na het renderen
  import { onMount } from "svelte";

  // Voer code uit na het renderen van de component
  onMount(() => {
    // Selecteer het element met de class 'carousel-list'
    const track = document.querySelector('.carousel-list');

    // Maak een array van slides uit de children van het 'track'-element
    const slides = Array.from(track.children);

    // Selecteer de knoppen voor vorige en volgende slides
    const nextButton = document.querySelector('.carousel-button-right');
    const prevButton = document.querySelector('.carousel-button-left');

    // Bepaal de breedte van een slide
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Functie om de positie van een slide in te stellen op basis van de index
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };

    // Stel de positie in voor elke slide
    slides.forEach(setSlidePosition);

    // Functie om naar een specifieke slide te verplaatsen
    const moveToSlide = (currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
    };

    // Voeg een eventlistener toe aan de knop voor vorige slide
    prevButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling;

      if (prevSlide) {
        moveToSlide(currentSlide, prevSlide);
      }
    });

    // Voeg een eventlistener toe aan de knop voor volgende slide
    nextButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;

      if (nextSlide) {
        moveToSlide(currentSlide, nextSlide);
      }
    });
  });
</script>


<Header />

<body class="page">
  <section>
    <a href="/tekenmethodes">
      <p class="line">
        <img class="arrows-line" src="/arrows.svg" alt="" />
        Overzicht <strong id="methodes-line">tekenmethodes</strong>
      </p>
    </a>
  </section>

  <main class="detail-main">
    <section class="navmain">
      <section>
        <h1 class="h1-detail">
          {#each data.methods as method}
            {method.title}
          {/each}
        </h1>
      </section>

      {#each data.methods as method}
        <nav>
          <ul>
            <a href="/tekenmethodes/{method.slug}">
              <li>
                <h2 class="h2-detail">Beschrijving</h2>
              </li>
            </a>
            <a href="/tekenmethodes/{method.slug}/stappenplan">
              <li>
                <h2 class="h2-detail">Stappenplan</h2>
              </li>
            </a>
            <li>
              <h2 class="bold">Voorbeelden</h2>
            </li>
          </ul>
        </nav>
      {/each}
    </section>

    <section class="carousel">
      <button class="carousel-button-left">
        <img src="/arrow.svg" alt="" />
      </button>
      <section class="carousel-container">
        <ul class="carousel-list">
          {#each data.methods as method}
          {#each method.examples as example}
            <li class="carousel-slide current-slide">
              <!-- <img class="carousel-img-blur" src={example.url} alt="" /> -->
              <img class="carousel-img" src={example.url} alt="" />
            </li>
          {/each}
          {/each}
        </ul>
      </section>

    <button class="carousel-button-right">
        <img src="/arrows_black.svg" alt="" />
      </button>
    </section>
  </main>
</body>

<Footer />

<style>
  :root {
    --vtGrey-80: #c0beb9;
    --vtGrey-50: #e0dedc;
    --vtGrey-10: #f9f8f8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
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

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
  }

  .navmain ul {
    display: flex;
    align-items: center;

    list-style: none;
  }

  .navmain li {
    padding: 0.6rem;
    font-size: 1rem;

    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-weight: bolder;
  }

  .navmain {
    display: flex;
    justify-content: space-between;
    background-color: var(--vtGrey-10);
    margin-top: -2em;
    margin-bottom: -1rem;
    padding-top: 2.5em;
    padding-bottom: 2.5em;
  }

  .navmain li {
    color: var(--vtSec-DarkBlue);
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
  }

  .navmain ul {
    padding-right: 4rem;
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
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

  p {
    font-size: 0.75rem;
    font-family: var(--vtPrimaryFont);
    text-transform: uppercase;
  }

  .carousel-button-left,
  .carousel-button-right {
    width: 72px;
    height: 66px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
    border: none;
    background: var(--vtYellow);
  }

  .line {
    background-color: var(--vtSec-DarkBlue);
    color: var(--vtWhite);

    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
    font-size: 0.75rem;

    padding-left: 7rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;

    margin-top: 0px;
    display: flex;
    align-items: center;
  }

  .line img {
    margin-right: 0.5rem;
  }

  .arrows-line {
    width: 20px;
    transform: rotate(180deg);
  }

    /*---DESKTOP---*/
    @media (min-width: 68em) {
    .carousel-container {
    height: 100%;
    margin-top: 5em;
    }

    #methodes-line {
    margin-left: 0.7em;
  }
    }


  /*---CAROUSEL---*/
  .carousel {
    position: relative;
    height: 27.5rem;
    width: 100%;
    margin: 0 auto;
  }

  .carousel-img {
    z-index: 1;
  }

  .carousel-container {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .carousel-list {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    height: 100%;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .carousel-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;

    display: flex;
    justify-content: center;
  }

  .carousel-button-left,
  .carousel-button-right {
    position: absolute;
    top: 50%;
    background: var(--vtYellow);
    border: 0;
    cursor: pointer;
    z-index: 1;
    padding: 0.5rem;

  }

  .carousel-button-left:active,
  .carousel-button-right:active {
    animation-name: big;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-duration: 0.2s;
    animation-iteration-count: 1;
  }

  .carousel-button-right {
    right: 0%;
    margin-right: 4rem;
  }

  .carousel-button-left {
    margin-left: 4rem;
  }

  .carousel-button-left img {
    transform: rotate(90deg);
  }

  .carousel-button-right img {
    transform: rotate(270deg);
    width: 25px;
  }

  .carousel-img-blur {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(0.2rem);
    position: absolute;
}

  .detail-main {
    margin: 2rem 0;
  }

  /*---TABLET---*/
  @media (min-width: 31em) and (max-width: 68em) {
    .line {
      padding-left: 2rem;
    }

    #methodes-line {
    margin-left: 0.7em;
  }

    .h1-detail {
      padding-left: 2rem;
    }

    h1 {
      font-size: 2rem;
    }

    .navmain {
      background-color: var(--vtGrey-10);
      margin-top: -2em;
    }

    nav::-webkit-scrollbar {
      display: none;
    }

    nav {
      display: block !important;
      position: relative;
      width: auto;
      float: right;
      padding: 5px 0;

      width: auto;
      float: left;
      margin-top: 2.5em;
      margin-left: -11.5em;
      padding: 5px 0;

      overflow-x: scroll;
      white-space: nowrap;
    }

    nav ul {
      float: left;
    }

    nav ul li {
      display: inline-block;
      padding-right: 30px;
      padding-top: 5px;
      color: var(--vtDarkBlue);
      font: var(--vtMenuFont);
    }

    .carousel-button-right {
      margin-right: 1rem;
      margin-top: -12.5em;
    }

    .carousel-button-left {
      margin-left: 1rem;
      margin-top: -12.5em;
    }

    .carousel-container {
    margin-top: 6em;
    height: 50%;
    position: relative;
    overflow: hidden;
  }
  }

  /*---MOBILE---*/
  @media (max-width: 31em) {
    .line {
      padding-left: 2rem;
    }

    #methodes-line {
    margin-left: 0.7em;
  }

    .h1-detail {
      padding-left: 2rem;
    }

    h1 {
      font-size: 2rem;
    }

    nav {
      width: auto;
      float: left;
      margin-top: 4.5em;
      margin-left: -11em;
      padding: 5px 0;

      overflow-x: scroll;
      white-space: nowrap;
    }

    .navmain {
      background-color: var(--vtGrey-10);
      margin-top: -2em;
    }

    nav::-webkit-scrollbar {
      display: none;
    }

    .carousel-button-right {
      margin-right: 5rem;
      margin-top: 5em;
      z-index: 2;
    }

    .carousel-button-left {
      margin-left: 5rem;
      margin-top: 5em;
      z-index: 2;
    }

    .carousel-img-blur {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(0.2rem);
    position: absolute;
    }

    .carousel-container {
      margin-top: 5em;
    height: 50%;
    position: relative;
    overflow: hidden;
  }
  }
</style>
