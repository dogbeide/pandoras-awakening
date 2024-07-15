import Image from "next/image"

import { justAnotherHand } from "../lib/fonts"

export default function RetreatActivityCard({
  title,
  desc,
  imgUrl,
  imgAlt,
  classNames,
  color,
} : {
  title: string,
  desc: string,
  imgUrl: string,
  imgAlt: string,
  classNames?: string,
  color?: string
}) {

  const textColor = `text-${color}`
  const bgColor = `bg-${color}`
  
  return (
    <div className="relative col-span-1 flex flex-col text-center overflow-clip max-[420px]:h-72">
      <Image className="z-0"
        src={imgUrl}
        alt={imgAlt}
        width={420}
        height={525}
      />
      <div className="absolute top-0 z-10 h-full grid grid-rows-4 
        bg-slate-800 bg-opacity-50 px-2"
      >
        <div className="row-span-1"></div>
        <div className={`row-span-3 flex flex-col text-center justify-start 
          ${classNames} brightness-125`}
        >
          <span className={`${justAnotherHand.className}  
            max-sm:text-3xl max-lg:text-2xl text-3xl pb-2 uppercase`}
          >
            {title}
          </span>
          <span className="text-sm max-sm:text-base">
            {desc}
          </span>
        </div>
      </div>
    </div>
  )
}