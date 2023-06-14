<script lang="ts">
	import { filter, light } from "$lib/stores";

    function clearFilter()
    {
        $filter = "";
    }
</script>

<p>Filter</p>
<input placeholder="Enter searchwords" bind:value={$filter} type="text"/>
{#key $light}
    <img style="filter:{$light? 'invert()' : 'none'}" on:click={clearFilter} on:keydown={clearFilter} alt="Clear filter button" title="Clear filter" src="/close.png"/>
{/key}

{#if $filter}
    <p>Showing a filtered view. Click <button on:click={clearFilter}>here</button> to reset the filter.</p>
{/if}

<style>
    button
    {
        background-color: var(--color-accent);
        color: var(--color-text-secondary);
        padding : .25rem;
        border-radius: .25rem;
        border:none;
        cursor:pointer;
        transition: all ease .25s;
    }

    button:hover
    {
        opacity: 75%;
    }
    input
    {
        width : 100%;
        font-size: 1.2rem;
        background-color: var(--color-background);
    }

    img
    {
        width : 1.5rem;
        cursor:pointer;
        transform: translate(0,-1.5rem);
        float:right;
        opacity: 60%;
        transition: all ease .25s;
    }

    img:hover
    {
        opacity: 30%;
        transform: translate(0,-1.5rem) rotate(90deg) ;
    }
</style>

