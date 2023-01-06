<script lang="ts">
    export let tableOfContents : any
</script>

<div>
    <p>Table of contents</p>
    <ul>
    {#each tableOfContents as heading}
        {#if heading.depth == 2}
            <li><a href={"#" + heading.text}>{heading.text}</a></li>    
        {/if}
        {#if heading.depth == 3}
            <ul><li><a href={"#" + heading.text}>{heading.text}</a></li></ul>
        {/if}
        {#if heading.depth == 4}
            <ul><ul><li><a href={"#" + heading.text}>{heading.text}</a></li></ul></ul>
        {/if}
    {/each}
    </ul>
</div>


<style>
    div
    {
        padding : 1rem;
    }
</style>
