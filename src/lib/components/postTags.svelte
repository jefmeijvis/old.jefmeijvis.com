<script lang="ts">
	import type { Post } from "src/routes/blog/[slug]/post";
    export let post : Post;

    function click(e : any)
    {
        e.stopPropagation();
    }
</script>

<p>
    {#each post.tags as tag}
        <button on:click={click}>{tag}</button>
    {/each}
</p>

<style>
    button
    {
        background-color: rgb(230, 241, 255);
        padding : .25rem;
        border-radius: .25rem;
        margin : .25rem;
        border:none;
        cursor:pointer;
        transition: all ease .25s;
    }

    button:hover
    {
        opacity: 75%;
        transform: translate(0,-0.25rem);
    }
</style>