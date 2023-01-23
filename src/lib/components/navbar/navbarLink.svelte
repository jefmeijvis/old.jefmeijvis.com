<script lang="ts">
    import {page} from "$app/stores"
	import { onMount } from "svelte";
    export let href : string;
    export let target : string = "";
    export let hover : boolean = false;

    onMount(()=>console.log("navbar render " + Math.random()))

    function isActive() : boolean
    {
        let path : string = $page.url.pathname.toLowerCase();
        return (path == href.toLowerCase()) || ((path.includes(href) && !(href == "/")))
    }

    function mouseEnter()
    {
        hover = true;
    }

    function mouseLeave()
    {
        hover = false;
    }

    function customTransition(node : any, {delay = 0, duration = 150 }) 
    {
        const o = +getComputedStyle(node).opacity;

        return {
            delay,
            duration,
            css: (t : number) => 
            {
                return `
                opacity: ${t * o};
                width: ${t * 100}%;
                height: ${t * 0.2}rem;
                `
            }
        };
    }
</script>




    <div class="element" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
        <a target={target} href={href}>
            <slot></slot>
        </a>
        {#key $page.url.href}
            {#if hover || isActive()}
                <div class="selection" in:customTransition="{{}}" out:customTransition="{{}}"/>
            {/if}
        {/key}
    </div>

<style>
    .selection
    {
        margin:auto;
        width : 100%;
        height : .2rem;
        border-radius: .1rem;
        background-color: white;
    }

    .element
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