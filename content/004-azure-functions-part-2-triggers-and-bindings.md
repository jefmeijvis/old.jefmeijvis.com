---
author: Jef Meijvis
id : 4
image : /post/004/eventgrid-logo.png
title: Azure functions part 2 - Triggers and bindings
date: 12/03/2022
description : Triggers and bindings are core properties of an Azure function. In this blogpost we will have a deeper look ...
tags : Azure,Functions
published : true
---

For part one, see [Azure Functions : part 1](/blog/003-azure-functions-part-1-getting-started)

### Triggers and bindings

A trigger is what causes your Azure function to run. It defines how and when your function is invoked. To have a working function, you need exactly one trigger.

A binding is a way to connect your function to other resources, such as Cosmos DB, Service Bus, Blob Storage and many others. Bindings are often available in both the in and out direction, depending on what your usecase is.

Let's clarify this with an example. Imagine a blob storage bucket that gets used to upload a bunch of excel files. At the end of every day, we want to run a function that goes over all these files, and write a summary to a database. In such case our function would need the following properties:

**Trigger:** Timer

**Input binding:** Azure Blob Storage

**Output binding:** Azure Cosmos Database

![A trigger, input and output binding make up this Azure function](/static/post/004/overview-trigger-binding-example.png)

### Available triggers
The following triggers are currently supported by Azure Functions. They will provide the start signal for your function to begin execution.

![Available triggers in Azure Functions](/static/post/004/table-1.png)

> Every function can be run manually by performing an http request, independently from which kind of trigger is used. This can be usefull for when you want to debug something, or manually kickstart a function. For more information see the Microsoft documentation

### Available input bindings
Sometimes we need our function to retrieve data from somewhere else. This is where we need our input bindings. The following input bindings are currently available:

![Available input bindings in Azure Functions](/static/post/004/table-2.png)

### Available output bindings
After your code has executed inside your function, you might want to send the results to another resource. Output bindings allow you to send your function's outcome to another resource.

![Available output bindings in Azure Functions](/static/post/004/table-3.png)

## External links
- MS Docs, bindings and triggers : https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=csharp
- MS Docs, Cosmos DB : https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=csharp
- MS Docs, Service Bus : https://azure.microsoft.com/en-us/services/service-bus/
- MS Docs, Blob Storage : https://azure.microsoft.com/en-us/services/storage/blobs/
- MS Docs, Manually starting a function : Microsoft documentation
