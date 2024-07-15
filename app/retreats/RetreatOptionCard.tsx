import { justAnotherHand } from "../lib/fonts"

export default function RetreatOptionCard({
  title,
  // desc,
  desc,
} : {
  title: string,
  // desc?: Array<string | Array<string>>,
  desc?: React.ReactNode,
}) {

  return (
    <div className="col-span-1 bg-pink-200 bg-opacity-10 px-2 py-3 rounded-sm">
      <div className={`${justAnotherHand.className} text-pandoras-orange uppercase text-2xl mb-2`}>
        {title}
      </div>
      <div className={`text-slate-200 text-sm flex flex-row justify-center`}>
        {desc}
      </div>
    </div>
  )
}