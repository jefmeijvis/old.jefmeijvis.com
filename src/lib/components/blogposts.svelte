<script lang="ts">
	import type { Post } from "src/routes/blog/[slug]/post";
	import PostPreview from "./postPreview.svelte";
    export let posts : Post[];
    export let count = -1;
</script>

{#if posts && posts.length > 0}
        {#each posts as post, index}
            {#if count == -1 || count > index }
                <PostPreview {post}></PostPreview>
            {/if}
        {/each}
{/if}