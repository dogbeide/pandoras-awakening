import { client } from "@/app/lib/apollo";

import { GET_BLOG_POST_PREVIEWS } from "@/app/lib/gql-queries";
import BlogPostPreviewList from "@/app/components/blog/BlogPostPreviewList";
import Paginator from "@/app/components/blog/Paginator";

export const dynamic = 'force-dynamic';

export default async function Page({ params } : {
  params: {
    pageCursor: string
  }
}) {
  const { pageCursor } = params;

  const response = await client.query({
    query: GET_BLOG_POST_PREVIEWS,
    variables: { after: pageCursor },
  })

  const blogPostPreviews = response?.data?.posts?.nodes.filter((post:any) => post.author.node.name != "Jae Porter")
  const pageInfo = response?.data?.posts?.pageInfo

  return (
    <>
      <Paginator {...pageInfo} />
      <BlogPostPreviewList blogPostPreviews={blogPostPreviews} />
      <Paginator {...pageInfo} />
    </>
  )
}