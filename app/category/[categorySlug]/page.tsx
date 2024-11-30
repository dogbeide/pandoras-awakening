import BlogPostPreviewList from "@/app/components/blog/BlogPostPreviewList";
import Paginator from "@/app/components/blog/Paginator";
import { client } from "@/app/lib/apollo"
import { GET_BLOG_POST_PREVIEWS_AUTHOR, GET_BLOG_POST_PREVIEWS_CATEGORY, GET_CATEGORIES } from "@/app/lib/gql-queries";

export default async function Page({ params } : { 
  params : { 
    categorySlug: string,
  }
}) {
  const { categorySlug } = params;

  const response = await client.query({
    query: GET_CATEGORIES
  })

  const categories = response?.data?.categories?.nodes;
  const category = categories.find((category: any) => category.slug == categorySlug);
  const categoryId = category.categoryId;

  const response2 = await client.query({
    query: GET_BLOG_POST_PREVIEWS_CATEGORY,
    variables: { categoryId: categoryId },
  })

  const blogPostPreviews = response2?.data?.posts?.nodes;
  const pageInfo = response2?.data?.posts?.pageInfo;

  return (
    <>
      <Paginator {...pageInfo} />
      <BlogPostPreviewList blogPostPreviews={blogPostPreviews} />
      <Paginator {...pageInfo} />
    </>
  )
}