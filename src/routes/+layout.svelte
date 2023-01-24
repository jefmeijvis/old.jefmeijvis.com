<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Meta from "$lib/components/meta.svelte";
	import Navbar from "$lib/components/navbar/navbar.svelte";
    export let data : any;
</script>

<Meta/>
<div class="content-wrapper">
    <Navbar></Navbar>
    <div class="content">
        <slot/>
    </div>
    <Footer timestamp={data.timestamp}></Footer>
</div>

<style>
    .content-wrapper
    {
        background-color: var(--color-background);
    }
    .content
    {
        padding : 1rem;
        padding-top: 1.5rem;
        padding-bottom: 0;
        margin:auto;
        width: 60rem;
        min-height : 100vh;
        position: relative;
    }

    @media (max-width: 60rem) 
    {
        .content
        {
            width: calc(100% - 2rem);
        }

        .content-wrapper
        {
            width: 100%;
        }
    }


</style>