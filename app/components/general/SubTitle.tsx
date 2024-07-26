import { badScript } from "@/app/lib/fonts"

export default function SubTitle({ children, textColor, classNames } : {
  children: React.ReactNode,
  classNames?: string,
  textColor?: string
}) {

  return (
    <span className={`${badScript.className} ${ textColor ? 'text-' + textColor : 'text-pandoras-orange'} text-2xl max-lg:text-xl max-md:text-lg ${classNames}`}>
      {children}
    </span>
  )
}