import { client } from "@/app/lib/apollo";
import { GET_BLOG_POST_PREVIEWS, GET_BLOG_POST_PREVIEWS_AUTHOR, GET_BLOG_POST_PREVIEWS_CATEGORY, GET_CATEGORIES, GET_PUBLISHED_AUTHORS } from "@/app/lib/gql-queries";
import Paginator from "./Paginator";
import BlogPostPreviewList from "./BlogPostPreviewList";

export default async function BlogPostPreviewListContainer({ pageCursor, authorSlug, categorySlug } : {
  pageCursor?: string,
  authorSlug?: string,
  categorySlug?: string
}) {
  const queryObject:any = {};
  queryObject["variables"] = {};

  if (pageCursor) {
    queryObject["variables"]["after"] = pageCursor;
  }

  if (authorSlug) {
    const response0 = await client.query({
      query: GET_PUBLISHED_AUTHORS
    })

    const users = response0?.data?.users?.edges;
    const user = users.find((user: any) => user.node.slug == authorSlug);
    const authorId = user.node.id;

    queryObject["query"] = GET_BLOG_POST_PREVIEWS_AUTHOR;
    queryObject["variables"]["authorId"] = authorId;

  } else if (categorySlug) {
    const response0 = await client.query({
      query: GET_CATEGORIES
    })
    
    const categories = response0?.data?.categories?.nodes;
    const category = categories.find((category: any) => category.slug == categorySlug);
    const categoryId = category.categoryId;

    queryObject["query"] = GET_BLOG_POST_PREVIEWS_CATEGORY;
    queryObject["variables"]["categoryId"] = categoryId;
  } else {
    queryObject["query"] = GET_BLOG_POST_PREVIEWS;
  }

  const response = await client.query(queryObject)

  const blogPostPreviews = response?.data?.posts?.nodes.filter((post:any) => post.author.node.name != "Jae Porter")
  const pageInfo = response?.data?.posts?.pageInfo

  return (
    <>
      <Paginator {...pageInfo} authorSlug={authorSlug} categorySlug={categorySlug} />
      <BlogPostPreviewList blogPostPreviews={blogPostPreviews} />
      <Paginator {...pageInfo} authorSlug={authorSlug} categorySlug={categorySlug} />
    </>
  )
}