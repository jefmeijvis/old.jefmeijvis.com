# 🙍‍♂️Personal blogging site

This is the public repository containing my personal blogging website.
I blog all the things related to .NET, Azure, Security and Svelte.
You can visit the site on [www.jefmeijvis.com](https://www.jefmeijvis.com)

![Homepage](/static/homepage.png)

# 🖋️ Contributing

Feel free to open an issue or submit a PR if you feel like something needs to be different!
All the content is written in markdown and is stored in this repository under */content*

# 💻 How it's build
The website is build using [Sveltekit](https://kit.svelte.dev/).
All content is written in markdown.
At build-time, the markdown gets converted to html by [Svelte Markdown](https://www.npmjs.com/package/svelte-markdown)
Each type of markdown element has a matching Svelte component that I can use to customize rendering behaviour. 
[Marked](https://www.npmjs.com/package/marked) is used to extract all the tokens from the markdown and automatically generate a table of contents. 
[Front Matter](https://www.npmjs.com/package/front-matter) extracts metadata from the top of each markdown file which then can be used further down the rendering pipeline.
Page view information gets pulled from a [🦸 Supabase table](https://supabase.com/) and added to the post information.
All of these steps happen at build time.
A daily build is triggered via a webhook.
Hosting of the site is done on [▲ Vercel](https://vercel.com/)