import { justAnotherHand } from '@/app/lib/fonts';

import './btn-cta.css'

type btnCTATypes = {
  classNames?: string,
}

export default function BtnCTA({
  classNames,
  href,
  target="_self",
  fontSize='18px',
  type='button',
  ariaLabel,
  ariaDisabled,
  children
} : {
  classNames?: string,
  href?: string,
  target?: string,
  fontSize?: string,
  type?: "button" | "submit" | "reset" | undefined,
  ariaLabel?: string,
  ariaDisabled?: string,
  children: React.ReactNode
}) {
  return (
    <a aria-label={ariaLabel} href={href} target={target} rel='noopener'>
      <button 
        className={`btn-cta px-2 text-nowrap ${justAnotherHand.className} ${classNames}`}
        style={{fontSize: fontSize}}
        type={type}
        aria-disabled={ariaDisabled || false}
      >
        {children}
      </button>
    </a>
  )
}