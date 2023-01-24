<script lang="ts">
	import { page } from "$app/stores";
	import { Action, Element } from "$lib/ts/enums";


    let light : boolean = true;

    function toggle()
    {
      light = !light;
      let body = document.body;

      if(light)
      {
        console.log('☀️ switching to light mode')
        body.classList.remove("dark")
        body.classList.add("light")

      }

      if(!light)
      {
        console.log('🌙 switching to dark mode')
        body.classList.remove("light")
        body.classList.add("dark")
      }

      let postBody = 
      {
        action : Action.Click,
        element : Element.ThemeButton,
        page  : $page.url.href,
      }
      
      fetch('../api/action',{method : 'POST', body : JSON.stringify(postBody)})
    }

</script>

<button on:keydown={toggle} on:click={toggle}>
  {#if !light}
    <img alt="switch to light mode" src="/light.png">
  {/if}

  {#if light}
  <img alt="switch to dark mode" src="/dark.png">
  {/if}
</button>

<style>
  img
  {
    width : 1.8rem;
    filter: invert();
  }

  button
  {
    cursor:pointer;
    background: none;
    border:none;
    float:right;
    margin:1rem;
    transition: all ease .25s;
    padding : .5rem
  }

  button:hover
  {
    opacity: 70%;
    border-radius: .25rem;
    transform: scale(1.10);
  }

</style>