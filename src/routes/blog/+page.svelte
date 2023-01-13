<script lang="ts">
	import Blogposts from "$lib/components/blogposts.svelte";
	import Filter from "$lib/components/filter.svelte";
	import type { Post } from "./[slug]/post";
	export let data : { posts : Post[]}
</script>

<svelte:head><title>Blog - Jef Meijvis</title></svelte:head>

<h1>Blog</h1>

<Filter></Filter>

<Blogposts posts={data.posts}></Blogposts>