<script lang="ts">
	import { page } from "$app/stores";


    export let href = ''
    export let title : string = ""

    let target : string = "_blank";


    if(href.includes('www.jefmeijvis.com'))
      target = '_self';

    if(href.startsWith('/'))
      target = '_self';

    function click()
    {
      let body = 
      {
        href : href,
        page : $page.url.href
      }

      navigator.sendBeacon("/api/link",JSON.stringify(body))
    }

  </script>
  
  <a on:click={click} {target} {href} {title}><slot></slot></a>

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