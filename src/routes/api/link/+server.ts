import { Action, Element } from "$lib/ts/enums";
import { VisitLogger } from "$lib/ts/visitlogger";
import type { RequestEvent } from "../$types";

export async function POST({ request } : RequestEvent) 
{
    const dataobject : any = await request.json();
    await VisitLogger.LogAction(Action.Link, dataobject.href, dataobject.page)
    return new Response();
}
