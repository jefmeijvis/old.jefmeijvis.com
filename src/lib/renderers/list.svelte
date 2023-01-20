<script lang="ts">
    export let ordered : any
    export let start : any
</script>
  
  {#if ordered}
    <ol {start}><slot></slot></ol>
  {:else}
    <ul><slot></slot></ul>
  {/if}

<style>
  ul,ol
  {
    list-style-position: inside;
    overflow: hidden;
    font-weight: 300;
    margin-top: 1rem;
  }
</style>