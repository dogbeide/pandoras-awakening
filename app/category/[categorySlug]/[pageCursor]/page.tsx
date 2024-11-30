import BlogPostPreviewListContainer from "@/app/components/blog/BlogPostPreviewListContainer";

export default function Page({ params } : {
  params: {
    categorySlug: string,
    pageCursor: string,
  }
}) {
  const { categorySlug, pageCursor } = params;

  return (
    <BlogPostPreviewListContainer categorySlug={categorySlug} pageCursor={pageCursor} />
  )
}