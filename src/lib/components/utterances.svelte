<script lang="ts">
	import { onMount } from 'svelte';
	let bindingElement: HTMLElement;
    export let name : string;
	onMount(() => 
    {
		let scriptTag = document.createElement('script');
		scriptTag.setAttribute('repo', 'jefmeijvis/www.jefmeijvis.com');
		scriptTag.setAttribute('issue-term', name);
		scriptTag.setAttribute('theme', 'github-light');
        scriptTag.setAttribute('label', '🔮 Utterances');
		scriptTag.setAttribute('crossorigin', 'anonymous');
		scriptTag.src = 'https://utteranc.es/client.js';
		bindingElement.appendChild(scriptTag);
	});

</script>

<div bind:this={bindingElement} />