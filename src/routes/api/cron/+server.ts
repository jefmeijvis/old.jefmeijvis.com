export async function GET(req : any) 
{
  console.dir(process.env)
    let url : string | undefined = process.env.VERCEL_URL;

    if(!url)
    {
      console.log("Unable to get VERCEL_URL");
      return new Response('Unable to get VERCEL_URL');
    }

    let res = await fetch( url, {method : 'GET'});
    let jsonResponse = await res.json();
    console.log(jsonResponse);
    return new Response(jsonResponse);
  }