

export default function PageHeader({ type, name } : {
  type: string,
  name: string,
}) {

  return (
    <div className="flex flex-row justify-center text-xl my-3">
      <span className="text-pandoras-lavender-50">(</span>
      <span className="font-bold">{type}:&nbsp;</span>
      <span className="text-pandoras-purple">{name}</span>
      <span className="text-pandoras-lavender-50">)</span>
    </div>
  )
}