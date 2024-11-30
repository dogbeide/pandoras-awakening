import BlogPostPreviewListContainer from "@/app/components/blog/BlogPostPreviewListContainer"

export default async function Page({ params } : { 
  params : { 
    authorSlug: string,
  }
}) {
  const { authorSlug } = params;

  return (
    <BlogPostPreviewListContainer authorSlug={authorSlug} />
  )
}