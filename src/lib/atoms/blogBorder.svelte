<script>
  import BlogButton from "./blogButton.svelte";
  export let data;
</script>

<!-- INTRO DATA - CONTENT -->
{#each data.introTeksts as intro}
  <h1 class="introtitel">{intro.title}</h1>
  <p class="introtext">{intro.description.text}</p>
{/each}

<!-- BORDERS - BUTTON - ARTIKELEN DATA - CONTENT -->
<section>
  {#each data.artikelenHomepages as artikelenHomepages}
    <article>
      <img src={artikelenHomepages.img.url} alt="artikelen" />
      <h1>{artikelenHomepages.title}</h1>
      <p>{artikelenHomepages.description}</p>
      <BlogButton />
    </article>
  {/each}
</section>

<style>
  /* MOBILE - STYLING */
  /* INTRO - STYLING */
  .introtitel {
    margin-left: 0em;
    font-size: 30px;
  }

  .introtext {
    font-size: 19px;
    margin-bottom: -1em;
  }

  /* BORDER - CONTENT - STYLING */
  section {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-items: center;
    padding: 10%;
    justify-content: center;
    padding-bottom: 1em;
    gap: 2em;
  }

  article {
    height: 30em;
    width: 16em;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
  }

  img {
    width: 100%;
    height: 40%;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
  }

  h1 {
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    line-height: 1.2em;
    margin-top: 0em;
    padding: 0.6em;
    font-size: 20px;
    margin-left: 0.3em;
    height: 12%;
    display: flex;
    align-items: end;
  }

  p {
    font-family: var(--vtSecondaryFont);
    font-size: 17px;
    line-height: 1.5em;
    padding: 1em;
    margin-top: -2em;
    height: 26%;
  }

  /* MEDIA QUERY */
  /* TABLET - STYLING */
  @media screen and (min-width: 760px) {
    .introtitel {
      margin-left: 3em;
    }

    .introtext {
      width: 45%;
      margin-left: 5em;
      margin-bottom: -4em;
    }

    section {
      grid-template-columns: 1fr 1fr;
      padding-bottom: 1em;
      max-width: fit-content;
      margin: auto;
    }
  }

  /* TABLET - STYLING */
  @media screen and (min-width: 600px) {
    .introtitel {
      margin-left: 2em;
    }

    .introtext {
      width: 55%;
      margin-left: 3em;
      margin-bottom: -2em;
    }
  }

  /* DESKTOP - STYLING */
  @media screen and (min-width: 1280px) {
    .introtitel {
      margin-left: 5.5em;
    }

    .introtext {
      width: 38%;
      margin-left: 9em;
    }

    section {
      grid-template-columns: 1fr 1fr 1fr;
      padding-left: 7em;
      padding-right: 7em;
      margin-top: -4em;
    }
  }

  /* GROTERSCHREM - DESKTOP - STYLING */
  @media screen and (min-width: 2280px) {
    .introtitel {
      margin-left: 18.1em;
    }

    .introtext {
      width: 23%;
      margin-left: 29em;
    }

    section {
      gap: 8em;
      margin-top: -8em;
    }
  }
</style>
