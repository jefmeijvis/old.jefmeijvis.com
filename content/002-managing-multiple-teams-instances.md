---
author: Jef Meijvis
id : 2
image : /post/002/logo-teams.png
title: Managing multiple Teams instances
date: 18/12/2021
description : Managing multiple Teams instances of different companies can be a real hassle. I quickly showcase the solution I ended up using with the help of Ferdi.
tags : Teams,Ferdi
published : true
---

## Teams?

> Update 28 november 2023 | This post was written back in 2021, when Microsoft Teams didn't offer support for multiple accounts. Nowadays, it's possible to use the profile button on the top right to switch between accounts that belong to multiple companies. 


For most of us, remote working has become part of our daily life. Collaboration and communication software such as Teams, Zoom, Google Meet, and others are essential to most companies nowadays.

As a software consultant, I’m often part of multiple organizations at the same time. At the moment of writing, I have 3 different MS Teams instances that I need to keep my eye on. Unfortunately, the desktop application doesn’t allow for easy switching between multiple companies. And besides that, I would only receive notifications for the company which I was currently logged in with.

My initial solution was to use the web version of Teams on multiple browsers. I had a Chrome window, a Chrome incognito window and a Firefox window all up and running at the same time. Each one of those was logged in with a different user account. While this worked, it was cumbersome and had to be set up every time I started my computer. Time to look ahead for another solution.

![Ferdium Logo [small]](/static/post/002/ferdium-logo.png)


## Ferdium?
Along came Ferdium, an open source desktop app that allows you to use your favorite web applications bundled together in one single desktop app. Examples are WhatsApp, Facebook messenger, Notion, and many others. Ferdi achieves this by running a separate instance of Chromium for each service that you add to the application. On top of that, multiple instances of the same service can be added as well! Just what I needed. I downloaded and installed Ferdium, added my 3 different Teams instances as separate services, and voila! Every time my laptop boots, Ferdi starts up and I’m logged in on all 3 Teams instances without having to do anything.

![Teams interface in Ferdi](/static/post/002/ferdi-teams.png)


## Setting up the solution
Below are the steps I took while configuring Ferdium to display my 3 teams clients:

Head over to [ferdium.org](https://ferdium.org/), download the installer and install the desktop application.
Add a service by clicking *services* on the top menu bar.

![Add a new service via the context menu [medium]](/static/post/002/add-new-service.png)
Search for "Teams" between the available services
Once added, log in on Teams as you would normally do on the web client.
Repeat as many times as necessary to add multiple clients.

![Search for teams](/static/post/002/adding-teams.png)

> Please make sure that you give proper microphone and webcam access to the web version of teams. This can be done by making a test call via [the Teams web interface](https://teams.microsoft.com/)


That's it! You should now be able to access multiple teams accounts at the same time, using the same application. Please do let me know if you have any questions or remarks!
