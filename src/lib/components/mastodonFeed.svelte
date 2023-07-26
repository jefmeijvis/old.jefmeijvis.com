<script lang="ts">
	import { goto } from "$app/navigation";
	import { light } from "$lib/stores";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
    let feed : any;

    onMount(async ()=>getData())

    async function getData()
    {
        let res : any = await fetch("/api/mastodon");
        feed = await res.json();
    }
</script>

<div class="container">
    <img class="mastodon" alt="mastodon" src="{$light ? '/mastodon.png' : '/mastodon-dark.png'}"/>
    {#if feed}
        {#each feed as post}
        <div in:fade class="post">
            <button title="Visit Jef Meijvis on mastodon.social" on:click={()=>goto(post.account.url)} class="profile-information">
                <img class="avatar" alt="avatar" src={post.account.avatar}/>
                <div class="names">
                    <p><b>{post.account.display_name}</b></p>
                    <p class="faded">{post.account.url.replaceAll("https://","")}</p>
                    <p class="faded">{(new Date(post.created_at)).toUTCString().substring(0,17)}</p>
                </div>
            </button>
            <div class="post-body">
                {@html post.content}
            </div>
            <button title="Open on mastodon.social" class="post-link" on:click={()=>goto(post.url)}>
                <img style="{$light ? '' : 'filter:invert();'}" class="image-button" alt="open" src="open.png"/>
            </button>
        </div>
        {/each}
    {/if}
</div>

<style>
    .image-button
    {
        width : 1.5rem;
        opacity: 80%;
    }

    .post-link
    {
        margin: 1rem;
        cursor:pointer;
        background: none;
        border:none;
        transition: all ease .25s;
        margin-left: 95%;;
    }

    .post-link:hover
    {
        opacity: 50%;;
    }
    .mastodon
    {
        height : 5rem;
        display: block;
        margin:auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .post-body
    {
        padding: .5rem;
        opacity: 80%;
    }
    .names
    {
        padding: .5rem;
    }
    .faded
    {
        opacity: 50%;
        font-size: 1rem;
    }
    .profile-information
    {
        display: flex;
        background: none;
        cursor:pointer;
        border:none;
        text-align: left;
        transition: all ease .25s;
    }

    .profile-information:hover
    {
        opacity: 50%;
    }
    .post
    {
        margin-bottom: 1rem;
        padding-top: 1rem;
        border-top: 1px rgba(0, 0, 0, 0.15) solid;
    }

    .avatar
    {
        width: 5rem;
        border-radius: .5rem;
        margin: .5rem;
    }

    .container
    {
        margin-top: 4rem;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background-color: var(--color-card-background);
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .post-link
        {

            margin-left: 90%;;
        }
    }
</style>