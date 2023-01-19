<script lang="ts">
	import type { Post } from "src/routes/blog/[slug]/post";
	import PostSquare from "./postSquare.svelte";
    export let posts : Post[];
    let sortedPosts = posts.map(x => x).sort((a : Post, b : Post) => b.views - a.views);
    let p1 = sortedPosts[0];
    let p2 = sortedPosts[1];
    let p3 = sortedPosts[2];
</script>

<article class="container">
    <PostSquare post={p1}/>
    <PostSquare post={p2}/>
    <PostSquare post={p3}/>
</article>

<style>
    .container
    {
        width : 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border-radius: 1rem;
        margin-bottom: 2rem;
        cursor:pointer;
   }

    @media (max-aspect-ratio: 1/1) 
    {
        .container
        {
            flex-direction: column;
        }
    }
</style>