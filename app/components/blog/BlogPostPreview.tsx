// 'use client'

import Image from "next/image";

export default function BlogPostPreview({ _key, post } : {
  _key: number,
  post: any,
}) {

  const { title, date, author: { node: { name } }, excerpt } = post;
  const sourceUrl = post.featuredImage?.node?.sourceUrl

  const coolDate = new Date(date)
  const coolDateStr = coolDate.toUTCString().split(' ').slice(0, -2).join(' ')
  
  const isEven = _key % 2 == 0

  return (
    <div className={`block pb-8 ${isEven ? 'bg-white' : 'bg-slate-100'} py-4 px-2 hover:bg-pandoras-orange-10 transition-all duration-200`}>
      <a className="block text-xl text-pandoras-orange font-bold mb-4 hover:cursor-pointer hover:text-pandoras-lavender">
        {title}
      </a>
      <div className="text-[14px] mb-4">
        <span className="text-gray-400">{coolDateStr.toUpperCase()} - </span>
        <span></span>
        <a href="#" className="hover:text-pandoras-lavender">{name}</a>
      </div>
      <div className="grid grid-cols-5 max-md:flex max-md:flex-col">
        <a href="#" className="col-span-2">
          <Image
            className="hover:border-[1px] hover:border-pandoras-lavender m-[1px] hover:rounded-sm hover:m-y-[0] transition-all duration-50"
            src={sourceUrl}
            height={150}
            width={300}
            alt={title + ' - Image'}
          />
        </a>
        <div className="text-[16px] text-black my-1 pl-4 max-md:pl-0 max-md:pt-2 col-span-3" dangerouslySetInnerHTML= {{ __html: excerpt }}></div>
      </div>
      {/* <hr className="bg-slate-400 h-[1px] mt-7 bg-opacity-30 rounded-sm" /> */}
    </div>
  )
}