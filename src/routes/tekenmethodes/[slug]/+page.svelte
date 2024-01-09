<script>
    export let data;
    console.log(data);
</script>

<!-- <Header /> -->
<body class="page">
    <header>
        <section>
            <a href="/">
                <img class="logo" src="/assets/vtHBO-v1.0-Logo_1.svg" alt="" />
            </a>
        </section>

        <section class="navheader">
            <nav>
                <ul>
                    <a href="/over">
                        <li>Over</li>
                    </a>
                    <a href="/blog">
                        <li>Blog</li>
                    </a>
                    <!-- <li>
                        <img src="/assets/account.svg" alt="" />
                    </li> -->
                </ul>
            </nav>
        </section>
    </header>

    <section>
        <a href="/tekenmethodes">
            <p class="line">
                <img class="arrows-line" src="/assets/arrows.svg" alt="" />
                Overzicht <strong>tekenmethodes</strong>
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
                        <a
                            href="/tekenmethodes/{method.slug}/form?id={method.id}"
                        >
                            <li>
                                <h2 class="h2-detail">Feedback</h2>
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


<style>
  .page {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


   /* desktop */
   @media (min-width: 55em) {

   }


   /* tablet */
   @media (min-width: 31em) and (max-width: 55em) {

   }



       /* mobile */
       @media (max-width: 31em) {
 

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




  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--vtWhite);
  }


  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
  }

  .navmain ul,
  .navheader ul {
    display: flex;
    align-items: center;

    list-style: none;
  }

  .navmain li,
  .navheader li {
    padding: 0.6rem;
    font-size: 1rem;

    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    font-weight: bolder;
  }

  .navheader {
    display: flex;
    align-items: center;
  }

  .navheader li {
    padding: 1.4rem;
  }

  .navmain {
    display: flex;
    justify-content: space-between;

    margin-top: -1rem;
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

    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    color: var(--vtSec-DarkBlue);
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
    width: 1%;
    transform: rotate(180deg);
  }

  .flex-b,
  .flex-s {
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
  }



  .detail-main {
    margin: 2rem 0;
  }


    nav {
      display: block !important;
      /* prevent the nav to hide when resize */
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




</style>
