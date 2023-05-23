<script lang="ts">
    import {afterNavigate} from '$app/navigation';
    import {page} from "$app/stores"

    let clientWidth : number;
    let clientHeight : number;
    let url = "https://platform.jefmeijvis.com/api/logging";

    afterNavigate(afterNavigateHandler)

    async function afterNavigateHandler()
    {
        console.log("NavigationHandler")
        if(!createVisitLog())
            return;
        
        let requestInit = 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(getBody())
        }
        fetch(url,requestInit);
    }

    function getBody()
    {
        let body = 
        {
            project: "bikefeelings",
            page: $page.url.hostname + $page.url.pathname,
            client_width: clientWidth,
            client_height: clientHeight,
        }
        return body;
    }

    function createVisitLog()
    {
        let url = $page.url.hostname + $page.url.pathname;
        if(url.includes("localhost"))
        {
            console.log("🧾 Ignoring page log visit with reason : includes localhost");
            return false;
        }

        if(url.includes(".vercel"))
        {
            console.log("🧾 Ignoring page log visit with reason : includes .vercel");
            return false;
        }

        return true;
    }
</script>

<svelte:window bind:outerWidth={clientWidth} bind:outerHeight={clientHeight} />


