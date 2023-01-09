<script lang="ts">
	import { afterUpdate } from "svelte";
	import Bubble from "./bubble.svelte";
	import Controls from "./controls.svelte";

    let messageContainer : any;

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


<style>

   

    .message-container
    {
        overflow-y: scroll;
        height : 20rem;
    }

    h1
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