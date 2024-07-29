

export default function ResourceList({ expanded, children } : {
  expanded: boolean,
  children: React.ReactNode
}) {

  return (
    <div className={`resource-list ${expanded ? 'expanded' : ''} 
                    grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[500px]:grid-cols-1 max gap-x-2 gap-y-3 [&>div]:col-span-1`}
    >
      {children}
    </div>
  )
}