<script lang="ts">
    export let lang : string = "js"
    export let text : string
  </script>
  
<div>
    <pre class={lang}><code>{text}</code></pre>
</div>
  <style>
    div
    {
        padding : 1rem;
        border-radius: .5rem;
        background-color: black;
        color:white;
    }
  </style>