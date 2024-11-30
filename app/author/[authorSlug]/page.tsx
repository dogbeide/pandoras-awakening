import BlogPostPreviewList from "@/app/components/blog/BlogPostPreviewList";
import Paginator from "@/app/components/blog/Paginator";
import { client } from "@/app/lib/apollo"
import { GET_BLOG_POST_PREVIEWS_AUTHOR, GET_PUBLISHED_AUTHORS } from "@/app/lib/gql-queries";

export default async function Page({ params } : { 
  params : { 
    authorSlug: string,
  }
}) {
  const { authorSlug } = params;

  const response = await client.query({
    query: GET_PUBLISHED_AUTHORS
  })
  
  const users = response?.data?.users?.edges;
  const user = users.find((user: any) => user.node.slug == authorSlug);
  const authorId = user.node.id;

  const response2 = await client.query({
    query: GET_BLOG_POST_PREVIEWS_AUTHOR,
    variables: { authorId: authorId },
  })

  const blogPostPreviews = response2?.data?.posts?.nodes
  const pageInfo = response2?.data?.posts?.pageInfo

  return (
    <>
      <Paginator {...pageInfo} />
      <BlogPostPreviewList blogPostPreviews={blogPostPreviews} />
      <Paginator {...pageInfo} />
    </>
  )
}