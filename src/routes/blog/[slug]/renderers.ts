import Code from '$lib/renderers/code.svelte';
import Heading from '$lib/renderers/heading.svelte';
import Paragraph from '$lib/renderers/paragraph.svelte';

let renderers =
{
    code : Code,
    heading : Heading,
    paragraph : Paragraph
}

export default renderers;