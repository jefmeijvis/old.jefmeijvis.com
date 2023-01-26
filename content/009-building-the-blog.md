---
author: Jef Meijvis
id : 9
image : /post/009/logo.png
title: Building the blog!
date: 20/01/2023
description : A rundown of all the different tools and techniques that are used to build this blog.
tags : svelte,blog
published : true
---


## Content
This blogging website has gone through quite a few interations before I landed on what you currently see.
I thought why not share the lessons learned, so others might benefit from this!

![Blogging! [small]](/static/post/009/logo.png)

## Inspiration
Before we continue, I would like to give credit where credit is due.
I took a lot of inspiration from two other tech related blogging sites:
- [www.timdeschryver.dev](https://www.timdeschryver.dev) : Tim is a colleague of mine and a great tech blogger! Took a lot of inspiration tech-wise for the blog.
- [leerob.io](https://leerob.io/) : Simple but effective webdev blog, took some inspiration from the design.

## Frontend framework
My favourite frontend framework of choice is, as you might have guessed, [Sveltekit](https://kit.svelte.dev/).
The component based approached, combined with file based routing and general simplicity really makes using Svelte a fun experience. 

![Svelte [small]](/static/post/009/svelte.png)

So it's probably no suprise that I went with Sveltekit as the frontend framework for this blogging site.
I don't use any fancy external styling solutions. 
Just plain css written in each component file.
## Converting markdown

### Source of truth
When iterating over the architecture of this blogging site, the source of truth has changes quite a lot.
At the start I used a online content managemtent systems (CMS) called [Strapi](https://strapi.io/).
While it worked greatly, I wasn't keen on managing yet another external system.

I moved on to storing my content in +page.svelte files in the routes folder.
I also kept track of all posts and their metadata in a separate JSON file. 
This meant that I had to keep two systems in sync, and while this isn't really complex, it's just anoying. 
Storing each blogpost as a sveltekit page gave me great flexibility, as each page was fully customisable and could have a vastly diffent look, feel, or even embed other svelte components in it. However, this also meant that I had to keep maintaining all these things.
A more general solution that would also work outside of my own environment was needed.

That's when I switched over to markdown files. The [content](https://github.com/jefmeijvis/www.jefmeijvis.com/tree/main/content) folder of my repository now contains a bunch of markdown files which get transformed to html.

The filename dictates the route that will be used under the /blog directory.
So a file called *001-my-first-post.md* will result in a blogpost that can be read at /blog/001-my-first-post.

### Svelte markdown

I've created an [internal svelte api endpoint](/blog/006-sveltekit-api-endpoints) that spits out an array of posts which then can be used further down the line.

The endpoint runs on the server and uses [fs](https://nodejs.org/api/fs.html) to read all the files in the /content directory.

### Front matter
When all the files are loaded, I pass them through [Front Matter](https://www.npmjs.com/package/front-matter), which allows me to extract all the metadata from a markdown file.
This way, I split the file into the metadata and the actual markdown that needs to be rendered. 

### Viewcount
At this point each post already knows his final url, so I can start collecting the viewcount.
This information is stored in a [Supabase table](https://supabase.com/).

![Supabase is used to store viewcounts [small]](/static/post/009/supabase.png)

To prevent constantly needing to fetch this data when I'm developing locally, I implemented a cache.
Each viewcount fetch first checks if there isn't a local file containg the requested information.
With a cache maximum age set to 1 hour, this greatly reduces the amount of calls I have to make to the supabase database. 

### Marked
Next up is generating a hyperlinked table of contents.
By using [Marked](https://www.npmjs.com/package/marked) I'm able to iterate over all the tokens that my markdown file contains. Whenever I encounter a heading element I add this to a list, and this can then later on be used to generate the table of contents.

### Svelte markdown
To acutally render the markdown into html, I use [Svelte Markdown](https://www.npmjs.com/package/svelte-markdown).
This library provides a component that accepts a string of markdown, and optional extra renderers to convert this markdown.

For example:

```svelte
    <script lang="ts">
        import SvelteMarkdown from 'svelte-markdown'
        import Heading from '$lib/renderers/heading.svelte';
        import Paragraph from '$lib/renderers/code.svelte';

        // Map the svelte components to their target type
        let renderers =
        {
            code : Code,
            heading : Heading,
        }

        const source = `
        # This is a header

        This is a paragraph.

        * This is a list
        * With two items
        `
    </script>

    <SvelteMarkdown {source} {renderers} />
```

The content of the heading.svelte and code.svelte file overwrites the default rendering behaviour.
You can have a look at the default renderers on the [Svelte markdown repo](https://github.com/pablo-abc/svelte-markdown/tree/main/src/renderers). I have customised a few of these, which can be found in the [public repo of this blogging site](https://github.com/jefmeijvis/www.jefmeijvis.com/tree/main/src/lib/renderers).

This allows for some nice custom behaviour.
As an example, I've added some optional styling to [image tags](https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/src/lib/renderers/image.svelte).

An image in markdown format is defined as 
```markdown
    ![description goes here](/static/image/example.png)
```

These custom rendering components allow me to pass some extra information via markdown.

```markdown
    ![description goes here [small]](/static/image/example.png)
```

This *[small]* tag is picked up by the [image renderer](https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/src/lib/renderers/image.svelte) and applies some additional styling.

It's an easy (but hacky) fix to customize images from within the markdown sourcefile.
In the same fashion, I've replaced the default quote block with a note element.
This means that the following markdown
```markdown
    > Hi there, I'm writing a note
```
is rendered like this:

> Hi there, I'm writing a note

## Comment section

At the bottom of each blogpost, there is [a component](https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/src/lib/components/utterances.svelte) that renders a comment section.
This comment section makes use of Github Issues, and is powered by [Utterances](https://utteranc.es/).
![Each post has a comment section](/static/post/009/comments.png)

Users can login using their Github account.
All comments are public, and can be viewed on the issue tracker on Github as well. 

## Hosting
Hosting is done on [Vercel](https://vercel.com/).
Integration with Github means that for every commit on the main branch, a new build is triggered.

![This website is hosted on Vercel [small]](/static/post/009/vercel.jpg)

### Build webhook

Additionally, we can also manually trigger this build process using webhooks.
A simple HTTP post request to a specific project URL will start a new build.
Because this site makes use of a static build process, I run this webhook daily.
This means that external information such as the viewcount is refreshed and rerendered every time this hook gets called. 

## Open source
This entire website is open source, and can be viewed on [Github](https://github.com/jefmeijvis/www.jefmeijvis.com).
If you see a spelling mistake, content error or just a bug in the website, please do let me know!
You can [contact](/contact) me privately, create an issue or pull request on the repository.  

## Conclusion
If you want to start blogging, you definitely do not need to create a blogging platform from scratch.
However, I had a great time building this blog in it's current form, and will probably keep iterating on the design and inner workings!
