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
    <aside>
      <button>
        <img
          class="left-arrow"
          src="./arrows_black.svg"
          alt="Knop met pijl naar volgende video"
        />
      </button>

      <!-- <a href={category.knowledgeClip.url}>{category.knowledgeClip.url}</a> -->
      <iframe
        width="780"
        height="535"
        src="https://www.youtube.com/embed/yr-rRMElLFg"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <button>
        <img
          class="right-arrow"
          src="./arrows_black.svg"
          alt="Knop met pijl naar volgende video"
        />
      </button>
    </aside>

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

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
  }

  body {
    /* margin: 0; */
    padding: 0;
    overflow-x: hidden;
  }

  /* Clip styling */

  /* Header styling */

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    margin-left: 7em;
    margin-right: 7em;
    line-height: 3rem;
    text-align: center;
    border-bottom: 0.5px solid #333; /* Adjust the color and thickness of the line as needed */
    padding-bottom: 22px; /* Adjust the padding as needed */
  }

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

  /* Header styling */
  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0%;
  }

  /* Kennisclip teksten */

  p {
    text-align: left;
    /* text-transform: none; */
    line-height: 1.5rem;
    /* align-items: center; */
    font-family: var(--vtPrimaryFont);
    font-size: 1em;
    margin-left: 20em;
    margin-right: 20em;
  }

  /* Arrow buttons */

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }

  button:hover {
    border-radius: 5px;
  }

  .right-arrow {
    cursor: pointer;
    background-color: white;
    border: none;
    margin-left: 2em;
  }

  .left-arrow {
    cursor: pointer;
    margin-right: 2em;
    transform: rotate(180deg);
  }
  /* Header line */

  .line {
    text-transform: uppercase;
    background-color: var(--vtLightBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 30rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin: 0%;
    /* display: flex; */
    /* align-items: center; */
  }

  /* Carousel */
</style>
