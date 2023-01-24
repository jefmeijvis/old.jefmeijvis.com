<script lang="ts">
	import { page } from "$app/stores";
	import { filter } from "$lib/stores";
	import type { Post } from "src/routes/blog/[slug]/post";
    export let post : Post;

    function click(e : any,tag : string)
    {
        e.stopPropagation();

        if(!$page.url.href.includes("/blog"))
            return;

        let s : string = tag + ", "
        if(!$filter.includes(s))
            $filter += s;

    }
</script>

<p>
    Tags: 
    {#each post.tags as tag}
        <button on:click={()=>click(event,tag)}>{tag}</button>
    {/each}
</p>

<style>
    p
    {
        font-size: 1rem;
    }
    button
    {
        background-color: var(--color-accent);
        color: var(--color-text-secondary);
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

    @media (max-aspect-ratio: 1/1) 
    {
        p
        {
            text-align: center;
        }
    }
</style>