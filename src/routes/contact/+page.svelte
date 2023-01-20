<script>
	import Utterances from "$lib/components/utterances.svelte";

</script>
<svelte:head><title>Contact - Jef Meijvis</title></svelte:head>
<h1>Contact</h1>
<h3>Private</h3>
<p>
    The easiest way to contact me privatly is to DM me on <a rel="noreferrer" href="https://twitter.com/JefMeijvis" target="_blank">Twitter</a>.
    I'm also active on <a rel="noreferrer" href="https://mastodon.social/@jefmeijvis" target="_blank">Mastodon</a> on the social server.
    If you're replying to or reacting on a specific blogpost, please include which one as well!
</p>
<h3>Public</h3>
<p>
    Aditionally, you can also provide public feedback by using the comment section at the bottom of each blogpost.
    If you just want to leave a message on the website in general, you can use the guestbook comment section.
    You need to have a <a rel="noreferrer" href="https://github.com/" target="_blank">Github</a> account to login, but since this blog is really developer centric I assume that won't be an issue.
</p>
<h3>Website feedback</h3>
<p>
    If you found a bug in the website, a typo in a blogpost, or a content-related problem somewhere, please do let me know! 
    Contact me privately, create an issue on the <a rel="noreferrer" href="https://github.com/jefmeijvis/www.jefmeijvis.com" target="_blank">public repository</a>.
    Additionally, if you're able to create a pull request containing the fix, that would even be better!
</p>


<Utterances name="guestbook"/>

<style>
    p
    {
        font-weight: 300;
    }
</style>