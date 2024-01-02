---
author: Jef Meijvis
id : 23
image : /post/023/logo.png
title: The OpenGraph protocol for the web
date: 14/12/2023
description : Understanding how to use the OpenGraph protocol to improve your website.
tags : Frontend, OpenInternet 
published : true
---

## Created at Facebook
The [Open Graph Protocol](https://ogp.me/) (or OGP for short) was created at Facebook in 2010.
It's primary use was to give external sites shared on Facebook the same functionality as Facebook-native objects (articles/profiles/images/...).
Web developers could enrich their website by adding additional metadata so that, when shared via Facebook, a nice card would appear. 

The example below shows an article from the [New York Times](https://www.nytimes.com/) being shared on Facebook.
Their website uses the OGP to provide an article title, description, author and image-url.
Using all this information, Facebook is able to generate the preview card shown below: 

![A card generated with the OpenGraph data available [medium]](/static/post/023/facebook-card.png)

## Widespread adoption
Since then, the OGP has been wildly adopted by almost all mainstream content websites and social media platforms.
Whenever you share a popular website on Microsoft Teams, Discord, Slack or Twitter, chances are that a neat little preview is generated. 

![Sharing a post on Twitter [medium]](/static/post/023/twitter-card.png)


## How to use
Implementing the OGP for your own website is easy.
There are 4 required metadata properties that are required:
- **og:title**: The title of the object we're sharing
- **og:type**: The type of object we're sharing (e.g. article, website, video, ...) view [all types here.](https://ogp.me/#types)
- **og:image**: An url to an image that represents the object
- **og:url**: The permanent URL to the object we're sharing (e.g. https://www.jefmeijvis.com)

Theses properties need to be added to the HTML of our website, more specifically the head section.
This makes it technology independent. It doesn't matter if you're building a website with Wordpress, Sveltekit or React.
Note that they make use of the existing [meta HTML tag](https://www.w3schools.com/tags/tag_meta.asp). 
Below is an example for the card of the New York Times article that's shown earlier: 

```xml
    <head>
        <meta property="og:url"         content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content="When Great Minds Don’t Think Alike" />
        <meta property="og:image"       content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
    </head>
```


### Optional tags
A few other optional Open Graph tags exist to add more information.
One of the most commonly used is **og:description**, providing a small description of the object being shared.
Other options such as **og:locale**, **og:site_name**, **og:video** and their description are listen on [ogp.me/#optional](https://ogp.me/#optional).

### Structured properties
Some properties allow for the nesting of sub-properties.
This way more information can be added to an existing property.
The **og:image** tag is a good example, as is can be refined by adding a **og:image:type**, **og:image:width** or **og:image:height** tag.

```xml
    <meta property="og:image" content="https://www.jefmeijvis.com/opengraph.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
```

For more details and all the possible options, it is best to refer to the [documentation.](https://ogp.me/#structured)

### Exotic OG tags
Over the years, some social media have started reading custom OG tags.
Twitter, for example, interprets the following tags which aren't part of the Open Graph Protocol standard. 

```xml
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@jefmeijvis" />
<meta name="twitter:creator" content="@jefmeijvis" />
```

Adding theses platform specific tags can be valuable when your content get's shared on that platform. 
More information about the Twitter tags can be found on their [developers documentation site](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started).

## How to validate
To validate and check the tags provided by your site (or someone else's) a couple of handy tools exits:
- https://www.opengraph.xyz/
- https://opengraph.dev/

These tools will even generate a nice little preview of how your content is displayed on some major platforms!

## Further reading and relevant links
- https://ogp.me/
- https://developers.facebook.com/docs/sharing/webmasters/
- https://www.opengraph.xyz/
- https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started