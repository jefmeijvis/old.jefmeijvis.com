import type { Post } from "src/routes/blog/[slug]/post";
import fs from 'fs';
import { marked } from 'marked';
import fm from "front-matter";
export const prerender = true;


export function GET() 
{
    let postCollection : Post[] = [];

    // Parse the directory and get all the files
    let filePath = './content/';
    let filenames : string[] = fs.readdirSync(filePath);

    // Parse all the files that we found
    for(let i = 0 ; i < filenames.length ; i++)
    {
      let filename = filenames[i];
      console.log("Loading " + filename);

      let markdown = fs.readFileSync(filePath + filename, 'utf8');
      let post : Post = {} as Post;
      post.rawMarkdown = markdown;
      post.filename = filename;
      postCollection.push(post);
    }


    for(let i = 0 ; i < postCollection.length ; i++)
    {
      // For each file
      let post : Post = postCollection[i]
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
      // Generate and extract metadata
    }





      // Generate htm from markdown

    let sortingFunction = (a : Post,b : Post) => 
    {
      return b.id - a.id;
    } 

    // Return an array of objects containing this information
    postCollection = postCollection.sort(sortingFunction);

    return new Response(JSON.stringify(postCollection));
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

