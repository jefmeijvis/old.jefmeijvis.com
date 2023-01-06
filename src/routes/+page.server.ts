export async function load({fetch} : any) {
    return {     
        posts : await (await fetch('/api/posts')).json(),
        timestamp : new Date().toLocaleString("be-nl"),
    };
  }