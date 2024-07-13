import { squarePeg } from "@/app/lib/fonts"

export default function Title({ href, classNames, children } : { 
  href?: string,
  classNames?: string,
  children: React.ReactNode,
}) {
  return (
    <div className="text-center">
      <a className={`inline-block ${squarePeg.className} ${href ? 'btn-cta-text' : ''} 
                    ${classNames}
                    text-center max-md:text-5xl text-6xl mb-5 max-sm:mb-6`}
      href={href}
      >
        {children}
      </a>
    </div>
    
  )
}