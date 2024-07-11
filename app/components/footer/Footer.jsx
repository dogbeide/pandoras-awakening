import Image from 'next/image'
import { Bad_Script, Just_Another_Hand } from 'next/font/google'

const neucha = Just_Another_Hand({ subsets: ["latin"], weight: "400" });

import SocialIcons from '../navbar/SocialIcons'
import './footer.css'

export default function Footer() {
  return(
    <div id="footer" className={`${neucha.className} tracking-wider flex flex-row max-md:flex-col justify-center items-center py-3 text-white max-md:text-sm max-sm:text-xs`}>
      <div className='px-3 max-md:my-3'>
        <Image className='min-w-28 min-h-16' src="/logo-white.webp" alt="pandoras logo white" width={113} height={64} />
      </div>
      <div className='px-3 max-md:my-3 flex flex-col justify-start w-72 h-20 max-md:h-auto text-left max-md:text-center'>
        <a className='underline' href='tel:+16153756896'>Tel: (615) 375-6896</a>
        <span className='break-all'>contact@pandorasawakening.com</span>
        <span>12000 Biscayne Blvd, Miami, FL 33181</span>
      </div>
      <div className='px-3 max-md:my-2 flex flex-col justify-start w-72 h-20 max-md:h-auto text-left max-md:text-center'>
        {/* <span className='font-bold mb-2 max-md:mb-0'>Location</span> */}
        <span>COVID 19: We are following all CDC guidelines</span>
      </div>
      <div>
        
      </div>
      <div className='flex flex-col px-3 justify-start items-center'>
        <SocialIcons />
        <a href="https://providers.therapyforblackgirls.com/listing/pandoras-awakening/">
          <Image className='mt-4' src="/TFBG-Logo-Wine.webp" alt='Therapy for Black Girls' width={64} height={64} />
        </a>
      </div>
      
    </div>
  )
}