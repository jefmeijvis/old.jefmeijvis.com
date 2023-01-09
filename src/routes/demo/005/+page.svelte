<script lang="ts">
	import Chatbox from "./chatbox.svelte";
</script>


<p>This is a live demo of the chatbox as described in <a href="/blog/005-creating-a-chat-component-with-svelte?ref=demo-page">'Post 5 : Creating a chat component with Svelte'</a></p>
<p>Everything here is client-side, so no chats/usernames get send to the server.</p>

<Chatbox></Chatbox>


<style>
    p
    {
        margin : 1rem;
        font-weight: 300;
    }
</style>