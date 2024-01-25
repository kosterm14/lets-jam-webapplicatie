<script>
  import Header from "$lib/molecules/header.svelte";
  export let data;
  console.log(data.artikel.artikelen[2]);
  let artikel = data.artikel.artikelen;
</script>

<Header />
<header>
  <section>
    <h4 class="line">Case</h4>
  </section>
</header>

<main>
  <section class="greybackground">
    <h1>Tekenen en spelen met kinderen (en hun ouders)</h1>
    <section class="lineintro"></section>
    <p class="description">Door: Charley Muhren</p>
    <p class="description">Mei 5, 2019</p>
  </section>

  {#each artikel as artikel}
    <section>
      <!-- <h1>{artikel.title}</h1> -->
      <p>{artikel.description.text}</p>
    </section>

    {#each artikel.visual as visual}
      <section>
        <img src={visual.url} alt="artikelen" />
      </section>
    {/each}
  {/each}
</main>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5rem;
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  p {
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
  }

  .lineintro {
    border-top: 1px solid var(--vtDarkBlue);
    width: 35rem;
  }

  .greybackground {
    background-color: var(--vtGrey-10);
    padding-left: 19em;
    padding-right: 18em;
    margin-top: -1.2em;
  }

  .description {
    font-size: 23px;
  }

  .line {
    text-transform: uppercase;
    background-color: var(--vtDarkBlue);
    color: var(--vtWhite);
    font-family: var(--vtPrimaryFont);
    font-size: 0.9rem;
    padding-left: 20%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0%;
    width: 100vw;
    display: flex;
    align-items: center;
  }

  img {
    width: 20em;
    height: auto;
  }

  section {
    width: 50%;
  }

  /* tablet */
  @media (min-width: 31em) and (max-width: 55em) {
    section {
      width: 80%;
    }

    .line {
      padding-left: 25%;
    }
  }

  /* mobile */
  @media (max-width: 31em) {
    h1 {
      font-size: 1.7rem;
    }

    section {
      width: 77%;
    }

    .line {
      padding-left: 11%;
    }
  }
</style>
