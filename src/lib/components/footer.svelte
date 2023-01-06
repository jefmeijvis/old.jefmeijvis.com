<script lang="ts">
    export let renderTimestamp : string = "?";
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
                <li><b>Latest</b></li>
                    <li>
                        <a target="_self" href="/">Link</a>
                    </li>
            </ul>
        </div>
    </div>
    <p>© Jef Meijvis {new Date().getFullYear()}</p>
    <p>Last render on {renderTimestamp}</p>
</footer>


<style>



    footer
    {
        background-color: #0078d4;
        color:white;
        text-align: center;
        width : 100%;
        bottom: 1rem;
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