<script lang="ts">
    export let href = ''
    export let title : string = ""

    let target : string = "_blank";


    if(href.includes('www.jefmeijvis.com'))
      target = '_self';

    if(href.startsWith('/'))
      target = '_self';

  </script>
  
  <a {target} {href} {title}><slot></slot></a>

  <style>
    a
    {
        text-decoration: none;
        padding : .10rem;
        background-color:white;
        border-radius: .25rem;
        color:#0078d4;
    }

    a:hover
    {
        text-decoration: underline;
    }
  </style>