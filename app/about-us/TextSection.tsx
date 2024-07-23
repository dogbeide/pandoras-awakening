

export default function TextSection({ children, classNames } : {
  children: React.ReactNode,
  classNames?: string,
}) {

  return(
    <span className={`${classNames} text-slate-200 mt-5`}>
      {children}
    </span>
  )
}