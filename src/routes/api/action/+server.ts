import type { Action, Element } from "$lib/ts/enums";
import { VisitLogger } from "$lib/ts/visitlogger";
import type { RequestEvent } from "../$types";

export async function POST({ request } : RequestEvent) 
{
    const dataobject : any = await request.json();
    let page : string = dataobject.page;
    let action : Action = dataobject.action;
    let element : Element = dataobject.element;

    await VisitLogger.LogAction(action,element,page);
    return new Response();
}
