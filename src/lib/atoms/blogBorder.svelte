<script>
  import BlogButton from "./blogButton.svelte";
  export let data;
</script>

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
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    padding: -10em;
    justify-content: center;
    padding: 10em;
    padding-bottom: 1em;
    gap:2em;
  }

  article {
    height: 30em;
    width: 16em;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
    /* margin-left: -2em; */
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

  /* 
  @media screen and (min-width: 900px) {
    section{
      grid-template-columns: 1fr 1fr;
    }

  } */

  @media screen and (min-width: 850px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 690px) {
    section {
      display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    padding: -10em;
    justify-content: center;
    padding: 10em;
    padding-bottom: 1em;
    }
  }

  @media screen and (min-width: 1400px) {
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
    /* 
    article{
      margin-left: 1em;
    } */
  }
</style>
