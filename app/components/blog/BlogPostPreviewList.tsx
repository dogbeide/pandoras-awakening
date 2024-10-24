import BlogPostPreview from "@/app/components/blog/BlogPostPreview";
import Section from "../general/Section";
import Title from "../text/Title";
import Paginator from "./Paginator";

export const dynamic = 'force-dynamic';

export default function BlogPostPreviewList({ blogPostPreviews } : any) {

  return (
    <Section classNames="bg-slate-100">
      {/* <Paginator /> */}
      <Title classNames="text-black">
        Quiet Storm&apos;s Corner
      </Title>
      <div className="flex flex-col items-start">
        {blogPostPreviews.map((post: any, idx: number) => (
          <BlogPostPreview key={idx} _key={idx} post={post} />
        ))}
      </div>
      {/* <Paginator /> */}
    </Section>
  )
}