import { client } from "@/app/lib/apollo";
import { GET_BLOG_POST_DETAIL } from "@/app/lib/gql-queries";
import Image from "next/image";
import BlogPostDetail from "../components/blog/BlogPostDetail";
import BtnCTA from "../components/buttons/btn-cta";

export const dynamic = 'force-dynamic';

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
    <div className="flex flex-col items-center bg-slate-100">
      <BlogPostDetail post={blogPostDetail} />
      <BtnCTA classNames="my-2" fontSize="24px" href="/blog">Back to Blog</BtnCTA>
    </div>
  )
}