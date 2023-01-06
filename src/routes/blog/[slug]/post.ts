export type Post = 
{
    id : number,
    author : string,
    filename : string,
    slug : string,
    rawMarkdown : string,
    markdown : string,
    date : string,
    tableOfContents : {}[],
    image : string,
    title : string,
    description : string,
    tags : string[]

}