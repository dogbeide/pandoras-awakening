import Image from 'next/image'

import './footer.css'
import SocialIcons from '../navbar/SocialIcons'

export default function Footer() {
  return(
    <div id="footer" className='flex flex-row max-md:flex-col justify-center items-center py-3 text-white max-md:text-sm max-sm:text-xs'>
      <div className='px-3'>
        <Image className='min-w-28 min-h-16' src="/logo-white.webp" alt="pandoras logo white" width={113} height={64} />
      </div>
      <div className='px-3 max-md:my-2 flex flex-col justify-start w-72 h-20 max-md:h-auto text-left max-md:text-center'>
        <span className='font-bold mb-2 max-md:mb-0'>Location</span>
        <span>12000 Biscayne Blvd, Miami, FL 33181</span>
      </div>
      <div className='px-3 max-md:my-2 flex flex-col justify-start w-72 h-20 max-md:h-auto text-left max-md:text-center'>
        <span className='font-bold mb-3 max-md:mb-0'>Contact</span>
        <span>(615) 375-6896</span>
        <span className='break-all'>contact@pandorasawakening.com</span>
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