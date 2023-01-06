<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
    import SvelteMarkdown from 'svelte-markdown';
	import type { Post } from './post';
    import renderers from './renderers';
	import TableOfContents from './tableOfContents.svelte';

    export let data: { id : number, slug : string , post : Post, timestamp : string};

    let source = data.post.markdown;

    // Reload the markdown from the pageload data
    afterNavigate(() => DoAfterNavigate());

    function DoAfterNavigate()
    {
        source=data.post.markdown;
        console.log("loaded " + $page.url.href)
    }

</script>

<svelte:head>
    <title>{data.post.title} - Jef Meijvis</title>
</svelte:head>

<a href="/blog">Back to overview</a>

<h1 id="top">{data.post.title}</h1>

<TableOfContents tableOfContents={data.post.tableOfContents}></TableOfContents>

<SvelteMarkdown {source} {renderers}/>

<a href="#top">Back to top</a>
