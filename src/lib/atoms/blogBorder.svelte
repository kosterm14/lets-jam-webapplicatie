<script>
  import BlogButton from "./blogButton.svelte";
  export let data;
</script>

{#each data.introTeksts as intro}
  <h1 class="introtitel">{intro.title}</h1>
  <p class="introtext">{intro.description.text}</p>
{/each}

<section>
  {#each data.artikelenHomepages as artikelenHomepages}
    <article>
      <img src={artikelenHomepages.img.url} alt="" />
      <h1>{artikelenHomepages.title}</h1>
      <p>{artikelenHomepages.description}</p>
      <BlogButton />
    </article>
  {/each}
</section>

<style>
  /* MOBILE - STYLING */
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

  .introtitel {
    margin-left: 0em;
    font-size: 30px;
  }

  .introtext {
    font-size: 19px;
    margin-bottom: -1em;
  }

  @media screen and (min-width: 760px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: center;
      justify-content: center;
      padding-bottom: 1em;
    }

    .introtitel {
      margin-left: 3em;
      font-size: 30px;
    }

    .introtext {
      width: 45%;
      font-size: 19px;
      margin-left: 5em;
      margin-bottom: -4em;
    }
  }

  @media screen and (min-width: 600px) {
    .introtitel {
      margin-left: 2em;
      font-size: 30px;
    }

    .introtext {
      width: 55%;
      font-size: 19px;
      margin-left: 3em;
      margin-bottom: -2em;
    }
  }

  @media screen and (min-width: 1280px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2em;
      grid-auto-columns: auto;
      align-items: center;
      justify-items: center;
      padding-left: 7em;
      padding-right: 7em;
    }

    .introtitel {
      margin-left: 4.2em;
    }

    .introtext {
      width: 38%;
      margin-left: 7em;
    }
  }

  @media screen and (min-width: 2280px) {
    .introtitel {
      margin-left: 10em;
    }

    .introtext {
      width: 23%;
      margin-left: 16em;
    }
  }
</style>
