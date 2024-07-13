import Image from "next/image"
import { dancingScript } from "@/app/lib/fonts";

import BtnCTA from "../buttons/btn-cta";
import styles from './banner.module.css';

export default function Banner() {

  return (
    <div className={`${styles['banner-container']}`}>
      <Image
        src="/pexels-quang-nguyen-vinh-222549-6129569.jpg"
        alt="Pandora's Awakening banner"
        width={1349}
        height={400}
        className={`${styles['bg-image']} z-0`}
      />
      <div className={`${styles['vignette']} z-10`}></div>
      <div className={`${dancingScript.className} z-20 text-2xl absolute top-0 flex flex-col justify-center items-center text-center text-white w-full h-full `}>
        <span className={`${styles['text-shadow']}`}>Find the Hope You&apos;re Looking For</span>
        <BtnCTA classNames="px-2 mt-4 mr-6" href="https://calendly.com/holisticsextherapist" target="_blank">
          SCHEDULE APPOINTMENT
        </BtnCTA>
        
      </div>
    </div>
  )
  
}