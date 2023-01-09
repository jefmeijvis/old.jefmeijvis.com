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
    }

    @media (min-aspect-ratio: 1/1) 
    {
    
        img 
        {
            display: none;
        }
    }
</style>