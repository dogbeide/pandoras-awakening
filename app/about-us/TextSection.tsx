

export default function TextSection({ children, textColor, classNames } : {
  children: React.ReactNode,
  classNames?: string,
  textColor?: string,
}) {

  return(
    <span className={`${classNames} ${textColor ? 'text-' + textColor : 'text-slate-200'} text-sm mt-5`}>
      {children}
    </span>
  )
}