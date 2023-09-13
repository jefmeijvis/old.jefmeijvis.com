import type { Action, Element } from "./enums";
import { supabase } from "./supabase";

export class VisitLogger
{
    public static async LogVisit(page : string, useragent : string, lang :string, vendor : string)
    {
        let local : boolean = this.IsExcludedFromLogging(page);

        console.log('📃' + " [VisitLog] " + page)

        if(local)
            return;

        // Construct the database row
        let row : any = {page : page , user_agent : useragent, lang : lang , vendor : vendor};

        // Post to Supabase
        await supabase
        .from("jefmeijvis_visits")
        .insert([row]);
    }

    public static async LogAction(action : Action, element : Element | string, page : string)
    {
        let local : boolean = this.IsExcludedFromLogging(page);
        console.log("🖱️ LogAction[" + action + ", " + element + ", " + page + "," + (local ? 'local' : 'not local') + "]")
        if(local)
            return;

        let row : { action : Action, element : Element | string, page : string} = {page : page,action : action, element : element};

        // Post to Supabase
        await supabase
        .from("jefmeijvis_actions")
        .insert([row]);
    }

    private static IsExcludedFromLogging(page : string)
    {
        // If a page url contains one of the keywords, it is excluded from logging
        // This prevents logging of local development and vercel preview urls
        let excludedKeywords : string[] = [".vercel.app" , "localhost:"]
        for(let i = 0 ; i < excludedKeywords.length ; i++)
        {
            let keyword = excludedKeywords[i];
            if(page.includes(keyword))
                return true;
        }

        return false;
    }
}