<script lang="ts">
    export let href = ''
    export let title : string = ""
    export let text = ''

    if(href.includes("/static"))
        href = href.replace("/static","");


    let small : boolean = false;
    if(text.includes("[small]"))
    {
        small = true;
        text = text.replace("[small]","")
    }

    let medium : boolean = false;
    if(text.includes("[medium]"))
    {
        medium = true;
        text = text.replace("[medium]","")
    }

    if(!title || title == "")
        title = text;

    function getStyle()
    {
        if(small)
            return "width:25%;";

        if(medium)
            return "width:50%;";

        return "";
    }

  </script>
  
  <img loading="lazy" style="{getStyle()}" src={href} {title} alt={text}>
  <p class="alt-text"><i>Image: {text}</i></p>


  <style>
        .alt-text
        {
            font-weight: 300;
            font-size: 1rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        img
        {
            width : 100%;
            border-radius: .5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;;
            display: block;
            margin:auto;
        }

        @media (max-aspect-ratio: 1/1) 
        {
            img
            {
                width : 100% !important;
            }
        }
  </style>