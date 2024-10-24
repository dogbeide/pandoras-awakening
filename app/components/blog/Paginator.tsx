import Link from "next/link"

  export default function Paginator({ startCursor, endCursor, hasPreviousPage, hasNextPage} : {
    startCursor?: string,
    endCursor?: string,
    hasPreviousPage?: boolean,
    hasNextPage?: boolean
  }) {

    return (
      <div className="w-full place-items-center my-2">
        <div className="grid grid-cols-2 gap-1 text-center">
          {/* <Link href={`/blog/${startCursor}`} aria-disabled={!hasPreviousPage} className={`p-1 text-lg max-md:text-base max-sm:text-sm border border-solid 
            ${hasPreviousPage ? 
              'cursor-pointer text-pandoras-orange hover:text-pandoras-lavender border-slate-300 ' : 
              'cursor-default pointer-events-none text-slate-300 border-slate-200 '}`}>&larr;...Previous
          </Link> */}
          
          <Link href={`/blog/${endCursor}`} aria-disabled={!hasNextPage} className={`p-1 text-lg max-md:text-base max-sm:text-sm border border-solid 
            ${hasNextPage ? 
              'cursor-pointer text-pandoras-orange hover:text-pandoras-lavender border-slate-300 ' : 
              'cursor-default pointer-events-none text-slate-300 border-slate-200 '}`}>Next...&rarr;
          </Link>
        </div>
      </div>
    )
  }