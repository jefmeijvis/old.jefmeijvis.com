import fs from 'fs';

// Cache the result of a given function on the local filesystem
export async function LocalCache(func : Function, cacheSeconds : number, description : string)
{
    let filename : string = generateFilename(description);
    if(cacheIsOk(filename,cacheSeconds))
    {
        console.log("🟢 Found general request " + description + " in cache.");
        return JSON.parse(fs.readFileSync(filename).toString()); 
    }
    else
    {
        console.log("🟠 " + description + " not in cache, got from API");
        let result = func();
        let response = await Promise.resolve(result)

        fs.writeFileSync(filename, JSON.stringify(response));
        return response;
    }

}

function getSecondsAge(input : Date) : number
{
    let today = new Date();
    return Math.round(Math.abs(today.getTime() - input.getTime()) / 1000);
}

function generateFilename(input : string) : string
{
    return 'cache/' + input + '.cache';
}

function cacheIsOk(path : string, maximumAge : number) : boolean
{

    let fileExists : boolean = fs.existsSync(path);

    if(!fileExists)
        return false;

    let stats = fs.statSync(path);
    let diff : number =  getSecondsAge(stats.mtime)// Cache age in seconds
    console.log('Cache age is ' + diff + 's')
    if(diff > maximumAge) // Cache maximumAge is 1 hour
        return false;

    return true;
}