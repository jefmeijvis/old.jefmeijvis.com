<script lang="ts">
    import MobileMenu from "./mobileMenu.svelte";
    let visible : boolean = false;
    function Toggle()
    {
        visible = !visible;
    }
</script>

<button on:click="{Toggle}">
    <img src="/hamburger-menu.png" alt="hamburger menu toggle"/>
</button>

{#if visible}
    <MobileMenu callback={Toggle}></MobileMenu>
{/if}


<style>

    button
    {
        border: none;
        background: none;
        float:right;
        cursor:pointer;
    }

    img
    {
        width : 3.5rem;
        margin : 1rem;
        margin-right: 2rem;
        filter:invert();
    }

    @media (min-aspect-ratio: 1/1) 
    {
    
        img 
        {
            display: none;
        }
    }
</style>