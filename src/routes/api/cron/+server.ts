/*
  Vercel specific cron job API endpoint
*/

export function GET(req : any) {
    console.log("This is a log line with timestamp "+ new Date().toISOString());
    return new Response('Hello Cron!');
  }