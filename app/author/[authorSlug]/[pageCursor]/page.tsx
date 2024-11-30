import BlogPostPreviewListContainer from "@/app/components/blog/BlogPostPreviewListContainer";

export const dynamic = 'force-dynamic';

export default async function Page({ params } : {
  params: {
    authorSlug: string,
    pageCursor: string,
  }
  // params: any
}) {
  const { authorSlug, pageCursor } = params;

  return (
    <BlogPostPreviewListContainer pageCursor={pageCursor} authorSlug={authorSlug} />
  )
}