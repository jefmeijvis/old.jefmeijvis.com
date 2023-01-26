<script lang="ts">
    import HightlightJs from '$lib/components/hightlightJS.svelte';
    export let lang : string = "javascript"
    export let text : string;
  </script>

<HightlightJs language="{lang}" code="{text}"></HightlightJs>
