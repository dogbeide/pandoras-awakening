import { squarePeg } from "@/app/lib/fonts"

export default function Title({ href, classNames, textSizes, children } : { 
  href?: string,
  classNames?: string,
  textSizes?: string,
  children: React.ReactNode,
}) {

  return (
    <div className="text-center">
      {href ?
        <a className={`inline-block ${squarePeg.className} 'btn-cta-text' 
                      ${classNames} mb-5 max-sm:mb-6
                      text-center ${textSizes ? textSizes : 'text-4xl max-md:text-3xl'}`}
          href={href}
        >
          {children}
        </a> :
        <span className={`inline-block ${squarePeg.className} 'btn-cta-text' 
                      ${classNames} mb-5 max-sm:mb-6
                      text-center ${textSizes ? textSizes : 'text-4xl max-md:text-3xl'}`}
        >
          {children}
        </span> 
      }
    </div>
    
  )
}