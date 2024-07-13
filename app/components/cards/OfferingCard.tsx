import Image from "next/image";
import { justAnotherHand } from "@/app/lib/fonts";

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
          className="rounded-full btn-cta-img" 
        />
      </a>
      <div className="text-center flex flex-col">
        <a className={`btn-cta-text text-3xl text-pandoras-orange mt-3 font-bold uppercase ${justAnotherHand.className}`} href="/services/sex-therapy">
          {title}
        </a>
        <hr className="bg-pandoras-orange h-1 border-none my-3" />
        <span className="text-base text-slate-200">
          {desc}
        </span>
        <a className="btn-cta-text mt-6 text-pandoras-orange" href={href}>
          Learn More...
        </a>
      </div>
    </div>
  );
}
