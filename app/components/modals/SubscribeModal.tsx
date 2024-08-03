'use client'

import { useEffect, useState } from "react"

import GeneralSubscribe from "./GeneralSubscribe";
import BtnCTA from "../buttons/btn-cta";
import { squarePeg } from "@/app/lib/fonts";

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
      <GeneralSubscribe
        imgUrl="/subscribe-modal-sun.webp"
        imgAlt="subscribe modal sun-hands-heart picture"
        isModal={true}
        handleCloseModal={handleCloseModal}
      >
        <div className={`${squarePeg.className} font-bold text-3xl pb-4`}>
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
            SIGN UP
          </BtnCTA>
        </form>
      </GeneralSubscribe>
    </div>
  )
}