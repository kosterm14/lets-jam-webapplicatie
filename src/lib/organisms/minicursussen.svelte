<header>
    <section>
        <h4 class="line">Minicursussen</h4>
    </section>
</header>

<main>
    <section class="grid-container">
        <section class="hex1" />

        <section class="h3-hex1">
            <a href="/minicursussen/structuur-en-kleur">
                <h3>
                    <em>Structuur en kleur</em>
                </h3>
                <img src="/arrows.svg" alt="" />
            </a>
        </section>

        <section class="hex2" />

        <section class="h3-hex2">
            <a href="/minicursussen/basisvormen">
                <h3>
                    <em>Basisvormen</em>
                </h3>
                <img src="/arrows.svg" alt="" />
            </a>
        </section>

        <section class="h1">
            <h1>Minicursussen</h1>
            <h2>
                Maak een keuze uit een <br /> van de vier minicursussen
            </h2>
        </section>

        <section class="hex3" />

        <section class="h3-hex3">
            <a href="/minicursussen/mensen-tekenen">
                <h3>
                    <em>Mensen tekenen</em>
                </h3>
                <img src="/arrows.svg" alt="" />
            </a>
        </section>

        <section class="hex4" />

        <section class="h3-hex4">
            <a href="/minicursussen/handlettering">
                <h3>
                    <em>Handlettering</em>
                </h3>
                <img src="/arrows.svg" alt="" />
            </a>
        </section>
    </section>
</main>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: auto;
        margin-top: 10%;
        margin-bottom: 5%;
        justify-content: center;
    }

    .h1 {
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 1;

        text-align: center;
    }

    h1 {
        font-size: 2rem;
        font-family: var(--vtPrimaryFont);
        color: var(--vtDarkBlue);
    }

    h2 {
        font-size: 1rem;
        font-family: var(--vtSecondaryFont);
        color: var(--vtDarkBlue);
    }

    .h3-hex1,
    .h3-hex2,
    .h3-hex3,
    .h3-hex4 {
        color: var(--vtWhite);

        z-index: 1;
        display: grid;
        text-align: center;
        justify-items: center;
        align-content: center;
    }

    .hex1,
    .h3-hex1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;

        margin-top: -10%;
    }

    .hex2,
    .h3-hex2 {
        grid-column-start: 6;
        grid-column-end: 8;
        grid-row-start: 1;

        margin-top: -10%;
    }

    .hex3,
    .h3-hex3 {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;

        margin-top: -10%;
    }

    .hex4,
    .h3-hex4 {
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 2;

        margin-top: -10%;
    }

    .hex1,
    .hex2,
    .hex3,
    .hex4 {
        background: var(--vtRed);

        width: 300px;
        height: 275px;
        clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
        );
        transform: rotate(90deg);
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: var(--vtWhite);
    }

    em {
        font-family: var(--vtPrimaryFont);
        font-style: normal;

        font-size: 1rem;
    }

    .line {
        text-transform: uppercase;
        background-color: var(--vtRed);
        color: var(--vtWhite);
        font-family: var(--vtPrimaryFont);
        font-size: 0.9rem;
        padding-left: 9%;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        margin-top: 0%;
        width: 100vw;
        display: flex;
        align-items: center;
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        .line {
            padding-left: 20%;
        }

        .h1 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;

            text-align: center;
        }

        h1 {
            margin-bottom: 1rem;
        }

        .hex1,
        .h3-hex1 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;

            margin-top: 10%;
        }

        .hex2,
        .h3-hex2 {
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 2;

            margin-top: 10%;
        }

        .hex3,
        .h3-hex3 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 3;

            margin-top: 15%;
        }

        .hex4,
        .h3-hex4 {
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 3;

            margin-top: 15%;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        .line {
            padding-left: 11%;
        }

        .h1 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;

            text-align: center;
        }

        h1 {
            margin-bottom: 1rem;
        }

        .hex1,
        .h3-hex1 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;

            margin-top: 10%;
        }

        .hex2,
        .h3-hex2 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 3;

            margin-top: 15%;
        }

        .hex3,
        .h3-hex3 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 4;

            margin-top: 15%;
        }

        .hex4,
        .h3-hex4 {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 5;

            margin-top: 15%;
        }
    }
</style>
