<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Kofi from '$lib/components/kofi.svelte';
	import Utterances from '$lib/components/utterances.svelte';
    import SvelteMarkdown from 'svelte-markdown';
	import type { Post } from './post';
	import PostMetaData from './postMetaData.svelte';
    import renderers from './renderers';
	import TableOfContents from './tableOfContents.svelte';
	import Share from '$lib/components/share.svelte';

    export let data: { id : number, slug : string , post : Post, timestamp : string};

    let source = data.post.markdown;
    let og : string = "https://www.jefmeijvis.com/post/" + data.post.filename.slice(0,3) + "/opengraph.png";

    // Reload the markdown from the pageload data
    afterNavigate(() => DoAfterNavigate());

    function DoAfterNavigate()
    {
        source=data.post.markdown;
    }
</script>

<svelte:head>
    <title>{data.post.title} - Jef Meijvis</title>
    <meta name="image" property="og:image" content={og}>
    <meta name="twitter:image" content={og}>
    <meta name="twitter:title" content={data.post.title}>
    <meta name="twitter:text:title" content={data.post.title}>
    <meta name="twitter:description" content={data.post.description}>
</svelte:head>

<div id="blogpost-main-content">
<a href="/blog">Back to overview</a>

<h1 id="top">{data.post.title}</h1>

<PostMetaData {og} timestamp={data.timestamp} post={data.post}></PostMetaData>
<TableOfContents tableOfContents={data.post.tableOfContents}></TableOfContents>
<Share post={data.post}></Share>
<SvelteMarkdown {source} {renderers}/>

<a href="#top">Back to top</a>

<Kofi></Kofi>
<Utterances name={data.post.title}></Utterances>

</div>
<style>
    div
    {
        width : 100%;
    }

    a
    {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display:block;
    }
</style>
