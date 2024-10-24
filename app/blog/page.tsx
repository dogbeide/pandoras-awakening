import { client } from "@/app/lib/apollo";

import { GET_BLOG_POST_PREVIEWS } from "@/app/lib/gql-queries";
import BlogPostPreviewList from "../components/blog/BlogPostPreviewList";
import Paginator from "../components/blog/Paginator";

export const dynamic = 'force-dynamic';

export default async function Page() {

  const response = await client.query({
    query: GET_BLOG_POST_PREVIEWS,
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