/*
  Vercel specific cron job API endpoint
*/

export function GET(req : any) {
    return new Response('Hello Cron!');
  }