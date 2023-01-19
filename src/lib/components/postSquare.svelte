<script lang="ts">
	import type { Post } from "src/routes/blog/[slug]/post";
    export let post : Post;
</script>

<div class="post" >
    <img src={post.image} alt={post.description}/>
    <h1>{post.title}</h1>
    <h1>{post.views} views</h1>
</div>

<style>
    h1
    {
        text-align: center;
        font-size: 1.2rem;
    }
    .post
    {
        width : calc(33% - 2rem);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin : 1rem;
        border-radius: 1rem;
        cursor:pointer;
    }

    img
    {
        display: block;
        width : 80%;
        margin:auto;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        img
        {
            width : 40%;
        }
        .post
        {
            width : calc(100% - 2rem);
            padding-bottom: 1rem;
        }
    }

</style>
