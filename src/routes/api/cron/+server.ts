export async function GET(req : any) 
{
    let res = await fetch(process.env.VERCEL_DEPLOYMENT_URL ?? "", {method : 'GET'});
    let jsonResponse = await res.json();
    return new Response(jsonResponse);
  }