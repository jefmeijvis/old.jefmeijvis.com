export async function GET(req : any) 
{
    let url : string | undefined = process.env.VERCEL_HOOK;

    let cornucopiaUrl : string | undefined = process.env.VERCEL_CORNUCOPIA_HOOK;


    if(!url || !cornucopiaUrl)
    {
      console.log("Unable to get VERCEL_HOOK or VERCEL_CORNUCOPIA_HOOK");
      return new Response('Unable to get VERCEL_HOOK or VERCEL_CORNUCOPIA_HOOK');
    }

    let res = await fetch( url, {method : 'GET'});
    let jsonResponse = await res.json();
    console.log(jsonResponse);

    let res2 = await fetch( cornucopiaUrl, {method : 'GET'});
    let jsonResponse2 = await res.json();
    console.log(jsonResponse2);
    return new Response(jsonResponse);
  }