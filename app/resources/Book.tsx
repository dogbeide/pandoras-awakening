import Image from "next/image"
import { bookType } from "../lib/resources-data"

export default function Book({ book, textColor } : { 
  book: bookType,
  textColor?: string,
}) {
  const { title, imgUrl, href } = book;

  return (
    <div className="hover:bg-teal-500 hover:bg-opacity-35 rounded-sm p-3">
      <a href={href} className="flex flex-col items-center" target="_blank">
        <Image
          src={imgUrl}
          alt={title}
          width={200}
          height={300}
        />
        <span className={`${textColor ? 'text-' + textColor : 'text-pandoras-purple'} text-sm font-semibold text-center mt-2 hover:text-pandoras-orange`}>
          {title}
        </span>
      </a>
    </div>
  )
}