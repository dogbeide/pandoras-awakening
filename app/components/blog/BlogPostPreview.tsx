// 'use client'

import Image from "next/image";
import Link from "next/link";

export default function BlogPostPreview({ _key, post } : {
  _key: number,
  post: any,
}) {

  const { title, date, uri, author: { node: { name } }, excerpt } = post;
  const sourceUrl = post.featuredImage?.node?.sourceUrl

  const coolDate = new Date(date)
  const coolDateStr = coolDate.toUTCString().split(' ').slice(0, -2).join(' ')

  const isEven = _key % 2 == 0

  return (
    <div className={`w-[100%] pb-8 ${isEven ? 'bg-white' : 'bg-slate-100'} py-4 px-2 hover:bg-pandoras-orange-10 transition-all duration-200`}>
      <Link href={{
        pathname: uri,
      }} className="block text-xl text-pandoras-orange font-bold mb-4 hover:cursor-pointer hover:text-pandoras-lavender">
        {title}
      </Link>
      <div className="text-[14px] mb-4">
        <span className="text-gray-400">{coolDateStr.toUpperCase()} - </span>
        <span></span>
        <Link href="#" className="hover:text-pandoras-lavender">{name}</Link>
      </div>
      <div className="grid grid-cols-5 max-md:flex max-md:flex-col">
        <Link href={{
          pathname: uri,
        }} className="col-span-2">
          <Image
            className="hover:border-[1px] hover:border-pandoras-lavender m-[1px] hover:rounded-sm hover:m-y-[0] transition-all duration-50"
            src={sourceUrl}
            height={150}
            width={300}
            alt={title + ' - Image'}
          />
        </Link>
        <div className="text-[16px] text-black my-1 pl-4 max-md:pl-0 max-md:pt-2 col-span-3" dangerouslySetInnerHTML= {{ __html: excerpt }}></div>
      </div>
    </div>
  )
}