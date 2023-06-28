<script lang="ts">
	import { page } from '$app/stores';
	import { Action, Element } from '$lib/ts/enums';
    let visible : boolean = false;
    import { fly } from 'svelte/transition';


    function toggle()
    {
        visible = !visible;
        let p : string = $page.url.href.toString();
        let element : Element = Element.BlogpostSupportButton;
        let action : Action = visible ? Action.Open : Action.Close;
        let body : {page : string, action : Action, element : Element} = {page : p ,element : element ,action : action};
        fetch('../api/action',{method : 'POST', body : JSON.stringify(body)})
    }
</script>

<div class="spacer"></div>

<button title="Support me via Ko-Fi!" on:click={toggle}><img loading="lazy" src='https://storage.ko-fi.com/cdn/cup-border.png' alt="Ko-Fi logo"/>{visible ? 'Hide support' : 'Support me'}</button>
{#if visible}
    <div>
        <iframe transition:fly|global="{{ y: 200, duration: 500 }}" loading='lazy' id='kofiframe' src='https://ko-fi.com/jefmeijvis/?hidefeed=true&widget=true&embed=true&preview=true' height='712' title='jefmeijvis'></iframe>
    </div>
{/if}

<style>
    div
    {
        width : 100%;
        text-align: center;
    }
    iframe
    {
        border:none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin:auto;
        border-radius: 1rem;
    }
    .spacer
    {
        width : 100%;
        height : 4rem;
    }

    button
    {
        color:var(--color-text-secondary);
        font-size: 1.5rem;
        background-color: var(--color-accent);
        border-radius: 2rem;
        border:none;
        padding : .5rem;
        padding-right: 1rem;
        padding-bottom: .75rem;
        cursor:pointer;
        margin: auto;
        display:block;
        transition: all ease .5s;
        margin-bottom: 2rem;
    }

    button:hover
    {
        opacity: 80%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        translate: 0 -1rem;
    }

    img
    {
        width : 2rem;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-top: .5rem;
    }
</style>