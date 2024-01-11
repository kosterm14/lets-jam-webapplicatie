 <script>
  import BlogButton from "./blogButton.svelte";

  // export let data;
  // // console.log(data.detailpaginas.slug);
</script> 

<section>
  <!-- CARDS - BORDER -->
  <article>
    <BlogButton />
  </article>
  <article>
    <BlogButton />
  </article>
  <article>
    <BlogButton />
  </article>

  <!-- CARDS - BORDER -->
  <article>
    <BlogButton />
  </article>
  <article>
    <BlogButton />
  </article>
  <article>
    <BlogButton />
  </article>
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
    height: 25em;
    width: 16em;
    border: 4px solid var(--vtYellow);
    border-radius: 0.5em;
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
