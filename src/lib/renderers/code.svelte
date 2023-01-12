<script lang="ts">
    import PrismJs from '$lib/components/prismJS.svelte';
    export let lang : string = "json"
    export let text : string;
  </script>
  
<PrismJs language="{lang}" code="{text}"></PrismJs>