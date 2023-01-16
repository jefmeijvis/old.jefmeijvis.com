<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import type { Post } from "src/routes/blog/[slug]/post";
	import { fade } from "svelte/transition";
	import PostTags from "./postTags.svelte";
    export let post : Post

    async function GetPageViews()
    {
        if(!browser)
            return;

        let response = await fetch('/api/viewcount' , {method : 'GET'})
        let parsedResponse = await response.json();
        let allViews = parsedResponse.data;
        renderTimestamp = parsedResponse.renderTimestamp;
        //@ts-ignore
        for(let i = 0 ; i < allViews.length ; i++)
        {
           if (allViews[i].id == post.id)
           {
                views =  allViews[i].views;
                return;
           }
        }
    }

    let views : number = post.views;
    let renderTimestamp : string;

    function getLink() : string
    {
        return "/blog/" + post.filename.replace(".md","") + "?ref=post-card";
    }
</script>

<article class="container" on:click="{()=>goto(getLink())}" on:keydown="{()=>goto(getLink())}">
    <div class="image">
        <img alt={post.title} src={post.image}/>
    </div>
    <div class="text">
        <h1>{post.title}</h1>
        <p class="info">
            #{post.id} |
            {views} views |
             {post.date}
        </p>
        <PostTags {post}></PostTags>
        <p class="description">{post.description}</p>
        <p class="link">Read more..</p>
    </div>
</article>

<style>
    .description
    {
        font-size: 1rem;
    }

    .info
    {
        font-size: 1rem;
    }
    img
    {
        width : 100%;
    }
    .container
    {
        width : 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom: 2rem;
        cursor:pointer;
    }

    .link
    {
        color:blue;
        font-size: 1rem;
    }

    .link:hover
    {
        text-decoration: underline;
    }

    .image
    {
        width : 20%
    }

    .text
    {
        width : 70%;
        padding : .5rem;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .container
        {
            flex-direction: column;
        }

        .image
        {
            width : 50%;
            margin:auto;
        }

        .text
        {
            margin:auto;
            width : 100%;
            padding : 0;
            background-color: rgb(239, 239, 255);
        }

        h1
        {
            text-align: center;
        }

        .info,.description
        {
            text-align: center;
        }

        .link
        {
            text-align: center;
        }

    }
</style>