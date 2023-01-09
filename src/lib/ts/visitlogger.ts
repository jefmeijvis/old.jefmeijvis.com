import { supabase } from "./supabase";

export class VisitLogger
{
    public static async LogVisit(page : string)
    {
        if(page.includes("localhost"))
            return;

        if(page.includes("vercel"))
            return;

        // Construct the database row
        let row : { page : string} = {page : page};

        // Post to Supabase
        await supabase
        .from("jefmeijvis_visits")
        .insert([row]);
    }
}