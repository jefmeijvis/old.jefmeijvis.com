import { supabase } from "./supabase";
import fs from 'fs';

export class Postview
{
    static async GetViews(page : string) : Promise<any>
    {
        let filename : string = 'cache/' + hash(page) + '.txt';

        if (cacheIsOk(filename))
        {
            let value = fs.readFileSync(filename);
            console.log("🟢 Found value in cache: " + value);
            return value;
        }
        else
        {
            let value = await supabase.from("jefmeijvis_visits").select('*',{count : "exact"}).eq('page',page);
            let result = -1;
    
            if(value.count)
                result = value.count;
                console.log("🟠 Value not in cache, got from API: " + result);
                fs.writeFileSync(filename, result + '');
            return result;
        }
    }
}

function cacheIsOk(path : string) : boolean
{
    let fileExists : boolean = fs.existsSync(path);

    if(!fileExists)
        return false;

    let stats = fs.statSync(path);
    let lastModificationTime : Date = stats.mtime;
    let today = new Date();
    let diff : number = Math.round(Math.abs(today.getTime() - lastModificationTime.getTime()) / 1000); // Cache age in seconds
    console.log('Cache age is ' + diff)
    if(diff > 60)
        return false;

    return true;
}

function hash(str : string)
 {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) 
    {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}