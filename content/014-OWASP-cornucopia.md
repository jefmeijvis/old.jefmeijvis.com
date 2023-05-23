---
author: Jef Meijvis
id : 14
image : /post/014/logo.png
title: Cornucopia
date: 22/04/2023
description : Gamify threat modeling with the OWASP Cornucopia card game.
tags : Security, OWASP, Cornucopia
published : true
---

## Threat modeling
Threat modeling in the context of cybersecurity is a systematic approach used to identify and evaluate potential threats and vulnerabilities in a system, application, or network. It involves analyzing the various components and interactions within a system to determine potential weaknesses that could be exploited by malicious actors.

The primary goal of threat modeling is to proactively identify and mitigate potential risks before they can be exploited. By understanding the threats and vulnerabilities present in a system, security measures can be implemented to strengthen its overall security posture.

## Cybersecurity gamification
The card game of [OWASP Cornucopia](https://owasp.org/www-project-cornucopia/) integrates the act of threat modeling into an agile development environment. It allows developers and architects to identify threats in a specific application, system or feature.  

![OWASP Cornucopia example cards [medium]](/static/post/014/logo.png)

The game consists out of 6 suits, each containing 13 cards. 
Each suit represents a different security topic, with the Cornucopia suit representing all topics that didn't fit in another category:

- Data validation & encoding
- Authentication
- Session management
- Authorization
- Cryptography
- Cornucopia

The game also contains two joker cards.
![Example cryptography card [small]](/static/post/014/example-card.png)

## How to play

An instructional video can be found on the [dotNETlab instructional site about cornucopia](https://cornucopia.dotnetlab.eu/how-to-play)

- Gather participants: Assemble a group of individuals who will be playing the game. This can include developers, security professionals, or anyone involved in the software development process.

- Select a scope: it can be an application, system or feature

- Start the game: Shuffle the cards and place them face-down in the center of the table. The first player selects a card from the deck and reads it aloud.

- Discuss and decide: The participants should engage in a discussion around the scenario presented by the card. They should consider the potential security threats and vulnerabilities associated with the scenario, and determine wether or not it is applicable to the scope

- Repeat the process: The game continues with each player taking turns drawing cards, discussing the scenarios, and selecting countermeasures. The goal is to analyze a variety of scenarios and select effective countermeasures for each.

## Further reading and relevant links
- https://owasp.org/
- https://owasp.org/www-project-cornucopia/
- https://cornucopia.dotnetlab.eu/