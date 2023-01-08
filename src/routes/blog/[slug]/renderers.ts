import Code from '$lib/renderers/code.svelte';
import Heading from '$lib/renderers/heading.svelte';
import List from '$lib/renderers/list.svelte';
import ListItem from '$lib/renderers/listItem.svelte';
import Paragraph from '$lib/renderers/paragraph.svelte';

let renderers =
{
    code : Code,
    heading : Heading,
    paragraph : Paragraph,
    list : List,
    listItem : ListItem
}

export default renderers;