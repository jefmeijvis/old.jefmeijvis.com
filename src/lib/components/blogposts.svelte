<script lang="ts">
	import type { Post } from "src/routes/blog/[slug]/post";
    export let posts : Post[];
</script>

{#if posts && posts.length > 0}
    <ul>
        {#each posts as post}
            <li>
                <a href={"blog/" + post.filename.replace(".md","")}>{post.title}</a>
            </li>
        {/each}
    </ul>
{/if}