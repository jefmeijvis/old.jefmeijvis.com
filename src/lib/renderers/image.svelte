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

    if(!title || title == "")
        title = text;

  </script>
  
  <img style="{small? "width:25%;display:block;margin:auto;" : ""}" src={href} {title} alt={text}>


  <style>
        img
        {
            width : 100%;
            border-radius: .5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;;
        }
  </style>