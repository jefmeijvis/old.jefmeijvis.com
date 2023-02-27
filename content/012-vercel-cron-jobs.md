---
author: Jef Meijvis
id : 12
image : /post/012/logo.png
title: Vercel Cron jobs
date: 27/02/2023
description : Trying out Vercel Cron jobs
tags : Vercel
published : true
---

## Beta announcement

Last week, [Vercel](https://www.vercel.com) announced [beta availability](https://twitter.com/vercel/status/1628439610454843400) of their cron jobs.
They allow you to schedule a serverless function to run on a regular basis.
This allows you to run tasks on a fixed schedule, defined by a cron expression.
For this example I'll be using a cron job to do a daily deploy of my blog.

![Vercel announcement on Twitter [medium]](/static/post/012/tweet.png)

## Setting up the cron job
For this example I'll be using Svelte.
First we need to create an API endpoint, located at `routes/API/cron/+server.ts`.
Any endpoint location will do, as long as it's callable via a GET request.

```ts
    export async function GET(req : any) 
    {
        // Get the environment variable
        let url : string | undefined = process.env.VERCEL_HOOK;

        // Bail out if we can't find it
        if(!url)
        {
            console.log("Unable to get VERCEL_HOOK");
            return new Response('Unable to get VERCEL_HOOK');
        }

        // HTTP GET request to the endpoint
        let res = await fetch( url, {method : 'GET'});
        let jsonResponse = await res.json();
        console.log(jsonResponse);
        return new Response(jsonResponse);
    }
```

At the root of our project, we also want to create a vercel.json configuration file.
We can use this json file to configure a multitude of things, including our cron jobs.

```json
{
    "crons": [{
      "path": "/api/cron",
      "schedule": "0 5 * * *"
    }]
  }
```

This json file contains an array of cron configurations, containing a path and a schedule.
The path refers to the relative URL at which our endpoint is available.
The schedule is a [cron expression](https://www.freeformatter.com/cron-expression-generator-quartz.html), which defines when the endpoint should be called.

> While in beta, cron jobs are limited to a minimum of one execution a day for the hobby plan. I assume this is subject to change, but we'll see.

## Running the cron job

### Localhost
To locally test the behavior of this cron job, we can just test it in the same way we would test any other endpoint.
I use [Postman](https://www.postman.com/) for this, but you can also use curl or any other tool.
For the example above, the endpoint lives at `localhost:5173/api/cron.` 
A simple GET request to this endpoint will trigger the cron job.

### Manually invoking the cron job from the Vercel dashboard
When deployed to the production environment, we can manually invoke the cron job from the Vercel dashboard.

![Each project now has a tab with cron job information](/static/post/012/dashboard.png)

We can access the cron job information through the cron tab on each project.
It gives us an overview of the available cron jobs, as well as the possibility to manually invoke them.
The logging output of the cron job is also available here, but only when the tab is open as no logging information is retained by default.
It's possible to add a log sink however, to create a permanent log of the cron job output.

## Adding in the deployment url
At this point our cron function doesn't do anything yet, as our required environment variable `VERCEL_HOOK` is not set.
For our local development environment, we can just set this variable in our .env file.
For the production environment, we can set this variable in the Vercel dashboard through the project settings.

```markdown
    VERCEL_HOOK='https://api.vercel.com/v1/integrations/deploy/prj_AAA/BBB'
```

And there we have it! With this cron job we have a daily deployment of our blogging site at 5 in the morning.


## Further reading
- https://vercel.com/guides/how-to-setup-cron-jobs-on-vercel