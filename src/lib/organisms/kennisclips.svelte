<script>
  let index = 0;

  export let data;
  console.log(data);

  const nextButton = () => {
    index = index + 1;
  };

  const previousButton = () => {
    index = index - 1;
  };
</script>

<header>
  <section>
    <h4 class="line">Kennisclips</h4>
  </section>
</header>

<main>
  <section class="clips-container">
    <button on:click={previousButton}
      ><img
        class="left-arrow"
        src="./arrows_black.svg"
        alt="Knop met pijl naar volgende video"
        loading="lazy"
      />
    </button>

    <iframe
      class="youtubelink"
      title="kennisclips"
      src={data.categories[index].youTubeLink}
    ></iframe>

    <button on:click={nextButton}
      ><img
        class="right-arrow"
        src="./arrows_black.svg"
        alt="Knop met pijl naar volgende video"
        loading="lazy"
      />
    </button>
  </section>

  <section class="text-container">
    <h1>{data.categories[index].title}</h1>
    <p>{@html data.categories[index].content.html}</p>
  </section>
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
    /* text-align: center; */
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
  }

  /* Header styling */
  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    line-height: 3rem;
    text-align: left;
    margin: 0rem 3rem;
    margin-top: 1em;
  }

  h2 {
    font-size: 2rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
    margin-left: 1.5em;
    margin-right: 1.5em;
  }

  h3 {
    font-size: 1.2rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
  }

  .bold {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  /* Kennisclip teksten */
  p {
    text-align: left;
    line-height: 1.5rem;
    font-family: var(--vtSecondaryFont);
    font-size: 1rem;
    max-width: 40em;
    text-transform: none;
    padding-bottom: 3em;
    margin: 0rem 3rem;
  }

  .text-container {
    text-align: left;
  }

  /* clips */
  .clips-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3.3em;
    background-color: var(--vtGrey-10);
  }

  /* line in header */
  .line {
    text-transform: uppercase;
    background-color: var(--vtSec-LightBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 9%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    width: 100vw;
    display: flex;
    margin-bottom: 0;
    align-items: center;
  }

  .lineintro {
    border-top: 1px solid var(--vtDarkBlue);
    width: 35rem;
  }

  /* buttons */
  button {
    background-color: transparent;
    border: transparent;
    padding: 2em;
  }

  .right-arrow {
    cursor: pointer;
    border: none;
  }

  .left-arrow {
    cursor: pointer;
    transform: rotate(180deg);
  }

  /* responsive clips */
  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    .line {
      padding-left: 19.5% !important;
    }

    h1 {
      font-size: 2.1em !important;
    }

    p {
      /* padding-left: 2.5em;
      padding-right: 2.5em; */
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    .line {
      padding-left: 11% !important;
    }

    h1 {
      font-size: 1.157em !important;
    }

    p {
      /* padding-left: 2rem;
      padding-right: 2rem; */
    }

    button {
      padding: 0.6em;
    }
  }

  /* desktop */
  @media screen and (min-width: 1120px) {
    .youtubelink {
      width: 884px;
      height: 497px;
    }
  }
</style>

