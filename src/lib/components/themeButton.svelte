<script lang="ts">
	import { page } from "$app/stores";
	import { Action, Element } from "$lib/ts/enums";
	import { onMount } from "svelte";

    let light : boolean = true;

    onMount(()=>doOnMount())

    function doOnMount()
    {
      light = (localStorage.getItem("light") === 'true') ?? true;
      setTheme();
    }

    function toggle()
    {
      light = !light;
      localStorage.setItem("light",light + '')
      setTheme();


      let postBody = 
      {
        action : Action.Click,
        element : Element.ThemeButton,
        page  : $page.url.href,
      }

      fetch('../api/action',{method : 'POST', body : JSON.stringify(postBody)})
    }

    function setTheme()
    {
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
    }


</script>

<button on:keydown={toggle} on:click={toggle}>
  <img class:active="{light}" class:inactive="{!light}"  alt="switch to light mode" src="/light.png">
  <img class:actvie="{!light}" class:inactive="{light}" alt="switch to dark mode" src="/dark.png">
</button>

<style>
  .active
  {
    opacity: 100%;
    transform: translate(-1rem,0) scale(1);
  }

  .inactive
  {
    opacity: 0%;
    transform: translate(-1rem,0) scale(0);
  }

  img
  {
    width : 1.8rem;
    filter: invert();
    position: absolute;
    transform: translate(-1rem,0);
    transition: all ease .25s;
    transform-origin: center;
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