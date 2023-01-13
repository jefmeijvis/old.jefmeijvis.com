---
author: Jef Meijvis
id : 7
image : /post/007/logo.png
title: Azure Application Insights
date: 11/01/2022
description : Collect logging, metrics and traces and store them in Application Insights.
tags : azure,logging,dotnet
published : true
---

## Azure Application Insights
Application Insights is an Azure service that allows developers to monitor their applications in a centralised way, all the way from development through production. With the available data, software teams are able to proactively understand how their application is being used. In case of an incident, developers are able to reactively review metrics, logs and traces to find the root cause. 
![Azure Application Insights logo[small]](/static/post/007/logo.png)

It is an essential tool to develop distributed applicatons and system at scale.

## OpenTelemetry
When software teams or organisations manage multiple applications, it might be useful to collect all this data in a single place. Only by doing so we're able to see the entire picture of what's happening across all these systems.
Doing so requires that logs, traces and metrics are generated in a standardized data format.

![OpenTelemetry Logo [medium]](/static/post/007/opentelemetry.png)

This is where [OpenTelemetry](https://opentelemetry.io/) comes in. By standardizing the format in which data is collected, software teams can start using different products together without being vendor dependant. 

## Getting started

### Create an Application Insights instance
Go to the [Azure Portal](https://www.portal.azure.com) and create a new Application Insights resource.

![Creating a new instance through the Azure Portal](/static/post/007/portal1.png)

After creating the instance, we can go to the Overview tab and copy the connection string

![Copying the connection string from the portal. Do not worry, the credentials shown here are not real](/static/post/007/portal2.png)

This connection string is always needed to connect to our instance of Application Insights.

> On March 31, 2025, support for instrumentation key ingestion will end. Instrumentation key ingestion will continue to work, but Microsoft will no longer provide updates or support for the feature. Connection strings will be the prefered way of connecting from now on.


### Auto instrumentation (agents)
Auto instrumentation is the easiest way to start collecting data, without even having to make code changes.
Various target environments, such as Azure Functions and Azure App Service even enable Azure Insights logging by default!

See the [app insights overview](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net#how-do-i-instrument-an-application) for an overview of the multiple auto-instrumentation possibilities for different languages.

## Logging in DotNET
If you're writing dotnet code, changes are high you're using a logging library.
Most commenly used logging libraries provide a way to deterimine multiple targets for you logging data.
E.g. you might want to log to both a file on disk and to Azure Insights.

### Log4net
[Log4net](https://logging.apache.org/log4net/) has a logging appender which is available through a [NuGet package](https://www.nuget.org/packages/Microsoft.ApplicationInsights.Log4NetAppender/2.21.0).

After adding the package to the dotnet application, we can update the log4net config file to include the new appender. 

    <log4net>
    <root>
        <level value="ALL"/>
        <appender-ref ref="aiAppender"/>
    </root>
    <appender name="aiAppender" type="Microsoft.ApplicationInsights.Log4NetAppender.ApplicationInsightsAppender, Microsoft.ApplicationInsights.Log4NetAppender">
        <layout type="log4net.Layout.PatternLayout">
        <conversionPattern value="%message%newline"/>
        </layout>
    </appender>
    </log4net> 
### Serilog

[Serilog](https://serilog.net/) has a [logging sink](https://www.nuget.org/packages/Serilog.Sinks.ApplicationInsights/) to send the collected logs to Application Insights.

The sink can be configured in code in the following way:

    var log = new LoggerConfiguration()
        .WriteTo.ApplicationInsights(TelemetryConfiguration.Active, TelemetryConverter.Traces)
        .CreateLogger();

### Nlog
[Nlog](https://nlog-project.org/) has a [logging target package](https://www.nuget.org/packages/Microsoft.ApplicationInsights.NLogTarget/2.21.0) which can be used to direct the logs to Application Insights.

The following configuration can be used to set up the logging target with the correct instrumentation key or connection string:

    <nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <extensions>
            <add assembly="Microsoft.ApplicationInsights.NLogTarget" />
        </extensions>
        <targets>
            <target xsi:type="ApplicationInsightsTarget" name="aiTarget">
                <instrumentationKey>Your_Resource_Key</instrumentationKey>	<!-- Only required if not using ApplicationInsights.config -->
                <contextproperty name="threadid" layout="${threadid}" />	<!-- Can be repeated with more context -->
            </target>
        </targets>
        <rules>
            <logger name="*" minlevel="Trace" writeTo="aiTarget" />
        </rules>
    </nlog>


## Manual data collection  
### Console Applications




## Dashboards

## Further reading
- https://learn.microsoft.com/en-us/azure/azure-monitor/app/ilogger
- https://stackoverflow.com/questions/28800320/log4net-with-application-insights
- https://github.com/serilog-contrib/serilog-sinks-applicationinsights
- https://www.nexsoftsys.com/articles/integrating-apps-insights-with-nlog-aspnet-core.html
- https://www.nuget.org/packages/Microsoft.ApplicationInsights.NLogTarget





