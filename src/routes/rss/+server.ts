import type { Post } from "../blog/[slug]/post";

// Header options
const responseInit : ResponseInit =
{
    headers : 
    {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml',
    }
}



let bodyStart = '<?xml version="1.0" encoding="UTF-8" ?>' 
+ '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">'
+ '<channel>'
+ '<atom:link href="https://www.jefmeijvis.com/rss" rel="self" type="application/rss+xml" />' 
+ '<title>Jef Meijvis</title>' 
+ '<link>https://www.jefmeijvis.com</link>' 
+ '<description>Jef Meijvis blog</description>'


let bodyEnd = '</channel>' + '</rss>';


export async function GET({fetch}) 
{
  let response = await fetch('/api/posts');
  let json = await response.json();
  //console.dir(json);
  let body : string = bodyStart;
  for(let i = 0 ; i < json.length ; i++)
  {
    let post : Post = json[i];
    body += '<item>';

    // Title
    body += '<title>'
    body += post.title;
    body += '</title>'

    // Link
    body += '<link>'
    body += generateLink(post);
    body += '</link>'

    // Description
    body += '<description>'
    body += post.description;
    body += '</description>'

    // Author
    body += '<author>'
    body += post.author;
    body += '</author>'

    // Guid
    body += '<guid isPermaLink="true">'
    body += generateLink(post);
    body += '</guid>'

    // Guid
    body += '<source>'
    body += 'https://www.jefmeijvis.com/rss'
    body += '</source>'

    // Category
    for(let j = 0 ; j < post.tags.length ; j++)
    {
      body += '<category>'
      body += post.tags[j].trim();
      body += '</category>'
    }

    // PubDate
    body += '<pubDate>'
    body += generateDate(post);
    body += '</pubDate>'

    body += '</item>';
  }

  body += bodyEnd;
  return new Response(body,responseInit);
}

function generateDate(post : Post) : string
{
  let dateString : string[] = post.date.split('/');
  let day = dateString[0];
  let month = dateString[1];
  let year = dateString[2];

  let d : Date = new Date();
  d.setDate(Number.parseInt(day));
  d.setMonth(Number.parseInt(month));
  d.setFullYear(Number.parseInt(year));
  return d.toUTCString();
}

function generateLink(post : Post) : string
{
  return 'www.jefmeijvis.com/blog/' + post.filename.replace('.md','');
}