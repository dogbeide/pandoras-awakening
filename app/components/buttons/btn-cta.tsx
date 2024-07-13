import { justAnotherHand } from '@/app/lib/fonts';

// import './btn-cta.css'

type btnCTATypes = {
  classNames?: string,
}

export default function BtnCTA({ classNames, href, target="_self", fontSize='18px', children } : {
  classNames?: string,
  href?: string,
  target?: string,
  fontSize?: string,
  children: React.ReactNode
}) {
  return (
    <a href={href} target={target} rel='noopener'>
      <button 
        className={`btn-cta px-2 text-nowrap ${justAnotherHand.className} ${classNames}`}
        style={{fontSize: fontSize}}
      >
        {children}
      </button>
    </a>
  )
}