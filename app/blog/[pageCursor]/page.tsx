import { client } from "@/app/lib/apollo";

import { GET_BLOG_POST_PREVIEWS } from "@/app/lib/gql-queries";
import BlogPostPreviewList from "@/app/components/blog/BlogPostPreviewList";
import Paginator from "@/app/components/blog/Paginator";
import BlogPostPreviewListContainer from "@/app/components/blog/BlogPostPreviewListContainer";

export const dynamic = 'force-dynamic';

export default async function Page({ params } : {
  params: {
    pageCursor: string
  }
}) {
  const { pageCursor } = params;

  return (
    <BlogPostPreviewListContainer pageCursor={pageCursor} />
  )
}