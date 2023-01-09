<script lang="ts">
    export let tableOfContents : any
    let height : string = "0rem";
    let open : boolean = true;

    function getIndentation(depth : number)
    {
        switch(depth)
        {
            case 2:
            {
                return "■"
            }

            case 3:
            {
                return "⠀⠀◆"
            }

            case 4:
            {
                return "⠀⠀⠀⠀○"
            }
        }
    }

    function toggle()
    {
        open = !open;

        if(open)
        {
            height = "auto";
        }

        if(!open)
        {
            height = "0;"
        }
    }

</script>

<h3 on:keydown={toggle} on:click={toggle}>{open ? "▲" : "▼"} Table of contents </h3>
<div style="display:{open? "" : "none"}">
    <ul>
        {#each tableOfContents as heading}
            <li>
                <a href={"#" + heading.text}>
                    {getIndentation(heading.depth)} {heading.text}
                </a>
            </li>
        {/each}
    </ul>
</div>


<style>
    div
    {
        overflow: hidden;
    }
    ul
    {
        margin-left: 1rem;
    }
    div
    {
        padding : 1rem;
    }

    li
    {
        font-size: 1.1rem;
        font-weight: 300;
        margin-top: .6rem;
        list-style-position: inside;
        list-style: none;
    }

    a
    {
        text-decoration: none;
    }

    li:hover
    {
        opacity: 50%;
    }

    h3
    {
        cursor:pointer;
    }

    h3:hover
    {
        opacity: 70%;
    }

</style>
