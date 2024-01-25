<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";
    export let data;
    console.log(data);
</script>

<Header />

<body class="page">

    <section>
        <a href="/tekenmethodes">
            <p class="line">
                <img class="arrows-line" src="/arrows.svg" alt="" />
                Overzicht<strong id="methodes-line">tekenmethodes</strong>
            </p>
        </a>
    </section>

    <main class="detail-main">
        <section class="navmain">
            <section>
                <h1 class="h1-detail">
                    {#each data.methods as method}
                        {method?.title}
                    {/each}
                </h1>
            </section>

            {#each data.methods as method}
                <nav>
                    <ul>
                        <li>
                            <h2 class="bold">Beschrijving</h2>
                        </li>
                        <a href="/tekenmethodes/{method.slug}/stappenplan">
                            <li>
                                <h2 class="h2-detail">Stappenplan</h2>
                            </li>
                        </a>
                        <a href="/tekenmethodes/{method.slug}/voorbeelden">
                            <li>
                                <h2 class="h2-detail">Voorbeelden</h2>
                            </li>
                          </a>
                    </ul>
                </nav>
            {/each}
        </section>

        <section class="flex-b">
            {#each data.methods as method}
                <img class="template-url" src={method?.template?.url} alt="" />
            {/each}

            <h3 class="text">
                {#each data.methods as method}
                    {@html method?.description.html}
                {/each}
            </h3>
        </section>
    </main>
</body>

<Footer />


<style>
  :root {
    --vtGrey-80: #c0beb9;
    --vtGrey-50: #e0dedc;
    --vtGrey-10: #f9f8f8;
  }

  .page {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #methodes-line {
    margin-left: 0.7em;
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  h2 {
    font-size: 2.369rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
  }

  .h1-detail {
    padding-left: 6.7rem;
    margin-top: 2em;
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
    white-space: nowrap;
    /* hyphens: auto; */
  }

  .h1-detail:hover {
    white-space: unset;
    text-overflow: unset;
  }

  .h2-detail,
  .bold {
    font-size: 2.369rem;
    font-weight: 400;
    font-family: var(--vtPrimaryFont);
    color: var(--vtSec-DarkBlue);
  }

  .bold {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  h3 {
    font-size: 1.777rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
  }

  .navmain ul {
    display: flex;
    align-items: center;
    list-style: none;
    
  }

  .navmain li {
    padding: 0.6rem;
    font-size: 1rem;

    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-weight: bolder;
  }

  .navmain {
    display: flex;
    justify-content: space-between;
    background-color: var(--vtGrey-10);
    margin-top: -2rem;
    margin-bottom: -1rem;
  }

  .navmain li {
    color: var(--vtSec-DarkBlue);
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
  }

  .navmain ul {
    padding-right: 4rem;
  }

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  h2 {
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
  }

  .h1-detail {
    padding-left: 6.7rem;
    max-width: 30rem;
    max-height: 6rem;
  }

  .h2-detail,
  .bold {
    font-size: 1rem;
    font-weight: 400;

    font-family: var(--vtPrimaryFont);
    color: var(--vtSec-DarkBlue);
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

  .text,
  .template-url {
    margin-top: 3rem;
  }

  .text {
    padding-top: 1.5rem;
    max-width: 35rem;
    text-transform: none;
    font-weight: 500;
    margin-left: 1em;
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    color: var(--vtDarkBlue);
  }

  p {
    font-size: 0.75rem;
    font-family: var(--vtPrimaryFont);
    text-transform: uppercase;
  }

  .line {
    background-color: var(--vtSec-DarkBlue);
    color: var(--vtWhite);
    text-transform: uppercase;
    font-family: var(--vtPrimaryFont);
    font-size: 0.75rem;
    padding-left: 7rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 0px;
    display: flex;
    align-items: center;
  }

  .line img {
    margin-right: 0.5rem;
  }

  .arrows-line {
    width: 20px;
    transform: rotate(180deg);
  }

  .flex-b {
    display: flex;
    justify-content: space-evenly;
  }

  .flex-b {
    padding-left: 4.7rem;
  }

  .flex-b .template-url {
    margin-left: 0rem;
  }

  .template-url {
    width: calc(39.8rem / 1.3);
    height: calc(27rem / 1.3);
    margin-left: 6.6rem;
    box-shadow: 1px 1px 10px 5px rgb(244, 244, 244);
  }

  .detail-main {
    margin: 2rem 0;
  }

    nav {
      display: block !important;
      position: relative;
      width: auto;
      float: right;
      padding: 5px 0;
    }

    nav ul {
      float: left;
    }

    nav ul li {
      display: inline-block;
      padding-right: 30px;
      padding-top: 5px;
      color: var(--vtDarkBlue);
      font: var(--vtMenuFont);
    }

    /*---TABLET---*/
    @media (min-width: 31em) and (max-width: 62em) {
      .line {
    padding-left: 2rem;
    }

    #methodes-line {
    margin-left: 0.7em;
  }

    .h1-detail {
    padding-left: 2rem;
    }

    h1 {
    font-size: 2rem;
    }

    nav {
      width: auto;
      float: left;
      margin-top: 2.5em;
      margin-left: -11.5em;
      padding: 5px 0;
      
      overflow-x: scroll;
      white-space: nowrap;
    }

    nav::-webkit-scrollbar {
      display: none;
    }

    .flex-b {
    padding-left: 0rem;
  }

  .flex-b {
    display: flex;
    flex-wrap: wrap;
  }

  .template-url {
    width: 420px;
    height: 300px;
    margin-top: 3em;
    box-shadow: 1px 1px 10px 5px rgb(244, 244, 244);
  }

  .text {
    width: 77%;
    font-weight: 500;
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    color: var(--vtDarkBlue);
  }
    }

    /*---MOBILE---*/
  @media (max-width: 31em) {
    .line {
      padding-left: 2rem;
    }

    #methodes-line {
    margin-left: 0.7em;
  }

    .h1-detail {
      padding-left: 2rem;
    }

    h1 {
      font-size: 2rem;
    }

    nav {
      width: auto;
      float: left;
      margin-top: 4.5em;
      margin-left: -11.5em;
      padding: 5px 0;
      
      overflow-x: scroll;
      white-space: nowrap;
    }

    nav::-webkit-scrollbar {
      display: none;
    }

    .flex-b {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .template-url {
      display: flex;
      justify-content: center;
      width: 330px;
      height: 230px;
      margin-top: 3em;
      box-shadow: 1px 1px 10px 5px rgb(244, 244, 244);
    }

    .text {
      margin-left: -15em;
      margin-top: 16rem;
      min-width: 15em;
      font-size: 1rem;
      font-weight: 500;
      font-family: var(--vtSecondaryFont);
      color: var(--vtDarkBlue);
    }
  }

</style>
