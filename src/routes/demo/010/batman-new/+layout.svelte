<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";

    afterNavigate(()=> {
        var audio = new Audio('/post/010/batman.mp3');
        audio.play();
    })

    let easingFunction = (t : number) => 2*(-4 * ((t-0.5)*(t-0.5)) + 1);

    function batmanTransition(node : any, {delay = 0,duration = 2000}) {

    return {
        delay,
        duration,
        css: (t : number,u : number)  => 
        {
            let scale = easingFunction(t);
            return `transform:scale(${scale});`;
        }
    };
}
</script>

<h1>Batman transition (1965)</h1>

<div>
    <slot></slot>
</div>

{#key $page.url.href}
    <div in:batmanTransition="{{}}" class="batman-logo">
        <img src="/post/010/batman-1965.png" alt="batman logo"/>
    </div>
{/key}

<style>
    @keyframes rotate 
    {
        from {transform:rotate(0deg)}
        to {transform:rotate(360deg)}
    }

    .batman-logo
    {
        width : 100vh;
        display: block;
        position: fixed;
        left : 25%;
        top : 0;
        pointer-events: none;
        transform: rotate(0deg) scale(0);
        transform-origin: 50% 50%;
        transition: all ease .5s;
    }

    img
    {
        width : 100%;
        height : 100%;
    }
</style>