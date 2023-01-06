<script lang="ts">
    import {fade,fly } from 'svelte/transition';
    export let callback : Function;
</script>


<div class="background" on:keypress={()=>{callback()}} on:click="{()=>{callback()}}" out:fade="{{duration:500}}">
    <div in:fly="{{ x: -500, duration: 500 }}" out:fly="{{ x: -500, duration: 500 }}" class="menu" on:click="{(e)=>{e.stopPropagation()}}" on:keydown="{(e)=>{e.stopPropagation()}}">
        <button on:click="{()=>callback()}">
            <img src="close.png" alt="hamburger menu toggle"/>
        </button>
        <h1>Kerstbomen Van Ginhoven</h1>
        <ul>
            <li>        
                <a on:click="{()=>callback()}" href="/">Home</a>
            </li>
            <li>        
                <a on:click="{()=>callback()}" href="/aanbod">Aanbod</a>
            </li>            
            <li>        
                <a on:click="{()=>callback()}" href="/video">Video</a>
            </li>
            <li>        
                <a on:click="{()=>callback()}" href="/contact">Contact</a>
            </li>
            <li>        
                <a on:click="{()=>callback()}" href="/thuisverkoop">Thuisverkoop</a>
            </li>
            <li>        
                <a on:click="{()=>callback()}" href="/actua">Actua</a>
            </li>
            <li>        
                <a on:click="{()=>callback()}" href="https://www.kerstboomaanhuisgeleverd.be/?website-navbar-mobile">Webshop</a>
            </li>
        </ul>
        <p class="copyright">
            © Kerstbomen Van Ginhoven {new Date().getFullYear()}
        </p>
    </div>
</div>


<style>
    p
    {
        position: fixed;
        bottom: 1rem;;
        left: 2rem;;
        color:white;
    }
    h1
    {
        color:white;
        font-size: 2rem;
        margin: 2rem;
        border-bottom: 3px white solid;
    }

    a
    {
        color:white;
        font-size: 2rem;
        text-decoration: none;
    }

    li
    {
        margin: 0rem;
        margin-bottom: 1rem;
        padding-top:1rem;
    }

    .menu
    {
        position: fixed;
        left : 0%;
        top : 0;
        width : 85%;
        height : 100%;
        background-color: black;
    }

    .background
    {
        position: fixed;
        left : 0%;
        top : 0;
        width : 100%;
        height : 100%;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }

    button
    {
        border: none;
        background: none;
        float:right;
        cursor:pointer;
    }

    img
    {
        width : 3.5rem;
        margin : 1rem;
        margin-right: 2rem;
    }
</style>