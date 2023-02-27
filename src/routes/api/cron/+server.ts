export async function GET(req : any) 
{
    let url : string | undefined = process.env.VERCEL_HOOK;

    if(!url)
    {
      console.log("Unable to get VERCEL_HOOK");
      return new Response('Unable to get VERCEL_HOOK');
    }

    let res = await fetch( url, {method : 'GET'});
    let jsonResponse = await res.json();
    console.log(jsonResponse);
    return new Response(jsonResponse);
  }