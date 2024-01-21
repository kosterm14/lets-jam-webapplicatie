<script>
  export let data;
</script>

<header>
  <section>
    <h4 class="line">Kennisclips</h4>
  </section>
</header>

<main>
  {#each data.categories as category}
    <article class="clips">
      <a href="">
        <img
          class="left-arrow"
          src="./arrows_black.svg"
          alt="Knop met pijl naar volgende video"
        />
      </a>

      <iframe
        class="frame"
        width="560"
        height="315"
        src={category.youTubeLink}
        frameborder="0"
        allowfullscreen
        loading="lazy"
      ></iframe>

      <a href="">
        <img
          class="right-arrow"
          src="./arrows_black.svg"
          alt="Knop met pijl naar volgende video"
        />
      </a>
    </article>


    <h1>{category.title}</h1>

    <article class="category">
      <p>{@html category.content.html}</p>
    </article>
  {/each}
</main>

<style>
  :root {
    /* Visual Thinking: Primary Colors: Zie kleuren styleguide of eventueel Figma designs voor gebruik! */

    --vtDarkBlue: #090940;
    --vtLightBlue: #67c5d1;
    --vtYellow: #feb51e;
    --vtRed: #f96c4f;
    --vtWhite: #ffffff;

    /* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^
    Zie kleuren styleguide of eventueel Figma designs voor gebruik!  */

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

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
  }

  body {
    padding: 0;
    overflow-x: hidden;
  }

  /* Header styling */
  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    line-height: 3rem;
    text-align: center;
    /* border-bottom: 0.5px solid #333; */
    padding-bottom: 22px;
    /* padding-left: 1em; */
  }

  /* h1 {
  width: 100%; 
  text-align: center; 
  box-sizing: border-box; 

h1::after {
  display: inline-block; 
  width: 90vw; 
  border-bottom: 1px solid black;
} */

  h2 {
    font-size: 2rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
    margin-left: 1.5em;
    margin-right: 1.5em;
  }

  .bold {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
  }

  .frame {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
  }
  /* Clip styling */

  @media screen and (min-width: 1120px) {
    .frame {
      width: 884px;
      height: 497px;
    }
  }

  @media (max-width: 481px) {
    .frame {
      width: 320px;
      height: 169px;
    }
  }

  /* H1, iframe styling */
  .clips {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    /* padding-bottom: 30px ; */
    background-color: var(--vtGrey-10);
  }

  /* Kennisclip teksten */
  p {
    text-align: left;
    line-height: 1.5rem;
    font-family: var(--vtSecondaryFont);
    font-size: 1em;
    margin-left: auto;
    margin-right: auto;
    max-width: 40em;
  }

  @media screen and (max-width: 900px) {
    p {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  a {
    padding: 2em;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:link {
    text-decoration: none;
  }

  .right-arrow {
    cursor: pointer;
    border: none;
  }

  .left-arrow {
    cursor: pointer;
    transform: rotate(180deg);
  }

  /* Header line */

  .line {
    text-transform: uppercase;
    background-color: var(--vtSec-LightBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 18.5%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    /* margin-bottom: 2em; */
    width: 100vw;
    display: flex;
    margin-bottom: 0;
    align-items: center;
  }

  /* Carousel */
</style>
