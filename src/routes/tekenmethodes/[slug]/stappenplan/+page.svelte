<script>
    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    export let data;
    console.log(data);

    let stappenplanButton;

    // Function to toggle the "toon" class on the "stappen" element
    function toonStappenplan() {
        const stappenElement = document.getElementById("stappen");
        stappenElement.classList.toggle("toon");
    }

    // This function will be called when the Svelte component is mounted
    function setup() {
        stappenplanButton = document.getElementById("stappenplanbutton");
        stappenplanButton.addEventListener("click", toonStappenplan);
    }

    // This function will be called when the Svelte component is unmounted
    function teardown() {
        stappenplanButton.removeEventListener("click", toonStappenplan);
    }
</script>

<Header />


<body class="page">

    <section>
        <a href="/tekenmethodes">
            <p class="line">
                <img class="arrows-line" src="/arrows.svg" alt="" />
                Overzicht <strong>tekenmethodes</strong>
            </p>
        </a>
    </section>

    <main class="detail-main">
        <section class="navmain">
            <section>
                <h1 class="h1-detail">
                    {#each data.methods as method}
                        {method.title}
                    {/each}
                </h1>
            </section>

            {#each data.methods as method}
                <nav>
                    <ul>
                        <a href="/tekenmethodes/{method.slug}">
                            <li>
                                <h2 class="h2-detail">Beschrijving</h2>
                            </li>
                        </a>
                        <li>
                            <h2 class="bold">Stappenplan</h2>
                        </li>
                        <a href="/tekenmethodes/{method.slug}/voorbeelden">
                            <li>
                                <h2 class="h2-detail">Voorbeelden</h2>
                            </li>
                        </a>
                    </ul>
                </nav>
            {/each}
        </section>

        {#each data.methods as method}
            <img class="template-url" src={method?.template?.url} alt="" />
        {/each}

        <section class="flex-s">
            <section class="full-b">
                <section class="tags-b">
                    <img class="icon" src="/icon1.svg" alt="" />
                    {#each data.methods as method}
                        <h2 class="tag">
                            {@html JSON.stringify(method.categories)}
                        </h2>
                    {/each}
                </section>

                <section class="tags-b">
                    <img class="icon" src="/icon2.svg" alt="" />
                    <h2 class="tag">
                        {#each data.methods as method}
                            {method.material}
                        {/each}
                    </h2>
                </section>

                <section class="tags-b">
                    <img class="icon" src="/icon3.svg" alt="" />
                    <h2 class="tag">
                        {#each data.methods as method}
                            {method.duration}
                        {/each}
                    </h2>
                </section>

                <section class="tags-b">
                    <img class="icon" src="/icon4.svg" alt="" />
                    <h2 class="tag">Charley Muhren</h2>
                </section>

                <div class="buttondeel">
                    <h4>Stappenplan</h4>
                    <button id="stappenplanbutton" on:click={toonStappenplan}>
                        <img
                            src="/arrow-down.svg"
                            alt="Pijl naar beneden"
                        />
                    </button>
                </div>
                <div id="stappen" class="stappen">
                    <ol class="tobiashaha">
                        {#each data.methods as method}
                            <li>
                                <h4>{@html JSON.stringify(method.steps)}</h4>
                                <div class="step-description">
                                    <!-- {@html method.description.html} -->
                                </div>
                            </li>
                        {/each}
                    </ol>
                </div>
            </section>
        </section>
    </main>
</body>

<Footer />


<style>
   body {
    margin: 0;
    padding: 0;
  }

  .page {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 20px;

    /* Visual Thinking: Primary Colors:
    Zie kleuren styleguide of eventueel Figma designs voor gebruik! 
    */
    --vtDarkBlue: #090940;
    --vtLightBlue: #67c5d1;
    --vtYellow: #feb51e;
    --vtRed: #f96c4f;
    --vtWhite: #ffffff;

    /* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^
    Zie kleuren styleguide of eventueel Figma designs voor gebruik! 
    */
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

        --vtDarkBlue: #090940;
        --vtLightBlue: #67c5d1;
        --vtYellow: #feb51e;
        --vtRed: #f96c4f;
        --vtWhite: #ffffff;

        /* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^
    Zie kleuren styleguide of eventueel Figma designs voor gebruik! 
    */
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

    --vtGrey-80: #c0beb9;
    --vtGrey-50: #e0dedc;
    --vtGrey-10: #f9f8f8;


    --vtSec-Red: #af1301;
    --vtSec-Red-30: #fbc5b4;
    --vtSec-Green: #169861;
    --vtSec-Green-30: #63c09f;
    --vtSec-LightBlue: #4fbbc2;
    --vtSec-DarkBlue: #31439c;
    /* <--- deze kleur is de blauwe balk van de tekenmethodes detailpagina */
    --vtSec-Brown: #8b3a00;
    --vtSec-Orange: #fe6f07;

    /* Visual Thinking: Fonts,
    */

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;

    overflow-x: hidden;
    font-family: var(--vtSecondaryFont);
  }

  /* @media only screen and (max-width: 400px)  { */

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
/* } */

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


  h4 {
    font-size: 1rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
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

  .flex-s {
    display: flex;
    justify-content: space-evenly;
  }

  .flex-s {
    padding-left: 30.7rem;
  }

  .template-url {
    width: calc(39.8rem / 1.3);
    height: calc(27rem / 1.3);
    margin-left: 6.6rem;
    margin-top: 3rem;
    box-shadow: 1px 1px 10px 5px rgb(244, 244, 244);
  }

  .tags-b {
    display: flex;
    justify-content: left;
    align-items: center;
  }


  .tag {
    background-color: var(--vtYellow);
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-size: 0.8rem;
    font-weight: bolder;

    padding: 0.3rem;
    margin-left: 0.8rem;
    max-width: fit-content;
  }

  .full-b {
    flex-direction: column;
    padding-right: 8rem;
    margin-top: -20rem;
  }


  .full-b {
    display: flex;
    margin-left: 8rem;
  }

  .icon {
    width: 6.5%;
    height: 94.5%;
  }




 

  .detail-main {
    margin: 2rem 0;
  }



  /*
                        RESPONSIVE TABLET  
*/
  /* @media (min-width: 31em) { */
    /* Index page */
/* 


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
  }

  * {
    margin: 0;
    padding: 0;
  }

  footer ul li {
    list-style: none;
    font-family: var(--vtPrimaryFont);
    font-size: 1em;
    font-weight: 400;
    color: var(--vtDarkBlue);
    padding: 10px;
  } */

  @media (min-width: 68em) {

  .navmain {
    background-color: var(--vtGrey-10);
    margin-top: -2em;
  }

  #stappenplanbutton {
    background-color: white;
    border: none;
  }

  .buttondeel {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .tobiashaha {
    list-style-type: none;
  }

  .stappen {
    display: none;
  }

  .buttondeel {
    display: flex;
    justify-content: center;
    min-width: 2.6rem;
    max-width: 2.6rem;
    height: 3rem;
    margin-top: 1.2rem;
    margin-right: 1.2rem;
    margin-left: -1rem;
    -webkit-clip-path: polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-color: var(--vtGrey-80);
  }

  #stappenplanbutton {
    font: var(--rigid);
    background-color: white;
    border: 0px;
    transition: 1s;
  }

  #stappenplanbutton:hover {
    cursor: pointer;
  }

  #stappenplanbutton img {
    width: 3em;
    height: 3em;
  }

  .full-b {
    display: flex;
    justify-content: center;
    margin-left: 12em;
  }
}








    /* tablet */
    @media (min-width: 31em) and (max-width: 68em) {
    .line {
    padding-left: 2rem;
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

    .navmain {
    background-color: var(--vtGrey-10);
    margin-top: -2em;
  }

    nav::-webkit-scrollbar {
    display: none;
    }

    .template-url {
    display: flex;
    justify-content: center;
    width: 420px;
    height: 300px;
    margin-top: 3em;
    margin-left: 3em;
    box-shadow: 1px 1px 10px 5px rgb(244, 244, 244);
  }

    .flex-s {
    margin-left: -35em;
    margin-top: 24rem;
    min-width: 15%;
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    color: var(--vtSec-DarkBlue);
  }
    }

    /* --- MOBILE DEVICE --- */
    @media (max-width: 31em) {
    .line {
    padding-left: 2rem;
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

    .navmain {
    background-color: var(--vtGrey-10);
    margin-top: -2em;
  }

    nav::-webkit-scrollbar {
      display: none;
    }

  .template-url {
    display: flex;
    justify-content: center;
    width: 330px;
    height: 230px;
    margin-top: 3em;
    margin-left: 1.5em;
    box-shadow: 1px 1px 10px 5px rgb(244, 244, 244);
  }

  .flex-s {
    margin-top: 24rem;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1rem;
    font-family: var(--vtSecondaryFont);
    color: var(--vtSec-DarkBlue);
  }

  .tags-b {
    margin-bottom: 0.5em;
  }

  .buttondeel {
    margin-top: 2em;
  }
  }
</style>

