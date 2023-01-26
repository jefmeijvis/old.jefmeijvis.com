<div class="intro">
    <div class="picture">
        <img on:keypress="{()=>window.open("/about?ref=profile-picture","_self")}" on:click="{()=>window.open("/about?ref=profile-picture","_self")}" src="/profile-picture.png" alt="profile"/>
    </div>
    <div class="text">
        <h1>Jef Meijvis</h1>
        <p>Software engineer and consultant at <a rel="noreferrer" target="_blank" href="https://www.dotnetlab.eu">DotNETlab</a>.</p>
        <p>Blogging about software development using <a rel="noreferrer" target="_blank" href="https://dotnet.microsoft.com/">.NET</a>, <a rel="noreferrer" target="_blank" href="https://azure.microsoft.com/">Azure</a> and <a rel="noreferrer" target="_blank" href="https://svelte.dev/">Svelte</a></p>
    </div>
</div>


<style>
    .intro
    {
        margin-bottom: 2rem;
        width : 100%;
        height : 10rem;
    }
    p
    {
        font-weight:500;
        margin-top: 1rem;
    }

    img
    {
        width : 10rem;
        border-radius: 7rem;
        cursor: pointer;
        transition: all ease .25s
    }

    img:hover
    {
        transform: scale(1.05);
        opacity: 80%;
    }
    .text
    {
        width : 69%;
        float: left;
        padding-bottom: 3rem;

    }

    .picture
    {
        width : 20%;
        float: right;
        text-align: right;
        margin-right:2rem
    }

    a
    {
        padding: .25rem;
        text-decoration: none;
        border-radius: .5rem;
        color:var(--color-text-primary);
    }

    a:hover
    {
        opacity: 70%;
        text-decoration: underline;
    }

    @media (max-width: 60rem) 
    {
        .text
        {
            width : 100%;
            text-align: center;
        }

        .picture
        {
            width : 100%;
            text-align: center;
            margin:auto;
        }
    }
</style>