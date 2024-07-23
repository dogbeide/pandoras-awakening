'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { squarePeg } from "@/app/lib/fonts"
import BtnCTA from "../buttons/btn-cta";

export default function SubscribeModal() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalIsOpen(true)
    }, 5000)
  }, [])

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className={`top-0 z-50 bg-slate-200 bg-opacity-80 w-full h-full 
                    flex justify-center items-center
                    ${modalIsOpen ? 'fixed' : 'hidden'}`}
    >
      {/* <div className="relative max-w-[818px] "> */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 grid-flow-row max-w-[818px] max-md:h-[70%] max-md:overflow-scroll">

          <div className="col-span-1 p-7 flex flex-col justify-start max-w-[409px] bg-slate-50 bg-opacity-60 text-wrap">
            <div className={`${squarePeg.className} font-bold text-5xl pb-4`}>
              Get the Latest News to Your Inbox!
            </div>
            <div>
              Subscribe to our newsletter to receive news and updates.
            </div>
            <form action="" method="POST" className="mt-3 flex flex-col">
              <div>
                <label htmlFor="email" className="mr-2 font-bold">Email:</label>
                <input type="email" name="email" id="subscribe-email" className="px-1" />
              </div>
              <BtnCTA type="submit" classNames="text-white text-2xl mt-5 w-24">
                Sign Up
              </BtnCTA>
            </form>
          </div>

          <div className="relative col-span-1 max-w-[409px]">
            <span className={`absolute top-0 right-0 py-4 px-5 text-6xl
                          hover:text-white transition-all duration-150 cursor-pointer`}
                  onClick={handleCloseModal}
            >
              X
            </span>
            <Image
              src='/subscribe-modal-sun.webp'
              alt='subscribe modal sun-hands-heart picture'
              width={409}
              height={480}
            />
          </div>

        </div>

      </div>
    // </div>
  )
}