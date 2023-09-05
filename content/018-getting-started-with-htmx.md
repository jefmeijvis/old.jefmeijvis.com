---
author: Jef Meijvis
id : 18
image : /post/018/logo.png
title: Getting started with HTMX
date: 21/08/2023
description : All aboard the hypetrain because new frontend technology just dropped!
tags : Frontend
published : false
---

## Getting started with HTMX
All aboard the hypetrain because a new frontend framework just dropped!

![HTMX Logo [medium]](/static/post/018/logo.png)

## HTMX?

[HTMX](https://htmx.org/) is a small (14kb) javascript library, that runs client-side in the browser.
It's main promise is to expand the current existing html tags by adding attributes to them.

Consider the following index.html file, which is served to the client.
It contains a script tag which downloads the HTMX library from [UNPKG](https://www.unpkg.com/).

Next up is a button tag, which includes 2 attributes that are specific to HTMX:
- [hx-post='clicked'](https://htmx.org/attributes/hx-post/) specifies an endpoint that will receive a post request when clicked.
- [hx-swap='outerHTML'](https://htmx.org/attributes/hx-swap/) specifies which part of the HTML needs to be replaced by the response from the endpoint. In this case the outerHTML from the button gets replaced.


```html
    <script src="https://unpkg.com/htmx.org@1.9.5"></script>

    <!-- have a button POST a click via AJAX -->
    <button hx-post="/clicked" hx-swap="outerHTML">
        Click Me
    </button>
```

At the backend we need an api that returns html.
Multiple backend technologies are possible, but for the sake of demonstration I've set up a [Node Express](https://expressjs.com/) REST API.
The API has a single endpoint that accepts a POST request, and returns the button HTML again, but with an updated counter. 


```js
    import express from 'express';
    let port = 3021
    let counter = 0;

    const app = express();
    app.post('/', (req, res) => {
    counter++;
    return res.send('<button hx-post="/clicked" hx-swap="outerHTML">Click Me ' + counter + '</button>');
    });

    app.listen(port, () =>console.log(`Example app listening on port ${port}!`));
```

Each time the user presses the button, a counter is updated and the new button tag is returned.
This is a minimal example, as many [more attributes](https://htmx.org/reference/#attributes) are available.
The [HTMX example page](https://htmx.org/examples/) showcases a lot of UI and UX patterns ands their implementation with UI/UX.

## Conclusion
HTMX is a new library that goes back to the old approach of rendering HTML on the server.
While I've never tried to create an entire web application using HTMX, it sure does offer an interesting perspective on front-end technologies! 

## Further reading and relevant links
- https://htmx.org/
- https://htmx.org/reference/#attributes
- https://htmx.org/examples/
