

  export default function Paginator({ previousCursor, nextCursor, hasPreviousPage, hasNextPage} : {
    previousCursor?: string,
    nextCursor?: string,
    hasPreviousPage?: boolean,
    hasNextPage?: boolean
  }) {

    return (
      <div className="w-full place-items-center my-2">
        <div className="grid grid-cols-2 gap-1 text-center">
          <span className={`p-1 text-lg max-md:text-base max-sm:text-sm border border-solid 
            ${hasPreviousPage ? 
              'cursor-pointer text-pandoras-orange hover:text-pandoras-lavender border-slate-300 ' : 
              'text-slate-300 border-slate-200 '}`}>&larr;...Previous</span>
          <span className={`p-1 text-lg max-md:text-base max-sm:text-sm border border-solid 
            ${hasNextPage ? 
              'cursor-pointer text-pandoras-orange hover:text-pandoras-lavender border-slate-300 ' : 
              'text-slate-300 border-slate-200 '}`}>Next...&rarr;</span>
        </div>
      </div>
    )
  }