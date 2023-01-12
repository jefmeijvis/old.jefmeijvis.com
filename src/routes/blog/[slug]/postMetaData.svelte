<script lang="ts">
	import type { Post } from "./post";

    export let post : Post;
    export let timestamp : string;

    let open : boolean = false;

    function toggle()
    {
        open = !open
    }
</script>


<h3 on:keydown={toggle} on:click={toggle}>{open ? "▲" : "▼"} Post information </h3>

<div class:open="{open}" class:close="{!open}">
    <table class="table-desktop">
        <tr>
            <td>Author</td>
            <td>{post.author}</td>
            <td>Publish date</td>
            <td>{post.date}</td>
        </tr>

        <tr>
            <td>Title</td>
            <td>{post.title}</td>
            <td>Id</td>
            <td>{post.id}</td>
        </tr>

        <tr>
            <td>Source</td>
            <td><a href="https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/content/001-csharp-extension-methods.md">{post.filename}</a></td>
            <td>Render timestamp</td>
            <td>{timestamp}</td>
        </tr>

        <tr>
            <td>Views</td>
            <td>{post.views}</td>
            <td>Tags</td>
            <td>{post.tags.join(", ")}</td>
        </tr>
    </table>


    <table class="table-mobile">
        <tr>
            <td>Author</td>
            <td>{post.author}</td>
        </tr>
        <tr>
            <td>Publish date</td>
            <td>{post.date}</td>
        </tr>
        <tr>
            <td>Title</td>
            <td>{post.title}</td>
        </tr>
        <tr>
            <td>Id</td>
            <td>{post.id}</td>
        </tr>
        <tr>
            <td>Source</td>
            <td><a href="https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/content/001-csharp-extension-methods.md">{post.filename}</a></td>
        </tr>
        <tr>
            <td>Render timestamp</td>
            <td>{timestamp}</td>
        </tr>
        <tr>
            <td>Views</td>
            <td>{post.views}</td>
        </tr>
        <tr>
            <td>Tags</td>
            <td>{post.tags.join(", ")}</td>
        </tr>
    </table>
</div>

<style>
    div
     {
        overflow: hidden;
     }

    .open
    {
        height : auto;
        transform: ease all .25s;
    }

    .close
    {
        height : 0rem;
    }
    td
    {
        font-weight: 300;
    }

    .table-desktop,.table-mobile
    {
        width : 100%;
        padding : .5rem;
        border-radius: .5rem;
        margin-top: .5rem;
        margin-bottom: .5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    h3
    {
        cursor:pointer;
    }

    h3:hover
    {
        opacity: 70%;
    }

    .table-mobile
    {
        display: none;
    }

    @media (max-width: 60rem) 
    {
        .table-desktop
        {
            display: none;
        }

        .table-mobile
        {
            display: block;
        }
    }
</style>
