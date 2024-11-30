import BlogPostPreviewListContainer from "@/app/components/blog/BlogPostPreviewListContainer";

export default async function Page({ params } : { 
  params : { 
    categorySlug: string,
  }
}) {
  const { categorySlug } = params;

  return (
    <BlogPostPreviewListContainer categorySlug={categorySlug} />
  )
}