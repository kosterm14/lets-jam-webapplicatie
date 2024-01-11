<script>
  export let data;
  // console.log(data);
</script>

{#each data.detailpaginas as detail}
  <a href="artikelen/{detail.slug}">
    <section>
      <button>Lees meer</button>
    </section>
  </a>
{/each}

<style>
  button {
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    border-radius: 0.5em;
    list-style: none;
    border: none;
    margin: 1em;
    padding: 1em;
    margin-top: 32em;
    margin-left: 8em;
  }

  button:hover {
    background-color: var(--vtRed);
  }

  /* a {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  } */
</style>
