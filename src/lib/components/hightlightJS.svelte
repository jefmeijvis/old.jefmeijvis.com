<script lang="ts">
    // Base library
    import {Highlight} from "svelte-highlight";
    // Languages
    import javascript from "svelte-highlight/languages/javascript";
    import csharp from "svelte-highlight/languages/csharp"
    import markdown from "svelte-highlight/languages/markdown"
    import typescript from "svelte-highlight/languages/typescript"
    import json from "svelte-highlight/languages/json"
    import xml from "svelte-highlight/languages/xml"
    import sql from "svelte-highlight/languages/sql"

    // Styles
    import darkTheme from "svelte-highlight/styles/stackoverflow-dark";
    import lightTheme from "svelte-highlight/styles/stackoverflow-light";
    import { LineNumbers } from "svelte-highlight";


	import { light } from "$lib/stores";
	import { fade } from "svelte/transition";

    // Data provided to the renderer
    export let language : any;
    export let code : any;

    let lang : any;
    let displayLang : string;
    let copied : boolean = false;


    switch(language)
    {
        case 'js':
        case 'javascript':
        {
            displayLang = 'Javascript'
            lang = javascript;
            break;
        }

        case 'C#':
        case 'csharp':
        {
            displayLang = 'C#'
            lang = csharp;
            break;
        }

        case 'markdown':
        {
            displayLang = 'Markdown'
            lang = markdown;
            break;
        }

        case 'svelte':
        {
            displayLang = 'Svelte'
            lang = xml;
            break;
        }

        case 'kql':
        {
            displayLang = 'KQL'
            lang = sql;
            break;
        }

        case 'xml':
        {
            displayLang = 'XML'
            lang = xml;
            break;
        }

        case 'json':
        {
            displayLang = 'JSON'
            lang = json;
            break;
        }

        case 'ts':
        case 'typescript':
        {
            displayLang = 'Typescript'
            lang = typescript;
            break;
        }

        default:
        {
            console.log('🗣️ Unable to determine fitting language for ' + language);
            displayLang = 'Javascript'
            lang = javascript;
        }
    }

    async function copy()
    {
        copied = true;
        navigator.clipboard.writeText(code);
        console.log('✍️ Copied code content to clipboard');
        await sleep(2000);
        copied = false;
    }

    function sleep(ms : number) {                                                                                                                                                                                       
  return new Promise((resolve) => setTimeout(resolve, ms));                                                                                                                                                
}  
</script>

{#if $light}
    {@html lightTheme}
{:else}
    {@html darkTheme}
{/if}

<div>
    <p class:title-dark="{!$light}" class:title-light="{$light}" class="title">
        Code snippet: {displayLang}  
        <button title="Copy code snippet" on:click={copy}>
            <img src="/copy.png" alt="copy code snippet"/>
        </button>
        {#if copied}  
            <span transition:fade class="message">Copied to clipboard!</span>
        {/if}

    </p>
    <Highlight language={lang} {code} let:highlighted>
        <LineNumbers highlighted={highlighted}     
        --line-number-color="{$light? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'}"
        --border-color="rgba(0,0,0,0)"
        --padding-left={'.5rem'}
        --padding-right={'.5rem'}/>
    </Highlight>
</div>




<style>
    button
    {
        margin-top: .25rem;
        width : 1.5rem;
        height : 1.5rem;
        border:none;
        float:right;
        background:none;
        cursor : pointer;
    }

    .message
    {
        float:right;
        color: var(--color-text-secondary);
        font-family: 'NotoMono';
    }
    img
    {
        width : 1.5rem;
        height : 1.5rem;
        filter:invert();
    }

    button:hover
    {
        opacity: 70%;
    }


    .title-light
    {
        background-color: var(--color-accent);
        color: var(--color-text-secondary   );
    }

    .title-dark
    {
        background-color: var(--color-accent);
    }

    .title
    {
        font-family: 'NotoMono';
        padding: .5rem;
    }

    div
    {
        border-radius: .5rem;
        overflow: hidden;
        margin-top: 1rem;
        margin-bottom: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-family: 'NotoMono' !important;
    }
</style>