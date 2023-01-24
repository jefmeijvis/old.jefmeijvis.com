<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Post } from "src/routes/blog/[slug]/post";
    export let post : Post;

    function click()
    {
        goto('/blog/' + post.filename.replace(".md","") + "?ref=most-popular") 
    }
</script>

<div class="post" on:click={click} on:keypress={click} >
    <img src={post.image} alt={post.description}/>
    <h1>{post.title}</h1>
    <h3>{post.views} views</h3>
</div>

<style>
    h1
    {
        text-align: center;
        font-size: 1.2rem;
    }

    h3
    {
        text-align: center;
        font-size: 1rem;
    }
    
    .post
    {
        margin : .5rem;
        width : calc(33.33% - 1rem);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 0.1rem 8px;
        border-radius: 1rem;
        cursor:pointer;
        background-color: var(--color-card-background);
    }

    img
    {
        display: block;
        width : 80%;
        margin:auto;
    }

    div
    {
        transition: all ease .25s;
    }

    div:hover
    {
        transform: translate(0,-0.2rem);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 0.3rem 8px;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        img
        {
            width : 40%;
        }
        .post
        {
            width : calc(100% - 1rem);
            padding-bottom: 1rem;
        }
    }

</style>
