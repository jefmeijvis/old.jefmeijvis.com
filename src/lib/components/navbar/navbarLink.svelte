<script lang="ts">
    import {page} from "$app/stores"
    export let href : string;
    export let target : string = "";

    function getStyle()
    {
        // Return the active style when the current path matches with the href of the current link
        let styleActive : string = 'border-bottom: 2px white solid;';
        let styleInactive : string = ''
        let path : string = $page.url.pathname.toLowerCase();

        if(path == href.toLowerCase())
            return styleActive;

        if(path.includes(href) && !(href == "/"))
            return styleActive

        return styleInactive;
    }
</script>


{#key $page.url.pathname}
    <div>
        <a target={target} style="{getStyle()}" href={href}>
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
        font-size: 1rem;
        font-weight: bold;
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