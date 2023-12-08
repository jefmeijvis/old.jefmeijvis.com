---
author: Jef Meijvis
id : 22
image : /post/022/logo.png
title: Understanding SvelteKit load functions
date: 30/11/2023
description : Understanding SvelteKit load functions
tags : Sveltekit, Frontend 
published : true
---

## Abstract
A [SvelteKit](https://kit.svelte.dev/) page is defined by the content in its *+page.svelte* file, along with any *+layout.svelte* files that surround it. 
But before these Svelte files get rendered, data can be provided by load functions. In this article we further explore SvelteKit load functions and how to use them.  

## Basic usage
In our project's file structure, a *+page.svelte* file can have an associated *+page.js* file next to it. 

![Sveltekit folder structure [small]](/static/post/022/folder-structure.png)


Imagine we want a webpage that uses data from the load function to show a title. 
Such scenario would look as follows.

The *+page.svelte* file:
```xml
<script>
    // This data object gets populated by the load function.
	export let data;
</script>

<h1>{data.title}</h1>
```

The *+page.js* file:

```js
// The following load function returns a object with the 'title' property.
export function load() 
{
	return {
		title: "Understanding sveltekit load functions" 
	};
}
```

When the following structure gets rendered without any additional layout files, it becomes the following HTML:
```xml
<h1>Understanding sveltekit load functions</h1>
```

This load function runs on both the server and client, during the initial server load and on further clientside page hydration. 
If your particular use case requires it to run only on the client or server (e.g. when you want it to read from the local filesystem) we have to look a bit further to the *+page.server.js* file.


> This article assumes typeless javascript files. All of the content also holds true for page.ts files or page.js files with JSDoc annotations. 

## Server only load function
As mentioned above, if we want our load function to run on the server only, a *+page.server.js* file is the solution. 
Common use cases are reading from the local filesystem or accessing an external API which requires reading environment variables.

```js
export async function load() 
{
    // Retrieve the correct URL from the environment variables
    let url = process.env.MY_PRODUCTION_API_URL

    // Fetch the data from the URL
    let data = await fetch(url);

    // Convert the data to a JSON object
    let response = await data.json();
	return 
    {
        // Read the title property of the response object
		title: response.title
	};
}
```

In such case, our *+page.svelte* file would look identical as above. 

## Accessing the page slug

When we design our page to make use of a slug, we want to access that slug data in the load function as well. 

![Sveltekit folder structure with a slug [small]](/static/post/022/slug.png)


```js
export function load({ params }) 
{
	return 
    {
		title: `Our page has ${params.slug} as the slug`,
	};
}
```

Our *+page.svelte* file would still look identical as in the first example. 

## Loading data in a layout file
In a similar fashion, data can also be loaded in a *+layout.js* file and used in a *+layout.svelte* file. 
Likewise if you require the load function to only happen serverside, a *+layout.server.js* file is the solution.


## Further reading and relevant links
- https://kit.svelte.dev/docs/load

