<script lang="ts">
    import { page } from "$app/stores";
	import type { Post } from "src/routes/blog/[slug]/post";
    let posts : Post[] = $page.data.posts;
    let commit = $page.data.commit;

    export let timestamp : string;
</script>


<footer>

    <div class="footer-blocks">
        <div class="block">
            <ul>
                <li><h3>Sitemap</h3></li>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="block">
            <ul>
                <li><h3>External</h3></li>
                <li><a rel="noreferrer" target="_blank" href="https://twitter.com/JefMeijvis">Twitter</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jef-meijvis/">LinkedIn</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://github.com/jefmeijvis">Github</a></li>
                <li><a rel="me" href="https://mastodon.social/@jefmeijvis">Mastodon</a></li>
            </ul>
        </div>
        <div class="block">
            <ul>
                <li><h3>Projects</h3></li>
                <li><a href="https://colour.jefmeijvis.com">Colour</a></li>
            </ul>
        </div>
        <div class="block">
            <ul>
                <li><h3>Recent posts</h3></li>
            {#if posts}
                {#each posts as post,index}
                    {#if index < 5}
                        <li>
                            <a href="blog/{post.filename.replace(".md","")}">{post.title.slice(0,20)}...</a>
                        </li>
                    {/if}
                {/each}
            {/if}
            </ul>
        </div>
    </div>
    <p>© Jef Meijvis 2021 - {new Date().getFullYear()}</p>
    <p>Build on {timestamp}</p>
    {#if commit}
    <p><a href={commit.url}>{commit.commit} on Github</a></p>
    {/if}
</footer>


<style>
    h3
    {
        color:var(--color-text-secondary);
    }
    p
    {
        margin-top: .5rem;
        color:var(--color-text-secondary);
    }

    li
    {
        font-size: 1rem;
    }


    footer
    {
        background-color: var(--color-accent);
        color:var(--color-text-secondary);
        text-align: center;
        width : 100%;
        bottom: 1rem;
        margin-top: 3rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }

    .footer-blocks
    {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin:auto;
        width : 60%;
        font-weight: 300;
        justify-content: space-between;
    }

    .block
    {
        display: block;
        float: left;
        width : 25%;
        height : 100%;
        padding : .5rem;         
    }

    ul
    {
        text-align: left;
        list-style: none;
        padding: 0;
    }

    a
    {
        text-decoration: none;
        color: var(--color-text-secondary);
        font-size: 1rem;
    }

    a:hover
    {
        text-decoration: underline;
    }

    p,a
    {
        font-size: .75rem;
        font-weight: 300;
    }

    @media (max-width: 60rem) 
    {
        li        {
            text-align: center;
        }
        .footer-blocks
        {
            width : 100%;
            flex-direction: column;
        }

        .block
        {
            width : 90%;
            margin:auto;
            text-align: center;
        }
    }
</style>