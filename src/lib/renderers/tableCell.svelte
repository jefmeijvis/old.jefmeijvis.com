<script lang="ts">
	import { light } from "$lib/stores";


    export let header : any
    export let align : any
  </script>
  
  {#if header}
    <th class:title-dark="{!$light}" class:title-light="{$light}" {align}><slot></slot></th>
  {:else}
    <td {align}><slot></slot></td>
  {/if}

  <style>
    td,th
    {
      padding: 0.25rem;
      text-align: left;
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
  </style>