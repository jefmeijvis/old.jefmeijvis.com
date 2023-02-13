<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";

    afterNavigate(()=> {
        var audio = new Audio('/post/010/batman.mp3');
        audio.play();
    })

    function batmanTransition(node : any, {delay = 0,duration = 2000}) {

    return {
        delay,
        duration,
        css: (t : number,u : number)  => 
        {
            let rotation = t * 360 * 4; // turn the logo 4 times
            let scale = 1 - 2 * Math.abs(t - 0.5);
            return `transform:rotate(${rotation}deg) scale(${scale});`;
        }
    };
}
</script>

<h1>Batman transition</h1>

<div>
    <slot></slot>
</div>

{#key $page.url.href}
    <div in:batmanTransition="{{}}" class="batman-logo">
        <img src="/post/010/batman.png" alt="batman logo"/>
    </div>
{/key}

<style>
    .batman-logo
    {
        width : 100vw;
        height : 100vh;
        position: fixed;
        left : 0;
        top : 0;
        pointer-events: none;
        transform: rotate(0deg) scale(0);
        transform-origin: 50vw 50vh;
    }

    img
    {
        width : 100%;
        height : 100%;
    }
</style>