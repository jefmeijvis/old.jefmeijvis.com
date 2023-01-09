<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    onMount(()=>doOnMount())

    function doOnMount()
    {
        goto("/blog/005-creating-a-chat-component-with-svelte?ref=redirect");
    }
</script>