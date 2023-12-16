<script lang="ts">
	import { goto } from "$app/navigation";
	import { onDestroy } from "svelte";

    export let href : string = "/"
    export let timer : number = 10_000

    let timeout : NodeJS.Timeout = setTimeout(countdown,1000);

    function countdown()
    {
        timer -= 1000;

        if(timer < 1000)
        {
            goto(href);
        }

        timeout = setTimeout(countdown,1000);
    }

    onDestroy(doOnDestroy)

    function doOnDestroy()
    {
        clearTimeout(timeout);
    }
</script>

<h1>Oops!</h1>
<p>This post has moved to a different URL.</p>
<p>We're redirecting you to the <a {href}>correct location</a> in {Math.floor(timer / 1000)} seconds.</p>

