import Image from "next/image"
import Link from "next/link";

export default function BlogPostDetail({ post } : {
  post: any,
}) {

  const { title, date, content, author: { node: { name, slug: authorSlug } }, categories: { nodes: categoryNodes } } = post;
  const category:string = categoryNodes[0].name;
  const categoryUri:string = categoryNodes[0].uri
  const sourceUrl = post.featuredImage?.node?.sourceUrl;

  const coolDate = new Date(date)
  const coolDateStr = coolDate.toUTCString().split(' ').slice(0, -2).join(' ')

  return (
    <div className={`max-w-[768px]`}>

      {/* header */}
      <div className="bg-slate-100 pt-4 pb-2 px-4">
        <div className="flex flex-row">
          <Image 
            className="rounded-full w-[46px] h-[46px]"
            src='/user image.png'
            width={46}
            height={46}
            alt={name + " user image"}
          />
          <div className="mb-4 ml-3">
            <Link href={`/author/${authorSlug}`} className="text-[14px] mb-4 hover:text-pandoras-lavender">{name}</Link>
            <div className="text-[12px]">
              <span className="text-gray-400">{coolDateStr.toUpperCase()} - </span>
              <span className="text-gray-400">PUBLISHED IN </span>
              <Link href={categoryUri} className="text-black hover:text-pandoras-lavender">{category.toUpperCase()}</Link>
            </div>
          </div>
        </div>

        <div className="text-[24px] max-md:text-xl text-black font-bold mb-3 max-md:mb-2">{title}</div>
      </div>

      {/* content */}
      <div className="bg-pandoras-orange-10 px-4 mx-1 py-4 pb-8">
        <Image
          className="m-[1px] inline float-left mr-4 max-md:block max-md:float-none"
          src={sourceUrl}
          height={200}
          width={400}
          alt={title + ' - Image'}
        />
        <span className="text-[16px] text-black my-1 max-md:pl-0 max-md:pt-2 col-span-3 leading-7" dangerouslySetInnerHTML= {{ __html: content }} />
      </div>
      
    </div>
  )
}