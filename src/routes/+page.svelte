<script lang="ts">
	import Blogposts from "$lib/components/blogposts.svelte";
	import Intro from "$lib/components/intro.svelte";
	import type { Post } from "./blog/[slug]/post";
	export let data : { posts : Post[]}
</script>

<svelte:head><title>Jef Meijvis</title></svelte:head>

<Intro/>

<h2>Most recent blogposts:</h2>
<Blogposts count={3} posts={data.posts}></Blogposts>