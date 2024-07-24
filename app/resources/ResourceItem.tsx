import Image from "next/image"
import { resourceType } from "../lib/resources-data"

export default function ResourceItem({ resource } : { resource: resourceType }) {
  const { name, imgUrl, href } = resource;

  return (
    <div className="hover:bg-teal-500 hover:bg-opacity-35 rounded-sm p-3">
      <a href={href} className="flex flex-col items-center">
        <Image
          src={imgUrl}
          alt={name}
          width={300}
          height={300}
        />
        <span className="text-sm text-pandoras-purple font-semibold text-center mt-2 hover:text-pandoras-orange">
          {name}
        </span>
      </a>
    </div>
  )
}