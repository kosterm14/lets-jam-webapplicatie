<script>
    export let data;
</script>

<section class="h1">
    <h1>
        {#each data.homepages as homepage}
            {homepage?.title}
        {/each}
    </h1>
</section>

<section class="h2">
    <h2>
        {#each data.homepages as homepage}
            {@html homepage.text?.html}
        {/each}
    </h2>
</section>

<style>
    h1 {
        font-size: 3.157rem;
        font-family: var(--vtPrimaryFont);
        color: var(--vtDarkBlue);
        width: 25rem;
    }

    .h1 {
        grid-column-start: 3;
        grid-column-end: 7;
        grid-row-start: 1;

        text-align: center;

        width: 30rem;
        display: flex;
        justify-content: center;
    }

    h2 {
        font-size: 1rem;
        font-family: var(--vtSecondaryFont);
        line-height: 1.5rem;
        color: var(--vtDarkBlue);
    }

    .h2 {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 2;

        text-align: center;
        margin-top: -26%;
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        h1 {
            font-size: 3rem;
            margin-bottom: 4%;
        }

        .h1 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;

            margin-bottom: -5%;
        }

        .h2 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;

            margin-bottom: 10%;
            margin-top: -2%;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        h1 {
            font-size: 2.5rem;
            margin-left: 3rem;
            margin-right: 3rem;
        }

        .h1 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;

            margin-bottom: -10%;
            margin-top: 10%;
        }

        h2 {
            font-size: 1.2rem;
        }

        .h2 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;

            margin-bottom: 10%;
            margin-top: 4%;
        }
    }
</style>
