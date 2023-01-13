import { supabase } from "./supabase";
import fs from 'fs';

export class Postview
{
    // Return the amount pageviews of any specific page
    // @param page : filename such as https://www.jefmeijvis.com/blog/
    static async GetViews(page : string) : Promise<any>
    {
        let filename : string = generateFilename(page);

        if (cacheIsOk(filename))
        {
            let value = fs.readFileSync(filename);
            let num = value.toString();
            console.log("🟢 Found viewcount in cache: " + num + ' views. ');
            return num;
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

function generateFilename(input : string) : string
{
    let id = input.replace("https://www.jefmeijvis.com/blog/","").slice(0,3);
    return 'cache/supabase-' + id + "-" + hash(input) + '.cache';
}

function cacheIsOk(path : string) : boolean
{
    let fileExists : boolean = fs.existsSync(path);

    if(!fileExists)
        return false;

    let stats = fs.statSync(path);
    let diff : number =  getSecondsAge(stats.mtime)// Cache age in seconds
    console.log('Cache age is ' + diff + 's')
    if(diff > 3600) // Cache maxage is 1 hour
        return false;

    return true;
}

function getSecondsAge(input : Date) : number
{
    let today = new Date();
    return Math.round(Math.abs(today.getTime() - input.getTime()) / 1000);
}

function hash(str : string)
 {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) 
    {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return Math.abs(hash);
}