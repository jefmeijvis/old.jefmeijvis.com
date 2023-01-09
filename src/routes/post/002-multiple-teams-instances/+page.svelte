<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>doOnMount())

    function doOnMount()
    {
        goto("/blog/002-managing-multiple-teams-instances?ref=redirect");
    }
</script>