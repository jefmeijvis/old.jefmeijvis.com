import { writable,readable, type Subscriber } from 'svelte/store';
import type { Post } from '../routes/blog/[slug]/post'

export const filter = writable("");

export const light = writable(true);

export const allPosts = createAllPostsStore();

function createAllPostsStore()
{
	const { subscribe, set, update } = writable([] as Post[]);

    return {
        subscribe,
        init: async () => 
        {
            let posts : Post[] = await (await fetch('/api/posts',{ method : "GET"})).json();
            console.log("🪷 post store init: " + posts.length);
            set(posts);
        }
    }
}
