import { squarePeg } from "@/app/lib/fonts"

export default function Title({ href, children } : { 
  href?: string,
  children: React.ReactNode,
}) {
  return (
    <div className="content-center">
      <a className={`${squarePeg.className} ${href ? 'btn-cta-text' : ''} 
                  text-center max-md:text-5xl text-6xl text-slate-100 mb-5 max-sm:mb-6`}
      href={href}
      >
        {children}
      </a>
    </div>
    
  )
}