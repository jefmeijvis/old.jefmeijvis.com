<script lang="ts">
	import { beforeNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	import type { BeforeNavigate } from "@sveltejs/kit";
	import { fly } from "svelte/transition";
	import { direction } from "./stores";
    
    beforeNavigate(DoBeforeNavigate)

    function DoBeforeNavigate(navigation : BeforeNavigate)
    {
        let from : string = navigation.from?.route.id ?? "";
        let to : string = navigation.to?.route.id ?? "";

        let depthFrom = from.split("/").length;
        let depthTo = to.split("/").length;

        if(from > to)
            $direction = "LEFT"
        else
            $direction = "RIGHT"


        console.dir($direction);
    }


    function getFly(isIn : boolean,direction : "LEFT" | "RIGHT")
    {
        let directionSign = direction == "LEFT" ? -1 : 1;
        let inSign = isIn ? 1 : -1;

        return {
            x : inSign * directionSign * 500,
            duration : 500
        }
    }
</script>

<h2>Sveltekit transitions demo</h2>
{#key $page.url.href}
    <div in:fly={getFly(true,$direction)} out:fly={getFly(false,$direction)}>
        <slot></slot>
    </div>
{/key}

<style>
    div
    {
        position: absolute;
    }
</style>
