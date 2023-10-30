<script>
	import PictureGrid from "$lib/components/pictureGrid.svelte";

</script>
<svelte:head><title>About - Jef Meijvis</title></svelte:head>

<img loading="lazy" src="/profile-picture.png" alt="profile"/>


<h1>About me</h1>
<p>
    My name is Jef. I'm a software security engineer, focusing mostly on the C# / Dotnet / Azure ecosystem. 
    I work as a cybersecurity consultant at <a rel=noreferrer href="https://www.dotnetlab.eu">DotnetLab</a>, a company focussing on Microsoft technologies.
    This blog will be used to post anything related to Cybersecurity, Dotnet development and Azure!</p>
  <p>
    I am a Microsoft Certified Trainer (MCT) since 2021, and enjoy giving talks!
  </p>

  <div class="badge-container">
    <img class="mct-badge" title="Microsoft Certified Trainer Badge 2021" alt="Microsoft Certified Trainer Badge 2021" src="/mct-2021.png">
    <img class="mct-badge" title="Microsoft Certified Trainer Badge 2022" alt="Microsoft Certified Trainer Badge 2022" src="/mct-2022.png">
    <img class="mct-badge" title="Microsoft Certified Trainer Badge 2023" alt="Microsoft Certified Trainer Badge 2023" src="/mct-2023.png">
  </div>

  <h1>About the website</h1>
  <p>If you want more information about how the website and blog are build, there is <a href="/blog/009-building-the-blog">a blogpost</a> that describes the entire stack on which this site is build.</p>

  <h1>Pictures</h1>
  <PictureGrid></PictureGrid>
  

  <style>
      .badge-container
      {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .mct-badge
      {
        width : 20%;
      }
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

      @media (max-width: 60rem) 
      {
        .mct-badge
        {
          width : 50%;
        }
      }
  </style>