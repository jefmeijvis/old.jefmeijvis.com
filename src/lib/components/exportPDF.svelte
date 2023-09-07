<script lang="ts">
	import { light } from "$lib/stores";
	import { fade } from "svelte/transition";
	import type { Post } from "../../routes/blog/[slug]/post";
    export let post : Post;

    let library : string = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"

    function run() 
    {
        //@ts-ignore
        html2pdf(document.body,options);
    }

    let options = 
    {
        margin:       0,
        filename:     post.title + '.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    };

    function loadScript(src : string) {
    return new Promise(function (resolve, reject) {
        var s;
        s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}
</script>

<button in:fade class="{$light ? '' : 'dark'}" on:click={()=>loadScript(library).then(run)}><img alt="PDF icon" src="/pdf.png"/></button>

<style>
    .dark
    {
        filter:invert();
    }
    button
    {
        background: none;
        border:none;
        cursor:pointer;
        transition: all .25s;
        padding: .25rem;
        border-radius: .25rem;
        margin-top: .25rem;
        font-family: 'Noto';
    }

    button:hover
    {
        background-color: rgb(220,220,220);
    }

    img
    {
        width: 1.5rem;
    }
</style>