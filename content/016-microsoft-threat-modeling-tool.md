---
author: Jef Meijvis
id : 16
image : /post/016/logo.png
title: Microsoft threat modeling tool
date: 15/06/2023
description : Making use of the official Microsoft threat modeling tool.
tags : Security
published : true
---

## Microsoft threat modeling tool
In today's digital landscape, where security breaches have become all too common, protecting sensitive information and safeguarding software systems is an absolute necessity. In this battle, the act of threat modeling emerges as a vital cornerstone, offering organizations a proactive approach to identify vulnerabilities, assess potential threats, and construct robust countermeasures. The Microsoft Threat Modeling Tool is a tool that can be used for this purpose. It is a an ally that empowers cybersecurity professionals to bolster their digital infrastructure. With its powerful capabilities, this software facilitates the threat modeling process. In this blog post, we delve into the intricacies of the Microsoft Threat Modeling Tool, exploring its key features, applications, and shedding light on the value it brings to the critical practice of threat modeling.

![Logo of the Microsoft threat modeling tool [small]](/static/post/016/logo.png)


## Getting started
Upon launching the tool, we are greeted by a screen that provides us with two primary options: creating a new model or opening an existing one. Additionally, there is a link, directing us to the [Microsoft getting started guide](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool) for further assistance.

![Starting screen [medium]](/static/post/016/tool-screen-1.png)


## Design view
### Functionalities
In the design view, the interface has different parts to it. On the left side, there's a grid where we can draw our application or system for threat modeling. On the right side, there's a list of symbols we can use to create diagrams. These symbols include things like requests and responses, Azure SQL databases, and network boundaries. We can simply drag and drop these symbols onto the grid to build our model.
![Design view [medium]](/static/post/016/tool-screen-2.png)

### Drawing a system
Now, let's build a practical example. The system we are modeling operates in the following manner:

- A user accesses a website using the Chrome browser on their mobile device.
- The user fills in an input field and clicks on the send button.
- This request is then forwarded to the frontend server.
- The frontend server, in turn, sends a request to the backend API server.
- The API server stores the received data in the database.

Additionally, we establish a boundary named the 'Azure trust boundary,' which encompasses all the resources hosted within Azure. This ensures that communication between these services remains internal and confined to Azure.
This looks as follows in the design view:
![Design view with an application diagram [medium]](/static/post/016/tool-screen-3.png)

## Analysis view
To access the 'Analysis view,' we can simply click on *view > analysis view*. In this mode, the tool automatically generates a comprehensive list of threats based on the diagram we created. For our specific application, we are presented with a list of 51 threats. You can view the list here: 
![Analysis view [medium]](/static/post/016/tool-screen-4.png)

Furthermore, the tool provides an option to export the list of threats as a CSV file, allowing us to import it into spreadsheet software like Excel for further analysis and manipulation.
![List of threats exported to Excel](/static/post/016/tool-screen-5.png)

This concludes the fundamental functionality of the Microsoft Threat Modeling Tool. It serves as a means to effectively communicate the security design of a system and automatically generates a list of potential threats based on that design.
## Alternative tools
Threat modeling is an essential activity that can benefit from a diverse array of tools. While the Microsoft Threat Modeling Tool is certainly among them, it is by no means the sole option available. A plethora of other tools and platforms, both free and paid, are readily accessible for this purpose.

- [Owasp Threat Dragon (free)](https://owasp.org/www-project-threat-dragon/)
- [Threagile (free)](https://threagile.io/)
- [Cairis (free)](https://cairis.org/)
- [IriusRisk (paid)](https://www.iriusrisk.com/)
- [SD Elements (paid)](https://www.securitycompass.com/sdelements/)
- ...

## Further reading and relevant links
- https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool