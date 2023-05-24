<script lang="ts">
	import { page } from "$app/stores";
	import { Action, Element } from "$lib/ts/enums";
	import type { Post } from "./post";

    export let post : Post;
    export let timestamp : string;

    let open : boolean = false;

    function toggle()
    {
        open = !open;
        let p : string = $page.url.href.toString();
        let element : Element = Element.BlogpostInformation;
        let action : Action = open ? Action.Open : Action.Close;
        let body : {page : string, action : Action, element : Element} = {page : p ,element : element ,action : action};
        fetch('../api/action',{method : 'POST', body : JSON.stringify(body)})
    }

    
</script>


<h3 on:keydown={toggle} on:click={toggle}>{open ? "▲" : "▼"} Post information </h3>

<div class:open="{open}" class:close="{!open}">
    <table class="table-desktop">
        <tr>
            <td class="key">Author</td>
            <td>{post.author}</td>
            <td class="key">Publish date</td>
            <td>{post.date}</td>
        </tr>

        <tr>
            <td class="key">Title</td>
            <td>{post.title}</td>
            <td class="key">Id</td>
            <td>{post.id}</td>
        </tr>

        <tr>
            <td class="key">Source</td>
            <td><a href="{'https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/content/' + post.filename}">{post.filename}</a></td>
            <td class="key">Render timestamp</td>
            <td>{timestamp}</td>
        </tr>

        <tr>
            <td class="key">Views</td>
            <td>{post.views}</td>
            <td class="key">Tags</td>
            <td>{post?.tags?.join(", ") ?? ""}</td>
        </tr>
    </table>


    <table class="table-mobile">
        <tr>
            <td class="key">Author</td>
            <td>{post.author}</td>
        </tr>
        <tr>
            <td class="key">Publish date</td>
            <td>{post.date}</td>
        </tr>
        <tr>
            <td class="key">Title</td>
            <td>{post.title}</td>
        </tr>
        <tr>
            <td class="key">Id</td>
            <td>{post.id}</td>
        </tr>
        <tr>
            <td class="key">Source</td>
            <td><a href="https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/content/001-csharp-extension-methods.md">{post.filename}</a></td>
        </tr>
        <tr>
            <td class="key">Render timestamp</td>
            <td>{timestamp}</td>
        </tr>
        <tr>
            <td class="key">Views</td>
            <td>{post.views}</td>
        </tr>
        <tr>
            <td class="key">Tags</td>
            <td>{post?.tags?.join(", ") ?? ""}</td>
        </tr>
    </table>
</div>

<style>
    .key
    {
        font-weight: bold;
    }
    div
     {
        overflow: hidden;
     }


    .open
    {
        height : auto;
        transform: ease all .25s;
        padding : .25rem;
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
        margin-top: .5rem;
        margin-bottom: .5rem;
        border-collapse: collapse;
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
