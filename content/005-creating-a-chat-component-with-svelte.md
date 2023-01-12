---
author: Jef Meijvis
id : 5
image : /post/005/logo.png
title: Create a barebones chat component with Svelte
date: 01/10/2022
description : Sveltekit API endpoints.
tags : Svelte
published : true
---

## Frontend with Svelte?

In this article we're going to create a simple chatbox, using Svelte. The design is based on similar chat services, such as Facebook Messenger or WhatsApp. At this point the entire chatbox is local, so no data is going in or out. Below is an image of the finished result:

![A chat windows created with Svelte components [medium]](/post/005/demo.png)

For a live demo you can visit [the demo page](/demo/005?ref=article)

Use the 'Username' field to choose a username. It's value is taken as is, so when you pick a name, you will have that identity. This means it's possible to pick an existing user. Whenever you change the current user, the styling of the chatwindow will update, showing which messages are your own. Underneath there is space to type a message, and a button to send the message.

### Getting started

Let's start by creating a container div in our main component file (chatbox.svelte). This will be a full page-width div to contain our actual chatbox. Next up, add our actual chatbox div. In here we will create a h1 element to create our title, and another div which we will give the classname message-container. When we apply some styling, we get the following result:

![A chat windows created with Svelte components [medium]](/post/005/demo-1.png)


    <div class="container">
        <div class="chatbox">
            <h1 class="toptext" >Chatbox</h1>
            <div class="message-container">
            </div>
        </div>
    </div>


    <style>
        .message-container
        {
            overflow-y: scroll;
            height : 20rem;
        }

        .toptext
        {
            background-color: rgb(250, 144, 23);    
            color:white;                           
            text-align: center;                    
            border-top-left-radius: .5rem;        
            border-top-right-radius: .5rem;
            margin-bottom: 0;
        }

        .chatbox
        {
            width : 20rem;
            margin:auto;
            border-radius: .5rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .container
        {
            width : 100%;
        }
    </style>

### Chat bubble
Let's continue on the frontend by creating a subcomponent, which we will call a message bubble (bubble.svelte). Use the script tag to expose a message prop. Create a p element containing the user that is available on the message object, and the timestamp converted to the local datetime format. We assign the info element a class based by comparing the username of the message with the username of the current user. If these match, it's our own message and we make it a right alligned chat bubble. If not, we make it a left alligned bubble.

    <script>
        export let message; // Message object that contains all information about this specific message
        export let user;    // Username of the user that is currently using the chatbox
    </script>

    <p class="{message.user == user ? 'info-right' : 'info-left'}">{message.user} | {message.timestamp.toLocaleString()}</p>

    <div class="{message.user == user ? 'bubble-right' : 'bubble-left'}">                
        <p class="message">{message.message}</p>
    </div>


    <style>
        .bubble-left,.bubble-right
        {
            width : 80%;
            margin : .5rem;
            border-radius: 1rem;
            padding : .25rem;
        }

        .info-left
        {
            float: left;
        }

        .info-right
        {
            float: right;
        }

        .info-left,.info-right
        {
            font-size: .6rem;
            margin:0;
            padding:0;
            margin-left: .7rem;
            margin-top: 1rem;
            opacity: 50%;
        }

        .bubble-left
        {
            background-color: rgb(255, 241, 226);
            float:left;
            border-bottom-left-radius: 0;
        }

        .bubble-right
        {
            float:right;
            background-color: rgb(226, 226, 255);
            border-bottom-right-radius: 0;
        }

        .message
        {
            font-size: .7rem;
        }
    </style>

Before we can continue, we need to create some mockup data to test our chat bubble. Let's create a list of messages, and add these on top of the chatbox.svelte included in a script tag. We also create a field to store the username of the current user.

    <script>
        let messages : any[] = 
        [
            {id : 1, timestamp : new Date() , user : "Alice" , message : "Hi there, I'm writing a chat message!"},
            {id : 2, timestamp : new Date() , user : "Bob" , message : "Hi Alice, what's the weater over there? ☁️"},
            {id : 4, timestamp : new Date() , user : "Alice" , message : "It's really sunny over here 🌞😎"},
            {id : 3, timestamp : new Date() , user : "Carol" , message : "Hi guys 👋"},
        ];

        let user : string = "Alice";
    </script>


We further update the chatbox.svelte file by using our newly created bubble.svelte file. We want to render this component for every element in the 'messages' list. While doing so, we also provide the message and user object as props to the component.


    <script>
        import Bubble from "./bubble.svelte";
    </script>


    <div class="chatbox">
        <h1>Chatbox</h1>
        <div bind:this={messageContainer} class="message-container">
            {#each messages as message}
                <Bubble {message} {user}></Bubble>
            {/each}
        </div>
    </div>

By combining all these changes, we get the following result:

![A chat windows created with Svelte components [medium]](/post/005/demo-2.png)

Looking great so far! We are able to render the message, the user and the timestamp in an interactive chat window. Based on which user we specified in code, we can determine which chat bubbles are ours.

### Control panel
Let's finish our chatbox by adding a control panel (controls.svelte). As props to this subcomponent we define a user, a send function and a message. We group eveything together in a div with classname controls. The first p element contains a input field that is bound to the 'user' variable. The textarea below is bound to the message variable. Our button contains an on:click event that fires the send method that is provided by the top level chatbox component.


    <script>
        export let user;    // Value of the user input
        export let send;    // Function that sends the current message
        export let message; // Value of the message input
    </script>

    <div class="controls">
        <p>Username: <input placeholder="Type your username here..." bind:value={user} type=text/></p>
        <textarea placeholder="Type your message here..." bind:value={message}/>
        <button on:click="{()=>send()}">Send</button>
    </div>


    <style>
        input
        {
            width : calc(100% - .5rem);
            border-radius: .25rem;
        }
        
        .controls
        {
            padding : .5rem;
        }

        p
        {
            font-size: .75rem;
        }


        button
        {
            width : 100%;
            height : 2rem;
            background-color: rgb(250, 144, 23);
            color:white; /**/
            cursor:pointer;
            border-radius: .25rem;
            border:none;
            transition: all ease .25s;
        }

        button:hover
        {
            background-color: rgb(255, 203, 144);
        }

        textarea
        {
            height : 5rem;
            width : calc(100% - .5rem);
            margin:0;
            padding:0;
            resize:none;
            border-radius: .25rem;
            padding : .25rem;
        }
    </style>
        
A few more things are needed back in our chatbox.svelte component to integrate the controls:

First let's add an import statement for our controls component. We also need a variable (messageContainer) to bind to the message-container div. We define a send function, which adds the current message to the array of messages. We do include a few checks to only send the message when both a username and message is provided.

> Svelte only re-renders it's components when the variable is changed. This means that when we have a component that uses an array, adding or removing an element from the list will not trigger a re-render. We can solve this be reassigning the variable storing the list to itself: messages = messages;

To improve the user experience, the chatbox will scroll to the bottom when a new message is added. We can achieve this by trigering our custom 'scrollToBottom' function whenever the afterUpdate hook fires.

Finish things of by including the Controls component in our chatbox div, while binding it to the message, user and send props.


    <script lang="ts">
        import { afterUpdate } from "svelte";
        import Bubble from "./bubble.svelte";
        import Controls from "./controls.svelte";

        let messageContainer;

        let messages : any[] = 
        [
            {id : 1, timestamp : new Date() , user : "Alice" , message : "Hi there, I'm writing a chat message!", likes : 0 },
            {id : 2, timestamp : new Date() , user : "Bob" , message : "Hi Alice, what's the weater over there? ☁️", likes : 0 },
            {id : 4, timestamp : new Date() , user : "Alice" , message : "It's really sunny over here 🌞😎", likes : 0 },
            {id : 3, timestamp : new Date() , user : "Carol" , message : "Hi guys 👋", likes : 0 },
        ]

        let user : string = "Alice";
        let message : string;

        afterUpdate(() => {scrollToBottom(messageContainer)});

        async function send()
        {
            if(!message || message == undefined || message == "" || !user || user == undefined || user == "")
                return;

            messages.push({timestamp : new Date() , user : user , message : message, likes : 0, id : messages.length+1});
            message = ""; 
            messages = messages;
        }

        const scrollToBottom = async (node : any) => {node.scroll({ top: node.scrollHeight, behavior: 'smooth'});}; 
    </script>


    <div class="container">
        <div class="chatbox">
            <h1>Chatbox</h1>
            <div bind:this={messageContainer} class="message-container">
                {#each messages as message}
                    <Bubble {message} {user}></Bubble>
                {/each}
            </div>
            <Controls bind:message={message} bind:user={user} {send}></Controls>
        </div>
    </div>
            

This gives us the following result, as showed at the start of the article:

![A chat windows created with Svelte components [medium]](/post/005/demo.png)
