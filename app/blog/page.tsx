import { client } from "@/app/lib/apollo";

import { GET_BLOG_POST_PREVIEWS } from "@/app/lib/gql-queries";
import BlogPostPreview from "@/app/components/blog/BlogPostPreview";
import Section from "../components/general/Section";
import Title from "../components/text/Title";

export const dynamic = 'force-dynamic';

export default async function Page() {

  const response = await client.query({
    query: GET_BLOG_POST_PREVIEWS,
  })

  const blogPostPreviews = response?.data?.posts?.nodes

  return (
    <Section classNames="bg-slate-100">
      <Title classNames="text-black">
        Quiet Storm&apos;s Corner
      </Title>
      <div className="flex flex-col items-start">
        {blogPostPreviews.map((post: any, idx: number) => (
          <BlogPostPreview key={idx} _key={idx} post={post} />
        ))}
      </div>
    </Section>
  )
}