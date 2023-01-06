import { readFileSync } from "fs";
import type { Post } from "./post";
export const prerender = true;


export async function load({params,fetch} : any) {
    return {     
        slug : params.slug,
        post : await getPostForThisPage(params.slug,fetch),
        timestamp : new Date().toLocaleString("be-nl"),
    };
  }

async function getPostForThisPage(slug : string, fetchFunction : Function)
{
    let posts : Post[] = await (await fetchFunction('/api/posts')).json();
    let targetPost : Post = {} as Post;

    for(let i = 0 ; i < posts.length ; i++)
    {
        let post : Post = posts[i];
        if(post.filename.replace(".md","") == slug)
            targetPost = post;
    }

    return targetPost;
}