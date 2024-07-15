import { squarePeg } from "@/app/lib/fonts"

export default function Title({ href, classNames, textSizes, children } : { 
  href?: string,
  classNames?: string,
  textSizes?: string,
  children: React.ReactNode,
}) {

  const textTag = href ? `a` : `span`
  return (
    <div className="text-center">
      {href ?
        <a className={`inline-block ${squarePeg.className} 'btn-cta-text' 
                      ${classNames} mb-5 max-sm:mb-6
                      text-center ${textSizes || 'text-6xl max-md:text-5xl'}`}
          href={href}
        >
          {children}
        </a> :
        <span className={`inline-block ${squarePeg.className} 'btn-cta-text' 
                      ${classNames} mb-5 max-sm:mb-6
                      text-center ${textSizes || 'text-6xl max-md:text-5xl'}`}
        >
          {children}
        </span> 
      }
    </div>
    
  )
}