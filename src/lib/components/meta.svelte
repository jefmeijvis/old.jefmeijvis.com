<script lang="ts">
    import { page } from '$app/stores'; 
</script>

<svelte:head>
    {#if !$page.url.pathname.includes("/post/")}
        <meta name="image" property="og:image" content="https://www.jefmeijvis.com/images/opengraph.png">
        <meta name="twitter:image" content="https://www.jefmeijvis.com/images/opengraph.png">
        <meta name="twitter:title" content="Software blogging about Microsoft Azure and .NET">
        <meta name="twitter:description" content="Software blogging about Microsoft Azure and .NET">
    {/if}
    <meta name="description" content="Software blogging about Microsoft Azure and .NET">
    <meta property="og:site_name" content="Jef Meijvis" />
    <meta property=“og:title” content="Software blogging about Microsoft Azure and .NET" />
    <meta property="og:description" content="Software blogging about Microsoft Azure and .NET" />
    <meta property="og:url" content="https://www.jefmeijvis.com" />
    <meta property="og:type" content="article" />
    <meta property="article:publisher" content="https://www.jefmeijvis.com/about" />
    <meta property="article:author" content="Jef Meijvis" />
    <meta property="article:section" content="Coding" />
    <meta property="article:tag" content="Coding" />
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@jefmeijvis">
    <meta name="twitter:creator" content="@jefmeijvis">
</svelte:head>


