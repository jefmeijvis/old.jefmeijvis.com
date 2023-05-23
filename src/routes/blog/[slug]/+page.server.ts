import type { Post } from "./post";
import { getRenderTimestamp } from "$lib/ts/timeProvider";
export const prerender = true;


export async function load({params,fetch} : any) {
    return {     
        slug : params.slug,
        post : await getPostForThisPage(params.slug,fetch),
        timestamp : getRenderTimestamp(),
        commit : await(await fetch('/api/github',{method : 'GET'})).json(),
        posts: await (await fetch('/api/posts')).json(),

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