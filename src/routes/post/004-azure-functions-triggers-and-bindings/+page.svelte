<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>doOnMount())

    function doOnMount()
    {
        goto("/blog/004-azure-functions-part-2-triggers-and-bindings?ref=redirect");
    }
</script>