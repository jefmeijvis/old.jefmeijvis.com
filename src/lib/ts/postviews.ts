import { supabase } from "./supabase";

export class Postview
{
    static async GetViews(page : string) : Promise<any>
    {
        let value = await supabase.from("jefmeijvis_visits").select('*',{count : "exact"}).eq('page',page);
        let result = -1;

        if(value.count)
            result = value.count;
            
        return result;
    }
}