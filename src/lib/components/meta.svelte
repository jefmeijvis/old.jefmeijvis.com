<script lang="ts">
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
    import { page } from '$app/stores'; 

    afterNavigate(callback);

    async function callback(nav : any)
    {
        if(!browser)
            return;
        
        let lang:string = window.navigator.language;
        let ua : string = window.navigator.userAgent;
        let page : string = nav.to.url.href;
        let vendor : string = getBrowserName(ua);
        let body = { page : page, ua : ua , lang : lang , vendor : vendor};
        await fetch('/api/log',{method : 'POST', body : JSON.stringify(body)})
    }

    // This function is from the Mozilla documentation via
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator
    function getBrowserName(userAgent : string) : string
    {
        // The order matters here, and this may report false positives for unlisted browsers.

        if (userAgent.includes("Firefox")) {
            // "Mozilla/5.0 (X11; Linux i686; rv:104.0) Gecko/20100101 Firefox/104.0"
            return "Mozilla Firefox";
        } else if (userAgent.includes("SamsungBrowser")) {
            // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36"
            return "Samsung Internet";
        } else if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
            // "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 OPR/90.0.4480.54"
            return "Opera";
        } else if (userAgent.includes("Edge")) {
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
            return "Microsoft Edge (Legacy)";
        } else if (userAgent.includes("Edg")) {
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36 Edg/104.0.1293.70"
            return "Microsoft Edge (Chromium)";
        } else if (userAgent.includes("Chrome")) {
            // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
            return "Google Chrome or Chromium";
        } else if (userAgent.includes("Safari")) {
            // "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
            return "Apple Safari";
        } else {
            return "unknown";
        }
    }
</script>

<svelte:head>
    {#if !$page.url.pathname.includes("/blog/")}
        <meta name="image" property="og:image" content="/opengraph.png">
        <meta name="twitter:image" content="/opengraph.png">
        <meta name="twitter:title" content="Software blogging about Svelte, Security, Microsoft Azure and .NET">
        <meta name="twitter:description" content="Software blogging about Svelte, Security, Microsoft Azure and .NET">
    {/if}
    <meta name="description" content="Software blogging about Svelte, Security, Microsoft Azure and .NET">
    <meta property="og:site_name" content="Jef Meijvis" />
    <meta property=“og:title” content="Software blogging about Svelte, Security, Microsoft Azure and .NET" />
    <meta property="og:description" content="Software blogging about Svelte, Security, Microsoft Azure and .NET" />
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


