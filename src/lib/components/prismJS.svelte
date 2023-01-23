<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" type="text/css">  
    <style>
            pre.line-numbers,pre.line-numbers>code,pre[data-line]{position:relative}code[class*=language-],pre[class*=language-]{color:#f8f8f2;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,'Andale Mono',monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em;position:relative}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.punctuation,.token.url,.token.variable{color:#f8f8f2}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.token.atrule,.token.attr-value,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}pre[data-line]{padding:1em 0 1em 3em}.line-highlight{position:absolute;left:0;right:0;padding:inherit 0;margin-top:1em;background:hsla(24,20%,50%,.08);background:-moz-linear-gradient(left,hsla(24,20%,50%,.1) 70%,hsla(24,20%,50%,0));background:-webkit-linear-gradient(left,hsla(24,20%,50%,.1) 70%,hsla(24,20%,50%,0));background:-o-linear-gradient(left,hsla(24,20%,50%,.1) 70%,hsla(24,20%,50%,0));background:linear-gradient(left,hsla(24,20%,50%,.1) 70%,hsla(24,20%,50%,0));pointer-events:none;line-height:inherit;white-space:pre}.line-highlight:before,.line-highlight[data-end]:after{content:attr(data-start);position:absolute;top:.4em;left:.6em;min-width:1em;padding:0 .5em;background-color:hsla(24,20%,50%,.4);color:#f4f1ef;font:bold 65%/1.5 sans-serif;text-align:center;vertical-align:.3em;border-radius:999px;text-shadow:none;box-shadow:0 1px #fff}.line-highlight[data-end]:after{content:attr(data-end);top:auto;bottom:.4em}pre.line-numbers{padding-left:3.8em;counter-reset:linenumber}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}pre[class*=language-][data-language]::before{content:attr(data-language);color:#000;background-color:#cfcfcf;display:inline-block;position:absolute;top:0;right:0;font-size:.9em;border-radius:0 0 0 5px;padding:0 .5em;text-shadow:none};
    </style>
</svelte:head>

<script lang="ts">

  import { onMount } from 'svelte';
  
  export let language : any;
  export let code : any;
  
  onMount(() => {

   let script = document.createElement('script');
   script.src = "https://tutsplus.github.io/syntax-highlighter-demos/highlighters/Prism/prism.js"
   document.head.append(script);

   script.onload = function() {

     let langJS = false;
     let lang_script;
     let lang_module;

     // This switch statement, evaluates what language is being used, if one of a key language is being used, it will
     // load the proper Prisim support tool, like Python requires "prism-python.js" to modify the raw code so that
     // Prisim can render it properly.
     switch (language) {

       case "json":
         lang_module = "https://prismjs.com/components/prism-json.js"
         langJS = true;
         break    

       case "python":
         lang_module = "https://prismjs.com/components/prism-python.js"
         langJS = true;
         break                

       case "rust":
         lang_module = "https://prismjs.com/components/prism-rust.js"
         langJS = true;
         break   

       case "r":
         lang_module = "https://prismjs.com/components/prism-r.js"
         langJS = true;
         break   

       case "sql":
         lang_module = "https://prismjs.com/components/prism-sql.js"
         langJS = true;
         break           
     }

     if (langJS == true) {

        lang_script = document.createElement('script');
        //@ts-ignore
        lang_script.src = lang_module
        lang_script.async = true
        document.head.append(lang_script);

        lang_script.onload = () => {
        //@ts-ignore
          Prism.highlightAll();
         }

     }
     else {
       //@ts-ignore
       Prism.highlightAll();
     }

   };
  });

</script>

  <div>
    <pre><code class="language-{language}">{code}</code></pre>
  </div>

<style>
    code
    {
        padding : 0;
        margin : 0;
    }

    div
    {
        animation-name: fade-in;
        animation-duration: 1s;
    }

    @keyframes fade-in 
    {
      0%  
      {
        opacity: 0%;
      }

      50%
      {
        opacity: 0%;
      }
      100%
      {
        opacity: 100%;
      }
    }
</style>