<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>doOnMount())

    function doOnMount()
    {
        goto("/blog/006-sveltekit-api-endpoints?ref=redirect");
    }
</script>