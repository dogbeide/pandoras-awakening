import Image from "next/image"

import styles from './banner.module.css';

// dancingscript-regular,dancing script,cursive
export default function Banner() {

  return (
    <div className={`${styles['banner-container']} -z-10`}>
      <Image
        src="/pexels-quang-nguyen-vinh-222549-6129569.jpg"
        alt="Pandora's Awakening banner"
        width={1349}
        height={400}
        className={`${styles['bg-image']} z-0`}
      />
      <div className={`${styles['vignette']} z-10`}></div>
    </div>
  )
  
}