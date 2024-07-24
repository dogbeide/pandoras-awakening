import Image from "next/image"
import { resourceType } from "../lib/resources-data"

export default function ResourceItem({ resource, textColor } : { 
  resource: resourceType,
  textColor?: string,
}) {
  const { name, imgUrl, href } = resource;

  return (
    <div className="hover:bg-teal-500 hover:bg-opacity-35 rounded-sm p-3">
      <a href={href} className="flex flex-col items-center" target="_blank">
        <Image
          src={imgUrl}
          alt={name}
          width={300}
          height={300}
        />
        <span className={`${textColor ? 'text-' + textColor : 'text-pandoras-purple'} text-sm font-semibold text-center mt-2 hover:text-pandoras-orange`}>
          {name}
        </span>
      </a>
    </div>
  )
}