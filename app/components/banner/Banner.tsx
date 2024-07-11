import Image from "next/image"
import { Dancing_Script, Just_Another_Hand } from "next/font/google"
import styles from './banner.module.css';

// dancingscript-regular,dancing script,cursive
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: '400' })
const justAnotherHand = Just_Another_Hand({ subsets: ["latin"], weight: "400" });

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
        <a href="https://calendly.com/holisticsextherapist" target='_blank' rel='noopener'>
          <button className={`schedule-btn mt-4 px-2 mr-6 ${justAnotherHand.className}`}>SCHEDULE APPOINTMENT</button>
        </a>
        
      </div>
    </div>
  )
  
}