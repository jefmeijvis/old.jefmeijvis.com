<script lang="ts">
    import NavbarLink from "./navbarLink.svelte";
	import MobileMenuButton from "./mobileMenuButton.svelte";
</script>

<nav>
    <div>
        <NavbarLink href="/">HOME</NavbarLink>
        <NavbarLink href="/blog">BLOG</NavbarLink>
        <NavbarLink href="/resources">RESOURCES</NavbarLink>
        <NavbarLink href="/about">ABOUT</NavbarLink>
        <NavbarLink href="/contact">CONTACT</NavbarLink>
        <MobileMenuButton></MobileMenuButton>
    </div>
</nav>

<style>


    div
    {
        margin:auto;
        width : 61rem;
        height : 1rem;
    }
    nav
    {
        width: 100%;
        height : 5rem;
        background-color: var(--color-accent);
        color:white;
    }

    @media (max-aspect-ratio: 1/1) 
    {
    
        div 
        {
            width : auto;
        }
    }

    @media (max-width : 60rem) 
    {
    
        div 
        {
            margin-left: 5%;
        }
    }
</style>