import { getRenderTimestamp } from "$lib/ts/timeProvider";

export async function load({fetch} : any) {
    return {     
        posts : await (await fetch('/api/posts')).json(),
        timestamp : getRenderTimestamp(),
        commit : await(await fetch('/api/github',{method : 'GET'})).json(),
    };
  }