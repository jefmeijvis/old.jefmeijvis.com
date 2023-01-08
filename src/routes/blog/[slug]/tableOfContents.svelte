<script lang="ts">
    export let tableOfContents : any

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
</script>

<div>
    <h3>Table of contents</h3>
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
</style>
