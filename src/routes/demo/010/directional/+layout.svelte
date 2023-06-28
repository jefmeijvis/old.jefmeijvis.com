<script lang="ts">
	import { beforeNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	import type { BeforeNavigate } from "@sveltejs/kit";
	import { fly } from "svelte/transition";

    let direction : "LEFT" | "RIGHT";
    
    beforeNavigate(DoBeforeNavigate)

    function DoBeforeNavigate(navigation : BeforeNavigate)
    {
        let from : string = navigation.from?.route.id ?? "";
        let to : string = navigation.to?.route.id ?? "";

        let depthFrom = from.split("/").length;
        let depthTo = to.split("/").length;

        if(depthFrom > depthTo)
            direction = "LEFT"
        else
            direction = "RIGHT"
    }


    function getFlyIn(direction : "LEFT" | "RIGHT")
    {
        let directionSign = direction == "LEFT" ? -1 : 1;

        return {
            x : directionSign * 500,
            duration : 500
        }
    }

    function getFlyOut(direction : "LEFT" | "RIGHT")
    {
        let directionSign = direction == "LEFT" ? -1 : 1;

        return {
            x : -directionSign * 500, // minus sign because the out direction is reversed
            duration : 500
        }
    }
</script>


{#key $page.url.href}
    <div in:fly|global={getFlyIn(direction)} out:fly|global={getFlyOut(direction)}>
        <slot></slot>
    </div>
{/key}

<style>
    div
    {
        position: absolute;
    }
</style>
