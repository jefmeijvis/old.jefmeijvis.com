import { LocalCache } from "$lib/ts/cache";
import type { RequestEvent } from "../$types";

export async function GET({ request } : RequestEvent) 
{
    let url : string = 'https://api.github.com/repos/jefmeijvis/www.jefmeijvis.com/commits'
    let rqinit = 
    {
        method : "GET",
        headers : 
        {
            'X-GitHub-Api-Version' : '2022-11-28',
            'Accept' : 'application/vnd.github+json',
            'Authorization' : 'Bearer ' + process.env.GITHUB_TOKEN

        }
    }

    const func = async () => 
    {
        let response = await fetch(url,rqinit);
        let json =  response.json();
        return json;
    };

    let response = await LocalCache(func,3600,'github-get-latest-commit');
    let lastCommit = response[0];
    let sha = lastCommit.sha;
    let commitSha = sha.slice(0,7);
    let commitUrl = "https://github.com/jefmeijvis/www.jefmeijvis.com/commit/" + sha;

    return new Response(JSON.stringify({commit : commitSha, url : commitUrl}));
}
