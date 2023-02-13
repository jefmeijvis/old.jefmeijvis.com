<script lang="ts">
	import { browser } from '$app/environment';
	import { light } from '$lib/stores';
	import { onMount } from 'svelte';
	let bindingElement: HTMLElement;

    export let name : string;

	$: themeChange($light)

	onMount(()=> createCommentSection())

	function createCommentSection()
	{
		let scriptTag = document.createElement('script');
		scriptTag.classList.add("utterances-script")
		scriptTag.setAttribute('id','comment-section')
		scriptTag.setAttribute('repo', 'jefmeijvis/www.jefmeijvis.com');
		scriptTag.setAttribute('issue-term', name);
		scriptTag.setAttribute('theme', $light ? 'github-light' : 'github-dark');
        scriptTag.setAttribute('label', '🔮 Utterances');
		scriptTag.setAttribute('crossorigin', 'anonymous');
		scriptTag.src = 'https://utteranc.es/client.js';

		if(bindingElement)
			bindingElement.appendChild(scriptTag);
	}

	async function themeChange(input : any)
	{
		if(!browser)
			return;

		let theme = input ? 'github-light' : 'github-dark'
		const message = 
		{
			type: 'set-theme',
			theme: theme
		};

		const utterances = document.querySelector('iframe.utterances-frame') as HTMLFrameElement;
		utterances?.contentWindow?.postMessage(message, 'https://utteranc.es');
	}

</script>

<div bind:this={bindingElement} />