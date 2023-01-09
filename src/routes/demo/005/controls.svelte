<script lang="ts">
    export let user : any;
    export let send : any;
    export let message : any;
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