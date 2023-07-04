<div>
    <img alt="Techorama talk" src="/about/talk.jpeg"/>
    <img alt="Dotnetlab Event Talk" src="/about/talk-2.jpg"/>
    <img alt="Headshot" src="/about/headshot.png"/>
    <img alt="Company event 2023" src="/about/company-event-2023.jpg"/>
</div>

<style>
    div
    {
        width : 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    img
    {
        margin:5%;
        width : 40%;
        border-radius: .5rem;
        object-fit: cover;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        div
        {
            flex-direction: column;
        }

        img
        {
            width : 90%;
            border-radius: .5rem;
        }
    }
</style>