<script>
  import Header from "$lib/molecules/header.svelte";
  import BlogBorder from "$lib/atoms/blogBorder.svelte";
  import BlogText from "$lib/atoms/blogText.svelte";
  import BlogButton from "$lib/atoms/blogButton.svelte";
  import BlogHex from "$lib/atoms/blogHex.svelte";
  import Footer from "$lib/molecules/footer.svelte";
  import Blog from "$lib/organisms/blog.svelte"

  export let data;
</script>

<Header />

<!-- <BlogText /> -->
<Blog/>
<BlogBorder data={data}/>
<!-- <BlogButton /> -->
<BlogHex />
<Footer />
