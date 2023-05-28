<script>
	import PictureGrid from "$lib/components/pictureGrid.svelte";

</script>
<svelte:head><title>About - Jef Meijvis</title></svelte:head>

<img loading="lazy" src="/profile-picture.png" alt="profile"/>


<h1>About me</h1>
<p>
    My name is Jef. I'm a software security engineer, focusing mostly on the C# / Dotnet / Azure ecosystem. 
    I work as a consultant at <a rel=noreferrer href="https://www.dotnetlab.eu">DotnetLab</a>, a company focussing on Microsoft technologies.
    This blog will be used to post anything related to Dotnet development and Azure!</p>
  <p>
    I'm a Microsoft Certified Trainer (MCT) and enjoy giving talks!
  </p>

  <h1>About the website</h1>
  <p>If you want more information about how the website and blog are build, there is <a href="/blog/009-building-the-blog">a blogpost</a> that describes the entire stack on which this site is build.</p>

  <h1>Pictures</h1>
  <PictureGrid></PictureGrid>
  

  <style>
      p
      {
          font-weight: 300;
      }

      img
      {
        display: block;
        margin:auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      h1
      {
        margin-top: 2rem;
      }
  </style>