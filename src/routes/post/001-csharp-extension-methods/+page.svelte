<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>doOnMount())

    function doOnMount()
    {
        goto("/blog/001-csharp-extension-methods?ref=redirect");
    }
</script>