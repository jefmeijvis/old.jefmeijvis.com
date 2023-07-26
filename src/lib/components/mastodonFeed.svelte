<script lang="ts">
	import { goto } from "$app/navigation";
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
<h2>Mastodon feed</h2>
    {#if feed}
        {#each feed as post}
        <div in:fade class="post">
            <button on:click={()=>goto(post.account.url)} class="profile-information">
                <img alt="avatar" src={post.account.avatar}/>
                <div class="names">
                    <p><b>{post.account.display_name}</b></p>
                    <p class="faded">{post.account.url.replaceAll("https://","")}</p>
                    <p class="faded">{(new Date(post.created_at)).toUTCString().substring(0,17)}</p>
                </div>
            </button>
            <div class="post-body">
                {@html post.content}
            </div>
        </div>
        {/each}
    {/if}
</div>

<style>
    h2
    {
        padding: 1rem;
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
        margin-bottom: 2rem;
        padding-top: 1rem;
        border-top: 1px rgba(0, 0, 0, 0.15) solid;
    }

    img
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
</style>