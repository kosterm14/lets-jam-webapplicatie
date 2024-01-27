<script>
    export let data;
</script>

<header>
    <section>
        <h4 class="line">Over</h4>
    </section>
</header>

<main>
    <h1>
        {#each data.overs as over}
            {over?.title}
        {/each}
    </h1>

    <section class="text">
        {#each data.overs as over}
            {@html over?.text.html}
        {/each}
    </section>
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

    section {
        width: 50%;
    }

    .line {
        text-transform: uppercase;
        background-color: var(--vtSec-DarkBlue);
        color: var(--vtWhite);
        font-family: var(--vtPrimaryFont);
        font-size: 0.9rem;
        padding-left: 18.5%;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        margin-top: 0%;
        width: 100vw;
        display: flex;
        align-items: center;
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
            padding-left: 14.5%;
        }
    }
</style>
