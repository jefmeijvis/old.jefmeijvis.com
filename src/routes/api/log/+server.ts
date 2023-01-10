import { VisitLogger } from "$lib/ts/visitlogger";
import type { RequestEvent } from "../$types";

export async function POST({ request } : RequestEvent) 
{
    const dataobject : any = await request.json();
    let page : string = dataobject.page;
    await VisitLogger.LogVisit(page);
    return new Response();
}
