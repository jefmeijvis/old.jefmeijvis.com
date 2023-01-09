---
author: Jef Meijvis
id : 6
image : /post/006/svelte.png
title: Sveltekit API endpoints
date: 13/12/2022
description : An overview on how to create and host an API build with Sveltekit.
tags : Sveltekit,API,endpoints
---

## What?

Sveltekit routing allows for precise control of the response by creating a “+server.js” file (or .ts). We can export a function for each of the [HTTP verbs such as GET, POST, PUT, PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), etc.. This way, we’re able to create an API. All our code will run server-side, allowing us to access environment variables, the file system, a database, …
## Why?
Can you create an entire enterprise-grade standalone API using Sveltekit endpoints? Yes! Should you? Probably not. While it’s entirely possible, I feel like a few endpoints bundled together with your front-end code make more sense.
## Creating the endpoints
Let’s start by creating a file at src/routes/api/+server.ts For this example I’ll be using typescript, but a JavaScript equivalent is also equally possible.
### GET
First we will export a function called GET. Each of the HTTP verbs is a possible function name that we can export at the endpoint file.

    import type { RequestEvent } from "./$types";

    export function GET({ url } : RequestEvent) 
    {
    let firstName : string = url.searchParams.get('firstName') ?? 'Default firstname';
    let lastName : string = url.searchParams.get('lastName') ?? 'Default lastname';
    return new Response("Hello " + firstName + " " + lastName);
    }

The function will take a [RequestEvent](https://kit.svelte.dev/docs/types#public-types-requestevent) as input parameter. The type definition can be found at “./$types”. A RequestEvent allows for quering the search parameters, such that a GET call to */api?firstName=Jef&lastName=Meijvis* will return “Hello Jef Meijvis” as a response.

When we omit the search parameters, we will get the default response “Hello Default firstname Default lastname”.
### POST
We can easily create a POST endpoint in the same file, like so:
    import type { RequestEvent } from "./$types";

    export async function POST({ request } : RequestEvent) 
    {
    const dataobject : any = await request.json();
    let firstName : string = dataobject.firstName;
    let lastName : string = dataobject.lastName;
    return new Response("Hello " + firstName + " " + lastName);
    }

The only difference with our GET request is that instead of getting request info from the search parameters, we get it from the body this time. To get the same response as with the GET request, we can send a POST request to */api* with the following body:

    {
        "firstName" : "Jef",
        "lastName" : "Meijvis"
    }
## Headers
When returning a response from your endpoint, you might want to return customised headers. We can do this by supplying the [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) constructor shown above with an additional ResponseInit object. This object has a 'headers' property that we can supply with the required headers in key-value format. For example, when we want to cache the API response for 1 hour (3600 seconds) we can do this by adding the following headers:

        const responseInit : ResponseInit =
        {
            headers : 
                {
                    'cache-control' : 'public, max-age=3600'
                }
        }

        return new Response(JSON.stringify(responseObject),responseInit);

## Preflight request
When we call these endpoints from a clientside web application, we will need to serve a response to the OPTIONS preflight request. We can accomplish this by creating a Sveltekit hook at src/hooks.server.ts
    // Allow the preflight options call to return a 200-ok response
    // This way our API can function as a backend API
    import type { Handle } from '@sveltejs/kit';
    import Blob from 'cross-blob';

    export const handle : Handle = async ({event, resolve}) => 
    {
        if (event.request.method !== "OPTIONS") 
            return await resolve(event)

        return new Response(new Blob(), {status: 200})
    }
The code intercepts any request with the OPTIONS verb, and returns a 200 OK response. Any other requests are just handled as before.

## Hosting
When we host our Sveltekit project on a cloud provider such as Vercel, all our endpoints will become publicly available. To prevent CORS issues, we need to do one final thing. When hosting a Sveltekit project with endpoints on Vercel, we need to create a vercel.json file at the project root with the following configuration:

    {
        "headers": [
        {
            "source": "/(.*)",
            "headers": [
            { "key": "Access-Control-Allow-Credentials", "value": "true" },
            { "key": "Access-Control-Allow-Origin", "value": "*" },
            { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
            ]
        }
        ]
    }

Different adaptors and hosting providers will probably require a different setup or configuration to allow for CORS.
## Further reading
- https://kit.svelte.dev/docs/routing#server
- https://vercel.com/docs/project-configuration
- https://vercel.com/guides/how-to-enable-cors#enabling-cors-using-vercel.json
- https://www.reddit.com/r/sveltejs/comments/u4wepc/solving_cors_problems_when_using_sveltekitvercel/
- https://kit.svelte.dev/docs/hooks

