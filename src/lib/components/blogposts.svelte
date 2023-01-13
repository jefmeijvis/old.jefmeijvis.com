<script lang="ts">
	import { page } from "$app/stores";
	import { filter } from "$lib/stores";
	import type { Post } from "src/routes/blog/[slug]/post";
	import PostPreview from "./postPreview.svelte";
    export let posts : Post[];
    export let count = -1;

    function applyFilter(post : Post) : boolean
    {
        if(!$page.url.href.includes("/blog"))
            return true;

        if($filter == "")
            return true;

        let f = $filter.replaceAll(" ","")
        let searches : string[] = f.split(",");

        for(let i = 0 ; i < searches.length ; i++)
        {
            let keyword : string = searches[i];
            if(keyword == "")
                continue;

            if(matchPostKeyword(post,keyword))
                return true;
        }

        return false;
    }

    function matchPostKeyword(post : Post, keyword : string) : boolean
    {
        keyword = keyword.toLowerCase();

        if(post.title.toLowerCase().includes(keyword))
            return true;

        if(post.description.toLowerCase().includes(keyword))
            return true;

        for(let i = 0 ; i < post.tags.length ; i++)
        {
            let tag = post.tags[i].toLowerCase();
            if(tag.includes(keyword))
            return true;
        }

        return false;
    }
</script>

<div>
{#key $filter}
{#if posts && posts.length > 0}
        {#each posts as post, index}
            {#if (count == -1 || count > index ) && applyFilter(post)}
                <PostPreview {post}></PostPreview>
            {/if}
        {/each}
{/if}
{/key}
</div>


<style>
    div
    {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
</style>