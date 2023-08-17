---
author: Jef Meijvis
id : 17
image : /post/017/logo.png
title: Creating a RSS feed
date: 25/07/2023
description : Creating a RSS feed from scratch for the blog.
tags : OpenInternet
published : true
---

## Creating a RSS feed
Recently I added a RSS feed to my personal blogging site.
[RSS (RDF Site Summary)](https://en.wikipedia.org/wiki/RSS) is a web feed technology, allowing programs to get updates from websites in a standardized fashion. Applications (called aggregators) can collect updates from different RSS sources, and display them in a custom newsfeed. RSS is mostly used for websites that update frequently such as blogs, podcasts and news sites.

![RSS Logo [medium]](/static/post/017/logo.png)

## What is RSS
When queried, a RSS feed displays channels containing generic items. 
This data is provided as a XML file, which then can be read by appropriate applications.
Below code snippet is an example of a RSS feed with one channel, containing 2 items:

```xml
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <atom:link href="https://www.jefmeijvis.com/rss" rel="self" type="application/rss+xml"/>
        <title>Jef Meijvis</title>
        <link>https://www.jefmeijvis.com</link>
        <language>en</language>
        <description>Blogging about general secure software development. Often making use of .NET, Azure and Svelte</description>
        <image>
            <url>https://www.jefmeijvis.com/profile-picture.png</url>
            <title>Jef Meijvis</title>
            <link>https://www.jefmeijvis.com</link>
        </image>
        <item>
            <title>Microsoft threat modeling tool</title>
            <link>https://www.jefmeijvis.com/blog/016-microsoft-threat-modeling-tool</link>
            <description>Making use of the official Microsoft threat modeling tool.</description>
            <guid isPermaLink="true">https://www.jefmeijvis.com/blog/016-microsoft-threat-modeling-tool</guid>
            <source url="https://www.jefmeijvis.com/rss">Jef Meijvis</source>
            <category>Security</category>
            <enclosure url="http://www.jefmeijvis.com/post/016/logo.png" length="221004" type="image/png"/>
            <pubDate>Sat, 15 Jul 2023 11:33:10 GMT</pubDate>
        </item>
        <item>
            <title>Techorama, Gamify threat modeling</title>
            <link>https://www.jefmeijvis.com/blog/015-gamify-threat-modeling</link>
            <description>At Techorama Antwerp 2023 I gave a talk about gamifying threat modeling.</description>
            <guid isPermaLink="true">https://www.jefmeijvis.com/blog/015-gamify-threat-modeling</guid>
            <source url="https://www.jefmeijvis.com/rss">Jef Meijvis</source>
            <category>Security</category>
            <category>OWASP</category>
            <category>Cornucopia</category>
            <category>Talk</category>
            <enclosure url="http://www.jefmeijvis.com/post/015/logo.png" length="221004" type="image/png"/>
            <pubDate>Sat, 24 Jun 2023 11:33:10 GMT</pubDate>
        </item>
    </channel>
</rss>
```

## Channels

The RSS tag contains channels.
Each channel contains multiple items, as well as a bit of general information.
The following 3 tags are required for a channel, here filled in with a made-up developer news channel:

```xml
<channel>
    <title>Developer News Channel</title>'
    <link>https://www.developer-new-channel.com</link>
    <description>The latest news for software developers all around the globe!</description>
</channel>
```

## Items
Now if we want to do anything useful with RSS feed, we need to publish some items.
An item is a child element of a channel and only needs a required title or description like so:

```xml
<channel>
    <title>Developer News Channel</title>'
    <link>https://www.developer-new-channel.com</link>
    <description>The latest news for software developers all around the globe!</description>
    <item>
        <title>
            Svelte rises in popularity!
        </title>
        <description>
            The javascript framework created by Rich Harris, Svelte, keeps on rising in popularity according to the state-of-js survey
        </description>
    </item>
</channel>
```

Many other elements can be added to channels and items to include more information.
An entire list with useful examples can be found at [The RSS Specification](https://www.rssboard.org/rss-specification).

## Generating in Svelte
Since this blog is created using Svelte, 
I generate the RSS feed on the fly making use of an [Sveltekit API endpoint](http://localhost:5173/blog/006-sveltekit-api-endpoints).
The source code for this endpoint can be viewed [here on Github](https://github.com/jefmeijvis/www.jefmeijvis.com/blob/main/src/routes/rss/%2Bserver.ts).

```js
export async function GET({fetch,url}) 
{
    let body = ''
    // Iterate over every post, and generate an <item></item>, add this item to the body string
    return new Response(body,responseInit);
}
```

I use the following headers to indicate that the request serves a XML file.
```js
// Header options
const responseInit : ResponseInit =
{
    headers : 
    {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml',
    }
}
```

## Conclusion
All in all, RSS is a great technology that is (in my opinion) really under-used. 
Aggregators availability and browser support for RSS has really shrunk over the past decade.
In a time where the battle for an open internet is more relevant than ever (looking at you, Twitter) RSS seems like a great technological standard to allow automatic distribution of website updates. 

## Further reading and relevant links
- https://www.rssboard.org/rss-specification
- https://en.wikipedia.org/wiki/RSS

