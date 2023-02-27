import type { Action, Element } from "./enums";
import { supabase } from "./supabase";

export class VisitLogger
{
    public static async LogVisit(page : string)
    {
        if(this.IsLocal(page))
            return;

        // Construct the database row
        let row : { page : string} = {page : page};

        // Post to Supabase
        await supabase
        .from("jefmeijvis_visits")
        .insert([row]);
    }

    public static async LogAction(action : Action, element : Element | string, page : string)
    {
        let local : boolean = this.IsLocal(page);
        console.log("🖱️ LogAction[" + action + ", " + element + ", " + page + "," + (local ? 'local' : 'not local') + "]")
        if(local)
            return;

        let row : { action : Action, element : Element | string, page : string} = {page : page,action : action, element : element};

        // Post to Supabase
        await supabase
        .from("jefmeijvis_actions")
        .insert([row]);
    }

    private static IsLocal(page : string)
    {
        if(page.includes("localhost"))
            return true;
        
        return false;
    }
}