import Image from "next/image"
import { MouseEventHandler } from "react"
import styles from '@/app/components/banner/banner.module.css'

export default function GeneralSubscribe({
  isModal=false,
  handleCloseModal,
  imgUrl,
  imgAlt,
  children
} : {
  isModal?: boolean,
  handleCloseModal?: MouseEventHandler,
  imgUrl: string,
  imgAlt: string,
  children: React.ReactNode
}) {

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 grid-flow-row max-w-[818px] max-md:h-[70%] max-md:overflow-scroll">
      <div className="col-span-1 p-7 flex flex-col justify-start max-w-[409px] bg-slate-50 bg-opacity-60 text-wrap">
        {children}
      </div>

      <div className="relative col-span-1 max-w-[409px] max-h-[360px] overflow-y-hidden">
        {isModal && <span className={`absolute top-0 right-0 py-4 px-5 text-6xl
                      hover:text-white transition-all duration-150 cursor-pointer`}
              onClick={handleCloseModal}
        >
          X
        </span>}
        <Image
          className={`object-cover min-h-[480px]`}
          src={imgUrl}
          alt={imgAlt}
          width={409}
          height={480}
        />
      </div>
    </div>
  )
}