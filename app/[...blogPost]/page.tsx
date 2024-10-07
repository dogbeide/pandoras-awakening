import { client } from "@/app/lib/apollo";
import { GET_BLOG_POST_DETAIL } from "@/app/lib/gql-queries";
import Image from "next/image";
import BlogPostDetail from "../components/blog/BlogPostDetail";

export default async function Page({ params } : { 
  params : { 
    blogPost: string[],
  }
}) {
  const slug = '/' + params.blogPost.join('/');

  const response = await client.query({
    query: GET_BLOG_POST_DETAIL,
    variables: { id: slug },
  })
  
  const blogPostDetail = response?.data?.post

  return (
    <div className="flex flex-row justify-center bg-slate-100">
      <BlogPostDetail post={blogPostDetail} />
    </div>
  )
}