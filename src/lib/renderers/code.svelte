<script lang="ts">
    export let lang : string = "js"
    export let text : string
  </script>
  
<div>
  <pre><code>{text}</code></pre>
</div>
  <style>
    div
    {
        padding : 1rem;
        border-radius: .5rem;
        background-color: black;
        color:white;
        margin-top: 1rem;
        margin-bottom: 1rem;
        white-space: initial;
        overflow-x: scroll;
    }
  </style>