<script lang="ts">
    export let tableOfContents : any
</script>

<div>
    <p>Table of contents</p>
    {#each tableOfContents as heading}
        <p style="margin-left:{(heading.depth - 2)* 2}rem"><a href={"#" + heading.text}>{heading.text}</a></p>
    {/each}
</div>


<style>
    div
    {
        padding : 1rem;
    }

    p
    {
        font-size: 1rem;
        font-weight: 300;
    }

    a
    {
        text-decoration: none;
    }
</style>
