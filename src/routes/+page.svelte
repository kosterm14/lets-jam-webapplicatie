<script>
    import { onMount, onDestroy} from "svelte";

    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    import Homepage from "$lib/organisms/homepage.svelte";

    import LoadingScreen from "$lib/organisms/loadingScreen.svelte";

    let loading = true;
    let delayedLoading = false;

    $: if (loading) {
        delayedLoading = false;
        setTimeout(() => {
            delayedLoading = true;
        }, 4000);
    } else {
        delayedLoading = false;
    }

    function handleKeyDown(event) {
        if (event.key === "L" || event.key === "l") {
            loading = true;
            setTimeout(() => {
                loading = false;
            }, 7000);
        }
    }

    onMount(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", handleKeyDown);

            if (sessionStorage.getItem("alreadyLoaded")) {
                loading = false;
            } else {
                sessionStorage.setItem("alreadyLoaded", "true");
                setTimeout(() => {
                    loading = false;
                }, 3000);
            }
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("keydown", handleKeyDown);
        }
    });
</script>

{#if loading}
    <LoadingScreen />
    {#if delayedLoading}
        <Header />
        <Homepage />
        <Footer />
    {/if}
{:else}
    <Header />
    <Homepage />
    <Footer />
{/if}
