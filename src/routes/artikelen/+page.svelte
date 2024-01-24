<script>
  import Header from "$lib/molecules/header.svelte";
  import BlogBorder from "$lib/atoms/blogBorder.svelte";
  import Footer from "$lib/molecules/footer.svelte";
  import Blog from "$lib/organisms/blog.svelte"

  export let data;
</script>

<Header />


<Blog/>
<BlogBorder data={data}/>
<Footer />
