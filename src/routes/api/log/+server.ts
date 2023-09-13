import { VisitLogger } from "$lib/ts/visitlogger";
import type { RequestEvent } from "../$types";

export async function POST({ request } : RequestEvent) 
{
    const dataobject : any = await request.json();
    let page : string = dataobject.page;
    let useragent : string = dataobject.useragent;
    let lang : string = dataobject.lang;
    let vendor : string = dataobject.vendor;
    await VisitLogger.LogVisit(page, useragent, lang, vendor);
    return new Response();
}
