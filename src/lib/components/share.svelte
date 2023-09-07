<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { goto } from "$app/navigation";
	import { light } from "$lib/stores";
	import type { Post } from "../../routes/blog/[slug]/post";
	import ExportPdf from "./exportPDF.svelte";

    let clicked: boolean = false;

    export let post : Post
    let text = "I would like to share this post: " + post.title;
    text = text.replaceAll(" ","%20")
    text = "https://twitter.com/intent/tweet?text=" + text;
    text+= "&url=" + "https://www.jefmeijvis.com/blog/" + post.filename.slice(0,post.filename.length - 3)

    async function click()
    {
        clicked = true;
        navigator.clipboard.writeText(window.location.href);
        console.log('✍️ Copied link to clipboard');
        await sleep(1500);
        clicked = false;
    }

    function sleep(ms : number) 
    {                                                                                                                                                                                       
        return new Promise((resolve) => setTimeout(resolve, ms));                                                                                                                                                
    }

    function twitter()
    {
        goto(text);
    }
    </script>


<p>Share this post: 
    <button on:click={twitter} title="Share this post on x.com"><img class="{$light ? '' : 'dark'}" alt="Share on x.com" src="/x.png"/></button>
    <button on:click={click} title="Copy post url to clipboard">
        {#if !clicked}
            <img in:fade class="{$light ? '' : 'dark'}" alt="Copy URL to clipboard" src="/link.png"/>
        {:else}
            <span in:fade>Link copied to clipboard!</span>
        {/if}
    </button>
    <ExportPdf {post}></ExportPdf>
</p>

<style>
    .dark
    {
        filter:invert();
    }
    button
    {
        background: none;
        border:none;
        cursor:pointer;
        transition: all .25s;
        padding: .25rem;
        border-radius: .25rem;
        margin-top: .25rem;
        font-family: 'Noto';
    }

    button:hover
    {
        background-color: rgb(220,220,220);
    }

    img
    {
        width: 1.5rem;
    }
</style>