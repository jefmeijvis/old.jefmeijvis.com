<script lang="ts">
    import MobileMenu from "./mobileMenu.svelte";
    let visible : boolean = false;
    function Toggle()
    {
        visible = !visible;
        //@ts-ignore
        let bodyStyle = document.getRootNode().body.style;
    
        if(visible)
        {
            bodyStyle['overflow'] = 'hidden'
        }
        else
        {
            bodyStyle['overflow'] = ''
        }
    }
</script>

<button aria-label="Mobile menu toggle button" on:click="{Toggle}">
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
        float:left;
        cursor:pointer;
    }

    img
    {
        width : 3.5rem;
        margin : 1rem;
        margin-left: 0;
    }

    @media (min-aspect-ratio: 1/1) 
    {
    
        img 
        {
            display: none;
        }
    }
</style>