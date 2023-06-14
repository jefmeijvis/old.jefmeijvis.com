<script lang="ts">
	import Blogposts from "$lib/components/blogposts.svelte";
	import Filter from "$lib/components/filter.svelte";
	import type { Post } from "./[slug]/post";
	export let data : { posts : Post[]}

	function getPostRate() : number
	{
		let date_1 = new Date('10/16/2021');
		let date_2 = new Date();

		let difference = Math.abs(date_1.getTime() - date_2.getTime());
		let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

		let daysBetweenPosts =  Math.ceil(TotalDays / data.posts.length);
		return daysBetweenPosts;
	}
</script>

<svelte:head><title>Blog - Jef Meijvis</title></svelte:head>

<h1>Blog</h1>

<p>
	I've been writing blogposts here since 2021.
	So far I have written {data.posts.length} posts. 
	That means that on average, I write a post every {getPostRate()} days! 
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