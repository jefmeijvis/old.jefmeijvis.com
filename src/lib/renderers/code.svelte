<script lang="ts">
    import PrismJs from '$lib/components/prismJS.svelte';
    export let lang : string = "javascript"
    export let text : string;
  </script>
  
<PrismJs language="{lang}" code="{text}" header="bob"></PrismJs>