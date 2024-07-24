import Image from "next/image";
import '@/app/components/buttons/btn-cta.css'

import { justAnotherHand } from "@/app/lib/fonts";

export default function TherapistCard({ name, href, imgUrl, alt, desc } : {
  name: string,
  imgUrl: string,
  alt?: string,
  href: string,
  desc?: string,
}) {

  return (
    <div className="flex flex-col text-center items-center">
      <a href={href}>
        <Image
          src={imgUrl}
          alt={alt ? alt : imgUrl.slice(1, imgUrl.indexOf('.'))}
          width={150}
          height={225}
          className="rounded-full btn-cta-img hover-orange" 
        />
      </a>
      <a className={`btn-cta-text hover:text-pandoras-orange text-3xl text-pandoras-purple mt-3 font-bold uppercase 
                      ${justAnotherHand.className} underline underline-offset-4`} 
        href={href}
      >
        {name}
      </a>
      {/* <hr className="bg-pandoras-purple h-1 my-3 w-full" /> */}
      <span className="text-base text-center text-pandoras-purple py-3 max-w-56 italic">
        {desc}
      </span>
    </div>
  )
}