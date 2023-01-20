<script lang="ts">
	import Blogposts from "$lib/components/blogposts.svelte";
	import Filter from "$lib/components/filter.svelte";
	import type { Post } from "./[slug]/post";
	export let data : { posts : Post[]}
</script>

<svelte:head><title>Blog - Jef Meijvis</title></svelte:head>

<h1>Blog</h1>

<p>
	I've been writing blogposts here since 2021.
	So far I have written {data.posts.length} posts.
	I aim at writing around 1 post each month, but the actual really depends on lots of things.
</p>

<p>
	Below there is a searchbar that can be used to search title, description and tags.
</p>



<Filter></Filter>

<Blogposts posts={data.posts}></Blogposts>

<style>
	p
	{
		font-weight: 300;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>