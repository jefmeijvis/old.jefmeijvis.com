<script lang="ts">
    export let href = ''
    export let title : string = ""
    export let text = ''


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
            return "width:25%;display:block;margin:auto;";

        if(medium)
            return "width:50%;display:block;margin:auto;";

        return "";
    }

  </script>
  
  <img style="{getStyle()}" src={href} {title} alt={text}>


  <style>
        img
        {
            width : 100%;
            border-radius: .5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;;
        }
  </style>