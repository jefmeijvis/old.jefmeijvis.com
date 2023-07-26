import { LocalCache } from '$lib/ts/cache.js';

export const prerender = true;

export async function GET({fetch}) 
{
  console.log("🔵 GET api/mastodon");

  let url :string =  'https://mastodon.social/api/v1/accounts/109319271786618931/statuses';

  const func = async () => 
  {
      let response = await fetch(url);
      let json = response.json();
      return json;
  };

  let response = await LocalCache(func,3600,'mastodon-get-feed');
  return new Response(JSON.stringify(response.slice(0,5)));
}