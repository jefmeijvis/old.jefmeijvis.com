<script lang="ts">
    export let message : any;
    export let user : any;
</script>

<p class="{message.user == user ? 'info-right' : 'info-left'}">{message.user} | {message.timestamp.toLocaleString()}</p>
<div on:keydown="{()=>console.log(message.id)}" class="{message.user == user ? 'bubble-right' : 'bubble-left'}">                
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