---
author: Jef Meijvis
id : 11
image : /post/011/logo.png
title: Azure Functions as a cron job
date: 24/02/2023
description : Setting up a cron job using Azure functions
tags : Azure
published : true
---

## Azure function cron job
Azure functions can be used in countless different ways. One of these is setting up a Cron timer as the trigger for your function, allowing it to run in a scheduled manner. In this post I will show you how to create a cron job with Azure functions.

Let's get started by opening up Visual Studio 2022 and selecting the Azure Functions template. I'm using .NET 6.0 (LTS) here, but any recent version of .NET will do. As function trigger we will select a Timer trigger.  

![Creating a new functions project in Visual Studio 2022](/static/post/011/azure-functions-template.png)

Don't worry about getting the initial settings wrong, as they can all be changed later. When creating the project we get the following starting point:

```csharp
using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace FunctionApp1
{
    public class Function1
    {
        [FunctionName("Function1")]
        public void Run([TimerTrigger("0 */5 * * * *")]TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");
        }
    }
}
```

The `Run` method is the entry point for our function. The `TimerTrigger` attribute is what triggers our function. The string value is a cron expression that determines when the function will be executed. In this case the function will run every 5 minutes. The `TimerInfo` parameter contains information about the timer that triggered the function. The `ILogger` parameter is used to log information to the Azure function log. Both the TimerInfo and ILogger are provided by means of dependency injection.

To evaluate the CRON expression, Azure Functions uses [NCron](https://github.com/atifaziz/NCrontab) under the hood. 
The expression consists out of 6 parts, separated by a space. The first 5 parts are the time parts, and the last part is the day of the week. The time parts, from left to right, are as follows:

```markdown
* * * * * *
{sec} {min} {hour} {day} {month} {day}

```


|Part               |Values |
|---                |---    |
|Second             |0-59   |   
|Minute             |0-59   |   
|Hour               |0-23   |  
|Day of the month   |1-31   |   
|Month              |1-12   |   
|Day of the week    |0-6    |  

The first part (the seconds) is optional, and can be omitted. Besides numbers or strings, we can also use the following characters:

|Character  |Description            |Example                                |
|---        |---                    |---                                    |
|*          |any value              | Value doesn't matter                  |
|,          |value list separator   | Combine multiple options              |
|-          |range of values        | Specify a range of sequential values  |
|/          |step values            | Every nth value                       |


Multiple online resources exist to help you create a cron expression.[crontab.cronhub.io](https://crontab.cronhub.io/) for example, allows you to generate, test and verify cron expressions.

## A practical example
Let's say I want to rebuild my blogging website from source, every morning at 6:00 AM.
We can use the following expression to achieve this:
```csharp
    string EveryMorningAtSix = "0 0 6 * * *";
```

We modify our function to be Async, and create a new method that does the required work.
In my case, this blog is hosted on [Vercel](https://vercel.com/), which allows me to call an HTTP endpoint to manually start the build process. 


```csharp
    public class DailyDeployment
    {
        [FunctionName("DailyDeployment")]
        public async void Run([TimerTrigger("0 0 6 * * *")]TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");
            await TriggerVercelDeployment();
        }
    }

    private async Task TriggerVercelDeployment()
    {
        string url = Environment.GetVariable(Environment.VercelDeploymentHook);
        HttpClient client = new();
        await client.GetAsync(url);
    }
```

This way, our function will be triggered every morning at 6:00 AM, and will trigger a new build on Vercel!

## Further reading
- [Microsoft learn documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=in-process&pivots=programming-language-csharp#ncrontab-expressions)
- [NCrontab github repo](https://github.com/atifaziz/NCrontab)