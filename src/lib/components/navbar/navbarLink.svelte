<script lang="ts">
    export let href : string;
    export let target : string = ""
</script>


<div>
    <a target={target} href={href}>
        <slot></slot>
    </a>
</div>

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