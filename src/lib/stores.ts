import { writable,readable, type Subscriber } from 'svelte/store';
import type { Post } from '../routes/blog/[slug]/post'



export const filter = writable("");

export const light = writable(true);

//export const allPosts = readable([] as Post[],start)
export const allPosts = createAllPostsStore();

function createAllPostsStore()
{
	const { subscribe, set, update } = writable([] as Post[]);
    let arr : Post[] = [];
    let post : Post = {} as Post;
    post.filename = "myfilename";
    post.slug = "myslug";
    post.title = "my first post"
    arr.push(post)

    return {
        subscribe,
        init: async () => 
        {
            let posts = await (await fetch('/api/posts')).json()
            set(posts);
        }
    }
}


function sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}