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
                    "Graphics are the doorway to big picture thinking and to
                    system thinking. <br />
                    For visual thinking it is important to graphics as a process,
                    rather then an artifact." <br />
                    - David Sibbet, Visual Meetings
                </h1>

                <h2 class="h2-page1">
                    In deze minicursus krijg je een introductie opdracht over
                    het tekenen van structuur en kleur. <br /> Pak een vel papier
                    en een aantal stiften van verschillende diktes om mee te doen.
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
                <h1 class="h1-page2">
                    Teken het proces van je ontbijt van vanochtend
                </h1>

                <img
                    class="img-page2"
                    src="/Proces-ontbijt-ezgif.com-video-to-gif-converter.gif"
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
                    De structuur van je visualisatie is van <br /> belang: gaat
                    het over een verandering <br /> van A naar B? Zijn het losse
                    brokken <br />
                    informatie die wel met elkaar te maken <br /> hebben? Is
                    tijd een factor? Gaat het <br /> over een bepaald doel dat
                    je wil behalen <br /> en de stappen die je daarvoor wil
                    <br />
                    zetten? Gaat het over plus en <br />
                    minpunten? Is er een centraal <br /> onderwerp waar meerdere
                    elementen uit <br /> voort komen?
                </p>

                <p class="p-page3">
                    Het gebruiken van een duidelijke <br />
                    structuur helpt bij het begrijpen en <br /> overbrengen van complexe
                    informatie.
                </p>

                <button class="buttonR-page3" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 4}
            <button class="buttonL-page4" on:click={previousPage}>Vorige</button
            >

            <section class="background-page4">
                <h1 class="h1-page4">
                    “You basically only need a combination of black and gray,
                    with thick and thin lines. <br /> Gray can be used for
                    either a sketching line or for shadowing. <br /> Finally use
                    color to highlight important elements.” <br /> Willemien Brand
                    - Visual thinking
                </h1>

                <button class="buttonR-page4" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 5}
            <button class="buttonL-page5" on:click={previousPage}>Vorige</button
            >

            <section class="background-page5">
                <section>
                    <h1 class="h1-page5">
                        Je hebt net je ontbijt getekend. <br /> Voeg nu kleur en
                        schaduw toe aan de <br /> tekening.
                    </h1>

                    <p class="p-page5">
                        Tips: gebruik niet meer dan twee kleuren en wees <br />
                        consistent. <br /> Gebruik eventueel het kleurenwiel bij
                        het kiezen van <br /> een kleurenpalet.
                    </p>
                </section>

                <img
                    class="img-page5"
                    src="/Kleurenwiel-ezgif.com-video-to-gif-converter.gif"
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
                <h1 class="h1-page6">Meer over structuur en kleur</h1>

                <p class="p-page6">
                    Er zijn allerlei cursussen, websites en <br /> boeken te
                    vinden over hoe je structuur en <br /> kleur kan toepassen
                    in je getekende <br />
                    visualisaties. Kijk eens op:
                </p>

                <section class="link-page6">
                    <a href="http://www.grovetools-inc.com" target="_blank"
                        >www.grovetools-inc.com</a
                    >
                </section>
                <section class="link-page6">
                    <a
                        href="http://www.davidsibbet.com/process-models/"
                        target="_blank"
                    >
                        www.davidsibbet.com/process-models/
                    </a>
                </section>
                <section class="link-page6">
                    <a
                        href="https://www.youtube.com/watch?v=N1fuoXhjXlo"
                        target="_blank"
                    >
                        www.youtube.com/watch?v=N1fuoXhjXlo <br /> (Brandy Agerbeck
                        - How to use Color Combos)
                    </a>
                </section>

                <button class="buttonR-page6" on:click={nextPage}
                    >Volgende</button
                >
            </section>
        {:else if page === 7}
            <button class="buttonL-page7" on:click={previousPage}>Vorige</button
            >

            <section class="background-page7">
                <h1 class="h1-page7">Gefeliciteerd!</h1>

                <img class="img-page7" src="/page7.svg" alt="" />

                <h2 class="h2-page7">
                    Je hebt de minicursus structuur en kleur afgerond. <br /> Succes
                    met Visual Thinking!
                </h2>

                <p class="p-page7">
                    “There is no more powerful way to prove <br /> that you know
                    something well than to draw <br /> a simple picture of it.” -
                    Dan Roam
                </p>

                <a href="/minicursussen">
                    <button class="buttonR-page7">Rond af</button>
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
    .background-page7 {
        height: 90%;
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .background-page5 {
        flex-direction: row;
        justify-content: space-evenly;
    }

    .background-page1,
    .background-page7 {
        background-color: var(--vtDarkBlue);
    }

    .background-page2,
    .background-page3,
    .background-page4,
    .background-page5,
    .background-page6 {
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
    .h2-page7 {
        color: var(--vtWhite);
        font-family: var(--vtPrimaryFont);
        display: inline;
        text-align: center;
    }

    .h1-page5 {
        text-align: left;
    }

    .h1-page6 {
        margin-bottom: 0rem;
    }

    .h1-page2,
    .h1-page4,
    .h1-page5,
    .h1-page6 {
        color: var(--vtDarkBlue);
    }

    h1 {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 1rem;
        margin: 0;
    }

    p {
        font-size: 1rem;
    }

    .p-page3,
    .p-page5,
    .p-page6,
    .p-page7 {
        color: var(--vtDarkBlue);
        font-family: var(--vtPrimaryFont);
        /* font-size: 1.2rem; */
    }

    .p-page7 {
        color: var(--vtWhite);
        font-size: 1rem;
        text-align: center;
        margin-top: 2rem;
    }

    .img-page1 {
        transform: rotate(90deg);
        width: 7%;
    }

    .img-page2 {
        width: 40%;
    }

    .img-page5 {
        width: 40%;
    }

    .img-page7 {
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
    .buttonR-page7 {
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
    .buttonR-page7 {
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
    .buttonL-page7 {
        left: 0;
        bottom: 0;
        position: absolute;
        margin-left: 3rem;
    }

    .button-page1,
    .buttonL-page7,
    .buttonR-page7 {
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
    .buttonR-page6 {
        border: 1px solid var(--vtWhite);
        background: var(--vtDarkBlue);
        color: var(--vtWhite);
    }

    .link-page6 {
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

        .link-page6 {
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
        .buttonR-page7 {
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

        .link-page6 {
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
        .buttonR-page7 {
            width: 6rem;
            font-size: 1rem;
            margin-bottom: 2rem;
        }
    }
</style>
