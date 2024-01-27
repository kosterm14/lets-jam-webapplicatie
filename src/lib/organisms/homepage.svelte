<script>
    import HomepageText from "$lib/atoms/homepageText.svelte";

    import HomepageImg1 from "$lib/atoms/homepageImg1.svelte";
    import HomepageImg2 from "$lib/atoms/homepageImg2.svelte";

    import HomepageHexBlue from "$lib/atoms/homepageHexBlue.svelte";
    import HomepageHexYellow from "$lib/atoms/homepageHexYellow.svelte";
    import HomepageHexLightBlue from "$lib/atoms/homepageHexLightBlue.svelte";
    import HomepageHexRed from "$lib/atoms/homepageHexRed.svelte";
    import HomepageHexGray1 from "$lib/atoms/homepageHexGray1.svelte";
    import HomepageHexGray2 from "$lib/atoms/homepageHexGray2.svelte";

    export let loading = false;
    export let data = {};
</script>

<div class="grid-container {loading ? 'animate' : ''}">
    <HomepageText {data} />

    <HomepageImg1 {data} />
    <HomepageImg2 {data} />

    <HomepageHexBlue />
    <HomepageHexYellow />
    <HomepageHexGray1 />
    <HomepageHexLightBlue />
    <HomepageHexRed />
    <HomepageHexGray2 />
</div>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: auto;
        margin-top: 5%;
        margin-bottom: 5%;
        justify-content: center;
        /* animation: appear 4s forwards; */
    }

    .animate {
        animation: appear 5.5s forwards;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        .grid-container {
            margin-top: 0%;
        }

        .animate {
            animation: none;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        .grid-container {
            margin-top: -75%;
            /* justify-content: normal; */
            scale: 0.75;
            margin-bottom: -40%;
        }

        .animate {
            animation: none;
        }
    }
</style>
