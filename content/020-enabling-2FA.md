---
author: Jef Meijvis
id : 20
image : /post/020/logo.png
title: Enabling 2FA for your Microsoft tenant!
date: 25/10/2023
description : Enforce a second factor for your users by enabling 2FA in the Microsoft Admin center. 
tags : Security
published : true
---

## Enabling 2FA for your Microsoft tenant!

Multi-factor authentication, or 2-factor authentication in this case, requires users to provide more than a single form of verification to access their accounts. In addition to entering a matching email and password combination, users must also present a mobile phone device or a biometric factor to gain entry into their environment.
Common second factors are using a SMS text message, a mobile phone authenticator app, a fingerprint scan or a face scan using Windows Hello.

![Microsoft Multi Factor Authentication (MFA) [small]](/static/post/020/logo.png)

Adding an additional authentication factor is an important first step in creating a safe and secure working place. 
Below is a quick overview on how to enable MFA for your Microsoft 365 environment.

## Enabling MFA

### Login to Azure
Login to the Azure Portal via [portal.azure.com](https://portal.azure.com).
We will be making changes to the security settings of our Microsoft tenant through the portal. 


### Search for Microsoft Entra ID
When logged in to the Azure Portal, search for the 'Microsoft Entra ID' service.
Entra ID is the new name of Azure Active Directory. When found, click on the service to open up its dedicated page. s
![Search for Entra ID [medium]](/static/post/020/search.png)

On the left hand side there will be a blade menu, where we will select the 'Properties' menu item. 
![Entra ID Properties [small]](/static/post/020/azure-1.png)


### Open security defaults
On the bottom select 'Manage security defaults', and turn on the toggle button.
This will enable a list of best practice security defaults for your Microsoft environment.

![Enable security defaults [medium]](/static/post/020/security-defaults.png)


## What are the security defaults? 
As of 2023, these security defaults include 5 topics that are relevant for most situations:

### 1: Requiring all users to register for multifactor authentication
All users are given a 14-day window to register through the Microsoft Authenticator app or any app supporting OATH TOTP. Once the 14-day period elapses, users will be unable to sign in until the registration process is finalized. The 14-day countdown for a user begins subsequent to their initial successful interactive sign-in after activating security defaults.

### 2: Requiring administrators to do multifactor authentication
Administrators have increased access to your environment. Because of the power these highly privileged accounts have, you should treat them with special care. One common method to improve the protection of privileged accounts is to require a stronger form of account verification for sign-in, like requiring multifactor authentication.

### 3: Requiring users to do multifactor authentication when necessary
We tend to think that administrator accounts are the only accounts that need extra layers of authentication. Administrators have broad access to sensitive information and can make changes to subscription-wide settings. But attackers frequently target end users.

### 4: Blocking legacy authentication protocols
To give your users easy access to your cloud apps, we support various authentication protocols, including legacy authentication. Legacy authentication is a term that refers to an authentication request made by:
- Clients that don't use modern authentication (for example, an Office 2010 client)
- Any client that uses older mail protocols such as IMAP, SMTP, or POP3

### 5: Protecting privileged activities like access to the Azure portal
After you enable security defaults in your tenant, any user accessing the following services must complete multifactor authentication:
- Azure portal
- Microsoft Entra admin center
- Azure PowerShell
- Azure CLI

## Conclusion
Microsoft made it really easy to enable sensible defaults, that offer a great baseline protection to your Microsoft environment for all users.
All we had to do was toggle a switch to enable these defaults for the entire organization.

## Further reading and relevant links
- https://learn.microsoft.com/en-us/microsoft-365/admin/security-and-compliance/set-up-multi-factor-authentication?view=o365-worldwide
- https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults#require-administrators-to-do-multifactor-authentication

