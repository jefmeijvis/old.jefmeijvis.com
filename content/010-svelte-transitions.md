---
author: Jef Meijvis
id : 10
image : /post/010/logo.png
title: Svelte transitions
date: 09/02/2023
description : Exploring Svelte transitions from the bottom up!
tags : svelte,sveltekit,frontend
published : true
---

## Svelte transitions
Svelte allows us to easily animate elements in and out of the DOM.
A transition is an animation that plays when the element get created or deleted.
They work in both directions, meaning that the animation that plays on deletion will be the inverse of the animation that plays on creation.
To to achieve all of this this, we can make use of the *transition* directive.

### Basic example

We can add the transition directive to native dom elements, such as a paragraph tag in this example:


```svelte
<script>
    // Import the build-in fade transition
	import { fade,blur,fly } from 'svelte/transition';
	let showText = true;
</script>

<input type="checkbox" bind:checked={showText}>

{#if showText}
	<p transition:fade>
		I will fade in and out!
	</p>
{/if}
```

![The paragraph fades in an out when the DOM elements get added or removed [medium]](/static/post/010/transition-example-1.gif)

### Out-of-the-box transitions

At the time of writing, Svelte comes with a couple of transitions out-of-the-box:
- blur
- fade
- fly
- slide
- scale
- draw
- crossfade

![Fade [small]](/static/post/010/transition-example-1.gif)
![Blur [small]](/static/post/010/transition-example-blur.gif)
![Fly [small]](/static/post/010/transition-example-fly.gif)
![Slide [small]](/static/post/010/transition-example-slide.gif)
![Scale [small]](/static/post/010/transition-example-scale.gif)

The draw transition is a special one, as it can only be applied to an SVG path.
The following inline SVG drawing of a cross gets drawn by the transition
![Draw [small]](/static/post/010/transition-example-draw.gif)
```svelte
// Animate the drawing of the SVG path using the 'Draw' transition
<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
	{#if visible}
		<path transition:draw="{{duration: 1500}}"
					d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
					fill="none"
					stroke="cornflowerblue"
					stroke-width="0.1px"
					/>
	{/if}
</svg>

<style>
	svg {
		display: block;
		height: 150px;
		width: 150px;
	}
</style>
```


Some of these transitions require additional parameters to work.
All available options can be viewed under the [Transitions source code on Github](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts). As an example, the Fly transition can be given the y parameter (in pixels) and the duration (in ms).

```svelte
	<p transition:fly="{{ y: 50, duration: 1000 }}">
		Flies in and out
	</p>
```


### Custom transitions
While these transitions probably cover most use cases, we might someday require a custom transition.
We can define these custom transition function as follows:


```svelte
<script>
	let visible = true;
	function myfade(node, {delay = 0,duration = 200}) {
	return {
		delay,
		duration,
		css: t => 
		{
			return `font-size:${t}rem;`;
		}
	};
}
</script>



<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:myfade="{{duration: 500}}" out:myfade>
		customTransition!
	</p>
{/if}

<style>
	p,label{text-align:center}
</style>
```
The function takes in two arguments:
- node
- options object

The first one is the node that is the subject of the transition. 
The second argument is an object that contains any options you want to pass to the transition function, such as the duration, direction, color, ...

The function needs to return an object that can contain the following properties:
- *delay*: The duration (in ms) before the transition begins
- *duration*: The total duration of the transition
- *easing*: An (input : number) => output : number function that maps the input between [0,1] to the output [0,1], but with a tweening function.
- *css*: A function (t,u) = {..} that returns a string containing the relevant css for the node. Parameter t goes from 0,1, while parameter u goes from 1 to 0. t = u - 1 for the entire duration of the function
- *tick*: Similar to the css function in the shape of (t,u) => {..} that can modify the node. Usually not needed, as the css function should be enough to modify the styling of the node.

A typical css function looks as follows:
```svelte
css: (t,u) => 
		{
			return `font-size:${t}rem;`;
		}
```
The function above would generate a CSS animation that changes the font size from 0rem to 1rem when the element gets created, and from 1rem to 0rem when destroying the object. This example only changes the font-size, but as many css properties as needed can be modified during a transition. 

![Custom font-size transition [small]](/static/post/010/transition-example-custom.gif)


## Layout transitions
Up until this point we have been applying transitions to single elements on a page.
Of course we can also apply them to divs or other container elements.

But it gets even more interesting when applying transitions in a layout file. 
When we create a +layout.svelte file, we can apply a transition in the following way:
```svelte
    <!-- +layout.svelte -->
    <div transition:fly="{{ y: 50, duration: 1000 }}">
        <slot></slot>
    </div>

    <style>
    div
    {
        position: absolute;
    }
    </style>
```

This will fade the entire content slot in and out.
We add the absolute position tag to the div so that both slots are rendered on top of each other.
This will prevent popping in when the original div disappears from the DOM.

I've set up a live demo at [Post 10 demo](/demo/010/)
When using the code as shown above, we get the following result:
![Layout fly transition [medium]](/static/post/010/transition-example-demo-1.gif)
This works great! All the content in the slot tag flies in and out when a new page gets loaded.

## Directional transition
Now in case of the fly transition, we might want to detect the 'direction' of the transition.
By this I mean that it could be useful to detect if we are moving from a deeply nested page to a more shallow nested page.
For example:
- moving from 'demo/010' to 'demo/010/1' would be considered moving deeper, or moving right
- moving from 'demo/010/1' to 'demo/010' would be considered moving more shallow, or moving left

In the +layout.svelte file, we can determine the transition direction to be either LEFT or RIGHT be looking at the path depth.
The depth is determined in the layout by using the 'beforeNavigate' hook.
```svelte
<!-- +layout.svelte -->
<script lang="ts">
    let direction : "LEFT" | "RIGHT";
    
    beforeNavigate(DoBeforeNavigate)

    function DoBeforeNavigate(navigation : BeforeNavigate)
    {
        let from : string = navigation.from?.route.id ?? "";
        let to : string = navigation.to?.route.id ?? "";

        let depthFrom = from.split("/").length;
        let depthTo = to.split("/").length;

        if(depthFrom > depthTo)
            direction = "LEFT"
        else
            direction = "RIGHT"
    }
</script>
```

We can use this direction in the same layout file to generate the options object that gets passed on to the fly transition, like so:

```svelte
<script lang="ts">
    function getFlyIn(direction : "LEFT" | "RIGHT")
    {
        let directionSign = direction == "LEFT" ? -1 : 1;

        return {
            x : directionSign * 500,
            duration : 500
        }
    }

    function getFlyOut(direction : "LEFT" | "RIGHT")
    {
        let directionSign = direction == "LEFT" ? -1 : 1;

        return {
            x : -directionSign * 500, // minus sign because the out direction is reversed
            duration : 500
        }
    }
</script>

<h2>Sveltekit transitions demo</h2>
<p>This interactive demo is part of <a href="/blog/010-svelte-transitions">Blogpost 10: Svelte transitions</a></p>
<p>The current path is <b>{$page.url.pathname}</b></p>
{#key $page.url.href}
    <div in:fly={getFlyIn(direction)} out:fly={getFlyOut(direction)}>
        <slot></slot>
    </div>
{/key}

<style>
    div
    {
        position: absolute;
    }
</style>
```

And by doing so, we reverse the transition direction going back up the url tree.
You can view the result live at the [Post 10 demo page.](/demo/010/)
![Layout fly transition [medium]](/static/post/010/transition-example-demo-2.webp)



## Getting creative
### The Batman transition

All of this of course leads to one single goal: the batman transition.
The original batman series featured a spinning bat logo and matching sound effect.
I've recreated this as a Svelte page transition.
The sound is played by the afterNavigate hook, and a custom transition scales and rotates the logo when the url changes.


```svelte
<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";

    afterNavigate(()=> {
        var audio = new Audio('/batman.mp3');
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


    function fadeTransition(node : any, {delay = 0,duration = 2000}) 
    {
        return {
            delay,
            duration,
            css: (t : number,u : number)  => 
            {
                let scale = 1 + easingFunction(t);
                return `transform:rotate(${ t * 720 }deg) scale(${scale});`;
            }
        };
    }
</script>

{#key $page.url.href}
    <div in:fadeTransition="{{}}">
        <slot></slot>
    </div>
    <div in:batmanTransition="{{}}" class="batman-logo">
        <img src="/batman-1965.png" alt="batman logo"/>
    </div>
{/key}

<style>
    .batman-logo
    {
        width : 100vh;
        display: block;
        left : 25%;
        top : 0;
        pointer-events: none;
        transform: rotate(0deg) scale(0);
        transform-origin: 50% 50%;
        transition: all ease .5s;
        position: fixed;
    }

    img
    {
        width : 100%;
        height : 100%;
        filter: invert(13%) sepia(94%) saturate(3733%) hue-rotate(354deg) brightness(89%) contrast(120%);    }
</style>
```

![I have peaked as a web developer](/static/post/010/batman.webp)

## Accessibility
As mentioned in [this great blogpost by Geoff Rich](https://geoffrich.net/posts/accessible-svelte-transitions/), we need to make sure that we keep the accessibility of our webpage in mind.
Its easy to go wild with all these easy-to-use animations, but at the end of the day we want our website to be usable to all users.

```svelte
<style>
  @media (prefers-reduced-motion: reduce) 
  {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      animation-delay: 0.01ms !important;
    }
  }
</style>
```


The following css media query at the root level in our app.html file will detect if the user prefers reduced motion.
If this is the case, we will disable all animations across the entire website.

As a reminder, you can enable this setting on your device or browser in the following way:
- In GTK/Gnome, if gtk-enable-animations is set to false. This is configurable via GNOME Tweaks (Appearance tab or General tab, depending on version). Alternately, add gtk-enable-animations = false to the Settings block of the GTK 3 configuration file (~/.config/gtk-3.0/settings.ini).
- In Windows 10: Settings > Ease of Access > Display > Show animations in Windows.
- In Window 7 [& 8]: Control Panel > Ease of Access > Make the computer easier to see > Turn off all unnecessary animations (when possible).
- In macOS: System Preferences > Accessibility > Display > Reduce motion.
- In iOS: Settings > General > Accessibility > Reduce Motion.
- In Android 9+: Settings > Accessibility > Remove animations.

[Information found on this StackOverflow question](https://stackoverflow.com/questions/59708960/how-do-i-change-the-prefers-reduced-motion-setting-in-browsers)


## Further reading
- [Svelte.dev interactive transition tutorial](https://svelte.dev/tutorial/transition)
- [Svelte included transitions source on Github](https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts)
- [Accessible Svelte transitions by Geoff Rich](https://geoffrich.net/posts/accessible-svelte-transitions/)
- [Batman on Wikipedia](https://en.wikipedia.org/wiki/Batman)
