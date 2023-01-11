export function getRenderTimestamp() : string
{
    let options : any = 
    {
        timeZone: 'Europe/Brussels',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }

    let locale : string = "en-us"
    let rval : string = (new Date()).toLocaleString(locale, options) + ' (GMT+1)';
    console.log('🕓 Got render timestamp :' + rval)
    return rval;
}