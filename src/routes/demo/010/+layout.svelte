<script>
	import { page } from "$app/stores";
</script>

<h2>Sveltekit transitions demo</h2>
<p>This interactive demo is part of <a href="/blog/010-svelte-transitions">Blogpost 10: Svelte transitions</a></p>
<p>The current path is <b>{$page.url.pathname}</b></p>

<slot></slot>