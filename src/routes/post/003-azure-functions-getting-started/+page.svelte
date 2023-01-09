<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>doOnMount())

    function doOnMount()
    {
        goto("/blog/003-azure-functions-part-1-getting-started?ref=redirect");
    }
</script>