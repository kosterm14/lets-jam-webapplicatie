<script>
    import { onMount, onDestroy } from "svelte";

    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";

    import Homepage from "$lib/organisms/homepage.svelte";

    import LoadingScreen from "$lib/organisms/loadingScreen.svelte";

    let loading = true;
    let loadingContent = false;

    if (loading) {
        loadingContent = false;
        setTimeout(() => {
            loadingContent = true;
        }, 4000);
    }

    function handleKeyDown(event) {
        if (event.key === "L" || event.key === "l") {
            loading = true;
            setTimeout(() => {
                loading = false;
            }, 11000);
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
                }, 11000);
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
    {#if loadingContent}
        <Header />
        <Homepage />
        <Footer />
    {/if}
{:else}
    <Header />
    <Homepage />
    <Footer />
{/if}
