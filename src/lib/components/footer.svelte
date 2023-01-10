<script lang="ts">
	import { page } from "$app/stores";
	import type { Post } from "src/routes/blog/[slug]/post";
    let posts : Post[] = $page.data.posts;
    if(posts)
        posts = posts.slice(0,5)
    let renderTimestamp : string = $page.data.timestamp;
</script>


<footer>

    <div class="footer-blocks">
        <div class="block">
            <ul>
                <li><b>Sitemap</b></li>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div class="block">
            <ul>
                <li><b>External</b></li>
                <li><a rel="noreferrer" target="_blank" href="https://twitter.com/JefMeijvis">Twitter</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jef-meijvis/">LinkedIn</a></li>
                <li><a rel="noreferrer" target="_blank" href="https://github.com/jefmeijvis">Github</a></li>
                <li><a rel="me" href="https://mastodon.social/@jefmeijvis">Mastodon</a></li>
            </ul>
        </div>
        <div class="block">
            <ul>
                <li><b>Projects</b></li>
                <li><a href="https://colour.jefmeijvis.com">Colour</a></li>
            </ul>
        </div>
        <div class="block">
            <ul>
                <li><b>Recent posts</b></li>
            {#if posts}
                {#each posts as post}
                    <li>
                        <a href="blog/{post.filename.replace(".md","")}">{post.title.slice(0,20)}...</a>
                    </li>
                {/each}
            {/if}
            </ul>
        </div>
    </div>
    <p>© Jef Meijvis 2021 - {new Date().getFullYear()}</p>
    <p>Last render on  {renderTimestamp}</p>
</footer>


<style>
    p
    {
        margin-top: .5rem;
    }

    li
    {
        font-size: 1rem;
    }


    footer
    {
        background-color: #0078d4;
        color:white;
        text-align: center;
        width : 100%;
        bottom: 1rem;
        margin-top: 3rem;
        padding-bottom: 1rem;
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
        color: white;
        font-size: 1rem;
    }

    a:hover
    {
        text-decoration: underline;
    }

    p
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