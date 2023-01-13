<script lang="ts">
	import { filter } from "$lib/stores";
	import type { Post } from "src/routes/blog/[slug]/post";
    export let post : Post;

    function click(e : any,tag : string)
    {
        let s : string = tag + ", "
        if(!$filter.includes(s))
            $filter += s;

        e.stopPropagation();
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

    @media (max-aspect-ratio: 1/1) 
    {
        button
        {
            background-color: rgb(187, 215, 250);
        }
        p
        {
            text-align: center;
        }
    }
</style>