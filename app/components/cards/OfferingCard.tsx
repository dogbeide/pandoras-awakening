import Image from "next/image";
import { justAnotherHand } from "@/app/lib/fonts";
import '@/app/components/buttons/btn-cta.css'

export default function OfferingCard({ href, title, desc, imgUrl } : {
  href: string,
  title: string,
  desc: string,
  imgUrl: string,
}) {
  return (
    <div className="flex flex-col items-center my-1 py-3 px-5 bg-pink-200 bg-opacity-10 rounded-sm">
      <a href={href}>
        <Image 
          src={imgUrl}
          alt={title}
          width={150}
          height={150}
          className="rounded-full btn-cta-img hover-slate-200" 
        />
      </a>
      <div className="text-center flex flex-col">
        <a className={`btn-cta-text hover:text-slate-200 text-3xl text-pandoras-orange mt-3 font-bold uppercase 
                      ${justAnotherHand.className}`}
          href={href}>
          {title}
        </a>
        <hr className="bg-pandoras-orange h-1 border-none my-3" />
        <span className="text-sm text-slate-200">
          {desc}
        </span>
        <a className="btn-cta-text hover:text-slate-200 mt-6 text-pandoras-orange" href={href}>
          Learn More...
        </a>
      </div>
    </div>
  );
}
