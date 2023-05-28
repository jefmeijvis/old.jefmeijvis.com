import type { Post } from "src/routes/blog/[slug]/post";
import fs from 'fs';
import { marked } from 'marked';
import fm from "front-matter";
import { Postview } from "$lib/ts/postviews";
export const prerender = true;

export async function GET() 
{
  console.log("🔵 GET api/posts")
  const responseInit : ResponseInit =
  {
      headers : 
          {
              'cache-control' : 'public, max-age=10'
          }
  }

    let postCollection : Post[] = [];

    // Parse the directory and get all the files
    let filePath = './content/';
    let filenames : string[] = fs.readdirSync(filePath);

    // Parse all the files that we found
    for(let i = 0 ; i < filenames.length ; i++)
    {
      let filename = filenames[i];
      console.log("💾 Loading " + filename);

      let markdown = fs.readFileSync(filePath + filename, 'utf8');
      let post : Post = {} as Post;
      post.rawMarkdown = markdown;
      post.filename = filename;
      post.views = await GetPageviews(post);

      // Generate table of content;
      let splitMarkdown = fm(post.rawMarkdown);
      post.markdown = splitMarkdown.body;
      post.tableOfContents = generateTableOfContents(post.markdown);

      // Get meta information for blogpost header
      let attributes : any = splitMarkdown.attributes
      post.author = attributes.author;
      post.image = attributes.image;
      post.title = attributes.title;
      post.date = attributes.date;
      post.description = attributes.description;
      post.tags = splitTags(attributes.tags);
      post.id = attributes.id;
      post.published = attributes.published;

      if(post.published)
      {
        postCollection.push(post);
      }
    }

    let sortingFunction = (a : Post,b : Post) => 
    {
      return b.id - a.id;
    } 

    // Return an array of objects containing this information
    postCollection = postCollection.sort(sortingFunction);
    return new Response(JSON.stringify(postCollection),responseInit);
}

function generateTableOfContents(input : string) : {}[]
{
    const tokens = marked.lexer(input)

    let headings : {}[] = [];

    marked.walkTokens(tokens, token=> 
    {
        if(token.type == "heading")
            headings.push(token)
    }
    )

    return headings;
}

function splitTags(input : string) : string[]
{
  let arr = input.split(",");
  arr.forEach(element => {
      element = element.trim();
  });

  return arr;
}

async function GetPageviews(post : Post) : Promise<number>
{
  console.log("GetPageViews")
  let path : string = post.filename.replace(".md","");

  let link : string = "https://www.jefmeijvis.com/";

  let fullPath : string = link + "blog/" + path;
  let views : number = await Postview.GetViews(fullPath);


  if(views == -1)
    views = 0;

  return views;
  // update
}

