<script lang="ts">
	import Blogposts from "$lib/components/blogposts.svelte";
	import Intro from "$lib/components/intro.svelte";
	import MostViewed from "$lib/components/mostViewed.svelte";
	import type { Post } from "./blog/[slug]/post";
	export let data : { posts : Post[]}
</script>

<svelte:head><title>Jef Meijvis</title></svelte:head>

<Intro/>
<h2>Most popular:</h2>
<MostViewed posts={data.posts}></MostViewed>
<h2>Most recent blogposts:</h2>
<Blogposts count={5} posts={data.posts}></Blogposts>
<a href="/blog">See all blogposts</a>