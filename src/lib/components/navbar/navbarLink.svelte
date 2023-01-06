<script lang="ts">
    import {page} from "$app/stores"
    import {onMount} from "svelte"
    export let href : string;
    export let target : string = ""
</script>


{#key $page.url.pathname}
    <div>
        <a target={target} style="{href.toLowerCase() == $page.url.pathname.toLowerCase() ? 'border-bottom: 2px white solid;' : ''}"href={href}>
            <slot></slot>
        </a>
    </div>
{/key}

<style>
    div
    {
        margin-top: 1.5rem;
        float : left;
        margin-right : 1.5rem;
        text-align: center;
    }

    a
    {  
        padding : .5rem;
        display:block;
        text-decoration: none;
        font-size: .8rem;
        color:white;
        border-bottom: 2px #0078d4 solid;
    }

    a:hover
    {   
        color:white;
        border-bottom: 2px white solid;
        opacity: 60%;
    }


    @media (max-aspect-ratio: 1/1) 
    {
    
        div 
        {
            display:none;
        }
    }
</style>