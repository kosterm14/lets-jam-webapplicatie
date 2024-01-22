<script>
    import Header from "$lib/molecules/header.svelte";

    let page = 1;
    function nextPage() {
        page++;
    }
    function previousPage() {
        page--;
    }
</script>

<div class="container">
    <Header />

    <main>
        {#if page === 1}
            <section class="background-page1">
                <h1 class="h1-page1">
                    “Sad people are bent over, shoulders up, face down. <br />
                    Happy or proud people have their shoulders back, <br /> face
                    up and hands at their sides.” <br /> - Willemien Brand - Visual
                    Thinking
                </h1>

                <h2 class="h2-page1">
                    In deze minicursus krijg je een introductie opdracht over
                    het tekenen van mensen. <br /> Pak een vel papier en een aantal
                    stiften van verschillende diktes om mee te doen.
                </h2>

                <img class="img-page1" src="/pencil.svg" alt="" />

                <button class="button-page1" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 2}
            <button class="buttonL-page2" on:click={previousPage}>Vorige</button
            >

            <section class="background-page2">
                <h1 class="h1-page2">Teken een simpel poppetje</h1>

                <img
                    class="img-page2"
                    src="/Simpel-poppetje-ezgif.com-video-to-gif-converter.gif"
                    alt=""
                />

                <button class="buttonR-page2" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 3}
            <button class="buttonL-page3" on:click={previousPage}>Vorige</button
            >

            <section class="background-page3">
                <p class="p-page3">
                    Waarschijnlijk was jouw poppetje niet <br /> anatomisch
                    correct maar wel <br /> herkenbaar een mens. Voor visual
                    <br /> thinking is dit genoeg!
                </p>

                <button class="buttonR-page3" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 4}
            <button class="buttonL-page4" on:click={previousPage}>Vorige</button
            >

            <section class="background-page4">
                <section class="section-page4">
                    <h1 class="h1-page4">Verhoudingen</h1>
                    <p class="p-page4">
                        Een mens bestaat uit bepaalde <br /> verhoudingen.
                    </p>

                    <p class="p-page4">
                        Zo bestaat een lichaam uit acht keer de <br /> lengte
                        van een hoofd, zijn de lengte van <br /> je armen en
                        benen gelijk aan elkaar, <br /> zijn je armen gespreid
                        gelijk aan je eigen <br />
                        lengte en is het belangrijk dat je armen <br /> uit de
                        schouders laat komen en niet uit <br /> de romp.
                    </p>
                </section>

                <img
                    class="img-page4"
                    src="/Verhoudingen-poppetje-ezgif.com-video-to-gif-converter.gif"
                    alt=""
                />

                <button class="buttonR-page4" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 5}
            <button class="buttonL-page5" on:click={previousPage}>Vorige</button
            >

            <section class="background-page5">
                <h1 class="h1-page5">Teken een boze bakker</h1>

                <img
                    class="img-page5"
                    src="/Boze-bakker-ezgif.com-video-to-gif-converter.gif"
                    alt=""
                />

                <button class="buttonR-page5" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 6}
            <button class="buttonL-page6" on:click={previousPage}>Vorige</button
            >

            <section class="background-page6">
                <h1 class="h1-page6">Houding, gezichtsuitdrukking en type</h1>

                <p class="p-page6">
                    De houding en gezichtsuitdrukking zeggen <br /> veel over
                    een mens dus als je die weet te <br /> vangen, kan je
                    duidelijk maken wat je <br />
                    bedoelt.
                </p>

                <p class="p-page6">
                    Ook kan een bepaald kledingstuk of <br /> hoofddeksel een
                    typetje voorstellen. <br /> Als je in staat bent om simpele
                    figuren te <br />
                    tekenen, kan je snel en simpel bepaalde <br /> situaties
                    verduidelijken door bijvoorbeeld <br /> mensen met elkaar in
                    dialoog of actie te <br /> laten zien.
                </p>

                <button class="buttonR-page6" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 7}
            <button class="buttonL-page7" on:click={previousPage}>Vorige</button
            >

            <section class="background-page7">
                <h1 class="h1-page7">Meer over mensen tekenen</h1>

                <p class="p-page7">
                    Er zijn allerlei cursussen, websites en <br /> boeken te
                    vinden over hoe je poppetjes kan <br /> tekenen. Kijk eens op:
                </p>

                <section class="link-page7">
                    <a href="http://www.burobrand.nl" target="_blank">
                        www.burobrand.nl
                    </a>
                </section>
                <section class="link-page7">
                    <a href="http://www.debetekenaar.nl" target="_blank">
                        www.debetekenaar.nl
                    </a>
                </section>

                <button class="buttonR-page7" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 8}
            <button class="buttonL-page8" on:click={previousPage}>Vorige</button
            >

            <section class="background-page8">
                <h1 class="h1-page8">Gefeliciteerd!</h1>

                <img class="img-page8" src="/page7.svg" alt="" />

                <h2 class="h2-page8">
                    Je hebt de minicursus mensen tekenen afgerond. <br /> Succes
                    met Visual Thinking!
                </h2>

                <p class="p-page8">
                    “There is no more powerful way to prove <br /> that you know
                    something well than to draw <br /> a simple picture of it.” -
                    Dan Roam
                </p>

                <a href="/minicursussen">
                    <button class="buttonR-page8">Rond af</button>
                </a>
            </section>
        {/if}
    </main>
</div>

<style>
    .container {
        display: grid;
        grid-template-rows: auto 1fr;
        height: 100vh;
    }

    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .background-page1,
    .background-page2,
    .background-page3,
    .background-page4,
    .background-page5,
    .background-page6,
    .background-page7,
    .background-page8 {
        height: 90%;
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .background-page4 {
        flex-direction: row;
        justify-content: end;
    }

    .background-page1,
    .background-page8 {
        background-color: var(--vtDarkBlue);
    }

    .background-page2,
    .background-page3,
    .background-page4,
    .background-page5,
    .background-page6,
    .background-page7 {
        background-color: var(--vtWhite);
        border: 10px solid #090940;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .h1-page1,
    .h2-page1,
    .h1-page2,
    .h1-page4,
    .h1-page5,
    .h1-page6,
    .h1-page7,
    .h1-page8,
    .h2-page8 {
        color: var(--vtWhite);
        font-family: var(--vtPrimaryFont);
        display: inline;
        text-align: center;
    }

    .h1-page5 {
        text-align: left;
    }

    .h1-page2,
    .h1-page4,
    .h1-page5,
    .h1-page6,
    .h1-page7 {
        color: var(--vtDarkBlue);
    }

    h1 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }

    .h1-page7 {
        margin-bottom: 0rem;
    }

    h2 {
        font-size: 1rem;
        margin: 0;
    }

    .p-page3,
    .p-page4,
    .p-page6,
    .p-page7,
    .p-page8 {
        color: var(--vtDarkBlue);
        font-family: var(--vtPrimaryFont);
        /* font-size: 1.2rem; */
    }

    .p-page8 {
        color: var(--vtWhite);
        text-align: center;
    }

    p {
        font-size: 1rem;
    }

    .img-page1 {
        transform: rotate(90deg);
        width: 7%;
    }

    .img-page2 {
        width: 35%;
    }

    .img-page4 {
        width: 40%;
    }

    .img-page5 {
        width: 35%;
    }

    .img-page8 {
        width: 7%;
        margin-bottom: 2rem;
    }

    .button-page1,
    .buttonL-page2,
    .buttonR-page2,
    .buttonL-page3,
    .buttonR-page3,
    .buttonL-page4,
    .buttonR-page4,
    .buttonL-page5,
    .buttonR-page5,
    .buttonL-page6,
    .buttonR-page6,
    .buttonL-page7,
    .buttonR-page7,
    .buttonL-page8,
    .buttonR-page8 {
        width: 8rem;
        height: 2.5rem;
        font-size: 1.2rem;
        font-family: var(--vtPrimaryFont);
        margin-bottom: 2.7rem;
    }

    .button-page1,
    .buttonR-page2,
    .buttonR-page3,
    .buttonR-page4,
    .buttonR-page5,
    .buttonR-page6,
    .buttonR-page7,
    .buttonR-page8 {
        right: 0;
        bottom: 0;
        position: absolute;
        margin-right: 3rem;
    }
    .buttonL-page2,
    .buttonL-page3,
    .buttonL-page4,
    .buttonL-page5,
    .buttonL-page6,
    .buttonL-page7,
    .buttonL-page8 {
        left: 0;
        bottom: 0;
        position: absolute;
        margin-left: 3rem;
    }

    .button-page1,
    .buttonL-page8,
    .buttonR-page8 {
        border: 1px solid var(--vtDarkBlue);
        background: var(--vtWhite);
        color: var(--vtDarkBlue);
    }

    .buttonL-page2,
    .buttonR-page2,
    .buttonL-page3,
    .buttonR-page3,
    .buttonL-page4,
    .buttonR-page4,
    .buttonL-page5,
    .buttonR-page5,
    .buttonL-page6,
    .buttonR-page6,
    .buttonL-page7,
    .buttonR-page7 {
        border: 1px solid var(--vtWhite);
        background: var(--vtDarkBlue);
        color: var(--vtWhite);
    }

    .link-page7 {
        background-color: var(--vtDarkBlue);
        color: var(--vtWhite);
        font-family: var(--vtPrimaryFont);
        padding: 0.5rem;
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color: var(--vtWhite);
    }

    .section-page4 {
        text-align: center;
    }

    .p-page4 {
        text-align: start;
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        main {
            height: 78vh;
        }

        h1 {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        h2 {
            font-size: 0.7rem;
            margin: 0;
        }

        p {
            font-size: 0.7rem;
        }

        .link-page7 {
            padding: 0.5rem;
            font-size: 0.7rem;
        }

        .button-page1,
        .buttonL-page2,
        .buttonR-page2,
        .buttonL-page3,
        .buttonR-page3,
        .buttonL-page4,
        .buttonR-page4,
        .buttonL-page5,
        .buttonR-page5,
        .buttonL-page6,
        .buttonR-page6,
        .buttonL-page7,
        .buttonR-page7,
        .buttonL-page8,
        .buttonR-page8 {
            width: 6rem;
            font-size: 1rem;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        main {
            height: 78vh;
        }

        h1 {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 0.7rem;
            margin: 0;
        }

        p {
            font-size: 0.7rem;
        }

        h2 {
            max-width: 95%;
        }

        .link-page7 {
            padding: 0.5rem;
            font-size: 0.7rem;
        }

        .button-page1,
        .buttonL-page2,
        .buttonR-page2,
        .buttonL-page3,
        .buttonR-page3,
        .buttonL-page4,
        .buttonR-page4,
        .buttonL-page5,
        .buttonR-page5,
        .buttonL-page6,
        .buttonR-page6,
        .buttonL-page7,
        .buttonR-page7,
        .buttonL-page8,
        .buttonR-page8 {
            width: 6rem;
            font-size: 1rem;
            margin-bottom: 2rem;
        }
    }
</style>
