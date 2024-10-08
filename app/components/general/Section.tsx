import { montserrat } from "@/app/lib/fonts"

export default function Section({ id, classNames, children } : {
  id?: string,
  classNames?: string,
  children: React.ReactNode,
}) {
  return (
    <div id={id}
      className={`flex flex-col items-center justify-center px-20 max-md:px-10 max-sm:px-6 py-7 
                ${montserrat.className} ${classNames}`}
    >
      {children}
    </div>
  )
}