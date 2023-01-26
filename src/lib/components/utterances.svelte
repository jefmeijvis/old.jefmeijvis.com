<script lang="ts">
	import { browser } from '$app/environment';
	import { light } from '$lib/stores';
	import { onMount } from 'svelte';
	let bindingElement: HTMLElement;

    export let name : string;

	onMount(()=> themeChange($light))

	function deleteCommentSection()
	{
		let utterancesScript = document.getElementsByClassName("utterances-script")[0] ?? undefined;
		if(utterancesScript)
			utterancesScript.remove();

		let utterancesDiv = document.getElementsByClassName("utterances")[0] ?? undefined;
		if(utterancesDiv)
			utterancesDiv.remove();
	}

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

		deleteCommentSection();
		createCommentSection();
	}

	$: themeChange($light)
</script>

<div bind:this={bindingElement} />