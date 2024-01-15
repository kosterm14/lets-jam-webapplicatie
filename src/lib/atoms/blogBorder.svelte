<script>
  import BlogButton from "./blogButton.svelte";
  export let data;
</script>

<section>
  {#each data.artikelenHomepages as artikelenHomepages}
    <!-- CARDS - BORDER -->
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2em;
    margin: 3em;
  }

  article {
    height: 30em;
    width: 16em;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
    
  }

  img {
    width: 100%;
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
  }

  p {
    font-family: var(--vtSecondaryFont);
    font-size: 17px;
    line-height: 1.5em;
    padding: 1em;
    margin-top: -2em;
  }

  @media screen and (max-width: 30em) {
    section {
      margin-left: 1em;
    }
  }

  @media screen and (min-width: 37em) {
    section {
      flex-direction: row;
    }
  }
</style>
